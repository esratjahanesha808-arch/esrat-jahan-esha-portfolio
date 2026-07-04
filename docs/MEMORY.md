# MEMORY.md

## Last Updated
2026-07-03

## Project Status
**Phase: Planning (approved with updates)**

No implementation has started yet. User provided answers to open questions on 2026-07-03.

---

## Project Summary

Building a premium personal portfolio website for **Esrat Jahan Esha**, an AI-Integrated Full-Stack Web Developer. The website should feel like a premium digital product (inspired by Linear, Vercel, Apple, Stripe, and Slee Automation) rather than a traditional portfolio.

---

## Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Routing**: React Router DOM (needed for project detail pages)
- **Architecture**: Component-based, modular, mobile-first

---

## Key Design References

| Reference | Purpose |
|-----------|---------|
| Slee Automation | Overall website design, color palette, premium aesthetic, contact section, footer |
| MotionSites Reference | Projects section scrolling/cards, services section, about section style |
| BorderRotate Component | Foundation for project cards with rotating conic-gradient border |
| CLAUDE.md | Frontend design skills and guardrails |

---

## Contact & Social Links

| Platform | URL |
|----------|-----|
| Email | esratjahanesha808@gmail.com |
| GitHub | https://github.com/esratjahanesha808-arch |
| Instagram | https://www.instagram.com/_esha7_7?igsh=MTE5YXN4bnN5cHIxMg== |
| Facebook | https://www.facebook.com/share/1BVRnN6HDU/ |
| LinkedIn | https://www.linkedin.com/in/esrat-jahan-esha-169a31416 |

---

## Projects

### Project 1: Oasis Pools
- **Category**: Frontend Development
- **Title**: Luxury Pool Contractor Landing Page
- **GitHub**: https://github.com/esratjahanesha808-arch/pool-builder.git
- **Live URL**: https://oasis-pools-builder.netlify.app
- **Mockup**: `assets/PROJECT_IMAGES/Gemini_Generated_Image_7iiuju7iiuju7iiu.png`
- **Tech**: HTML5, JavaScript, Tailwind CSS v4, Node.js, Netlify

### Project 2: Luxora
- **Category**: Full-Stack Development
- **Title**: Luxora — Luxury Perfume Marketplace & Admin Ecosystem
- **GitHub**: https://github.com/esratjahanesha808-arch/perfume-e-commerce-store.git
- **Live URL**: https://luxora-esha707.vercel.app
- **Mockup**: `assets/PROJECT_IMAGES/Gemini_Generated_Image_kyjn3zkyjn3zkyjn.png`
- **Tech**: Next.js 16, React 19, TypeScript 5, PostgreSQL, Prisma ORM, Auth.js, Stripe, Tailwind CSS v4, Zustand, Recharts

---

## Available Assets

| Asset | Location | Notes |
|-------|----------|-------|
| Logo (E monogram) | `assets/logo/ChatGPT Image Jun 16, 2026, 01_50_00 AM.png` | Elegant script "E" on dark background |
| Logo (Full name) | `assets/logo/ChatGPT Image Jun 16, 2026, 01_55_34 AM.png` | "Esrat Jahan Esha" in script font |
| Project Image 1 | `assets/PROJECT_IMAGES/Gemini_Generated_Image_7iiuju7iiuju7iiu.png` | Pool company — 4-device mockup with empty left space |
| Project Image 2 | `assets/PROJECT_IMAGES/Gemini_Generated_Image_kyjn3zkyjn3zkyjn.png` | Luxora — 4-device mockup with empty left space |

---

## Website Sections (Ordered)

1. Hero
2. About (MotionSites style — no photo, no big icons, gradient heading + animated text)
3. Projects (Most Important — sticky-stacking cards, mockup RIGHT, metadata LEFT)
4. Process
5. Work With Me
6. Skills (Orbital Visualization — includes CLAUDE.md frontend design skills)
7. Services
8. Contact
9. Footer

## Additional Pages
- Project Detail Page (`/project/:slug`) — full content, device collage, links

---

## Key Design Decisions (from User)

1. **No profile photo** in About section — follow MotionSites centered text style
2. **No big decorative icons** in About section — keep it clean
3. **Project cards**: NOT the MotionSites 3-picture collage. Use the provided mockup images with metadata on the LEFT empty space
4. **Project detail pages** exist — requires React Router
5. **Frontend design skills** from CLAUDE.md added to skills visualization

---

## Current Milestone
**Milestone 3: About & Process Sections**

- [x] Milestone 0: Planning & Documentation (Completed 2026-07-03)
- [x] Milestone 1: Project Setup & Design System (Completed 2026-07-03)
- [x] Milestone 2: Navigation & Hero (Completed 2026-07-03)
- [ ] Milestone 3: About & Process Sections (Active)

---

## Important Rules

- Never clone reference websites
- Performance > visual effects
- Mobile-first responsive design
- Accessibility is required, not optional
- Do not use dashes in content
- Do not replace provided content with placeholders
- Never use default Tailwind palette colors (no indigo-500, blue-600)
- Only animate `transform` and `opacity` — never `transition-all`
- Every clickable element needs hover, focus-visible, and active states
- Follow AGENTS.md workflow strictly
- Update documentation after every meaningful change
