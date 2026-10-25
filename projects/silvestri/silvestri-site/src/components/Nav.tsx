import Link from "next/link";
import { dict } from "@/content";
import { PAGE_KEYS, PATHS, alternatePath, type Locale, type PageKey } from "@/lib/routes";
import { MobileMenu, type MenuEntry } from "./MobileMenu";

export function Nav({ locale, page }: { locale: Locale; page: PageKey }) {
  const d = dict(locale);
  const items = PAGE_KEYS.filter((key) => key !== "home");
  const entries: MenuEntry[] = PAGE_KEYS.map((key) => ({
    label: d.nav.links[key],
    href: PATHS[locale][key],
    current: key === page,
  }));
  const langHref = alternatePath(locale, page);
  const ctaLabel = page === "contact" ? d.nav.contactCta : d.nav.cta.label;
  const ctaHref = page === "contact" ? "mailto:info@silvestri-international.com" : PATHS[locale].contact;

  return (
    <nav className="nav" aria-label={d.nav.menuLabel}>
      <div className="nav__inner">
        <Link href={PATHS[locale].home} className="nav__brand">
          SILVESTRI<span className="dot">.</span>
        </Link>

        <div className="nav__links">
          {items.map((key) => (
            <Link
              key={key}
              href={PATHS[locale][key]}
              className="nav__link"
              aria-current={key === page ? "page" : undefined}
            >
              {d.nav.links[key]}
            </Link>
          ))}
          <Link href={langHref} className="nav__lang" hrefLang={d.nav.langCode.toLowerCase()}>
            <span aria-hidden="true">{d.nav.langCode}</span>
            <span className="sr-only">{d.nav.langLabel}</span>
          </Link>
          {page === "contact" ? (
            <a href={ctaHref} className="btn btn--primary">
              {ctaLabel}
            </a>
          ) : (
            <Link href={ctaHref} className="btn btn--primary">
              {ctaLabel}
            </Link>
          )}
        </div>

        <MobileMenu
          entries={entries}
          openLabel={d.nav.menuOpen}
          closeLabel={d.nav.menuClose}
          menuLabel={d.nav.menuLabel}
          langHref={langHref}
          langCode={d.nav.langCode}
          langLabel={d.nav.langLabel}
          ctaLabel={d.nav.cta.label}
          ctaHref={PATHS[locale].contact}
        />
      </div>
    </nav>
  );
}
