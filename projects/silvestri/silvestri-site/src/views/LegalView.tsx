import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PreviewNote } from "@/components/PreviewNote";
import { Kicker, Rule } from "@/components/Sections";
import { dict } from "@/content";
import type { LegalKey, Locale } from "@/lib/routes";

/** One view for the three obligation pages: same shape, different obligation. */
export function LegalView({ locale, page }: { locale: Locale; page: LegalKey }) {
  const d = dict(locale);
  const c = d.legal[page];

  return (
    <>
      <PreviewNote locale={locale} />
      <Nav locale={locale} page={page} />

      <main id="main">
        <header className="section shell legal__head">
          <Kicker>{c.kicker}</Kicker>
          <h1 style={{ fontSize: "var(--type-h1)", maxWidth: "20ch" }}>{c.title}</h1>
          <p className="lead" style={{ maxWidth: "62ch" }}>
            {c.lead}
          </p>
        </header>

        <Rule />

        <div className="section shell legal">
          {c.sections.map((section) => (
            <section key={section.heading} className="legal__section">
              <h2 className="legal__heading">{section.heading}</h2>
              <div className="legal__body">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.checks ? (
                  <dl className="legal__checks">
                    {section.checks.map((check) => (
                      <div key={check.label}>
                        <dt>{check.label}</dt>
                        <dd>{check.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </section>
          ))}

          {/* Visibile anche in una release indicizzabile, di proposito: se resta
              qualcosa da fornire, la release non è pronta (docs/PRECHECK.md). */}
          <section className="legal__pending" aria-labelledby={`${page}-pending`}>
            <h2 id={`${page}-pending`}>{c.pending.heading}</h2>
            <p>{c.pending.text}</p>
            <ul>
              {c.pending.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer locale={locale} />
    </>
  );
}
