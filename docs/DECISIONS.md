# ARCHITECTURAL & DESIGN DECISIONS (DECISIONS.md)

This log records major design, technical, and architectural decisions. Decisions listed here must be respected in subsequent development steps and should not be silently altered.

---

## Decision Log

### ADR-001: Next.js App Router Architecture
- **Date:** 2026-09-28
- **Status:** Approved
- **Context:** Need a modern, performant, SEO-friendly framework with built-in route optimization and React Server Components.
- **Decision:** Selected Next.js App Router with TypeScript and `src/` directory structure.
- **Consequences:** Pages and layouts live under `src/app/`. Navigation and dynamic routes use native Next.js routing patterns.

### ADR-002: Motion and Interaction Library
- **Date:** 2026-09-28
- **Status:** Approved
- **Context:** Need fluid, cinematic transitions and layered interactions without heavy overhead.
- **Decision:** Adopt `framer-motion` for page transitions, layout morphing, and interactive reveals. Defer Three.js/GSAP/WebGL until specifically required.
- **Consequences:** Lightweight bundle, pure React integration, hardware-accelerated transforms.

### ADR-003: Fixed Asymmetric Layout Blueprint
- **Date:** 2026-09-28
- **Status:** Superseded by ADR-007
- **Context:** The site requires an editorial, non-conventional structure inspired by Chimes' interaction philosophy.
- **Decision:** Position fixed hamburger navigation on one vertical edge, counterbalanced by asymmetric layout containers on the rest of the canvas.
- **Consequences:** The legacy fixed-menu approach is retired; workspace-native navigation is documented in ADR-007.

### ADR-004: Strict Carousel Scope Enforcer
- **Date:** 2026-09-28
- **Status:** Approved
- **Context:** Prevent generic, overused carousel UX across major narrative pages.
- **Decision:** Carousels are strictly limited to technical skills, tools, languages, and platforms (`/stack`). All other sections (Projects, About, Experience, Contact, Nav) must use dedicated non-carousel layouts.
- **Consequences:** Component design for Projects and Experience must use vertical/asymmetric editorial formats instead of slides.

### ADR-005: AI-Context Persistence System
- **Date:** 2026-09-28
- **Status:** Approved
- **Context:** Development may be performed across different AI sessions and agents.
- **Decision:** Establish `/docs/` and root agent instruction files (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `copilot-instructions.md`) as the canonical repository truth.
- **Consequences:** Every agent turn updates `CURRENT_STATE.md` and `AI_HANDOFF.md`.

### ADR-006: Homepage Pivot — Abandoned Archive Environment & Interactive CRT Computer
- **Date:** 2026-10-20
- **Status:** Approved
- **Context:** The typography-curtain reveal experiment was cancelled in favor of an atmospheric, physical digital environment with immediate narrative impact.
- **Decision:** Pivot the homepage to use the approved full-screen artwork `public/images/archive-room.png`. Overlay real, accessible HTML elements: left-side editorial identity (`PARTH`, `COMPUTER SCIENCE`, `AI • SOFTWARE • SECURITY`) and an interactive phosphor-green CRT terminal (`SYSTEM ERROR / PARTH_ARCHIVE // 01 / [ CLICK ME ]`) on the vintage monitor in the lower-right desk. Clicking the CRT navigates directly to the portfolio interface (`/projects`).
- **Consequences:** Removed the previous 400vh scroll canvas, sticky curtain stage, and typography reveal from the homepage. The components `LetterCurtain`, `RevealSection`, `HeroEnvironment`, and `ArchiveEnvironment` are preserved in the codebase but unused on the new homepage. Layout is responsive across desktop and portrait mobile viewports.

### ADR-007: Workspace-Native Portfolio Navigation
- **Date:** 2026-10-29
- **Status:** Approved
- **Context:** The book authorization intro leads to a shared archival workspace whose own tabs and notebook navigator already provide route access. A separate global hamburger menu duplicates that navigation.
- **Decision:** Remove the legacy global hamburger and overlay. Use the workspace's document tabs and left notebook navigator for portfolio routes; retain its NAV/DOC/GRAPH switcher on smaller screens.
- **Consequences:** The shared layout has no persistent global menu. Workspace navigation remains route-aware and directly accessible on desktop and smaller screens.

### ADR-008: Embedded Languages & Tools Marquee
- **Date:** 2026-11-01
- **Status:** Approved
- **Context:** The user chose to retire the dedicated Tech Stack document and present the résumé inventory as a compact part of the existing About document.
- **Decision:** Add a subdued, continuous CSS marquee inside the existing About Field Notes content box. Keep one accessible static text representation, pause the visual track on hover, and present a wrapped static fallback when reduced motion is preferred. Remove Stack from workspace navigation and redirect `/stack` to `/about` for existing links.
- **Consequences:** The dedicated StackDocument and stack content source are obsolete and may be removed. No new route, dependency, skill claims, or project associations are introduced.

### ADR-009: Remove Archive Soundtrack
- **Date:** 2026-11-06
- **Status:** Approved
- **Context:** The looping soundtrack (`public/audio/archive-theme.mp3`) carried potential copyright risk, and autoplaying audio is intrusive for portfolio visitors.
- **Decision:** Remove the audio asset, the persistent `ArchiveAudioProvider`, the workspace mute control, and the intro autoplay behavior. Also remove the unused `RevealSection` component noted in ADR-006.
- **Consequences:** The site is silent. The book intro and AUTHORIZE transition are unchanged apart from no longer starting playback.

### ADR-010: Simplified Reading Layout and Design Tokens
- **Date:** 2026-11-06
- **Status:** Proposed (on `improvements` branch, pending user review)
- **Context:** Visitor feedback: background too dark, text too small, layout too cluttered. Audit found ~66% of About text ≤12px, low-contrast secondary text, seven accent colours, and a faux Obsidian workspace full of non-functional chrome and invented metadata that conflicted with the no-invented-content rule. Supersedes ADR-007's workspace-native navigation.
- **Decision:** Centralise colours as theme tokens; lift the base background and text contrast; set 16–18px body and ≥12px labels; replace the three-panel workspace with a top nav, centred reading column and footer; remove fake properties/graph/status UI; reduce accents to burgundy + cream; show name and role on the landing page; return real 404s for unknown project slugs.
- **Consequences:** Archive identity is carried by the stamped cream headings, mono section labels, burgundy accent, grain, and the book intro rather than by simulated app chrome. Visual changes are now made in `globals.css` tokens.

### ADR-011: Restore the Archive Workspace (Readable Edition)
- **Date:** 2026-11-06
- **Status:** Proposed (on `improvements` branch, pending user review). Supersedes the layout portion of ADR-010; ADR-010's tokens, type sizes, accent reduction, landing name/role, and 404 handling remain.
- **Context:** The simplified top-nav layout read as generic; the user wants to keep the archival workspace idea while making it easier on the eyes and keeping About brief.
- **Decision:** Reinstate the multi-panel archive workspace with only real, functional content (navigator of real documents, clickable graph of real documents, real status values), readable text sizes and lighter reading canvas. Reduce About to a single Field Notes record: intro, what I bring, Languages & Tools ticker.
- **Consequences:** The workspace remains the site's identity; new pages/projects must be added to the navigator/graph data (FOLDERS / projects list) to appear.
