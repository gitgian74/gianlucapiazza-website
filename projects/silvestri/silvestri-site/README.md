# Silvestri International — sito bilingue (anteprima interna)

Porting del prototipo Claude Design (`Modernizzazione sito Silvestri`) in un sito
statico Next.js, bilingue IT/EN, **non pubblicato e non indicizzabile**.

- Stato: anteprima locale. Nessun deploy, nessun progetto Vercel, nessun DNS, nessun push.
- Media definitivi, ritratti e revisione legale: **mancanti**, vedi `docs/OPEN-DATA.md`.
- Coerenza visiva con Brickell 21 Capital: **aperta**, vedi `docs/BRICKELL21-ALIGNMENT.md`.

## Avvio

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Build di produzione e anteprima locale:

```bash
pnpm build
pnpm start --port 3210
```

Controlli:

```bash
pnpm typecheck
pnpm lint
```

> `node_modules` vive dentro una cartella Google Drive: sono ~450 MB che Drive
> sincronizza. Se dà fastidio, spostare il progetto fuori da `My Drive` oppure
> escludere la cartella dalla sincronizzazione dal client Drive.

## Variabili d'ambiente

Copiare `.env.example` in `.env.local`. Tutti i flag sono spenti per default: il
default è l'anteprima onesta, non il sito pubblicabile.

| Variabile | Default | Effetto |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://silvestri-international.com` | base per canonical, hreflang, sitemap, JSON-LD |
| `NEXT_PUBLIC_SITE_INDEXABLE` | `false` | `false` → `robots.txt` blocca tutto, ogni pagina è `noindex`, la sitemap è vuota e in testa compare la fascia "Anteprima interna" |
| `NEXT_PUBLIC_REFERENCE_MEDIA` | `false` | `false` → segnaposto dichiarati; `true` → immagini/video stock di riferimento **senza licenza verificata**, solo per confronto di direzione artistica |
| `NEXT_PUBLIC_CLAIM_FIRST_FIRM` | `false` | `true` → ripristina il superlativo "il primo studio legale italiano in Florida" in home e Chi siamo (vedi `docs/DECISIONS.md`) |
| `NEXT_PUBLIC_THEME` | `modernist` | `institutional` → attiva la variante provvisoria "Atto" (carta calda, corpo serif, rosso ceralacca). Il default resta il sistema Silvestri verificato |

### Le due varianti visive

Il sito ha un solo set di componenti e due set di token. Si commuta senza toccare
una riga di markup:

```bash
pnpm build && pnpm start --port 3210                                  # Modernist (default)
NEXT_PUBLIC_THEME=institutional pnpm build && NEXT_PUBLIC_THEME=institutional pnpm start --port 3212   # Atto
```

- **Modernist** — il sistema verificato nel prototipo: Archivo 800, carta `#f3f2f2`, rosso `#ec3013`, hero fino a 88px. È il default e l'unico da considerare approvabile.
- **Atto** — proposta provvisoria: Source Serif 4 nel corpo, Libre Franklin 800 nell'arredo, carta `#f3f1ea`, rosso ceralacca `#b8371d`, display −30%, misura 1120px. Nata dal confronto con Brickell 21 Capital (vedi `docs/BRICKELL21-ALIGNMENT.md`); non approvata.

Tutti i token di entrambe stanno in `src/styles/globals.css`: `:root` per Modernist,
`:root[data-theme="institutional"]` per Atto. Nessun componente conosce il tema.

## Struttura

```
src/
  app/(en)/…            route EN: /, /practice-areas/, /about/, /professionals/, /contact/
  app/(it)/it/…         route IT: /it/, /it/servizi/, /it/chi-siamo-2/, /it/professionisti-3/, /it/contatti/
  app/robots.ts         robots.txt (gated da SITE_INDEXABLE)
  app/sitemap.ts        sitemap.xml (vuota in anteprima)
  content/en.ts|it.ts   copy integrale per lingua, tipizzato da content/types.ts
  content/firm.ts       dati non linguistici (sedi, recapiti, social, fusi orari)
  lib/routes.ts         mappa degli slug e switch lingua pagina→pagina equivalente
  lib/metadata.ts       title, description, canonical, hreflang, OG, robots
  lib/jsonld.ts         dati strutturati, costruiti dagli stessi dizionari del testo
  lib/time.ts           fusi orari e finestra comune, ricalcolati (niente 13–16 UTC fisso)
  components/           nav + menu mobile, footer, segnaposto media, orologi, mappa, sezioni
  views/                una vista per pagina, condivisa dalle due lingue
  styles/globals.css    token Modernist e componenti
docs/                   inventario, decisioni, registro asset, checklist, dati mancanti
docs/screenshots/       catture desktop 1440 e mobile 390/375
```

Due root layout (`(en)` e `(it)`) servono a dichiarare `lang` corretto per
route senza rewrite. Ogni pagina è prerenderizzata staticamente.

## Cosa NON c'è, di proposito

- Nessun form di contatto: solo `mailto:` e `tel:` verificati. Un form arriverà
  solo con recapito reale, validazione accessibile, antispam e stati veri.
- Nessun analytics, tracker, cookie di terze parti. Le mappe Google si caricano
  solo dopo clic esplicito dell'utente.
- Nessun runtime Claude Design: `support.js`, `image-slot.js`, `<x-dc>`,
  `<sc-if>`, `<dc-import>` non sono stati portati.
- Nessun CMS, backend o servizio a pagamento.
- Nessun logo o riferimento Brickell 21 Capital.

## Documenti

- `docs/INVENTORY.md` — fonti, copertura, contenuti e asset con stato verificato / da confermare / mancante.
- `docs/DECISIONS.md` — scelte di porting e conflitti risolti, con motivo.
- `docs/ASSET-REGISTRY.md` — ogni media referenziato, origine e stato della licenza.
- `docs/PRECHECK.md` — checklist di prepubblicazione.
- `docs/OPEN-DATA.md` — dati mancanti, ciascuno con la decisione richiesta.
- `docs/BRICKELL21-ALIGNMENT.md` — blocco visivo aperto e matrice da compilare.
