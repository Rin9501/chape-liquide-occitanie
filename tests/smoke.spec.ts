import { test, expect } from '@playwright/test';

/**
 * Tests fumée — vérifie que la page charge et contient les éléments critiques.
 * Passe sur desktop, mobile et tablette (voir playwright.config.ts).
 */

test.describe('Page charge correctement', () => {

  test('titre et meta description présents', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Chape Liquide Occitanie/);

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /applicateur agréé Sika/i);
  });

  test('header sticky visible', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header.site-header');
    await expect(header).toBeVisible();
    // Vérifie que le header est bien sticky (position: sticky)
    const position = await header.evaluate(el => getComputedStyle(el).position);
    expect(position).toBe('sticky');
  });

  test('numéro de téléphone cliquable', async ({ page }) => {
    await page.goto('/');
    const tel = page.locator('a[href="tel:0687613987"]').first();
    await expect(tel).toBeVisible();
  });

  test('au moins un CTA devis visible', async ({ page }) => {
    await page.goto('/');
    // Le nav "Contact" pointe vers #devis mais n'est pas dans <main>
    // On cible les vrais CTAs : hero + section devis + barre mobile
    const cta = page.locator('main a[href="#devis"], .mobile-bar a[href="#devis"]').first();
    await expect(cta).toBeVisible();
    await expect(cta).toContainText(/devis/i);
  });

  test('formulaire guide gratuit présent', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('form[action="/api/ebook"]');
    await expect(form).toBeVisible();
    await expect(form.locator('input[type="email"]')).toBeVisible();
    await expect(form.locator('button[type="submit"]')).toBeVisible();
  });

  test('section réalisations avec 6 photos', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#realisations');
    await expect(section).toBeVisible();
    const photos = section.locator('img');
    await expect(photos).toHaveCount(6);
  });

  test('FAQ accordion : 6 questions présentes', async ({ page }) => {
    await page.goto('/');
    const faqs = page.locator('details.faq-item');
    await expect(faqs).toHaveCount(6);
  });

  test('FAQ accordion : s\'ouvre et se ferme au clic', async ({ page }) => {
    await page.goto('/');
    const firstFaq = page.locator('details.faq-item').first();
    // Fermé par défaut
    await expect(firstFaq).not.toHaveAttribute('open', '');
    // Clic pour ouvrir
    await firstFaq.locator('summary').click();
    await expect(firstFaq).toHaveAttribute('open', '');
    // Re-clic pour fermer
    await firstFaq.locator('summary').click();
    await expect(firstFaq).not.toHaveAttribute('open', '');
  });

  test('footer contient SIRET', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toContainText('533 165 684 00028');
  });

  test('pas d\'erreur console JavaScript', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto('/');
    // Laisser le temps aux scripts de s'exécuter
    await page.waitForTimeout(500);
    expect(errors, `Erreurs JS: ${errors.join(', ')}`).toHaveLength(0);
  });

});

test.describe('Responsive — mobile', () => {

  test.use({ viewport: { width: 390, height: 844 } });

  test('barre mobile sticky visible sous 768px', async ({ page }) => {
    await page.goto('/');
    const bar = page.locator('.mobile-bar');
    await expect(bar).toBeVisible();
  });

  test('nav header masquée sur mobile', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('header .header-nav');
    // hidden via CSS (display:none) mais présente dans le DOM
    await expect(nav).toBeHidden();
  });

});
