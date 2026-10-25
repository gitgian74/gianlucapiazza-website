import { Archivo, Libre_Franklin, Playfair_Display, Raleway, Source_Serif_4 } from "next/font/google";
import { dict } from "@/content";
import type { Locale } from "@/lib/routes";
import { THEME, type Theme } from "@/lib/site";
import "@/styles/globals.css";

/**
 * Archivo is self-hosted at build time by next/font: no runtime request to
 * Google Fonts, so no third-party connection on page load.
 */
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "800"],
  display: "swap",
  variable: "--font-archivo",
});

/** Only the active theme's families are referenced, so only those are preloaded. */
const libreFranklin = Libre_Franklin({
  subsets: ["latin", "latin-ext"],
  weight: ["800"],
  display: "swap",
  variable: "--font-libre-franklin",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-source-serif",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-playfair",
});

const raleway = Raleway({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-raleway",
});

const FONT_VARIABLES: Record<Theme, string> = {
  modernist: archivo.variable,
  "modernist-blue": archivo.variable,
  institutional: `${libreFranklin.variable} ${sourceSerif.variable}`,
  "capital-a": `${playfair.variable} ${raleway.variable}`,
  "capital-b": `${playfair.variable} ${raleway.variable}`,
};

export function RootHtml({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const d = dict(locale);

  return (
    <html lang={d.localeTag} data-theme={THEME} className={FONT_VARIABLES[THEME]}>
      <body>
        <a className="skip-link" href="#main">
          {d.nav.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
