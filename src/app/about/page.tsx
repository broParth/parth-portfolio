import type { Metadata } from "next";
import CrtScreenBackground from "@/components/CrtScreenBackground";

export const metadata: Metadata = {
  title: "About | Parth",
  description: "About Parth — background, philosophy, and technical journey.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0c0b0a] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 select-none overflow-x-hidden">
      <CrtScreenBackground />
      <div className="relative z-10 max-w-4xl w-full mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-10 bg-[#d97736]" />
          <span className="font-mono text-[10px] tracking-widest text-[#B8C6BE] uppercase">
            SECTION 01 // ABOUT
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f4f0ea] uppercase leading-none mb-6">
          ABOUT ME
        </h1>
        <p className="font-mono text-xs text-[#a8a29e]/50 tracking-widest uppercase">
          [ Content placeholder — to be designed in a future phase ]
        </p>
      </div>
    </main>
  );
}
