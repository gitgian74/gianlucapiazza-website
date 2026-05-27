# MASTER BRIEF — Redesign gianlucapiazza.com 2026

**Owner:** Gianluca Piazza
**Versione:** 1.0 — Maggio 2026
**Stack attuale:** React 19 + Vite + Tailwind + Framer Motion + i18n custom
**Workspace:** `/Users/gianlucapiazza/Projects/_Software/Portfolio/gianlucapiazza-website`

> Questo documento è progettato per essere usato come **prompt unico** per Claude Design (o qualunque designer/agenzia) e come **specifica operativa** per chi implementerà front-end e copy. Ogni sezione è autonoma e citabile.

---

## 1. Sintesi strategica (TL;DR)

**Chi sono.** Senior advisor multidisciplinare, 30+ anni di esperienza, con un network strutturato di team interni, partner senior e studi associati. Aiuto aziende italiane (e non solo) a internazionalizzarsi verso gli USA e altri mercati globali, integrando AI nei processi operativi.

**Cosa offro — 7 servizi.**
1. Internazionalizzazione & market entry (focus USA)
2. Logistica internazionale & supply chain cross-border
3. Reti di vendita estere (agenti, distributori, retail, e-commerce)
4. Registrazione marchi (USPTO, EUIPO, Madrid Protocol, WIPO)
5. Etichette FDA & USDA per food/beverage/cosmetica
6. Tecniche di vendita e sales enablement
7. AI integration in azienda (workflow, database, automazione operativa)

**Per chi.** PMI italiane (€2-50M fatturato) e brand internazionali in 4 settori: Fashion/Luxury/Design, Food & Beverage/Wine, Tech/Software, generalisti multi-settore.

**Differenziatore unico (USP).**
> "L'unico advisor in Italia che unisce internazionalizzazione + compliance USA + AI integration sotto un unico tetto, con team verticali per ogni area."

**Posizionamento competitivo.** I competitor diretti italiani (YBC Global, ExportUSA, Errekappa, ESI-ITA) coprono solo l'export USA con siti datati e nessun pezzo AI. Le boutique AI italiane (Venere Labs, Codia) sono solo tech, senza pezzo business/internazionalizzazione. **White space = unione delle due competenze.**

---

## 2. Competitor analysis sintetica

### 2.1 Internazionalizzazione Italia ↔ USA

| Competitor | URL | Forza | Debolezza | Cosa rubare | Cosa NON fare |
|---|---|---|---|---|---|
| **YBC Global** | ybcglobal.it | Sedi Milano/NY/Virginia, focus Amazon USA, presenza fisica USA | Sito datato, claim generici, no video, no AI | Doppia presenza geografica come trust signal | Layout brochure '00s, troppe pagine "Eventi" senza CTA |
| **ExportUSA** | exportusa.us / .eu | Logistica propria in Ohio, 30+ anni storia, taglio operativo | Sito affollato, copy verboso, look anni 2010 | Hub logistico USA come asset proprio | Header pesante con 8+ voci, no gerarchia visiva |
| **Errekappa Export** | errekappa.com | Approccio strategico-sostenibile, contenuti qualitativi | Brand poco riconoscibile, no proof numerico | Narrativa sostenibilità in export | Tono troppo accademico, scarsa CTA |
| **ESI-ITA Group** | euroservizimpresa.com | FDA + multi-servizio, sede NY | Brand confusa (3+ aziende sotto stesso cappello), navigazione caotica | Multi-jurisdictional service | Architettura sito frammentata |
| **Troisi Ricerche** | consulenzainternazionalizzazione.it | Pezzo AI + data export | Posizionamento ambiguo (AI o consulenza?) | Mix AI + export come messaging | Visivo poco premium |

### 2.2 FDA/USDA consulting

| Competitor | URL | Forza | Debolezza | Cosa rubare |
|---|---|---|---|---|
| **Registrar Corp** | registrarcorp.com | Leader globale FDA, 20+ anni, sito moderno e SEO-strong | Tonalità anglosassone fredda, no pezzo italiano | UX form FDA, calcolatori prezzo, FAQ massive |
| **FDAImports** | fdaimports.com | 100+ anni esperienza, autorevolezza accademica | Sito molto "law firm" classico, poco appeal PMI | Tono autorevole per pagina /about |
| **FDA Solutions Group** | fdasolutionsgroup.com | Pricing trasparente, e-commerce-style | Solo USA, no servizi a contorno | Service-as-a-product packaging |
| **ExportUSA (FDA)** | exportusa.eu/fda | Italiano, focus food italiano | Look datato | Glossario FDA in italiano per SEO |

### 2.3 AI integration consulting

