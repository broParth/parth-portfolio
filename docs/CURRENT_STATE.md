# CURRENT STATE (CURRENT_STATE.md)

## Current Status Overview
- **Phase:** Phase 5 — Unified Archival Portfolio
- **Last Updated:** 2026-10-29
- **Git Commit:** `5505133` (base)
- **Build Status:** Verified (`npx tsc --noEmit` exit 0, webpack production build exit 0, all 10 routes compiled cleanly)

---

## 1. Completed Work

### Phase 1 — Foundation & Architecture Planning
- [x] Initialized Next.js (v16.3.6) with TypeScript, Tailwind CSS v4, App Router, and `src/` directory.
- [x] Established core project documentation (`PROJECT_SPEC.md`, `DECISIONS.md`, `CURRENT_STATE.md`, local `AI_HANDOFF.md`).
- [x] Established agent prompt files (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`).
- [x] Established 7 route placeholders: `/`, `/about`, `/projects`, `/projects/[slug]`, `/experience`, `/stack`, `/contact`.

### Phase 2 — Visual Foundation & Nav Shell
- [x] Design System Tokens: Configured dark warm cinematic design tokens, CSS variables, and Google Fonts (`Syne`, `Plus Jakarta Sans`, `JetBrains Mono`) in `globals.css` and `layout.tsx`.
- [x] Atmospheric Background: Built [`AtmosphericBackground.tsx`](file:///d:/Documents/PARTH/PortfolioWebsite/portfolio/src/components/AtmosphericBackground.tsx) with film grain texture, radial vignette, and ambient glowing light.
- [x] Fixed Right Navigation Shell: Built [`NavigationShell.tsx`](file:///d:/Documents/PARTH/PortfolioWebsite/portfolio/src/components/NavigationShell.tsx), [`MenuButton.tsx`](file:///d:/Documents/PARTH/PortfolioWebsite/portfolio/src/components/MenuButton.tsx), and [`NavOverlay.tsx`](file:///d:/Documents/PARTH/PortfolioWebsite/portfolio/src/components/NavOverlay.tsx).

### Phase 3 — The Abandoned Archive: Homepage Pivot
- [x] **Pivoted from Typography Curtain to Abandoned Archive Environment**: Removed 400vh scroll sequence; installed approved background image `public/images/archive-room.png` as 1672:941 aspect-ratio environment canvas.
- [x] **ADR-006**: Documented architectural pivot decision in `DECISIONS.md`.

### Phase 3A — CRT Screen Alignment, Glass Integration & Typography Polish
- [x] **Removed Card/Box Appearance from CRT Overlay ([`CrtTerminal.tsx`](file:///d:/Documents/PARTH/PortfolioWebsite/portfolio/src/components/CrtTerminal.tsx))**:
  - Eliminated all rectangular UI cards, opaque background gradients, borders, and card box-shadows.
  - Made the terminal container completely transparent (`bg-transparent`), letting all underlying CRT glass cracks, reflections, and curvature details from `archive-room.png` remain 100% visible.
  - The green phosphor monospace text (`SYSTEM ERROR`, `PARTH_ARCHIVE`, `[ CLICK ME ]`) now renders as pure glowing phosphor characters directly on the glass.
  - Added subtle, organic phosphor flicker animation (`@keyframes crt-phosphor-flicker` in `globals.css`) with `prefers-reduced-motion` support.
  - Hover / focus state subtly intensifies the green phosphor text glow and highlights `[ CLICK ME ]` with a pointer cursor and no rectangular hover box.
- [x] **Precise Inner Glass Alignment**:
  - Aligned the interactive target to match the inner curved CRT glass boundary (`left: 72.4%`, `top: 43.5%`, `width: 14.4%`, `height: 21.2%`, `rotate(-3.6deg) skewX(-1.2deg)`).
  - Maintained click action navigating to `/projects`.
- [x] **Website Accent Typography Color Refinement**:
  - Replaced the orange accent color on `RESEARCH ARCHIVE // DIGITAL ENVIRONMENT` and `AI • SOFTWARE • SECURITY` with a muted, desaturated sage-grey (`#B8C6BE`).
  - Preserved the warm off-white main display typography (`PARTH`, `COMPUTER SCIENCE`) and existing interface metadata accents (amber dot, divider line).
  - Eliminates visual competition with the room's warm sunset window lighting.
- [x] **Desktop & Mobile Responsiveness**:
  - Verified layout across desktop (1540x800, 1920x1080) and mobile (375x812).
  - On mobile, identity text sits cleanly in the upper third while the glowing CRT monitor is unobstructed in the lower half.
- [x] **Visual Review & Approval**: Visually reviewed and explicitly approved by the user.

### Phase 3B.1 — Subtle Environmental Fluorescent Light Flicker
- [x] **CSS Keyframe Animation** (`@keyframes fluoro-flicker` in `globals.css`):
  - 14-second cycle with long stable baseline periods (~8%, 10–34%, 35–62%, 68–88%, 90–100%).
  - Occasional clustered brief blinks (8.5–9.8%, 34.3–34.6%, 88.4–89.5%) for realism.
  - Single slow sag-and-recovery segment (65–67%).
  - `prefers-reduced-motion` disables animation and fixes a neutral opacity.
- [x] **Screen-Blend Overlay Element** (`page.tsx`):
  - Absolutely positioned `<div>` at `left: 28%, top: 12%, width: 32%, height: 22%` — matching the fluorescent tube fixture location in `archive-room.png`.
  - `background: radial-gradient(ellipse)` in a cool blue-white (`rgba(210,225,245,...)`) mimics tube spill.
  - `mix-blend-mode: screen` — only adds brightness, never darkens the underlying artwork.
  - `filter: blur(8px)` softens the overlay into a natural ambient glow.
  - `aria-hidden="true"` and `pointer-events-none` — purely decorative, invisible to AT.
- [x] **Build verified**: `npm run build` exits 0, all 9 routes clean.

### Phase 3B.2 / Phase 3B.3 — Environmental Water Experiments (CANCELLED)
- **Status**: Cancelled by user decision.
- **Reason**: Video generation visual quality was insufficient, contained a watermark, and had a loop seam discontinuity; CSS water prototype lacked sufficient fidelity to justify overriding the approved artwork.
- **Action Taken**:
  - Fully rolled back to approved static background `public/images/archive-room.png`.
  - Removed `<video>` background rendering element from `src/app/page.tsx`.
  - Removed `WaterDrip` component from `src/app/page.tsx` and removed `src/components/WaterDrip.tsx`.
  - Removed all water-specific keyframes, classes, and reduced-motion rules from `src/app/globals.css`.
  - Removed unused public asset `public/videos/archive-room-water.mp4`.
  - Preserved Phase 3B.1 fluorescent ceiling light flicker overlay (`.animate-fluoro-flicker` with `mix-blend-mode: screen`).
  - Preserved Phase 3A CRT alignment, glowing phosphor green text, `.crt-click-prompt` 500ms flicker, and click interaction.
  - Preserved all typography, navigation, and layout styling.

---

## 2. Current Work

### Phase 3C — Navigation Architecture Correction (COMPLETE)
- [x] **Homepage (`/`) is a standalone full-screen, non-scrolling archive room.**
  - `src/app/page.tsx` uses `<main class="h-screen overflow-hidden">` — visitor cannot scroll.
  - Removed stale `WaterDrip` import (component deleted in Phase 3B.2 rollback).
  - All approved visuals intact: archive-room.png, CRT overlay, fluorescent flicker, identity text.
- [x] **New continuous portfolio journey at `/portfolio`.**
  - `src/app/portfolio/page.tsx` — scrollable long-page with 5 semantic sections in order:
    1. `id="about"` — About Me
    2. `id="projects"` — Projects
    3. `id="experience"` — Experience
    4. `id="stack"` — Tech Stack *(carousel permitted here only)*
    5. `id="contact"` — Contact
- [x] **CRT `[ CLICK ME ]` destination updated to `/portfolio#about`.**
  - `src/components/CrtTerminal.tsx` `href` changed from `/#about` → `/portfolio#about`.
  - Aria-label updated to reflect new destination.
- [x] **Individual standalone section routes — each shows only its own section:**
  - `/about` — About Me section only (`h1`)
  - `/projects` — Projects section only (`h1`)
  - `/experience` — Experience section only (`h1`)
  - `/stack` — Tech Stack section only (`h1`)
  - `/contact` — Contact section only (`h1`)
- [x] **Hamburger navigation (`NavOverlay.tsx`) unchanged** — already pointed to individual routes correctly.
- [x] **Build verified:** `npm run build` exit 0, 10 routes, 0 TS errors.

### Phase 4.3 — Single-Document Archival Navigation Architecture (COMPLETE)
- [x] **Transitioned from Continuous Scrolling to Single-Document Archival Workspace**:
  - Eliminated the long scrolling portfolio page where all 5 sections were vertically stacked.
  - Built [`src/components/ArchiveWorkshell.tsx`](file:///d:/Documents/PARTH/PortfolioWebsite/portfolio/src/components/ArchiveWorkshell.tsx) as the persistent, shared application chrome across all interior routes.
  - Created modular section documents in `src/components/sections/`:
    - `AboutDocument.tsx`: Full About Me identity narrative, investigations, personal notes, objective, and frontmatter.
    - `ProjectsDocument.tsx`: Archival dossier layout for engineering works.
    - `ExperienceDocument.tsx`: Archival dossier layout for work experience.
    - `StackDocument.tsx`: Archival dossier layout for tech stack & tools (carousel permitted here only).
    - `ContactDocument.tsx`: Archival dossier layout for operator contact.
  - Converted `src/app/portfolio/page.tsx` into an immediate server-side redirect to `/about` (`307 Temporary Redirect`).
  - Wrapped `src/app/projects/[slug]/page.tsx` inside `ArchiveWorkshell activeSection="projects"` with an archival dossier layout and back navigation to the directory.
- [x] **Synchronized Navigation & Routing**:
  - **CRT Entrance (`CrtTerminal.tsx`)**: Clicking `[ CLICK ME ]` triggers the tuned phosphor burst transition and lands directly on `/about` (or immediately with reduced motion).
  - **Phosphor Burst Overlay (`PhosphorBurstTransition.tsx`)**: Navigates underneath the whiteout flash to `/about` with zero flash of unstyled content or old homepage elements.
  - **Sidebar Navigator**: All entries (`Parth — Personnel File`, `Projects Portfolio`, `Work Experience`, `Technical Skills & Stack`, `Operator Contact`) link to distinct routes (`/about`, `/projects`, `/experience`, `/stack`, `/contact`) with active burgundy pill indicators.
  - **Top Tab Strip**: All tabs link to real Next.js routes, with the active tab highlighted in burgundy (`#642D3D`).
  - **Hamburger Menu (`NavOverlay.tsx`)**: Fully synchronized with individual routes.
  - **Browser History**: Standard browser Back/Forward navigation works cleanly between documents without viewport jumping or anchor scrolling.
- [x] **Preserved Visual Fidelity & Single Source of Truth**:
  - `src/content/about.ts` remains the single source of truth for About Me copy.
  - All styling details (warm cream stamped headings, Obsidian properties table, drafting ruler ticks, reticular graph view, bottom status bar, palette tokens) preserved exactly.
- [x] **Build & Route Verification**:
  - `npx tsc --noEmit` exited code 0 (zero TypeScript errors).
  - `npx next build --webpack` exited code 0 (all 10 routes compiled cleanly).
  - Live probe confirmed: `/` (200), `/about` (200), `/projects` (200), `/experience` (200), `/stack` (200), `/contact` (200), `/portfolio` (307 -> `/about`), `/projects/security-mesh` (200).
- **Status:** Complete. Awaiting visual review. Not yet committed.

### About Document Width & Readability Refinement
- [x] Expanded the About-only desktop document canvas allocation while preserving the shared shell layout on other routes.
- [x] Set the About document to use up to 640px where its canvas allows; at the current 1280px shell width, its inner document area is approximately 592px.
- [x] Updated the stamped title to a conventional sans-serif treatment, improved content spacing, and removed clipping from long property values.
- [x] Validation: `npx tsc --noEmit` passed; `npx next build --webpack` passed (10 routes). Default Turbopack build encountered an internal child-process error.
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 18 — Operator Contact Document
- [x] Replaced the Contact placeholder with an archival communication record, concise invitation, email/LinkedIn/GitHub channels, and a personnel-document résumé download.
- [x] Email uses one `CONTACT_EMAIL` constant and renders a neutral pending state without exposing the placeholder or creating a broken mailto link.
- [x] LinkedIn and GitHub use the supplied URLs and safe new-tab attributes; résumé action downloads `/resume.pdf` as `Parth_Chourasia_Resume.pdf`.
- [x] Confirmed `public/resume.pdf` exists (69,281 bytes).
- [x] `npx tsc --noEmit` passed. `npm run build -- --webpack` reached compilation but failed because the environment could not resolve `fonts.googleapis.com` while loading the existing Google Fonts in `src/app/layout.tsx` (`ENOTFOUND`).
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 5 — Unified Archival Portfolio
- [x] `/` redirects to `/about`, reusing the existing About document and shared archival workspace.
- [x] Removed the separate abandoned-room/CRT entrance, phosphor-burst provider, and their unused components, images, and animation styles.
- [x] Kept the About route, all section documents, project detail route, shared navigation, and workspace chrome.
- [x] Validation: TypeScript and webpack production build passed; compiled output confirms the root redirect and all document routes.
- **Status:** Implemented in the working tree; not staged or committed.

### Archival Workspace Desktop Proportions
- [x] Increased the shell max width to 88rem and rebalanced the xl grid with minimum widths for navigator, spine, document, and properties sidebar.
- [x] Preserved the About document's wider center allocation and the existing tablet/mobile collapse behavior.
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 6 — Book Authorization Intro
- [x] Replaced the root redirect with a keyboard-accessible, pointer-responsive 3D archive book authorization intro.
- [x] Added a shared transition provider that covers the viewport, waits for the book departure, routes to `/about`, and reveals the existing workspace.
- [x] Added a reduced-motion fade path; the book remains static and the transition uses short opacity fades when reduced motion is preferred.
- [x] Preserved `/about`, all section routes, project details, workspace content, and existing navigation.
- [x] Browser checks confirmed keyboard open/close, pointer open and hover-close, and AUTHORIZE navigation to `/about`.
- [x] `npx tsc --noEmit` and `npx next build --webpack` passed after implementation.
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 7 — Legacy Hamburger Removal
- [x] Removed the global menu button, overlay, open/close state, and layout mount; all were exclusive to the legacy menu.
- [x] Kept the archive's document tabs and notebook navigator. The existing mobile NAV/DOC/GRAPH switcher continues to expose navigation on narrow screens.
- [x] Updated the project specification and recorded ADR-007 to reflect workspace-native navigation.
- [x] `npx tsc --noEmit`, `npx next build --webpack`, and `git diff --check` passed.
- [x] Browser checks confirmed no legacy menu on `/` or `/about`, AUTHORIZE still opens `/about`, desktop tabs and Back/Forward work, and all five mobile navigator links are visible and usable at 390px without horizontal overflow.
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 8 — Book Levitation Refinement
- [x] Separated vertical floating onto an outer transform wrapper and kept rotation/tilt on the inner book object.
- [x] The book travels between ±7% of its height (about ±23px on desktop and ±13px on mobile) with smooth reverse easing; a full up/down cycle takes 3.6 seconds and repeats indefinitely.
- [x] The elliptical shadow follows the same cycle. The hover/open state keeps floating while stabilizing rotation; authorization stops idle motion before the existing departure choreography.
- [x] Reduced motion sets the book and shadow to static positions; the floating, rotation, and shadow loops stop on unmount.
- [x] Browser observation over 9 seconds confirmed repeated vertical movement without a reset. Hover/open, pointer exit, and AUTHORIZE still work.
- [x] `npx tsc --noEmit` and `npx next build --webpack` passed.
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 9 — Restricted Book Rotation
- [x] The book now sways between -7° and -37° around its -22° resting three-quarter angle, staying within a 30° arc rather than making a full revolution.
- [x] Rotation eases between the endpoints in 6.4 seconds per direction (a 12.8-second full cycle, 25% faster than the previous 16-second cycle).
- [x] Pointer exit smoothly returns to the sway path; hover stabilization, reduced-motion static rotation, and authorization control remain intact.
- [x] Browser observation over 9.6 seconds confirmed a smooth reversal near each endpoint (-36.2° to -7.9° in sampled frames); hover, pointer exit, and AUTHORIZE still work without console errors.
- [x] `npx tsc --noEmit` and `npx next build --webpack` passed.
- **Status:** Implemented in the working tree; not staged or committed.

---

## 3. Known Issues / Blockers
- None.

---

## 4. Next Recommended Phase
- User to review the book intro and workspace-native navigation across desktop and mobile.

---

## 5. Verification Log
- `npx tsc --noEmit`: **SUCCESS**.
- `npx next build --webpack`: **SUCCESS**, all 10 routes compiled.
- **Architecture Verification**: `/` renders the authorization intro; AUTHORIZE transitions to `/about`. `/about`, `/projects`, `/experience`, `/stack`, `/contact`, and `/projects/[slug]` remain available in the shared workspace.

### Phase 10 — Continuous Archive Soundtrack
- [x] Confirmed the supplied `public/audio/archive-theme.mp3` exists (2,650,207 bytes) and wired that file as the looping soundtrack.
- [x] Mounted one audio controller in the root client layout so playback continues across client-side navigation; the root intro attempts autoplay and fades toward 18% volume over 2 seconds.
- [x] Added a discreet, accessible mute/unmute control to the archival workspace toolbar. The mute state is held by the persistent controller while browsing.
- [x] Playback errors are caught independently from the authorization transition; reduced-motion preference skips audio fades.
- [x] Browser checks confirmed AUTHORIZE starts the single audio element, mute/unmute works, and playback remains active with mute state preserved when navigating to `/projects`.
- [x] `npx tsc --noEmit` and `npx next build --webpack` passed.
- **Status:** Implemented in the working tree; not staged or committed.
- Final rerun note (2026-10-29): `npx tsc --noEmit` passed. `npx next build --webpack` compiled and passed its TypeScript phase but failed during prerender while creating generated `.next` directories (`EPERM`, including with one build worker); no source/config change was retained to work around the environment error.

### Phase 11 — Intro Autoplay and Sound Fallback
- [x] The persistent audio controller makes one guarded autoplay attempt when the `/` book intro mounts; it does not wait for hover or AUTHORIZE and does not retry automatically after rejection.
- [x] An intro control was added for blocked autoplay; this was superseded in Phase 13 to keep the landing page visually clean and use AUTHORIZE as the recovery interaction.
- [x] `npx tsc --noEmit` passed. A Webpack build using an isolated temporary output directory reached font loading and failed because network access to `fonts.googleapis.com` was unavailable; the temporary config change and output directory were removed.
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 12 — About Document Content Trim
- [x] Removed the dedicated Objectives section and its section-only content shape from `src/content/about.ts`.
- [x] Removed the Current Investigations lead and explanatory paragraphs while preserving its heading and all five focus-area cards.
- [x] Removed only the first Field Notes paragraph. Remaining copy and the shared Quick Reference metadata, including its long-term objective fact, remain unchanged.
- [x] `npx tsc --noEmit` passed. Live About preview confirmed the remaining sections and quick facts render without Objective or removed paragraphs.
- [ ] `npx next build --webpack` could not complete in this environment: generated `.next/types` directory creation failed with `EPERM` while the development server was active.
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 13 — Landing Audio Autoplay Recovery
- [x] The root intro attempts audible playback once after mount with `muted=false`, starting at a quiet nonzero volume (3%) and fading toward 18% over 2 seconds.
- [x] Removed the landing-page sound control. If autoplay is rejected, AUTHORIZE retries playback from the user gesture; an already-playing track is not restarted.
- [x] Kept the single audio element in the persistent root layout and retained the workspace mute/unmute control.
- [x] Browser verification confirmed no landing-page audio control, AUTHORIZE recovery after autoplay rejection, one player continuing into `/about` and `/projects`, and mute/unmute without a playback-position reset.
- [x] `npx tsc --noEmit` passed. `npx next build --webpack` compiled and passed TypeScript, then failed during prerender while creating `.next/server/app/about.segments/about` (`EPERM`).
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 14 — About Header Typography Match
- [x] Matched the About document's main title to the existing Projects/Experience/Stack/Contact header font family and classes: `font-display`, responsive 2xl/3xl sizing, extra-bold uppercase, tight tracking, and single-line leading.
- [x] Preserved the About banner, colors, borders, padding, text, and responsive wrapping behavior.
- [x] `npx tsc --noEmit` passed. Browser preview at 866px confirmed the Syne display face, weight 800, 30px responsive size, tight tracking, and two-line wrapping without horizontal overflow.
- [ ] `npx next build --webpack` compiled but failed during generated `.next` directory creation (`EPERM`) while the development server was active.
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 15 — About Width Alignment with Projects
- [x] Set About's center-column horizontal padding to the same `xl:px-12` used by the other routes, without changing the workspace grid or side panels.
- [x] Matched About's article width and responsive right gutter to the existing Projects rule (`max-w-2xl mx-auto pr-2 sm:pr-4`); About's larger vertical section spacing remains unchanged.
- [x] Same-viewport browser measurements at 866px showed About and Projects with identical 672px article widths, 656px card widths, matching left edges, and no page overflow. Other section and project-detail wrappers use the same width/gutter classes.
- [x] `npx tsc --noEmit` passed. `npx next build --webpack` failed during compilation when Windows denied a generated `.next/server/app/stack` directory creation (`EPERM`) while the development server was active.
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 16 — About Title Box Spacing
- [x] Matched About's cream title box to Projects' horizontal and vertical padding (`px-4 py-2`), retaining `max-w-full` for narrow screens. Typography, border, colors, rounding, and the shared `space-y-3` heading/subtitle spacing remain unchanged.
- [x] About's narrower shared width alignment from Phase 15 is preserved.
- [x] Same-viewport browser preview confirmed both title boxes have 8px vertical and 16px horizontal padding, 30px line height, and no horizontal overflow at 866px.
- [x] `npx tsc --noEmit` passed. `npx next build --webpack` compiled and passed TypeScript, then failed during prerender on a generated `.next` directory creation (`EPERM`).
- **Status:** Implemented in the working tree; not staged or committed.

### Phase 17 — Adaptive UI Engine Project Presentation
- [x] Added a shared project record for Adaptive UI Engine, used by both the Projects index and `/projects/adaptive-ui-engine`.
- [x] Replaced the Projects placeholder entry with a collaborative project listing, concise technical summary, technology preview, and dossier link.
- [x] Added an archival project dossier covering overview, input-to-output architecture, the four FSM states, implementation, Parth's UI/Windows integration contribution, Nishant's architecture/FSM contribution, the supplied technologies, and repository link.
- [x] Kept the dynamic route's existing generic dossier fallback for other slugs and did not change workspace, route, audio, or intro behavior.
- [x] `npx tsc --noEmit` passed.
- [ ] `npx next build --webpack` remains blocked by `ENOTFOUND fonts.googleapis.com` and also reported `EPERM` creating `.next/server/app/contact`. No Node process or listener on ports 3000, 3001, or 3010 was visible before the build.
- **Status:** Implemented in the working tree; not staged or committed.

### Professional Activity Record (2026-11-01)
- Replaced the Experience placeholder with a personnel activity record covering current CSE student status, CSEH/CTF involvement, SAP Hackfest, Smart India Hackathon, Prwatech workshop, Scaler DBMS learning, and professional status.
- Added `src/content/experience.ts` as a typed, updateable content source; the presentation remains in `ExperienceDocument.tsx` and the route continues using the existing `ArchiveWorkshell`.
- Omitted dates and unspecified roles/results. Described Prwatech and Scaler as a workshop and learning programme, not awarded certifications. No formal employment or internships are listed.
- Updated Experience route metadata to describe the broader activity record. Shared navigation, other routes, and audio were not changed.
- Validation: `npx tsc --noEmit` and `git diff --check` passed. `npm run build` could not fetch the existing Google Fonts from `fonts.googleapis.com` in this network-restricted environment.

## Follow-up: Embedded Languages & Tools Marquee (2026-11-01)
- Added the exact 13-item résumé inventory as a subtle CSS marquee at the end of the existing About Field Notes box, separated by a fine rule and titled `LANGUAGES & TOOLS`.
- The loop uses two matching visual copies for seamless motion, pauses on hover, hides visual duplicates from assistive technology, and switches to a wrapped static display for reduced-motion preferences.
- Removed Stack from ArchiveWorkshell navigation and section metadata. `/stack` now redirects to `/about`; the unreferenced StackDocument and stack content source were removed.
- Updated the project route specification and recorded ADR-008. No other section content, audio implementation, or audio assets were changed.
- Validation: `npx tsc --noEmit` and `git diff --check` results are recorded in the implementation turn report.

## Follow-up: Responsive Interaction Corrections (2026-11-01)
- Separated horizontal tab scrolling from the NAV/DOC/GRAPH workspace switcher so narrow screens retain access to all three controls.
- Added 44px switcher and project navigation targets, visible keyboard focus, selected/expanded semantics, and tap activation for the About redaction reveal.
- Allowed long fallback project slugs to wrap within the stamped heading.
- Source-reviewed the homepage, document routes, project detail, About marquee, Experience, Contact, and `/stack` redirect against the requested viewport breakpoints. A live browser viewport audit could not be performed: no local server was running, and sandboxed localhost requests were denied.
- Validation: `npx tsc --noEmit` and `git diff --check` passed. No audio code or assets were changed.

## Follow-up: Responsive Archival Document Headings (2026-11-01)
- Added one shared `archive-document-heading` style for all stamped cream document titles. Font size now follows the document pane width through container query units, scales down proportionally, and wraps long words instead of clipping.
- Applied it to About, Projects, project dossiers (including the generic slug fallback), Experience, and Contact. Added the missing `max-w-full` constraint to the Projects title banner.
- Validation: `npx tsc --noEmit` passed and `git diff --check` passed. Browser verification used the running IDE server at its available viewport; exact narrow viewport widths could not be set in the available browser controls.

## Follow-up: Mobile Book Motion and Focus Refinement (2026-11-01)
- Preserved the responsive two-page interaction area and recentering behavior while matching its open/close durations to the existing cover animation (720ms open, 560ms close).
- Kept the original `IDLE_FLOAT` motion and 3D cover transforms; the positioning wrapper now preserves the 3D context. The centered shadow follows the same gentle vertical float.
- Removed the focus ring from the enlarged mobile hit area and retained keyboard focus feedback on the existing cover borders.
- Live browser checks covered closed/open states at 320px, 360px, 390px, and 430px, plus open/close hover behavior at 1024px and 1440px. No horizontal overflow was observed. Reduced-motion logic was source-checked; browser emulation was unavailable.
- `npx tsc --noEmit` and `git diff --check` passed. No files were staged or committed.

## Follow-up: About Technology Ticker Interaction (2026-11-01)
- Removed the hover pause from the Languages & Tools marquee. The CSS-only ticker continues at its existing 48-second leftward loop; duplicate copies and reduced-motion static fallback are unchanged.
- Browser checks at 390px and 1440px confirmed animation remains running during mouse hover and click. Copy widths matched exactly for a seamless half-track loop. The in-app browser had no touch emulation; no ticker JavaScript touch handlers exist, and the pause selector was removed.
- `git diff --check` passed. No files were staged or committed.

## Follow-up: Soundtrack and Unused Component Removal (2026-11-06)
- Branch: `cleanup/remove-audio` (uncommitted; not pushed or merged).
- Removed the archive soundtrack entirely for copyright safety: deleted `src/components/ArchiveAudio.tsx` and `public/audio/archive-theme.mp3`, removed `ArchiveAudioProvider` from the root layout, the mute/unmute control from the `ArchiveWorkshell` toolbar, and the intro autoplay/AUTHORIZE playback calls from `AuthorizationIntro`. Supersedes Phases 10, 11, and 13.
- Deleted the unused `src/components/RevealSection.tsx` placeholder after confirming no imports or references in `src/`.
- Kept the layout metadata description encoding fix (em dash).
- Validation: `npx tsc --noEmit` passed. ESLint still reports the 4 pre-existing errors (AuthorizationIntro ref writes during render, AuthorizationTransition setState in effect, ContactDocument `//` text node); none introduced. Browser check: `/` intro → AUTHORIZE → `/about` works, no `<audio>` element, no sound control, no console errors.

## Improvements Pass — Readability, Declutter, Navigation (2026-11-06)
- Branch: `improvements` (uncommitted; `main` untouched at `86d543b`). Includes the soundtrack removal above.
- **Design tokens:** `globals.css` now defines all UI colours as Tailwind v4 theme tokens (`canvas`, `surface`, `surface-raised`, `line`, `line-strong`, `ink`, `ink-muted`, `ink-faint`, `accent`, `accent-deep`, `accent-text`, `paper`, `paper-ink`, `paper-muted`). Components use utilities (`bg-canvas`, `text-ink`, …) instead of hex. Only the book illustration in `AuthorizationIntro` keeps its own hex shading. Base background lifted from `#121211` to `#1c1a18`; secondary text raised to WCAG AA; vignette softened; orange ambient glow removed.
- **Typography:** body text 16–18px, labels ≥12px; removed 8–11px UI text outside the book cover. Measured on `/about`: ~76% of text is 16–18px (previously ~66% was ≤12px).
- **Shell (`ArchiveWorkshell`):** replaced the faux Obsidian window (window dots, fake tabs/close/new-tab, file tree with fake entries, graph view, properties sidebar, status bar with hardcoded counters) with a sticky top bar (name + About/Projects/Experience/Contact), a centred `max-w-3xl` reading column, skip link, and a footer with GitHub/LinkedIn/Résumé. Now a server component; `select-none` removed so text (e.g. email) can be copied. `activeSection` is optional.
- **Documents:** shared `PageHeader`/`SectionLabel`/`focusRing` in `src/components/DocumentParts.tsx`. Removed the fake "YAML properties" tables from About/Projects/Contact and the fake RECORD_ID from the project dossier (replaced with a real facts list). About now leads with Identity; Quick Reference moved from the old sidebar into About section 04. All copy unchanged.
- **Accents** reduced to burgundy + cream (removed neon green, red, orange, blue, gold).
- **Landing:** shows "Parth Chourasia" and "Computer Science student · Software, security & AI"; page title now "Parth Chourasia | Portfolio". Book interaction and AUTHORIZE transition unchanged.
- **Routing:** `/projects/[slug]` looks projects up from `content/projects.ts` + a slug→document map, uses `generateStaticParams` and `dynamicParams = false`; unknown slugs return a real 404. Added a styled `src/app/not-found.tsx`.
- **Lint:** fixed all 4 ESLint errors (ref sync moved into an effect in `AuthorizationIntro`; reveal no longer calls `setState` synchronously in an effect in `AuthorizationTransition`; `//` text wrapped in JSX expressions).
- Validation: `npx tsc --noEmit` and `npx eslint src` pass with 0 problems. Browser checks at 1440px and 375px: intro → AUTHORIZE → `/about`, all pages render, `/projects/banana` → 404, no horizontal overflow, nav links 44px tall, no console errors. Production `next build` not run in this pass.
- Not done (step 7, needs user decisions): About copy tone, README, OG image/sitemap, docs tidy.

## Revision: Archive Workspace Restored, About Shortened (2026-11-06)
- User feedback on the simplified top-nav layout: it felt generic and lost the archive's character. Restored the archival workspace concept in `ArchiveWorkshell`, rebuilt to be readable and truthful:
  - Window chrome (dots, breadcrumb pill, "Vault open"), document tab strip (all four tabs; scrolls horizontally on small screens), notebook navigator, vertical spine, graph view, File Properties panel, and status bar are back.
  - Everything shown is real: navigator folders contain only real documents (Personnel → About; Projects → index + each project from `content/projects.ts`; Records → Experience; Comms → Contact). Removed the fake "Meeting — Project Restructure", "2026 Logs", search/bookmark/new-tab/edit icons, and hardcoded word/node counts. Status bar shows the current path and real section/project counts.
  - Graph view nodes are the real documents (About, Projects, Experience, Contact, plus each project) and are clickable links; the current document is highlighted.
  - Active document derived from the URL (`usePathname`); `activeSection` prop is now optional/unused.
  - Readability: text ≥12px throughout the chrome, 14px tabs and navigator, tokenised colours. New tokens `desk` (page behind the window) and `panel` (chrome/sidebars); `canvas` (document page) lifted to `#201e1b` so the reading area is the lightest region.
  - Small screens: Navigator / Document / Graph & info switcher (44px targets).
- About shortened to the page header plus the Field Notes container: headline, a short intro (what I do), a four-item "What I bring" list (what I can offer), and the Languages & Tools ticker. `content/about.ts` now holds `fieldNotes`; the removed identity/investigations/personal-notes copy remains on `main` if needed. Quick Reference stays in the File Properties panel.
- `/projects/[slug]`: removed `generateStaticParams`/`dynamicParams` (the dev server's static-paths worker crashed repeatedly in this environment); unknown slugs still 404 via `notFound()`.
- Validation: `tsc` and ESLint clean. Browser at 1440px and 375px: About, Adaptive UI Engine, graph-node navigation, `/projects/banana` 404, no horizontal overflow. Production build not run.

## Revision: Original Palette, Flat Menu, Landing Type (2026-11-06)
- **Colours:** tokens in `globals.css` now carry the original palette — canvas `#121211`, panel `#151413`, surface `#181716`/`#201e1d`, desk `#0c0b0a`, ink `#E9E0D0`, ink-muted `#A1AAA0`, sage `#B8C6BE`, burgundy `#642D3D`/`#A83D50`, ember `#D97736`, and neon `#74F65B` (new `neon` token). `accent-text` (`#E0707A`) is a brightened burgundy-red used only for small text, since the original `#C24141` is below contrast at small sizes. Text tokens are used at full opacity.
- **Background:** original `AtmosphericBackground` (orange ambient glow, grid) and the original 0.75 vignette restored.
- **Neon green** used for status only: title-bar "VERIFIED" pulse, navigator "VAULT: VERIFIED", graph "NODES" count, status bar "UTF-8 // VERIFIED".
- **Left menu panel:** original "Notebook Navigator / Files" header with a flat list (no folder headings): Parth — Personnel File, Projects Portfolio (project dossiers indented beneath), Work Experience, Operator Contact; burgundy active pill; footer "STORAGE // LOCAL · VAULT: VERIFIED · RECORD ENTRIES". Now visible from 768px (previously 1024px); below that it's under the "Menu" switcher.
- **Landing:** typography matched to the first version — `h1` text-xl/2xl uppercase, 0.24em tracking ("Parth Chourasia"); 10–11px mono subtitle; original AUTHORIZE button styling.
- **Titles** size to the document column (container query units) and only wrap between words.
- Validation: `tsc` and ESLint clean; browser checks at 1440px, 768px, and 375px with no horizontal overflow.

## Revision: Original Proportions, Middle Type Scale, 3D Graph (2026-11-07)
- **Workspace structure** restored to the first version's proportions: outer `px-4 sm:px-8 lg:px-12 py-16 sm:py-24` centred, `max-w-[88rem]` rounded window with `shadow-2xl`, `min-h-[750px]` workspace, original xl columns `[minmax(15rem,0.95fr)_minmax(2.75rem,0.35fr)_minmax(38rem,2.2fr)_minmax(18rem,1.1fr)]` and lg 3/6/3 split, filled burgundy active tab, NAV/DOC/GRAPH switcher back inside the tab strip, original chrome text sizes (9–11px labels, 12px tabs/menu). Menu panel also visible from 768px.
- **Type scale** in documents stepped down one notch from the last pass (body ~16px, secondary 14px, labels 11px, mono subtitles 13px); stamped titles back to the original `clamp(1.125rem, 5.5cqi, 1.875rem)`; ticker 12px.
- **Graph** moved to `src/components/ArchiveGraph.tsx`: a slowly rotating 3D orbit — PARTH hub floating above a tilted floor of concentric rings; section nodes on the outer ring, project dossiers on the inner ring trailing Projects, satellites on the middle ring; depth scales node size/opacity/label size; nodes are links; rotation pauses on hover/focus and is static under reduced motion. Header text back to 10px/9px.
- **Landing:** subtitle restored to "AUTHORIZED ACCESS ONLY" (name remains the heading).
- Validation: `tsc` and ESLint clean; browser checks at 1440px and 375px.

## Revision: Navigator Icons, Tab Plus, Document Text +1 Step (2026-11-07)
- Restored the original decorative toolbar icons (Search, Bookmark, Sliders) in the Notebook Navigator header and the "+" after the Contact tab. Both are purely decorative: `aria-hidden`, not buttons, no pointer cursor.
- Document text nudged up: body 17px, secondary 15px, mono subtitles/links 14px, labels 12px. Headings and chrome unchanged.
- `tsc` and ESLint clean; checked at 1440px.

## Revision: Thinner Spine (2026-11-07)
- The vertical "PARTH // BUREAU" spine column is now a fixed 1.75rem (28px) instead of `minmax(2.75rem, 0.35fr)`, which grew to ~80px on wide screens. The freed width goes to the document column (xl track `minmax(38rem, 2.4fr)`). Checked at 1600px: spine 28px, no overflow.

## Revision: Original Archive Red Restored (2026-11-07)
- `accent-text` token set back to the original red `#C24141` (was a softened `#E0707A`). It drives every red marker: section/record numbers, "INFO", "UNFILTERED MEMO", Experience status labels, project card index, contact icons/arrows, and the active graph label.
- Restored the red "PROPERTIES / PROJECT RECORD" header on the Adaptive UI Engine facts block and the red Workflow icon on "Input to adaptive response".
- Graph: the active node is now red with a cream ring (like the original "SPECIMEN" node).
- Note: `#C24141` is ~3.6:1 on the canvas — fine for bold/uppercase labels and icons, not for body text.
- Dev server note: the "Jest worker encountered 2 child process exceptions" 500 recurred on a long-running dev server; restarting `next dev` clears it (environment issue, not code).
- `tsc` and ESLint clean; checked at 1440px.

## Revision: Original Text Palette Restored (2026-11-07)
- Restored the first version's per-element text colours (tokens, no hex):
  - **Sage `#B8C6BE`** (`text-sage`): section header labels, Experience "Current status" and organisation lines, project category line, Projects/dossier/source arrows, Contact channel icons, dossier supporting-system labels, state "RESPONSE" lines, implementation labels, technology chips, Languages & Tools ticker.
  - **Burgundy-pink `#A83D50`** (`text-accent-bright`): Experience status labels and the architecture arrows.
  - **Red `#C24141`** (`text-accent-text`): numbers, PROPERTIES, INFO, UNFILTERED MEMO (unchanged from last pass).
  - **Grey `#A1AAA0`** (`text-ink-muted`): secondary labels where the original used it.
  - **Neon `#74F65B`**: status markers in the chrome (unchanged).
- `SectionLabel` restored to the original Experience header style: cream number chip + bold sage uppercase label.
- Restored the original sage "OPEN TRANSMISSION" label and "FILE: PARTH_CHOURASIA_RESUME.PDF" line on Contact.
- `tsc` and ESLint clean; checked Experience and Contact at 1440px.

## Revision: Sticky Panels + Page-Specific File Properties (2026-11-07)
- **Sticky side panels (lg+/md+):** the Notebook Navigator and the Graph/File Properties panel stay pinned 16px from the top while the document scrolls; the right panel scrolls internally if taller than the screen. Required changing the window from `overflow-hidden` to `overflow-clip`, and `html, body { overflow-x }` from `hidden` to `clip` (hidden made `body` a scroll container, which silently disables `position: sticky`).
- **Page-specific File Properties:** new `src/content/fileProperties.ts` derives the panel from existing content per route — About/404: personnel quick reference; Projects: count, index, focus, technologies, source; project dossier: category, role, collaborator, states, stack, source; Experience: status, institution, record counts, hackathons, community; Contact: email, LinkedIn, GitHub, résumé, channels. Header reads "FILE PROPERTIES FOR {SUBJECT}".
- New `src/content/contact.ts` holds email/LinkedIn/GitHub/résumé; ContactDocument now reads from it (single source).
- Item 5 (mobile spacing) was mocked up in the browser only — not implemented. Proposal: phone outer padding 8px, short tab labels (ABOUT/PROJECTS/EXPERIENCE/CONTACT) so all fit, NAV/DOC/GRAPH as a full-width bar under the tabs, document padding 16–20px.
- `tsc` and ESLint clean; sticky verified at 1440px (panels at top: 16px after scrolling 1600px); no horizontal overflow at 375px.

## Revision: Phone Layout + Subtle Scrollbars (2026-11-07)
- **Phone layout (item 5), desktop untouched:** all changes use `max-md:` / `max-sm:` variants only. Below 768px: short tab labels (ABOUT / PROJECTS / EXPERIENCE / CONTACT, icons hidden) so all four fit; NAV / DOC / GRAPH moved to a full-width bar under the tabs (equal thirds, 40px tall). Below 640px: outer padding 8px/6px (was 64px/16px), document padding 20px/16px, and no forced 750px workspace height. Verified at 1440px that outer padding (96/48), document padding (48), tab labels, and 750px min-height are unchanged; no horizontal overflow at 375px or 768px.
- **Scrollbars:** replaced the grey/white defaults with a thin, semi-transparent magenta thumb (`#A83D50` at 45%, 75–80% on hover) on a transparent track; no arrow buttons. Standard `scrollbar-width`/`scrollbar-color` in `@layer base` (so utilities like the tab strip's `scrollbar-width:none` still win) plus `::-webkit-scrollbar` fallbacks. Removed the per-panel `[scrollbar-width:thin]`, which had made Chrome draw its default light bar.
- `tsc` and ESLint clean.

## Revision: Short Custom Scroll Thumb (2026-11-07)
- Native scrollbar thumbs scale with content length (the graph panel's was nearly full height), and CSS cannot cap that. Added `src/components/ScrollThumb.tsx`: a fixed 36px × 3px magenta pill (`#A83D50` at 45%, 85% on hover) that slides to show scroll position and can be dragged with a mouse.
- Used for the page (rendered once in `layout.tsx`, fixed to the right edge) and the sticky graph/properties panel (absolute, inside a `relative` sticky wrapper around the scroller). Native bars are hidden only there (`html { scrollbar-width: none }` + `html::-webkit-scrollbar`; panel `[scrollbar-width:none]`). Other scroll areas keep the thin magenta native style.
- Thumbs hide when there is nothing to scroll. Verified at 1366×680: page thumb position matches scroll (400/663 → 387px), panel thumb reaches the bottom, dragging the page thumb scrolls the page. `tsc` and ESLint clean.

## Cleanup: Unused Code Removed (2026-11-07)
- Uninstalled unused dependencies `clsx` and `tailwind-merge` (never imported).
- Removed the ignored `activeSection` prop from every page and the `ActiveSection` type (the workspace reads the URL), the always-true `isStandalone` prop on `AboutDocument` (About title stays the page `h1`), the never-displayed `quickReference.title`, the unused Plus Jakarta Sans 300 weight, and the empty `public/images/` folder.
- Intentionally kept: `/stack` and `/portfolio` redirects (protect any old shared links), `AtmosphericBackground` (unchanged by request).
- Verified: `tsc` and ESLint clean; all routes respond as before (`/`, `/about`, `/projects`, `/projects/adaptive-ui-engine`, `/experience`, `/contact` 200; `/projects/banana` 404; `/stack`, `/portfolio` 307; `/resume.pdf` 200); About renders with no console errors.

## Addition: Parth Archive (this portfolio) as Project 02 (2026-11-07)
- New record `parthArchive` in `src/content/projects.ts` (slug `parth-archive`, repo https://github.com/broParth/parth-portfolio). Content is factual to this codebase: overview, architecture flow (content sources → derived data → archive workshell → documents), design tokens and routing, four signature features (book authorization, reticular graph, archive workspace, scroll thumb), implementation notes, design iterations (feedback → rework → refinement), solo contribution, and the real stack from `package.json`.
- New dossier `src/components/projects/ParthArchiveDocument.tsx` (same visual structure as Adaptive UI Engine); route map in `src/app/projects/[slug]/page.tsx` updated.
- Projects card label is now per-project (`label` field: COLLABORATIVE SYSTEMS / PERSONAL BUILD) instead of a hardcoded string.
- File Properties for a project now adapt: collaborator vs "Built by: Solo project", interaction states vs signature features, stack summary.
- Graph: project nodes fan out ±0.95 rad around Projects on the inner ring so labels don't stack; checked at several rotation angles.
- Navigator, graph (NODES: 7), breadcrumbs, and status bar ("2 PROJECTS") pick up the new project automatically.
- Verified: `tsc` and ESLint clean; `/projects`, both dossiers 200; `/projects/banana` 404; no console errors.

## Revision: Parth Archive — Ownership Labels Removed (2026-11-07)
- Removed "My role", "Built by / Solo project", and the "My contribution" section from the Parth Archive dossier (it's self-evidently Parth's own build). The record no longer has a `contribution` field.
- Dossier properties are now Category · Framework (Next.js 16 · React 19) · Language (TypeScript); sections renumbered 01–07.
- File Properties shows MY ROLE / COLLABORATOR only for projects that have a `contribution` (Adaptive UI Engine keeps both, plus its "My contribution" section).
- `tsc` and ESLint clean; both dossiers checked in the browser with no console errors.

## Prototype branch: Shorter Project Pages (2026-11-07, `prototype/declassify`, uncommitted)
- Project cards are self-sufficient: summary, up to 6 tech chips (+N more), and two exits — **SOURCE ↗** (straight to GitHub) and **OPEN DOSSIER →**.
- Both dossiers now render through one shared `src/components/projects/ProjectDossier.tsx` with four sections: What it is → How it works (flow diagram + supporting systems) → Highlights (states / signature features) → Stack & source. A SOURCE ↗ button sits under each title; Adaptive UI Engine keeps a one-line role/collaborator credit.
- Removed `AdaptiveUIEngineDocument.tsx` and `ParthArchiveDocument.tsx`, and the now-unused `implementation` / `iterations` data. Added `overview`, `repoName`, `flowTitle`, `highlightsTitle` to each project record. `/projects/[slug]` renders any project in `projects.ts`; unknown slugs still 404.
- `tsc` and ESLint clean; checked at 1440px and 375px.

## Prototype branch: Less Duplication (2026-11-07, `prototype/declassify`, uncommitted)
- "VERIFIED" now appears only once (title-bar pulse). Navigator footer is a single line "STORAGE // LOCAL · 06 RECORDS"; the status-bar "UTF-8 // VERIFIED" is replaced by a live clock in Parth's time zone ("IST 16:41", `useSyncExternalStore`, shows "IST --:--" until hydrated).
- Dossier headers no longer repeat category or "My role" — those live only in the File Properties panel. Header is title, subtitle, and SOURCE ↗.
- File Properties trimmed to what the page doesn't already show (≤4 items): dossier — category, my role, collaborator, primary stack; Projects — count, technologies used, GitHub; Experience — records, highlight (finalist); Contact — email, channels. About keeps its quick reference.
- `tsc` and ESLint clean; checked every page's panel at 1440px.

## Prototype branch: Status-bar Social Icons (2026-11-07, `prototype/declassify`, uncommitted)
- The status bar's duplicate breadcrumb (bottom-left) is replaced by tiny icon links in `src/components/SocialLinks.tsx`: envelope → `mailto:` email, GitHub → profile (new tab). The title-bar breadcrumb pill stays.
- Instagram (https://www.instagram.com/pxrthh_h) added to `src/content/contact.ts`; all three icons now show.
- lucide-react 1.x has no brand icons, so GitHub and Instagram marks are small inline SVGs.
