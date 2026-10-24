"use client";

import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePhosphorBurst } from "@/components/PhosphorBurstTransition";

export default function CrtTerminal() {
  const router = useRouter();
  const terminalRef = useRef<HTMLAnchorElement>(null);
  const { isTransitioning, stage, triggerBurst } = usePhosphorBurst();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isTransitioning) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      router.push("/portfolio#about");
      return;
    }

    if (terminalRef.current) {
      const rect = terminalRef.current.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;
      triggerBurst({ originX, originY });
    } else {
      router.push("/portfolio#about");
    }
  };

  // Beat A & B: Localized CRT monitor vibration & phosphor intensity flare
  const isVibrating = stage === "activating" || stage === "pressure";
  const shakeAnimation =
    stage === "activating"
      ? {
          x: [0, -1.5, 1.5, -1, 1, 0],
          y: [0, 1, -1, 1.5, -0.5, 0],
          filter: [
            "drop-shadow(0 0 6px rgba(74,246,38,0.7))",
            "drop-shadow(0 0 16px rgba(74,246,38,1))",
            "drop-shadow(0 0 10px rgba(74,246,38,0.85))",
          ],
        }
      : stage === "pressure"
      ? {
          x: [0, -3.5, 3.5, -2, 2, -1, 1, 0],
          y: [0, 2, -2, 3, -1.5, 1, 0],
          scale: [1, 1.02, 0.99, 1.03, 1],
          filter: [
            "drop-shadow(0 0 14px rgba(74,246,38,0.9))",
            "drop-shadow(0 0 32px rgba(136,255,106,1))",
            "drop-shadow(0 0 20px rgba(74,246,38,1))",
          ],
        }
      : {};

  return (
    <Link
      ref={terminalRef}
      href="/portfolio#about"
      role="button"
      prefetch={true}
      onClick={handleClick}
      aria-label="Enter Parth Archive — Navigate to the portfolio journey, starting with About Me."
      className="group relative block w-full h-full select-none cursor-pointer bg-transparent
                 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4af626]/70 focus-visible:ring-offset-1 focus-visible:ring-offset-black/50 rounded-[12%_/_14%]"
      style={{
        containerType: "size",
      }}
    >
      {/* 
       * Entirely transparent container.
       * The physical glass, curved tube, reflections, and surface cracks from archive-room.png remain 100% visible!
       * The HTML layer renders purely as green phosphor text glowing directly on the glass.
       */}
      <motion.div
        animate={isVibrating ? shakeAnimation : undefined}
        transition={
          isVibrating
            ? {
                duration: stage === "pressure" ? 0.12 : 0.22,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={`relative w-full h-full flex flex-col justify-between items-center text-center font-mono py-[14%] px-[8%] text-[#4af626] leading-none ${
          !isVibrating ? "animate-crt-flicker" : ""
        }`}
      >

        {/* Top Diagnostic Header */}
        <div className="space-y-[3%] drop-shadow-[0_0_5px_rgba(74,246,38,0.7)] group-hover:drop-shadow-[0_0_9px_rgba(74,246,38,1)] transition-all duration-300">
          <div className="flex items-center justify-center gap-[3.5%] text-[8.5cqw] font-bold tracking-widest uppercase text-[#4af626]">
            <span className="inline-block w-[1.8cqw] h-[1.8cqw] rounded-full bg-[#4af626] shadow-[0_0_5px_#4af626]" />
            <span>SYSTEM ERROR</span>
          </div>
          <div className="text-[6.8cqw] tracking-wider text-[#4af626]/85">
            PARTH_ARCHIVE
          </div>
        </div>

        {/* Center Diagnostic Code */}
        <div className="text-[5.5cqw] tracking-widest text-[#4af626]/60 drop-shadow-[0_0_4px_rgba(74,246,38,0.4)]">
          SEC.CORRUPT // INIT_READY
        </div>

        {/* Bottom Interactive Action Prompt with Blinking Cursor */}
        <div className="flex flex-col items-center gap-[2.5%] drop-shadow-[0_0_6px_rgba(74,246,38,0.75)] group-hover:drop-shadow-[0_0_12px_rgba(74,246,38,1)] transition-all duration-300">
          <div className="flex items-center justify-center gap-[1.5%] text-[9cqw] font-bold tracking-widest uppercase text-[#4af626] group-hover:text-[#88ff6a] transition-colors duration-200">
            <span className="whitespace-nowrap crt-click-prompt">[ CLICK ME ]</span>
          </div>
          <span className="text-[4.5cqw] tracking-widest text-[#4af626]/50 uppercase">
            INITIALIZE DIRECTORY
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
