# Mobile performance pass — 2026-06-06

Goal: mobile Lighthouse ≥ 90 without dropping desktop below 95; mobile LCP < 2.8s
(ideally < 2.5s). Root cause identified in the brief: the hero LCP image was a
single Unsplash `w=1920` photo (~400 KB) served to every viewport, including
390px phones. TBT was already 0ms and CLS 0, so this was a transfer problem, not
a CPU or layout problem.

## Baseline (Lighthouse CLI, 2026-06-06)

| Metric              | Mobile | Desktop |
| ------------------- | ------ | ------- |
| Performance         | 78     | 95      |
| LCP                 | 4.9s   | —       |
| FCP                 | 1.9s   | —       |
| TBT                 | 0ms    | —       |
| CLS                 | 0      | —       |

Baseline build — main entry chunk: **467.51 kB (150.78 kB gzip)**.

## Changes

1. **Hero image (root cause).** `src/pages/Home.jsx` now serves the hero through a
   responsive `srcSet` + `sizes="100vw"`. Unsplash `auto=format` returns AVIF/WebP
   automatically based on the browser `Accept` header, so one srcset covers all
   modern formats. A 390px phone (DPR 2) now pulls the `w=828` AVIF variant
   (≈ 40–80 KB) instead of the `w=1920` JPEG (~400 KB) — comfortably under the
   120 KB mobile target. `fetchPriority="high"` + `loading="eager"` are kept on the
   single LCP image; `decoding="async"` added.
2. **Preload + preconnect.** `index.html` adds `preconnect` to
   `images.unsplash.com` and a responsive `<link rel="preload" as="image">` using
   `imagesrcset` + `imagesizes="100vw"`. Because the preload mirrors the `<img>`
   srcset exactly, the browser starts the correct variant during HTML parse and
   reuses it (no double download). `imagesizes` guarantees mobile never preloads
   the desktop image.
3. **Above-the-fold motion.** `Home.jsx` uses `useReducedMotion()` plus a
   `(max-width: 768px)` check to skip the hero entrance + scroll-indicator
   entrance animations on phones and for users who prefer reduced motion. Visual
   design is unchanged on desktop.
4. **Bundle splitting.** `vite.config.js` `manualChunks` splits `react`/`react-dom`,
   `react-router`, and `framer-motion` into dedicated, separately-cacheable
   vendor chunks. Main entry chunk dropped from **150.78 kB → 36.30 kB gzip**.
   (Note: `three` / `@react-three` are in package.json but not imported anywhere
   in `src/`, so they were already absent from the bundle.)
5. **Analytics.** Verified, no change needed. Google Analytics injects its script
   `async` only after consent (`hasAnalyticsConsent()`), and Vercel Analytics only
   mounts after consent. Both render at the app root, off the critical path.

### Build after changes

| Chunk           | Raw       | Gzip      |
| --------------- | --------- | --------- |
| index (main)    | 113.35 kB | 36.30 kB  |
| react-vendor    | 184.32 kB | 58.24 kB  |
| framer-motion   | 128.34 kB | 42.64 kB  |
| react-router    | 40.55 kB  | 14.49 kB  |
| Home            | 10.98 kB  | 2.52 kB   |

## Verification status

- `pnpm build` — passes.
- `eslint` on changed files — passes.
- Production preview server — serves HTTP 200, responsive preload present in HTML.
- `pnpm test:smoke` — **could not run in the CI/web container**: Playwright's
  Chromium download is blocked by the environment network allowlist and no system
  browser is installed. Run locally: `pnpm test:smoke`.
- Lighthouse before/after — **could not run here**: the container network
  allowlist blocks `images.unsplash.com`, the production site, and the Vercel
  preview, so no live URL is reachable to measure. Run against the Vercel preview
  once this branch deploys (mobile + desktop) and record the numbers below.

> Environment note: this work was done in a Claude Code web/CI container whose
> outbound network is restricted to an allowlist (npm registry + GitHub only).
> That blocked (a) downloading the Unsplash source to bake local files and (b)
> running Lighthouse/Playwright against any live URL. The implemented fix targets
> the exact root cause and works for real end users (who are not behind the
> allowlist).

## Optional follow-up: fully self-host the hero

To remove the third-party request entirely, run `node scripts/optimize-hero.mjs`
(after `pnpm add -D sharp`) on a machine with network access. It downloads the
source once and emits local AVIF/WebP variants to `public/images/hero/`. Then
point the `HERO_*` constants in `Home.jsx` and the preload in `index.html` at the
local files (wrapping the `<img>` in a `<picture>` with AVIF + WebP `<source>`s).

## Results after deploy (fill in)

| Metric        | Mobile (before) | Mobile (after) | Desktop (before) | Desktop (after) |
| ------------- | --------------- | -------------- | ---------------- | --------------- |
| Performance   | 78              |                | 95               |                 |
| LCP           | 4.9s            |                | —                |                 |
| FCP           | 1.9s            |                | —                |                 |
| TBT           | 0ms             |                | —                |                 |
| CLS           | 0               |                | —                |                 |
| Speed Index   |                 |                |                  |                 |
