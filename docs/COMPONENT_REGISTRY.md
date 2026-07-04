# COMPONENT_REGISTRY.md

## Last Updated
2026-07-03

---

## Overview

Registry of all reusable components in the design system. Before creating a new component, check this registry to avoid duplication.

---

## UI Primitives

### BorderRotate
- **File**: `src/components/ui/BorderRotate.tsx`
- **Status**: Planned (based on reference `PROJECT_COMPONENT.tsx`)
- **Purpose**: Card wrapper with animated conic-gradient rotating border
- **Props**: `animationMode`, `animationSpeed`, `gradientColors`, `backgroundColor`, `borderWidth`, `borderRadius`
- **Used In**: Projects section (project cards)
- **Notes**: Adapted from provided reference component. Must preserve rotating border concept while improving accessibility and performance.

### Button
- **File**: `src/components/ui/Button.tsx`
- **Status**: Planned
- **Purpose**: Reusable button with multiple variants (primary, secondary, ghost, outline)
- **Props**: `variant`, `size`, `href`, `children`, `onClick`
- **Variants**: 
  - `primary`: Gradient fill (premium CTA)
  - `secondary`: Outlined/ghost
  - `ghost`: Text-only with hover effect
- **Used In**: Hero, About, Work With Me, Contact, Footer

### MagneticButton
- **File**: `src/components/ui/MagneticButton.tsx`
- **Status**: Planned
- **Purpose**: Button that subtly follows cursor position when hovered
- **Props**: `strength`, `padding`, `children`
- **Used In**: CTA buttons throughout the site
- **Notes**: Must respect `prefers-reduced-motion`

### FadeIn
- **File**: `src/components/ui/FadeIn.tsx`
- **Status**: Planned
- **Purpose**: Intersection-observer based fade-in animation wrapper
- **Props**: `delay`, `duration`, `direction` (up/down/left/right), `children`
- **Used In**: All sections for entrance animations
- **Notes**: Uses `whileInView` with `viewport={{ once: true }}`

### AnimatedText
- **File**: `src/components/ui/AnimatedText.tsx`
- **Status**: Planned
- **Purpose**: Character-by-character scroll-driven opacity reveal
- **Props**: `text`, `className`
- **Used In**: About section
- **Notes**: Each character animates from opacity 0.2 to 1.0 based on scroll progress

### GradientText
- **File**: `src/components/ui/GradientText.tsx`
- **Status**: Planned
- **Purpose**: Text with gradient fill effect
- **Props**: `children`, `className`, `gradient`
- **Used In**: Section headings

### SectionHeading
- **File**: `src/components/ui/SectionHeading.tsx`
- **Status**: Planned
- **Purpose**: Consistent section heading with gradient text, optional subheading
- **Props**: `heading`, `subheading`, `alignment`, `className`
- **Used In**: All major sections

---

## Layout Components

### Navbar
- **File**: `src/components/layout/Navbar.tsx`
- **Status**: Planned
- **Purpose**: Fixed/sticky navigation with smooth scroll links
- **Features**: Transparent on top, blur backdrop on scroll, mobile hamburger menu
- **Navigation Items**: About, Projects, Services, Contact
- **Logo**: "E" monogram from assets

### Section
- **File**: `src/components/layout/Section.tsx`
- **Status**: Planned
- **Purpose**: Consistent section wrapper with spacing, id for navigation, and optional background
- **Props**: `id`, `className`, `background`, `children`, `padding`

### Footer
- **File**: `src/components/layout/Footer.tsx`
- **Status**: Planned
- **Purpose**: Minimal premium footer with logo, nav links, social links, copyright

---

## Section Components

### Hero
- **File**: `src/components/sections/Hero.tsx`
- **Status**: Planned
- **Key Elements**: Full-viewport, main heading, subheading, 2 CTA buttons
- **Animations**: Staggered fade-in, subtle parallax

### About
- **File**: `src/components/sections/About.tsx`
- **Status**: Planned
- **Key Elements**: Centered gradient heading, scroll-driven animated text, CTA button
- **Layout**: MotionSites style — no profile photo, no decorative icons, text-focused
- **Animations**: Scroll-driven text reveal (AnimatedText)

### Projects
- **File**: `src/components/sections/Projects.tsx`
- **Status**: Planned
- **Key Elements**: Sticky-stacking project cards with BorderRotate
- **Layout**: 2-column — LEFT (40%): title, category, tech stack, GitHub/live links, View Details button. RIGHT (60%): 4-device mockup image
- **Animations**: Card stacking on scroll (scale + sticky), smooth transitions
- **Notes**: Most important section. Uses MotionSites sticky-card pattern but NOT the 3-picture collage. Uses user's mockup images with metadata on the left empty space.

### Process
- **File**: `src/components/sections/Process.tsx`
- **Status**: Planned
- **Key Elements**: 5-step timeline (Research, Planning, Development, Optimization, Deployment)
- **Animations**: Staggered reveal, connecting timeline visualization

### WorkWithMe
- **File**: `src/components/sections/WorkWithMe.tsx`
- **Status**: Planned
- **Key Elements**: Two premium cards (Hire Me, Build Your Project)
- **Animations**: Hover effects, subtle entrance animations

### Skills
- **File**: `src/components/sections/Skills.tsx`
- **Status**: Planned
- **Key Elements**: Animated orbital ring visualization
- **Rings**: Core (JS, TS, Java, Python, HTML, CSS) → Frameworks (React, Next.js, Node.js, Express, Tailwind, Framer Motion) → Databases (PostgreSQL, MongoDB, Prisma, Redis) → AI (OpenAI, LangChain, LLMs) → SEO (Technical SEO, Core Web Vitals) → Lead Generation (Conversion, UX Analysis)
- **Frontend Design Skills**: Glassmorphism, Typography pairing, Responsive design, Layered shadows, Gradient systems (distributed across rings)
- **Animations**: Slow orbital rotation, hover to highlight, responsive fallback

### Services
- **File**: `src/components/sections/Services.tsx`
- **Status**: Planned
- **Key Elements**: Numbered service items (01–04) with MotionSites-inspired layout
- **Layout**: Large number on left, title + description on right, separated by thin borders
- **Animations**: Staggered fade-in

### Contact
- **File**: `src/components/sections/Contact.tsx`
- **Status**: Planned
- **Key Elements**: Contact form, email, social links, CTA
- **Animations**: Subtle entrance

---

## Custom Hooks

| Hook | File | Purpose |
|------|------|---------|
| useScrollProgress | `src/hooks/useScrollProgress.ts` | Track scroll position relative to an element |
| useReducedMotion | `src/hooks/useReducedMotion.ts` | Detect `prefers-reduced-motion` preference |
| useInView | `src/hooks/useInView.ts` | Intersection observer wrapper |
| useMagneticEffect | `src/hooks/useMagneticEffect.ts` | Magnetic cursor-following effect for buttons |

---

## Page Components

### Home
- **File**: `src/pages/Home.tsx`
- **Status**: Planned
- **Purpose**: Composes all 9 sections into the main scrolling page
- **Route**: `/`

### ProjectDetail
- **File**: `src/pages/ProjectDetail.tsx`
- **Status**: Planned
- **Purpose**: Dedicated project page with full content, device collage, tech stack, links
- **Route**: `/project/:slug`
- **Key Elements**: Back button, project title/category, 4-device mockup, detailed bullet-point content, tech stack tags, live URL button, GitHub button, next/previous project navigation