| Competitor | URL | Forza | Debolezza | Cosa rubare |
|---|---|---|---|---|
| **Venere Labs** | venerelabs.com | Multi-agent + RAG, posizionamento tech-forward | No business consulting, solo tech | Hero animato, claim brevi e forti |
| **Codia Europe** | codia.eu | Modello 3-stage (Discovery / Design / Execution) | Solo enterprise, niente PMI | Framework metodologico esposto come "bullet feature" |
| **SpeedMVPs** | speedmvps.com | Velocità di consegna come claim | Generalista, no verticali | Promessa di tempo come CTA |

### 2.4 Insight strategico

I tuoi concorrenti hanno tutti **una sola competenza esposta bene**. Tu ne hai 7 distinte ma orchestrate. Il rischio è apparire **dispersivo**. La soluzione è **gerarchizzare con un narrativo "ecosystem"**: tu sei il direttore d'orchestra, i team verticali suonano lo strumento giusto al momento giusto.

**Metafora visiva utilizzabile in tutto il sito:** sala di controllo / mission control / TG finanziario — **una persona dirige, molti schermi mostrano specialità diverse simultaneamente.**

---

## 3. Information Architecture (sitemap)

```
HOME (/)
├── SERVIZI (/servizi)
│   ├── Internazionalizzazione & Market Entry      (/servizi/internazionalizzazione)
│   ├── Logistica Internazionale                   (/servizi/logistica)
│   ├── Reti di Vendita Estere                     (/servizi/reti-vendita)
│   ├── Registrazione Marchi USPTO/EUIPO           (/servizi/registrazione-marchi)
│   ├── FDA & USDA — Etichette e Compliance        (/servizi/fda-usda)
│   ├── Sales Enablement & Tecniche di Vendita     (/servizi/sales-enablement)
│   └── AI Integration in Azienda                  (/servizi/ai-integration)
├── METODO (/metodo)
├── SETTORI (/settori)
│   ├── Fashion / Luxury / Design                  (/settori/fashion-luxury)
│   ├── Food & Beverage / Wine                     (/settori/food-beverage)
│   └── Tech & Software                            (/settori/tech)
├── CASE STUDY (/case-study)
├── INSIGHTS (/insights)              ← blog/risorse, opzionale fase 2
├── CHI SONO (/chi-sono)
│   └── Team & Network                             (/chi-sono/team)
├── ASSESSMENT (/assessment)          ← form di qualificazione, CTA primaria
└── CONTATTI (/contatti)

Footer: Privacy, Cookie, Termini, Lingue (IT/EN/ES), social
```

**Regole di navigazione:**

- **Header desktop:** logo + Servizi (mega-menu 7 voci) + Settori + Case Study + Chi sono + lingua + bottone "Assessment gratuito" (primary CTA persistente).
- **Header mobile:** logo + hamburger + bottone Assessment piccolo.
- **Mega-menu Servizi:** 7 cards con icona + titolo + 1-liner + freccia.
- **Breadcrumb:** sì, su tutte le pagine interne, schema.org markup.
- **URL:** `/servizi/<slug>` (singolare, breve, SEO-friendly).
- **Lingue:** prefisso path `/it/`, `/en/`, `/es/` con hreflang.

---

## 4. Wireframe pagina per pagina

### 4.1 HOME — sequenza sezioni

| # | Sezione | Scopo | Componenti chiave |
|---|---|---|---|
| 1 | **Hero TG finanziario** | Stupire, posizionare, far prenotare assessment | Avatar AI + ticker + headline + CTA |
| 2 | **Trust strip** | Social proof immediato | "30+ anni di esperienza • 4 settori • 200+ aziende seguite • 12+ mercati attivati" |
| 3 | **Manifesto / Intro** | Spiegare l'USP in 80 parole | Heading 1 grande + 2 paragrafi + foto/video |
| 4 | **I 7 servizi (grid)** | Espandere offerta | Grid 4-3 con cards animate, hover reveal |
| 5 | **Settori che serviamo** | Verticalizzare proof | 3 cards orizzontali con metriche per settore |
| 6 | **Il metodo (3 step)** | Tranquillizzare il prospect | Discovery → Design → Execution (rubato a Codia) |
| 7 | **Case study anonimi** | Mostrare risultati | 3 cards con metriche tipo "+340% revenue USA in 18 mesi" |
| 8 | **Team & ecosystem** | Comunicare struttura | Diagramma core team + partner senior + studi associati |
| 9 | **AI in azienda — focus** | Differenziarsi dagli export-only | Sezione dedicata con esempi concreti |
| 10 | **Assessment CTA** | Conversione | Form-anteprima + bottone full assessment |
| 11 | **Footer ricco** | SEO + navigazione | Sitemap + lingue + privacy + social |

### 4.2 LANDING SERVIZIO — template ripetibile (per i 7 servizi)

