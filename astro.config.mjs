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
  redirects: {
    '/admin': '/admin/index.html',
  },
  vite: {
    plugins: [tinaAdminDevRedirect()],
    // Bundle @tinacms/astro into the SSR build instead of resolving it
    // per-module on every cold request to the island route.
    ssr: {
      noExternal: ['@tinacms/astro', '@tinacms/bridge'],
    },
  },
});
