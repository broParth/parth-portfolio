import type { Metadata } from "next";
import ArchiveWorkshell from "@/components/ArchiveWorkshell";
import ContactDocument from "@/components/sections/ContactDocument";

export const metadata: Metadata = {
  title: "Contact | Parth",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <ArchiveWorkshell activeSection="contact">
      <ContactDocument />
    </ArchiveWorkshell>
  );
}
