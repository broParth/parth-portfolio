"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";

const emptySubscribe = () => () => {};

export default function RevealSection() {
  const prefersReducedRaw = useReducedMotion();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const prefersReduced = mounted ? prefersReducedRaw : false;

  return (
    <section
      className="relative w-full min-h-[50vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 overflow-hidden"
      aria-label="Archive section"
    >
      {/* Thin top divider line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: prefersReduced ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-6 sm:left-10 lg:left-16 right-6 sm:right-10 lg:right-16 h-[1px] bg-[rgba(244,240,234,0.06)] origin-left"
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full">
        {/* Archival section marker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: prefersReduced ? 0 : 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[1px] w-8 bg-[#d97736]" aria-hidden="true" />
          <span className="font-mono text-xs tracking-widest text-[#d97736] uppercase">
            ARCHIVE / 01
          </span>
        </motion.div>

        {/* Placeholder caption — no invented content */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: prefersReduced ? 0 : 0.8, delay: 0.4 }}
          className="font-mono text-[#a8a29e]/60 tracking-widest uppercase text-xs max-w-xs"
        >
          — CONTENT INCOMING —
        </motion.p>
      </div>
    </section>
  );
}
