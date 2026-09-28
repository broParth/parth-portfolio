import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Portfolio",
  description: "Work history, CTF work, and hackathons",
};

export default function ExperiencePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold tracking-tight">Experience</h1>
      <p className="mt-2 text-neutral-400">Architecture placeholder for /experience route.</p>
    </main>
  );
}
