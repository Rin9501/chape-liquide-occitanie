import { chromium } from '@playwright/test';
import { readFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = join(__dirname, '../public/logo/clo-horizontal-positif.svg');
const outDir = join(__dirname, '../public/email-signature');
const outputPath = join(outDir, 'logo-signature.png');

mkdirSync(outDir, { recursive: true });

const svg = readFileSync(svgPath, 'utf-8');
const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;">${svg}</body></html>`;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ deviceScaleFactor: 3 });
await page.setContent(html);

const svgEl = await page.$('svg');
await svgEl.screenshot({ path: outputPath, omitBackground: true });

await browser.close();
console.log('✅ Logo signature généré : public/email-signature/logo-signature.png');
