// @ts-check
import { defineConfig } from 'astro/config';
import tina from '@tinacms/astro/integration';
import { tinaAdminDevRedirect } from '@tinacms/astro/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// output: 'static' — visitors get pure prerendered HTML. The one exception
// is /tina-island/[name] (prerender = false), which the Cloudflare adapter
// runs as a Worker function; it only fires during admin editing sessions.
// The Tina admin (/admin/index.html) is built as static assets by
// `tinacms build` and bundled into dist/.
export default defineConfig({
  site: 'https://contour-digital.com',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    tina(),
    sitemap({
      // The Tina admin is an app shell, not a content page.
      filter: (page) => !page.includes('/admin'),
    }),
  ],
  // No /admin redirect needed: Workers assets html_handling serves
  // admin/index.html for /admin/, and tinaAdminDevRedirect covers astro dev.
  // An Astro redirect here would emit a _redirects entry that loops against
  // the assets trailing-slash rewrite.
  vite: {
    plugins: [tinaAdminDevRedirect()],
    // Bundle @tinacms/astro into the SSR build instead of resolving it
    // per-module on every cold request to the island route.
    ssr: {
      noExternal: ['@tinacms/astro', '@tinacms/bridge'],
    },
  },
});
