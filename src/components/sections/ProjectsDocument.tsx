import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { PageHeader, focusRing } from "@/components/DocumentParts";

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
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink-faint sm:px-6">
              <span className="flex items-center gap-2">
                <span className="text-accent-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>Collaborative systems</span>
              </span>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
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
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-sm border border-line bg-surface-raised px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <Link
                href={`/projects/${project.slug}`}
                className={`flex min-h-11 items-center justify-between gap-3 rounded border-t border-line pt-4 font-mono text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-accent-text ${focusRing}`}
              >
                <span>Open project dossier</span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-accent-text transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
