import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Parth",
  description: "Featured engineering projects and research.",
};

export default function ProjectsPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0c0b0a] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24">
      <div className="max-w-4xl w-full mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-10 bg-[#d97736]" />
          <span className="font-mono text-[10px] tracking-widest text-[#B8C6BE] uppercase">
            SECTION 02 // PROJECTS
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f4f0ea] uppercase leading-none mb-6">
          PROJECTS
        </h1>
        <p className="font-mono text-xs text-[#a8a29e]/50 tracking-widest uppercase">
          [ Content placeholder — to be designed in a future phase ]
        </p>
      </div>
    </main>
  );
}
