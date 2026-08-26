// Meta for the core (non-landing) routes. Shared between the runtime Seo
// component and scripts/generate_seo_html.mjs, which prerenders static
// fallbacks so non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot) see content.
//
// Bilingue: le pagine sotto /en devono avere titolo e descrizione in inglese,
// altrimenti verrebbero servite a un pubblico anglofono con meta italiani e
// non competerebbero su nessuna query nella lingua del mercato di sbocco.
export const coreMetaByLang = {
  it: {
    '/': {
      title: 'GP & Partners | USA Market Entry Partner operativo',
      description: 'GP & Partners costruisce pipeline commerciale reale per aziende italiane ed europee negli USA: readiness, distributori, buyer, retail partner e presenza locale.',
      keywords: 'USA market entry partner operativo, ricerca distributori USA, buyer readiness USA, temporary export manager USA, GP & Partners',
    },
    '/services': {
      title: 'Servizi di Consulenza Internazionale | GP & Partners',
      description: 'Servizi GP & Partners per espansione internazionale, business development, partnership commerciali e risoluzione di dispute nei mercati esteri.',
    },
    '/projects': {
      title: 'Progetti e Case Study Internazionali | GP & Partners',
      description: 'Case study GP & Partners di internazionalizzazione, partnership retail, distribuzione, business intelligence e trasformazione digitale.',
    },
    '/about': {
      title: 'Chi Siamo | GP & Partners',
      description: 'Profilo operativo di GP & Partners: team per internazionalizzazione, business development, partnership strategiche e mercato USA.',
    },
    '/contact': {
      title: 'Contatti | GP & Partners',
      description: 'Contatta GP & Partners per progetti di internazionalizzazione, sviluppo commerciale, partnership strategiche e ingresso in nuovi mercati.',
    },
    '/market-research': {
      title: 'AI Market Research | GP & Partners',
      description: 'Assistente AI per ricerche di mercato, trend internazionali e valutazioni preliminari di opportunita di espansione.',
    },
    '/privacy': {
      title: 'Privacy & Cookie Policy | GP & Partners',
      description: 'Informativa privacy e cookie policy del sito gianlucapiazza.com.',
    },
  },
  en: {
    '/': {
      title: 'GP & Partners | Hands-on USA Market Entry Partner',
      description: 'GP & Partners builds a real commercial pipeline in the US for Italian and European companies: readiness, distributors, buyers, retail partners and local presence.',
      keywords: 'USA market entry partner, US distributor search, buyer readiness USA, temporary export manager USA, GP & Partners',
    },
    '/services': {
      title: 'International Consulting Services | GP & Partners',
      description: 'GP & Partners services for international expansion, business development, commercial partnerships and dispute resolution in foreign markets.',
    },
    '/projects': {
      title: 'International Projects and Case Studies | GP & Partners',
      description: 'GP & Partners case studies in internationalisation, retail partnerships, distribution, business intelligence and digital transformation.',
    },
    '/about': {
      title: 'About Us | GP & Partners',
      description: 'Operating profile of GP & Partners: a team for internationalisation, business development, strategic partnerships and the US market.',
    },
    '/contact': {
      title: 'Contact | GP & Partners',
      description: 'Contact GP & Partners for internationalisation projects, commercial development, strategic partnerships and entry into new markets.',
    },
    '/market-research': {
      title: 'AI Market Research | GP & Partners',
      description: 'AI assistant for market research, international trends and preliminary assessment of expansion opportunities.',
    },
    '/privacy': {
      title: 'Privacy & Cookie Policy | GP & Partners',
      description: 'Privacy notice and cookie policy for gianlucapiazza.com.',
    },
  },
};

// Retrocompatibilita': alcuni moduli importano ancora il default italiano.
export const coreMeta = coreMetaByLang.it;
