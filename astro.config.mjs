// @ts-check
import { defineConfig } from 'astro/config';
import tina from '@tinacms/astro/integration';

// Pure static build. The Tina admin (/admin/index.html) is built as static
// assets by `tinacms build` and bundled into dist/. Editing is form-based
// everywhere — the visual-editing islands layer was removed with the static
// switch (19235d1). Dev mode writes content files locally; production
// commits via TinaCloud.
export default defineConfig({
  site: 'https://contour-digital.com',
  output: 'static',
  integrations: [tina()],
  redirects: {
    '/admin': '/admin/index.html',
  },
});
