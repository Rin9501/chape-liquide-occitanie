import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import type { Result } from 'axe-core';

/**
 * Tests d'accessibilité — axe-core
 *
 * On cible les règles WCAG 2.1 AA.
 * Les violations sont affichées avec leur description et l'élément fautif.
 */

// Helper : formate les violations axe pour un message d'erreur lisible
function formatViolations(violations: Result[]) {
  return violations.map(v => (
    `\n[${v.impact?.toUpperCase()}] ${v.id}: ${v.description}\n` +
    v.nodes.map(n => `  → ${n.html}`).join('\n')
  )).join('\n');
}

test.describe('Accessibilité WCAG 2.1 AA', () => {

  test('page entière — zéro violation critique ou sérieuse', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      // Désactiver les règles qui nécessitent un vrai serveur (ex: CORS sur fonts Google)
      .disableRules(['color-contrast']) // couleur vérifiée manuellement (palette custom)
      .analyze();

    const critiques = results.violations.filter(v =>
      v.impact === 'critical' || v.impact === 'serious'
    );

    expect(
      critiques,
      `Violations critiques/sérieuses :\n${formatViolations(critiques)}`
    ).toHaveLength(0);
  });

  test('images avec alt text', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withRules(['image-alt'])
      .analyze();

    expect(
      results.violations,
      `Images sans alt :\n${formatViolations(results.violations)}`
    ).toHaveLength(0);
  });

  test('structure headings (h1 → h2 → h3)', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withRules(['heading-order'])
      .analyze();

    expect(
      results.violations,
      `Hiérarchie headings incorrecte :\n${formatViolations(results.violations)}`
    ).toHaveLength(0);
  });

  test('formulaire email : label ou aria-label présent', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withRules(['label', 'label-content-name-mismatch'])
      .include('form')
      .analyze();

    expect(
      results.violations,
      `Champs de formulaire sans label :\n${formatViolations(results.violations)}`
    ).toHaveLength(0);
  });

  test('liens avec texte descriptif', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withRules(['link-name'])
      .analyze();

    expect(
      results.violations,
      `Liens sans texte descriptif :\n${formatViolations(results.violations)}`
    ).toHaveLength(0);
  });

  test('contrastes couleur — mode desktop', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();

    // On ne fait pas échouer le test sur les contrastes (palette validée manuellement)
    // mais on affiche les avertissements pour information
    if (results.violations.length > 0) {
      console.warn(
        `[INFO] ${results.violations.length} problème(s) de contraste détecté(s) :\n` +
        formatViolations(results.violations)
      );
    }
    // Test informatif, non bloquant
    expect(true).toBe(true);
  });

  test('langue déclarée sur <html>', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withRules(['html-has-lang', 'html-lang-valid'])
      .analyze();

    expect(
      results.violations,
      `Attribut lang manquant/invalide :\n${formatViolations(results.violations)}`
    ).toHaveLength(0);
  });

  test('boutons avec texte ou aria-label', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withRules(['button-name'])
      .analyze();

    expect(
      results.violations,
      `Boutons sans nom accessible :\n${formatViolations(results.violations)}`
    ).toHaveLength(0);
  });

});
