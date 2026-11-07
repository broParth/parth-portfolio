"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bookmark,
  Briefcase,
  FileCode,
  FileText,
  Mail,
  Network,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { getFileProperties } from "@/content/fileProperties";
import { projects } from "@/content/projects";
import { focusRing } from "@/components/DocumentParts";
import ArchiveGraph from "@/components/ArchiveGraph";
import ScrollThumb from "@/components/ScrollThumb";

/** The active document is read from the URL, so no section prop is needed. */
interface ArchiveWorkshellProps {
  children: ReactNode;
}

const TABS = [
  { href: "/about", label: "PARTH — PERSONNEL FILE", short: "ABOUT", icon: FileText },
  { href: "/projects", label: "PROJECTS", short: "PROJECTS", icon: FileCode },
  { href: "/experience", label: "EXPERIENCE", short: "EXPERIENCE", icon: Briefcase },
  { href: "/contact", label: "CONTACT", short: "CONTACT", icon: Mail },
];

/** Flat menu of real documents. Project dossiers sit indented under Projects. */
const MENU: { href: string; label: string; child?: boolean }[] = [
  { href: "/about", label: "Parth — Personnel File" },
  { href: "/projects", label: "Projects Portfolio" },
  ...projects.map((project) => ({
    href: `/projects/${project.slug}`,
    label: project.title,
    child: true,
  })),
  { href: "/experience", label: "Work Experience" },
  { href: "/contact", label: "Operator Contact" },
];

/** Breadcrumb [parent, document] for the current URL. */
function breadcrumbFor(pathname: string): string[] {
  const index = MENU.findIndex((entry) => entry.href === pathname);
  if (index === -1) return ["Archive", "Record not found"];
  const item = MENU[index];
  if (item.child) {
    const parent = MENU.slice(0, index).reverse().find((entry) => !entry.child);
    return [parent?.label ?? "Archive", item.label];
  }
  return ["Archive", item.label];
}

