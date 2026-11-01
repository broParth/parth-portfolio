/**
 * About Me Content Source of Truth
 *
 * Keep content easy to edit so copy and visual details can be refined.
 * Rendered inside ArchiveWorkshell at `/about`.
 */

export interface QuickReferenceItem {
  label: string;
  value: string;
}

export interface AboutContent {
  meta: {
    sectionLabel: string;
    record: string;
    title: string;
    subtitle: string;
  };
  identity: {
    headline: string;
    paragraphs: string[];
  };
  investigations: {
    title: string;
    focusAreas: {
      domain: string;
      note: string;
    }[];
  };
  personalNotes: {
    title: string;
    headline: string;
    paragraphs: string[];
  };
  quickReference: {
    title: string;
    items: QuickReferenceItem[];
  };
}

export const aboutContent: AboutContent = {
  meta: {
    sectionLabel: "PERSONNEL FILE",
    record: "001",
    title: "About Me",
    subtitle: "A little about the person behind the interface.",
  },
  identity: {
    headline: "I want to know what happens behind the button.",
    paragraphs: [
      "I'm Parth, a Computer Science student who likes looking beneath the surface of technology. Using an application is one thing; understanding how it's put together, how its systems communicate, and what makes the experience work is much more interesting to me.",
      "What got me interested in tech in the first place? Money, obviously.",
      "But the curiosity stuck. I started wanting to understand the machinery behind the things we use every day, not just learn which buttons to press.",
    ],
  },
  investigations: {
    title: "Current investigations",
    focusAreas: [
      { domain: "Software Engineering", note: "Structures & system architecture" },
      { domain: "Cybersecurity", note: "System behavior, resilience & failure points" },
      { domain: "UI/UX & Interaction", note: "Intuitive, visual & engaging experiences" },
      { domain: "Product & Growth", note: "Customer acquisition & audience engagement" },
      { domain: "AI / Machine Learning", note: "Intelligent systems & software synergy" },
    ],
  },
  personalNotes: {
    title: "Personal notes",
    headline: "Curiosity: high. Motivation: varies by day.",
    paragraphs: [
      "I'm curious, occasionally lazy, and still figuring things out. I'd rather acknowledge that I'm learning than pretend I've already got everything sorted.",
      "I find myself drawn to questions, ideas, and the details other people might overlook. The curiosity is there, even when the motivation takes a little longer to show up.",
    ],
  },
  quickReference: {
    title: "Quick reference",
    items: [
      {
        label: "CURRENT CHAPTER",
        value: "Computer Science student at New Horizon College of Engineering.",
      },
      {
        label: "TECHNICAL INTERESTS",
        value: "Software Engineering · Cybersecurity · AI/ML · UI/UX",
      },
      {
        label: "PRODUCT CURIOSITY",
        value: "User experience · Product engagement · Customer acquisition",
      },
      {
        label: "CURRENT SIDE QUEST",
        value: "Building an interactive developer portfolio that feels like a digital archive rather than a template.",
      },
      {
        label: "RECURRING QUESTION",
        value: "What makes people stay?",
      },
      {
        label: "LONG-TERM OBJECTIVE",
        value: "Build independently. Understand the product. Learn to sell the idea.",
      },
    ],
  },
};
