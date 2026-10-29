import type { Metadata } from "next";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import AboutDocument from "@/components/sections/AboutDocument";

export const metadata: Metadata = {
  title: "About | Parth",
  description: "About Parth — background, philosophy, and technical journey.",
};

export default function AboutPage() {
  return (
    <ArchiveWorkshell activeSection="about">
      <AboutDocument isStandalone={true} />
    </ArchiveWorkshell>
  );
}
