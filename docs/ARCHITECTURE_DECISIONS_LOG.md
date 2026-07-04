# ARCHITECTURE_DECISIONS_LOG.md

## Last Updated
2026-07-03

---

## Overview

Log of all architectural decisions. Never delete entries. Always append new decisions.

---

## ADR-001: Single Page Application Without Routing
**Date**: 2026-07-02
**Status**: ~~Proposed~~ → **Superseded by ADR-008**

**Context**: The portfolio is a linear scrolling experience with 9 sections. We need to decide whether to use React Router or keep it as a single-page scroll.

**Decision**: No client-side routing. The application is a single scrolling page with smooth-scroll navigation to section anchors.

**Consequences**:
- Simpler architecture, fewer dependencies
- Better performance (no route-level code splitting needed for initial content)
- Natural scroll flow between sections
- Navigation uses `scrollIntoView()` with smooth behavior
- SEO is handled via meta tags on the single page

---

## ADR-002: Vite as Build Tool
**Date**: 2026-07-02
**Status**: Proposed

**Context**: Need a modern build tool for React + TypeScript + Tailwind CSS.

**Decision**: Use Vite as the build tool and dev server.

**Consequences**:
- Fast HMR during development
- Optimized production builds with Rollup
- Native TypeScript support
- Native Tailwind CSS support via PostCSS
- Minimal configuration needed

---

## ADR-003: Framer Motion for All Animations
**Date**: 2026-07-02
**Status**: Proposed

**Context**: The project requires scroll-driven animations, entrance animations, hover effects, and complex interactions (orbital skills, sticky card stacking).

**Decision**: Use Framer Motion exclusively for all animations. No additional animation libraries.

**Consequences**:
- Single animation API across the project
- Declarative animations with React props
- Built-in scroll-driven animations (`useScroll`, `useTransform`)
- Built-in viewport detection (`whileInView`)
- Gesture support (`whileHover`, `whileTap`)
- `AnimatePresence` for unmount animations if needed

---

## ADR-004: Content Data Separation
**Date**: 2026-07-02
**Status**: Proposed

**Context**: All website content is provided in CONTENT.md. Components need access to this content.

**Decision**: Extract all content into typed data files in `src/data/`. Components import data rather than hardcoding content.

**Consequences**:
- Content changes don't require component modifications
- TypeScript types enforce content structure
- Easier to maintain and update
- Could be migrated to a CMS in the future
- Single source of truth for content within the codebase

---

## ADR-005: Tailwind CSS with Custom Design Tokens
**Date**: 2026-07-02
**Status**: Proposed

**Context**: MASTER_PROMPT specifies Tailwind CSS. Need to establish a consistent design system.

**Decision**: Extend Tailwind's default theme with custom design tokens (colors, typography, spacing, animations) in `tailwind.config.ts`.

**Consequences**:
- Consistent design language enforced by utility classes
- Custom tokens match the premium aesthetic
- Easy to adjust global design by modifying config
- No arbitrary values scattered across components
- Theme-aware responsive design

---

## ADR-006: Lazy Loading for Below-Fold Sections
**Date**: 2026-07-02
**Status**: Proposed

**Context**: Performance target is Lighthouse 95+. The page has 9 sections with images and animations.

**Decision**: Use `React.lazy()` with `Suspense` for sections below the fold (everything after Hero). Use native lazy loading for images.

**Consequences**:
- Faster initial page load
- Smaller initial bundle
- Content loads as user scrolls
- Need graceful loading states (skeleton screens or fade-in)
- Images use `loading="lazy"` and `decoding="async"`

---

## ADR-007: CSS Custom Properties for Animation Control
**Date**: 2026-07-02
**Status**: Proposed

**Context**: Need to support reduced motion preferences and potentially toggle animations.

**Decision**: Use CSS custom properties for animation durations and a global `useReducedMotion` hook that Framer Motion animations respect.

**Consequences**:
- Single point to disable all animations
- Respects `prefers-reduced-motion` automatically
- Framer Motion animations receive `duration: 0` when reduced motion is active
- Better accessibility compliance

---

## ADR-008: React Router for Project Detail Pages
**Date**: 2026-07-03
**Status**: Accepted

**Context**: User requires dedicated project detail pages with full project content, device collages, and links. This cannot be achieved with a single-page scroll.

**Decision**: Add `react-router-dom`. Two routes: `/` (Home with all sections) and `/project/:slug` (project detail). Supersedes ADR-001.

**Consequences**:
- New dependency: `react-router-dom`
- Need `pages/` directory for page-level components (Home.tsx, ProjectDetail.tsx)
- Code splitting via `React.lazy()` for ProjectDetail page
- Scroll position management when navigating between routes
- `AnimatePresence` for page transition animations

---

## ADR-009: About Section — MotionSites Style Without Photo or Icons
**Date**: 2026-07-03
**Status**: Accepted

**Context**: User confirmed no profile photo. Wants MotionSites About section style but without the large decorative 3D icons.

**Decision**: About section uses centered gradient heading, scroll-driven animated text (character-by-character opacity reveal), and a CTA button. No profile photo, no decorative icons.

**Consequences**:
- Simpler, text-focused section
- Strong emphasis on typography and motion design
- Content from CONTENT.md drives the section
- AnimatedText component becomes a key visual element
