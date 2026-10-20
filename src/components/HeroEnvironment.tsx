"use client";

import { motion } from "framer-motion";

export default function HeroEnvironment() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-hidden">
      {/* Top Editorial Metadata Line */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-between font-mono text-xs text-[#a8a29e] tracking-wider pt-2 border-b border-[rgba(244,240,234,0.06)] pb-4 max-w-7xl w-full"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#d97736] animate-pulse" />
          <span className="uppercase text-[#f4f0ea]">ARCHIVAL ID // 2026.01</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>REF // ARCHIVE-2026</span>
          <span>INDEX // 001-ALPHA</span>
        </div>
      </motion.div>

      {/* Main Asymmetric Composition (Occupies Left / Center) */}
      <div className="my-auto py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl w-full">
        <div className="lg:col-span-9 space-y-8">
          {/* Architectural Layered Frame Indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-12 bg-[#d97736]" />
            <span className="font-mono text-xs tracking-widest text-[#d97736] uppercase">
              PORTFOLIO // DIGITAL ENVIRONMENT
            </span>
          </motion.div>

          {/* Hero Subtitle & Domains */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="space-y-2"
            >
              <h2 className="font-sans text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wider text-[#f4f0ea]/90 uppercase">
                COMPUTER SCIENCE
              </h2>

              <p className="font-mono text-xs sm:text-sm tracking-widest text-[#d97736] uppercase flex items-center gap-2 flex-wrap">
                <span>AI</span>
                <span className="text-[#a8a29e]">•</span>
                <span>SOFTWARE</span>
                <span className="text-[#a8a29e]">•</span>
                <span>SECURITY</span>
              </p>
            </motion.div>
          </div>

          {/* Subordinate Architectural Panel Line & Narrative Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="relative pl-6 border-l border-[#d97736]/40 max-w-2xl py-1 space-y-2"
          >
            <p className="font-sans text-sm sm:text-base text-[#a8a29e] leading-relaxed">
              Designing adaptive software architectures, intelligent systems, and interactive digital experiences with physical depth and technical rigor.
            </p>
          </motion.div>
        </div>

        {/* Right Secondary Editorial Metadata (Subtle Asymmetric Balancing Element) */}
        <div className="hidden lg:block lg:col-span-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="pl-6 border-l border-[rgba(244,240,234,0.08)] space-y-4"
          >
            <div className="font-mono text-[10px] text-[#a8a29e]/70 uppercase tracking-widest border-b border-[rgba(244,240,234,0.04)] pb-2">
              TECHNICAL DIRECTORY
            </div>
            <div className="space-y-2 font-mono text-xs text-[#a8a29e]/80">
              <div className="flex justify-between gap-4">
                <span>STACK</span>
                <span className="text-[#f4f0ea]/90">NEXT.JS / TS</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>DOMAINS</span>
                <span className="text-[#f4f0ea]/90">CYBER / AI</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>PHASE</span>
                <span className="text-[#d97736]">02A // VISUAL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Exploration & Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-end justify-between font-mono text-xs text-[#a8a29e] border-t border-[rgba(244,240,234,0.06)] pt-4 max-w-7xl w-full"
      >
        {/* Scroll / Explore Indicator */}
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-5 rounded-full bg-[#d97736]"
          />
          <span className="tracking-widest uppercase text-[#a8a29e]">
            EXPLORE // SCROLL DOWN
          </span>
        </div>

        {/* Footer Technical Metadata */}
        <div className="hidden sm:block">
          <span className="tracking-widest uppercase">
            EST. 2026 // ALL RIGHTS RESERVED
          </span>
        </div>
      </motion.div>
    </section>
  );
}
