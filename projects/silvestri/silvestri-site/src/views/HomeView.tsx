import Link from "next/link";
import { Footer } from "@/components/Footer";
import { HeroMedia } from "@/components/HeroMedia";
import { JsonLd } from "@/components/JsonLd";
import { LocalClocks } from "@/components/LocalClocks";
import { Media } from "@/components/Media";
import { Nav } from "@/components/Nav";
import { OfficeHours } from "@/components/OfficeHours";
import { PreviewNote } from "@/components/PreviewNote";
import { CtaBanner, CtaLinks, Kicker, Rule, ScopeStrip } from "@/components/Sections";
import { dict } from "@/content";
import { graphFor } from "@/lib/jsonld";
import { PATHS, type Locale } from "@/lib/routes";
import { CLAIM_FIRST_FIRM } from "@/lib/site";

export function HomeView({ locale }: { locale: Locale }) {
  const d = dict(locale);
  const isoNow = new Date().toISOString();
  const hero = d.home.hero;

  return (
    <>
      <PreviewNote locale={locale} />
      <Nav locale={locale} page="home" />

      <main id="main">
        <header className="hero">
          {/* I filmati sono ospitati dal sito con licenza Pexels verificata, quindi
              non dipendono dal flag dei media di riferimento, che resta per le
              sole fotografie Unsplash non ancora licenziate. */}
          <HeroMedia labels={hero.media} />
          <div className="hero__scrim" aria-hidden="true" />
          <div className="hero__grid" aria-hidden="true" />

          <div className="hero__body">
            <Kicker ink>{hero.kicker}</Kicker>
            <h1 className="hero__title">
              <span>{hero.titleLines[0]}</span>
              <span>
                {hero.titleLines[1]}
                <span className="dot">.</span>
              </span>
            </h1>
            <p className="hero__lead">{CLAIM_FIRST_FIRM ? hero.leadClaim : hero.lead}</p>
            <div className="hero__actions">
              <CtaLinks locale={locale} links={hero.ctas} variant="buttons" tone="ink" />
            </div>
          </div>

          <LocalClocks isoNow={isoNow} label={hero.clocksLabel} />
        </header>

        <ScopeStrip scope={d.scope} />

        <section className="section shell" aria-label={d.home.figures.map((f) => f.label).join(", ")}>
          <div className="figures">
            {d.home.figures.map((figure) => (
              <div key={figure.label}>
                <p className="figures__value">{figure.value}</p>
                <p className="figures__label">{figure.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        <section className="section shell" id="bridge" aria-labelledby="bridge-title">
          <Kicker>{d.home.bridge.kicker}</Kicker>
          <h2 id="bridge-title" style={{ fontSize: "var(--type-h2)", maxWidth: "26ch" }}>
            {d.home.bridge.title}
          </h2>
          <div className="grid-split">
            {d.home.bridge.cells.map((cell) => (
              <div key={cell.tag}>
                <Media media={cell.media} ratio="16-10" />
                <p className="cell__tag" style={{ marginTop: "28px" }}>
                  {cell.tag}
                </p>
                <h3 className="cell__title">{cell.title}</h3>
                <p className="cell__text">{cell.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--surface" id="path" aria-labelledby="path-title">
          <div className="shell">
            <Kicker>{d.home.stages.kicker}</Kicker>
            <h2 id="path-title" style={{ fontSize: "var(--type-h2)", maxWidth: "24ch", marginBottom: "16px" }}>
              {d.home.stages.title}
            </h2>
            <p className="lead">{d.home.stages.lead}</p>

            <ol className="stages">
              <li className="stages__head" aria-hidden="true">
                <p>{d.home.stages.head.step}</p>
                <p>{d.home.stages.head.us}</p>
                <p>{d.home.stages.head.it}</p>
              </li>
              {d.home.stages.items.map((item) => (
                <li key={item.num} className="stage">
                  <p className="stage__num">{item.num}</p>
                  <div>
                    <h3 className="stage__title">{item.title}</h3>
                    <p className="stage__label">{d.home.stages.head.us}</p>
                    <p className="stage__text">{item.us}</p>
                  </div>
                  <div>
                    <p className="stage__label">{d.home.stages.head.it}</p>
                    <p className="stage__text">{item.it}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="hours__note" style={{ marginTop: "24px", maxWidth: "60ch" }}>
              {d.home.stages.note}
            </p>
          </div>
        </section>

        <section className="section shell" id="offices" aria-labelledby="offices-title">
          <Kicker>{d.home.hours.kicker}</Kicker>
          <h2 id="offices-title" style={{ fontSize: "var(--type-h2)", maxWidth: "24ch", marginBottom: "16px" }}>
            {d.home.hours.title}
          </h2>
          <p className="lead">{d.home.hours.lead}</p>
          <OfficeHours copy={d.home.hours} isoNow={isoNow} />
        </section>

        <Rule />

        <section className="section shell" id="practice" aria-labelledby="practice-title">
          <Kicker>{d.home.areas.kicker}</Kicker>
          <h2 id="practice-title" style={{ fontSize: "var(--type-h2)", maxWidth: "26ch" }}>
            {d.home.areas.title}
          </h2>
          <ul className="rows">
            {d.home.areas.rows.map((row) => (
              <li key={row.id}>
                <Link href={`${PATHS[locale].practice}#${row.id}`} className="row">
                  <span>
                    <span className="row__title" style={{ display: "block" }}>
                      {row.title}
                    </span>
                    <span className="row__delivery">{row.delivery}</span>
                  </span>
                  <span className="row__text">{row.text}</span>
                  <span className="row__arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="sr-only">{d.home.areas.more}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="section section--surface" aria-labelledby="network-title">
          <div className="shell">
            <Kicker>{d.home.network.kicker}</Kicker>
            <h2 id="network-title" style={{ fontSize: "var(--type-h2)", maxWidth: "26ch", marginBottom: "24px" }}>
              {d.home.network.title}
            </h2>
            <p className="lead" style={{ maxWidth: "70ch" }}>
              {d.home.network.text}
            </p>
            <div style={{ marginTop: "48px" }}>
              <Media media={d.home.network.media} ratio="21-9" caption={d.home.network.media.subject} />
            </div>
          </div>
        </section>

        <section className="section shell" id="faq" aria-labelledby="faq-title">
          <Kicker>{d.home.faq.kicker}</Kicker>
          <h2 id="faq-title" style={{ fontSize: "var(--type-h2)", maxWidth: "26ch" }}>
            {d.home.faq.title}
          </h2>
          <div className="faq">
            {d.home.faq.items.map((item) => (
              <details key={item.q} className="faq__item">
                <summary className="faq__q">{item.q}</summary>
                <p className="faq__a">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <CtaBanner locale={locale} title={d.home.cta.title} text={d.home.cta.text} links={d.home.cta.links} />
      </main>

      <Footer locale={locale} />
      <JsonLd data={graphFor(d, "home")} />
    </>
  );
}
