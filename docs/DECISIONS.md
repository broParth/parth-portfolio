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
