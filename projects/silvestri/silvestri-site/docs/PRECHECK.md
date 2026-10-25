# Checklist di prepubblicazione

Il sito **non è pronto**. Questa lista è la condizione minima per considerarlo tale.

## Contenuti e responsabilità professionale

- [ ] Revisione legale di testi, qualifiche, FAQ e disclaimer, per entrambe le lingue
- [ ] Conferma scritta del perimetro: cosa è prestazione diretta e cosa è coordinamento, area per area
- [ ] Decisione sul superlativo "primo studio legale italiano in Florida" (`NEXT_PUBLIC_CLAIM_FIRST_FIRM`)
- [ ] Conferma di orari, recapiti, fax, email di Roma e data di fondazione
- [ ] Decisione sulla promessa di risposta entro un giorno lavorativo
- [ ] Nessun claim su gruppi, affiliazioni finanziarie o partnership esclusive aggiunto in corso d'opera

## Asset

- [ ] Ritratti reali consegnati e inseriti (4:5, B/N)
- [x] Fotografie e video con licenza commerciale documentata (Pexels, `docs/ASSET-REGISTRY.md`), ospitati dal sito
- [x] Zero richieste a terzi al caricamento, misurato

## Pagine legali

- [ ] Ogni riquadro "cosa deve fornire lo studio" è vuoto: i testi dello studio hanno sostituito l'elenco. Il riquadro resta visibile anche in release, di proposito: finché c'è, la release non è pronta
- [ ] Testi di privacy e note legali approvati per iscritto dallo studio
- [ ] Cookie policy rimisurata sul dominio definitivo, con la data aggiornata nel testo
- [ ] Immagine `og:image` 1200×630 approvata
- [ ] Autorizzazione all'uso di eventuali loghi partner

## Tecnica

- [x] `pnpm typecheck` pulito
- [x] `pnpm lint` pulito
- [x] `pnpm build` completato, 10 route prerenderizzate + robots + sitemap
- [x] Tutte le route IT/EN rispondono 200; `/about` → 308 verso `/about/`
- [x] Switch lingua verso la pagina equivalente, verificato in entrambe le direzioni
- [x] 404 bilingue su indirizzo inesistente
- [x] Nessun overflow orizzontale a 375 px su home, servizi, chi siamo, professionisti, contatti
- [x] Menu mobile: apertura, chiusura, Esc, trap del focus, blocco dello scroll, link funzionanti
- [x] Nessun residuo del runtime Claude Design (`support.js`, `image-slot.js`, `x-dc`, `sc-if`, `dc-import`)
- [ ] Prova su dispositivi reali iOS e Android
- [ ] Misura prestazioni su rete reale (Lighthouse / WebPageTest) — **non ancora eseguita**

## SEO

- [x] `title` e `description` specifici per pagina e per lingua
- [x] `canonical` coerente con lo slug dichiarato
- [x] `hreflang` en / it / x-default su tutte le pagine
- [x] `<html lang>` corretto per route
- [x] JSON-LD identico al contenuto visibile; FAQ 4 = 4; `ItemList` IT tradotta
- [ ] `NEXT_PUBLIC_SITE_INDEXABLE=true` **solo** al rilascio approvato
- [ ] `NEXT_PUBLIC_THEME` resta `modernist`: la variante "Atto" non è approvata
- [ ] Inventario degli URL attualmente indicizzati e mappa di redirect approvata
- [ ] Nessuna garanzia di rich result: è un obiettivo, non un risultato

## Accessibilità (obiettivo WCAG 2.2 AA, non certificato)

- [x] Contrasto verificato a calcolo su tutte le coppie di testo in uso
- [x] Corretta la fascia orari: era 1.01:1 e per di più nascosta sotto le barre; ora è una colonna sopra le barre con filetti in accento
- [x] Landmark: `nav`, `main#main`, `footer`; skip link come primo elemento focalizzabile
- [x] Un solo `h1` per pagina, gerarchia dei titoli ordinata
- [x] Focus visibile 2 px con offset su tutti gli elementi interattivi
- [x] Target touch ≥ 44 px su bottoni e voci di menu
- [x] `prefers-reduced-motion` rispettato; nessun autoplay quando è attivo
- [x] Segnaposto media esposti come `img` con `aria-label`, nessuna immagine rotta
- [ ] Verifica con screen reader reale (VoiceOver / NVDA)
- [ ] Audit automatico + manuale su build di rilascio
- [ ] Nessuna dichiarazione di conformità prima di entrambi

## Rilascio

- [ ] Autorizzazione esplicita a pubblicare
- [ ] Autorizzazione separata per progetto hosting, dominio e DNS
- [ ] Backup e piano di rollback del sito attuale
