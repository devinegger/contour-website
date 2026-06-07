// @ts-check
import { defineConfig } from 'astro/config';
import tina from '@tinacms/astro/integration';
import node from '@astrojs/node';

// output: 'server' with per-page prerender = true gives a fully static site
// at build time while allowing the tina-island SSR route for visual editing in dev.
// At Assembly, swap @astrojs/node for @astrojs/cloudflare.
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [tina()],
  redirects: {
    '/admin': '/admin/index.html',
  },
});
