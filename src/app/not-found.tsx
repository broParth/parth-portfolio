import type { Metadata } from "next";
import Link from "next/link";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import { PageHeader, focusRing } from "@/components/DocumentParts";

export const metadata: Metadata = {
  title: "Record not found | Parth",
};

export default function NotFound() {
  return (
    <ArchiveWorkshell>
      <div className="space-y-8">
        <PageHeader
          title="404 — Record not found"
          subtitle="This file isn't in the archive. It may have moved, or the address may be mistyped."
        />
        <div className="flex flex-wrap gap-3">
          <Link
            href="/about"
            className={`inline-flex min-h-11 items-center rounded-sm border border-accent-text/60 bg-accent/40 px-5 font-mono text-sm font-bold tracking-wide text-ink transition-colors hover:bg-accent ${focusRing}`}
          >
            Go to About
          </Link>
          <Link
            href="/projects"
            className={`inline-flex min-h-11 items-center rounded-sm border border-line-strong px-5 font-mono text-sm font-bold tracking-wide text-ink transition-colors hover:border-accent-text ${focusRing}`}
          >
            View projects
          </Link>
        </div>
      </div>
    </ArchiveWorkshell>
  );
}