```
┌─────────────────────────────────────────────────────┐
│ HERO SERVIZIO                                       │
│  Eyebrow: "Servizio • <Categoria>"                  │
│  H1: Promessa concreta in 7-12 parole               │
│  Subhead: 2 righe che spiegano per chi è e cosa     │
│  CTA primaria: "Prenota assessment gratuito"        │
│  Visual: micro-video loop o illustrazione tematica  │
├─────────────────────────────────────────────────────┤
│ IL PROBLEMA (Pain points)                           │
│  3-4 bullet con pain point concreti                 │
│  Tono: "Sappiamo che..."                            │
├─────────────────────────────────────────────────────┤
│ COSA OTTIENI (Outcome)                              │
│  3-5 deliverable tangibili                          │
│  Es: "Marchio registrato in 5-9 mesi"               │
├─────────────────────────────────────────────────────┤
│ IL NOSTRO METODO (4-5 step)                         │
│  Numbered list visiva con icone                     │
├─────────────────────────────────────────────────────┤
│ IL TEAM DEDICATO                                    │
│  Box con: "Per questo servizio metti in campo X"    │
│  - Lead esperto (anni esperienza)                   │
│  - Partner senior verticali                         │
│  - Studio legale/fiscale di riferimento             │
├─────────────────────────────────────────────────────┤
│ CASE STUDY CORRELATI (2-3)                          │
│  Mini-cards con metrica + settore + sfida           │
├─────────────────────────────────────────────────────┤
│ FAQ (5-8 domande)                                   │
│  Accordion, ottimo per SEO                          │
├─────────────────────────────────────────────────────┤
│ CTA FINALE                                          │
│  "Verifica se il tuo progetto è candidabile"        │
│  → /assessment con preselezione servizio            │
└─────────────────────────────────────────────────────┘
```

### 4.3 ASSESSMENT — form qualificante

Form multi-step (4 step), no pricing. Obiettivo: qualificare il lead prima della call.

**Step 1 — Profilo azienda**
- Nome azienda *
- Settore (select: Fashion/Luxury, F&B/Wine, Tech, Altro)
- Fatturato (range: <€500k, €500k-2M, €2-10M, €10-50M, €50M+)
- Anno fondazione

**Step 2 — Obiettivo**
- Mercato target (multi-select: USA, EU, MENA, Asia, LATAM)
- Servizio di interesse (multi-select sui 7)
- Timeline (3 mesi, 6 mesi, 12 mesi, 12+)

**Step 3 — Sfida**
- Sfida principale (text, 200 char)
- Cosa hai già provato (text, 200 char)

**Step 4 — Contatti**
- Nome e cognome *
- Ruolo *
- Email aziendale *
- Telefono (opzionale)
- Slot Calendly preferiti (3 opzioni)
- ✓ Privacy GDPR

**Conferma:** "Riceverai entro 24h una preview di 3 azioni concrete + slot di call."

### 4.4 Altre pagine

- **Metodo:** racconto narrativo del framework Discovery → Design → Execution → Optimize, con esempio reale.
- **Settori (3 pagine):** ognuna con messaging dedicato + case study di settore + servizi più rilevanti.
- **Case Study (index + detail):** filtrabili per settore e per servizio.
- **Chi sono:** storia personale + manifesto + foto + LinkedIn + media coverage.
- **Team:** ecosystem map (vedi §6.2).

---

## 5. Hero "TG finanziario" — specifica completa

### 5.1 Layout (16:9 desktop, full-bleed mobile)

```
╔════════════════════════════════════════════════════════════════╗
║  TICKER ROSSO BREAKING (top, 32px h):                          ║
║  ► BREAKING • Trump tariffs at 20% on Italian fashion ► +340%  ║
║  US revenue case study Q1 2026 ► FDA approval times -30% ►     ║
╠══════════════════════════════════╦═════════════════════════════╣
║                                  ║  AVATAR ANCHOR              ║
║  H1 (60-80px, font display):     ║  Box 320×400px              ║
║                                  ║  Background dark blue       ║
║  "Building Global Business       ║  Avatar AI loop muto +      ║
║   con AI, dati e team che        ║  sottotitoli on/off         ║
║   ti aprono i mercati."          ║  Microfono icon = play      ║
║                                  ║                             ║
║  Subhead (24px, light):          ║                             ║
║  "USA, EU, Globale.              ║                             ║
║   Internazionalizzazione,        ║                             ║
║   compliance, AI integration."   ║                             ║
║                                  ║                             ║
║  [Prenota assessment] (primary)  ║                             ║
║  [Vedi i servizi] (ghost)        ║                             ║
╠══════════════════════════════════╩═════════════════════════════╣
║  TICKER VERDE METRICHE (bottom, 32px h):                       ║
║  ► EUR/USD 1.0892 ▲ 0.34% ► 30+ anni ► 200+ aziende ► 12 mkt   ║
╚════════════════════════════════════════════════════════════════╝
```

