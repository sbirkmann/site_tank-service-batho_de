/**
 * Bild-Pipeline: erzeugt aus den Originalfotos (public/img/*.jpg) responsive
 * WebP-Varianten in public/img/gen und schreibt lib/images.json mit Maßen.
 */
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'public/img';
const OUT = 'public/img/gen';
const WIDTHS = [320, 480, 640, 800, 1000, 1200];
await mkdir(OUT, { recursive: true });
const manifest = {};
for (const file of (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const name = path.parse(file).name;
  const img = sharp(path.join(SRC, file));
  const { width, height } = await img.metadata();
  const widths = WIDTHS.filter((w) => w < width);
  widths.push(width);
  for (const w of widths) {
    await img.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  manifest[name] = { width, height, widths };
}
await writeFile('lib/images.json', JSON.stringify(manifest, null, 2));
console.log('images:', Object.keys(manifest).join(', '));
