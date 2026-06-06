#!/usr/bin/env node
/**
 * Generate optimized, self-hosted hero variants (AVIF + WebP) for the Home page.
 *
 * The Home hero currently streams from the Unsplash CDN with a responsive srcset
 * (auto=format -> AVIF/WebP). That already fixes the mobile-LCP regression. Run
 * this script when you want to fully self-host the hero (no third-party request
 * on the critical path) — it downloads the source once and emits local variants.
 *
 * Requirements (install on demand, kept out of the app dependency tree):
 *   pnpm add -D sharp
 *
 * Usage:
 *   node scripts/optimize-hero.mjs
 *
 * Output: public/images/hero/hero-<width>.avif / .webp
 *
 * After running, switch src/pages/Home.jsx HERO_* constants and the
 * <link rel="preload"> in index.html to point at /images/hero/* and wrap the
 * <img> in a <picture> with AVIF + WebP <source> elements.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '../public/images/hero');

// Same Unsplash photo used by the Home hero, requested at high resolution.
const SOURCE_URL =
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?fit=crop&q=90&w=2400';

// Mobile + desktop target widths. Quality tuned so the largest AVIF stays small.
const VARIANTS = [
  { width: 640, quality: 60 },
  { width: 828, quality: 60 },
  { width: 1280, quality: 62 },
  { width: 1920, quality: 64 },
  { width: 2400, quality: 66 },
];

async function main() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.error('Missing dependency "sharp". Install it first:\n\n  pnpm add -D sharp\n');
    process.exit(1);
  }

  console.log(`Downloading source: ${SOURCE_URL}`);
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`Download failed: HTTP ${res.status}`);
  const source = Buffer.from(await res.arrayBuffer());
  console.log(`  source size: ${(source.length / 1024).toFixed(0)} KB`);

  await mkdir(OUT_DIR, { recursive: true });

  for (const { width, quality } of VARIANTS) {
    const base = sharp(source).resize({ width, withoutEnlargement: true });

    const avif = await base.clone().avif({ quality }).toBuffer();
    const webp = await base.clone().webp({ quality: quality + 8 }).toBuffer();

    await writeFile(resolve(OUT_DIR, `hero-${width}.avif`), avif);
    await writeFile(resolve(OUT_DIR, `hero-${width}.webp`), webp);

    console.log(
      `  hero-${width}: AVIF ${(avif.length / 1024).toFixed(0)} KB | WebP ${(
        webp.length / 1024
      ).toFixed(0)} KB`
    );
  }

  console.log(`\nDone. Variants written to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
