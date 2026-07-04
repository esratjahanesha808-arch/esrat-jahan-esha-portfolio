# AGENTS.md

# AI Development Guide

This document defines the workflow, standards, and responsibilities for every AI agent working on this repository.

---

# Mission

Build and maintain a production-quality personal portfolio website.

This project should be treated as a professional software product, not a one-time generated website.

Prioritize:

- Performance
- Scalability
- Maintainability
- Accessibility
- Responsive Design
- Clean Architecture
- Reusable Components
- High Code Quality

---

# First Startup

Before writing any code:

1. Read START_HERE.md
2. Read docs/MEMORY.md
3. Read docs/IMPLEMENTATION_PLAN.md
4. Read docs/PROJECT_ARCHITECTURE.md
5. Read docs/TASKS.md
6. Read docs/ARCHITECTURE_DECISIONS_LOG.md
7. Read docs/DESIGN_DECISIONS.md
8. Read all project requirement documents.

If any documentation is missing, create it before implementation.

Never begin coding without understanding the current project state.

---

# Source of Truth

Project requirements

MASTER_PROMPT.md

Project content

CONTENT.md

Design references

DESIGN_REFERENCES.md

Motion reference

MOTIONSITES_REFERENCE.md

Documentation

docs/

If two files conflict,

follow them in this order.

1. MASTER_PROMPT
2. Documentation
3. Existing implementation

---

# Documentation

The project documentation lives inside

docs/

Required files

- MEMORY.md
- IMPLEMENTATION_PLAN.md
- PROJECT_ARCHITECTURE.md
- COMPONENT_REGISTRY.md
- DESIGN_DECISIONS.md
- ARCHITECTURE_DECISIONS_LOG.md
- TASKS.md
- PROGRESS.md
- CHANGELOG.md
- KNOWN_ISSUES.md
- FUTURE_IMPROVEMENTS.md

If a file does not exist,

create it.

If it exists,

update it.

Never overwrite documentation.

---

# Planning

Never immediately start coding.

Analyze

- requirements
- references
- architecture
- dependencies
- assets
- reusable components
- animation systems
- responsive requirements

Then create or update

IMPLEMENTATION_PLAN.md

Implementation should be milestone-based.

The roadmap should evolve as the project grows.

---

# Architecture

Think like a senior software architect.

Before implementing anything,

ask

Can this become reusable?

Should this become part of the design system?

Can it improve maintainability?

Can it improve performance?

Can it improve accessibility?

Can it reduce future work?

Architect first.

Code second.

---

# Coding Standards

Write production-quality code.

Prefer

- reusable components
- modular architecture
- composition over duplication
- strong typing
- readable code
- meaningful naming
- consistent structure

Avoid

- unnecessary libraries
- duplicated logic
- magic values
- large components

---

# Design Philosophy

Never clone reference websites.

References exist to learn

- spacing
- motion
- hierarchy
- layout
- interaction

Build an original product.

---

# Performance

Always optimize

- bundle size
- lazy loading
- image optimization
- animation performance
- rendering performance
- Lighthouse score

Prefer smooth 60fps interactions.

Performance has higher priority than visual effects.

---

# Accessibility

Every feature should consider

- keyboard navigation
- semantic HTML
- ARIA where appropriate
- color contrast
- reduced motion
- focus states

---

# Responsive Design

Mobile First

Support

- mobile
- tablet
- laptop
- desktop
- ultrawide

No layout should break.

---

# Before Every Milestone

Review

- MEMORY.md
- IMPLEMENTATION_PLAN.md
- TASKS.md
- PROJECT_ARCHITECTURE.md

Identify

- reusable components
- dependency conflicts
- future improvements

Only then begin implementation.

---

# After Every Milestone

Review the implementation.

Optimize if necessary.

Then synchronize documentation.

Update

- MEMORY.md
- IMPLEMENTATION_PLAN.md
- PROGRESS.md
- CHANGELOG.md
- COMPONENT_REGISTRY.md
- TASKS.md
- DESIGN_DECISIONS.md
- ARCHITECTURE_DECISIONS_LOG.md

Never leave documentation outdated.

---

# Decision Logging

Whenever a meaningful decision is made,

record it.

Examples

- architecture
- folder structure
- component strategy
- animation system
- technology
- design system
- performance optimization
- accessibility improvement

Never delete previous decisions.

Always append.

---

# Component Development

Before creating a component,

check whether one already exists.

If reusable,

extend it.

Do not duplicate functionality.

Every reusable component should be documented.

---

# Refactoring

Refactor whenever

- duplication appears
- architecture improves
- maintainability increases
- performance improves

Never refactor simply for personal preference.

---

# Testing Checklist

Before completing work,

verify

- functionality
- responsiveness
- accessibility
- animations
- performance
- consistency

Fix issues before moving forward.

---

# Documentation Synchronization

Documentation is the project's memory.

Every meaningful implementation change must be reflected in the documentation.

Documentation must never become stale.

---

# Future Improvements

Do not immediately implement every idea.

Record future ideas in

docs/FUTURE_IMPROVEMENTS.md

Include

- description
- benefit
- complexity
- priority

---

# Repository Philosophy

Every future AI agent should be able to understand the project by reading

START_HERE.md

without requiring previous chat history.

Maintain the repository so development can continue seamlessly across different AI agents and future sessions.