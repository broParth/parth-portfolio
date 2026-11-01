# PROJECT SPECIFICATION: INTERACTIVE DEVELOPER PORTFOLIO

## 1. Project Vision
This personal portfolio is designed as an **interactive digital experience** rather than a conventional developer portfolio website.

### Visual & Experiential Direction
- **Creative & Cinematic:** High-impact editorial layouts, subtle dynamic motion, atmospheric typography.
- **Retro / Archival / Nostalgic:** Modern technical execution infused with archival texture, structural depth, and physical feel.
- **Editorial & Experimental:** Clean, deliberate typography and layout balance, paired with unexpected interactive mechanisms.
- **Visual Storytelling:** Interactive exploration that leads the visitor through code, engineering problems, and technical philosophy.
- **Core Environment Goal:** *"An interactive visual environment that happens to contain a developer portfolio."*

---

## 2. Interaction Philosophy (Chimes Inspiration)
Inspired by the interaction principles of Marina Budarina's ["Chimes"](https://marinabudarina.github.io/chimes):
- **Core Principle:** Making content and navigation feel physical, immersive, layered, and tactile.
- **Strict Boundary:** We do **NOT** copy Chimes' artwork, layouts, assets, visual identity, or CSS. We adopt its philosophy of physical depth, layered motion, and exploratory reveal.

---

## 3. Core Design System & Rules

### Layout & Composition
- **Archival Navigation:** The shared workspace's document tabs and notebook navigator are the primary navigation. On smaller screens, the workspace's NAV/DOC/GRAPH switcher exposes those existing regions without a separate global menu.
- **Editorial Typography:** Large scale, structural typography used both for visual hierarchy and as interactive/reveal triggers.
- **Physicality & Tactility:** Use of layers, curtains, sliding panels, overlapping architectural structures, and depth cues.
- **Transformative Hover States:** Hovering elements transforms or reveals structural context (data, snippets, breakdown) rather than simple color toggles.
- **Non-Card Centric:** Cards are used sparingly where appropriate; they are **NOT** the foundation of the website layout.
- **Cinematic Transitions:** Seamless page-to-page transitions using motion matching and layout persistence.
- **Exploratory Reward:** Deep scrolling, interaction triggers, and persistent visual feedback that reward active exploration while maintaining absolute legibility and accessibility.

### Strictly Enforced Carousel Rule
> **CAROUSEL RESTRICTION RULE**  
> Carousels are allowed **ONLY** for:
> - Programming languages
> - Technologies & Frameworks
> - Applications & Platforms
> - Developer tools & Technical skills
>
> **NEVER** use carousels for:
> - Projects
> - About section
> - Experience section
> - Contact section
> - Site Navigation

---

## 4. Multi-Page Architecture

| Route | Purpose & Design Focus |
|---|---|
| `/` | Homepage: High-impact introduction, interactive visual environment, narrative entry point |
| `/about` | Deep dive into background, philosophy, technical journey, and a compact Languages & Tools marquee |
| `/projects` | Complete index of software engineering & security projects |
| `/projects/[slug]` | Individual project showcase (architecture, deep dive, links, media) |
| `/experience` | Chronological career, hackathons, and CTF/cybersecurity milestones |
| `/contact` | Minimalist, high-clarity communication hub |

---

## 5. Technical Requirements & Guidelines

### Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (`strict` mode)
- **Styling:** Tailwind CSS (utility + custom CSS variables for design tokens)
- **Motion Engine:** Framer Motion (page transitions, physics-based UI micro-interactions)
- **Icons:** Lucide React

### Non-Negotiable Rules
- **No Invented Details:** Do not generate fake projects, fake experiences, or dummy links. Real data only.
- **No Premature Heavy Libraries:** No WebGL, Three.js, or GSAP unless explicitly called for by a future architectural step.
- **Performance & Accessibility:** Fully responsive, semantic HTML, keyboard accessible, fast initial paint.
- **AI-Context System:** Maintain repository docs (`PROJECT_SPEC.md`, `CURRENT_STATE.md`, `DECISIONS.md`, `AI_HANDOFF.md`, `AGENTS.md`) as source-of-truth across all sessions.
