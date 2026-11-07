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

## Projects featured

- **[Adaptive UI Engine](https://github.com/broParth/Adaptive-UI-Interface).** A context-aware Windows desktop utility that reads keyboard and pointer activity, classifies it with a threshold-based finite state machine, and adapts the interface. Built with Nishant Chakravarthy.
- **[Parth Archive](https://github.com/broParth/parth-portfolio).** This portfolio.

## Contact

- GitHub: [@broParth](https://github.com/broParth)
- LinkedIn: [parth-chourasia](https://www.linkedin.com/in/parth-chourasia/)
- Instagram: [@pxrthh_h](https://www.instagram.com/pxrthh_h)
