import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Detail | Portfolio",
  description: "Detailed breakdown of engineering project",
};

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold tracking-tight">Project: {slug}</h1>
      <p className="mt-2 text-neutral-400">Architecture placeholder for /projects/[slug] route.</p>
    </main>
  );
}
