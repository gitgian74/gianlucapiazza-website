> **ARCHIVIO STORICO** — redesign VEX spedito a giugno 2026. Il workspace path citato sotto è obsoleto: il clone canonico è `~/Projects/gianlucapiazza-website` (vedi PROJECT.md).

# Prompt per Claude Design — Mockup Home gianlucapiazza.com

> **Come usarlo:** apri una nuova chat su [claude.ai](https://claude.ai) (o equivalente con artifact builder), incolla **tutto il blocco "PROMPT" sotto** in un unico messaggio e invia. Claude restituirà un artifact HTML/React renderizzabile direttamente. Per iterare, scrivi richieste tipo *"sostituisci la palette navy con un grafite più caldo"* o *"aggiungi una sezione testimonial sotto il metodo"*.
>
> **Versioni multiple:** se vuoi 2-3 varianti, manda lo stesso prompt 2-3 volte in chat **separate** e poi confronti i risultati.

---

## 📋 PROMPT DA COPIARE — inizia qui ⬇

````
Sei un senior product designer e front-end developer specializzato in siti
corporate/consulting di alto livello. Devi consegnare un MOCKUP COMPLETO E
INTERATTIVO della home page di un sito web per un advisor senior italiano,
direttamente come HTML artifact (singolo file, React + Tailwind + shadcn/ui
quando utile). L'output deve essere production-ready visivamente, NON un
wireframe lo-fi.

═══════════════════════════════════════════════════════════════════════════
1. IL CLIENTE
═══════════════════════════════════════════════════════════════════════════

Nome: Gianluca Piazza
Brand: gianlucapiazza.com
Profilo: Senior advisor multidisciplinare, 30+ anni di esperienza.
Aiuta aziende italiane (PMI €2-50M e brand consolidati) a internazionalizzarsi
verso gli USA e altri mercati globali, integrando AI nei processi operativi.

USP unico (da comunicare con forza):
"L'unico advisor in Italia che unisce internazionalizzazione + compliance USA
+ AI integration sotto un unico tetto, con team verticali dedicati per ogni area."

Settori serviti: Fashion/Luxury/Design, Food & Beverage/Wine, Tech/Software,
generalisti multi-settore.

═══════════════════════════════════════════════════════════════════════════
2. I 7 SERVIZI (da rappresentare in homepage come grid)
═══════════════════════════════════════════════════════════════════════════

1. Internazionalizzazione & Market Entry (focus USA)
2. Logistica Internazionale & Supply Chain
3. Reti di Vendita Estere (agenti, distributori, retail, e-commerce)
4. Registrazione Marchi (USPTO, EUIPO, Madrid Protocol)
5. Etichette FDA & USDA (food, beverage, cosmetica, nutraceutica)
6. Sales Enablement & Tecniche di Vendita
7. AI Integration in Azienda (workflow, database, automazione operativa)

Per ogni card servizio: icona lucide-react + titolo + 1-liner + freccia.
Hover: scale 1.02 + shadow cyan glow + border cyan tenue.

═══════════════════════════════════════════════════════════════════════════
3. DIREZIONE VISIVA — "Editorial Finance × AI Studio"
═══════════════════════════════════════════════════════════════════════════

Mood verbale (segui rigorosamente):
- Bloomberg Terminal incontra Anthropic / Linear / Vercel
- Autorevolezza editoriale (Financial Times, The Economist) +
  freschezza tech (motion sottile, dati live, vibe AI)
- MAI festoso, MAI colorato come una fashion week
- MAI cyberpunk-geek
- Sobrio, nitido, autorevole, con segnali di intelligenza viva

PALETTE (rispetta esattamente questi HEX):
- Primary navy:   #0A1F44   (background dark sections)
- Deep ink:       #050B1F   (background hero, header sticky)
- Cyan signal:    #00D4FF   (accenti AI, hover, link)
- Bull green:     #00C48C   (ticker positivi, success)
- Bear red:       #E94560   (ticker breaking, alert)
- Gold accent:    #D4AF37   (highlight premium, CTA secondaria luxury)
- Paper white:    #F7F9FC   (background light sections)
- Foreground 80:  #E5E7EB   (body copy su dark)
- Foreground 60:  #9CA3AF   (caption, metadata)
- Border subtle:  #1E2A4A   (divider, card borders)

Distribuzione: 70% navy/ink + 20% paper white + 5% cyan + 3% gold
+ 1% red/green tickers. Gold MAI > 5%, è premium signal non fondo.

TYPOGRAPHY (usa font Google Fonts free, fallback inclusi):
- Display (H1, hero):  Inter (700-900) o Space Grotesk se disponibile
- Headings (H2-H4):    Inter (600)
- Body:                Inter (400-500)
- Mono (ticker, dati): IBM Plex Mono o JetBrains Mono (500)
- Editorial pull-out:  Source Serif 4 o Lora (600) — solo per quote

Type scale:
- H1 hero: 4.5rem desktop / 2.75rem mobile
- H2: 2.5rem / 1.875rem
- H3: 1.75rem / 1.375rem
- Body: 1rem / Body large: 1.25rem
- Ticker: 0.875rem mono

═══════════════════════════════════════════════════════════════════════════
4. STRUTTURA HOME — 11 SEZIONI IN ORDINE
═══════════════════════════════════════════════════════════════════════════

SEZIONE 1 — HEADER STICKY (transparent → solid on scroll)
- Logo a sinistra ("Gianluca Piazza" wordmark + dot cyan)
- Nav center: Servizi (mega-menu hover) | Settori | Case Study | Metodo | Chi sono
- Right: language switcher (IT/EN/ES) + bottone "Assessment gratuito" (primary, cyan bg)
- Mobile: hamburger + bottone Assessment compatto

SEZIONE 2 — HERO "TG FINANZIARIO" (questa è la SEZIONE STAR, dedicare cura massima)

Layout desktop 16:9:

  ┌─────────────────────────────────────────────────────────────────┐
  │ TICKER ROSSO BREAKING (top, h 32px, font mono):                 │
  │ ► BREAKING • Tariffe USA al 20% su fashion italiano             │
  │ ► Case study Q1: +340% revenue USA in 18 mesi ► FDA approval    │
  │   times -30% nel 2026 ► USPTO wait list 8.5 mesi ►              │
  ├─────────────────────────────────────┬───────────────────────────┤
  │                                     │                           │
  │  H1 (display 4.5rem, weight 700,    │   ╔═══════════════════╗   │
  │      tracking tight, leading 1.05): │   ║                   ║   │
  │                                     │   ║   AVATAR ANCHOR   ║   │
  │  Building Global Business           │   ║   320 × 400 px    ║   │
  │  con AI, dati e team che            │   ║                   ║   │
  │  ti aprono i mercati.               │   ║  [PLAY ICON]      ║   │
  │                                     │   ║                   ║   │
  │  Subhead (24px, weight 300,         │   ║  Sottotitoli on:  ║   │
  │  color foreground 80):              │   ║  "Buongiorno,     ║   │
  │                                     │   ║   sono Gianluca…" ║   │
  │  USA, Europa, mercati globali.      │   ║                   ║   │
  │  Internazionalizzazione,            │   ║  Live indicator   ║   │
  │  compliance, AI integration.        │   ║  ● LIVE (red)     ║   │
  │  30+ anni di esperienza, 4 settori. │   ║                   ║   │
  │                                     │   ╚═══════════════════╝   │
  │  [Prenota assessment] [Vedi servizi]│                           │
  │   ↑ primary cyan       ↑ ghost       │                           │
  ├─────────────────────────────────────┴───────────────────────────┤
  │ TICKER VERDE METRICHE (bottom, h 32px, font mono):              │
  │ ► EUR/USD 1.0892 ▲ 0.34% ► 30+ ANNI ► 200+ AZIENDE              │
  │   ► 12+ MERCATI ► 7 SERVIZI ► 4 SETTORI ►                       │
  └─────────────────────────────────────────────────────────────────┘

  Background hero: deep ink #050B1F.
  Overlay decorativo: grid di "schermi" semitrasparenti
  (mappa mondo SVG outline, grafici linea statici, log feed) opacità 8-12%.
  Glow radiale cyan in basso a sinistra al 5% opacità.

  Ticker animation: marquee CSS infinite, 60s loop, pause on hover.
  Avatar: usa un placeholder image elegante (silhouette o foto stock business
  professional) con ring cyan tenue + dot rosso "LIVE" pulsante in alto a destra.
  Bottone Play overlay al center quando hover.

  Mobile: avatar 200×260px sopra, headline sotto, ticker mantenuti
  ma scroll più rapido (40s).

SEZIONE 3 — TRUST STRIP
Banda paper white (#F7F9FC) full-width, h 80px, 4 metriche orizzontali con
divider verticali sottili in border subtle:
"30+ anni di esperienza  |  200+ aziende seguite  |  12+ mercati attivati  |  4 settori verticali"
Numeri in display 2.25rem weight 700, label in caption uppercase tracking wide.

SEZIONE 4 — MANIFESTO/INTRO
Background navy #0A1F44, padding 8rem verticale.
Eyebrow "IL NOSTRO APPROCCIO" in cyan uppercase mono.
H2 grande in display: "Internazionalizzare oggi è ingegneria. Noi siamo gli ingegneri."
2 paragrafi body large in foreground 80 (max-width 720px).
Pull-quote a destra in serif italic gold accent: 
"Un solo punto di contatto, un team che si configura sul tuo progetto."

SEZIONE 5 — GRID 7 SERVIZI
Background paper white, padding 8rem.
H2 "Sette servizi, un solo regista." weight 700.
Subhead "Dalla strategia di mercato alla compliance fino all'AI nei tuoi processi."
Grid: 4 colonne desktop / 2 mobile / 1 small mobile.
Ogni card:
  - Background bianco con border subtle
  - Icona lucide-react in box rounded 56×56 con bg cyan/10
  - Titolo H3 weight 700
  - 1-liner body
  - Freccia "→" in cyan
  - Hover: translate y -4px + shadow cyan glow + border cyan
  - Mappa icone:
    1. Globe       → Internazionalizzazione
    2. Truck       → Logistica
    3. Network     → Reti vendita
    4. Shield      → Marchi
    5. ClipboardCheck → FDA/USDA
    6. TrendingUp  → Sales Enablement
    7. Cpu o Sparkles → AI Integration

La 7ª card (AI) è in width doppia (col-span-2) con background dark
deep ink #050B1F, copy bianco, icon cyan, e una micro-animazione: 
shimmer cyan che attraversa orizzontalmente ogni 4 secondi.
Claim: "AI Integration — 5+ anni di esperienza, processi che cambiano davvero."

SEZIONE 6 — SETTORI VERTICALI
Background navy #0A1F44, padding 8rem.
H2 "I settori dove abbiamo costruito metodo." weight 700.
3 cards grandi orizzontali (1 colonna mobile):
  Card 1: Fashion / Luxury / Design
    - Foto stock B/N con overlay gradient navy
    - Metric chip: "+€1.4M revenue USA Year 1"
  Card 2: Food & Beverage / Wine
    - Foto stock B/N
    - Metric chip: "Primo container in 6 mesi"
  Card 3: Tech / Software
    - Foto stock B/N
    - Metric chip: "ROI AI in 4 mesi"

Hover card: zoom photo + arrow reveal "Scopri il settore →"

SEZIONE 7 — IL METODO (3 step)
Background paper white.
H2 "Discovery → Design → Execution".
Timeline orizzontale con 3 step card connessi da linea cyan animata.
Per ogni step: numero (display 6rem in serif gold), titolo H3, body 4 righe, icona.

  Step 1 — Discovery (2 settimane)
    "Mapping mercati, prodotto, gap regolatorio. Audit AI su processi attuali."
  Step 2 — Design (3-6 settimane)
    "Roadmap operativa con tempi, costi, deliverable. Quick wins identificati."
  Step 3 — Execution & Optimize
    "Team verticale dedicato. Reporting mensile. Continuous improvement."

SEZIONE 8 — CASE STUDY (3 cards anonimi)
Background deep ink #050B1F.
H2 in paper white "I numeri che parlano per noi.".
3 cards orizzontali (stack verticale mobile):

  Card 1 — Eyebrow gold "FASHION / LUXURY"
    Title: "Calzature Made in Italy → USA"
    Metric grande in cyan 4rem: "+€1.4M"
    Caption: "revenue USA Year 1, 32 wholesale account in 12 mesi"
    Sfida + soluzione in 2 paragrafi compatti.
    Tag pillole: USPTO, LLC Delaware, Showroom NYC

  Card 2 — Eyebrow gold "F&B / WINE"
    Title: "Cantina toscana → California + East Coast"
    Metric: "6 MESI"
    Caption: "dal brief al primo container, 84.000 bottiglie/anno destinate USA"
    Tag pillole: FDA, USDA Organic, COLA TTB

  Card 3 — Eyebrow gold "AI INTEGRATION"
    Title: "PMI manifatturiera lombarda"
    Metric: "-92%"
    Caption: "errori trascrizione ordini, ROI 4 mesi, scalato 3 reparti"
    Tag pillole: LLM, ERP integration, Custom agent

Hover card: border gold tenue + arrow reveal in basso a destra.

SEZIONE 9 — TEAM & ECOSYSTEM
Background paper white, padding 8rem.
H2 "Un solo punto di contatto. Un team che si configura sul tuo progetto."
Visualizzazione "3 cerchi concentrici" come SVG animato:
  - Cerchio interno: "CORE TEAM" (Gianluca + 2-3 senior)
  - Cerchio medio: "PARTNER SENIOR" (30+ specialisti verticali)
  - Cerchio esterno: "STUDI ASSOCIATI" (legali, fiscali, IP, regulatory)

Animazione: cerchio interno fisso, cerchi esterni ruotano lentamente 
(60s per giro), con piccoli puntini che rappresentano persone/studi.
A destra del diagramma, lista verticale di "ruoli attivabili":
  → Senior export advisor
  → US regulatory counsel (FDA/USDA)
  → IP attorney USPTO/EUIPO
  → AI engineer (LLM, RAG, automation)
  → Logistics broker NY/LA/Miami
  → Sales trainer B2B
  → Studio fiscale internazionale

SEZIONE 10 — CTA ASSESSMENT
Background gradient: from deep ink to navy con accent cyan radiale.
Padding 12rem verticale.
Box centrato max-width 900px:
  Eyebrow cyan: "ASSESSMENT GRATUITO • 24H DI RISPOSTA"
  H2 display 3.5rem: "Verifica se il tuo progetto è candidabile."
  Body large: "Compila l'assessment in 4 step (5 minuti). Riceverai entro 24h
  una preview di 3 azioni concrete e uno slot per discovery call."
  [Inizia l'assessment →] bottone XL primary cyan
  Sotto, micro-trust line in caption foreground 60:
  "✓ Risposta in 24h • ✓ Nessun impegno • ✓ Confidenzialità garantita"

SEZIONE 11 — FOOTER
Background pure black #000.
4 colonne:
  Col 1: Logo + tagline "Building Global Business, dal 1995." + social
  Col 2: Servizi (lista 7 link)
  Col 3: Settori + Case Study + Insights + Chi sono
  Col 4: Lingua switcher + email + LinkedIn
Bottom bar: copyright + Privacy + Cookie + P.IVA

═══════════════════════════════════════════════════════════════════════════
5. MOTION & MICROINTERAZIONI
═══════════════════════════════════════════════════════════════════════════

- Easing default: cubic-bezier(0.22, 1, 0.36, 1) (out-expo)
- Durations: 200ms micro, 400ms standard, 800ms hero
- Stagger: 100ms tra elementi adiacenti su entrance
- Ticker: marquee infinite, pause on hover
- Headline hero: fade-in + slide up 30px on mount
- Cards servizi: hover translate -4px + shadow cyan
- "AI signal" shimmer: thin gradient cyan attraversa la card AI
  ogni 4 secondi orizzontalmente, sottile (no flash)
- Stat counters: count-up on viewport intersection
- Cerchi ecosystem: rotation lenta 60s/giro
- Rispetta SEMPRE prefers-reduced-motion: in quel caso, no rotate, 
  no marquee, ticker statico.
- Niente parallax aggressivo. Niente scroll-jacking. Niente WebGL.

═══════════════════════════════════════════════════════════════════════════
6. VINCOLI TECNICI OUTPUT
═══════════════════════════════════════════════════════════════════════════

- Single-file React artifact, default export
- Tailwind utility classes (no CSS custom files separati)
- Lucide-react per le icone
- Framer Motion per animazioni complesse (cerchi, stagger, count-up)
- Mobile-first responsive: breakpoint sm/md/lg/xl
- Accessibility: WCAG AA — contrast checked, focus-visible rings cyan, 
  aria-label sui bottoni icon-only, alt su tutte le immagini
- Niente localStorage / sessionStorage (non disponibile)
- Tutto deve renderizzare al primo load senza errori
- Per le immagini, usa placeholder via `https://images.unsplash.com/` con
  URL specifici o data:image SVG inline per il logo/wordmark

═══════════════════════════════════════════════════════════════════════════
7. COSA NON FARE
═══════════════════════════════════════════════════════════════════════════

✗ Niente palette pastello, niente gradient arcobaleno
✗ Niente emoji nelle UI (solo come ornamento opzionale nei case study)
✗ Niente Comic Sans, niente font script
✗ Niente carosello bullshit "What our clients say" generico
✗ Niente CTA "Get started for free" o "Sign up now" — siamo consulting B2B
  premium, le CTA sono "Prenota assessment", "Verifica candidabilità",
  "Parla con un advisor"
✗ Niente cookie banner falso decorativo
✗ Niente skeumorfismo, niente neumorfismo
✗ Niente illustrazioni cartoon flat (Storyset/Undraw style) — questa è
  consulting senior, vibe editoriale-tech
✗ Mai usare la parola "innovativo", "sinergia", "soluzioni a 360°"

═══════════════════════════════════════════════════════════════════════════
8. CONSEGNA
═══════════════════════════════════════════════════════════════════════════

Procedi a generare l'artifact React completo della home (tutte e 11 le sezioni).
Se il file supera i limiti di token, prioritizza:
1. Hero (sezione 2) deve essere PERFETTA e completa
2. Grid 7 servizi (sezione 5)
3. Case study (sezione 8)
4. Team ecosystem (sezione 9)
5. CTA Assessment (sezione 10)
6. Le altre sezioni possono essere più sintetiche al primo passaggio.

Dopo aver consegnato l'artifact, fornisci:
- Una lista numerata delle scelte di design che hai fatto e perché
- 3 varianti possibili per la headline H1 hero
- 2 alternative palette se navy/cyan non fosse l'opzione finale

Procedi adesso.
````

## ⬆ FINE PROMPT — copia tutto incluso i ```` triple backtick

---

## Suggerimenti operativi

**Iterazione consigliata dopo il primo render:**

1. **Polish hero TG.** Probabilmente la prima versione del ticker e dell'avatar avrà bisogno di ritocchi. Chiedi a Claude: *"L'avatar nella hero sembra piatto. Aggiungi un ring cyan pulsante intorno al box, un dot rosso 'LIVE' in alto a destra animato, e fai sì che i sottotitoli scorrano in basso con un fade da sinistra."*

2. **Genera la landing servizio.** Una volta che la home ti convince, manda nello stesso thread: *"Adesso genera la pagina /servizi/fda-usda usando il template di landing servizio del brief che ti ho passato."* (il template c'è nel BRIEF_REDESIGN_2026.md §4.2).

3. **Versione ES e EN.** Quando il design è approvato: *"Crea una versione del componente con i contenuti tradotti in inglese US — prendi le traduzioni dal mio file translations.js esistente."*

4. **Estrai design tokens.** Per agganciarti a Tailwind config: *"Estrai tutti i colori, font-size, spacing, shadow e radius del mockup in un theme Tailwind config pronto da copiare nel mio progetto."*

---

## Flusso completo che ti consiglio

| Step | Azione | Tempo |
|---|---|---|
| 1 | Copia il prompt sopra in claude.ai (chat nuova) | 1 min |
| 2 | Iteri 3-5 volte sulla home finché non ti piace | 1-2 ore |
| 3 | Chiedi 1 landing servizio (es. FDA/USDA) come template | 30 min |
| 4 | Estrai design tokens (palette, font, spacing) → Tailwind config | 15 min |
| 5 | Approvi il look, mi rimandi qui e parto con l'implementazione | — |
| 6 | Migrazione del codice esistente (Next.js o Vite) con i nuovi componenti | 2-3 settimane |

---

[Apri questo prompt come file](computer:///Users/gianlucapiazza/Projects/_Software/Portfolio/gianlucapiazza-website/PROMPT_CLAUDE_DESIGN.md)
