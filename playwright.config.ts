import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright — Chape Liquide Occitanie
 * Lance le serveur Astro en preview (build statique) avant les tests,
 * puis le coupe automatiquement après.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],

  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },

  projects: [
    // Desktop (référence) — Chromium
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
      },
    },
    // Mobile — Chromium en émulation mobile (évite d'installer WebKit/Firefox)
    {
      name: 'mobile',
      use: {
        ...devices['Pixel 7'],          // Chromium-based Android emulation
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
    // Tablette — Chromium viewport tablette
    {
      name: 'tablet',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 768, height: 1024 },
      },
    },
  ],

  // Démarre `astro preview` (build statique) avant les tests.
  // Exécute `astro build` si le dossier dist/ n'est pas à jour.
  webServer: {
    command: 'npm run preview -- --port 4321',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
