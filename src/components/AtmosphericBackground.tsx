"use client";

import { motion } from "framer-motion";

export default function AtmosphericBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    >
      {/* Film Grain Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-vignette" />

      {/* Subtle Warm Accent Ambient Glow */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.45, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(217,119,54,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none"
      />

      {/* Subtle Architectural Horizontal/Vertical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,240,234,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,240,234,0.02)_1px,transparent_1px)] bg-[size:120px_120px]" />
    </div>
  );
}
