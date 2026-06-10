# Contour Design System

> Fast, modern websites — built, hosted, and tended for you — for businesses in
> the Greenville area and beyond.

Contour is a web design and local-marketing **firm** (not a vendor) based in
Travelers Rest, SC. This design system is the canonical visual language for the
agency's own site and any Contour-branded artifact: marketing pages, decks,
proposals, prototypes. The aesthetic target is **"the best-looking contractor in
the room"** — measured, precise, grounded, assured, unhurried. Dark mode is the
primary presentation; light (warm Stone) surfaces are equally finished.

This system was built from the production codebase and the locked brand canon
(see *Sources*). The brand was set in a dedicated genesis session and is **canon** —
this system executes it, it does not reinvent it.

---

## Sources

Everything here was derived from material the team provided. You may not have
access, but they're recorded so you can go deeper:

- **GitHub — `devinegger/contour-website`** (`main`): the production Astro 6 +
  TinaCMS site. Block components (`src/components/blocks/*.astro`), layout
  (`Nav.astro`, `Footer.astro`), tokens (`src/styles/global.css`), and all final
  copy (`content/**`). Explore this repo to build production-accurate designs.
  → https://github.com/devinegger/contour-website
- **Brand canon (Obsidian vault — not in repo):** *Visual System.md*, *Logo
  Mark.md*, and *visual-direction-brief.md* from the Genesis Round 2 set. These
  are authoritative for palette, type, the C-mark geometry, and motion rules.

> ⚠️ The repo's `CLAUDE.md` "Visual system" section and `global.css` are **stale**
> (they specify Inter and pre-genesis hex values). This system reflects the
> *canon*: Fraunces + DM Sans and the full Slate/Stone/Teal palette below.

---

## Content fundamentals — how Contour writes

The voice is the product: a skilled craftsperson who diagnoses before
prescribing, then gets out of your way. Copy should sound like that person
talking — never like a marketing department.

