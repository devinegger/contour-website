// @ts-check
import { defineConfig } from 'astro/config';
import tina from '@tinacms/astro/integration';
import sitemap from '@astrojs/sitemap';

// Pure static build. The Tina admin (/admin/index.html) is built as static
// assets by `tinacms build` and bundled into dist/. Editing is form-based
// everywhere — the visual-editing islands layer was removed with the static
// switch (19235d1). Dev mode writes content files locally; production
// commits via TinaCloud.
export default defineConfig({
  site: 'https://contour-digital.com',
  output: 'static',
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
});
