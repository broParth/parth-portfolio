import type { ElementType, ReactNode } from "react";

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-muted focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

/** Stamped cream title + one-line subtitle used at the top of every page. */
export function PageHeader({
  title,
  subtitle,
  as: Heading = "h1",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  as?: ElementType;
}) {
  return (
    <header className="space-y-4">
      <div className="inline-block max-w-full rounded-sm border-b-2 border-accent bg-paper px-4 py-2 shadow-md">
        <Heading className="archive-document-heading font-display font-extrabold uppercase text-paper-ink">
          {title}
        </Heading>
      </div>
      {subtitle && (
        <p className="max-w-prose font-mono text-sm leading-relaxed tracking-wide text-ink-muted">
          {subtitle}
        </p>
      )}
    </header>
  );
}

/** Small archival section marker, e.g. "01 // Identity". */
export function SectionLabel({
  number,
  children,
  as: Tag = "p",
  id,
}: {
  number?: string;
  children: ReactNode;
  as?: ElementType;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink-faint"
    >
      {number && <span className="text-accent-text">{number}</span>}
      {number && <span aria-hidden="true">{"//"}</span>}
      <span>{children}</span>
    </Tag>
  );
}
