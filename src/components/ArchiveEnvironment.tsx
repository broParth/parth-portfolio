"use client";

import { motion } from "framer-motion";

export default function ArchiveEnvironment() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0908]"
    >
      {/* 1. Deep Perspective Corridor Lines (Ceiling, Walls, Floor Architectural Structure) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradH" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97736" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#d97736" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#d97736" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="lineGradV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f4f0ea" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#f4f0ea" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#f4f0ea" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Perspective Corridor Vanishing Lines */}
        <line x1="0%" y1="0%" x2="45%" y2="48%" stroke="url(#lineGradV)" strokeWidth="1" />
        <line x1="100%" y1="0%" x2="55%" y2="48%" stroke="url(#lineGradV)" strokeWidth="1" />
        <line x1="0%" y1="100%" x2="45%" y2="52%" stroke="url(#lineGradV)" strokeWidth="1" />
        <line x1="100%" y1="100%" x2="55%" y2="52%" stroke="url(#lineGradV)" strokeWidth="1" />

        {/* Ceiling Conduit Cable Lines */}
        <path
          d="M0,40 Q300,55 600,45 T1200,50 T1920,40"
          fill="none"
          stroke="#44403c"
          strokeWidth="1.5"
          strokeDasharray="6 3"
          opacity="0.35"
        />
        <path
          d="M0,50 Q350,65 700,52 T1400,60 T1920,52"
          fill="none"
          stroke="#57534e"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Horizontal Wall Bay Grid Divider Lines */}
        <line x1="0%" y1="25%" x2="100%" y2="25%" stroke="url(#lineGradH)" strokeWidth="1" />
        <line x1="0%" y1="75%" x2="100%" y2="75%" stroke="url(#lineGradH)" strokeWidth="1" />
      </svg>

      {/* 2. Server Bay / Technical Equipment Silhouettes (Background Depth) */}
      <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-12 opacity-15 pointer-events-none">
        {/* Left Equipment Bay Silhouette */}
        <div className="hidden md:flex flex-col gap-6 w-32 lg:w-48 border-r border-[#44403c]/40 pr-4 py-12">
          <div className="h-24 border border-[#57534e]/30 bg-[#141210]/60 p-2 flex flex-col justify-between">
            <div className="w-full h-1 bg-[#d97736]/40" />
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97736] animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8a29e]/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8a29e]/20" />
            </div>
          </div>
          <div className="h-36 border border-[#57534e]/20 bg-[#141210]/40 p-2 flex flex-col gap-2">
            <div className="w-3/4 h-1 bg-[#a8a29e]/20" />
            <div className="w-1/2 h-1 bg-[#a8a29e]/20" />
            <div className="w-full h-1 bg-[#a8a29e]/20" />
          </div>
        </div>

        {/* Right Equipment Bay Silhouette */}
        <div className="hidden lg:flex flex-col gap-8 w-40 border-l border-[#44403c]/40 pl-4 py-16">
          <div className="h-32 border border-[#57534e]/30 bg-[#141210]/50 p-3 flex flex-col justify-between">
            <span className="font-mono text-[9px] text-[#a8a29e]/60">BAY-04 // STANDBY</span>
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97736]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97736]/40" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Emergency Light Beacons (Amber Glow Pools with Subtle Breathing Motion) */}
      <motion.div
        initial={{ opacity: 0.15 }}
        animate={{ opacity: [0.15, 0.28, 0.18, 0.25, 0.15] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(217,119,54,0.14)_0%,_transparent_70%)] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.1, 0.2, 0.12, 0.18, 0.1] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-1/3 right-1/4 w-[600px] h-[350px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(217,119,54,0.1)_0%,_transparent_75%)] blur-3xl"
      />

      {/* 4. Industrial Wall Sector Markings (Background Editorial Atmosphere) */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-[#a8a29e]/20 tracking-widest uppercase pointer-events-none select-none hidden md:block">
        [FACILITY.SECTOR-07] // REPOSITORY_VAULT
      </div>
      <div className="absolute bottom-12 right-12 font-mono text-[10px] text-[#a8a29e]/20 tracking-widest uppercase pointer-events-none select-none hidden md:block">
        [ARCHIVE_BAY_B] // SYSTEM_IDLE
      </div>
    </div>
  );
}
