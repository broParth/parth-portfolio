"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export type TransitionStage =
  | "idle"
  | "activating" // Beat A (0 - 250ms): CRT phosphor glow intensifies, subtle vibration
  | "pressure" // Beat B (250 - 550ms): electrical instability, cathode beam flare
  | "burst" // Beat C (550 - 950ms): expanding emerald phosphor wave from CRT
  | "whiteout" // Beat D (950 - 1080ms): peak flash covers viewport, router.push()
  | "reveal"; // Beat E (1080 - 1450ms): smooth flash dissolution, reveals portfolio

interface BurstOrigin {
  originX: number;
  originY: number;
}

interface TransitionContextType {
  isTransitioning: boolean;
  stage: TransitionStage;
  burstOrigin: BurstOrigin | null;
  triggerBurst: (origin: BurstOrigin) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  stage: "idle",
  burstOrigin: null,
  triggerBurst: () => { },
});

export function usePhosphorBurst() {
  return useContext(TransitionContext);
}

// Subtle analog digital fragments for Beat C (restrained, technical, NOT explosion debris)
const PARTICLES = [
  { id: 1, angle: 25, dist: 220, char: "1", delay: 0.02 },
  { id: 2, angle: 70, dist: 280, char: "0", delay: 0.04 },
  { id: 3, angle: 120, dist: 200, char: "▪", delay: 0.01 },
  { id: 4, angle: 165, dist: 260, char: "█", delay: 0.05 },
  { id: 5, angle: 205, dist: 240, char: "0", delay: 0.03 },
  { id: 6, angle: 250, dist: 300, char: "1", delay: 0.06 },
  { id: 7, angle: 295, dist: 230, char: "▪", delay: 0.02 },
  { id: 8, angle: 340, dist: 270, char: "0", delay: 0.04 },
];

