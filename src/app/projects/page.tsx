import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Featured engineering projects and research",
};

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-neutral-400">Architecture placeholder for /projects route.</p>
    </main>
  );
}
