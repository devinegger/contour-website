# Contour Site

Agency website for Contour (contour-digital.com). This is the agency's own dogfood build — the site demonstrates the exact stack sold to clients.

## Stack

- **Framework:** Astro (static output)
- **CMS:** TinaCMS via `@tinacms/astro` — no React in the page tree
- **Hosting:** Sevalla (Cloudflare CDN)
- **Forms:** Cloudflare Worker + MailChannels (shared agency endpoint)
- **Media:** Cloudflare Images
- **Package manager:** pnpm

## Architecture

Block-based page model. Pages in the `pages` collection are composed from an ordered `blocks` array. The block dispatcher in `src/pages/index.astro` and `src/pages/[...slug].astro` maps each block's `_template` value to an Astro component via `src/lib/blockComponents.ts`.

The PageSpeed audit widget (`src/components/blocks/PageSpeedWidget.astro`) is hardcoded into `index.astro` between the differentiators and trust-signal blocks. It is not an editor-composable block.

Visual editing uses `<TinaIsland>`, `tinaField()` markers, and `experimental_createIslandRoute` — no React, no `client:tina` directive (that path is retired).

## Visual system

    --color-dark:      #1E2730   (Slate)
    --color-accent:    #4A8C8C   (Teal)
    --color-light:     #F5F0EB   (Stone)
    --font-heading:    Fraunces (Google Fonts, serif)
    --font-body:       Inter (Google Fonts, sans-serif)

All tokens are CSS custom properties in `src/styles/global.css`. Never use inline color values.

Topographic line motif (`src/assets/topo.svg`) is used as a subtle repeating background texture on dark surfaces only.

## Content model

Collections: `pages`, `posts`, `services`, `faqs`
Singleton: `siteSettings`
Content files live in `content/`.

## Locked copy — do not change these in code or content

- Hero headline: "Your website should work for your business. Not the other way around." *(updated during Content Writing phase — original "morning coffee" line retired)*
- WP Migration card headline: "Have a WordPress site you're ready to leave in the dust?"
- Custom Build card headline: "Don't have a site yet…?"
- Location line (pages): "Located in Travelers Rest, SC. Serving the Greenville Area, Upstate South Carolina, Western North Carolina — and anywhere your business is located."
- Location line (footer, shortened): "Located in Travelers Rest, SC. Serving the Greenville Area — and anywhere your business is located."
- Global brand rule: the word "trades" does not appear anywhere in copy or UI strings

## Key conventions

- Block components live in `src/components/blocks/` and receive Tina field data as props
- Layout components (`Nav.astro`, `Footer.astro`) read from `siteSettings` singleton — they are not editor-managed directly
- Form endpoint is a placeholder (`https://forms.contour-digital.com/contact`) until the Cloudflare Worker is wired at Assembly
- Blog routes are scaffolded but the blog is not in the nav until seed posts exist
- Tina Cloud ID is not yet set — local mode only until Devin adds it

## What is not done yet (do not fabricate)

- Final visual styling (Claude Design phase)
- Tina Cloud ID
- Real form endpoint
- Logo SVG (pending brand genesis)
- Individual service pages (/services/[slug]) — v2
