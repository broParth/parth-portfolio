import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch",
};

export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-neutral-400">Architecture placeholder for /contact route.</p>
    </main>
  );
}
