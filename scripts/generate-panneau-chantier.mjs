import { chromium } from '@playwright/test';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
import QRCode from 'qrcode';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, '../internal/panneau-chantier/panneau-chantier-clo.html');
const outputPath = join(__dirname, '../internal/panneau-chantier/panneau-chantier-clo-print.png');

// Génère le QR code en PNG data URI (296px = 74px × 4 pour le deviceScaleFactor)
const qrDataUrl = await QRCode.toDataURL('https://chapeliquide-occitanie.fr', {
  width: 296,
  margin: 1,
  color: { dark: '#2C2C2C', light: '#F5F0EB' },
  errorCorrectionLevel: 'H',
});

// deviceScaleFactor 4 → 900×600px × 4 = 3600×2400px physiques
// À 150 DPI (grand format) : 3600 ÷ 150 × 2.54 = 60.96cm × 40.64cm ✓
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ deviceScaleFactor: 4 });
const page = await context.newPage();
await page.setViewportSize({ width: 1400, height: 900 });

console.log('⏳ Chargement du HTML...');
await page.goto(pathToFileURL(sourcePath).href, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500); // attendre Google Fonts (Manrope)

// Injecte le QR code dans le placeholder
await page.evaluate((src) => {
  document.getElementById('qr-img').src = src;
}, qrDataUrl);
await page.waitForTimeout(200);

console.log('📸 Export panneau...');
const panelEl = page.locator('.panel');
await panelEl.screenshot({ path: outputPath });

await browser.close();

console.log('');
console.log('✅ Fichier généré :');
console.log('   → internal/panneau-chantier/panneau-chantier-clo-print.png');
console.log('');
console.log('📐 Dimensions : 3600×2400px → 60×40 cm à 150 DPI');
console.log('   (grand format — 150 DPI standard pour panneaux chantier)');
console.log('');
console.log('🖨️  Imprimeur : panneau PVC rigide 3mm ou bâche avec oeillets');
console.log('   Format : 60×40 cm · Impression numérique grand format');
