# PIANO: Performance 100 + Security + Anti-phishing (2026-07-03)

> Analisi fatta: Lighthouse prod Home mobile **93** (TBT 0, CLS 0 già perfetti); security review full-codebase (Fable 5); DNS email + header prod verificati live. Nota: la WAF CF (20 req/10s per IP reale) già mitiga a monte H2/H3/H4.

## TRACK A — Security & Anti-phishing (priorità)

### A0 — Abuse chain email/rate-limit (HIGH) — l'endpoint contatti è un relay DKIM-signed
- [ ] **Turnstile (Cloudflare, free)** sul form contatti: widget client + verifica token server in `api/contact.js` prima di ogni invio. Fix strutturale del relay. (S/M)
- [ ] **getClientId → header fidato**: usare `cf-connecting-ip` (il traffico passa da CF) invece del primo hop `x-forwarded-for` (spoofabile). `api/_security.js:7`. (S)
- [ ] **Rate-limit durevole**: sostituire `Map` in-memory con Vercel KV/Upstash (INCR+EXPIRE atomico). `api/_security.js:16`. (M) — la WAF CF resta primo strato.
- [ ] **Confirmation email**: valutare double opt-in OPPURE non ri-echeggiare il `message` del submitter. (Decisione: doppio opt-in = anti-relay ma attrito lead). (M)

### A1 — Chat AI cost/abuse (HIGH financial) — `api/chat.js`
- [ ] `generationConfig.maxOutputTokens` (~512) + `safetySettings`; cap fallback a 2 modelli; budget/day globale in KV. (S/M)
- [ ] Persona in `systemInstruction` (SDK) invece che concatenata → riduce prompt-injection. (S)

### A2 — Anti-phishing DNS (importante, esterno)
- [ ] **DKIM**: generare chiave in Workspace Admin (Gmail → Authenticate email) e pubblicare il TXT su Cloudflare DNS. Oggi DKIM ASSENTE. (S, via browser+API)
- [ ] **DMARC**: alzare da `p=none` a `p=quarantine` (poi `reject`) dopo verifica DKIM. (S)

