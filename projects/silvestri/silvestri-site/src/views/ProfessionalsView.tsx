import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Media } from "@/components/Media";
import { Nav } from "@/components/Nav";
import { PreviewNote } from "@/components/PreviewNote";
import { CtaBanner, Kicker, Rule, ScopeStrip } from "@/components/Sections";
import { dict } from "@/content";
import { graphFor } from "@/lib/jsonld";
import type { Locale } from "@/lib/routes";

export function ProfessionalsView({ locale }: { locale: Locale }) {
  const d = dict(locale);

  return (
    <>
      <PreviewNote locale={locale} />
      <Nav locale={locale} page="professionals" />

      <main id="main">
        <header className="hero hero--inner">
          <div className="hero__body">
            <Kicker>{d.professionals.hero.kicker}</Kicker>
            <h1 className="hero__title">{d.professionals.hero.title}</h1>
            <p className="hero__lead">{d.professionals.hero.lead}</p>
          </div>
        </header>

        <ScopeStrip scope={d.scope} />

        <div className="shell">
          {d.professionals.people.map((person) => (
            <article key={person.id} className="profile" id={person.id} aria-labelledby={`${person.id}-name`}>
              <div className="profile__aside">
                <Media media={person.portrait} ratio="4-5" grayscale />
                <div className="profile__contact">
                  {person.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`}>
                      {email}
                    </a>
                  ))}
                  {person.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="profile__name" id={`${person.id}-name`}>
                  {person.name}
                </h2>
                <p className="profile__role">{person.role}</p>
                {person.limit ? <p className="profile__limit">{person.limit}</p> : null}

                <div className="profile__bio">
                  {person.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>

                <dl className="profile__facts">
                  {person.facts.map((fact) => (
                    <div key={fact.label} className="profile__fact">
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <section className="section section--surface" aria-labelledby="behind-title">
          <div className="shell">
            <Kicker>{d.professionals.hero.kicker}</Kicker>
            <div className="grid-split" style={{ marginTop: "24px" }}>
              <div>
                <h2 className="cell__title" id="behind-title" style={{ fontSize: "var(--type-h3)" }}>
                  {d.professionals.behind.title}
                </h2>
                <p className="cell__text">{d.professionals.behind.text}</p>
              </div>
              <div>
                <h2 className="cell__title" style={{ fontSize: "var(--type-h3)" }}>
                  {d.professionals.working.title}
                </h2>
                <p className="cell__text">{d.professionals.working.text}</p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        <CtaBanner
          locale={locale}
          title={d.professionals.cta.title}
          text={d.professionals.cta.text}
          links={d.professionals.cta.links}
        />
      </main>

      <Footer locale={locale} />
      <JsonLd data={graphFor(d, "professionals")} />
    </>
  );
}
