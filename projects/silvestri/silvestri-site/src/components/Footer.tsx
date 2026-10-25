import Link from "next/link";
import { dict } from "@/content";
import { COPYRIGHT_HOLDER, OFFICES, SOCIALS } from "@/content/firm";
import { PAGE_KEYS, PATHS, type Locale } from "@/lib/routes";

export function Footer({ locale }: { locale: Locale }) {
  const d = dict(locale);

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__offices">
          {OFFICES.map((office) => (
            <div key={office.id}>
              <h2 className="footer__city">
                {office.city}, {d.countries[office.id]}
              </h2>
              <p className="footer__role">{d.footer.officeRoles[office.id]}</p>
              <div className="footer__lines">
                {office.street.map((line) => (
                  <div key={line}>{line}</div>
                ))}
                {office.phones.map((phone) => (
                  <div key={phone.display}>
                    {phone.tel ? <a href={`tel:${phone.tel}`}>{phone.display}</a> : phone.display}{" "}
                    <span>{d.footer.phoneLabels[phone.label]}</span>
                  </div>
                ))}
                {office.emails.map((email) => (
                  <div key={email}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                ))}
                {office.web ? (
                  <div>
                    <a href={office.web.href} target="_blank" rel="noopener noreferrer">
                      {office.web.label}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <hr className="footer__rule" />

        <nav className="footer__nav" aria-label={d.nav.menuLabel}>
          {PAGE_KEYS.map((key) => (
            <Link key={key} href={PATHS[locale][key]}>
              {d.nav.links[key]}
            </Link>
          ))}
        </nav>

        <div className="footer__social">
          <span className="footer__role">{d.footer.connect}</span>
          {SOCIALS.map((social) => (
            <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.id === "linkedin-firm"
                ? d.footer.firmPage
                : social.id === "linkedin-lorenzo"
                  ? d.footer.lorenzoPage
                  : social.label}
            </a>
          ))}
        </div>

        <div className="footer__legal">
          <p>
            {d.footer.copyright} <span className="sr-only">{COPYRIGHT_HOLDER}</span>
          </p>
          <p>{d.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
