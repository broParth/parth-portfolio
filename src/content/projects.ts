export const adaptiveUIEngine = {
  slug: "adaptive-ui-engine",
  label: "COLLABORATIVE SYSTEMS",
  title: "Adaptive UI Engine",
  subtitle: "A Context-Aware Desktop Interface System",
  category: "WINDOWS UTILITY · CONTEXT-AWARE INTERFACE",
  summary:
    "A collaborative Windows desktop utility that reads keyboard and pointer activity, interprets interaction through a threshold-based finite state machine, and adapts the interface to the detected context.",
  github: "https://github.com/broParth/Adaptive-UI-Interface",
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
  implementation: [
    {
      label: "SYSTEM-WIDE INPUT",
      detail:
        "Pynput monitors keyboard input, mouse clicks, and scrolling. Win32 GetCursorPos is polled at approximately 60 Hz, with a small movement threshold to filter cursor jitter.",
    },
    {
      label: "ACTIVITY ANALYSIS",
      detail:
        "Keyboard activity, pointer movement, clicks, scrolling, and inactivity duration are aggregated and smoothed with moving averages.",
    },
    {
      label: "STATE TRANSITIONS",
      detail:
        "Threshold-based classification and candidate-state buffering help manage transitions between the four interaction states.",
    },
    {
      label: "WINDOWS OS INTEGRATION",
      detail:
        "Win32 API and ctypes support system-level responses, including brightness and mouse-speed adjustments, alongside desktop notifications.",
    },
    {
      label: "BACKGROUND OPERATION",
      detail:
        "A system-tray utility can open the dashboard, pause or resume monitoring, and shut down gracefully. The project can be packaged as a standalone Windows executable.",
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
  implementation: [
    {
      label: "MOTION",
      detail:
        "Framer Motion drives the book's float, sway, and cover hinge and the authorization curtain. Reduced-motion preferences switch to static positions and short fades.",
    },
    {
      label: "3D GRAPH",
      detail:
        "Node positions are computed on tilted elliptical rings each frame; depth sets size, brightness, and label scale, and the active page is highlighted.",
    },
    {
      label: "RESPONSIVE LAYOUT",
      detail:
        "Desktop shows navigator, document, and graph side by side with sticky panels; phones get short tabs and a NAV / DOC / GRAPH switcher.",
    },
    {
      label: "ACCESSIBILITY",
      detail:
        "Skip link, visible focus rings, current-page markers, decorative elements hidden from assistive technology, and reduced-motion fallbacks.",
    },
    {
      label: "SINGLE SOURCE OF TRUTH",
      detail:
        "Content, contact details, and project records each live in one file; pages and side panels read from them, so nothing is typed twice.",
    },
  ],
  iterations: [
    {
      label: "FEEDBACK",
      detail: "Early reviews: background too dark, text too small, layout too cluttered.",
    },
    {
      label: "REWORK",
      detail:
        "Moved colours into tokens, rebuilt the type scale, and removed decorative UI that showed invented data.",
    },
    {
      label: "REFINEMENT",
      detail:
        "Restored the original archive palette and workspace structure, made every panel show real information, and added the 3D graph.",
    },
  ],
} as const;

export const projects = [adaptiveUIEngine, parthArchive] as const;
