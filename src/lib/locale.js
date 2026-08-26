// Unica fonte di verita' per il prefisso di lingua nelle URL.
// Usata da App.jsx (route), use-language.jsx (lingua attiva), Layout.jsx
// (switch), Seo.jsx (canonical e hreflang) e scripts/generate_seo_html.mjs
// (HTML statico e sitemap).
//
// L'italiano vive alla radice per non rompere gli URL gia' indicizzati;
// l'inglese vive sotto /en. La lingua e' determinata SOLO dall'URL: nessuna
// preferenza salvata la sovrascrive, altrimenti lo stesso indirizzo
// restituirebbe contenuti diversi a persone diverse — e a un crawler.
export const DEFAULT_LANG = 'it';
export const LANGS = ['it', 'en'];
export const EN_PREFIX = '/en';

/** '/en/services' -> { lang: 'en', path: '/services' } */
export function splitLangPath(pathname) {
    const clean = pathname || '/';
    if (clean === EN_PREFIX || clean.startsWith(`${EN_PREFIX}/`)) {
        return { lang: 'en', path: clean.slice(EN_PREFIX.length) || '/' };
    }
    return { lang: DEFAULT_LANG, path: clean };
}

/** ('/services', 'en') -> '/en/services'   ('/', 'en') -> '/en' */
export function langPath(path, lang) {
    const clean = path === '/' ? '' : (path || '');
    return lang === 'en' ? `${EN_PREFIX}${clean}` || EN_PREFIX : (path || '/');
}

/** Percorso equivalente nell'altra lingua, mantenendo la pagina corrente. */
export function alternatePath(pathname, lang) {
    return langPath(splitLangPath(pathname).path, lang);
}
