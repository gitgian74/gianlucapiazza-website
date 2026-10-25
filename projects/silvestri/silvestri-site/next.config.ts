import type { NextConfig } from "next";

/**
 * The normal build is a server build on Vercel. Setting NEXT_STATIC_EXPORT=true
 * and NEXT_BASE_PATH=/a produces a self-contained static site rooted at that
 * path, which is how the two Capital variants are published side by side inside
 * a single deployment instead of one Vercel project each.
 */
const staticExport = process.env.NEXT_STATIC_EXPORT === "true";
const basePath = process.env.NEXT_BASE_PATH || "";

const config: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"], unoptimized: staticExport },
  /** Mirrored so client components can prefix public/ files themselves — see lib/site.ts asset(). */
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(staticExport ? { output: "export" as const } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default config;
