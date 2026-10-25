import Link from "next/link";
import type { CtaLink } from "@/content/types";
import { PATHS, type Locale } from "@/lib/routes";

export function Rule({ strong = false }: { strong?: boolean }) {
  return (
    <div className="shell">
      <hr className={strong ? "rule rule--strong" : "rule"} />
    </div>
  );
}

export function Kicker({ children, ink = false }: { children: React.ReactNode; ink?: boolean }) {
  return <p className={ink ? "kicker kicker--ink" : "kicker"}>{children}</p>;
}

export function resolveHref(locale: Locale, link: CtaLink): string {
  if (link.href) return link.href;
  if (link.page) return PATHS[locale][link.page];
  return PATHS[locale].home;
}

export function CtaLinks({
  locale,
  links,
  variant,
  tone = "light",
}: {
  locale: Locale;
  links: CtaLink[];
  variant: "buttons" | "inline";
  /** "ink" is for the dark hero, where a dark ghost button would fail contrast. */
  tone?: "light" | "ink";
}) {
  if (variant === "inline") {
    return (
      <div className="cta__links">
        {links.map((link) => {
          const href = resolveHref(locale, link);
          return link.href ? (
            <a key={link.label} href={href}>
              {link.label}
            </a>
          ) : (
            <Link key={link.label} href={href}>
              {link.label}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="btn-row">
      {links.map((link, index) => {
        const href = resolveHref(locale, link);
        const first = tone === "ink" ? "btn--primary" : "btn--solid";
        const rest = tone === "ink" ? "btn--ghost-ink" : "btn--ghost";
        const className = `btn ${index === 0 ? first : rest}`;
        return link.href ? (
          <a key={link.label} href={href} className={className}>
            {link.label}
          </a>
        ) : (
          <Link key={link.label} href={href} className={className}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export function CtaBanner({
  locale,
  title,
  text,
  links,
}: {
  locale: Locale;
  title: string;
  text: string;
  links: CtaLink[];
}) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__inner">
        <h2 className="cta__title" id="cta-title">
          {title}
        </h2>
        <p className="cta__text">{text}</p>
        <CtaLinks locale={locale} links={links} variant="inline" />
      </div>
    </section>
  );
}

export function ScopeStrip({
  scope,
}: {
  scope: { directLabel: string; directText: string; coordinatedLabel: string; coordinatedText: string };
}) {
  return (
    <section className="scope" aria-label={`${scope.directLabel} / ${scope.coordinatedLabel}`}>
      <div className="scope__inner">
        <div className="scope__cell">
          <p className="scope__label">{scope.directLabel}</p>
          <p className="scope__text">{scope.directText}</p>
        </div>
        <div className="scope__cell">
          <p className="scope__label">{scope.coordinatedLabel}</p>
          <p className="scope__text">{scope.coordinatedText}</p>
        </div>
      </div>
    </section>
  );
}

export function Panels({ panels }: { panels: { title: string; text: string }[] }) {
  return (
    <div className="panels">
      {panels.map((panel) => (
        <div key={panel.title}>
          <h3>{panel.title}</h3>
          <p>{panel.text}</p>
        </div>
      ))}
    </div>
  );
}
