import type { Metadata } from "next";
import AuthorizationIntro from "@/components/AuthorizationIntro";

export const metadata: Metadata = {
  title: "Parth Chourasia | Portfolio",
  description:
    "Parth Chourasia — Computer Science student working across software, security, and AI.",
};

export default function HomePage() {
  return <AuthorizationIntro />;
}
