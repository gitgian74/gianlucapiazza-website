import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PreviewNote } from "@/components/PreviewNote";
import { CtaBanner, Kicker, ScopeStrip } from "@/components/Sections";
import { dict } from "@/content";
import { graphFor } from "@/lib/jsonld";
import type { Locale } from "@/lib/routes";

export function PracticeView({ locale }: { locale: Locale }) {
  const d = dict(locale);

  return (
    <>
      <PreviewNote locale={locale} />
      <Nav locale={locale} page="practice" />

      <main id="main">
        <header className="hero hero--inner">
          <div className="hero__body">
            <Kicker>{d.practice.hero.kicker}</Kicker>
            <h1 className="hero__title">{d.practice.hero.title}</h1>
            <p className="hero__lead">{d.practice.hero.lead}</p>
            <nav className="chips" aria-label={d.practice.jump}>
              {d.practice.areas.map((area) => (
                <a key={area.id} href={`#${area.id}`} className="chip">
                  {area.title}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <ScopeStrip scope={d.scope} />

        <div className="shell" id="areas">
          {d.practice.areas.map((area) => (
            <section key={area.id} className="area" id={area.id} aria-labelledby={`${area.id}-title`}>
              <div className="area__head">
                <p className="area__num">{area.num}</p>
                <div>
                  <h2 className="area__title" id={`${area.id}-title`}>
                    {area.title}
                  </h2>
                  <div className="area__body">
                    {area.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>

                  <dl className="area__delivery">
                    <dt>{d.practice.deliveryLabels.direct}</dt>
                    <dd>{area.direct}</dd>
                    {area.coordinated ? (
                      <>
                        <dt>{d.practice.deliveryLabels.coordinated}</dt>
                        <dd>{area.coordinated}</dd>
                      </>
                    ) : null}
                  </dl>

                  <ul className="tags">
                    {area.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <CtaBanner locale={locale} title={d.practice.cta.title} text={d.practice.cta.text} links={d.practice.cta.links} />
      </main>

      <Footer locale={locale} />
      <JsonLd data={graphFor(d, "practice")} />
    </>
  );
}
