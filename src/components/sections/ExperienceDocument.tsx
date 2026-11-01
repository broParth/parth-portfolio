import { activityRecords, currentStatus, professionalStatus } from "@/content/experience";

const categoryOrder = [
  "CLUBS & COMMUNITY",
  "HACKATHONS & TECHNICAL ACTIVITIES",
  "CERTIFICATIONS & LEARNING",
] as const;

export default function ExperienceDocument() {
  return (
    <article className="mx-auto max-w-2xl space-y-10 pr-2 sm:pr-4">
      <header className="space-y-3">
        <div className="inline-block max-w-full rounded-sm border-b-2 border-[#642D3D] bg-[#F4EFE6] px-4 py-2 text-[#121211] shadow-md">
          <h1 className="archive-document-heading font-display font-extrabold uppercase text-[#121211]">
            PARTH — PROFESSIONAL ACTIVITY RECORD
          </h1>
        </div>
        <p className="font-mono text-xs tracking-wide text-[#A1AAA0]">
          A record of technical involvement, learning, and current professional status.
        </p>
      </header>

      <section
        aria-labelledby="current-status-heading"
        className="relative overflow-hidden border-y border-[rgba(233,224,208,0.12)] bg-[#181716] px-4 py-4 sm:px-5"
      >
        <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-1 bg-[#642D3D]" />
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(233,224,208,0.08)] pb-2 font-mono text-[10px] uppercase tracking-wider">
          <h2 id="current-status-heading" className="font-bold text-[#B8C6BE]">
            CURRENT STATUS
          </h2>
          <span className="text-[#A1AAA0]/70">PERSONNEL // ACTIVE</span>
        </div>
        <div className="grid gap-3 pt-3 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-display text-lg font-bold leading-tight text-[#E9E0D0]">
              {currentStatus.level}
            </p>
            <p className="mt-1 font-mono text-[11px] tracking-wide text-[#A1AAA0]">
              {currentStatus.discipline}
            </p>
          </div>
          <p className="font-sans text-xs text-[#E9E0D0]/75 sm:max-w-[14rem] sm:text-right">
            {currentStatus.institution}
          </p>
        </div>
      </section>

      <div className="space-y-9">
        {categoryOrder.map((category, categoryIndex) => {
          const records = activityRecords.filter((record) => record.category === category);
          return (
            <section key={category} aria-labelledby={`category-${categoryIndex}`} className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[rgba(233,224,208,0.1)] pb-2">
                <span className="rounded-sm bg-[#F4EFE6] px-2 py-0.5 font-display text-[10px] font-bold tracking-wide text-[#121211] shadow-sm">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                <h2
                  id={`category-${categoryIndex}`}
                  className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B8C6BE]"
                >
                  {category}
                </h2>
                <span className="ml-auto font-mono text-[9px] text-[#A1AAA0]/55">
                  {String(records.length).padStart(2, "0")} RECORD{records.length === 1 ? "" : "S"}
                </span>
              </div>

              <div className="space-y-2.5">
                {records.map((record) => (
                  <article
                    key={record.id}
                    className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 border-l border-[#642D3D]/70 py-1 pl-3 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-4 sm:pl-4"
                  >
                    <p className="pt-1 font-mono text-[9px] leading-relaxed tracking-wide text-[#A1AAA0]/65">
                      {record.id}
                    </p>
                    <div className="min-w-0 space-y-1.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <h3 className="font-display text-base font-bold leading-snug text-[#E9E0D0] sm:text-lg">
                          {record.title}
                        </h3>
                        <span className="font-mono text-[9px] uppercase tracking-wide text-[#A83D50]">
                          {record.status}
                        </span>
                      </div>
                      <p className="font-mono text-[10px] tracking-wide text-[#B8C6BE]">
                        {record.organization}
                      </p>
                      <p className="max-w-prose font-sans text-xs leading-relaxed text-[#E9E0D0]/75 sm:text-sm">
                        {record.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section
        aria-labelledby="professional-status-heading"
        className="border-t border-[rgba(233,224,208,0.12)] pt-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wider">
          <h2 id="professional-status-heading" className="font-bold text-[#A1AAA0]">
            {professionalStatus.label}
          </h2>
          <span className="text-[#A1AAA0]/55">STATUS RECORD</span>
        </div>
        <p className="mt-2 border-l-2 border-[#642D3D] pl-3 font-sans text-sm text-[#E9E0D0]/80">
          {professionalStatus.statement}
        </p>
      </section>
    </article>
  );
}
