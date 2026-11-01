export const adaptiveUIEngine = {
  slug: "adaptive-ui-engine",
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

export const projects = [adaptiveUIEngine] as const;