### 5.2 Elementi

**Top ticker (rosso, "BREAKING"):**
- Headline rotanti rilevanti per il prospect, non finanziarie generiche.
- Esempio contenuti: "Tariffe USA al 20% su fashion italiano" / "FDA approval times -30% nel 2026" / "USPTO trademark wait list 8.5 mesi" / "Fondo SIMEST 394 aperto fino a [data]".
- Aggiornamento manuale via JSON statico — no live API per fase 1.

**Bottom ticker (verde, metriche):**
- EUR/USD live (Frankfurter API gratuita o ECB feed).
- I tuoi numeri trust: "30+ anni" / "200+ aziende" / "12+ mercati" / "7 servizi".

**Avatar anchor (centro):**
- **Versione 1 (lancio veloce, raccomandata):** HeyGen avatar con voce ElevenLabs, video loop 30 sec muto + sottotitoli, replicato in 3 lingue (IT/EN/ES).
- **Versione 2 (premium):** Tu girato in studio con greenscreen, post-prod motion graphics tipo CNBC, CTA cliccabile sull'avatar.
- **Fallback statico:** se utente ha `prefers-reduced-motion: reduce` o connessione lenta → poster image + headline statica.

**Sfondo hero:**
- Grid di "schermi" semitrasparenti (mappa mondo, grafici linea, log feed) in opacità bassa (10-15%).
- Palette dark blue navy con accenti cyan e oro per ticker.

### 5.3 Specifica tecnica

| Asset | Tooling | Output | Costo stima |
|---|---|---|---|
| Avatar AI | HeyGen Pro | MP4 1080p, loop 30s, 3 lingue | €30/mese × 3 mesi |
| Voce | ElevenLabs Italian native | Voice cloning sulla tua voce | €22/mese |
| Sottotitoli | Whisper + Descript | SRT in 3 lingue | incluso |
| Ticker live | JS vanilla + JSON statico + Frankfurter API | bundle <5kb | gratis |
| Motion graphics | After Effects o Lottie | Lottie JSON <100kb | da freelance €400-800 |
| Video poster | Figma + ottimizzato WebP | <80kb | interno |

### 5.4 Performance budget hero

- LCP (Largest Contentful Paint) < 2.5s
- CLS (Cumulative Layout Shift) < 0.1
- Hero JS bundle < 50kb gzip
- Video lazy-load (poster fino a interaction o 3s di idle)
- Ticker rendering via `requestAnimationFrame`, non `setInterval`

### 5.5 Variante mobile

Su mobile (< 768px):
- Avatar 200×260px in alto, headline sotto.
- Ticker top + bottom mantenuti ma con scroll più rapido.
- CTA full-width stack.
- Video sostituito da poster + bottone play (tap to play).

---

## 6. Design system

### 6.1 Direzione visiva — "Editorial Finance × AI Studio"

**Mood board verbale:**
> Pensa a un set di un TG finanziario filtrato attraverso uno studio di design generative AI. Bloomberg incontra Anthropic. Autorevolezza editoriale (FT, The Economist) + freschezza tech (Linear, Vercel, OpenAI). Mai festoso, mai colorato come fashion-week. Mai geek-cyberpunk. Sobrio, nitido, autorevole, ma con segnali di intelligenza viva (motion sottile, dati che scorrono, AI presente ma non urlata).

### 6.2 Palette (proposta)

| Ruolo | HEX | Uso |
|---|---|---|
| **Primary navy** | `#0A1F44` | Background principale dark sections |
| **Deep ink** | `#050B1F` | Background hero, header sticky |
| **Cyan signal** | `#00D4FF` | Accenti AI, hover, link interattivi |
| **Bull green** | `#00C48C` | Ticker positivi, success, conferme |
| **Bear red** | `#E94560` | Ticker breaking, error, alert |
| **Gold accent** | `#D4AF37` | Highlight premium, CTA secondaria, dettagli luxury |
| **Paper white** | `#F7F9FC` | Background light sections, copy su dark |
| **Foreground 80** | `#E5E7EB` | Body copy su dark |
| **Foreground 60** | `#9CA3AF` | Caption, metadata |
| **Border subtle** | `#1E2A4A` | Divider, card borders |

**Principio:** 70% navy/ink + 20% paper white + 5% cyan + 3% gold + 1% red/green tickers. Gold mai più del 5% — è premium signal, non fondo.

### 6.3 Typography

