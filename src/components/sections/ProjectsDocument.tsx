import Link from "next/link";
import { ArrowUpRight, Clock, FileCode, Tag } from "lucide-react";
import { projects } from "@/content/projects";

export default function ProjectsDocument() {
  return (
    <article className="mx-auto max-w-2xl space-y-10 pr-2 sm:pr-4">
      <header className="space-y-3">
        <div className="inline-block bg-[#F4EFE6] px-4 py-2 text-[#121211] shadow-md border-b-2 border-[#642D3D] rounded-sm">
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-none text-[#121211]">
            PARTH — PROJECTS PORTFOLIO
          </h1>
        </div>
        <p className="font-mono text-xs text-[#A1AAA0] tracking-wide">
          Engineering works, research artifacts, and shipped experiments.
        </p>
      </header>

      <section
        aria-label="Projects index properties"
        className="p-4 rounded bg-[#181716] border border-[rgba(233,224,208,0.1)] space-y-2 font-mono text-xs"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[rgba(233,224,208,0.06)] pb-2 text-[10px] text-[#C24141] uppercase tracking-wider font-bold">
          <span className="flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-[#C24141]" aria-hidden="true" />
            PROPERTIES
          </span>
          <span className="text-[#A1AAA0]/60 text-[9px]">PROJECT INDEX</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <FileCode className="w-3 h-3 opacity-60" aria-hidden="true" />
            <span className="uppercase">SECTION</span>
          </div>
          <div className="sm:col-span-2 px-2.5 py-1 bg-[#201e1d] border border-[#642D3D] rounded text-[#E9E0D0] text-[11px]">
            02 // PROJECTS PORTFOLIO
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-0.5 items-center">
          <div className="flex items-center gap-1.5 text-[#A1AAA0] text-[11px] px-2 py-1 rounded bg-[#201e1d]">
            <Clock className="w-3 h-3 opacity-60" aria-hidden="true" />
            <span className="uppercase">RECORDS</span>
          </div>
          <div className="sm:col-span-2 flex items-center gap-2 px-2.5 py-1 text-[#E9E0D0] text-[11px]">
            {projects.length.toString().padStart(2, "0")} DOCUMENTED PROJECT
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-label="Documented projects">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="group overflow-hidden rounded border border-[rgba(233,224,208,0.1)] bg-[#181716] transition-colors hover:border-[rgba(100,45,61,0.8)]"
          >
            <div className="flex items-center justify-between border-b border-[rgba(233,224,208,0.08)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-[#A1AAA0] sm:px-5">
              <span className="flex items-center gap-2">
                <span className="text-[#C24141]">{String(index + 1).padStart(2, "0")}</span>
                <span>COLLABORATIVE SYSTEMS</span>
              </span>
              <span>PROJECT RECORD</span>
            </div>

            <div className="space-y-4 p-4 sm:p-5">
              <div className="space-y-1.5">
                <p className="font-mono text-[10px] tracking-wide text-[#B8C6BE]">
                  {project.category}
                </p>
                <h2 className="font-display text-xl font-bold tracking-tight text-[#E9E0D0] sm:text-2xl">
                  {project.title}
                </h2>
                <p className="font-mono text-xs text-[#A1AAA0]">
                  {project.subtitle}
                </p>
              </div>

              <p className="max-w-prose font-sans text-xs leading-relaxed text-[#E9E0D0]/75 sm:text-sm">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span
                    key={technology}
                    className="border border-[rgba(233,224,208,0.08)] bg-[#201e1d] px-2 py-1 font-mono text-[9px] text-[#A1AAA0]"
                  >
                    {technology}
                  </span>
                ))}
                <span className="px-1 py-1 font-mono text-[9px] text-[#A1AAA0]/60">
                  +{project.technologies.length - 4} MORE
                </span>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center justify-between gap-3 border-t border-[rgba(233,224,208,0.08)] pt-3 font-mono text-[10px] font-bold tracking-wide text-[#E9E0D0] transition-colors group-hover:text-[#F4EFE6]"
              >
                <span>OPEN PROJECT DOSSIER</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-[#B8C6BE] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}
