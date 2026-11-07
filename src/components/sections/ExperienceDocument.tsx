import { activityRecords, currentStatus, professionalStatus } from "@/content/experience";
import { PageHeader, SectionLabel } from "@/components/DocumentParts";

const categoryOrder = [
  "CLUBS & COMMUNITY",
  "HACKATHONS & TECHNICAL ACTIVITIES",
  "CERTIFICATIONS & LEARNING",
] as const;

export default function ExperienceDocument() {
  return (
    <article className="space-y-10">
      <PageHeader
        title="Parth — Activity Record"
        subtitle="A record of technical involvement, learning, and current professional status."
      />

      <section
        aria-labelledby="current-status-heading"
        className="space-y-3 rounded border border-line border-l-4 border-l-accent bg-surface p-5 sm:p-6"
      >
        <h2
          id="current-status-heading"
          className="font-mono text-xs font-bold uppercase tracking-widest text-sage"
        >
          Current status
        </h2>
        <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-6">
          <div>
            <p className="font-display text-lg font-bold leading-tight text-ink sm:text-xl">
              {currentStatus.level}
            </p>
            <p className="mt-1 font-mono text-sm tracking-wide text-ink-muted">
              {currentStatus.discipline}
            </p>
          </div>
          <p className="text-[15px] text-ink-muted sm:max-w-[16rem] sm:text-right">
            {currentStatus.institution}
          </p>
        </div>
      </section>

      {categoryOrder.map((category, categoryIndex) => {
        const records = activityRecords.filter(
          (record) => record.category === category
        );
        return (
          <section
            key={category}
            aria-labelledby={`category-${categoryIndex}`}
            className="space-y-5"
          >
            <div className="flex items-baseline justify-between gap-3 border-b border-line pb-3">
              <SectionLabel
                as="h2"
                id={`category-${categoryIndex}`}
                number={String(categoryIndex + 1).padStart(2, "0")}
              >
                {category}
              </SectionLabel>
              <span className="shrink-0 font-mono text-xs text-ink-faint">
                {records.length} record{records.length === 1 ? "" : "s"}
              </span>
            </div>

            <ul className="space-y-6">
              {records.map((record) => (
                <li
                  key={record.id}
                  className="space-y-2 border-l-2 border-accent pl-4 sm:pl-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-bold leading-snug text-ink">
                      {record.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-bright">
                      {record.status}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-sage">
                    {record.organization}
                  </p>
                  <p className="max-w-prose text-[15px] leading-relaxed text-ink/90 sm:text-[17px]">
                    {record.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <section
        aria-labelledby="professional-status-heading"
        className="space-y-2 border-t border-line pt-6"
      >
        <h2
          id="professional-status-heading"
          className="font-mono text-xs font-bold uppercase tracking-widest text-ink-muted"
        >
          {professionalStatus.label}
        </h2>
        <p className="border-l-2 border-accent pl-4 text-[15px] text-ink/90">
          {professionalStatus.statement}
        </p>
      </section>
    </article>
  );
}
