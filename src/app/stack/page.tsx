import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack | Portfolio",
  description: "Technologies, frameworks, tools, and platforms",
};

export default function StackPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold tracking-tight">Tech Stack</h1>
      <p className="mt-2 text-neutral-400">Architecture placeholder for /stack route (Carousel-enabled section).</p>
    </main>
  );
}
