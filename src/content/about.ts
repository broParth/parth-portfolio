/**
 * About Me Content Source of Truth
 *
 * Keep content easy to edit so copy and visual details can be refined.
 * `fieldNotes` renders on `/about`; `quickReference` renders in the
 * workspace's File Properties panel on every page.
 */

export interface QuickReferenceItem {
  label: string;
  value: string;
}

export interface Offering {
  title: string;
  detail: string;
}

export interface AboutContent {
  meta: {
    sectionLabel: string;
    subtitle: string;
  };
  fieldNotes: {
    headline: string;
    intro: string;
    offeringsTitle: string;
    offerings: Offering[];
  };
  quickReference: {
    title: string;
    items: QuickReferenceItem[];
  };
}

export const aboutContent: AboutContent = {
  meta: {
    sectionLabel: "PERSONNEL FILE",
    subtitle: "A little about the person behind the interface.",
  },
  fieldNotes: {
    headline: "I want to know what happens behind the button.",
    intro:
      "I'm Parth, a Computer Science student at New Horizon College of Engineering. I build software and like understanding how it's put together underneath — across software engineering, cybersecurity, and UI/UX.",
    offeringsTitle: "What I bring",
    offerings: [
      {
        title: "Software engineering",
        detail:
          "Desktop tooling in Python — dashboards, background services, and Windows-level integration (Adaptive UI Engine).",
      },
      {
        title: "Security mindset",
        detail:
          "Built SQL injection challenges for the CSEH club's CTF, Cache Me If You Can.",
      },
      {
        title: "Interface design",
        detail: "Intuitive, visual interfaces people actually enjoy using.",
      },
      {
        title: "Hackathon pace",
        detail: "SAP Hackfest finalist; Smart India Hackathon project.",
      },
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
