import {
  ArrowDownToLine,
  ArrowUpRight,
  AtSign,
  Code2,
  FileText,
  Network,
  Tag,
} from "lucide-react";

// Replace this value with the real address when ready. Keep the email value here only.
const CONTACT_EMAIL = "parthchourasia6@gmail.com";
const EMAIL_IS_CONFIGURED = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONTACT_EMAIL);

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8C6BE]";

const channels = [
  {
    label: "LINKEDIN",
    detail: "Professional profile and conversation",
    href: "https://www.linkedin.com/in/parth-chourasia/",
    icon: Network,
  },
  {
    label: "GITHUB",
    detail: "Code, repositories, and ongoing work",
    href: "https://github.com/broParth",
    icon: Code2,
  },
];

export default function ContactDocument() {
  return (
    <article className="mx-auto max-w-2xl space-y-8 pr-2 sm:pr-4">
      <header className="space-y-3">
        <div className="inline-block max-w-full rounded-sm border-b-2 border-[#642D3D] bg-[#F4EFE6] px-4 py-2 text-[#121211] shadow-md">
          <h1 className="font-display text-2xl font-extrabold uppercase leading-none tracking-tight text-[#121211] sm:text-3xl">
            PARTH — OPERATOR CONTACT
          </h1>
        </div>
        <p className="font-mono text-xs tracking-wide text-[#A1AAA0]">
          Transmission channels and contact protocols.
        </p>
      </header>

      <section
        aria-label="Contact record properties"
        className="space-y-2 rounded border border-[rgba(233,224,208,0.1)] bg-[#181716] p-4 font-mono text-xs"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[rgba(233,224,208,0.06)] pb-2 text-[10px] font-bold uppercase tracking-wider text-[#C24141]">
          <span className="flex items-center gap-1.5">
            <Tag className="h-3 w-3" aria-hidden="true" /> PROPERTIES
          </span>
          <span className="text-[9px] text-[#A1AAA0]/60">CONTACT RECORD</span>
        </div>
        <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-3">
          <span className="rounded bg-[#201e1d] px-2 py-1 text-[11px] text-[#A1AAA0]">
            SECTION
          </span>
          <span className="rounded border border-[#642D3D] bg-[#201e1d] px-2.5 py-1 text-[11px] text-[#E9E0D0] sm:col-span-2">
            05 // OPERATOR CONTACT
          </span>
        </div>
        <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-3">
          <span className="rounded bg-[#201e1d] px-2 py-1 text-[11px] text-[#A1AAA0]">
            CHANNELS
          </span>
          <span className="px-2.5 py-1 text-[11px] text-[#E9E0D0] sm:col-span-2">
            EMAIL · LINKEDIN · GITHUB
          </span>
        </div>
      </section>

      <section aria-labelledby="contact-intro" className="space-y-2">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#B8C6BE]">
          OPEN TRANSMISSION
        </p>
        <h2 id="contact-intro" className="font-display text-xl font-semibold text-[#E9E0D0]">
          Let&apos;s start a conversation.
        </h2>
        <p className="max-w-prose font-sans text-sm leading-6 text-[#E9E0D0]/75">
          Reach out about software engineering opportunities, technical
          collaborations, projects and ideas, or a professional conversation.
        </p>
      </section>

      <section aria-label="Communication channels" className="divide-y divide-[rgba(233,224,208,0.09)] border-y border-[rgba(233,224,208,0.09)]">
        <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <AtSign className="mt-0.5 h-4 w-4 shrink-0 text-[#B8C6BE]" aria-hidden="true" />
            <div className="min-w-0 space-y-1">
              <h3 className="font-mono text-[11px] font-bold tracking-wider text-[#E9E0D0]">EMAIL</h3>
              <p className="font-sans text-xs text-[#A1AAA0]">
                {EMAIL_IS_CONFIGURED ? CONTACT_EMAIL : "Email address to be configured"}
              </p>
            </div>
          </div>
          {EMAIL_IS_CONFIGURED ? (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`inline-flex min-h-10 items-center gap-2 self-start rounded-sm border border-[rgba(233,224,208,0.16)] px-3 font-mono text-[10px] font-bold tracking-wide text-[#E9E0D0] transition-colors hover:border-[#642D3D] hover:bg-[#642D3D]/20 sm:self-auto ${focusRing}`}
            >
              WRITE EMAIL <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : (
            <span className="self-start font-mono text-[9px] uppercase tracking-wider text-[#A1AAA0]/60 sm:self-auto">
              ADDRESS PENDING
            </span>
          )}
        </div>

        {channels.map(({ label, detail, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label}: ${detail} (opens in a new tab)`}
            className={`group flex min-h-[76px] items-center justify-between gap-4 py-4 transition-colors hover:text-[#F4EFE6] ${focusRing}`}
          >
            <span className="flex min-w-0 items-start gap-3">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#B8C6BE]" aria-hidden="true" />
              <span className="min-w-0 space-y-1">
                <span className="block font-mono text-[11px] font-bold tracking-wider text-[#E9E0D0]">{label}</span>
                <span className="block font-sans text-xs text-[#A1AAA0]">{detail}</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#A1AAA0] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        ))}
      </section>

      <section
        aria-labelledby="resume-title"
        className="relative overflow-hidden border border-[rgba(233,224,208,0.12)] bg-[#181716]"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(233,224,208,0.09)] px-4 py-2.5 font-mono text-[9px] uppercase tracking-wider text-[#A1AAA0] sm:px-5">
          <span className="flex items-center gap-2">
            <FileText className="h-3.5 w-3.5 text-[#B8C6BE]" aria-hidden="true" />
            DOCUMENT TYPE: CURRICULUM VITAE
          </span>
          <span className="text-[#A1AAA0]/65">FORMAT: PDF</span>
        </div>
        <div className="flex flex-col gap-5 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="min-w-0 space-y-2">
            <p className="break-words font-mono text-[10px] tracking-wide text-[#B8C6BE]">
              FILE: PARTH_CHOURASIA_RESUME.PDF
            </p>
            <h2 id="resume-title" className="font-display text-lg font-semibold text-[#E9E0D0]">
              Personnel document
            </h2>
            <p className="font-sans text-xs leading-relaxed text-[#A1AAA0]">
              Download the PDF copy of my résumé for your records.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download="Parth_Chourasia_Resume.pdf"
            aria-label="Download Parth Chourasia résumé as a PDF"
            className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start border border-[#642D3D] bg-[#642D3D]/25 px-4 font-mono text-[10px] font-bold tracking-wider text-[#F4EFE6] transition-colors hover:bg-[#642D3D]/50 sm:self-center ${focusRing}`}
          >
            DOWNLOAD RESUME
            <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="flex items-center gap-2 border-t border-[rgba(233,224,208,0.08)] pt-3 font-mono text-[10px] text-[#A1AAA0]/70">
        <span className="h-1.5 w-1.5 rounded-full bg-[#642D3D]" aria-hidden="true" />
        END OF RECORD <span className="text-[#E9E0D0]/25">//</span> THANK YOU FOR READING
      </footer>
    </article>
  );
}
