import type { MetadataRoute } from "next";
import { LEGAL_KEYS, PAGE_KEYS, PATHS } from "@/lib/routes";
import { INDEXABLE, abs } from "@/lib/site";
/** Required by `output: export`: both files are generated at build time. */
export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {
  // An unapproved preview is disallowed in robots.txt and lists nothing here.
  if (!INDEXABLE) return [];

  return [...PAGE_KEYS, ...LEGAL_KEYS].flatMap((page) =>
    (["en", "it"] as const).map((locale) => ({
      url: abs(PATHS[locale][page]),
      changeFrequency: "yearly" as const,
      priority: page === "home" ? 1 : 0.7,
      alternates: { languages: { en: abs(PATHS.en[page]), it: abs(PATHS.it[page]) } },
    })),
  );
}
