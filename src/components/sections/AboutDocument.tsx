"use client";

import React from "react";
import { aboutContent } from "@/content/about";
import {
  FileText,
  Tag,
  Hash,
  ExternalLink,
  CheckSquare,
  Calendar,
  Shield,
  Plus,
} from "lucide-react";

interface AboutDocumentProps {
  isStandalone?: boolean;
}

const technologies = [
  "Java",
  "Python",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Git",
  "GitHub",
  "VS Code",
  "Linux",
  "AWS EC2",
] as const;

export default function AboutDocument({
  isStandalone = false,
}: AboutDocumentProps) {
  const { meta, identity, investigations, personalNotes } = aboutContent;

  const HeadingTag = isStandalone ? "h1" : "h2";

  return (
    <article className="max-w-2xl mx-auto space-y-12 pr-2 sm:pr-4">
      {/* 1. Stamped Paper Title Banner */}
      <div className="space-y-3">
        <div className="inline-block max-w-full bg-[#F4EFE6] text-[#121211] px-4 py-2 rounded-sm shadow-md border-b-2 border-[#642D3D]">
          <HeadingTag className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-none text-[#121211]">
            PARTH — {meta.sectionLabel}
          </HeadingTag>
        </div>
        <p className="font-mono text-xs text-[#A1AAA0] tracking-wide">
          {meta.subtitle}
        </p>
      </div>

      {/* 2. Inset Frontmatter / Properties Table */}
      <div className="p-4 sm:p-5 rounded bg-[#181716] border border-[rgba(233,224,208,0.1)] space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-[rgba(233,224,208,0.06)] pb-2 text-[10px] text-[#C24141] uppercase tracking-wider font-bold">
          <span className="flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-[#C24141]" />
            PROPERTIES
          </span>
          <span className="text-[#A1AAA0]/60 text-[9px]">YAML FRONTMATTER</span>
        </div>

        {/* Title Property Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <FileText className="w-3 h-3 opacity-60" />
            <span className="uppercase">TITLE</span>
          </div>
          <div className="sm:col-span-2 min-w-0 px-2.5 py-1.5 bg-[#201e1d] border border-[#642D3D] rounded text-[#E9E0D0] text-[11px] leading-relaxed break-words [overflow-wrap:anywhere]">
            Parth — Computer Science &amp; Software Systems
          </div>
        </div>

        {/* Status Property Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <Shield className="w-3 h-3 opacity-60" />
            <span className="uppercase">STATUS</span>
          </div>
          <div className="sm:col-span-2 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#642D3D] text-[#E9E0D0] border border-[#A83D50] text-[10px] uppercase font-bold flex items-center gap-1">
              <span>ACTIVE</span>
              <span className="text-white/60">×</span>
            </span>
            <span className="text-[#74F65B] text-[10px]">● VERIFIED</span>
          </div>
        </div>

        {/* Clearance Property Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <Hash className="w-3 h-3 opacity-60" />
            <span className="uppercase">CLEARANCE</span>
          </div>
          <div className="sm:col-span-2 min-w-0 px-2.5 py-1.5 bg-[#201e1d] border border-[rgba(233,224,208,0.08)] rounded text-[#E9E0D0] text-[11px] leading-relaxed break-words [overflow-wrap:anywhere]">
            4 // UNRESTRICTED ARCHIVAL ACCESS
          </div>
        </div>

        {/* Verified Checkbox Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <CheckSquare className="w-3 h-3 opacity-60" />
            <span className="uppercase">VERIFIED</span>
          </div>
          <div className="sm:col-span-2 min-w-0 flex items-center gap-2 text-[11px] text-[#E9E0D0]">
            <input
              type="checkbox"
              checked
              readOnly
              className="accent-[#642D3D] w-3.5 h-3.5 rounded cursor-default"
            />
            <span className="text-[#A1AAA0]">Confirms operator identity record</span>
          </div>
        </div>

        {/* Opened Date Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <Calendar className="w-3 h-3 opacity-60" />
            <span className="uppercase">OPENED</span>
          </div>
          <div className="sm:col-span-2 min-w-0 px-2.5 py-1.5 bg-[#201e1d] border border-[rgba(233,224,208,0.08)] rounded text-[#E9E0D0] text-[11px] flex items-center justify-between">
            <span>05/31/2026</span>
            <ExternalLink className="w-3 h-3 opacity-40" />
          </div>
        </div>

        {/* Tags Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <Tag className="w-3 h-3 opacity-60" />
            <span className="uppercase">TAGS</span>
          </div>
          <div className="sm:col-span-2 flex flex-wrap gap-1.5 text-[10px]">
            {["systems", "cybersecurity", "ui-ux", "ai-ml"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-[#201e1d] border border-[rgba(233,224,208,0.08)] text-[#A1AAA0] rounded hover:text-[#E9E0D0] flex items-center gap-1"
              >
                <span>{tag}</span>
                <span className="text-white/40">×</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Add Property link */}
        <div className="pt-1 text-[10px] text-[#A1AAA0]/50 flex items-center gap-1 hover:text-[#A1AAA0] cursor-pointer">
          <Plus className="w-3 h-3" />
          <span>Add property</span>
        </div>
      </div>

      {/* 3. Paper Advisory Dispatch */}
      <div className="relative pt-3">
        {/* Floating Pill Tag */}
        <div className="absolute top-0 right-3 z-10 bg-[#2D4558] text-[#93C5FD] text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-[#3b5970] shadow-sm uppercase tracking-wide">
          BUREAU DISPLAY CALIBRATION
        </div>

        <div className="p-5 sm:p-6 rounded bg-[#F4EFE6] text-[#121211] shadow-lg border-l-4 border-[#642D3D] space-y-3">
          <div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider text-[#642D3D]">
            <span>OPERATOR STATEMENT // ARCHIVAL DISPATCH</span>
            <span>RECORD-001</span>
          </div>
          <p className="font-mono text-sm sm:text-base leading-relaxed text-[#121211] font-medium">
            &ldquo;{identity.paragraphs[1]}&rdquo;
          </p>
          <div className="font-sans text-xs text-[#121211]/70 pt-1 border-t border-[#121211]/15">
            The initial spark gave way to permanent curiosity: understanding the
            machinery beneath everyday tools.
          </div>
        </div>
      </div>

      {/* 4. Section 01: IDENTITY */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="bg-[#F4EFE6] text-[#121211] font-display font-bold text-xs px-2.5 py-0.5 rounded-sm uppercase tracking-wide shadow-sm">
            01 // IDENTITY
          </span>
        </div>

        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#E9E0D0] leading-snug">
          {identity.headline}
        </h2>

        <div className="space-y-3 font-sans text-sm sm:text-base text-[#E9E0D0]/90 leading-7">
          <p>{identity.paragraphs[0]}</p>
          {/* Archival Redaction / Highlight Demonstration */}
          <div className="p-3 rounded bg-[#181716] border border-[rgba(233,224,208,0.08)] font-mono text-xs text-[#A1AAA0] space-y-1">
            <div className="text-[10px] text-[#A83D50] uppercase tracking-wider font-bold">
              SPECIMEN // INLINE NOTATION
            </div>
            <div>
              Focus:{" "}
              <span className="bg-[#642D3D]/40 text-[#E9E0D0] px-1 py-0.5 rounded">
                software architecture
              </span>
              ,{" "}
              <span className="text-[#d9a86c] italic font-serif">
                cybersecurity protocols
              </span>
              , and{" "}
              <span
                title="Hover to reveal redaction"
                className="bg-[#121211] text-[#121211] hover:text-[#74F65B] hover:bg-[#1a1918] px-1.5 py-0.5 rounded border border-[#3d3a37] transition-all cursor-help"
              >
                [ CLASSIFIED DIRECTIVE ]
              </span>
              .
            </div>
          </div>
          <p>{identity.paragraphs[2]}</p>
        </div>
      </section>

      {/* Thin Horizontal Divider */}
      <div className="h-[1px] bg-[rgba(233,224,208,0.08)]" />

      {/* 5. Section 02: CURRENT INVESTIGATIONS */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="bg-[#F4EFE6] text-[#121211] font-display font-bold text-xs px-2.5 py-0.5 rounded-sm uppercase tracking-wide shadow-sm">
            02 // INVESTIGATIONS
          </span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-[#E9E0D0]">
          {investigations.title}
        </h3>

        {/* Compact Dossier Focus Area Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2">
          {investigations.focusAreas.map((area) => (
            <div
              key={area.domain}
              className="p-3 rounded bg-[#181716] border border-[rgba(233,224,208,0.08)] hover:border-[#642D3D] transition-colors"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#E9E0D0] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#642D3D]" />
                <span>{area.domain}</span>
              </div>
              <div className="font-sans text-xs text-[#A1AAA0] mt-1 pl-3.5">
                {area.note}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Thin Horizontal Divider */}
      <div className="h-[1px] bg-[rgba(233,224,208,0.08)]" />

      {/* 6. Section 03: PERSONAL NOTES */}
      <section className="p-5 sm:p-7 rounded bg-[#181716] border-l-4 border-l-[#642D3D] border-y border-r border-[rgba(233,224,208,0.08)] space-y-4">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#A1AAA0] uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="bg-[#F4EFE6] text-[#121211] font-display font-bold text-[10px] px-2 py-0.5 rounded-sm">
              03 // FIELD NOTES
            </span>
            <span className="text-[#C24141] font-bold">UNFILTERED MEMO</span>
          </span>
          <span>PARTH_V3</span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-[#E9E0D0]">
          {personalNotes.headline}
        </h3>

        <div className="space-y-3 font-sans text-sm sm:text-base text-[#E9E0D0]/85 leading-7">
          {personalNotes.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-5 border-t border-[rgba(233,224,208,0.12)] pt-4">
          <h4 className="mb-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#A1AAA0]">
            LANGUAGES &amp; TOOLS
          </h4>
          <p className="sr-only">
            {`Languages and tools: ${technologies.join(", ")}.`}
          </p>
          <div className="about-tech-marquee" aria-hidden="true">
            <div className="about-tech-marquee__track">
              {[0, 1].map((copy) => (
                <div className="about-tech-marquee__copy" key={copy}>
                  {technologies.map((technology, index) => (
                    <span
                      className="about-tech-marquee__entry"
                      key={`${copy}-${technology}`}
                    >
                      {index > 0 && (
                        <span className="about-tech-marquee__separator">·</span>
                      )}
                      {technology}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
