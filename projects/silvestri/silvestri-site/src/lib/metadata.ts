import type { Metadata } from "next";
import { dict } from "@/content";
import { PATHS, other, type Locale, type PageKey } from "@/lib/routes";
import { INDEXABLE, SITE_URL, abs } from "@/lib/site";

/**
 * One builder for every route, so canonical, hreflang and the social summaries
 * can never drift apart. Robots stay "noindex" until the release is approved.
 */
export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const d = dict(locale);
  const meta = d.meta[page];
  const canonical = PATHS[locale][page];

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        en: PATHS.en[page],
        it: PATHS.it[page],
        "x-default": PATHS.en[page],
      },
    },
    openGraph: {
      type: "website",
      siteName: "Silvestri International",
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: abs(canonical),
      locale: d.ogLocale,
      alternateLocale: dict(other(locale)).ogLocale,
    },
    twitter: {
      card: "summary",
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    robots: INDEXABLE
      ? { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
      : { index: false, follow: false, nocache: true },
  };
}
