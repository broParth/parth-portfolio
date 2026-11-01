"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  ChevronRight,
  ChevronDown,
  Network,
  Search,
  Bookmark,
  SlidersHorizontal,
  Plus,
  Edit3,
  FileCode,
  BookOpen,
  Briefcase,
  Mail,
} from "lucide-react";
import { aboutContent } from "@/content/about";

export type ActiveSection =
  | "about"
  | "projects"
  | "experience"
  | "contact";

interface ArchiveWorkshellProps {
  activeSection: ActiveSection;
  children: React.ReactNode;
}

const TABS: {
  key: ActiveSection;
  label: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "about",
    label: "PARTH — CALIBRATION",
    href: "/about",
    icon: <FileText className="w-3.5 h-3.5" />,
  },
  {
    key: "projects",
    label: "PROJECTS",
    href: "/projects",
    icon: <FileCode className="w-3.5 h-3.5 opacity-60" />,
  },
  {
    key: "experience",
    label: "EXPERIENCE",
    href: "/experience",
    icon: <Briefcase className="w-3.5 h-3.5 opacity-60" />,
  },
  {
    key: "contact",
    label: "CONTACT",
    href: "/contact",
    icon: <Mail className="w-3.5 h-3.5 opacity-60" />,
  },
];

const NAV_ITEMS: {
  key: ActiveSection;
  href: string;
  label: string;
}[] = [
  { key: "about", href: "/about", label: "Parth — Personnel File" },
  { key: "projects", href: "/projects", label: "Projects Portfolio" },
  { key: "experience", href: "/experience", label: "Work Experience" },
  { key: "contact", href: "/contact", label: "Operator Contact" },
];

// Section-specific right panel metadata
const SECTION_META: Record<
  ActiveSection,
  { fileLabel: string; statusLabel: string; graphLabel: string; breadcrumb: string }
> = {
  about: {
    fileLabel: "FILE PROPERTIES FOR PARTH",
    statusLabel: "PERSONNEL",
    graphLabel: "NODES: 32",
    breadcrumb: "PARTH — PERSONNEL FILE",
  },
  projects: {
    fileLabel: "FILE PROPERTIES: PROJECTS",
    statusLabel: "PORTFOLIO",
    graphLabel: "NODES: 18",
    breadcrumb: "PROJECTS PORTFOLIO",
  },
  experience: {
    fileLabel: "FILE PROPERTIES: EXPERIENCE",
    statusLabel: "EMPLOYMENT",
    graphLabel: "NODES: 12",
    breadcrumb: "WORK EXPERIENCE",
  },
  contact: {
    fileLabel: "FILE PROPERTIES: CONTACT",
    statusLabel: "COMMS",
    graphLabel: "NODES: 8",
    breadcrumb: "OPERATOR CONTACT",
  },
};