export default function ArchiveWorkshell({ children }: ArchiveWorkshellProps) {
  const pathname = usePathname();
  const [mobilePanel, setMobilePanel] = useState<"nav" | "doc" | "info">("doc");
  const [folderLabel, docLabel] = breadcrumbFor(pathname);
  const fileProperties = getFileProperties(pathname);
  const infoScrollRef = useRef<HTMLDivElement>(null);

  const isTabActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const panelButton = (key: typeof mobilePanel, label: string, extra = "") => (
    <button
      type="button"
      onClick={() => setMobilePanel(key)}
      aria-pressed={mobilePanel === key}
      className={`min-h-11 min-w-11 rounded px-2 font-mono text-[11px] max-md:min-h-10 max-md:flex-1 ${focusRing} ${extra} ${
        mobilePanel === key ? "bg-surface-raised text-ink" : "text-ink-muted"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center px-1.5 py-2 sm:px-8 sm:py-24 lg:px-12">
      <a
        href="#document"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-paper focus:px-3 focus:py-2 focus:text-paper-ink"
      >
        Skip to document
      </a>

      <div className="relative z-10 mx-auto w-full max-w-[88rem]">
        <div className="w-full overflow-clip rounded-xl border border-line bg-canvas text-ink shadow-2xl">
          {/* ─── Title bar & tabs ─── */}
          <div className="border-b border-line bg-surface">
            <div className="flex items-center justify-between gap-3 px-3 py-2 font-mono text-[11px] text-ink-muted sm:px-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3d3a37]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3d3a37]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3d3a37]" />
                </div>
                <span className="hidden h-3 w-px bg-line-strong sm:block" aria-hidden="true" />
                <span className="hidden uppercase tracking-wider text-ink-muted md:inline">
                  PARTH ARCHIVE // RESEARCH WORKSPACE
                </span>
              </div>

              <p className="flex min-w-0 max-w-xs items-center gap-2 truncate rounded-full border border-line bg-canvas px-3 py-1 sm:max-w-md">
                <span className="truncate opacity-70">{folderLabel}</span>
                <span className="opacity-50" aria-hidden="true">/</span>
                <span className="truncate font-medium text-ink">{docLabel}</span>
              </p>

              <span className="flex items-center gap-1.5 text-neon">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" aria-hidden="true" />
                <span className="hidden text-[10px] sm:inline">VERIFIED</span>
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-line bg-panel px-2 pt-1 max-md:flex-wrap max-md:gap-0 sm:px-3">
              <nav aria-label="Documents" className="min-w-0 flex-1 max-md:basis-full">
                <ul className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none]">
                  {TABS.map(({ href, label, short, icon: Icon }) => {
                    const active = isTabActive(href);
                    return (
                      <li key={href} className="shrink-0">
                        <Link
                          href={href}
                          aria-current={active ? "page" : undefined}
                          className={`flex min-h-11 items-center gap-2 rounded-t px-3 font-mono text-xs transition-colors max-md:min-h-10 max-md:px-2.5 max-md:text-[11px] xl:min-h-0 xl:py-1.5 sm:px-4 ${focusRing} ${
                            active
                              ? "border-t-2 border-accent-bright bg-accent font-medium text-ink shadow-sm"
                              : "text-ink-muted hover:bg-surface-raised/60 hover:text-ink"
                          }`}
                        >
                          <Icon className={`h-3.5 w-3.5 max-md:hidden ${active ? "" : "opacity-60"}`} aria-hidden="true" />
                          <span className="whitespace-nowrap tracking-tight max-md:hidden">{label}</span>
                          <span className="whitespace-nowrap tracking-tight md:hidden">{short}</span>
                          {active && (
                            <span aria-hidden="true" className="ml-1.5 text-[11px] text-ink/70">
                              ×
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                  {/* Decorative "new tab" plus, as in the original workspace */}
                  <li aria-hidden="true" className="hidden shrink-0 p-1 text-ink-muted/50 sm:block">
                    <Plus className="h-3.5 w-3.5" />
                  </li>
                </ul>
              </nav>

              {/* Small-screen view switcher */}
              <div className="flex shrink-0 items-center gap-1 pb-1 max-md:w-full max-md:border-t max-md:border-line max-md:py-1 lg:hidden" role="group" aria-label="Workspace panels">
                {panelButton("nav", "NAV", "md:hidden")}
                {panelButton("doc", "DOC")}
                {panelButton("info", "GRAPH")}
              </div>
            </div>
          </div>

          {/* ─── Workspace ─── */}
          <div className="grid min-h-[750px] grid-cols-1 bg-canvas max-sm:min-h-0 md:grid-cols-[15rem_minmax(0,1fr)] lg:grid-cols-12 xl:grid-cols-[minmax(15rem,0.95fr)_1.75rem_minmax(38rem,2.4fr)_minmax(18rem,1.1fr)]">
            {/* Left: notebook navigator (flat menu) */}
            <aside
              aria-label="Notebook navigator"
              className={`${mobilePanel === "nav" ? "block" : "hidden"} border-line bg-panel p-3 md:block md:border-r lg:col-span-3 xl:col-span-1`}
            >
              {/* Sticky: stays in view while the document scrolls */}
              <div className="md:sticky md:top-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-line pb-2 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-ink">NOTEBOOK NAVIGATOR</span>
                    <span className="text-[9px] opacity-60">FILES</span>
                  </p>
                  {/* Decorative toolbar, as in the original workspace */}
                  <span className="flex items-center gap-2 opacity-70" aria-hidden="true">
                    <Search className="h-3 w-3" />
                    <Bookmark className="h-3 w-3" />
                    <SlidersHorizontal className="h-3 w-3" />
                  </span>
                </div>
                <ul className="space-y-0.5 pt-1 font-mono">
                  {MENU.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href} className={item.child ? "ml-3 border-l border-line pl-2" : undefined}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setMobilePanel("doc")}
                          className={`flex min-h-10 items-center gap-2 rounded px-2.5 py-1 text-xs transition-colors xl:min-h-0 ${focusRing} ${
                            active
                              ? "border border-accent bg-accent/30 font-medium text-ink"
                              : "border border-transparent text-ink-muted hover:bg-surface-raised/50 hover:text-ink"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${active ? "bg-accent-bright" : "bg-ink-muted/40"}`}
                          />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-6 space-y-1 border-t border-line pt-4 font-mono text-[10px] text-ink-muted">
                <div className="flex justify-between">
                  <span>STORAGE // LOCAL</span>
                  <span className="text-neon">VAULT: VERIFIED</span>
                </div>
                <div>RECORD ENTRIES: {String(MENU.length).padStart(2, "0")} ACTIVE</div>
              </div>
              </div>
            </aside>

            {/* Spine */}
            <div
              aria-hidden="true"
              className="hidden select-none flex-col items-center justify-between border-r border-line bg-panel px-0 py-6 font-mono text-[9px] text-ink-faint xl:flex"
            >
              <div className="h-8 w-px bg-line-strong" />
              <span className="rotate-180 uppercase tracking-widest [writing-mode:vertical-rl]">PARTH // BUREAU</span>
              <div className="h-12 w-px bg-line-strong" />
              <span className="rotate-180 uppercase tracking-widest text-accent-bright [writing-mode:vertical-rl]">ARCHIVE MD</span>
              <div className="h-8 w-px bg-line-strong" />
            </div>

            {/* Center: document */}
            <main
              id="document"
              className={`${
                mobilePanel === "info"
                  ? "hidden lg:block"
                  : mobilePanel === "doc"
                    ? "block"
                    : "hidden md:block"
              } @container relative overflow-y-auto bg-canvas px-4 py-5 sm:p-10 lg:col-span-6 lg:p-12 xl:col-span-1 xl:px-12`}
            >
              {/* Ruler ticks */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-3 top-0 hidden w-4 flex-col justify-between py-8 opacity-20 sm:flex"
              >
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className={`h-px self-end bg-ink ${i % 4 === 0 ? "w-3" : "w-1.5"}`} />
                ))}
              </div>
              <div className="mx-auto max-w-2xl pr-2 sm:pr-4">{children}</div>
            </main>

            {/* Right: graph + file properties */}
            <aside
              aria-label="Graph and quick reference"
              className={`${mobilePanel === "info" ? "block" : "hidden"} border-line bg-panel p-4 md:col-span-2 lg:col-span-3 lg:block lg:border-l xl:col-span-1`}
            >
              {/* Sticky: graph + properties stay in view; scrolls internally if taller than the screen */}
              <div className="relative lg:sticky lg:top-4">
              <div
                ref={infoScrollRef}
                className="flex flex-col gap-5 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto lg:pr-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
              <section className="space-y-2">
                <h2 className="flex items-center justify-between border-b border-line pb-2 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                  <span className="flex items-center gap-1.5 text-ink">
                    <Network className="h-3.5 w-3.5 text-ember" aria-hidden="true" />
                    RETICULAR GRAPH VIEW
                  </span>
                  <span className="text-[9px] text-neon">NODES: {MENU.length + 1}</span>
                </h2>
                <ArchiveGraph pathname={pathname} />
              </section>

              <section className="space-y-2.5 font-mono">
                <h2 className="flex items-center justify-between border-b border-line pb-1 text-[10px] uppercase tracking-wider text-ink-muted">
                  <span className="truncate">FILE PROPERTIES FOR {fileProperties.subject}</span>
                  <span className="font-bold text-accent-text">INFO</span>
                </h2>
                <dl className="space-y-2">
                  {fileProperties.items.map((item) => (
                    <div key={item.label} className="space-y-0.5 rounded border border-line bg-surface p-2">
                      <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                        <span className="h-1 w-1 rounded-full bg-accent-bright" aria-hidden="true" />
                        {item.label}
                      </dt>
                      <dd className="pl-2.5 font-sans text-xs leading-snug text-ink">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
              </div>
              <ScrollThumb target={infoScrollRef} />
              </div>
            </aside>
          </div>

          {/* ─── Status bar ─── */}
          <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line bg-panel px-4 py-2 font-mono text-[11px] text-ink-muted">
            <span>
              {folderLabel} / <span className="text-ink">{docLabel}</span>
            </span>
            <span className="flex items-center gap-4">
              <span className="text-ink-faint">
                {TABS.length} SECTIONS · {projects.length} PROJECT{(projects.length as number) === 1 ? "" : "S"}
              </span>
              <span className="hidden text-line-strong sm:inline" aria-hidden="true">•</span>
              <span className="hidden text-neon sm:inline">UTF-8 // VERIFIED</span>
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
