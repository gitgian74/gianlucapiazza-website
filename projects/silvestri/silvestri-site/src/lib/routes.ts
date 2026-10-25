export const LOCALES = ["en", "it"] as const;
export type Locale = (typeof LOCALES)[number];

export const PAGE_KEYS = ["home", "practice", "about", "professionals", "contact"] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

/**
 * Slugs declared by the prototype's canonical tags. The Italian "-2"/"-3"
 * suffixes are kept deliberately: they may already be indexed and renaming
 * them needs an approved redirect map (see docs/OPEN-DATA.md).
 */
export const PATHS: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: "/",
    practice: "/practice-areas/",
    about: "/about/",
    professionals: "/professionals/",
    contact: "/contact/",
  },
  it: {
    home: "/it/",
    practice: "/it/servizi/",
    about: "/it/chi-siamo-2/",
    professionals: "/it/professionisti-3/",
    contact: "/it/contatti/",
  },
};

export const other = (locale: Locale): Locale => (locale === "en" ? "it" : "en");

/** Language switch target: the equivalent page, never the home page. */
export const alternatePath = (locale: Locale, page: PageKey) => PATHS[other(locale)][page];

export const AREA_IDS = [
  "corporate",
  "commercial",
  "ma",
  "real-estate",
  "tax",
  "immigration",
  "litigation",
] as const;
export type AreaId = (typeof AREA_IDS)[number];

export const OFFICE_IDS = ["miami", "rome", "montevideo"] as const;
export type OfficeId = (typeof OFFICE_IDS)[number];
