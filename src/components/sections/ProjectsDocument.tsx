import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import { PageHeader, focusRing } from "@/components/DocumentParts";
import { SourceLink } from "@/components/projects/ProjectDossier";

/** Technology chips shown on a card before "+N more". */
const CHIP_LIMIT = 6;

export default function ProjectsDocument() {
  return (
    <article className="space-y-10">
      <PageHeader
        title="Parth — Projects"
        subtitle="Engineering works, research artifacts, and shipped experiments."
      />

      <section className="space-y-6" aria-label="Documented projects">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="group overflow-hidden rounded border border-line bg-surface transition-colors hover:border-accent-text/60"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink-muted sm:px-6">
              <span className="flex items-center gap-2">
                <span className="text-accent-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{project.label}</span>
              </span>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-widest text-sage">
                  {project.category}
                </p>
                <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {project.title}
                </h2>
                <p className="text-[17px] text-ink-muted">{project.subtitle}</p>
              </div>

              <p className="max-w-prose text-[15px] leading-relaxed text-ink/90 sm:text-[17px] sm:leading-7">
                {project.summary}
              </p>

              <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                {project.technologies.slice(0, CHIP_LIMIT).map((technology) => (
                  <li
                    key={technology}
                    className="rounded-sm border border-line bg-surface-raised px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {technology}
                  </li>
                ))}
                {project.technologies.length > CHIP_LIMIT && (
                  <li className="px-1 py-1 font-mono text-xs text-ink-faint">
                    +{project.technologies.length - CHIP_LIMIT} more
                  </li>
                )}
              </ul>

              {/* Two exits: straight to the code, or the short dossier */}
              <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
                <SourceLink href={project.github} />
                <Link
                  href={`/projects/${project.slug}`}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-sm border border-accent bg-accent/30 px-4 font-mono text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-accent ${focusRing}`}
                >
                  Open dossier
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}
