---
name: contour-design
description: Use this skill to generate well-branded interfaces and assets for Contour (a web design & local marketing firm in Travelers Rest, SC), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Palette, type, motion, and content voice:** all in `README.md`. The
  non-negotiables: Fraunces (headings) + DM Sans (body); Slate / Stone / Teal
  palette; never pure black or white; the only motion is a 2px button-hover lift.
- **Tokens:** `styles.css` `@import`s everything in `tokens/`. Link that one file.
- **Components:** React primitives under `components/<Name>/` (Button, Card,
  Eyebrow, Badge, Field/Input/Select/Textarea, Faq, Divider, NavBar). Each has a
  `.prompt.md` with usage. They compile to `_ds_bundle.js` on
  `window.ContourDesignSystem_7f839f`.
- **Brand assets:** `assets/` — `contour-mark.svg`, `favicon.svg`,
  `topo-dark.svg`, `topo-light.svg`.
- **Full-screen reference:** `ui_kits/contour-website/` recreates the live site.

## Rules that matter most

1. Sentence case everywhere. No emoji. Copy is plain, confident, unhurried.
2. Teal is the only accent — and the period in "Contour." is always Teal.
3. The logo C is an open ~300° two-ring form; the gap faces right.
4. Topographic texture is "felt more than seen" — never foreground.
5. Don't invent new colors; use the tokens or `oklch()` harmonized to them.
