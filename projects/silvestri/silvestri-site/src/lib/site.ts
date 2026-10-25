export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://silvestri-international.com").replace(/\/$/, "");

/** Indexing is opt-in. Every preview build stays out of search engines. */
export const INDEXABLE = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

/** Stock media whose licence has not been verified. Off by default. */
export const REFERENCE_MEDIA = process.env.NEXT_PUBLIC_REFERENCE_MEDIA === "true";

/** "First Italian law firm in Florida" — client's own live claim, undocumented. */
export const CLAIM_FIRST_FIRM = process.env.NEXT_PUBLIC_CLAIM_FIRST_FIRM === "true";

/** Visual variant. "modernist" is the verified Silvestri system; others are provisional. */
export const THEMES = ["modernist", "institutional", "capital-a", "capital-b"] as const;
export type Theme = (typeof THEMES)[number];

const requested = process.env.NEXT_PUBLIC_THEME ?? "";
export const THEME: Theme = (THEMES as readonly string[]).includes(requested)
  ? (requested as Theme)
  : "modernist";

export const abs = (path: string) => `${SITE_URL}${path}`;
