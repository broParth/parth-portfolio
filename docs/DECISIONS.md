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
- **Status:** Approved
- **Context:** The site requires an editorial, non-conventional structure inspired by Chimes' interaction philosophy.
- **Decision:** Position fixed hamburger navigation on one vertical edge, counterbalanced by asymmetric layout containers on the rest of the canvas.
- **Consequences:** Layout components must account for fixed nav positioning across viewport sizes.

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