export function PhosphorBurstProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [stage, setStage] = useState<TransitionStage>("idle");
  const [burstOrigin, setBurstOrigin] = useState<BurstOrigin | null>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const isTransitioning = stage !== "idle";

  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach((t) => clearTimeout(t));
    timeoutRefs.current = [];
  }, []);

  const triggerBurst = useCallback(
    (origin: BurstOrigin) => {
      // Prevent overlapping transitions
      if (stage !== "idle") return;

      // Respect prefers-reduced-motion: navigate immediately
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        router.push("/portfolio#about");
        return;
      }

      clearAllTimeouts();
      setBurstOrigin(origin);
      setStage("activating");

      // Beat B: Pressure buildup (at 250ms)
      const t1 = setTimeout(() => {
        setStage("pressure");
      }, 250);

      // Beat C: Phosphor Burst wave expansion (at 550ms)
      const t2 = setTimeout(() => {
        setStage("burst");
      }, 750);

      // Beat D: Whiteout Peak Flash & Navigation (at 950ms)
      const t3 = setTimeout(() => {
        setStage("whiteout");
        // Navigate underneath the peak whiteout flash
        router.push("/portfolio#about");
      }, 1650);

      // Beat E: Reveal portfolio by fading out the flash (at 1080ms)
      const t4 = setTimeout(() => {
        setStage("reveal");
      }, 1780);

      // Finish & Cleanup (at 1450ms)
      const t5 = setTimeout(() => {
        setStage("idle");
        setBurstOrigin(null);
      }, 2150);

      timeoutRefs.current = [t1, t2, t3, t4, t5];
    },
    [stage, router, clearAllTimeouts]
  );

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        stage,
        burstOrigin,
        triggerBurst,
      }}
    >
      {children}

      {/* ─────────────────────────────────────────────────────────────
       * CINEMATIC PHOSPHOR BURST TRANSITION OVERLAY (Layer z-[100])
       * ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isTransitioning && burstOrigin && (
          <div
            aria-hidden="true"
            className="fixed inset-0 z-[100] pointer-events-none select-none overflow-hidden"
          >
            {/* 1. Cathode Beam Streak / Flare across CRT monitor (Beats B & C) */}
            {(stage === "pressure" || stage === "burst") && (
              <motion.div
                initial={{ scaleX: 0.1, scaleY: 0.5, opacity: 0 }}
                animate={{
                  scaleX: [0.1, 2.5, 6],
                  scaleY: [0.5, 2.2, 0.8],
                  opacity: [0, 0.95, 0.4],
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute rounded-full"
                style={{
                  left: burstOrigin.originX - 160,
                  top: burstOrigin.originY - 4,
                  width: 320,
                  height: 8,
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(136,255,106,0.9) 35%, rgba(74,246,38,0.7) 65%, transparent 100%)",
                  boxShadow: "0 0 35px 12px rgba(74,246,38,0.85)",
                  mixBlendMode: "screen",
                }}
              />
            )}

            {/* 2. Expanding Emerald Radial Shockwave (Beat C) */}
            {(stage === "burst" || stage === "whiteout") && (
              <motion.div
                initial={{ scale: 0.05, opacity: 0.6 }}
                animate={{
                  scale: [0.05, 1.8, 4.2],
                  opacity: [0.6, 0.95, 1],
                }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="absolute rounded-full"
                style={{
                  left: burstOrigin.originX,
                  top: burstOrigin.originY,
                  width: 600,
                  height: 600,
                  transform: "translate(-50%, -50%)",
                  background:
                    "radial-gradient(circle, rgba(240,255,245,1) 0%, rgba(74,246,38,0.95) 24%, rgba(16,185,129,0.7) 50%, rgba(6,78,59,0.35) 75%, transparent 100%)",
                  mixBlendMode: "screen",
                  filter: "blur(6px)",
                }}
              />
            )}

            {/* 3. Subtle Digital Phosphor Fragments / Matrix Sparks (Beat C) */}
            {stage === "burst" && (
              <div className="absolute inset-0">
                {PARTICLES.map((p) => {
                  const rad = (p.angle * Math.PI) / 180;
                  const targetX = Math.cos(rad) * p.dist;
                  const targetY = Math.sin(rad) * p.dist;

                  return (
                    <motion.span
                      key={p.id}
                      initial={{
                        x: burstOrigin.originX,
                        y: burstOrigin.originY,
                        opacity: 0,
                        scale: 0.5,
                      }}
                      animate={{
                        x: burstOrigin.originX + targetX,
                        y: burstOrigin.originY + targetY,
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.6],
                      }}
                      transition={{
                        duration: 0.38,
                        delay: p.delay,
                        ease: "easeOut",
                      }}
                      className="absolute font-mono text-xs text-[#88ff6a] font-bold drop-shadow-[0_0_8px_rgba(74,246,38,1)]"
                    >
                      {p.char}
                    </motion.span>
                  );
                })}
              </div>
            )}

            {/* 4. Instant Scanline Raster Surge */}
            {(stage === "pressure" || stage === "burst") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.35, 0.15] }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(74,246,38,0.25)_4px)] mix-blend-screen pointer-events-none"
              />
            )}

            {/* 5. Peak Flash & Smooth Reveal (Beats D & E) */}
            {(stage === "whiteout" || stage === "reveal") && (
              <motion.div
                key="peak-flash"
                initial={{ opacity: 0 }}
                animate={
                  stage === "whiteout"
                    ? { opacity: 1 }
                    : { opacity: 0 }
                }
                transition={
                  stage === "whiteout"
                    ? { duration: 0.1, ease: "easeIn" }
                    : { duration: 0.34, ease: [0.16, 1, 0.3, 1] }
                }
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at ${burstOrigin.originX}px ${burstOrigin.originY}px, #ffffff 0%, #bbf7d0 30%, #4af626 65%, #052e16 100%)`,
                }}
              />
            )}
          </div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
