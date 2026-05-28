import { chromium } from '@playwright/test';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '../public/guide-chape-liquide-2026.pdf');

const publicDir = join(__dirname, '../public');
if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

console.log('⏳ Chargement de /guide-pdf...');
await page.goto('http://localhost:4321/guide-pdf', {
  waitUntil: 'networkidle',
  timeout: 30000,
});

// Attendre le chargement des polices Google Fonts
await page.waitForTimeout(3000);

console.log('📄 Génération du PDF...');
await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();
console.log('✅ PDF généré : public/guide-chape-liquide-2026.pdf');
