# Consolidamento landing mercati (code review 2026-07-02) — COMPLETATO 2026-07-03

> Branch worktree `claude/magical-ptolemy-653894`. Done: `pnpm lint` (0 err) + `pnpm build`
> + `pnpm test:marketing` verdi, smoke esteso 30 route × 2 viewport verde su dev server del worktree.

## P0 — Architettura
- [x] Hero locali per le 4 pagine legacy (pipeline ffmpeg hqdn3d + scale 1600 + cjpeg q50): chicago 238KB, boston 209KB, las-vegas 205KB, caraibi 99KB (crop landscape dal portrait). **Bonus fix**: la hero Boston in prod era ROTTA — la foto Unsplash `photo-1501979376754…` non esiste più (404); sostituita con Boston harbor dusk self-hosted
- [x] `src/pages/markets/marketRoutes.js` — SSoT slug/label + `marketPath()` + `MARKETS_BASE`
- [x] `marketLandingData.js`: +4 città (contenuti IT/EN invariati dalle pagine legacy), campo `path` rimosso (derivato da slug)
- [x] `App.jsx`: route mercati mappate da `marketRoutes`, rimossi 4 lazy import legacy
- [x] `Layout.jsx`: `marketLinks` derivato da `marketRoutes`
- [x] Delete 4 pagine legacy + rimozione 4 entry META_BY_PATH in `Seo.jsx` (5° posto mantenuto a mano; le pagine passano meta via props come le altre 8)
- [x] `generate_seo_html.mjs`: path da SSoT, guard slug↔data, sitemap generata in `dist/sitemap.xml` (`public/sitemap.xml` eliminata; lastmod espliciti preservati)
- [x] Fix `page_group`: classificazione su pathname via `MARKETS_BASE` + set path seoPages (il vecchio substring-match escludeva /mercati/* E /us-retail-partnerships)

## P0 — Tracking & test
- [x] `analyticsEvents.js` — 24 costanti GA4; literal sostituiti in 9 file; nomi evento invariati (continuità GA4); doppi schemi documentati nel modulo
- [x] `validate_marketing_execution.py`: assert su analyticsEvents.js + uso costanti + coerenza marketRoutes/marketLandingData
- [x] `smoke_routes.py`: route /mercati/* derivate da marketRoutes.js via node
- [x] `SMOKE_PORT` env in smoke+guard — scoperto falso positivo: il guard riusava il vite del repo principale su :5173 e validava il codice sbagliato dal worktree

## P1 — Micro-perf
- [x] `viewport={{ once: true }}` sui 4 whileInView di MarketLandingPage
- [x] miami/new-york già ricompresse in fb0cdd86 — skip
- [x] Split per-città dati: NO (decisione). Chunk MarketLandingPage 82KB raw / 22.6KB gzip, lazy e condiviso+cacheato fra le 12 route; lo split imporrebbe dynamic import per città con loading state e più failure mode per ~15KB gzip su route secondarie già coperte da HTML statico SEO. Rivalutare sopra ~40KB gzip.

---

# [ARCHIVIO giu 2026] Redesign VEX-style — landed via feat/vex-redesign (e2fe3e99) + fasi 0/1 (PR #11-13); dettaglio nella history git di questo file

---

# GEO foundation (2026-07-03, mandato "vai live con tutto")

## Fatto (repo)
- [x] Prerender core pages: home 50→2549 char visibili ai bot no-JS, about/services/projects/contact prerenderizzate con meta+canonical corretti (prima: shell vuota con canonical `/` duplicato)
- [x] JSON-LD @graph statico (ProfessionalService+Person+WebSite) in index.html, id `structured-data-site`; rimosse iniezioni client duplicate da Seo.jsx
- [x] `coreMeta.js` SSoT meta core pages (Seo.jsx + build script)
- [x] robots.txt: policy "AI welcome" — Allow espliciti per search bot, user fetcher e training bot (neutralizzano i Disallow del managed robots.txt Cloudflare per RFC 9309)
- [x] llms.txt completo: +8 città mancanti, +Buyer Readiness, dedup contatti (nota: evidenza 2026 dice basso valore — costo zero, non investirci oltre)
- [x] validate_marketing_execution esteso (robots AI-allow, llms città, prerender marker)

## BLOCCANTE lato Cloudflare (dashboard, non nel repo)
- [ ] **AI Crawl Control: 403 su TUTTI i bot AI** (GPTBot/ClaudeBot/PerplexityBot/OAI-SearchBot → 403; Googlebot 200). Finché attivo, nessun motore AI legge il sito. Fix: dashboard CF → gianlucapiazza.com → AI Crawl Control / Security→Bots → Allow. Verifica: curl -A "...OAI-SearchBot..." → 200
- [ ] Managed robots.txt (Content Signals) → disattivare o allineare (causa anche l'errore Lighthouse "robots.txt is not valid")

## Roadmap GEO contenuti (da ricerca agenti, non implementata oggi)
- [x] Intro answer-first sulle 12 landing città (IT+EN) — statistiche con fonte esterna (ISTAT/ICE) restano da aggiungere quando ci sono dati veri GP
- [x] FAQ 5 domande conversazionali per landing città IT+EN (body + FAQPage JSON-LD + fallback statico)
- [ ] 3-5 case study con numeri (progetti Poretti/Starbucks, AMI/Niagara già in /projects ora prerenderizzati)
- [ ] Digital PR: IACC directory, testate export, LinkedIn long-form (85% citazioni AI da earned media — Muck Rack)
- [ ] Panel 25-30 prompt "money" IT/EN + monitoraggio mensile (Otterly ~$29/mese) + segmento GA4 referral AI
- [x] LinkedIn personale Gianluca nel sameAs Person (https://www.linkedin.com/in/gianlucapiazza/)

---

# Piano: booking calendario + rimozione telefoni (2026-07-03, in attesa decisioni GP)

> Done quando: nessun numero di telefono su sito/HTML statico, CTA "Prenota una call"
> aprono il calendario, eventi GA4 booking_click tracciati, build+test+smoke verdi.

## Decisioni da GP (bloccanti)
- [ ] D1: strumento calendario + URL evento (Calendly consigliato / Cal.com / Google Calendar appointments)
- [ ] D2: UX — CTA dirette al calendario + embed su /contact (consigliato) oppure solo link esterno
- Assunzione dichiarata: si rimuovono SOLO i telefoni; gli indirizzi (Vicenza / Naples FL) e LinkedIn restano.

## Fase A — Rimozione telefoni — P0 / S
- [ ] `src/translations.js`: rimuovere phoneIT/phoneUS (IT righe ~308-309, EN ~760-761)
- [ ] `src/pages/Contact.jsx`: rimuovere le 2 card telefono (tel: + eventi click_phone/contact_click method phone_*)
- [ ] `scripts/generate_seo_html.mjs`: fallback statico /contact senza telefoni (righe ~403-404)
- [ ] `analyticsEvents.js`: rimuovere CLICK_PHONE (+ assert nel validator) — nessun altro uso
- [ ] Ricontrollo finale: grep numeri su dist/ dopo build (0 occorrenze)

## Fase B — Booking calendario — P0 / M
- [ ] `src/lib/bookingLink.js`: SSoT URL prenotazione + helper evento GA4 `booking_click` (nuova costante)
- [ ] CTA collegate (target="_blank" rel="noopener", evento booking_click con placement):
      Home (ctaButton "Prenota una Market Readiness Call"), SeoLandingPage (CTA primaria book_call),
      MarketLandingPage (ctaBtn), Contact (bottone "Prenota direttamente" sopra il form)
- [ ] Il form contatti resta come canale alternativo ("preferisci scrivere?")
- [ ] PDF lead magnet: CTA finale → URL calendario (rigenerare con scripts/generate_lead_magnet_pdf.py)
- [ ] JSON-LD ContactPoint + llms.txt: aggiungere booking URL
- [ ] (Se D2=embed) /contact: widget inline caricato SOLO al click (no script terzi al load — coerente col consent attuale)

## Verifica
- [ ] pnpm lint/build/test:marketing + smoke; click-test CTA su preview; grep telefoni su dist = 0
- [ ] Nota GDPR: link esterno = zero cookie terzi; embed = script Calendly solo dopo azione utente

## Correlati ancora aperti
- PR #18 (PDF checklist) in attesa di merge — se D-calendario arriva subito, aggiorno il PDF PRIMA del merge così va live già col link giusto
- RESEND_API_KEY ancora mancante su Vercel (form contatti 500) — attesa chiave da GP
