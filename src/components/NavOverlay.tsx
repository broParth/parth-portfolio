"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: "HOME", href: "/", num: "01" },
  { label: "ABOUT", href: "/about", num: "02" },
  { label: "PROJECTS", href: "/projects", num: "03" },
  { label: "EXPERIENCE", href: "/experience", num: "04" },
  { label: "STACK", href: "/stack", num: "05" },
  { label: "CONTACT", href: "/contact", num: "06" },
];

export default function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const pathname = usePathname();

  // Close overlay on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-[#0c0b0a]/95 backdrop-blur-xl flex flex-col justify-between p-8 md:p-16 lg:p-24 overflow-y-auto"
        >
          {/* Header Metadata inside Overlay */}
          <div className="flex justify-between items-center border-b border-[rgba(244,240,234,0.08)] pb-6">
            <span className="font-mono text-xs text-[#a8a29e] tracking-widest uppercase">
              // NAVIGATION DIRECTORY
            </span>
            <span className="font-mono text-xs text-[#d97736] tracking-widest uppercase">
              PORTFOLIO ARCHIVE
            </span>
          </div>

          {/* Main Navigation Links */}
          <nav className="my-auto py-12 flex flex-col gap-6 max-w-4xl">
            {NAV_ITEMS.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: -12,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-baseline gap-6 w-max focus:outline-none"
                  >
                    {/* Index Number */}
                    <span className="font-mono text-xs md:text-sm text-[#a8a29e] group-hover:text-[#d97736] transition-colors">
                      {item.num}
                    </span>

                    {/* Display Label */}
                    <span
                      className={`font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-[#d97736]"
                          : "text-[#f4f0ea] group-hover:text-[#d97736] group-hover:translate-x-3"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Footer Metadata in Overlay */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-[rgba(244,240,234,0.08)] pt-6 gap-4 font-mono text-xs text-[#a8a29e]">
            <div>
              <span>CREATIVE // CINEMATIC // EDITORIAL</span>
            </div>
            <div>
              <span className="text-[#f4f0ea]">SYSTEM STATUS: ACTIVE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
