import type { Metadata } from "next";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import StackDocument from "@/components/sections/StackDocument";

export const metadata: Metadata = {
  title: "Tech Stack | Parth",
  description: "Technologies, frameworks, tools, and platforms.",
};

export default function StackPage() {
  return (
    <ArchiveWorkshell activeSection="stack">
      <StackDocument />
    </ArchiveWorkshell>
  );
}
