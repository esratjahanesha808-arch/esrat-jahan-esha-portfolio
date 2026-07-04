# DESIGN_DECISIONS.md

## Last Updated
2026-07-03

---

## Overview

This document records all design decisions made during the project. Never delete previous decisions. Always append.

---

## DD-001: Color Palette Direction
**Date**: 2026-07-02
**Status**: Proposed

**Decision**: Follow Slee Automation's dark premium aesthetic as the base. Use a dark background (#0A0A0B or similar near-black) with warm luxury accents.

**Rationale**: MASTER_PROMPT explicitly allows copying Slee Automation's exact colors. The dark premium background with luxury accents creates the "premium digital product" feel required.

**Proposed Palette**:
- Background: Near-black (#0A0A0B)
- Surface: Slightly elevated dark (#141416)
- Text Primary: Off-white (#E8E8ED)
- Text Secondary: Muted (#8A8A9A)
- Accent Primary: Warm gold/amber (to complement the elegant "E" logo)
- Accent Secondary: Subtle gradient from gold to warm tones
- Border: Subtle light (#1E1E24)

**Notes**: The "E" logo uses white on dark, and the full-name logo uses an elegant script font. Gold accents complement this elegance without clashing.

---

## DD-002: Typography System
**Date**: 2026-07-02
**Status**: Proposed

**Decision**: Use Inter as the primary body font and a display/heading font for impact.

**Rationale**: Inter is highly readable, has excellent metrics for screen display, and is widely used by premium tech products (Linear, Vercel). For headings, we'll use a bolder weight of the same family or a complementary display font to create hierarchy.

**Typography Scale** (using clamp for fluid sizing):
- Hero Heading: clamp(2.5rem, 8vw, 5rem)
- Section Heading: clamp(2rem, 6vw, 4rem)
- Subheading: clamp(1.25rem, 2vw, 1.5rem)
- Body: clamp(1rem, 1.2vw, 1.125rem)
- Small: 0.875rem

---

## DD-003: Animation Philosophy
**Date**: 2026-07-02
**Status**: Proposed

**Decision**: Purposeful, performance-first animations. Every animation must serve a functional purpose (guide attention, provide feedback, create hierarchy).

**Rationale**: MASTER_PROMPT states "Performance is more important than excessive animations" and "Every animation should have a purpose."

**Animation Types**:
- Entrance reveals (FadeIn) — guide reading flow
- Scroll-driven reveals (AnimatedText) — reward engagement
- Hover micro-interactions — provide feedback
- Sticky card stacking (Projects) — create depth and showcase
- Orbital rotation (Skills) — visualize hierarchy

**Performance Rules**:
- Use `transform` and `opacity` only (GPU-accelerated)
- Set `will-change` only when animating
- Use `viewport={{ once: true }}` for entrance animations
- Passive scroll listeners only
- Respect `prefers-reduced-motion`

---

## DD-004: Projects Section Strategy
**Date**: 2026-07-02
**Status**: Proposed

**Decision**: Combine MotionSites' sticky-stacking card pattern with the BorderRotate rotating gradient border. Each project card stacks on scroll with a subtle scale-down effect.

**Rationale**: The MotionSites reference demonstrates an impressive sticky-card stacking effect visible in the screenshots. The BorderRotate component from the provided reference adds a unique premium touch. Combining both creates an original, distinctive showcase.

**Implementation**:
- Cards are `position: sticky` with `top: ~100px`
- Each card in its own tall container (`height: 85vh`)
- Cards scale down as next card stacks on top: `scale = 1 - (totalCards - 1 - i) * 0.03`
- BorderRotate wraps each card with subtle gold/amber rotating gradient
- Image grid inside each card (2 columns: 40/60 split like MotionSites)

---

## DD-005: Services Section Layout
**Date**: 2026-07-02
**Status**: Proposed

**Decision**: Use MotionSites' numbered list layout. Large number on the left, service title and description on the right, separated by thin horizontal borders.

**Rationale**: MASTER_PROMPT explicitly says to "make the section using MOTIONSITES_REFERENCE.md." The numbered list format with large display numbers creates strong visual rhythm and hierarchy.

**Adaptation**: Instead of MotionSites' white background, maintain the dark premium theme throughout for consistency with the overall Slee Automation-inspired aesthetic. Use a slightly elevated surface color to distinguish the section.

---

## DD-006: Skills Visualization
**Date**: 2026-07-02
**Status**: Proposed

**Decision**: Build an animated orbital/solar system visualization with concentric rings. Center contains core skills, outer rings contain increasingly specialized skills.

**Rationale**: MASTER_PROMPT specifically requests "an animated orbital system" instead of a normal skills grid. The closer a skill is to the center, the more fundamental it is.

**Rings**:
1. Center: Core Skills (JS, TS, Java, Python, HTML, CSS)
2. Ring 2: Frameworks
3. Ring 3: Databases
4. Ring 4: AI
5. Ring 5: SEO
6. Ring 6: Lead Generation

**Performance Considerations**: Use CSS transforms for rotation. Pause rotation when out of viewport. Provide reduced-motion fallback (static ring layout).

---

## DD-007: Navigation Strategy
**Date**: 2026-07-02
**Status**: Proposed

**Decision**: Fixed navbar with blur backdrop that appears on scroll. Logo (E monogram) on left, navigation links on right, CTA button at far right. Mobile hamburger menu with slide-out panel.

**Rationale**: Follows premium site patterns (Slee Automation, Linear, Vercel). The blur-on-scroll effect provides visual sophistication while maintaining readability.

---

## DD-008: Project Card Layout — Metadata Left, Mockup Right
**Date**: 2026-07-03
**Status**: Accepted

**Decision**: Use MotionSites sticky-stacking scroll system BUT replace the 3-picture collage with the user's 4-device mockup images. Project metadata (title, category, tech stack, GitHub link, live URL, View Details button) goes on the LEFT empty space of the mockup image.

**Rationale**: User explicitly requested NOT to use the MotionSites 3-picture collage. The provided mockup images already have a natural left empty space designed for metadata overlay. This creates a unique, original layout that showcases the actual project work.

**Layout**: 2-column — LEFT (40%): project metadata stacked vertically. RIGHT (60%): full mockup image.

---

## DD-009: Project Detail Pages
**Date**: 2026-07-03
**Status**: Accepted

**Decision**: Create dedicated project detail pages at `/project/:slug` with full project content, 4-device image collage, tech stack, and links.

**Rationale**: User wants a "View Details" flow that shows comprehensive project information. This cannot be achieved within a scroll section — requires dedicated pages.

**Content per page**: Project title, category, full descriptive content (multiple bullet points), 4-device mockup image, tech stack tags, live URL button, GitHub button, back navigation, next/previous project navigation.

---

## DD-010: CLAUDE.md Frontend Design Guardrails
**Date**: 2026-07-03
**Status**: Accepted

**Decision**: Incorporate CLAUDE.md's anti-generic guardrails into the design system.

**Key Rules**:
- Never use default Tailwind palette (no indigo-500, blue-600) — use custom brand colors
- Use layered, color-tinted shadows (not flat shadow-md)
- Pair display/serif with clean sans for typography
- Tight tracking (-0.03em) on large headings, generous line-height (1.7) on body
- Layer multiple radial gradients with grain/noise texture
- Only animate `transform` and `opacity` — never `transition-all`
- Every clickable element needs hover, focus-visible, and active states
- Surfaces must have layering system (base → elevated → floating)

**Rationale**: These guardrails ensure the final product avoids generic, template-like appearance and maintains a premium, custom feel throughout.
