import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PreviewNote } from "@/components/PreviewNote";
import { dict } from "@/content";
import { LOCALES, PATHS, type Locale } from "@/lib/routes";

/** Bilingual by design: an unmatched URL could belong to either tree. */
export function NotFoundView({ locale }: { locale: Locale }) {
  return (
    <>
      <PreviewNote locale={locale} />
      <Nav locale={locale} page="home" />
      <main id="main" className="shell notfound">
        <p className="notfound__code">404</p>
        {LOCALES.map((lang) => {
          const d = dict(lang);
          return (
            <div key={lang} className="notfound__block" lang={d.localeTag}>
              <h1 style={{ fontSize: "var(--type-h2)" }}>{d.notFound.title}</h1>
              <p className="lead">{d.notFound.text}</p>
              <div className="btn-row">
                <Link href={PATHS[lang].home} className="btn btn--solid">
                  {d.notFound.cta}
                </Link>
                <Link href={PATHS[lang].contact} className="btn btn--ghost">
                  {d.nav.links.contact}
                </Link>
              </div>
            </div>
          );
        })}
      </main>
      <Footer locale={locale} />
    </>
  );
}
