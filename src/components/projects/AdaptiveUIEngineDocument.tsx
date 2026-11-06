import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { adaptiveUIEngine as project } from "@/content/projects";
import { PageHeader, focusRing } from "@/components/DocumentParts";

const facts = [
  { label: "Category", value: "Windows desktop utility" },
  { label: "My contribution", value: "UI design · OS integration" },
  { label: "Collaboration", value: "Two contributors" },
];

export default function AdaptiveUIEngineDocument() {
  return (
    <article className="space-y-10">
      <Link
        href="/projects"
        className={`inline-flex min-h-11 items-center gap-2 rounded font-mono text-sm text-ink-muted transition-colors hover:text-ink ${focusRing}`}
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span>Back to projects</span>
      </Link>

      <div className="-mt-8 space-y-8">
        <PageHeader title={project.title} subtitle={project.subtitle} />

        <dl className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="space-y-1 bg-surface p-4">
              <dt className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                {fact.label}
              </dt>
              <dd className="text-[15px] text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="space-y-5" aria-labelledby="project-overview">
        <SectionTitle number="01" id="project-overview">
          Project overview
        </SectionTitle>
        <div className="space-y-4 text-[17px] leading-7">
          <p className="text-ink/90">{project.summary}</p>
          <p className="text-ink-muted">
            Instead of treating the desktop as a fixed surface, the system
            observes activity, classifies a changing interaction context, and
            responds with a corresponding overlay or Windows-level adjustment.
          </p>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="system-architecture">
        <SectionTitle number="02" id="system-architecture">
          System architecture
        </SectionTitle>
        <div className="rounded border border-line bg-surface p-5 sm:p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-faint">
            Input to adaptive response
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-1">
            {project.architecture.map((step, index) => (
              <div className="contents" key={step.label}>
                <div className="flex min-w-0 flex-1 flex-col justify-center rounded-sm border border-line bg-surface-raised p-3">
                  <span className="font-mono text-xs font-bold leading-snug text-ink">
                    {step.label}
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {step.detail}
                  </span>
                </div>
                {index < project.architecture.length - 1 && (
                  <>
                    <ArrowDown
                      className="mx-auto h-4 w-4 shrink-0 text-accent-text sm:hidden"
                      aria-hidden="true"
                    />
                    <ArrowRight
                      className="my-auto hidden h-4 w-4 shrink-0 text-accent-text sm:block"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {project.supportingSystems.map((system) => (
              <div key={system.label} className="border-t border-line pt-4">
                <p className="font-mono text-xs font-bold tracking-widest text-ink">
                  {system.label}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">
                  {system.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="four-states">
        <SectionTitle number="03" id="four-states">
          The four states
        </SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-2">
          {project.states.map((state, index) => (
            <li
              key={state.name}
              className="relative space-y-2 rounded border border-line bg-surface p-5"
            >
              <span className="absolute right-4 top-4 font-mono text-xs text-ink-faint">
                0{index + 1}
              </span>
              <h3 className="font-display text-[17px] font-bold tracking-wide text-ink">
                {state.name}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">
                {state.signal}
              </p>
              <p className="border-t border-line pt-2 text-sm leading-relaxed text-ink">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-text">
                  Response ·{" "}
                </span>
                {state.response}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5" aria-labelledby="implementation">
        <SectionTitle number="04" id="implementation">
          Implementation
        </SectionTitle>
        <dl className="divide-y divide-line border-y border-line">
          {project.implementation.map((item) => (
            <div
              key={item.label}
              className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
            >
              <dt className="font-mono text-xs font-bold tracking-widest text-ink-faint sm:pt-1">
                {item.label}
              </dt>
              <dd className="text-[15px] leading-relaxed text-ink/90">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-5" aria-labelledby="contribution">
        <SectionTitle number="05" id="contribution">
          My contribution
        </SectionTitle>
        <div className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2">
          <div className="space-y-2 bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent-text">
              Parth Chourasia
            </p>
            <h3 className="font-display text-[17px] font-bold text-ink">
              {project.contribution.role}
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              {project.contribution.description}
            </p>
          </div>
          <div className="space-y-2 bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
              Collaborator
            </p>
            <h3 className="font-display text-[17px] font-bold text-ink">
              {project.contribution.collaborator}
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              {project.contribution.collaboratorRole}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="technology-stack">
        <SectionTitle number="06" id="technology-stack">
          Technology stack
        </SectionTitle>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-sm border border-line bg-surface px-3 py-1.5 font-mono text-sm text-ink-muted"
            >
              {technology}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5" aria-labelledby="project-source">
        <SectionTitle number="07" id="project-source">
          Project source
        </SectionTitle>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex min-h-11 items-center justify-between gap-4 rounded border border-line bg-surface p-5 transition-colors hover:border-accent-text/60 ${focusRing}`}
        >
          <span className="min-w-0">
            <span className="block font-display text-[17px] font-bold text-ink">
              Adaptive-UI-Interface
            </span>
            <span className="mt-1 block break-all font-mono text-sm text-ink-muted">
              {project.github}
            </span>
          </span>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-accent-text transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>
    </article>
  );
}

function SectionTitle({
  number,
  id,
  children,
}: {
  number: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="flex items-baseline gap-3 font-display text-xl font-bold text-ink"
    >
      <span className="font-mono text-sm font-normal text-accent-text">
        {number}
      </span>
      <span>{children}</span>
    </h2>
  );
}
