import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Parth",
  description: "Explore Parth's work: About, Projects, Experience, Tech Stack, and Contact.",
};

/* ─── Section label component (shared visual pattern) ─── */
function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-[1px] w-10 bg-[#d97736]" />
      <span className="font-mono text-[10px] tracking-widest text-[#B8C6BE] uppercase">
        {num} // {label}
      </span>
    </div>
  );
}

/* ─── Section heading component ─── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f4f0ea] uppercase leading-none mb-6">
      {children}
    </h2>
  );
}

/* ─── Placeholder notice ─── */
function Placeholder({ note }: { note?: string }) {
  return (
    <p className="font-mono text-xs text-[#a8a29e]/50 tracking-widest uppercase">
      [ {note ?? "Content placeholder — to be designed in a future phase"} ]
    </p>
  );
}

export default function PortfolioPage() {
  return (
    <div className="relative w-full bg-[#0c0b0a] select-none overflow-x-hidden">

      {/* ─────────────────────────────────────────────────────────────
       * SECTION 1 — ABOUT ME
       * Anchor: #about  |  CRT [ CLICK ME ] lands here first.
       * ───────────────────────────────────────────────────────────── */}
      <section
        id="about"
        aria-label="About Parth"
        className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24
                   border-b border-[rgba(244,240,234,0.06)]"
      >
        <div className="max-w-4xl w-full mx-auto">
          <SectionLabel num="SECTION 01" label="ABOUT" />
          <SectionHeading>ABOUT ME</SectionHeading>
          <Placeholder />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       * SECTION 2 — PROJECTS
       * Anchor: #projects
       * ───────────────────────────────────────────────────────────── */}
      <section
        id="projects"
        aria-label="Projects"
        className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24
                   border-b border-[rgba(244,240,234,0.06)]"
      >
        <div className="max-w-4xl w-full mx-auto">
          <SectionLabel num="SECTION 02" label="PROJECTS" />
          <SectionHeading>PROJECTS</SectionHeading>
          <Placeholder />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       * SECTION 3 — EXPERIENCE
       * Anchor: #experience
       * ───────────────────────────────────────────────────────────── */}
      <section
        id="experience"
        aria-label="Experience"
        className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24
                   border-b border-[rgba(244,240,234,0.06)]"
      >
        <div className="max-w-4xl w-full mx-auto">
          <SectionLabel num="SECTION 03" label="EXPERIENCE" />
          <SectionHeading>EXPERIENCE</SectionHeading>
          <Placeholder />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       * SECTION 4 — TECH STACK
       * Anchor: #stack
       * NOTE: Carousel is PERMITTED here for technologies & tools only.
       * ───────────────────────────────────────────────────────────── */}
      <section
        id="stack"
        aria-label="Tech Stack and Skills"
        className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24
                   border-b border-[rgba(244,240,234,0.06)]"
      >
        <div className="max-w-4xl w-full mx-auto">
          <SectionLabel num="SECTION 04" label="STACK" />
          <SectionHeading>TECH STACK</SectionHeading>
          <Placeholder note="Carousel content placeholder — to be designed in a future phase" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
       * SECTION 5 — CONTACT
       * Anchor: #contact
       * ───────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        aria-label="Contact"
        className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24"
      >
        <div className="max-w-4xl w-full mx-auto">
          <SectionLabel num="SECTION 05" label="CONTACT" />
          <SectionHeading>CONTACT</SectionHeading>
          <Placeholder />
        </div>
      </section>

    </div>
  );
}
