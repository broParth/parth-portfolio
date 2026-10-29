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
    lead: string;
    paragraphs: string[];
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
  objective: {
    title: string;
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
    lead: "I'm interested in both how technology works and why people choose to use it.",
    paragraphs: [
      "Software engineering draws me toward the structures and systems behind applications. Cybersecurity makes me curious about how those systems behave, where they can fail, and how they can be protected. UI/UX is another side of that curiosity: how do you make something intuitive, visually interesting, and enjoyable enough that people want to keep using it?",
      "I'm drawn to colour, interaction, product engagement, and the business side of technology, too. I want to understand customer acquisition and how products find their audience.",
      "Building something that works is one challenge. Building something people actually care about is another.",
      "My interests also extend to AI and machine learning, which I explore alongside my broader interest in software and technology.",
    ],
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
      "I'm a pretty chill guy who likes having people around. Not every interaction needs to turn into a profound connection; sometimes, being around people and enjoying their presence is enough.",
      "I'm curious, occasionally lazy, and still figuring things out. I'd rather acknowledge that I'm learning than pretend I've already got everything sorted.",
      "I find myself drawn to questions, ideas, and the details other people might overlook. The curiosity is there, even when the motivation takes a little longer to show up.",
    ],
  },
  objective: {
    title: "The objective",
    paragraphs: [
      "I want to become someone who can take an idea from a rough thought to a working product with a solid understanding of every part of the process.",
      "That means getting better at building independently, understanding the code I write, solving problems when things break, and making technical decisions without having to rely on assistance at every step.",
      "I also want to learn how to sell what I build. Not just selling in the literal sense, but understanding the product, finding the people who need it, communicating its value, and giving them a reason to care.",
      "Because making something work is one thing. Knowing why it should exist, who would want it, and how to get it into their hands is an entirely different skill.",
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
