import { chromium } from '@playwright/test';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, '../internal/tunnel-vente/fiche-process-tunnel-vente.html');
const outputPath = join(__dirname, '../internal/tunnel-vente/fiche-process-tunnel-vente-cyril.pdf');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

console.log('⏳ Chargement de la fiche...');
await page.goto(pathToFileURL(sourcePath).href, { waitUntil: 'networkidle' });

// Attendre le chargement des polices Google Fonts
await page.waitForTimeout(2000);

console.log('📄 Génération du PDF...');
await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '12mm', right: '10mm', bottom: '12mm', left: '10mm' },
});

await browser.close();
console.log('✅ PDF généré : internal/tunnel-vente/fiche-process-tunnel-vente-cyril.pdf');
