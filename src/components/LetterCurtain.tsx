"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const LETTERS = ["P", "A", "R", "T", "H"];

// Each letter fans out to a different x position as the curtain opens.
// Negative = left, Positive = right. Center letters stay near-center.
const DESKTOP_OFFSETS = [-420, -200, 0, 200, 420]; // px at full reveal
const MOBILE_OFFSETS  = [-130,  -60, 0,  60,  130];

// Stagger factor: each letter starts moving slightly later (inline via 0.05 * index)

interface Props {
  /** Scroll progress value 0–1 provided by the parent container */
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  isMobile?: boolean;
}

function LetterPanel({
  letter,
  index,
  progress,
  offsets,
}: {
  letter: string;
  index: number;
  progress: Props["progress"];
  offsets: number[];
}) {
  const prefersReduced = useReducedMotion();

  // Map global scroll progress into a per-letter delayed sub-range.
  // Letter starts moving at (stagger * index) and completes at 1.
  const start = 0.05 * index;         // each letter starts slightly later
  const end   = Math.min(start + 0.7, 1); // all done before scroll end

  const x = useTransform(
    progress,
    [start, end],
    prefersReduced ? [0, 0] : [0, offsets[index]]
  );

  const scale = useTransform(
    progress,
    [0, 0.4, 1],
    prefersReduced ? [1, 1, 1] : [1, 0.96, 0.9]
  );

  const opacity = useTransform(
    progress,
    [0, 0.6, 0.85],
    prefersReduced ? [1, 1, 0.5] : [1, 0.85, 0.55]
  );

  return (
    <motion.span
      style={{ x, scale, opacity }}
      className="inline-block select-none will-change-transform font-display font-extrabold uppercase leading-none text-[#f4f0ea]
                 text-[18vw] sm:text-[15vw] lg:text-[12vw]
                 tracking-tight"
      aria-hidden={index > 0} // only first letter is in aria flow; full word is in sr-only span
    >
      {letter}
    </motion.span>
  );
}

export default function LetterCurtain({ progress, isMobile: isMobileProp }: Props) {
  const [isMobileState, setIsMobileState] = useState(false);

  useEffect(() => {
    if (isMobileProp !== undefined) return;

    const checkMobile = () => {
      setIsMobileState(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobileProp]);

  const isMobile = isMobileProp ?? isMobileState;
  const offsets = isMobile ? MOBILE_OFFSETS : DESKTOP_OFFSETS;

  // Background visibility: grow as curtain opens
  const bgOpacity = useTransform(progress, [0, 0.8], [0, 1]);

  return (
    <div className="relative w-full">
      {/* Environment shines through the gaps between letters */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none z-0
                   bg-[radial-gradient(ellipse_at_center,_rgba(217,119,54,0.08)_0%,_transparent_70%)]"
        aria-hidden="true"
      />

      {/* The letter panels — centred on screen */}
      <div className="relative z-10 flex items-center justify-center gap-0">
        {/* Screen-reader accessible full word */}
        <span className="sr-only">PARTH</span>

        {LETTERS.map((letter, i) => (
          <LetterPanel
            key={letter + i}
            letter={letter}
            index={i}
            progress={progress}
            offsets={offsets}
          />
        ))}
      </div>

      {/* Thin vertical separator lines that appear between letters as they open */}
      <motion.div
        style={{ opacity: useTransform(progress, [0.15, 0.5], [0, 1]) }}
        className="absolute inset-0 pointer-events-none z-0 flex justify-around items-stretch"
        aria-hidden="true"
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-[1px] h-full bg-gradient-to-b from-transparent via-[rgba(244,240,234,0.08)] to-transparent"
          />
        ))}
      </motion.div>
    </div>
  );
}
