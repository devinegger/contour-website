// @ts-check
import { defineConfig } from 'astro/config';
import tina from '@tinacms/astro/integration';

// Pure static build. The Tina admin (/admin/index.html) is built as static
// assets by `tinacms build` and bundled into dist/. Visual editing in dev
// works in Tina local mode; in production it is admin-edit only.
export default defineConfig({
  output: 'static',
  integrations: [tina()],
  redirects: {
    '/admin': '/admin/index.html',
  },
});
