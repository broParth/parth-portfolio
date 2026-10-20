"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CrtTerminal from "@/components/CrtTerminal";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#0c0b0a] select-none">
      {/* ─────────────────────────────────────────────────────────────
       * 1. CINEMATIC SCENE CANVAS (1672:941 Aspect Ratio Environment)
       * Container scales seamlessly to cover viewport while maintaining
       * exact coordinate alignment between artwork and CRT HTML overlay.
       * ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="scene-canvas absolute top-1/2 aspect-[1672/941]"
          style={{
            width: "max(100vw, calc(100vh * (1672 / 941)))",
            height: "max(100vh, calc(100vw * (941 / 1672)))",
          }}
        >
          {/* Approved Background Artwork Asset */}
          <Image
            src="/images/archive-room.png"
            alt="Abandoned technical research facility with active vintage CRT computer"
            fill
            priority
            quality={95}
            className="object-cover object-center pointer-events-none select-none"
            sizes="100vw"
          />

          {/* Subtle Atmospheric Depth Overlay (Preserves Original Lighting Balance) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none
                       bg-gradient-to-r from-black/40 via-transparent to-black/30"
          />

          {/* ─────────────────────────────────────────────────────────────
           * FLUORESCENT CEILING-LIGHT FLICKER
           * Overlay positioned over the tube fixture (upper-center of image).
           * mix-blend-mode: screen ensures it only adds light, never darkens.
           * Elliptical radial gradient mimics the tube's soft ambient spill.
           * ───────────────────────────────────────────────────────────── */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none animate-fluoro-flicker"
            style={{
              /* Tube fixture sits at roughly x:30%–58%, y:16%–26% of the canvas */
              left: "28%",
              top: "12%",
              width: "32%",
              height: "22%",
              background:
                "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(210,225,245,0.38) 0%, rgba(195,215,240,0.12) 55%, transparent 100%)",
              mixBlendMode: "screen",
              filter: "blur(8px)",
            }}
          />

          {/* ─────────────────────────────────────────────────────────────
           * 2. INTERACTIVE CRT TERMINAL OVERLAY
           * Precisely aligned with the inner curved CRT glass in archive-room.png
           * Coordinates: x ≈ 72.4% -> 86.8%, y ≈ 43.5% -> 64.7%
           * ───────────────────────────────────────────────────────────── */}
          <div
            className="absolute z-20 pointer-events-auto"
            style={{
              left: "72.4%",
              top: "43.5%",
              width: "14.4%",
              height: "21.2%",
              transform: "rotate(-3.6deg) skewX(-1.2deg)",
              transformOrigin: "center center",
            }}
          >
            <CrtTerminal />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
       * 3. INDEPENDENT REAL HTML IDENTITY BLOCK (LEFT EDITORIAL COLUMN)
       * Real, selectable, accessible HTML typography with cinematic entry.
       * ───────────────────────────────────────────────────────────── */}
      <div className="relative z-30 h-full w-full pointer-events-none flex flex-col justify-between p-6 sm:p-10 lg:p-16">
        {/* Top Archival Metadata Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-between font-mono text-xs text-[#a8a29e] tracking-wider pt-2 border-b border-[rgba(244,240,234,0.06)] pb-4 max-w-7xl w-full"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#d97736] animate-pulse" />
            <span className="uppercase text-[#f4f0ea]">FACILITY // ARCHIVE-07</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[11px] text-[#a8a29e]/70">
            <span>TERMINAL // ONLINE</span>
            <span>STATUS // STANDBY</span>
          </div>
        </motion.div>

        {/* Center-Left Identity Hierarchy (Positioned high on mobile to leave lower desk/CRT clear) */}
        <div className="mt-2 mb-auto sm:my-auto py-2 sm:py-8 max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 sm:space-y-6 pointer-events-auto"
          >
            {/* Sector / Domain Indicator with Muted Sage-Grey Accent */}
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 sm:w-10 bg-[#d97736]" />
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-[#B8C6BE] uppercase">
                RESEARCH ARCHIVE // DIGITAL ENVIRONMENT
              </span>
            </div>

            {/* Display Name */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#f4f0ea] uppercase leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                PARTH
              </h1>

              <div className="space-y-1 sm:space-y-2">
                <h2 className="font-sans text-base sm:text-xl lg:text-2xl font-semibold tracking-wider text-[#f4f0ea]/90 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  COMPUTER SCIENCE
                </h2>

                <p className="font-mono text-[11px] sm:text-sm tracking-widest text-[#B8C6BE] uppercase flex items-center gap-2 flex-wrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  <span>AI</span>
                  <span className="text-[#a8a29e]/60">•</span>
                  <span>SOFTWARE</span>
                  <span className="text-[#a8a29e]/60">•</span>
                  <span>SECURITY</span>
                </p>
              </div>
            </div>

            {/* Architectural Narrative Description */}
            <div className="relative pl-4 sm:pl-5 border-l border-[#d97736]/50 max-w-lg py-1">
              <p className="font-sans text-xs sm:text-base text-[#a8a29e] leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Designing adaptive software architectures, intelligent systems, and interactive digital experiences with physical depth and technical rigor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Exploration Cue & System Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex items-end justify-between font-mono text-xs text-[#a8a29e] border-t border-[rgba(244,240,234,0.06)] pt-4 max-w-7xl w-full"
        >
          {/* Interaction Cue pointing to CRT */}
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4af626] animate-ping" />
            <span className="tracking-widest uppercase text-[#a8a29e]/90 text-[11px]">
              INTERACTION: ACTIVATE CRT TERMINAL [LOWER RIGHT]
            </span>
          </div>

          <div className="hidden sm:block text-[11px] text-[#a8a29e]/60">
            <span>PORTFOLIO_SYSTEM // V3.0</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
