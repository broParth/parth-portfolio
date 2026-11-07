# Parth Archive

The personal portfolio of **Parth Chourasia**, a Computer Science student at New Horizon College of Engineering, built as an explorable research archive rather than a scrolling template.

Visitors start at a floating archive book, press **AUTHORIZE**, and enter a desktop-style workspace where every section of the portfolio is a document: About, Projects, Experience, and Contact.

## Features

- **Book authorization intro.** A 3D archive book floats and sways on the landing page, opens on hover or tap, and plays a curtain transition into the workspace.
- **Archive workspace.** A shared window shell with document tabs, a notebook navigator, a graph view, a file-properties panel, and a status bar. The side panels stay in view while the document scrolls.
- **Reticular graph view.** A slowly rotating 3D orbit of the site's pages and projects, drawn in SVG. Nodes are clickable, the current page is highlighted, and the rotation pauses on hover.
- **Page-aware file properties.** The side panel shows details for the open page (for example a project's category, role, and stack), all derived from the content files.
- **Projects.** Each project card links straight to its GitHub source or to a short dossier page: what it is, how it works, highlights, and stack.
- **Status bar.** Email, GitHub, and Instagram links, plus a live clock in IST.
- **Responsive.** On phones the tabs shorten and a NAV / DOC / GRAPH bar switches between the parts of the workspace.
- **Accessibility.** Skip link, visible focus states, and reduced-motion fallbacks (static positions and short fades).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- TypeScript
- Tailwind CSS v4, with colours defined as theme tokens in `src/app/globals.css`
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

| Script          | What it does                    |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the development server    |
| `npm run build` | Production build (uses webpack) |
| `npm run start` | Serve the production build      |
| `npm run lint`  | Run ESLint                      |

## Project structure

```
src/
├── app/                          Routes (App Router)
│   ├── page.tsx                  Landing page (book authorization intro)
│   ├── about/                    About — personnel file
│   ├── projects/                 Projects index and /projects/[slug] dossiers
│   ├── experience/               Activity record
│   ├── contact/                  Contact and résumé
│   ├── stack/, portfolio/        Old addresses, redirect to /about
│   ├── not-found.tsx             404 page
│   ├── layout.tsx                Fonts, metadata, background, page scroll indicator
│   └── globals.css               Theme tokens and global styles
├── components/
│   ├── ArchiveWorkshell.tsx      Workspace shell (tabs, navigator, panels, status bar)
│   ├── ArchiveGraph.tsx          Rotating 3D graph view
│   ├── AuthorizationIntro.tsx    Landing book and AUTHORIZE button
│   ├── AuthorizationTransition.tsx  Curtain transition into the workspace
│   ├── AtmosphericBackground.tsx Grain, vignette, glow, and grid backdrop
│   ├── DocumentParts.tsx         Shared page header and section labels
│   ├── ScrollThumb.tsx           Small custom scroll indicator
│   ├── SocialLinks.tsx           Status-bar email / GitHub / Instagram icons
│   ├── sections/                 About, Projects, Experience, Contact pages
│   └── projects/
│       └── ProjectDossier.tsx    Shared layout for every project dossier
└── content/
    ├── about.ts                  About copy and quick-reference facts
    ├── experience.ts             Activity records
    ├── projects.ts               Project records
    ├── contact.ts                Email, social links, résumé file
    └── fileProperties.ts         Builds the side panel's properties for each page
public/
└── resume.pdf                    Downloadable résumé
```

## Editing content

Copy lives in typed files under `src/content/`, so text can be updated without touching layout code:

- **About:** `src/content/about.ts`
- **Experience:** `src/content/experience.ts`
- **Projects:** `src/content/projects.ts`. A new project record automatically gets a card, a dossier page at `/projects/<slug>`, a navigator entry, and a graph node.
- **Contact details and social links:** `src/content/contact.ts`
- **Résumé:** replace `public/resume.pdf`
- **Colours:** the theme tokens at the top of `src/app/globals.css`

## Projects featured

- **[Adaptive UI Engine](https://github.com/broParth/Adaptive-UI-Interface).** A context-aware Windows desktop utility that reads keyboard and pointer activity, classifies it with a threshold-based finite state machine, and adapts the interface. Built with Nishant Chakravarthy.
- **[Parth Archive](https://github.com/broParth/parth-portfolio).** This portfolio.

## Contact

- GitHub: [@broParth](https://github.com/broParth)
- LinkedIn: [parth-chourasia](https://www.linkedin.com/in/parth-chourasia/)
- Instagram: [@pxrthh_h](https://www.instagram.com/pxrthh_h)
