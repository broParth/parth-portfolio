import type { Metadata } from "next";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import ExperienceDocument from "@/components/sections/ExperienceDocument";

export const metadata: Metadata = {
  title: "Experience | Parth",
  description: "Work history, CTF achievements, and hackathon milestones.",
};

export default function ExperiencePage() {
  return (
    <ArchiveWorkshell activeSection="experience">
      <ExperienceDocument />
    </ArchiveWorkshell>
  );
}
