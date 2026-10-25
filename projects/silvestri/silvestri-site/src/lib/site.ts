export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://silvestri-international.com").replace(/\/$/, "");

/** Indexing is opt-in. Every preview build stays out of search engines. */
export const INDEXABLE = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

/** "First Italian law firm in Florida" — client's own live claim, undocumented. */
export const CLAIM_FIRST_FIRM = process.env.NEXT_PUBLIC_CLAIM_FIRST_FIRM === "true";

/** Visual variant. "modernist" is the verified Silvestri system; others are provisional. */
export const THEMES = ["modernist", "modernist-blue", "institutional", "capital-a", "capital-b"] as const;
export type Theme = (typeof THEMES)[number];

const requested = process.env.NEXT_PUBLIC_THEME ?? "";
export const THEME: Theme = (THEMES as readonly string[]).includes(requested)
  ? (requested as Theme)
  : "modernist";

export const abs = (path: string) => `${SITE_URL}${path}`;

/**
 * Prefix for files we serve out of public/. Next rewrites basePath into its own
 * assets and into <Link>, but not into a bare src on <img>, <video> or <source>,
 * so a build published under /a would ask the deployment root for them and get
 * a 404. next.config.ts mirrors NEXT_BASE_PATH into this public variable so the
 * value also reaches client components.
 */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
