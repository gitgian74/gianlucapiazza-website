import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { Nav } from "@/components/Nav";
import { PreviewNote } from "@/components/PreviewNote";
import { Kicker, ScopeStrip } from "@/components/Sections";
import { dict } from "@/content";
import { OFFICES } from "@/content/firm";
import { graphFor } from "@/lib/jsonld";
import type { Locale } from "@/lib/routes";

export function ContactView({ locale }: { locale: Locale }) {
  const d = dict(locale);

  return (
    <>
      <PreviewNote locale={locale} />
      <Nav locale={locale} page="contact" />

      <main id="main">
        <header className="hero hero--inner">
          <div className="hero__body">
            <Kicker>{d.contact.hero.kicker}</Kicker>
            <h1 className="hero__title">{d.contact.hero.title}</h1>
            <p className="hero__lead">{d.contact.hero.lead}</p>
          </div>
        </header>

        <ScopeStrip scope={d.scope} />

        <div className="shell">
          {OFFICES.map((office) => (
            <section key={office.id} className="office" id={office.id} aria-labelledby={`${office.id}-title`}>
              <div className="office__grid">
                <div>
                  <Kicker>{d.contact.officeRoles[office.id]}</Kicker>
                  <h2 className="office__title" id={`${office.id}-title`}>
                    {office.city}, {d.countries[office.id]}
                  </h2>

                  <dl className="office__data">
                    <div className="office__field">
                      <dt>{d.contact.fieldLabels.address}</dt>
                      <dd>
                        {office.street.map((line) => (
                          <span key={line} style={{ display: "block" }}>
                            {line}
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div className="office__field">
                      <dt>{d.contact.fieldLabels.call}</dt>
                      <dd>
                        {office.phones.map((phone) =>
                          phone.tel ? (
                            <a key={phone.display} href={`tel:${phone.tel}`}>
                              {phone.display} {d.contact.phoneLabels[phone.label]}
                            </a>
                          ) : (
                            <span key={phone.display} style={{ display: "block" }}>
                              {phone.display} {d.contact.phoneLabels[phone.label]}
                            </span>
                          ),
                        )}
                      </dd>
                    </div>
                    <div className="office__field">
                      <dt>{d.contact.fieldLabels.email}</dt>
                      <dd>
                        {office.emails.map((email) => (
                          <a key={email} href={`mailto:${email}`}>
                            {email}
                          </a>
                        ))}
                      </dd>
                    </div>
                    {office.web ? (
                      <div className="office__field">
                        <dt>{d.contact.fieldLabels.web}</dt>
                        <dd>
                          <a href={office.web.href} target="_blank" rel="noopener noreferrer">
                            {office.web.label}
                          </a>
                        </dd>
                      </div>
                    ) : null}
                    <div className="office__field">
                      <dt>{d.contact.fieldLabels.hours}</dt>
                      <dd>{d.contact.hoursValue}</dd>
                    </div>
                  </dl>
                </div>

                <MapEmbed src={office.mapEmbed} city={office.city} copy={d.contact.map} />
              </div>
            </section>
          ))}

          <section className="section" aria-label={d.contact.notes.map((note) => note.title).join(", ")}>
            <div className="notes">
              {d.contact.notes.map((note) => (
                <div key={note.title}>
                  <h2>{note.title}</h2>
                  <p>{note.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer locale={locale} />
      <JsonLd data={graphFor(d, "contact")} />
    </>
  );
}
