import type { AreaId, Locale, OfficeId, PageKey } from "@/lib/routes";

export interface MediaRef {
  /** What the final image must show. Shown in the placeholder while unlicensed. */
  subject: string;
  /** Required ratio / crop, shown in the placeholder. */
  spec: string;
  /** Reference stock candidate, licence NOT verified. See docs/ASSET-REGISTRY.md. */
  referenceSrc?: string;
  alt: string;
}

export interface CtaLink {
  label: string;
  page?: PageKey;
  href?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface AreaRow {
  id: AreaId;
  title: string;
  text: string;
  delivery: string;
}

export interface AreaDetail {
  id: AreaId;
  num: string;
  title: string;
  paragraphs: string[];
  direct: string;
  coordinated: string | null;
  tags: string[];
}

export interface Person {
  id: "lorenzo" | "guillermina";
  name: string;
  role: string;
  /** Mandatory qualification limit, rendered as a visible badge. */
  limit: string | null;
  bio: string[];
  facts: { label: string; value: string }[];
  emails: string[];
  links: { label: string; href: string }[];
  portrait: MediaRef;
}

export interface Dict {
  locale: Locale;
  localeTag: string;
  ogLocale: string;

  /** Country names in the page's own language. */
  countries: Record<OfficeId, string>;

  nav: {
    skip: string;
    links: Record<PageKey, string>;
    cta: { label: string; page: PageKey };
    contactCta: string;
    langCode: string;
    langLabel: string;
    menuOpen: string;
    menuClose: string;
    menuLabel: string;
  };

  meta: Record<PageKey, PageMeta>;

  scope: {
    directLabel: string;
    directText: string;
    coordinatedLabel: string;
    coordinatedText: string;
  };

  home: {
    hero: {
      kicker: string;
      titleLines: [string, string];
      lead: string;
      /** Same sentence with the undocumented "first firm" superlative. Flag-gated. */
      leadClaim: string;
      ctas: CtaLink[];
      clocksLabel: string;
      /** Comandi del video di sfondo: riproduzione e scelta fra giorno e notte. */
      media: {
        pause: string;
        play: string;
        viewLabel: string;
        day: string;
        night: string;
      };
    };
    figures: { value: string; label: string }[];
    bridge: {
      kicker: string;
      title: string;
      cells: { tag: string; title: string; text: string; media: MediaRef }[];
    };
    stages: {
      kicker: string;
      title: string;
      lead: string;
      head: { step: string; us: string; it: string };
      items: { num: string; title: string; us: string; it: string }[];
      note: string;
    };
    hours: {
      kicker: string;
      title: string;
      lead: string;
      officeLabel: string;
      nowLabel: string;
      localLegend: string;
      overlapLegend: string;
      overlapUnavailable: string;
      note: string;
    };
    areas: { kicker: string; title: string; rows: AreaRow[]; more: string };
    network: { kicker: string; title: string; text: string; media: MediaRef };
    faq: { kicker: string; title: string; items: { q: string; a: string }[] };
    cta: { title: string; text: string; links: CtaLink[] };
  };

  practice: {
    hero: { kicker: string; title: string; lead: string };
    jump: string;
    areas: AreaDetail[];
    deliveryLabels: { direct: string; coordinated: string };
    cta: { title: string; text: string; links: CtaLink[] };
  };

  about: {
    /** `titleClaim` carries the superlative; used only when the claim flag is on. */
    hero: { kicker: string; title: string; titleClaim: string; lead: string };
    functions: { kicker: string; title: string; items: { num: string; title: string; text: string }[] };
    mission: { kicker: string; title: string; paragraphs: string[]; media: MediaRef };
    timeline: { kicker: string; title: string; items: { year: string; text: string }[] };
    network: { kicker: string; title: string; panels: { title: string; text: string }[]; media: MediaRef };
    cta: { title: string; text: string; links: CtaLink[] };
  };

  professionals: {
    hero: { kicker: string; title: string; lead: string };
    people: Person[];
    behind: { title: string; text: string };
    working: { title: string; text: string };
    cta: { title: string; text: string; links: CtaLink[] };
  };

  contact: {
    hero: { kicker: string; title: string; lead: string };
    officeRoles: Record<OfficeId, string>;
    fieldLabels: { address: string; call: string; email: string; web: string; hours: string };
    hoursValue: string;
    phoneLabels: { office: string; direct: string; main: string; fax: string };
    map: { title: string; consent: string; load: string; provider: string };
    notes: { title: string; text: string }[];
  };

  footer: {
    officeRoles: Record<OfficeId, string>;
    connect: string;
    firmPage: string;
    lorenzoPage: string;
    copyright: string;
    disclaimer: string;
    phoneLabels: { office: string; direct: string; main: string; fax: string };
  };

  notFound: { title: string; text: string; cta: string };

  preview: { label: string; items: string[] };
}