| Ruolo | Font | Peso | Note |
|---|---|---|---|
| **Display (H1, hero)** | **Söhne Breit** o **Roobert** o **Inter Display** | 700 | Geometric grotesque moderna, autorevole |
| **Headings (H2-H4)** | **Inter** | 600 | Standard, ottimo rendering, free |
| **Body** | **Inter** | 400-500 | Leggibile, professionale |
| **Mono / ticker / dati** | **JetBrains Mono** o **IBM Plex Mono** | 500 | Vibe Bloomberg/terminal |
| **Editorial accent** | **Tiempos Headline** o **Source Serif** | 600 | Solo per quote e pull-out, vibe FT |

**Type scale (rem, base 16):**
- H1 hero: 4.5rem desktop / 2.75rem mobile
- H1 page: 3.5rem / 2.25rem
- H2: 2.5rem / 1.875rem
- H3: 1.75rem / 1.375rem
- Body large: 1.25rem / 1.125rem
- Body: 1rem
- Caption: 0.875rem
- Ticker: 0.875rem mono

### 6.4 Componenti chiave

**Card servizio:**
- Border-radius 1.5rem
- Padding 2.5rem
- Background `#0F1B36` su dark, `#FFFFFF` con border subtle su light
- Hover: scale 1.02, shadow `0 20px 60px rgba(0,212,255,0.15)`, border cyan tenue
- Icon top-left in box rounded con tinta del settore

**Bottone primario:**
- Bg cyan signal, color deep ink, font weight 700
- Radius full (pill)
- Padding 0.875rem 2rem
- Hover: scale 1.03, glow cyan
- Active: scale 0.98

**Bottone ghost:**
- Border 1px subtle, color paper white, bg transparent
- Hover: bg paper white 8%, border cyan

**Ticker bar:**
- Height 32px desktop / 28px mobile
- Background pure black
- Font mono 14px
- Animation `marquee 60s linear infinite`
- Pause on hover

**Stat counter:**
- Font display 4rem
- Numero animato con `framer-motion` `useMotionValue` su scroll
- Suffix in mono più piccola

**Form input:**
- Border-bottom only (no box), 2px subtle → cyan on focus
- Floating label
- Inline validation con check verde a destra

### 6.5 Motion principles

- **Easing default:** `cubic-bezier(0.22, 1, 0.36, 1)` (out expo soft)
- **Durations:** 200ms micro, 400ms standard, 800ms hero
- **Stagger:** 80-120ms tra elementi adiacenti
- **Reduced motion:** rispettare sempre `prefers-reduced-motion`
- **Niente parallax aggressivo.** Niente scroll-jacking. Niente WebGL pesante in fase 1.
- **AI signal:** un thin progress shimmer in cyan attraversa orizzontalmente alcuni componenti ogni tot, per dare vibe "live".

### 6.6 Iconografia

- **Set unico:** `lucide-react` (già in stack) per coerenza.
- **Non mescolare** stili iconografici (no emoji, no flat colorati).
- **Stroke 1.5px**, color foreground 80% di default, accent al hover.

---

## 7. Copy strategy

### 7.1 Tone of voice

| Asse | Da | A |
|---|---|---|
| Formalità | Mai impersonale | Sempre usare "noi" e "voi" |
| Tecnicità | Mai gergo non spiegato | FDA, USPTO, P&L sì, ma sempre con contesto |
| Tono | Mai venditoriale-aggressivo | Mai paternalistico |
| Prosa | Mai magniloquente | Frasi corte, dati, verbi forti |
| Emozione | Mai scampagnata feel-good | Sicurezza, controllo, certezza |

**Mantra:** "*Parliamo come un senior advisor che ha visto tutto, non come un marketer.*"

### 7.2 Messaging per persona

**Persona 1 — CEO/Founder PMI italiana (€2-50M)**
- Pain: "Voglio vendere negli USA ma non so da dove iniziare. Ho perso tempo con consulenti generalisti."
- Promessa: "In 90 giorni hai un piano operativo, in 9 mesi sei sul mercato."
- Linguaggio: pragmatico, focus tempo + costi evitati.

**Persona 2 — Direttore Export brand consolidato**
- Pain: "Ho già export ma USA non decolla. FDA è un labirinto. Marchio non protetto."
- Promessa: "Affianchi un team che ha già fatto questo per [tuo settore], 200 volte."
- Linguaggio: senior peer-to-peer, focus best practice.

**Persona 3 — Proprietà PMI con problema AI**
- Pain: "Tutti parlano di AI ma nessuno mi dice cosa cambia operativamente. Ho paura di buttare soldi."
- Promessa: "Ti diciamo i 3 processi dove l'AI ti fa risparmiare il 30% in 6 mesi. Niente fuffa."
- Linguaggio: skeptic-friendly, focus ROI misurabile.

### 7.3 Headline framework

**Hero home (3 varianti):**
1. *"Building Global Business — con AI, dati e team che ti aprono i mercati."*
2. *"Internazionalizzare oggi è ingegneria. Noi siamo gli ingegneri."*
3. *"Dal tuo prodotto al consumatore di Manhattan: 7 servizi, un solo regista."*

