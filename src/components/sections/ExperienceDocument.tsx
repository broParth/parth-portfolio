import React from "react";
import { Tag, Briefcase, Clock } from "lucide-react";

export default function ExperienceDocument() {
  return (
    <article className="max-w-2xl mx-auto space-y-10 pr-2 sm:pr-4">
      {/* Stamped Paper Title Banner */}
      <div className="space-y-3">
        <div className="inline-block bg-[#F4EFE6] text-[#121211] px-4 py-2 rounded-sm shadow-md border-b-2 border-[#642D3D]">
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-none text-[#121211]">
            PARTH — WORK EXPERIENCE
          </h1>
        </div>
        <p className="font-mono text-xs text-[#A1AAA0] tracking-wide">
          Employment history, roles, and professional engagements.
        </p>
      </div>

      {/* Frontmatter Properties Block */}
      <div className="p-4 rounded bg-[#181716] border border-[rgba(233,224,208,0.1)] space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-[rgba(233,224,208,0.06)] pb-2 text-[10px] text-[#C24141] uppercase tracking-wider font-bold">
          <span className="flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-[#C24141]" />
            PROPERTIES
          </span>
          <span className="text-[#A1AAA0]/60 text-[9px]">YAML FRONTMATTER</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <Briefcase className="w-3 h-3 opacity-60" />
            <span className="uppercase">SECTION</span>
          </div>
          <div className="sm:col-span-2 px-2.5 py-1 bg-[#201e1d] border border-[#642D3D] rounded text-[#E9E0D0] text-[11px] truncate">
            03 // WORK EXPERIENCE
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <Clock className="w-3 h-3 opacity-60" />
            <span className="uppercase">STATUS</span>
          </div>
          <div className="sm:col-span-2 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#2a1f12] text-[#d97736] border border-[#d97736]/40 text-[10px] uppercase font-bold">
              PENDING COMPILATION
            </span>
          </div>
        </div>
      </div>

      {/* Placeholder Notice */}
      <div className="p-5 sm:p-6 rounded bg-[#181716] border-l-4 border-l-[#642D3D] border-y border-r border-[rgba(233,224,208,0.08)] space-y-3">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#A1AAA0] uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="bg-[#F4EFE6] text-[#121211] font-display font-bold text-[10px] px-2 py-0.5 rounded-sm">
              RECORD STATUS
            </span>
            <span className="text-[#C24141] font-bold">PENDING</span>
          </span>
          <span>EXP_V0</span>
        </div>

        <p className="font-mono text-xs text-[#A1AAA0] leading-relaxed">
          [ RECORD PENDING — Content to be compiled in a future phase ]
        </p>

        <p className="font-sans text-xs sm:text-sm text-[#E9E0D0]/70 leading-relaxed">
          This section will contain professional roles, internships, and
          collaborative engagements. Each entry will outline responsibilities,
          technologies used, and impact delivered.
        </p>
      </div>

      <div className="h-[1px] bg-[rgba(233,224,208,0.08)]" />

      {/* Archival placeholder entries */}
      <div className="space-y-3">
        {["ROLE_ALPHA // 2025", "ROLE_BETA // 2024"].map((entry) => (
          <div
            key={entry}
            className="p-4 rounded bg-[#181716] border border-[rgba(233,224,208,0.08)] space-y-2 opacity-40"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-[#E9E0D0] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#642D3D]" />
              <span>{entry}</span>
            </div>
            <div className="h-2 w-2/3 rounded bg-[#A1AAA0]/20" />
            <div className="h-2 w-1/2 rounded bg-[#A1AAA0]/10" />
          </div>
        ))}
      </div>
    </article>
  );
}
