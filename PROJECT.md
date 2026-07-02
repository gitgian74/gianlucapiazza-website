# PROJECT.md — gianlucapiazza.com

> Context primer: da leggere a inizio sessione prima di toccare il codice.

## Cos'è

Sito di produzione di **GP & Partners** (società di Gianluca Piazza): posizionamento
"USA Market Entry Partner operativo" per aziende italiane ed europee — Florida come
porta d'ingresso, resto degli USA e Caraibi come traiettoria. Il sito è un asset di
acquisizione clienti: landing per città/mercato, landing SEO per servizio, funnel
buyer-readiness con lead magnet.

## Stack

- **Vite + React 19 + Tailwind 4 + Framer Motion**, plain JS (no TS)
- i18n custom: `src/translations.js` + oggetti `{it, en}` nei data file (lingua solo
  client-side via localStorage — l'EN non ha URL propri, decisione aperta)
- SEO statica: `scripts/generate_seo_html.mjs` genera `dist/<path>/index.html` per le
  landing (18 pagine) dopo `vite build`
- API serverless in `api/`: `contact.js` (Resend, form lead), `chat.js` (Gemini)
- Deploy: **Vercel** via GitHub integration, produzione = `main` (vedi
  [docs/RUNBOOK.md](docs/RUNBOOK.md) — regole deploy/rollback obbligatorie)
- CI: `.github/workflows/ci.yml` (lint + build + test:marketing su ogni PR)

## Clone canonico

`/Users/gianlucapiazza/Projects/gianlucapiazza-website` — l'eventuale secondo clone
in `_Software/Portfolio/` è deprecato (ha causato la divergenza di giugno 2026).

## Mappa contenuti

| Cosa | Dove |
|---|---|
| Route | `src/App.jsx` |
| Landing mercati (8 città data-driven) | `src/pages/markets/MarketLandingPage.jsx` + `marketLandingData.js` |
| 4 città legacy (JSX duplicato, da migrare) | `src/pages/markets/{Chicago,Boston,LasVegas,Caribbean}.jsx` |
| Landing SEO servizi (10) | `src/pages/seo/SeoLandingPage.jsx` + `seoPageData.js` |
| Copy condivisa IT/EN | `src/translations.js` |
| Meta/JSON-LD runtime | `src/components/shared/Seo.jsx` |
| Tracking GA4 (23 eventi) | `src/lib/tracking.js` + call site sparsi; doc in `WEBSITE_TRACKING.md` (da riallineare) |

## Workstream attivo (luglio 2026)

- Remediation debito tecnico a fasi (audit 2026-07-02): Fase 0 guardrail ✔ → Fase 1
  media/lead quick wins → Fase 2 consolidamento landing (chip task dedicato) → Fase 3 pulizia
  (dead shadcn/ui + ~40 deps, SDK Gemini, doc)
- Decisione aperta di business: **EN con URL `/en/` + hreflang oppure freeze EN**

## Test

`pnpm lint` · `pnpm build` · `pnpm test:marketing` (invarianti statiche) ·
`pnpm test:smoke` (Playwright sul dev server, richiede python3)