→ **Raccomandata: la #1.** Mantiene la heritage del sito attuale ("Building Global Business") evolvendola.

**Subhead hero:**
> "USA, Europa, mercati globali. Internazionalizzazione end-to-end, compliance FDA/USDA/USPTO, integrazione AI nei processi. 30+ anni di esperienza, 4 settori verticali, team dedicati per ogni area."

### 7.4 Template copy per landing servizio (esempio: FDA/USDA)

**Eyebrow:** Servizio • Compliance USA

**H1:** Etichette FDA e USDA: zero approssimazioni, primo container in 6 mesi.

**Subhead:** Per cantine, oleifici, gastronomie, cosmetiche e nutraceutiche italiane che vogliono vendere negli Stati Uniti senza che la dogana fermi tutto.

**Sezione "Sappiamo che..."**
- Hai studiato FDA da solo e sei più confuso di prima.
- Hai sentito di aziende bloccate in dogana per un nutrition facts panel sbagliato.
- Il tuo broker USA "ti ha sistemato" ma non sai cosa hai firmato davvero.
- Vuoi USDA Organic ma non sai se la certificazione italiana basta.

**Sezione "Cosa ottieni":**
1. **Audit etichette** — Verifica preventiva di ogni SKU vs. FDA 21 CFR.
2. **Registrazione facility FDA** + biennial renewal.
3. **U.S. Agent designation** con team dedicato a Manhattan.
4. **Nutrition Facts Panel + Supplement Facts** redatti e validati.
5. **Allergen, organic, kosher, gluten-free claim** verificati.
6. **FSVP compliance** per il tuo importatore USA.
7. **Prior Notice + ACE filing** del primo container.

**Metodo (4 step):**
1. **Discovery (2 settimane):** mapping SKU, categorie regolatorie, gap analysis.
2. **Design (3 settimane):** etichette ridisegnate, registrazioni preparate.
3. **Submission (4-8 settimane):** registrazioni FDA + USDA + dogana.
4. **Optimize:** monitoraggio bi-annuale, recall readiness plan.

**Team dedicato:**
> "Su FDA/USDA mettiamo in campo: un *senior regulatory advisor* (15+ anni, ex U.S. customs broker), uno studio legale federale in Virginia, un nostro U.S. Agent dedicato a NYC, e un team grafico per il redesign etichette compliant."

**Case study correlati:**
- 🍷 Cantina Toscana — FDA + USDA Organic + primo container CA in 5 mesi.
- 🫒 Oleificio Puglia — Recall evitato grazie a re-labeling preventivo, +€1.2M revenue Year 1.
- 🥫 Conserve Sicilia — 47 SKU registrate in 9 settimane, ingresso Whole Foods.

**FAQ (5):**
1. La mia certificazione bio italiana vale come USDA Organic?
2. Quanto costa registrare una facility FDA?
3. Cos'è FSVP e mi riguarda?
4. Devo avere un U.S. Agent fisicamente?
5. Quanto tempo serve per il primo container?

**CTA:** "Verifica la tua compliance FDA in 24h" → /assessment?service=fda-usda

---

## 8. Team & ecosystem (modulo riusabile)

Comunicare la struttura come **3 cerchi concentrici** (rendering grafico in homepage e su /chi-sono):

```
        ┌─────────────────────────────────┐
        │     ECOSYSTEM GIANLUCA PIAZZA   │
        │                                 │
        │   ┌─────────────────────────┐   │
        │   │   Studi associati       │   │
        │   │  (legali, fiscali,      │   │
        │   │   logistici, IP,        │   │
        │   │   regulatory)           │   │
        │   │                         │   │
        │   │   ┌─────────────────┐   │   │
        │   │   │  Partner senior │   │   │
        │   │   │  network 30+    │   │   │
        │   │   │  specialisti    │   │   │
        │   │   │  per area       │   │   │
        │   │   │                 │   │   │
        │   │   │   ┌─────────┐   │   │   │
        │   │   │   │  CORE   │   │   │   │
        │   │   │   │  TEAM   │   │   │   │
        │   │   │   └─────────┘   │   │   │
        │   │   └─────────────────┘   │   │
        │   └─────────────────────────┘   │
        └─────────────────────────────────┘
```

**Caption:** "Un solo punto di contatto, un team che si configura sul tuo progetto."

Per ogni servizio, mostrare nel box "Team dedicato" una versione mini di questa struttura con i ruoli concreti che lavorano sul progetto.

---

## 9. Casi studio (anonimi) — pronti da pubblicare

### Case 1 — Brand calzature lusso Made in Italy → USA

