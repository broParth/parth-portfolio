import {
  ArrowDownToLine,
  ArrowUpRight,
  AtSign,
  Code2,
  FileText,
  Network,
} from "lucide-react";
import { PageHeader, focusRing } from "@/components/DocumentParts";

// Keep the email value here only.
const CONTACT_EMAIL = "parthchourasia6@gmail.com";

const channels = [
  {
    label: "LinkedIn",
    detail: "Professional profile and conversation",
    href: "https://www.linkedin.com/in/parth-chourasia/",
    icon: Network,
  },
  {
    label: "GitHub",
    detail: "Code, repositories, and ongoing work",
    href: "https://github.com/broParth",
    icon: Code2,
  },
];

export default function ContactDocument() {
  return (
    <article className="space-y-10">
      <PageHeader
        title="Parth — Contact"
        subtitle="Transmission channels and contact protocols."
      />

      <section aria-labelledby="contact-intro" className="space-y-3">
        <h2
          id="contact-intro"
          className="font-display text-xl font-bold text-ink sm:text-2xl"
        >
          Let&apos;s start a conversation.
        </h2>
        <p className="max-w-prose text-[17px] leading-7 text-ink/90">
          Reach out about software engineering opportunities, technical
          collaborations, projects and ideas, or a professional conversation.
        </p>
      </section>

      <section
        aria-label="Communication channels"
        className="divide-y divide-line border-y border-line"
      >
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <AtSign className="mt-1 h-5 w-5 shrink-0 text-accent-text" aria-hidden="true" />
            <div className="min-w-0 space-y-1">
              <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-ink">
                Email
              </h3>
              <p className="break-all text-[15px] text-ink-muted">{CONTACT_EMAIL}</p>
            </div>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`inline-flex min-h-11 items-center gap-2 self-start rounded-sm border border-line-strong px-4 font-mono text-sm font-bold tracking-wide text-ink transition-colors hover:border-accent-text hover:bg-accent/30 sm:self-auto ${focusRing}`}
          >
            Write email <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {channels.map(({ label, detail, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label}: ${detail} (opens in a new tab)`}
            className={`group flex min-h-20 items-center justify-between gap-4 py-5 transition-colors ${focusRing}`}
          >
            <span className="flex min-w-0 items-start gap-3">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-accent-text" aria-hidden="true" />
              <span className="min-w-0 space-y-1">
                <span className="block font-mono text-sm font-bold uppercase tracking-widest text-ink group-hover:text-accent-text">
                  {label}
                </span>
                <span className="block text-[15px] text-ink-muted">{detail}</span>
              </span>
            </span>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        ))}
      </section>

      <section
        aria-labelledby="resume-title"
        className="overflow-hidden rounded border border-line bg-surface"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
          <span className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-accent-text" aria-hidden="true" />
            Curriculum vitae
          </span>
          <span>PDF</span>
        </div>
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 space-y-1">
            <h2 id="resume-title" className="font-display text-lg font-bold text-ink">
              Personnel document
            </h2>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              Download the PDF copy of my résumé for your records.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download="Parth_Chourasia_Resume.pdf"
            aria-label="Download Parth Chourasia résumé as a PDF"
            className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-sm border border-accent-text/60 bg-accent/40 px-5 font-mono text-sm font-bold tracking-wide text-ink transition-colors hover:bg-accent sm:self-center ${focusRing}`}
          >
            Download résumé
            <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <p className="flex items-center gap-2 border-t border-line pt-4 font-mono text-xs uppercase tracking-widest text-ink-faint">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-text" aria-hidden="true" />
        {"End of record // Thank you for reading"}
      </p>
    </article>
  );
}