- **Person & address.** Second person to the reader ("**your** business",
  "**you** own it"), first-person plural for the firm ("**we** survey before we
  build"). Warm and direct, never corporate "we" distance.
- **Tone.** Plain-spoken, confident, unhurried. Short declarative sentences.
  Comfortable with a dash, a fragment, or an em-dash aside. Mildly contrarian
  about industry norms ("we don't skip that step, and we don't apologize for it").
- **Casing.** Sentence case everywhere — headlines, buttons, nav. **Not** Title
  Case. Buttons read like actions: "Book a Call", "Get a Free Site Review",
  "Start the move".
- **No hype.** Honest math over superlatives. Names the real numbers
  ("$368–1,028/mo", "90+ PageSpeed"). Promises only what's controllable
  ("We can't promise you a ranking — Google controls that").
- **Emoji:** never. **Exclamation points:** rare. Trust comes from precision,
  not enthusiasm.
- **Two recurring devices:** a rhetorical question as a headline ("What does it
  actually cost?", "Don't have a site yet…?") and the "firm, not a vendor"
  framing.
- **Hard rule:** the word **"trades"** never appears in copy or UI.

Examples (verbatim, locked):
> "Your website should work for your business. Not the other way around."
> "A good website is the kind of thing you stop thinking about."
> "Don't prescribe before you diagnose."

---

## Visual foundations

**Palette.** Three families, never pure black or pure white.
- *Slate* — `#1E2730` deep (hero, nav), `#2C3540` base, `#3D4B5A` cards. Dark
  surfaces and heavy type.
- *Stone* — `#F2EDE8` light surface (warm, never clinical), `#E0D9D2`, `#C8BFB6`.
- *Teal* `#4A8C8C` — the single accent. Carries every interactive + brand signal:
  CTAs, active states, eyebrows, the period in "Contour.", topo strokes.
  `#5FA8A8` hover, `#3A7070` featured cards.
- *Gray* `#8A97A4` / `#B8C2CC` — supporting text and borders on dark.

**Type.** Fraunces (variable serif) for headings — 700 display, 600 headings,
`-0.02em` tracking at display sizes, optical sizing left to breathe. DM Sans for
body (300) and UI (400) and labels/nav (500). Eyebrows are DM Sans 500, ~11px,
uppercase, 0.18em tracking, Teal. Scale: Display 56–72 / H1 40–56 / H2 28–36 /
H3 20–24 / body 16 / caption 13–14 / UI label 11–13.

**Backgrounds.** No photography in the core system. The signature texture is a
**topographic contour motif** — concentric organic elevation lines in Teal,
"felt more than seen": 10–15% opacity on dark, 8–12% on light, line weight
0.8–1.8px. It tiles behind dark and light surfaces alike and is never foreground.
No gradients as decoration (the only gradient is the divider hairline fade).

**Layout.** ~1200px max container, mobile-first, generous vertical rhythm
(`--section-padding` clamps 3–6rem). Whitespace is deliberate — do not compress.

**Corners & elevation.** 4px radius on buttons/inputs/badges, 8px on cards.
Never pills. Shadows are restrained — no card drop-shadows on dark; light cards
get a soft `0 4px 24px` lift on hover only. No glassmorphism, no heavy shadows.

**Borders.** Low-opacity Teal on dark (`color-mix` ~18%), brightening to ~40% on
hover for outline cards. Hairline `9%` Stone for internal dividers.

**Cards.** Dark (Slate Mid + low-opacity Teal border), Featured (Teal Dim — used
sparingly to single out one option), Outline (transparent, border brightens on
hover), Light (warm off-white `#FBF8F4` on Stone).

**Motion.** Almost none — and that's the point. The *only* expressive motion is a
**2px upward translate on button hover**, 150–200ms ease. No scroll-triggered
animation, no parallax, no entrance animations. Hover states shift color/opacity
(links brighten Teal→Teal Light; nav links go full opacity). Press returns the
button to `translateY(0)`. `prefers-reduced-motion` is honored.

**Dividers.** A 1px gradient that fades transparent → Teal 30% → transparent,
with an 8px Teal center dot at 80% opacity. Major section transitions only.

**Imagery vibe.** When photography is added later it should read warm and
grounded (Stone-toned), never cool/clinical or neon. Anti-references to avoid:
agency-blue/neon, construction-literal (hard hats, orange), tech-startup
white-minimal, boutique thin serifs, editorial oversized type, decorative
gradients.

---

## Iconography

Contour uses **almost no icons** — restraint is the system. What exists:

- **The C-mark.** A two-ring open "C" tracing ~300° of arc — a contour line that
  hasn't quite closed, gap always facing right. Stroke only, Teal, round caps.
  Used in nav, footer, favicon. Ships inline as the `ContourMark` component and as
  `assets/contour-mark.svg` / `assets/favicon.svg`.
- **Functional glyphs** are minimal inline SVG strokes that match the C-mark:
  1.75px stroke, round caps, `currentColor` — a chevron for the FAQ disclosure
  and select control, a check for inclusion lists, an arrow for CTAs. No icon
  font, no third-party icon set, no filled icons.
- **Emoji and Unicode dingbats:** never used as UI.

If you need an icon the system doesn't cover, draw a stroke glyph at 1.75px /
round-cap to match — or, if you must use a library, Lucide (stroke, rounded) is
the closest match. Flag any such addition.

---

## Index — what's in this system

**Foundations & global CSS**
- `styles.css` — the one file consumers link. `@import`s only.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css`
- `components/components.css` — shared component classes (shipped via `styles.css`)

**Assets** (`assets/`)
- `contour-mark.svg` — the two-ring open-C logo mark
- `favicon.svg` — mark on a Slate-Deep rounded tile
- `topo-dark.svg` · `topo-light.svg` — the topographic background textures

**Components** (`components/<Name>/`) — React primitives, on `window.ContourDesignSystem_7f839f`
- `Button` — primary / ghost / light, 3 sizes, icon slots
- `Card` — dark / featured / outline / light
- `Eyebrow`, `Badge` (`components/Labels/`) — uppercase teal kickers & tier labels
- `Field`, `Input`, `Select`, `Textarea` (`components/Forms/`) — label-above-input
- `Faq`, `FaqItem` — accessible disclosure accordion
- `Divider` — gradient hairline + teal dot
- `NavBar`, `ContourMark` (`components/Nav/`) — sticky nav + inline brand mark

**UI kit** (`ui_kits/contour-website/`)
- `index.html` — interactive recreation of the live site: Home, Services, About,
  Contact, with the block components composed from the primitives above.

**Specimen cards** (`guidelines/cards/`) — the Design System tab gallery
(Colors, Type, Spacing, Brand).

**Other**
- `SKILL.md` — makes this folder usable as a downloadable Agent Skill.

---

## Using the components

```jsx
const { Button, Card, NavBar } = window.ContourDesignSystem_7f839f;
```

Link `styles.css` for tokens + classes, load `_ds_bundle.js` (the compiled
component library), then read the namespace above. Every component references the
CSS custom properties — never hard-code hex values; use the tokens.
