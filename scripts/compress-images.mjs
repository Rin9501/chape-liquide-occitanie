#!/usr/bin/env node
// Pipeline de compression d'images — réutilisable tel quel sur les futurs sites
// clients Présence Locale (Astro + public/uploads/, ou tout dossier statique).
//
// Objectif : plus jamais de photo chantier brute (souvent 9-12 Mo en sortie
// d'appareil photo/téléphone) livrée telle quelle au navigateur. Redimensionne
// et recompresse en JPEG progressif (mozjpeg), en cherchant la qualité la plus
// haute qui tient sous la taille cible.
//
// Usage :
//   node scripts/compress-images.mjs                  -> traite public/uploads
//   node scripts/compress-images.mjs --dir=chemin      -> traite un autre dossier
//   node scripts/compress-images.mjs --dry-run         -> affiche le rapport sans écrire
//   node scripts/compress-images.mjs --max-width=1600  -> largeur max différente (def. 2000)
//   node scripts/compress-images.mjs --target-kb=300   -> taille cible différente (def. 300)
//
// Idempotent : un fichier déjà sous la taille cible est ignoré (safe à relancer
// à chaque ajout de photo, pas seulement en one-shot).

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const prefix = `--${name}=`;
  const found = args.find((a) => a.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
};

const TARGET_DIR = path.resolve(process.cwd(), flag('dir', 'public/uploads'));
const MAX_WIDTH = parseInt(flag('max-width', '2000'), 10);
const TARGET_BYTES = parseInt(flag('target-kb', '300'), 10) * 1024;
const DRY_RUN = args.includes('--dry-run');
const QUALITY_START = 82;
const QUALITY_FLOOR = 55;
const QUALITY_STEP = 5;

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

function humanKB(bytes) {
  return `${(bytes / 1024).toFixed(0)} Kio`;
}

async function compressOne(filePath) {
  const original = await fs.readFile(filePath);
  const originalSize = original.length;

  if (originalSize <= TARGET_BYTES) {
    return { filePath, originalSize, finalSize: originalSize, skipped: true };
  }

  const ext = path.extname(filePath).toLowerCase();
  let quality = QUALITY_START;
  let buffer;

  for (; quality >= QUALITY_FLOOR; quality -= QUALITY_STEP) {
    let pipeline = sharp(original)
      .rotate() // auto-oriente selon l'EXIF puis le supprime — évite les photos qui apparaissent pivotées
      .resize({ width: MAX_WIDTH, withoutEnlargement: true });

    pipeline = ext === '.png'
      ? pipeline.png({ quality, compressionLevel: 9 })
      : pipeline.jpeg({ quality, mozjpeg: true, progressive: true });

    buffer = await pipeline.toBuffer();
    if (buffer.length <= TARGET_BYTES) break;
  }

  if (!DRY_RUN) {
    await fs.writeFile(filePath, buffer);
  }

  return { filePath, originalSize, finalSize: buffer.length, skipped: false, quality };
}

async function main() {
  const entries = await fs.readdir(TARGET_DIR, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && IMAGE_EXTENSIONS.has(path.extname(e.name).toLowerCase()))
    .map((e) => path.join(TARGET_DIR, e.name))
    .sort();

  if (files.length === 0) {
    console.log(`Aucune image trouvée dans ${TARGET_DIR}`);
    return;
  }

  console.log(`${DRY_RUN ? '[dry-run] ' : ''}Traitement de ${files.length} image(s) dans ${TARGET_DIR}`);
  console.log(`Cible : <= ${humanKB(TARGET_BYTES)}, largeur max ${MAX_WIDTH}px\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let processedCount = 0;

  for (const filePath of files) {
    const result = await compressOne(filePath);
    totalBefore += result.originalSize;
    totalAfter += result.finalSize;

    const name = path.basename(filePath);
    if (result.skipped) {
      console.log(`  = ${name} — déjà sous la cible (${humanKB(result.originalSize)}), ignoré`);
    } else {
      processedCount++;
      const pct = (100 * (1 - result.finalSize / result.originalSize)).toFixed(0);
      console.log(`  ✓ ${name} — ${humanKB(result.originalSize)} -> ${humanKB(result.finalSize)} (-${pct}%, q${result.quality})`);
    }
  }

  console.log(`\n${processedCount} image(s) compressée(s) sur ${files.length}.`);
  console.log(`Poids total : ${humanKB(totalBefore)} -> ${humanKB(totalAfter)} (-${(100 * (1 - totalAfter / totalBefore)).toFixed(0)}%)`);
  if (DRY_RUN) console.log('\n(dry-run : rien n\'a été écrit sur disque)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
