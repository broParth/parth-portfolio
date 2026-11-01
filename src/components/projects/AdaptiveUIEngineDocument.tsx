import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Tag,
  Workflow,
} from "lucide-react";
import { adaptiveUIEngine as project } from "@/content/projects";

const sectionHeading =
  "font-display text-lg font-bold uppercase tracking-wide text-[#E9E0D0]";

export default function AdaptiveUIEngineDocument() {
  return (
    <article className="mx-auto max-w-2xl space-y-8 pr-2 sm:pr-4">
      <Link
        href="/projects"
        className="inline-flex min-h-11 xl:min-h-0 items-center gap-1.5 font-mono text-xs text-[#A1AAA0] transition-colors hover:text-[#E9E0D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8C6BE]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        <span>BACK TO PROJECTS DIRECTORY</span>
      </Link>

      <header className="space-y-3">
        <div className="inline-block max-w-full rounded-sm border-b-2 border-[#642D3D] bg-[#F4EFE6] px-4 py-2 text-[#121211] shadow-md">
          <h1 className="archive-document-heading font-display font-extrabold uppercase text-[#121211]">
            {project.title}
          </h1>
        </div>
        <p className="font-mono text-xs tracking-wide text-[#A1AAA0]">
          {project.subtitle}
        </p>
      </header>

      <section
        aria-label="Project properties"
        className="space-y-2 rounded border border-[rgba(233,224,208,0.1)] bg-[#181716] p-4 font-mono text-xs"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[rgba(233,224,208,0.06)] pb-2 text-[10px] font-bold uppercase tracking-wider text-[#C24141]">
          <span className="flex items-center gap-1.5">
            <Tag className="h-3 w-3" aria-hidden="true" />
            PROPERTIES
          </span>
          <span className="text-[9px] text-[#A1AAA0]/60">PROJECT RECORD</span>
        </div>
        <PropertyRow label="RECORD_ID" value="PROJ-ADAPTIVE-UI-ENGINE" />
        <PropertyRow label="CATEGORY" value="WINDOWS DESKTOP UTILITY" />
        <PropertyRow label="CONTRIBUTION" value="UI DESIGN · OS INTEGRATION" />
        <PropertyRow label="COLLABORATION" value="TWO CONTRIBUTORS" />
      </section>

      <section className="space-y-4" aria-labelledby="project-overview">
        <SectionTitle number="01" id="project-overview">
          PROJECT OVERVIEW
        </SectionTitle>
        <div className="space-y-3 rounded border-l-4 border-l-[#642D3D] border-y border-r border-[rgba(233,224,208,0.08)] bg-[#181716] p-5 sm:p-6">
          <p className="font-sans text-sm leading-relaxed text-[#E9E0D0]/85">
            {project.summary}
          </p>
          <p className="font-sans text-xs leading-relaxed text-[#A1AAA0] sm:text-sm">
            Instead of treating the desktop as a fixed surface, the system
            observes activity, classifies a changing interaction context, and
            responds with a corresponding overlay or Windows-level adjustment.
          </p>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="system-architecture">
        <SectionTitle number="02" id="system-architecture">
          SYSTEM ARCHITECTURE
        </SectionTitle>
        <div className="rounded border border-[rgba(233,224,208,0.08)] bg-[#181716] p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#A1AAA0]">
            <Workflow className="h-3.5 w-3.5 text-[#C24141]" aria-hidden="true" />
            INPUT TO ADAPTIVE RESPONSE
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-1">
            {project.architecture.map((step, index) => (
              <div className="contents" key={step.label}>
                <div className="flex min-w-0 flex-1 flex-col justify-center border border-[rgba(233,224,208,0.1)] bg-[#201e1d] px-3 py-3">
                  <span className="font-mono text-[10px] font-bold leading-snug text-[#E9E0D0]">
                    {step.label}
                  </span>
                  <span className="mt-1 font-sans text-[11px] leading-relaxed text-[#A1AAA0]">
                    {step.detail}
                  </span>
                </div>
                {index < project.architecture.length - 1 && (
                  <>
                    <ArrowDown
                      className="mx-auto h-3.5 w-3.5 shrink-0 text-[#642D3D] sm:hidden"
                      aria-hidden="true"
                    />
                    <ArrowRight
                      className="my-auto hidden h-3.5 w-3.5 shrink-0 text-[#642D3D] sm:block"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.supportingSystems.map((system) => (
              <div
                key={system.label}
                className="border-t border-[rgba(233,224,208,0.08)] pt-3"
              >
                <p className="font-mono text-[10px] font-bold tracking-wide text-[#B8C6BE]">
                  {system.label}
                </p>
                <p className="mt-1 font-sans text-xs leading-relaxed text-[#A1AAA0]">
                  {system.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="four-states">
        <SectionTitle number="03" id="four-states">
          THE FOUR STATES
        </SectionTitle>
        <div className="grid gap-2 sm:grid-cols-2">
          {project.states.map((state, index) => (
            <div
              key={state.name}
              className="relative space-y-2 border border-[rgba(233,224,208,0.08)] bg-[#181716] p-4"
            >
              <span className="absolute right-3 top-3 font-mono text-[9px] text-[#A1AAA0]/50">
                0{index + 1}
              </span>
              <h3 className="font-display text-sm font-bold tracking-wide text-[#E9E0D0]">
                {state.name}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-[#A1AAA0]">
                {state.signal}
              </p>
              <p className="border-t border-[rgba(233,224,208,0.08)] pt-2 font-mono text-[10px] uppercase leading-relaxed text-[#B8C6BE]">
                RESPONSE · {state.response}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="implementation">
        <SectionTitle number="04" id="implementation">
          IMPLEMENTATION
        </SectionTitle>
        <div className="divide-y divide-[rgba(233,224,208,0.08)] border-y border-[rgba(233,224,208,0.08)]">
          {project.implementation.map((item) => (
            <div
              key={item.label}
              className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4"
            >
              <h3 className="font-mono text-[10px] font-bold tracking-wide text-[#B8C6BE]">
                {item.label}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-[#E9E0D0]/75 sm:text-sm">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="contribution">
        <SectionTitle number="05" id="contribution">
          MY CONTRIBUTION
        </SectionTitle>
        <div className="grid gap-px border border-[rgba(233,224,208,0.1)] bg-[rgba(233,224,208,0.1)] sm:grid-cols-2">
          <div className="space-y-2 bg-[#181716] p-4 sm:p-5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#A1AAA0]">
              PARTH CHOURASIA
            </span>
            <h3 className="font-display text-sm font-bold text-[#E9E0D0]">
              {project.contribution.role}
            </h3>
            <p className="font-sans text-xs leading-relaxed text-[#A1AAA0]">
              {project.contribution.description}
            </p>
          </div>
          <div className="space-y-2 bg-[#181716] p-4 sm:p-5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#A1AAA0]">
              COLLABORATOR
            </span>
            <h3 className="font-display text-sm font-bold text-[#E9E0D0]">
              {project.contribution.collaborator}
            </h3>
            <p className="font-sans text-xs leading-relaxed text-[#A1AAA0]">
              {project.contribution.collaboratorRole}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="technology-stack">
        <SectionTitle number="06" id="technology-stack">
          TECHNOLOGY STACK
        </SectionTitle>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border border-[rgba(233,224,208,0.1)] bg-[#181716] px-2.5 py-1.5 font-mono text-[10px] leading-relaxed text-[#B8C6BE]"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="project-source">
        <SectionTitle number="07" id="project-source">
          PROJECT SOURCE
        </SectionTitle>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="group flex min-h-11 items-center justify-between gap-4 border border-[rgba(233,224,208,0.1)] bg-[#181716] p-4 transition-colors hover:border-[#642D3D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8C6BE] sm:p-5"
        >
          <span className="min-w-0">
            <span className="block font-display text-sm font-bold text-[#E9E0D0]">
              Adaptive-UI-Interface
            </span>
            <span className="mt-1 block break-all font-mono text-[10px] text-[#A1AAA0]">
              {project.github}
            </span>
          </span>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-[#B8C6BE] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>
    </article>
  );
}

function PropertyRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 items-center gap-2 py-0.5 sm:grid-cols-3">
      <div className="flex items-center gap-1.5 rounded bg-[#201e1d] px-2 py-1 text-[11px] text-[#A1AAA0]">
        <span className="uppercase">{label}</span>
      </div>
      <div className="min-w-0 break-words rounded border border-[#642D3D] bg-[#201e1d] px-2.5 py-1 text-[11px] text-[#E9E0D0] sm:col-span-2">
        {value}
      </div>
    </div>
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
    <h2 id={id} className={`${sectionHeading} flex items-baseline gap-2`}>
      <span className="font-mono text-[10px] font-normal text-[#C24141]">
        {number}
      </span>
      <span>{children}</span>
    </h2>
  );
}
