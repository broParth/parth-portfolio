import type { Metadata } from "next";
import AuthorizationIntro from "@/components/AuthorizationIntro";

export const metadata: Metadata = {
  title: "Parth Archive | Authorization",
  description: "Authorize access to the Parth Archive.",
};

export default function HomePage() {
  return <AuthorizationIntro />;
}
