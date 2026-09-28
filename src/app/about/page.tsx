import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "About and background",
};

export default function AboutPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold tracking-tight">About</h1>
      <p className="mt-2 text-neutral-400">Architecture placeholder for /about route.</p>
    </main>
  );
}
