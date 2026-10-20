"use client";

import Link from "next/link";

export default function CrtTerminal() {
  return (
    <Link
      href="/projects"
      role="button"
      aria-label="Enter Parth Archive — System Error detected. Click to initialize project directory."
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
      <div className="relative w-full h-full flex flex-col justify-between items-center text-center font-mono py-[14%] px-[8%] text-[#4af626] leading-none animate-crt-flicker">

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
      </div>
    </Link>
  );
}
