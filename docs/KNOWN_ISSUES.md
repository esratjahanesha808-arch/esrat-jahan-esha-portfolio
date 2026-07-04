# KNOWN_ISSUES.md

## Last Updated
2026-07-03

---

## Open Issues

### KI-001: Missing Profile Photo
**Severity**: ~~Blocker~~ → **Resolved**
**Description**: DESIGN_REFERENCES.md references `PROFILE_PHOTO/` directory, but this directory does not exist.
**Resolution**: ✅ User confirmed no profile photo needed. About section uses MotionSites centered text style without photo or decorative icons.

---

### KI-002: Missing Social Links
**Severity**: ~~Medium~~ → **Resolved**
**Description**: CONTENT.md states "Use the social links provided in the project assets" but no social links were provided.
**Resolution**: ✅ User provided: GitHub, Instagram, Facebook, LinkedIn, Email. See MEMORY.md for URLs.

---

### KI-003: Incomplete Project Data
**Severity**: ~~Medium~~ → **Resolved**
**Description**: MASTER_PROMPT requires project details but CONTENT.md did not contain them.
**Resolution**: ✅ User provided full project data for 2 projects (Oasis Pools, Luxora) with titles, descriptions, tech stacks, GitHub URLs, and live URLs. See IMPLEMENTATION_PLAN.md for full details.

---

### KI-004: Large Project Image File Sizes
**Severity**: Low
**Description**: The two project images in `assets/PROJECT_IMAGES/` are 7MB and 7.6MB respectively (PNG format). These are far too large for web use.
**Workaround**: Will need to be compressed and converted to WebP during the build process or manually before deployment.
**Resolution**: Optimize images during build pipeline setup (Milestone 1).

---

### KI-005: Logo Assets Need Optimization
**Severity**: Low
**Description**: Logo PNG files are ~940KB each. Need to be optimized and potentially exported in SVG or smaller PNG format.
**Resolution**: Optimize during asset pipeline setup.
