import { test, expect } from '@playwright/test';
import path from 'path';

/**
 * Tests responsive — vérifie que le layout ne casse pas aux breakpoints critiques.
 * Pas de snapshot visuel (évite la fragilité) : on vérifie la géométrie et la visibilité.
 */

const VIEWPORTS = [
  { name: 'mobile-sm',  width: 375, height: 812  },  // iPhone SE
  { name: 'mobile',     width: 390, height: 844  },  // iPhone 14
  { name: 'tablet',     width: 768, height: 1024 },  // iPad Mini portrait
  { name: 'desktop-sm', width: 1280, height: 800 },  // Laptop
  { name: 'desktop',    width: 1440, height: 900 },  // Desktop référence
];

// ── Scroll horizontal interdit (indicateur de layout cassé) ──────────────────
for (const vp of VIEWPORTS) {
  test(`[${vp.name}] pas de scroll horizontal`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('/');

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    expect(
      scrollWidth,
      `Scroll horizontal détecté : scrollWidth=${scrollWidth} > clientWidth=${clientWidth}`
    ).toBeLessThanOrEqual(clientWidth);
  });
}

// ── Éléments critiques visibles à chaque breakpoint ─────────────────────────
for (const vp of VIEWPORTS) {
  test(`[${vp.name}] hero title et CTA visibles`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('/');

    // h1 du site (ciblé via main pour éviter les h1 de l'UI Playwright)
    await expect(page.locator('main h1, #accueil h1').first()).toBeVisible();

    // Au moins un bouton "Devis" visible dans le contenu du site
    const devisLinks = page.locator('main a[href="#devis"], .mobile-bar a[href="#devis"]');
    await expect(devisLinks.first()).toBeVisible();
  });
}

// ── Mobile : éléments spécifiques ───────────────────────────────────────────
test.describe('Mobile-only', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('barre mobile sticky présente et au-dessus du contenu', async ({ page }) => {
    await page.goto('/');
    const bar = page.locator('.mobile-bar');
    await expect(bar).toBeVisible();

    // Vérifier z-index élevé (doit être au-dessus de tout)
    const zIndex = await bar.evaluate(el => getComputedStyle(el).zIndex);
    expect(parseInt(zIndex, 10)).toBeGreaterThanOrEqual(50);
  });

  test('hero image ne dépasse pas la largeur viewport', async ({ page }) => {
    await page.goto('/');
    const heroImg = page.locator('.hero-img img');
    const box = await heroImg.boundingBox();
    if (box) {
      expect(box.width).toBeLessThanOrEqual(390 + 1); // +1 pour arrondi pixel
    }
  });

  test('grille 4 colonnes "Pourquoi nous" passe en 1 colonne', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.reason-card');
    const first = await cards.nth(0).boundingBox();
    const second = await cards.nth(1).boundingBox();

    if (first && second) {
      // En mobile, les cartes sont empilées : second.y > first.y + first.height / 2
      expect(second.y).toBeGreaterThan(first.y + first.height / 2);
    }
  });

  test('grille réalisations passe en 2 colonnes sur mobile', async ({ page }) => {
    await page.goto('/');
    const photos = page.locator('.realisations-grid a');
    const first  = await photos.nth(0).boundingBox();
    const second = await photos.nth(1).boundingBox();
    const third  = await photos.nth(2).boundingBox();

    if (first && second && third) {
      // 2 colonnes : first et second sont côte à côte (même y approximatif)
      expect(Math.abs(first.y - second.y)).toBeLessThan(50);
      // third commence une nouvelle ligne
      expect(third.y).toBeGreaterThan(first.y + first.height / 2);
    }
  });

});

// ── Desktop : éléments spécifiques ──────────────────────────────────────────
test.describe('Desktop-only', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('nav header visible (pas cachée)', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header .header-nav')).toBeVisible();
  });

  test('barre mobile cachée sur desktop', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.mobile-bar')).toBeHidden();
  });

  test('hero en 2 colonnes (image à droite)', async ({ page }) => {
    await page.goto('/');
    const heroText = page.locator('.hero-grid > div').first();
    const heroImg  = page.locator('.hero-img');
    const textBox  = await heroText.boundingBox();
    const imgBox   = await heroImg.boundingBox();

    if (textBox && imgBox) {
      // L'image est à droite du texte
      expect(imgBox.x).toBeGreaterThan(textBox.x + textBox.width / 2);
    }
  });

  test('grille 4 colonnes "Pourquoi nous" horizontale', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.reason-card');
    const first  = await cards.nth(0).boundingBox();
    const second = await cards.nth(1).boundingBox();

    if (first && second) {
      // Même ligne : y presque identique
      expect(Math.abs(first.y - second.y)).toBeLessThan(10);
    }
  });

  test('footer 4 colonnes', async ({ page }) => {
    await page.goto('/');
    const cols = page.locator('.footer-grid > *');
    const count = await cols.count();
    expect(count).toBe(4);

    const first  = await cols.nth(0).boundingBox();
    const second = await cols.nth(1).boundingBox();
    if (first && second) {
      expect(Math.abs(first.y - second.y)).toBeLessThan(10);
    }
  });

});