**Settore:** Fashion / Luxury
**Sfida:** Brand iconico €8M revenue Italia, zero presenza USA, marchio non registrato USPTO, nessun importatore.
**Cosa abbiamo fatto:** Registrazione USPTO (8 mesi), apertura LLC Delaware, partnership con showroom Soho NYC, network 18 buyer multi-brand, primo trade show Coterie New York.
**Risultato:** **+€1.4M revenue USA Year 1**, 32 wholesale account attivi, brand integrity preservata.

### Case 2 — Cantina vino toscana → California + East Coast

**Settore:** Food & Beverage / Wine
**Sfida:** 220.000 bottiglie/anno, distribuzione solo EU, FDA non registrata, etichette non compliant.
**Cosa abbiamo fatto:** FDA facility registration, U.S. Agent, redesign 12 etichette, USDA Organic certification, importer setup California + Florida, COLA TTB approval.
**Risultato:** **Primo container in 6 mesi**, 84.000 bottiglie/anno destinate USA dal Year 2, presenza in 3 wine bar di NYC e 2 retail premium SF.

### Case 3 — PMI manifatturiera lombarda → AI integration

**Settore:** Tech / Manufacturing
**Sfida:** Gestione ordini cliente manuale via email, errori di trascrizione, 18 ore/settimana di lavoro a basso valore.
**Cosa abbiamo fatto:** AI workflow con LLM custom per parsing ordini email, integrazione ERP esistente, agente di disambiguation per casi edge.
**Risultato:** **-92% errori trascrizione**, **-85% tempo gestione ordini**, **ROI 4 mesi**, scalato a 3 reparti.

### Case 4 — Brand design Made in Italy → rete vendita 4 paesi

**Settore:** Design / Furniture
**Sfida:** Brand €5M revenue, distribuzione solo Italia, voleva DACH + Francia + UK in 24 mesi.
**Cosa abbiamo fatto:** Profiling 47 potenziali agenti/distributori, contratti standard EU, trade shows (M&O Paris, IMM Köln), training sales team, sales enablement playbook.
**Risultato:** **12 agenti attivati in 18 mesi**, 3 showroom partner, **+€2.1M revenue export Year 2**.

---

## 10. SEO + tecnico

### 10.1 Keyword target (italiano, ricerca alta intenzione)

| Pagina | Keyword primaria | Keyword secondarie |
|---|---|---|
| Home | consulenza internazionalizzazione USA | export USA, market entry USA |
| /servizi/internazionalizzazione | consulente internazionalizzazione | apertura azienda USA, market entry strategy |
| /servizi/fda-usda | registrazione FDA Italia | etichette FDA, USDA organic Italia, US agent |
| /servizi/registrazione-marchi | registrazione marchio USPTO | trademark USA, EUIPO Italia |
| /servizi/logistica | logistica internazionale Italia USA | import export USA, broker doganale |
| /servizi/reti-vendita | rete vendita estero | agenti USA, distributori USA, sales agent |
| /servizi/sales-enablement | sales enablement Italia | tecniche di vendita B2B, formazione vendite |
| /servizi/ai-integration | integrazione AI in azienda | AI workflow automation Italia, LLM enterprise |

### 10.2 Schema.org markup obbligatorio

