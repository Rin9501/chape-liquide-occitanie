import { chromium } from '@playwright/test';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
import QRCode from 'qrcode';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, '../internal/cartes-visite/carte-visite-clo.html');
const outputRecto = join(__dirname, '../internal/cartes-visite/carte-visite-recto-print.png');
const outputVerso = join(__dirname, '../internal/cartes-visite/carte-visite-verso-print.png');

// QR code verso : 40px CSS × 2.5 deviceScaleFactor = 100px physiques ≈ 8.5mm sur la carte
const qrDataUrl = await QRCode.toDataURL('https://chapeliquide-occitanie.fr', {
  width: 100,
  margin: 1,
  color: { dark: '#2C2C2C', light: '#F5F0EB' },
  errorCorrectionLevel: 'H',
});

// deviceScaleFactor 2.5 → pcard 420×267px → 1050×667px physiques
// À 300 DPI : 1050px ÷ 300 × 25.4 = 88.9mm (85mm + fond perdu 3mm/côté) ✓
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ deviceScaleFactor: 2.5 });
const page = await context.newPage();
await page.setViewportSize({ width: 1400, height: 900 });

console.log('⏳ Chargement du HTML...');
await page.goto(pathToFileURL(sourcePath).href, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500); // attendre Google Fonts (Manrope)

// Injecte le QR code dans le verso
await page.evaluate((src) => {
  const img = document.getElementById('qr-img-cv');
  if (img) img.src = src;
}, qrDataUrl);
await page.waitForTimeout(150);

console.log('📸 Export recto...');
const rectoEl = page.locator('.cards-row .card-col').nth(0).locator('.bleed');
await rectoEl.screenshot({ path: outputRecto });

console.log('📸 Export verso...');
const versoEl = page.locator('.cards-row .card-col').nth(1).locator('.bleed');
await versoEl.screenshot({ path: outputVerso });

await browser.close();

console.log('');
console.log('✅ Fichiers générés :');
console.log('   → internal/cartes-visite/carte-visite-recto-print.png');
console.log('   → internal/cartes-visite/carte-visite-verso-print.png');
console.log('');
console.log('📐 Dimensions : ~1050×681px physiques ≈ 89×57mm à 300 DPI');
console.log('   (fond perdu 3mm inclus — zone de coupe VistaPrint OK)');
console.log('');
console.log('🖨️  VistaPrint : uploader recto-print.png + verso-print.png');
console.log('   Format : Carte de visite standard · Recto/Verso · Qualité Premium');
