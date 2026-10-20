"use client";

import { motion } from "framer-motion";

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MenuButton({ isOpen, onToggle }: MenuButtonProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      className="fixed top-8 right-8 lg:top-12 lg:right-12 z-50 group flex items-center gap-3 px-4 py-2.5 rounded-full border border-[rgba(244,240,234,0.12)] bg-[#141210]/80 backdrop-blur-md text-[#f4f0ea] hover:border-[#d97736]/50 hover:bg-[#1c1917] transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#d97736]"
    >
      {/* Label text */}
      <span className="font-mono text-xs tracking-widest text-[#a8a29e] group-hover:text-[#f4f0ea] transition-colors uppercase">
        {isOpen ? "CLOSE" : "MENU"}
      </span>

      {/* Hamburger / Close Icon lines */}
      <div className="relative w-5 h-4 flex flex-col justify-between items-center">
        <motion.span
          animate={
            isOpen
              ? { rotate: 45, y: 7.5, backgroundColor: "#d97736" }
              : { rotate: 0, y: 0, backgroundColor: "#f4f0ea" }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-5 h-[1.5px] rounded-full block origin-center"
        />
        <motion.span
          animate={
            isOpen
              ? { opacity: 0, x: -6 }
              : { opacity: 1, x: 0, backgroundColor: "#f4f0ea" }
          }
          transition={{ duration: 0.2 }}
          className="w-3.5 h-[1.5px] rounded-full block self-end"
        />
        <motion.span
          animate={
            isOpen
              ? { rotate: -45, y: -7.5, backgroundColor: "#d97736" }
              : { rotate: 0, y: 0, backgroundColor: "#f4f0ea" }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-5 h-[1.5px] rounded-full block origin-center"
        />
      </div>
    </button>
  );
}
