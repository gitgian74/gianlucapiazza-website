// Meta for the core (non-landing) routes. Shared between the runtime Seo
// component and scripts/generate_seo_html.mjs, which prerenders static
// fallbacks so non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot) see content.
export const coreMeta = {
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
};
