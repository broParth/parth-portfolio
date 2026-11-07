import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import ProjectDossier from "@/components/projects/ProjectDossier";
import { projects } from "@/content/projects";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Every project in `src/content/projects.ts` gets a dossier at /projects/<slug>.
 * Unknown slugs return a real 404 via notFound().
 */
function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Parth`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  return (
    <ArchiveWorkshell>
      <ProjectDossier project={project} />
    </ArchiveWorkshell>
  );
}
