import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Media } from "@/components/Media";
import { Nav } from "@/components/Nav";
import { PreviewNote } from "@/components/PreviewNote";
import { CtaBanner, Kicker, Panels, Rule } from "@/components/Sections";
import { dict } from "@/content";
import { graphFor } from "@/lib/jsonld";
import type { Locale } from "@/lib/routes";
import { CLAIM_FIRST_FIRM } from "@/lib/site";

export function AboutView({ locale }: { locale: Locale }) {
  const d = dict(locale);

  return (
    <>
      <PreviewNote locale={locale} />
      <Nav locale={locale} page="about" />

      <main id="main">
        <header className="hero hero--inner">
          <div className="hero__body">
            <Kicker>{d.about.hero.kicker}</Kicker>
            <h1 className="hero__title">{CLAIM_FIRST_FIRM ? d.about.hero.titleClaim : d.about.hero.title}</h1>
            <p className="hero__lead">{d.about.hero.lead}</p>
          </div>
        </header>

        <Rule strong />

        <section className="section shell" aria-labelledby="functions-title">
          <Kicker>{d.about.functions.kicker}</Kicker>
          <h2 id="functions-title" style={{ fontSize: "var(--type-h2)", maxWidth: "26ch" }}>
            {d.about.functions.title}
          </h2>
          <div className="grid-split">
            {d.about.functions.items.map((item) => (
              <div key={item.num}>
                <p className="cell__tag">{item.num}</p>
                <h3 className="cell__title">{item.title}</h3>
                <p className="cell__text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--surface" aria-labelledby="mission-title">
          <div className="shell">
            <Kicker>{d.about.mission.kicker}</Kicker>
            <h2 id="mission-title" style={{ fontSize: "var(--type-h2)", maxWidth: "26ch", marginBottom: "24px" }}>
              {d.about.mission.title}
            </h2>
            <div className="grid-split" style={{ marginTop: "32px" }}>
              <div>
                {d.about.mission.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="cell__text" style={{ marginBottom: "16px", maxWidth: "52ch" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div>
                <Media media={d.about.mission.media} ratio="16-10" caption={d.about.mission.media.subject} />
              </div>
            </div>
          </div>
        </section>

        <section className="section shell" aria-labelledby="timeline-title">
          <Kicker>{d.about.timeline.kicker}</Kicker>
          <h2 id="timeline-title" style={{ fontSize: "var(--type-h2)", maxWidth: "26ch" }}>
            {d.about.timeline.title}
          </h2>
          <ol className="timeline">
            {d.about.timeline.items.map((item) => (
              <li key={item.year} className="timeline__item">
                <p className="timeline__year">{item.year}</p>
                <p className="timeline__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section--surface" aria-labelledby="about-network-title">
          <div className="shell">
            <Kicker>{d.about.network.kicker}</Kicker>
            <h2 id="about-network-title" style={{ fontSize: "var(--type-h2)", maxWidth: "26ch" }}>
              {d.about.network.title}
            </h2>
            <Panels panels={d.about.network.panels} />
            <div style={{ marginTop: "48px" }}>
              <Media media={d.about.network.media} ratio="21-9" caption={d.about.network.media.subject} />
            </div>
          </div>
        </section>

        <CtaBanner locale={locale} title={d.about.cta.title} text={d.about.cta.text} links={d.about.cta.links} />
      </main>

      <Footer locale={locale} />
      <JsonLd data={graphFor(d, "about")} />
    </>
  );
}
