import type { Metadata } from "next";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import ProjectsDocument from "@/components/sections/ProjectsDocument";

export const metadata: Metadata = {
  title: "Projects | Parth",
  description: "Featured engineering projects and research.",
};

export default function ProjectsPage() {
  return (
    <ArchiveWorkshell>
      <ProjectsDocument />
    </ArchiveWorkshell>
  );
}
