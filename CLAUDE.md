# Contour Site

Agency website for Contour (contour-digital.com). This is the agency's own dogfood build — the site demonstrates the exact stack sold to clients.

## Stack

- **Framework:** Astro (static output; `@astrojs/cloudflare` adapter for the one dynamic route)
- **CMS:** TinaCMS via `@tinacms/astro` 0.5.x — no React in the page tree
- **Hosting:** Cloudflare Workers static assets (`wrangler.jsonc`; migration from Sevalla in progress on branch `cloudflare-migration`)
- **Forms:** Cloudflare Worker + MailChannels (shared agency endpoint)
- **Media:** Cloudflare Images
- **Package manager:** pnpm

## Architecture

Block-based page model. Pages in the `pages` collection are composed from an ordered `blocks` array. The block dispatcher (`src/components/blocks/Blocks.astro`) maps each block's `__typename` to an Astro component via `src/lib/blockComponents.ts` and wraps each block in a `data-tina-field` marker for click-to-edit.

The PageSpeed audit widget (`src/components/blocks/PageSpeedWidget.astro`) is hardcoded into `Blocks.astro` for the home page, between the differentiators and trust-signal blocks. It is not an editor-composable block.

**Visual editing** is live (restored on the `cloudflare-migration` branch using the `@tinacms/astro` 0.5.x patterns from `tinacms/tina-astro-starter`). The pieces:

- `src/lib/islands.ts` — island registry (`page`, `nav`, `footer`). One entry per editable region; the bridge re-renders these on every form keystroke.
- `src/pages/tina-island/[name].ts` — dynamic route (`prerender = false`) serving island re-renders. POST-only with the bridge's preview content type; the Cloudflare adapter runs it as a Worker function. The only other dynamic route is `src/pages/api/pagespeed.ts` (PSI proxy, key via `PAGESPEED_API_KEY` secret). Everything else stays prerendered static HTML (`output: 'static'`).
- `<TinaIsland>` wrappers in `index.astro` / `[...slug].astro` (page blocks, `primary`) and `Layout.astro` (nav, footer). Wrappers use `.tina-island-contents` (`display: contents`) so the sticky nav and full-bleed sections keep their layout.
- `ui.router` on the `pages`/`posts` collections in `tina/config.ts` routes the admin into the iframe visual editor (`/admin/index.html#/~/...`) instead of the bare form.

Editing flows: local dev (`pnpm dev`) writes content files directly; production admin commits to GitHub through TinaCloud.

## Visual system

Canon per the Contour Design System handoff (`design-handoff/contour-design-system/`). The full reference — palette rationale, type scale, iconography, motion rules — is in that folder's `project/readme.md`.

    Slate:   #1E2730 deep (nav, hero) · #2C3540 base · #3D4B5A cards
    Stone:   #F2EDE8 light surface · #E0D9D2 · #C8BFB6 (warm, never clinical)
    Teal:    #4A8C8C accent · #5FA8A8 hover · #3A7070 featured cards
    Gray:    #8A97A4 / #B8C2CC supporting text and borders on dark

    --font-heading:  Fraunces (Google Fonts, variable serif) — 700 display, 600 headings
    --font-body:     DM Sans (Google Fonts) — 300 body, 400 UI, 500 labels/nav/eyebrows

All tokens are CSS custom properties in `src/styles/global.css` (semantic names like `--surface-deep`, `--text-on-light`, `--border-on-dark`). Never use inline color values. Never pure black or pure white.

Topographic line motif (`public/topo-dark.svg`, `public/topo-light.svg`) tiles behind dark and light surfaces alike — "felt more than seen", never foreground. The C-mark logo (two-ring open C, gap facing right, teal, round caps) is inlined in `Nav.astro`/`Footer.astro` and lives at `src/assets/contour-mark.svg`.

Motion is restrained: the only expressive motion is the 2px upward translate on button hover. No scroll-triggered animation, no parallax. Corners: 4px buttons/inputs, 8px cards — never pills.

## Content model

Collections: `pages`, `posts`, `services`, `faqs`
Singleton: `siteSettings`
Content files live in `content/`.

## Content ownership

The site is live. Copy is no longer locked to specific wording — content edits (headlines, taglines, location lines, etc.) are Karen's call via the Tina admin, not a dev concern. Don't enforce or restore specific copy strings from prior phases unless asked.

## Key conventions

- Block components live in `src/components/blocks/` and receive Tina field data as spread props
- Layout components (`Nav.astro`, `Footer.astro`) receive the `siteSettings` singleton as a `settings` prop (passed by `Layout.astro`, and by the island registry on re-render)
- Build scripts: `pnpm build` is the fully-local build; `pnpm build:cloud` is `tinacms build --content=local -c "astro build"` — admin auths against TinaCloud, content bakes from the local checkout. The `-c` subcommand form matters: `TINA_LOCAL_URL` is set in-process, so chaining with `&&` would make `astro build` query TinaCloud instead.
- **Never commit a token-baked `tina/__generated__/client.ts`.** Cloud builds — and any build/dev run with `TINA_TOKEN` in the environment — bake the read-only token into it, and the repo is public. Before committing generated-file churn, regenerate with `TINA_TOKEN= npx tinacms build --local --skip-cloud-checks` or discard with `git checkout -- tina/__generated__/`.
- Local builds while `pnpm dev` is running: pass `--port 4002 --datalayer-port 9001`
- Tests: `pnpm test` runs Playwright (mobile + desktop projects) against the built preview; the webServer builds first, or keep `pnpm preview` running to skip the rebuild
- Global CSS guarantees: `.hide-mobile`/`.hide-desktop` and `[hidden]` use `!important` — Astro's scoped styles (`.foo[data-astro-cid]`) otherwise outrank global utilities and the UA's hidden rule
- Form endpoint is a placeholder (`https://forms.contour-digital.com/contact`) until the Cloudflare Worker is wired at Assembly
- Blog routes are scaffolded but the blog is not in the nav until seed posts exist
- TinaCloud project exists (creds in gitignored `.env`); `tina/config.ts` resolves the branch from `GITHUB_BRANCH` / `WORKERS_CI_BRANCH`, falling back to `main`

## What is not done yet (do not fabricate)

- Cloudflare Workers project creation + GitHub auto-deploy (needs Devin's account)
- TinaCloud Site URLs for the `workers.dev` URL and `contour-digital.com`
- DNS cutover from Sevalla (blocked on the editing-UX acceptance test)
- Real form endpoint
- `PAGESPEED_API_KEY` secret (Google PSI API key) — until set, the PageSpeed widget returns "not configured yet" on submit
- favicon.ico still predates the canon C-mark (favicon.svg is current)
- Individual service pages (/services/[slug]) — v2