export default function ArchiveWorkshell({
  activeSection,
  children,
}: ArchiveWorkshellProps) {
  const { quickReference } = aboutContent;

  const [personnelFolderOpen, setPersonnelFolderOpen] = useState(true);
  const [dailyFolderOpen, setDailyFolderOpen] = useState(true);
  const [yearFolderOpen, setYearFolderOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<"nav" | "doc" | "props">(
    "doc"
  );

  const sectionMeta = SECTION_META[activeSection];

  return (
    <div className="relative w-full min-h-screen bg-[#121211] flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-16 sm:py-24 select-none overflow-x-hidden">
      <div className="relative z-10 max-w-[88rem] w-full mx-auto">
        <div
          className={`w-full bg-[#121211] text-[#E9E0D0] border border-[rgba(233,224,208,0.08)] rounded-xl shadow-2xl overflow-hidden font-sans`}
        >
          {/* ─────────────────────────────────────────────────────────────
           * TOP APPLICATION CHROME (Obsidian-Style Titlebar & Tabs)
           * ───────────────────────────────────────────────────────────── */}
          <div className="bg-[#181716] border-b border-[rgba(233,224,208,0.08)] select-none">
            {/* Upper Window Header Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 text-xs font-mono text-[#A1AAA0]">
              {/* Window dots & Vault Label */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3d3a37] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3d3a37] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3d3a37] inline-block" />
                </div>
                <div className="h-3 w-[1px] bg-[rgba(233,224,208,0.1)] hidden sm:block" />
                <span className="text-[11px] uppercase tracking-wider text-[#A1AAA0]/80 hidden md:inline">
                  PARTH ARCHIVE // RESEARCH WORKSPACE
                </span>
              </div>

              {/* Centered Obsidian Search/Path Pill */}
              <div className="flex items-center gap-2 bg-[#121211] border border-[rgba(233,224,208,0.08)] rounded-full px-3 py-1 text-[11px] text-[#A1AAA0] max-w-xs sm:max-w-md truncate">
                <span className="opacity-60 truncate">Commonplace</span>
                <span className="opacity-40">/</span>
                <span className="text-[#E9E0D0] font-medium truncate">
                  {sectionMeta.breadcrumb}
                </span>
                <Edit3 className="w-3 h-3 ml-1 opacity-50 hover:opacity-100 cursor-pointer hidden sm:inline" />
              </div>

              {/* System Online Badge */}
              <div className="flex items-center gap-2 text-[11px]">
                <span className="flex items-center gap-1.5 text-[#74F65B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#74F65B] animate-pulse" />
                  <span className="hidden sm:inline font-mono text-[10px]">
                    VERIFIED
                  </span>
                </span>
              </div>
            </div>

            {/* Tab Strip */}
            <div className="flex items-center justify-between px-2 sm:px-3 pt-1 border-t border-[rgba(233,224,208,0.04)] bg-[#141312] overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-1">
                {TABS.map((tab) => {
                  const isActive = activeSection === tab.key;
                  if (isActive) {
                    return (
                      <div
                        key={tab.key}
                        className="flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#642D3D] text-[#E9E0D0] rounded-t text-xs font-mono font-medium border-t-2 border-[#A83D50] shadow-sm"
                      >
                        {tab.icon}
                        <span className="tracking-tight">{tab.label}</span>
                        <span className="text-[#E9E0D0]/70 hover:text-white text-[11px] ml-1.5 cursor-pointer">
                          ×
                        </span>
                      </div>
                    );
                  }
                  // Keep experience and contact tabs to medium widths and above.
                  const hiddenOnSmall =
                    tab.key === "experience" || tab.key === "contact";
                  return (
                    <Link
                      key={tab.key}
                      href={tab.href}
                      className={`${hiddenOnSmall ? "hidden md:flex" : "flex"} items-center gap-1.5 px-3 py-1.5 text-[#A1AAA0] hover:text-[#E9E0D0] hover:bg-[#22201E]/60 rounded-t text-xs font-mono transition-colors`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </Link>
                  );
                })}

                {/* New Tab Plus */}
                <button
                  aria-label="New tab"
                  className="p-1 text-[#A1AAA0]/50 hover:text-[#E9E0D0] rounded transition-colors hidden sm:inline"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile View Switcher */}
              <div className="flex lg:hidden items-center gap-1 text-[11px] font-mono pb-1">
                <button
                  onClick={() => setMobilePanel("nav")}
                  className={`px-2 py-0.5 rounded ${
                    mobilePanel === "nav"
                      ? "bg-[#22201E] text-[#E9E0D0]"
                      : "text-[#A1AAA0]"
                  }`}
                >
                  NAV
                </button>
                <button
                  onClick={() => setMobilePanel("doc")}
                  className={`px-2 py-0.5 rounded ${
                    mobilePanel === "doc"
                      ? "bg-[#22201E] text-[#E9E0D0]"
                      : "text-[#A1AAA0]"
                  }`}
                >
                  DOC
                </button>
                <button
                  onClick={() => setMobilePanel("props")}
                  className={`px-2 py-0.5 rounded ${
                    mobilePanel === "props"
                      ? "bg-[#22201E] text-[#E9E0D0]"
                      : "text-[#A1AAA0]"
                  }`}
                >
                  GRAPH
                </button>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
           * MAIN THREE-REGION WORKSPACE
           * ───────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-[minmax(15rem,0.95fr)_minmax(2.75rem,0.35fr)_minmax(38rem,2.2fr)_minmax(18rem,1.1fr)] min-h-[750px] bg-[#121211]">
            {/* ─── LEFT PANEL: ARCHIVE NAVIGATOR (Obsidian File Tree) ─── */}
            <aside
              className={`lg:col-span-3 xl:col-span-1 border-r border-[rgba(233,224,208,0.08)] bg-[#151413] p-3 lg:flex flex-col justify-between ${
                mobilePanel === "nav" ? "flex" : "hidden lg:flex"
              }`}
            >
              <div className="space-y-3">
                {/* Header Tools */}
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(233,224,208,0.06)] font-mono text-[10px] text-[#A1AAA0] uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <span className="font-semibold text-[#E9E0D0]">
                      NOTEBOOK NAVIGATOR
                    </span>
                    <span className="opacity-50 text-[9px]">FILES</span>
                  </span>
                  <div className="flex items-center gap-2 opacity-70">
                    <Search className="w-3 h-3 hover:text-[#E9E0D0] cursor-pointer" />
                    <Bookmark className="w-3 h-3 hover:text-[#E9E0D0] cursor-pointer" />
                    <SlidersHorizontal className="w-3 h-3 hover:text-[#E9E0D0] cursor-pointer" />
                  </div>
                </div>

                {/* Hierarchical Folder / File Tree */}
                <nav className="font-mono text-xs space-y-1 select-none pt-1">
                  {/* Commonplace Section */}
                  <div>
                    <button
                      onClick={() =>
                        setPersonnelFolderOpen(!personnelFolderOpen)
                      }
                      className="w-full flex items-center gap-1.5 px-1.5 py-1 text-[#A1AAA0] hover:text-[#E9E0D0] hover:bg-[#22201E]/50 rounded text-left"
                    >
                      {personnelFolderOpen ? (
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                      )}
                      <span className="font-medium text-[11px] text-[#A1AAA0]">
                        Commonplace
                      </span>
                    </button>

                    {personnelFolderOpen && (
                      <div className="ml-3 pl-2 border-l border-[rgba(233,224,208,0.08)] space-y-0.5 mt-0.5">
                        {/* About — active highlight if activeSection === 'about', else link */}
                        {activeSection === "about" ? (
                          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#642D3D]/30 border border-[#642D3D] text-[#E9E0D0] font-medium text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A83D50]" />
                            <span className="truncate">
                              Parth — Personnel File
                            </span>
                          </div>
                        ) : (
                          <Link
                            href="/about"
                            className="flex items-center gap-2 px-2.5 py-1 text-[#A1AAA0]/70 hover:text-[#E9E0D0] hover:bg-[#22201E]/40 rounded text-[11px] transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A1AAA0]/30" />
                            <span className="truncate">
                              Parth — Personnel File
                            </span>
                          </Link>
                        )}

                        <div className="flex items-center gap-2 px-2.5 py-1 text-[#A1AAA0]/70 hover:text-[#E9E0D0] hover:bg-[#22201E]/40 rounded text-[11px] cursor-not-allowed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A1AAA0]/30" />
                          <span className="truncate">
                            Meeting — Project Restructure
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Daily Section */}
                  <div>
                    <button
                      onClick={() => setDailyFolderOpen(!dailyFolderOpen)}
                      className="w-full flex items-center gap-1.5 px-1.5 py-1 text-[#A1AAA0] hover:text-[#E9E0D0] hover:bg-[#22201E]/50 rounded text-left"
                    >
                      {dailyFolderOpen ? (
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                      )}
                      <span className="font-medium text-[11px] text-[#A1AAA0]">
                        Daily
                      </span>
                    </button>

                    {dailyFolderOpen && (
                      <div className="ml-3 pl-2 border-l border-[rgba(233,224,208,0.08)] space-y-0.5 mt-0.5">
                        <button
                          onClick={() => setYearFolderOpen(!yearFolderOpen)}
                          className="w-full flex items-center gap-1 px-2 py-0.5 text-[#A1AAA0]/70 hover:text-[#E9E0D0] text-[10px] text-left"
                        >
                          {yearFolderOpen ? (
                            <ChevronDown className="w-3 h-3 opacity-60" />
                          ) : (
                            <ChevronRight className="w-3 h-3 opacity-60" />
                          )}
                          <span>2026 Logs</span>
                        </button>
                        {yearFolderOpen && (
                          <div className="ml-3 pl-2 border-l border-[rgba(233,224,208,0.06)] text-[9px] text-[#A1AAA0]/50 space-y-0.5">
                            <div className="py-0.5">&gt; W13 // Sprint Review</div>
                            <div className="py-0.5">&gt; W14 // Security Audit</div>
                            <div className="py-0.5">
                              &gt; W16 // Systems Architecture
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Section Links — real routes only */}
                  {NAV_ITEMS.filter((n) => n.key !== "about").map((navItem) => {
                    const isActive = activeSection === navItem.key;
                    if (isActive) {
                      return (
                        <div
                          key={navItem.key}
                          className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#642D3D]/30 border border-[#642D3D] text-[#E9E0D0] font-medium text-[11px]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A83D50]" />
                          <span className="truncate">{navItem.label}</span>
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={navItem.key}
                        href={navItem.href}
                        className="flex items-center gap-1.5 px-1.5 py-1 text-[#A1AAA0] hover:text-[#E9E0D0] hover:bg-[#22201E]/50 rounded text-[11px] transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                        <span>{navItem.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Navigator Footer */}
              <div className="pt-4 mt-6 border-t border-[rgba(233,224,208,0.06)] font-mono text-[10px] text-[#A1AAA0]/60 space-y-1">
                <div className="flex justify-between">
                  <span>STORAGE // LOCAL</span>
                  <span className="text-[#E9E0D0]/80">VAULT: VERIFIED</span>
                </div>
                <div>RECORD ENTRIES: 06 ACTIVE</div>
              </div>
            </aside>

            {/* ─── VERTICAL SPINE BAR (Obsidian App Dock Spine) ─── */}
            <div
              aria-hidden="true"
              className="hidden xl:flex flex-col items-center justify-between py-6 px-1.5 bg-[#141312] border-r border-[rgba(233,224,208,0.06)] text-[9px] font-mono text-[#A1AAA0]/40 select-none"
            >
              <div className="h-8 w-[1px] bg-[rgba(233,224,208,0.1)]" />
              <span className="rotate-180 uppercase tracking-widest [writing-mode:vertical-rl]">
                PARTH // BUREAU
              </span>
              <div className="h-12 w-[1px] bg-[rgba(233,224,208,0.1)]" />
              <span className="rotate-180 uppercase tracking-widest [writing-mode:vertical-rl] text-[#A83D50]">
                OBSIDIAN MD
              </span>
              <div className="h-8 w-[1px] bg-[rgba(233,224,208,0.1)]" />
            </div>

            {/* ─── CENTER PANEL: THE DOCUMENT CANVAS ─── */}
            <main
              className={`lg:col-span-6 xl:col-span-1 xl:px-12 relative p-6 sm:p-10 lg:p-12 overflow-y-auto bg-[#121211] ${
                mobilePanel === "doc" ? "block" : "hidden lg:block"
              }`}
            >
              {/* Subtle Gutter Ruled Tick Marks */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-3 bottom-0 w-4 pointer-events-none hidden sm:flex flex-col justify-between py-8 opacity-20"
              >
                {Array.from({ length: 28 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-[1px] bg-[#E9E0D0] ${
                      i % 4 === 0 ? "w-3" : "w-1.5"
                    } self-end`}
                  />
                ))}
              </div>

              {children}
            </main>

            {/* ─── RIGHT PANEL: CONTEXT & PROPERTIES ─── */}
            <aside
              className={`lg:col-span-3 xl:col-span-1 border-l border-[rgba(233,224,208,0.08)] bg-[#151413] p-4 lg:flex flex-col gap-5 overflow-y-auto ${
                mobilePanel === "props" ? "flex" : "hidden lg:flex"
              }`}
            >
              {/* 1. Reticular Graph View */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(233,224,208,0.06)] font-mono text-[10px] text-[#A1AAA0] uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-[#E9E0D0]">
                    <Network className="w-3.5 h-3.5 text-[#d97736]" />
                    RETICULAR GRAPH VIEW
                  </span>
                  <span className="text-[9px] text-[#74F65B]">
                    {sectionMeta.graphLabel}
                  </span>
                </div>

                {/* Constellation Graph */}
                <div className="relative w-full aspect-square rounded bg-[#100f0f] border border-[rgba(233,224,208,0.06)] overflow-hidden flex items-center justify-center p-2">
                  <svg
                    viewBox="0 0 240 240"
                    className="w-full h-full text-[#A1AAA0]/20 select-none"
                  >
                    {/* Background Filament Constellation */}
                    <g stroke="currentColor" strokeWidth="0.6">
                      <line x1="120" y1="120" x2="80" y2="60" />
                      <line x1="120" y1="120" x2="160" y2="55" />
                      <line x1="120" y1="120" x2="190" y2="105" />
                      <line x1="120" y1="120" x2="175" y2="165" />
                      <line x1="120" y1="120" x2="135" y2="200" />
                      <line x1="120" y1="120" x2="70" y2="175" />
                      <line x1="120" y1="120" x2="50" y2="115" />
                      <line x1="80" y1="60" x2="160" y2="55" />
                      <line x1="160" y1="55" x2="190" y2="105" />
                      <line x1="190" y1="105" x2="175" y2="165" />
                      <line x1="175" y1="165" x2="135" y2="200" />
                      <line x1="135" y1="200" x2="70" y2="175" />
                      <line x1="70" y1="175" x2="50" y2="115" />
                      <line x1="50" y1="115" x2="80" y2="60" />
                      <line x1="80" y1="60" x2="105" y2="90" />
                      <line x1="160" y1="55" x2="140" y2="90" />
                      <line x1="190" y1="105" x2="155" y2="130" />
                      <line x1="175" y1="165" x2="145" y2="155" />
                      <line x1="70" y1="175" x2="95" y2="145" />
                      <line x1="50" y1="115" x2="85" y2="110" />
                      <line
                        x1="120"
                        y1="120"
                        x2="175"
                        y2="70"
                        stroke="#A83D50"
                        strokeWidth="1"
                      />
                    </g>
                    <g fill="#A1AAA0" opacity="0.4">
                      <circle cx="95" cy="75" r="1.5" />
                      <circle cx="110" cy="55" r="1.5" />
                      <circle cx="145" cy="70" r="1.5" />
                      <circle cx="165" cy="85" r="1.5" />
                      <circle cx="180" cy="130" r="1.5" />
                      <circle cx="160" cy="180" r="1.5" />
                      <circle cx="115" cy="185" r="1.5" />
                      <circle cx="85" cy="160" r="1.5" />
                      <circle cx="65" cy="140" r="1.5" />
                      <circle cx="60" cy="95" r="1.5" />
                    </g>
                    <circle cx="80" cy="60" r="3.5" fill="#E9E0D0" />
                    <circle cx="160" cy="55" r="3" fill="#A1AAA0" />
                    <circle cx="190" cy="105" r="3" fill="#A1AAA0" />
                    <circle cx="175" cy="165" r="3.5" fill="#E9E0D0" />
                    <circle cx="135" cy="200" r="3" fill="#A1AAA0" />
                    <circle cx="70" cy="175" r="3.5" fill="#A1AAA0" />
                    <circle cx="50" cy="115" r="3" fill="#E9E0D0" />
                    <circle
                      cx="175"
                      cy="70"
                      r="4.5"
                      fill="#C24141"
                      stroke="#F4EFE6"
                      strokeWidth="1"
                    />
                    <text
                      x="183"
                      y="73"
                      fontSize="8"
                      fill="#F4EFE6"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      SPECIMEN
                    </text>
                    <circle cx="120" cy="120" r="7" fill="#F4EFE6" />
                    <circle
                      cx="120"
                      cy="120"
                      r="11"
                      fill="none"
                      stroke="#642D3D"
                      strokeWidth="1.2"
                    />
                    <text
                      x="120"
                      y="138"
                      fontSize="8"
                      fill="#F4EFE6"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      PARTH
                    </text>
                  </svg>
                </div>
              </div>

              {/* 2. File Properties / Metadata Inspector Panel */}
              <div className="space-y-2.5 font-mono">
                <div className="flex items-center justify-between pb-1 border-b border-[rgba(233,224,208,0.06)] text-[10px] text-[#A1AAA0] uppercase tracking-wider">
                  <span>{sectionMeta.fileLabel}</span>
                  <span className="text-[#C24141] font-bold">INFO</span>
                </div>

                <div className="space-y-2 text-xs">
                  {quickReference.items.map((item) => (
                    <div
                      key={item.label}
                      className="p-2 rounded bg-[#181716] border border-[rgba(233,224,208,0.06)] space-y-0.5"
                    >
                      <div className="text-[10px] text-[#A1AAA0] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#642D3D]" />
                        <span>{item.label}</span>
                      </div>
                      <div className="font-sans text-xs text-[#E9E0D0] leading-snug pl-2.5">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* ─────────────────────────────────────────────────────────────
           * BOTTOM STATUS BAR (Obsidian Footer)
           * ───────────────────────────────────────────────────────────── */}
          <footer className="bg-[#141312] border-t border-[rgba(233,224,208,0.08)] px-4 py-2 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#A1AAA0] select-none">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="hover:text-[#E9E0D0] cursor-pointer">
                0 BACKLINKS
              </span>
              <span className="text-[rgba(233,224,208,0.15)]">•</span>
              <span className="text-[#E9E0D0] flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-[#A83D50]" />
                <span>9 PROPERTIES</span>
              </span>
              <span className="text-[rgba(233,224,208,0.15)] hidden sm:inline">
                •
              </span>
              <span className="hover:text-[#E9E0D0] cursor-pointer hidden sm:inline">
                BOOKMARKS
              </span>
            </div>

            <div className="flex items-center gap-4 text-[#A1AAA0]/70">
              <span>534 WORDS · 2,948 CHARACTERS</span>
              <span className="text-[rgba(233,224,208,0.15)] hidden sm:inline">
                •
              </span>
              <span className="text-[#74F65B] hidden sm:inline">
                UTF-8 // VERIFIED
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
