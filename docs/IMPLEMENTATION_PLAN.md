# Implementation Plan: Premium Portfolio Website for Esrat Jahan Esha

## Last Updated
2026-07-03

---

## Background

Building a premium personal portfolio website that positions Esrat Jahan Esha as an AI-Integrated Full-Stack Web Developer. The site should feel like a premium digital product (think Linear × Vercel × Apple × Stripe × Slee Automation). Built with React + TypeScript + Vite + Tailwind CSS v3 + Framer Motion.

All project documents, design references (Slee Automation site, MotionSites prompt + 8 screenshots + video), all assets (2 logos, 2 project mockup images), and the BorderRotate component reference have been analyzed.

---

## Resolved Questions (from User)

| Question | Answer |
|----------|--------|
| Profile Photo | **Not needed.** About section follows MotionSites style (centered heading + scroll-reveal text) without big decorative icons |
| Social Links | GitHub: `https://github.com/esratjahanesha808-arch` · Instagram: `https://www.instagram.com/_esha7_7?igsh=MTE5YXN4bnN5cHIxMg==` · Facebook: `https://www.facebook.com/share/1BVRnN6HDU/` · LinkedIn: `https://www.linkedin.com/in/esrat-jahan-esha-169a31416` |
| Contact Email | `esratjahanesha808@gmail.com` |
| Project Count | 2 projects (Oasis Pools + Luxora) |
| Project Layout | Use MotionSites scrolling/card system but NOT the 3-picture collage. Use mockup images with project metadata on the LEFT empty space |
| Project Details Page | **Yes** — dedicated page for each project with device collage, content, and links. **This requires React Router.** |
| Skills Addition | Add frontend design skills from CLAUDE.md to the skills visualization |

---

## Architecture Change: Routing Required

> [!IMPORTANT]
> The user wants **project detail pages**. This changes the architecture from a single-page scroll to a **multi-page app with React Router**.
> - **Home page**: Single scroll with all 9 sections
> - **Project detail pages**: `/project/:slug` with full project content, device collages, and links

---

## Project Data

### Project 1: Oasis Pools
- **Title**: Luxury Pool Contractor Landing Page
- **Category**: Frontend Development
- **GitHub**: `https://github.com/esratjahanesha808-arch/pool-builder.git`
- **Live URL**: `https://oasis-pools-builder.netlify.app`
- **Mockup Image**: `assets/PROJECT_IMAGES/Gemini_Generated_Image_7iiuju7iiuju7iiu.png`
- **Tech Stack**: HTML5, Vanilla JavaScript, Tailwind CSS v4, Node.js, Netlify
- **Description**: Conducted competitive UX/UI analysis across top-ranking luxury pool builder websites in the UK and Austin markets; engineered the layout to solve common friction points and low conversion patterns found in lower-ranked competitor sites.
- **Detail Content**:
  1. Conducted competitive UX/UI analysis across top-ranking luxury pool builder websites in the UK and Austin markets; engineered the layout to solve common friction points and low conversion patterns found in lower-ranked competitor sites.
  2. Engineered a high-performance, responsive portfolio landing page utilizing HTML5, Vanilla JavaScript, and Tailwind CSS v4 to ensure lightning-fast load times and clean semantic architecture.
  3. Implemented a premium, responsive Glassmorphism UI leveraging custom CSS layers, PostCSS, and advanced backdrop filters to elevate the visual aesthetic to meet luxury market standards.
  4. Architected the frontend for seamless backend integration, decoupling the client-side form handling and static pages so full-stack functionality (databases, multi-page routing) can be rapidly deployed based on future client requirements.
  5. Built a zero-dependency Node.js static file server (server.js) to streamline the local development environment and eliminate dependency bloat.
  6. Configured and deployed the application on Netlify, optimizing Core Web Vitals by implementing custom security headers and asset caching policies via netlify.toml.

### Project 2: Luxora
- **Title**: Luxora — Luxury Perfume Marketplace & Admin Ecosystem
- **Category**: Full-Stack Development
- **GitHub**: `https://github.com/esratjahanesha808-arch/perfume-e-commerce-store.git`
- **Live URL**: `https://luxora-esha707.vercel.app`
- **Mockup Image**: `assets/PROJECT_IMAGES/Gemini_Generated_Image_kyjn3zkyjn3zkyjn.png`
- **Tech Stack**: Next.js 16, React 19, TypeScript 5, PostgreSQL, Prisma ORM, Auth.js, Stripe, Tailwind CSS v4, Zustand, Recharts
- **Description**: Engineered a full-stack e-commerce monolith using Next.js 16 (App Router), React 19, and TypeScript 5, isolating core business logic into a dedicated, decoupled service layer.
- **Detail Content**:
  1. Engineered a full-stack e-commerce monolith using Next.js 16 (App Router), React 19, and TypeScript 5, isolating core business logic into a dedicated, decoupled service layer.
  2. Designed a relational database schema using PostgreSQL (Neon Serverless) and Prisma ORM to manage data pipelines for multi-role users, inventory tracking, and sales analytics.
  3. Implemented secure authentication and protection layers using Auth.js (NextAuth v5) for Customer/Admin roles and Upstash Redis for API rate limiting and security enforcement.
  4. Integrated production-ready financial and notification pipelines via Stripe Embedded Checkout (with webhooks for real-time inventory updates) and transactional emails through Resend.
  5. Developed a highly interactive UI/UX utilizing Tailwind CSS v4 and Zustand for seamless, state-driven cart mechanics alongside live data visualization dashboards built with Recharts.
  6. Architected the core system for high scalability and expansion, strategically designing endpoints to seamlessly integrate upcoming multi-page routes and a Python-based FastAPI microservice for AI-driven recommendations and intelligent features.

