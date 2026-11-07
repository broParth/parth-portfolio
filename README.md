# Parth Archive

The personal portfolio of **Parth Chourasia**, a Computer Science student at New Horizon College of Engineering, built as an explorable research archive rather than a scrolling template.

Visitors start at a floating archive book, press **AUTHORIZE**, and enter a desktop-style workspace where every section of the portfolio is a document: About, Projects, Experience, and Contact.

## Features

- **Book authorization intro.** A 3D archive book floats and sways on the landing page, opens on hover or tap, and plays a curtain transition into the workspace.
- **Archive workspace.** A shared window shell with document tabs, a notebook navigator, a graph view, a file-properties panel, and a status bar.
- **Document pages.** About (personnel file and a Languages & Tools ticker), Projects (with a project dossier page), Experience (activity record), and Contact (email, LinkedIn, GitHub, and résumé download).
- **Responsive.** On smaller screens a NAV / DOC / GRAPH switcher exposes each part of the workspace.
- **Reduced motion.** Animations fall back to static positions and short fades when the visitor prefers reduced motion.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- Fonts: Syne, Plus Jakarta Sans, and JetBrains Mono (via `next/font`)

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script          | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Production build (uses webpack)      |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
src/
├── app/                    Routes (App Router)
│   ├── page.tsx            Landing page (book authorization intro)
│   ├── about/              About — personnel file
│   ├── projects/           Projects index and /projects/[slug] dossiers
│   ├── experience/         Activity record
│   ├── contact/            Contact and résumé
│   ├── stack/, portfolio/  Old addresses, redirect to /about
│   ├── layout.tsx          Fonts, metadata, background, transition provider
│   └── globals.css         Global styles
├── components/
│   ├── ArchiveWorkshell.tsx         Workspace shell (tabs, navigator, panels)
│   ├── AuthorizationIntro.tsx       Landing book and AUTHORIZE button
│   ├── AuthorizationTransition.tsx  Curtain transition into the workspace
│   ├── AtmosphericBackground.tsx    Grain, vignette, glow, and grid backdrop
│   ├── sections/                    About, Projects, Experience, Contact pages
│   └── projects/                    Project dossier pages
└── content/
    ├── about.ts            About copy and quick-reference facts
    ├── experience.ts       Activity records
    └── projects.ts         Project records
public/
└── resume.pdf              Downloadable résumé
```

## Editing content

Most copy lives in typed files under `src/content/`, so text can be updated without touching layout code:

- **About:** `src/content/about.ts`
- **Experience:** `src/content/experience.ts`
- **Projects:** `src/content/projects.ts`
- **Contact details:** `src/components/sections/ContactDocument.tsx`
- **Résumé:** replace `public/resume.pdf`

## Projects featured

- **[Adaptive UI Engine](https://github.com/broParth/Adaptive-UI-Interface).** A context-aware Windows desktop utility that reads keyboard and pointer activity, classifies it with a threshold-based finite state machine, and adapts the interface. Built with Nishant Chakravarthy.

## Contact

- GitHub: [@broParth](https://github.com/broParth)
- LinkedIn: [parth-chourasia](https://www.linkedin.com/in/parth-chourasia/)
