import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Workflow } from "lucide-react";
import type { projects } from "@/content/projects";
import { PageHeader, focusRing } from "@/components/DocumentParts";

type Project = (typeof projects)[number];

/**
 * Shared, short project dossier: What it is → How it works → Highlights →
 * Stack & source. Every project in `src/content/projects.ts` renders through it.
 */
export default function ProjectDossier({ project }: { project: Project }) {
  const highlights =
    "states" in project
      ? project.states.map((s) => ({ name: s.name, detail: s.signal, result: s.response }))
      : project.features.map((f) => ({ name: f.name, detail: f.detail, result: f.response }));
  const resultLabel = "states" in project ? "Response" : "Result";

  return (
    <article className="space-y-10">
      <Link
        href="/projects"
        className={`inline-flex min-h-11 items-center gap-2 rounded font-mono text-sm text-ink-muted transition-colors hover:text-ink ${focusRing}`}
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span>Back to projects</span>
      </Link>

      <div className="-mt-8 space-y-4">
        <PageHeader title={project.title} subtitle={project.subtitle} />
        <SourceLink href={project.github} />
      </div>

      <section className="space-y-5" aria-labelledby="what-it-is">
        <SectionTitle number="01" id="what-it-is">
          What it is
        </SectionTitle>
        <div className="space-y-4 text-[17px] leading-7">
          <p className="text-ink/90">{project.summary}</p>
          <p className="text-ink-muted">{project.overview}</p>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="how-it-works">
        <SectionTitle number="02" id="how-it-works">
          How it works
        </SectionTitle>
        <div className="rounded border border-line bg-surface p-5 sm:p-6">
          <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted">
            <Workflow className="h-3.5 w-3.5 text-accent-text" aria-hidden="true" />
            {project.flowTitle}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-1">
            {project.architecture.map((step, index) => (
              <div className="contents" key={step.label}>
                <div className="flex min-w-0 flex-1 flex-col justify-center rounded-sm border border-line bg-surface-raised p-3">
                  <span className="font-mono text-xs font-bold leading-snug text-ink">{step.label}</span>
                  <span className="mt-1 text-sm leading-relaxed text-ink-muted">{step.detail}</span>
                </div>
                {index < project.architecture.length - 1 && (
                  <>
                    <ArrowDown className="mx-auto h-4 w-4 shrink-0 text-accent-bright sm:hidden" aria-hidden="true" />
                    <ArrowRight className="my-auto hidden h-4 w-4 shrink-0 text-accent-bright sm:block" aria-hidden="true" />
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {project.supportingSystems.map((system) => (
              <div key={system.label} className="border-t border-line pt-4">
                <p className="font-mono text-xs font-bold tracking-widest text-sage">{system.label}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{system.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="highlights">
        <SectionTitle number="03" id="highlights">
          {project.highlightsTitle}
        </SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <li key={item.name} className="relative space-y-2 rounded border border-line bg-surface p-5">
              <span className="absolute right-4 top-4 font-mono text-xs text-ink-faint">0{index + 1}</span>
              <h3 className="pr-8 font-display text-[17px] font-bold tracking-wide text-ink">{item.name}</h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">{item.detail}</p>
              <p className="border-t border-line pt-2 font-mono text-xs uppercase leading-relaxed text-sage">
                <span className="tracking-widest">{resultLabel} · </span>
                {item.result}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5" aria-labelledby="stack-source">
        <SectionTitle number="04" id="stack-source">
          Stack &amp; source
        </SectionTitle>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-sm border border-line bg-surface px-3 py-1.5 font-mono text-sm text-sage"
            >
              {technology}
            </li>
          ))}
        </ul>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex min-h-11 items-center justify-between gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-accent-text/60 ${focusRing}`}
        >
          <span className="min-w-0">
            <span className="block font-display text-[17px] font-bold text-ink">{project.repoName}</span>
            <span className="mt-1 block break-all font-mono text-sm text-ink-muted">{project.github}</span>
          </span>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-sage transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>
    </article>
  );
}

/** "SOURCE ↗" link to the project's GitHub repository. */
export function SourceLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center gap-2 rounded-sm border border-line-strong px-4 font-mono text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-accent-text hover:bg-accent/25 ${focusRing}`}
    >
      Source
      <ArrowUpRight className="h-4 w-4 text-sage" aria-hidden="true" />
      <span className="sr-only"> on GitHub (opens in a new tab)</span>
    </a>
  );
}

function SectionTitle({ number, id, children }: { number: string; id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="flex items-baseline gap-3 font-display text-xl font-bold text-ink">
      <span className="font-mono text-sm font-normal text-accent-text">{number}</span>
      <span>{children}</span>
    </h2>
  );
}
