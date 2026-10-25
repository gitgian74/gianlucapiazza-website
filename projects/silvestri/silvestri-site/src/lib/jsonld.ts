import { COPYRIGHT_HOLDER, FOUNDED, LEGAL_NAME, OFFICES, SOCIALS } from "@/content/firm";
import type { Dict } from "@/content/types";
import { PATHS, type Locale, type PageKey } from "@/lib/routes";
import { abs } from "@/lib/site";

/**
 * Structured data carries only facts that are also visible on the page, in the
 * language of the page. Claims the sources do not support are left out:
 * no parent/subsidiary relationship, no awards, no review or rating data.
 */

const ID = {
  firm: abs("/#firm"),
  website: abs("/#website"),
  lorenzo: abs("/#lorenzo-silvestri"),
  guillermina: abs("/#guillermina-rodriguez-carpin"),
} as const;

const addresses = () =>
  OFFICES.map((o) => ({
    "@type": "PostalAddress" as const,
    streetAddress: o.street[0],
    addressLocality: o.city,
    addressCountry: o.country === "United States" ? "US" : o.country === "Italy" ? "IT" : "UY",
  }));

const firm = (d: Dict) => ({
  "@type": "LegalService",
  "@id": ID.firm,
  name: LEGAL_NAME,
  alternateName: "Silvestri International",
  url: abs(PATHS[d.locale].home),
  foundingDate: FOUNDED,
  description: d.meta.home.description,
  address: addresses(),
  telephone: OFFICES[0]?.phones[0]?.display,
  email: OFFICES[0]?.emails[0],
  availableLanguage: ["it", "en", "es", "fr"],
  areaServed: [
    { "@type": "Country", name: "Italy" },
    { "@type": "AdministrativeArea", name: "Florida, United States" },
  ],
  sameAs: SOCIALS.filter((s) => s.id !== "linkedin-lorenzo").map((s) => s.href),
  member: [{ "@id": ID.lorenzo }, { "@id": ID.guillermina }],
  memberOf: { "@type": "Organization", name: "Italy-America Chamber of Commerce Southeast, Miami" },
});

const people = (d: Dict) =>
  d.professionals.people.map((p) => ({
    "@type": "Person",
    "@id": p.id === "lorenzo" ? ID.lorenzo : ID.guillermina,
    name: p.name,
    jobTitle: p.role,
    worksFor: { "@id": ID.firm },
    email: p.emails[0],
    description: p.limit ? `${p.role}. ${p.limit}.` : p.role,
    knowsLanguage: p.id === "lorenzo" ? ["it", "en", "es", "fr"] : ["it", "es", "en"],
    ...(p.id === "lorenzo"
      ? {
          sameAs: ["https://www.linkedin.com/in/lorenzo-silvestri-2b74276/"],
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Bar admission",
              name: "Bar of Rome, 2007",
            },
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Certification",
              name: "The Florida Bar — Certified Foreign Legal Consultant in Italian law, 2016",
            },
          ],
        }
      : {}),
  }));

export function graphFor(d: Dict, page: PageKey) {
  const locale: Locale = d.locale;
  const base: Record<string, unknown>[] = [];

  if (page === "home") {
    base.push(
      firm(d),
      ...people(d),
      {
        "@type": "FAQPage",
        "@id": abs(`${PATHS[locale].home}#faq`),
        inLanguage: locale,
        // Exactly the four questions rendered on the page — no extras.
        mainEntity: d.home.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "WebSite",
        "@id": ID.website,
        url: abs("/"),
        name: "Silvestri International",
        inLanguage: ["en", "it"],
        publisher: { "@id": ID.firm },
        copyrightHolder: { "@type": "Organization", name: COPYRIGHT_HOLDER },
      },
    );
  }

  if (page === "practice") {
    base.push({
      "@type": "ItemList",
      "@id": abs(`${PATHS[locale].practice}#areas`),
      inLanguage: locale,
      name: d.practice.hero.title,
      itemListElement: d.practice.areas.map((area, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: area.title,
        url: abs(`${PATHS[locale].practice}#${area.id}`),
      })),
    });
  }

  if (page === "about") {
    base.push({
      "@type": "AboutPage",
      "@id": abs(`${PATHS[locale].about}#about`),
      inLanguage: locale,
      name: d.meta.about.ogTitle,
      url: abs(PATHS[locale].about),
      mainEntity: { "@id": ID.firm },
    });
  }

  if (page === "professionals") {
    base.push(...people(d));
  }

  if (page === "contact") {
    base.push({
      "@type": "ContactPage",
      "@id": abs(`${PATHS[locale].contact}#contact`),
      inLanguage: locale,
      name: d.meta.contact.ogTitle,
      url: abs(PATHS[locale].contact),
      mainEntity: { "@id": ID.firm },
    });
  }

  return { "@context": "https://schema.org", "@graph": base };
}
