import type { Metadata } from "next";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import ExperienceDocument from "@/components/sections/ExperienceDocument";

export const metadata: Metadata = {
  title: "Experience | Parth",
  description:
    "A professional activity record of student status, club involvement, hackathons, and learning programmes.",
};

export default function ExperiencePage() {
  return (
    <ArchiveWorkshell activeSection="experience">
      <ExperienceDocument />
    </ArchiveWorkshell>
  );
}
