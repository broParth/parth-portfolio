import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import AdaptiveUIEngineDocument from "@/components/projects/AdaptiveUIEngineDocument";
import { projects } from "@/content/projects";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Each documented project's detail page. To add a project, add its record to
 * `src/content/projects.ts` and map its slug to a document component here.
 */
const projectDocuments: Record<string, ComponentType> = {
  "adaptive-ui-engine": AdaptiveUIEngineDocument,
};

// Only slugs listed above exist; anything else returns a real 404 via notFound().
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
  const Document = projectDocuments[slug];

  if (!findProject(slug) || !Document) notFound();

  return (
    <ArchiveWorkshell activeSection="projects">
      <Document />
    </ArchiveWorkshell>
  );
}
