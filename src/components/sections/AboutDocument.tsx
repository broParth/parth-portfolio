import { aboutContent } from "@/content/about";
import { PageHeader } from "@/components/DocumentParts";

const technologies = [
  "Java",
  "Python",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Git",
  "GitHub",
  "VS Code",
  "Linux",
  "AWS EC2",
] as const;

export default function AboutDocument() {
  const { meta, fieldNotes } = aboutContent;

  return (
    <article className="space-y-10">
      <PageHeader
        title={<>Parth — {meta.sectionLabel}</>}
        subtitle={meta.subtitle}
      />

      {/* Field notes */}
      <section
        aria-labelledby="notes-heading"
        className="space-y-6 rounded border border-line border-l-4 border-l-accent bg-surface p-5 shadow-[0_12px_30px_rgba(0,0,0,0.25)] sm:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase tracking-widest">
          <span className="flex items-center gap-3">
            <span className="rounded-sm bg-paper px-2 py-0.5 font-display font-bold text-paper-ink">
              Field notes
            </span>
            <span className="font-bold text-accent-text">Unfiltered memo</span>
          </span>
          <span className="text-ink-faint">Parth_v3</span>
        </div>

        <h2
          id="notes-heading"
          className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl"
        >
          {fieldNotes.headline}
        </h2>

        <p className="text-[17px] leading-7 text-ink/90">{fieldNotes.intro}</p>

        <div className="space-y-3">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-faint">
            {fieldNotes.offeringsTitle}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {fieldNotes.offerings.map((offering) => (
              <li
                key={offering.title}
                className="rounded border border-line bg-canvas/70 p-4 transition-colors hover:border-accent-text/60"
              >
                <p className="flex items-center gap-2 font-semibold text-ink">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-text"
                  />
                  {offering.title}
                </p>
                <p className="mt-1 pl-3.5 text-[15px] leading-relaxed text-ink-muted">
                  {offering.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line pt-5">
          <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink-muted">
            Languages &amp; tools
          </h3>
          <p className="sr-only">
            {`Languages and tools: ${technologies.join(", ")}.`}
          </p>
          <div className="about-tech-marquee" aria-hidden="true">
            <div className="about-tech-marquee__track">
              {[0, 1].map((copy) => (
                <div className="about-tech-marquee__copy" key={copy}>
                  {technologies.map((technology, index) => (
                    <span
                      className="about-tech-marquee__entry"
                      key={`${copy}-${technology}`}
                    >
                      {index > 0 && (
                        <span className="about-tech-marquee__separator">·</span>
                      )}
                      {technology}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
