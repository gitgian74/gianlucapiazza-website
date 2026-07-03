// Single source of truth for market landing routes. App.jsx (routes),
// Layout.jsx (footer links), scripts/generate_seo_html.mjs (static HTML +
// sitemap) and scripts/smoke_routes.py (via node) all derive from this list.
// Slugs must match the keys of marketLandingData.js; order drives the footer.
export const MARKETS_BASE = '/mercati';

export const marketPath = (slug) => `${MARKETS_BASE}/${slug}`;

export const marketRoutes = [
  { slug: 'miami', it: 'Miami', en: 'Miami' },
  { slug: 'new-york', it: 'New York', en: 'New York' },
  { slug: 'los-angeles', it: 'Los Angeles', en: 'Los Angeles' },
  { slug: 'san-diego', it: 'San Diego', en: 'San Diego' },
  { slug: 'silicon-valley', it: 'Silicon Valley', en: 'Silicon Valley' },
  { slug: 'dallas', it: 'Dallas', en: 'Dallas' },
  { slug: 'houston', it: 'Houston', en: 'Houston' },
  { slug: 'san-antonio', it: 'San Antonio', en: 'San Antonio' },
  { slug: 'chicago', it: 'Chicago', en: 'Chicago' },
  { slug: 'boston', it: 'Boston', en: 'Boston' },
  { slug: 'las-vegas', it: 'Las Vegas', en: 'Las Vegas' },
  { slug: 'caraibi', it: 'Caraibi', en: 'Caribbean' },
];
