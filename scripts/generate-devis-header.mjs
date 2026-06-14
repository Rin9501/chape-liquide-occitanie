import { chromium } from '@playwright/test';
import { readFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = join(__dirname, '../public/logo/clo-horizontal-positif.svg');
const outDir = join(__dirname, '../internal/devis');
const outputPath = join(outDir, 'entete-devis.png');

mkdirSync(outDir, { recursive: true });

const logoSvg = readFileSync(svgPath, 'utf-8');

const html = `<!DOCTYPE html>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=JetBrains+Mono:wght@600&display=swap" rel="stylesheet" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Manrope', sans-serif; }
  #entete {
    display: inline-flex;
    align-items: center;
    gap: 32px;
    padding: 24px;
    background: transparent;
  }
  .logo { height: 72px; width: auto; display: block; }
  .divider { width: 3px; height: 72px; background: #C4522A; border-radius: 2px; }
  .label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #7A736C;
    margin-bottom: 6px;
  }
  .phone {
    font-size: 52px;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: #2C2C2C;
    white-space: nowrap;
  }
</style>
</head>
<body>
  <div id="entete">
    <div class="logo">${logoSvg.replace('<svg ', '<svg class="logo" ')}</div>
    <div class="divider"></div>
    <div>
      <div class="label">Devis &amp; renseignements</div>
      <div class="phone">06 87 61 39 87</div>
    </div>
  </div>
</body>
</html>`;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ deviceScaleFactor: 3 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

const el = await page.$('#entete');
await el.screenshot({ path: outputPath, omitBackground: true });

await browser.close();
console.log('✅ En-tête devis généré : internal/devis/entete-devis.png');
