import { defineConfig, devices } from '@playwright/test';

// Runs against the production-faithful preview (built dist served by
// workerd via `astro preview`). The webServer command builds first;
// keep a `pnpm preview` running while iterating to skip the rebuild
// (reuseExistingServer picks it up).
export default defineConfig({
  testDir: 'tests',
  webServer: {
    command: 'pnpm build && pnpm preview',
    port: 4321,
    reuseExistingServer: true,
    timeout: 180_000,
  },
  use: {
    baseURL: 'http://localhost:4321',
  },
  projects: [
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
  ],
});