---

## Project Card Layout (Home Page)

The project cards use MotionSites-style sticky scrolling but with a **custom 2-column layout**:

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  LEFT SIDE (40%)          RIGHT SIDE (60%)          │
│  ┌─────────────────┐     ┌────────────────────────┐ │
│  │ Category         │     │                        │ │
│  │ Project Title    │     │    MOCKUP IMAGE         │ │
│  │                  │     │    (4-device collage)   │ │
│  │ Tech stack tags  │     │                        │ │
│  │                  │     │                        │ │
│  │ [GitHub] [Live]  │     │                        │ │
│  │ [View Details →] │     │                        │ │
│  └─────────────────┘     └────────────────────────┘ │
│                                                     │
└─────────────────────────────────────────────────────┘
```

- Wrapped in BorderRotate component
- Sticky-stacking on scroll (MotionSites pattern)
- Metadata (title, tech stack, links) occupies the left empty space of the mockup
- Mockup image (4-device collage) on the right
- "View Details" button links to project detail page

---

## Project Detail Page (`/project/:slug`)

Layout:
- Back button to home
- Project title and category heading
- 4-device mockup image
- Detailed content (bullet points from project data)
- Tech stack tags
- Links: Live URL, GitHub repository
- Navigation to next/previous project

---

## About Section Design

Follows MotionSites About section style:
- Large centered heading: "The Developer Behind the Build" (gradient text)
- Scroll-driven animated text (character-by-character opacity reveal)
- Contact button below text
- **No profile photo, no big decorative icons**
- Clean, text-focused, premium layout

---

## Updated Skills (Including CLAUDE.md Skills)

### Core Skills (Center Ring)
JavaScript, TypeScript, Java, Python, HTML, CSS

### Frameworks (Ring 2)
React, Next.js, Node.js, Express, Tailwind CSS, Framer Motion

### Databases (Ring 3)
PostgreSQL, MongoDB, Prisma ORM, Redis

### AI (Ring 4)
OpenAI API, LangChain, AI Integration, LLMs

### SEO (Ring 5)
Technical SEO, Core Web Vitals, Performance Optimization

### Lead Generation (Ring 6)
Conversion Optimization, UX Analysis, Competitive Research

### Frontend Design Skills (from CLAUDE.md — distributed across rings)
- Glassmorphism UI, Custom CSS Layers, PostCSS (→ Frameworks ring)
- Typography pairing, Color theory, Spacing systems (→ Core ring)
- Responsive design, Mobile-first approach (→ Core ring)
- Layered shadows, Gradient systems, Animation (transform + opacity only) (→ Frameworks ring)

---

## Proposed Changes

### Milestone 1: Project Setup & Design System

#### [NEW] Vite + React + TypeScript Project
- Initialize project, install deps: `react-router-dom`, `framer-motion`, `tailwindcss` v3, `postcss`, `autoprefixer`
- Configure TypeScript strict mode

#### [NEW] tailwind.config.ts
- Dark premium palette, fluid typography, custom animation keyframes

#### [NEW] src/index.css
- Tailwind directives, Google Fonts (Inter), CSS custom properties, @property for gradient-angle

#### [NEW] UI Primitives (src/components/ui/)
- Button, FadeIn, GradientText, SectionHeading

#### [NEW] Layout (src/components/layout/)
- Section wrapper

#### [NEW] Hooks (src/hooks/)
- useReducedMotion, useScrollProgress

#### [NEW] Animation Variants (src/lib/animations.ts)

---

### Milestone 2: Navigation & Hero

#### [NEW] Navbar (desktop + mobile hamburger, blur-on-scroll)
#### [NEW] Hero section (heading, subheading, 2 CTAs, entrance animations)
#### [NEW] MagneticButton component
#### [NEW] Router setup (React Router — home + project detail routes)

---

### Milestone 3: About & Process

#### [NEW] AnimatedText (scroll-driven character reveal)
#### [NEW] About section (MotionSites style — gradient heading, animated text, no photo, no icons)
#### [NEW] Process section (5-step storytelling timeline)

---

### Milestone 4: Projects Section (Most Important)

#### [NEW] BorderRotate (adapted from reference component)
#### [NEW] Sticky-stacking card system
#### [NEW] Project cards — custom layout: metadata LEFT, mockup image RIGHT
#### [NEW] src/data/projects.ts — typed project data with both projects
#### [NEW] Project detail page (/project/:slug)
  - Full content, device collage, tech stack, links
  - Back navigation, next/previous project

---

### Milestone 5: Skills & Services

#### [NEW] Orbital skills visualization (6 rings + frontend design skills)
#### [NEW] Services section (MotionSites numbered list style — 4 services)

---

### Milestone 6: Work With Me, Contact & Footer

#### [NEW] Work With Me (2 premium cards)
#### [NEW] Contact section with form (email: esratjahanesha808@gmail.com)
#### [NEW] Footer with social links (GitHub, Instagram, Facebook, LinkedIn)

---

### Milestone 7: Polish & Optimization

- Lighthouse audit (target 95+)
- Accessibility, responsiveness, performance
- Image optimization (7MB PNGs → WebP)
- SEO metadata

---

## Verification Plan

### Automated
- `npm run build` — production build succeeds
- Lighthouse CLI — target 95+ all categories

### Manual
- Visual inspection at all breakpoints
- Keyboard-only navigation test
- Animation smoothness (60fps)
- Reduced motion preference testing
- Cross-browser verification
- Project detail page navigation testing
