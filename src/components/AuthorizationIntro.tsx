"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useAuthorizationTransition } from "@/components/AuthorizationTransition";

const IDLE_FLOAT = {
  y: ["-7%", "7%"],
  transition: {
    y: {
      duration: 1.8,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  },
};

const IDLE_ROTATION = {
  rotateX: [-8, -9.5],
  rotateY: [-7, -37],
  rotateZ: [-1, -0.4],
  transition: {
    rotateX: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
    rotateY: {
      duration: 6.4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
    rotateZ: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  },
};

const IDLE_SHADOW = {
  opacity: [0.2, 0.34],
  scale: [0.84, 1],
  transition: {
    opacity: {
      duration: 1.8,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
    scale: {
      duration: 1.8,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  },
};

export default function AuthorizationIntro() {
  const { phase, authorize } = useAuthorizationTransition();
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;
  const isTransitioning = phase !== "idle";
  const [isHovered, setIsHovered] = useState(false);
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);
  const bookOpen = isHovered || isPinnedOpen;
  const floatControls = useAnimationControls();
  const rotationControls = useAnimationControls();
  const coverControls = useAnimationControls();
  const shadowControls = useAnimationControls();
  const bookOpenRef = useRef(bookOpen);
  const transitionRef = useRef(isTransitioning);
  const mountedRef = useRef(false);
  bookOpenRef.current = bookOpen;
  transitionRef.current = isTransitioning;

  const startIdleRotation = useCallback(() => {
    if (!mountedRef.current) return;

    if (reduceMotion || transitionRef.current || bookOpenRef.current) {
      return rotationControls.start({ rotateX: -8, rotateY: -22, rotateZ: -1 });
    }

    return rotationControls
      .start({
        rotateX: -8,
        rotateY: -7,
        rotateZ: -1,
        transition: { duration: 1.25, ease: "easeInOut" },
      })
      .then(() => {
        if (mountedRef.current && !transitionRef.current && !bookOpenRef.current) {
          return rotationControls.start(IDLE_ROTATION);
        }
      });
  }, [reduceMotion, rotationControls]);

  useEffect(() => {
    if (reduceMotion) {
      floatControls.set({ y: 0 });
      shadowControls.set({ opacity: 0.26, scale: 0.92 });
      return () => {
        floatControls.stop();
        shadowControls.stop();
      };
    }

    void floatControls.start(IDLE_FLOAT);
    void shadowControls.start(IDLE_SHADOW);
    return () => {
      floatControls.stop();
      shadowControls.stop();
    };
  }, [floatControls, reduceMotion, shadowControls]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      rotationControls.stop();
      coverControls.stop();
    };
  }, [coverControls, rotationControls]);

  useEffect(() => {
    if (isTransitioning) return;

    if (bookOpen) {
      rotationControls.stop();
      void rotationControls.start({
        rotateX: -8,
        rotateY: -24,
        rotateZ: -1,
        transition: { duration: reduceMotion ? 0.18 : 0.48, ease: [0.22, 1, 0.36, 1] },
      });
      void coverControls.start({
        rotateY: -154,
        transition: { duration: reduceMotion ? 0.22 : 0.72, ease: [0.22, 1, 0.36, 1] },
      });
      return;
    }

    void coverControls
      .start({
        rotateY: 0,
        transition: { duration: reduceMotion ? 0.16 : 0.56, ease: [0.4, 0, 0.2, 1] },
      })
      .then(() => {
        if (!bookOpenRef.current && !transitionRef.current) {
          void startIdleRotation();
        }
      });
  }, [bookOpen, coverControls, isTransitioning, reduceMotion, rotationControls, startIdleRotation]);

  const departBook = useCallback(async () => {
    setIsHovered(false);
    setIsPinnedOpen(false);
    floatControls.stop();
    rotationControls.stop();
    shadowControls.stop();
    coverControls.stop();

    await coverControls.start({
      rotateY: 0,
      transition: { duration: reduceMotion ? 0.08 : 0.28, ease: [0.4, 0, 0.2, 1] },
    });
    await Promise.all([
      floatControls.start({
        x: 46,
        y: -92,
        scale: 0.78,
        opacity: 0,
        transition: {
          duration: reduceMotion ? 0.12 : 0.42,
          ease: [0.7, 0, 0.3, 1],
        },
      }),
      rotationControls.start({
        rotateX: -3,
        rotateY: 18,
        rotateZ: 8,
        transition: {
          duration: reduceMotion ? 0.12 : 0.42,
          ease: [0.7, 0, 0.3, 1],
        },
      }),
      shadowControls.start({
        opacity: 0,
        scale: 0.72,
        transition: { duration: reduceMotion ? 0.12 : 0.2 },
      }),
    ]);
  }, [coverControls, floatControls, reduceMotion, rotationControls, shadowControls]);

  const handleAuthorize = useCallback(() => {
    void authorize(departBook);
  }, [authorize, departBook]);

  const toggleBook = useCallback(() => {
    if (!isTransitioning) setIsPinnedOpen((open) => !open);
  }, [isTransitioning]);

  return (
    <main className="relative z-20 isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#121211] px-4 py-12 sm:px-8 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_34%_at_50%_42%,rgba(233,224,208,0.045),transparent_78%)]"
      />

      <section
        aria-label="Parth Archive access authorization"
        className="relative z-10 flex w-full max-w-xl flex-col items-center text-center"
      >
        <div className="relative flex flex-col items-center">
          <button
            type="button"
            aria-label={bookOpen ? "Close the archive book" : "Open the archive book"}
            aria-expanded={bookOpen}
            aria-pressed={isPinnedOpen}
            disabled={isTransitioning}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setIsHovered(true);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") setIsHovered(false);
            }}
            onClick={toggleBook}
            className="group relative mb-8 h-[11.5rem] w-[min(18rem,calc(100vw-2rem))] cursor-pointer overflow-visible rounded-md focus-visible:outline-none disabled:cursor-default sm:mb-10 sm:h-[18.5rem] sm:w-[14rem] lg:h-[20.5rem] lg:w-[16rem]"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              initial={{ y: reduceMotion ? 0 : "-7%" }}
              animate={floatControls}
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className={`absolute inset-y-0 left-1/4 w-1/2 transition-transform motion-reduce:transition-none sm:inset-0 sm:w-full sm:transition-none ${
                  bookOpen
                    ? "translate-x-1/2 duration-[720ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:translate-x-0"
                    : "translate-x-0 duration-[560ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  initial={{ rotateX: -8, rotateY: -22, rotateZ: -1 }}
                  animate={rotationControls}
                  className="absolute inset-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Back board and cloth-bound page block */}
                  <div
                    className="absolute inset-0 rounded-[5px] bg-[#642D3D] shadow-[0_25px_45px_rgba(0,0,0,0.5)]"
                    style={{ transform: "translateZ(-8px)" }}
                  />
                  <div
                    className="absolute inset-y-[2.5%] left-[4%] right-[-3%] overflow-hidden rounded-[2px] border border-[#d4c8b4]/60 bg-[#E9E0D0]"
                    style={{
                      transform: "translateZ(1px)",
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, rgba(88,72,58,0.16) 0 1px, transparent 1px 4px), linear-gradient(90deg, #d9cebb, #f2eadc 9%, #e9e0d0 100%)",
                    }}
                  >
                    <div className="absolute inset-x-[10%] top-[16%] h-px bg-[#642D3D]/35" />
                    <div className="absolute inset-x-[10%] top-[21%] h-px bg-[#642D3D]/20" />
                    <div className="absolute inset-x-[10%] bottom-[14%] h-px bg-[#642D3D]/30" />
                  </div>

                  {/* Visible page edges and restrained spine */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-[5%] right-[1%] w-[4%] border-l border-[#b7a890] bg-[repeating-linear-gradient(to_bottom,#efe6d7_0_2px,#cfc2ad_2px_3px)]"
                    style={{ transform: "translateZ(5px)" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-[1%] left-[1%] w-[7%] rounded-l-[4px] bg-[linear-gradient(90deg,#48212d_0%,#642D3D_48%,#7a3949_100%)] shadow-[inset_3px_0_5px_rgba(0,0,0,0.25)]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <span className="absolute inset-y-[8%] left-1/2 w-px -translate-x-1/2 bg-[#A1AAA0]/35" />
                    <span className="absolute inset-x-[30%] top-[12%] h-px bg-[#A1AAA0]/45" />
                    <span className="absolute inset-x-[30%] bottom-[12%] h-px bg-[#A1AAA0]/45" />
                  </div>

                  {/* Hinged front board: its reverse face becomes visible when opened */}
                  <motion.div
                    initial={{ rotateY: 0 }}
                    animate={coverControls}
                    className="absolute inset-0 rounded-[5px]"
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "left center",
                    }}
                  >
                    <div
                      className="absolute inset-0 overflow-hidden rounded-[5px] border border-[#8c5360]/50 bg-[linear-gradient(130deg,#743747_0%,#642D3D_40%,#512431_100%)] shadow-[4px_8px_16px_rgba(0,0,0,0.32)]"
                      style={{ transform: "translateZ(11px)", backfaceVisibility: "hidden" }}
                    >
                      <div className="absolute inset-[5%] rounded-[2px] border border-[#A1AAA0]/25" />
                      <div className="absolute inset-x-[12%] top-[14%] h-px bg-[#E9E0D0]/40" />
                      <div className="absolute inset-x-[12%] bottom-[14%] h-px bg-[#E9E0D0]/40" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-[#E9E0D0]">
                        <span className="font-mono text-[8px] tracking-[0.35em] text-[#A1AAA0] sm:text-[10px]">
                          PARTH ARCHIVE
                        </span>
                        <span className="mt-3 font-display text-lg font-bold tracking-[0.12em] sm:text-2xl">
                          BUREAU
                        </span>
                        <span className="mt-1 font-mono text-[8px] tracking-[0.28em] text-[#E9E0D0]/60 sm:text-[9px]">
                          PERSONNEL FILE · 001
                        </span>
                        <span className="mt-6 h-5 w-5 rotate-45 border border-[#A1AAA0]/55" />
                      </div>
                      <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-white/[0.07] to-transparent" />
                    </div>
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center rounded-[5px] border border-[#c9b99f] bg-[linear-gradient(145deg,#f0e7d8,#d7c9b3)] text-[#342b25]"
                      style={{
                        transform: "rotateY(180deg) translateZ(10px)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <span className="font-mono text-[8px] tracking-[0.28em] text-[#642D3D] sm:text-[10px]">
                        ARCHIVE ACCESS
                      </span>
                      <span className="mt-3 font-display text-lg font-semibold tracking-wide sm:text-xl">
                        BUREAU FILE
                      </span>
                      <span className="mt-2 h-px w-12 bg-[#642D3D]/50" />
                      <span className="mt-3 font-mono text-[8px] tracking-[0.16em] text-[#5c5c54] sm:text-[9px]">
                        HANDLE WITH CARE
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

              </div>

              {/* Magnetic suspension shadow follows the book's original float */}
              <motion.span
                aria-hidden="true"
                initial={{ opacity: reduceMotion ? 0.26 : 0.2, scale: reduceMotion ? 0.92 : 0.84 }}
                animate={shadowControls}
                className="pointer-events-none absolute -bottom-7 left-[30%] h-3 w-[40%] rounded-[50%] bg-[#E9E0D0]/20 blur-md sm:left-[10%] sm:w-[80%]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-7 left-[31.5%] h-3 w-[37%] rounded-[50%] border border-[#A1AAA0]/15 sm:left-[13%] sm:w-[74%]"
              />
            </motion.div>
          </button>

          <div className="space-y-2">
            <h1 className="font-display text-xl font-semibold uppercase tracking-[0.24em] text-[#E9E0D0] sm:text-2xl">
              BUREAUCRATIC FILE
            </h1>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#A1AAA0] sm:text-[10px]">
              AUTHORIZED ACCESS ONLY
            </p>
          </div>

          <button
            type="button"
            onClick={handleAuthorize}
            disabled={isTransitioning}
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-3 border border-[#642D3D] bg-[#181716]/80 px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.24em] text-[#E9E0D0] transition-colors duration-300 hover:bg-[#642D3D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A1AAA0] focus-visible:ring-offset-4 focus-visible:ring-offset-[#121211] disabled:cursor-wait"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-[#A1AAA0]" />
            AUTHORIZE
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-[#A1AAA0]" />
          </button>

        </div>
      </section>
    </main>
  );
}
