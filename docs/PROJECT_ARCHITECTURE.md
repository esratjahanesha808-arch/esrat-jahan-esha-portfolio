# PROJECT_ARCHITECTURE.md

## Last Updated
2026-07-03

---

## Overview

A multi-page portfolio application built with React, TypeScript, Vite, Tailwind CSS v3, Framer Motion, and React Router. The architecture prioritizes performance, maintainability, accessibility, and scalability.

**Routes**:
- `/` — Home (single-page scroll with all 9 sections)
- `/project/:slug` — Project detail page

---

## Folder Structure

```
my portfolio/
├── docs/                          # Project documentation (source of truth)
├── assets/                        # Raw brand assets (logo, images)
├── references/                    # Design reference files
├── src/
│   ├── main.tsx                   # Application entry point
│   ├── App.tsx                    # Router + route definitions
│   ├── index.css                  # Global styles + Tailwind directives
│   ├── assets/                    # Optimized assets imported by components
│   │   ├── images/
│   │   │   ├── projects/          # Optimized project mockup images
│   │   │   └── logo/              # Optimized logo assets
│   │   └── icons/
│   ├── components/
│   │   ├── layout/                # Structural components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Section.tsx        # Reusable section wrapper
│   │   ├── ui/                    # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── BorderRotate.tsx   # Rotating gradient border card
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── AnimatedText.tsx   # Scroll-driven text reveal
│   │   │   ├── FadeIn.tsx         # Intersection-based fade animation
│   │   │   ├── GradientText.tsx
│   │   │   └── SectionHeading.tsx
│   │   └── sections/              # Page section components
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── Process.tsx
│   │       ├── WorkWithMe.tsx
│   │       ├── Skills.tsx         # Orbital skills visualization
│   │       ├── Services.tsx
│   │       └── Contact.tsx
│   ├── pages/                     # Page-level components
│   │   ├── Home.tsx               # Composes all sections
│   │   └── ProjectDetail.tsx      # Individual project detail page
│   ├── data/                      # Static content data
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── skills.ts
│   │   ├── process.ts
│   │   └── social.ts              # Social links data
│   ├── hooks/                     # Custom React hooks
│   │   ├── useScrollProgress.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useInView.ts
│   │   └── useMagneticEffect.ts
│   ├── lib/                       # Utilities
│   │   ├── animations.ts          # Shared Framer Motion variants
│   │   └── constants.ts           # Design tokens, breakpoints
│   └── types/                     # TypeScript type definitions
│       └── index.ts
├── public/
│   ├── favicon.ico
│   └── og-image.png
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Architecture Layers

### 1. Routing Layer (`src/App.tsx`, `src/pages/`)
React Router handles two routes: Home (scroll page) and ProjectDetail (individual project pages). The Home page composes all section components.

### 2. Data Layer (`src/data/`)
Static content extracted from CONTENT.md and user-provided project data. Separating data from components allows easy content updates without touching component logic.

### 3. UI Primitives (`src/components/ui/`)
Reusable, composable building blocks that form the design system. These are context-agnostic and accept props for customization.

### 4. Section Components (`src/components/sections/`)
Page-level sections that compose UI primitives with section-specific data and layout logic.

### 5. Layout Components (`src/components/layout/`)
Structural components like Navbar, Footer, and the Section wrapper that provides consistent spacing and animation triggers.

### 6. Hooks (`src/hooks/`)
Custom hooks encapsulating scroll tracking, intersection observation, reduced motion detection, and magnetic cursor effects.

### 7. Animation System (`src/lib/animations.ts`)
Centralized Framer Motion variants and transitions. All animations reference this file to ensure consistency.

---

## Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| Multi-page app with React Router | User requires project detail pages (`/project/:slug`) |
| Tailwind CSS v3 for styling | Matches spec; widely supported; utility-first |
| Framer Motion for animations | Required by spec; declarative with scroll support |
| Data separated from components | Content updates without touching components |
| Custom hooks for scroll effects | Encapsulates complex logic; promotes reuse |
| Mobile-first design | Required by spec; Tailwind defaults |
| No profile photo in About | User decision — MotionSites centered text style |

---

## Performance Strategy

- **Code splitting**: Lazy load ProjectDetail page and below-fold sections
- **Image optimization**: WebP format, responsive srcset, lazy loading
- **Animation performance**: `will-change`, `transform`/`opacity` only, passive scroll listeners
- **Reduced motion**: Respect `prefers-reduced-motion`
- **Bundle optimization**: Tree-shaking, minimal dependencies
- **Font loading**: `font-display: swap` with preconnect to Google Fonts

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Default | 0px+ | Mobile |
| sm | 640px+ | Large mobile / small tablet |
| md | 768px+ | Tablet |
| lg | 1024px+ | Laptop |
| xl | 1280px+ | Desktop |
| 2xl | 1536px+ | Ultrawide |

---

## Accessibility Strategy

- Semantic HTML5 elements for all sections
- ARIA labels on interactive elements
- Keyboard navigation support throughout
- Focus-visible styles on all focusable elements
- Color contrast meeting WCAG AA standards
- `prefers-reduced-motion` respected globally
- Skip-to-content link