- `Organization` (sitewide)
- `Person` (Gianluca Piazza, /chi-sono)
- `Service` (ogni landing /servizi/*)
- `BreadcrumbList` (tutte le pagine interne)
- `FAQPage` (sezione FAQ in ogni servizio)
- `CaseStudy` custom o `Article` (case study)

### 10.3 Performance budget sito

- LCP < 2.5s desktop / < 3.0s mobile 4G
- INP < 200ms
- CLS < 0.1
- Hero JS < 50kb gzip
- Bundle iniziale < 180kb gzip
- Immagini in AVIF + WebP fallback
- Font self-hosted con `font-display: swap`

### 10.4 Stack consigliato (decisione finale a fase 2)

**Opzione A — Next.js 15 (App Router) — RACCOMANDATA per il progetto.**
- SSR/SSG su tutte le 7 landing → SEO massimo
- ISR per case study (revalidate ogni 24h)
- Image optimization built-in
- Middleware per i18n con routing `/it/`, `/en/`, `/es/`
- Vercel deploy nativo (già su Vercel)
- Migrazione da Vite ~2-3 settimane

**Opzione B — Mantieni React + Vite.**
- Nessuna migrazione → 1 settimana risparmiata
- SEO debole (CSR), serve `react-helmet-async` + prerender
- OK per tempo limitato, ma penalizza SEO long-term

**Decisione consigliata:** Next.js 15. Lo sforzo di migrazione si ripaga nei primi 6 mesi via traffico organico.

### 10.5 Stack di contorno

- **CMS contenuti (case study, insights):** Sanity.io o Notion API per editing veloce
- **Form assessment:** Formspree o Resend + custom backend, ma raccomandata serverless function su Vercel + invio mail via Resend + storage su Supabase
- **Newsletter (fase 2):** Loops o Mailchimp
- **Analytics:** Plausible (privacy-first, no cookie banner) + Vercel Analytics
- **A/B testing:** Vercel Edge Config (fase 2)
- **CDN video hero:** Mux o Cloudflare Stream

---

## 11. Roadmap di realizzazione (8 settimane)

| Settimana | Milestone | Owner | Output |
|---|---|---|---|
| **W1** | Brief approvato + scelta stack + brand assets | Gianluca + Designer | Logo evolution, palette finale, font licenze |
| **W2** | Wireframe Figma tutte le pagine + prototipo navigazione | Designer | Figma file completo |
| **W3** | UI design hi-fi Home + 1 landing servizio template | Designer | Mockup approvati |
| **W4** | UI design rimanenti 6 landing + Case study + Assessment | Designer | Tutti i mockup |
| **W5** | Setup repo Next.js + componenti base + i18n | Dev | Skeleton funzionante |
| **W6** | Implementazione Home + Hero TG (avatar AI + ticker) | Dev | Home live in staging |
| **W7** | Implementazione 7 landing + Assessment form | Dev | Sito completo staging |
| **W8** | QA, copy refinement IT/EN/ES, performance, SEO, deploy | Tutti | Live su gianlucapiazza.com |

**Budget orientativo (esclude tuo tempo):**
- Designer senior: €6-12k
- Sviluppatore Next.js: €8-15k
- Avatar AI + voice + motion graphics: €1.5-3k
- Tooling subscription primo anno: €600-1200
- Copywriter assistito (refinement IT/EN/ES): €2-4k
- **TOTALE indicativo: €18-35k** + tuo tempo come Direttore Creativo del progetto.

---

## 12. Prompt finale da incollare in Claude Design

> Sei un senior product designer specializzato in siti corporate/consulting di alto livello. Il tuo brief è qui sotto. Output atteso: una proposta visiva completa per la Home (hero TG finanziario + 10 sezioni) e un template di landing servizio, in stile **"Editorial Finance × AI Studio"** (Bloomberg + Linear + Vercel), palette navy/cyan/oro, typography Inter Display + IBM Plex Mono. Devi consegnare:
> 1. Hero con avatar AI + ticker top + ticker bottom + headline + 2 CTA, layout responsive (desktop + mobile).
> 2. Grid 7 servizi con cards animate.
> 3. Sezione metodo 3-step.
> 4. 3 case study con metriche.
> 5. Diagramma "ecosystem team" (3 cerchi concentrici).
> 6. CTA finale assessment.
> 7. Footer multilingua.
> 8. Template di landing servizio riusabile (10 sezioni come da §4.2 di questo brief).
>
> Linee guida assolute:
> - Never overload colour. Navy 70%, paper white 20%, cyan 5%, gold 3%, semaforo 1%.
> - Mobile-first. LCP < 2.5s.
> - Tipografia editoriale (FT-feel) + dettagli tech (mono in ticker).
> - Mai feel "fashion week", mai feel "law firm noioso".
> - Ogni componente accessibile WCAG AA.
> - Motion sottile, mai parallax aggressivo.
>
> Brief completo nelle sezioni sopra. Procedi.

---

## 13. Fonti competitor analysis

Sources:
- [YBC Global](https://ybcglobal.it/)
- [ExportUSA](https://www.exportusa.us/esportare-stati-uniti.php)
- [Errekappa Export](https://errekappa.com/)
- [ESI-ITA Group / Euroservizi Impresa](https://euroservizimpresa.com/fda-registration/?lang=en)
- [Troisi Ricerche](https://www.consulenzainternazionalizzazione.it/)
- [Registrar Corp](https://www.registrarcorp.com/)
- [FDAImports](https://www.fdaimports.com/)
- [FDA Solutions Group](https://fdasolutionsgroup.com/)
- [Venere Labs](https://venerelabs.com/)
- [Codia Europe](https://www.codia.eu/)
- [SpeedMVPs Italy](https://speedmvps.com/ai-workflow-in/italy)
- [USPTO](https://www.uspto.gov/)
- [EUIPO](https://www.euipo.europa.eu/)
- [Bloomberg Terminal](https://professional.bloomberg.com/products/bloomberg-terminal/)
- [G & Co. Fashion strategy](https://www.g-co.agency/)
- [Bain Fashion & Luxury](https://www.bain.com/industry-expertise/retail/fashion-luxury/)

---

**Fine brief.** Versione 1.0 — Ogni revisione successiva incrementa minor (1.1, 1.2). Le decisioni operative su stack tecnico, identity finale e contenuti definitivi seguiranno in documenti `BRIEF_v1.x_<topic>.md` separati.
