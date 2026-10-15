// Génère les versions WebP responsives des photos du catalogue (src/data/photos.js),
// un aperçu flou (LQIP) pour le chargement progressif, et l'image de partage social.
// Usage : npm run photos  (ajouter --force pour tout régénérer)

import { mkdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { photoCatalog } from '../src/data/photos.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_DIR = path.resolve(here, '../../photo');
const OUTPUT_DIR = path.resolve(here, '../public/photos');
const META_FILE = path.resolve(here, '../src/data/photos.meta.json');
const OG_IMAGE = path.resolve(here, '../public/og-image.jpg');
const OG_SOURCE_ID = 'service-table';

const TARGET_WIDTHS = [480, 960, 1600];
const QUALITY = 74;
const force = process.argv.includes('--force');

// Largeurs à produire : on saute une taille trop proche de l'original.
function widthsFor(sourceWidth) {
  const widths = TARGET_WIDTHS.filter((w) => w < sourceWidth * 0.85);
  widths.push(Math.min(sourceWidth, TARGET_WIDTHS.at(-1)));
  return [...new Set(widths)];
}

async function isFresh(output, sourceTime) {
  try {
    return (await stat(output)).mtimeMs >= sourceTime;
  } catch {
    return false;
  }
}

await mkdir(OUTPUT_DIR, { recursive: true });

const meta = {};
let written = 0;

for (const photo of photoCatalog) {
  const sourcePath = path.join(SOURCE_DIR, photo.file);
  const sourceTime = (await stat(sourcePath)).mtimeMs;

  // Applique l'orientation EXIF une fois pour toutes.
  const { data, info } = await sharp(sourcePath).rotate().toBuffer({ resolveWithObject: true });
  const widths = widthsFor(info.width);

  for (const width of widths) {
    const output = path.join(OUTPUT_DIR, `${photo.id}-${width}.webp`);
    if (!force && (await isFresh(output, sourceTime))) continue;
    await sharp(data).resize({ width }).webp({ quality: QUALITY, effort: 5 }).toFile(output);
    written += 1;
  }

  const lqip = await sharp(data).resize({ width: 24 }).webp({ quality: 35 }).toBuffer();
  meta[photo.id] = {
    width: info.width,
    height: info.height,
    widths,
    lqip: `data:image/webp;base64,${lqip.toString('base64')}`,
  };

  if (photo.id === OG_SOURCE_ID) {
    await sharp(data)
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(OG_IMAGE);
  }
}

await writeFile(META_FILE, `${JSON.stringify(meta, null, 2)}\n`);
console.log(`${photoCatalog.length} photos cataloguées, ${written} fichiers écrits dans public/photos.`);
