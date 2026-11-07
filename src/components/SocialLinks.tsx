import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { contactInfo } from "@/content/contact";
import { focusRing } from "@/components/DocumentParts";

/*
 * Tiny social icons for the workspace status bar: email (envelope),
 * GitHub, and Instagram — all read from `src/content/contact.ts`.
 * lucide-react 1.x has no brand icons, so GitHub/Instagram are inline SVGs.
 */

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function InstagramMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
    </svg>
  );
}

function IconLink({
  href,
  label,
  external = true,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`-m-1 inline-flex items-center justify-center rounded p-1 text-ink-muted transition-colors hover:text-ink ${focusRing}`}
    >
      {children}
    </a>
  );
}

export default function SocialLinks() {
  const { instagram } = contactInfo;

  return (
    <nav aria-label="Social links" className="flex items-center gap-3">
      <IconLink href={`mailto:${contactInfo.email}`} label={`Email ${contactInfo.email}`} external={false}>
        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
      </IconLink>
      <IconLink href={contactInfo.github.href} label={`GitHub — ${contactInfo.github.handle} (opens in a new tab)`}>
        <GitHubMark className="h-3.5 w-3.5" />
      </IconLink>
      <IconLink href={instagram.href} label={`Instagram — ${instagram.handle} (opens in a new tab)`}>
        <InstagramMark className="h-3.5 w-3.5" />
      </IconLink>
    </nav>
  );
}
