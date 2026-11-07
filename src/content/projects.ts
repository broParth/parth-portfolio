export const adaptiveUIEngine = {
  slug: "adaptive-ui-engine",
  label: "COLLABORATIVE SYSTEMS",
  title: "Adaptive UI Engine",
  subtitle: "A Context-Aware Desktop Interface System",
  category: "WINDOWS UTILITY · CONTEXT-AWARE INTERFACE",
  summary:
    "A collaborative Windows desktop utility that reads keyboard and pointer activity, interprets interaction through a threshold-based finite state machine, and adapts the interface to the detected context.",
  overview:
    "Instead of treating the desktop as a fixed surface, the system observes activity, classifies a changing interaction context, and responds with a corresponding overlay or Windows-level adjustment.",
  github: "https://github.com/broParth/Adaptive-UI-Interface",
  repoName: "Adaptive-UI-Interface",
  flowTitle: "Input to adaptive response",
  highlightsTitle: "The four states",
  technologies: [
    "Python",
    "CustomTkinter",
    "Pynput",
    "Win32 API",
    "ctypes",
    "Threading",
    "Pystray",
    "Pillow",
    "Screeninfo",
    "Plyer",
    "Screen Brightness Control",
    "PyInstaller",
  ],
  architecture: [
    {
      label: "GLOBAL INPUT CAPTURE",
      detail: "Keyboard, mouse, scroll, and cursor activity",
    },
    {
      label: "BEHAVIORAL ANALYSIS",
      detail: "Activity measures, timing, inactivity, and smoothing",
    },
    {
      label: "FINITE STATE MACHINE",
      detail: "Threshold-based classification with buffered transitions",
    },
    {
      label: "ADAPTIVE DESKTOP",
      detail: "Context-specific overlays and Windows responses",
    },
  ],
  supportingSystems: [
    {
      label: "TELEMETRY DASHBOARD",
      detail:
        "A CustomTkinter dashboard for current state, live activity, state duration, and transition history.",
    },
    {
      label: "WINDOWS INTEGRATION",
      detail:
        "Brightness adjustments and desktop notifications, plus mouse-speed adjustments during sustained FOCUS mode; the original mouse-speed setting is restored afterward.",
    },
  ],
  states: [
    {
      name: "ACTIVE",
      signal: "Mouse movement, clicking, or scrolling",
      response: "A small corner widget",
    },
    {
      name: "FOCUS",
      signal: "Sustained typing with minimal pointer activity",
      response: "A minimal floating overlay",
    },
    {
      name: "IDLE",
      signal: "No detected activity for more than five seconds",
      response: "A full-screen dim overlay",
    },
    {
      name: "ERROR",
      signal: "Activity does not satisfy the other classifications",
      response: "A warning overlay",
    },
  ],
  contribution: {
    role: "UI Design & Windows OS Integration",
    description:
      "Parth Chourasia contributed to the dashboard and user-interface design, along with Windows-level integration for the desktop experience.",
    collaborator: "Nishant Chakravarthy",
    collaboratorRole: "System Architecture & FSM Design",
  },
} as const;

export const parthArchive = {
  slug: "parth-archive",
  label: "PERSONAL BUILD",
  title: "Parth Archive",
  subtitle: "An Interactive Archival Developer Portfolio",
  category: "WEB APPLICATION · INTERACTIVE PORTFOLIO",
  summary:
    "This portfolio, built as an explorable research archive: a book-authorization intro opens onto a desktop-style workspace with document tabs, a notebook navigator, a rotating 3D graph of the site, and page-aware file properties.",
  overview:
    "Instead of a conventional scrolling template, every section is a document inside one shared archive workspace, so navigation, context, and content stay on screen together. All copy lives in typed content files, and the workspace derives its menu, graph, and properties from that same data.",
  github: "https://github.com/broParth/parth-portfolio",
  repoName: "parth-portfolio",
  flowTitle: "Content to rendered archive",
  highlightsTitle: "Signature features",
  technologies: [
    "Next.js 16 (App Router)",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Framer Motion",
    "Lucide React",
    "SVG",
    "ESLint",
  ],
  architecture: [
    {
      label: "CONTENT SOURCES",
      detail: "Typed content files for About, Projects, Experience, and Contact",
    },
    {
      label: "DERIVED DATA",
      detail: "Menu, graph nodes, breadcrumbs, and file properties built from content",
    },
    {
      label: "ARCHIVE WORKSHELL",
      detail: "Shared chrome: tabs, navigator, graph view, properties, status bar",
    },
    {
      label: "DOCUMENTS",
      detail: "One page per section, plus a dossier per project",
    },
  ],
  supportingSystems: [
    {
      label: "DESIGN TOKENS",
      detail:
        "Every colour is a Tailwind v4 theme token in one stylesheet — the archive palette of cream ink, sage, burgundy, red, and neon green — so visual changes are one-line edits.",
    },
    {
      label: "ROUTING",
      detail:
        "Next.js App Router pages for each section; unknown project addresses return a real 404, and retired routes redirect to About.",
    },
  ],
  features: [
    {
      name: "BOOK AUTHORIZATION",
      detail: "A floating 3D archive book that opens on hover or tap",
      response: "AUTHORIZE plays a curtain transition into the workspace",
    },
    {
      name: "RETICULAR GRAPH",
      detail: "An SVG 3D orbit with the site's pages as nodes on rings",
      response: "Depth-scaled, clickable nodes; pauses on hover",
    },
    {
      name: "ARCHIVE WORKSPACE",
      detail: "Tabs, notebook navigator, and sticky side panels",
      response: "File properties change with the open document",
    },
    {
      name: "SCROLL THUMB",
      detail: "A short custom magenta scroll indicator",
      response: "Tracks position and can be dragged",
    },
  ],
} as const;

export const projects = [adaptiveUIEngine, parthArchive] as const;
