# AGENT GUIDELINES & PROJECT TRUTH (AGENTS.md)

Welcome to the Personal Portfolio project. All AI coding agents (Antigravity, Claude, Gemini, Copilot, Cursor, Codex, etc.) operating in this repository MUST follow the guidelines documented here and in `/docs/`.

---

## 1. Single Source of Truth
The documentation files in `/docs/` represent the source of truth:
- `/docs/PROJECT_SPEC.md` — Visual vision, interaction philosophy, rules, and page structure.
- `/docs/DECISIONS.md` — Architectural Decision Records. Do NOT override these without authorization.
- `/docs/CURRENT_STATE.md` — Live progress tracker.
- `/docs/AI_HANDOFF.md` — Notes for switching between AI agents.

Before starting any task, read `/docs/CURRENT_STATE.md` and `/docs/PROJECT_SPEC.md`.

---

## 2. Non-Negotiable Rules

### A. The Carousel Rule
> Carousels are allowed **ONLY** for:
> - Programming languages
> - Technologies & Frameworks
> - Applications & Platforms
> - Developer tools & Technical skills
>
> **NEVER** create carousels for Projects, About, Experience, Contact, or Navigation sections.

### B. Truthful Content Rule
> Do **NOT** invent project titles, descriptions, technical achievements, work experience, hackathons, or links. Only use real information provided by the user.

### C. Aesthetic & Interaction Quality
> The portfolio is an **interactive digital environment** inspired by physical depth, tactile layers, asymmetric balance, large editorial typography, and cinematic transitions. Avoid plain boilerplate cards and cookie-cutter grids.

### D. Multi-Page Architecture
> Pages exist at:
> - `/`
> - `/about`
> - `/projects`
> - `/projects/[slug]`
> - `/experience`
> - `/stack`
> - `/contact`

---

## 3. Workflow Protocol for AI Agents
1. **Inspect before editing:** Check `/docs/CURRENT_STATE.md`.
2. **Execute incremental, verified steps:** Run `npm run build` after making changes to ensure zero TypeScript or routing errors.
3. **Update Handoff Docs:** Update `/docs/CURRENT_STATE.md` and `/docs/AI_HANDOFF.md` at the conclusion of your turn.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