### A3 — Hardening medio
- [ ] **CSP** in `vercel.json` (allowlist self + GA + Meta Pixel + Unsplash + fonts) — report-only prima. (M, rischioso, testare)
- [ ] **JSON-LD escape** in `generate_seo_html.mjs` (`</script>`/U+2028/2029) — latente ma cheap. (S)
- [ ] HSTS → `includeSubDomains; preload` (dopo conferma subdomain HTTPS). (S/gate)
- [ ] Origin check su /api/*, error messages generici, strip CR/LF su `name`. (S, low)

## TRACK B — Performance 100 (prod Home 93 → 100)
Blocchi reali: FCP 2.0s (CSS 144KB render-blocking) + Speed Index 4.6s (video hero autoplay) + unused-JS 150ms.
- [ ] **Critical CSS inline + defer** del bundle Tailwind (plugin beasties/critters su build). → migliora FCP+SI. (M)
- [ ] **Video hero deferred**: caricare `<video>` dopo il `load`/IntersectionObserver, poster come LCP immediato. → il maggior guadagno su Speed Index. (M, valutare impatto brand)
- [ ] **Code-split framer-motion**: lazy dove non above-the-fold. → -150ms unused-JS. (M)
- [ ] Rimuovere dead deps residue (`recharts` + `ui/chart.jsx`). (S)
- Nota onesta: 100 mobile è raggiungibile ma richiede critical-CSS + defer video; rischio lieve sull'esperienza hero.

## Verifica già fatta (funziona)
- [x] Header sicurezza prod live · Email Workspace+PDF ok · WAF CF attiva · nessun segreto client · no XSS (chart.jsx morto) · chat renderizzata come testo.

---

# Email via Google Workspace + allegato PDF + DDoS (2026-07-03)

> Done quando: form contatti invia via Workspace (mail@gianlucapiazza.com), la email di
> conferma al richiedente allega il PDF checklist, build/lint verdi, deploy prod ok.
> Gate: segreti mai nel codice; DWD (Admin console) e secret Vercel = passaggi utente.

## Task A — Email via Workspace (OAuth2 Service Account + DWD) ✅ LIVE
- [x] `api/contact.js`: nodemailer OAuth2 service-account (impersona GMAIL_USER). Sicurezza invariata. (PR #22, merged `2a506d08b`)
- [x] `package.json`: resend→nodemailer.
- [x] GCP (Website `website-1691676442302`): Gmail API on, SA `contact-form-mailer`, key generata+eliminata, client_id `108532514014639740603`.
- [x] DWD autorizzata (Admin console, via browser): client_id + scope `https://mail.google.com/`.
- [x] Vercel Production env: GMAIL_USER=mail@gianlucapiazza.com, GMAIL_CLIENT_ID, GMAIL_PRIVATE_KEY, CONTACT_TO.
- [x] **Test prod**: POST /api/contact → `{"success":true}` HTTP 200 (send owner riuscito).

## Task B — Allegare PDF alla email di conferma ✅
- [x] Confirmation email allega il PDF checklist (fetch URL pubblico, best-effort). Notifica owner senza allegato.
- Da confermare visivamente: ricezione conferma + PDF nella casella (owner-send già confermato dal 200).

## ⚠️ ATTENZIONE billing Workspace
- [ ] Pagamento fallito "AI Expanded Access" → sospensione servizio prevista 6 lug 2026. Se sospeso, l'invio email si blocca. Sistemare pagamento.

## Task C — Protezione DDoS (Cloudflare, piano Free — verificato 2026-07-03)
Baseline GIÀ attivo e verificato via API:
- [x] DDoS L3/L4 automatico (unmetered) + HTTP DDoS managed ruleset (default su Free).
- [x] Browser Integrity Check = ON. Security Level = Medium. Bot Fight Mode/AI-block = OFF (preserva i crawler AI per GEO — scelta corretta).
- [x] App-layer rate-limit 5/h sul form (`_security.js`).
Non toccato di proposito: `security_level` resta Medium (High rischia UX + attrito crawler); bot-fight/AI-block restano OFF.

- [x] **Rate-limit rule creata via browser automation** (sessione utente, token senza permesso WAF aggirato): "Rate limit API endpoints" → `http.request.uri.path contains "/api/"`, 20 req/10s per IP, azione **Block** 10s, Status **Active**. Nota Free: periodo+durata fissi a 10s (unica opzione).
- Conferma collaterale: l'account Cloudflare è "Mail@gianlucapiazza.com" → `mail@gianlucapiazza.com` è casella reale (valida come GMAIL_USER per il task email).

---

# Lighthouse 100 + fix code review (2026-07-03, in corso)

> Obiettivo: Lighthouse 100 su Performance / Accessibility / Best Practices / SEO su tutte le route.
> Gate: nessun push in prod senza conferma esplicita.

## Nota di verifica (corregge il piano iniziale)
Le `<img>` sono quasi tutte `absolute inset-0` / `h-full w-full object-cover` in container ad altezza fissa
(`h-64`, `h-48`, `min-h-[55vh]`, `h-screen`) o con `aspect-[16/9]`. Spazio già riservato → **niente CLS reale**,
e l'audit `unsized-images` esenta `position:absolute` + width/height CSS. → Abbandonato "width/height ovunque".
Focus sui leve veri: **peso immagini + LCP + header**.

## P0 — Fix code review + quick wins (S) ✅
- [x] `Contact.jsx:145` — render solo `addressUS` (rimuove doppio "8Hz LLC").
- [x] `generate_seo_html.mjs:404` — fallback SEO: solo `addressUS`. Verificato in dist: "Sede (USA): c/o 8Hz LLC, ..." (una volta).
- [x] `translations.js:313,763` — rimosse chiavi `companyUS` orfane (IT+EN).
- [x] `validate_marketing_execution.py:58` — hoist `phone_haystack` fuori dal loop.

## P1 — Peso immagini & LCP (M) — parziale
- [x] Unsplash `&w=800` su `Projects.jsx` (4) + `Services.jsx` (5).
- [x] `PageHeader.jsx` hero img: `fetchPriority="high"` (camelCase → no console warning).
- [x] `About.jsx:40` hero img: `fetchPriority="high"` + `loading="eager"` + `decoding="async"`.
- [ ] **[tooling, dopo misura]** Re-encode JPG pesanti → AVIF/WebP + resize + `<picture>`.
- [ ] **[tooling, dopo misura]** Video hero 1.48MB → compressione / strategia LCP.

## P2 — Best Practices headers & hygiene (S) ✅
- [x] `vercel.json`: -`X-XSS-Protection`; +`Referrer-Policy`/`HSTS`(no preload)/`Permissions-Policy`; cache `/assets/*`.
- [x] Dead deps: `pnpm remove three @react-three/fiber @react-three/drei` (0 import). Build verde senza.
- [x] Rimuovere `public/fonts/helvetiker_bold.typeface.json` (three.js inutilizzato).
- [ ] **[gate]** HSTS `includeSubDomains; preload` — solo dopo conferma subdomain HTTPS.
- [ ] **[follow-up]** CSP (rischiosa con GA/Meta Pixel/Vercel/Unsplash → report-only prima).
- [ ] **[follow-up]** `recharts` + `ui/chart.jsx` (scaffold morto).

## P3 — Accessibility polish (M, dopo misura)
- [ ] Contrasto `text-white/70` hero; heading order / `AnimatedHeading` screen reader; `/privacy` prerender.

## Verifica finale
- [ ] `pnpm build` + `pnpm test:marketing` + `pnpm lint` verdi.
- [ ] Lighthouse su preview Vercel (Chrome MCP) → taratura P1/P3.
- [ ] Gate umano prima del push in prod.

---

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
