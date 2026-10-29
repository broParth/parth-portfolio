import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavigationShell from "@/components/NavigationShell";
import AtmosphericBackground from "@/components/AtmosphericBackground";

const displayFont = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parth | Developer Portfolio",
  description: "Personal portfolio of Parth — Computer Science, AI, Software Engineering, Cybersecurity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#0c0b0a] text-[#f4f0ea] font-sans selection:bg-[#d97736]/30 selection:text-[#f4f0ea]"
      >
        {/* Layer 10: Film Grain, Vignette & Ambient Light Overlay */}
        <AtmosphericBackground />

        {/* Layer 50: Persistent Fixed Right-Side Navigation Shell */}
        <NavigationShell />

        <div className="relative z-20 flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
