# Silvestri International — sito bilingue (anteprima interna)

Porting del prototipo Claude Design (`Modernizzazione sito Silvestri`) in un sito
statico Next.js, bilingue IT/EN, **non pubblicato e non indicizzabile**.

- Stato: anteprime `noindex` su Vercel, mai sul dominio del cliente. Nessun DNS toccato.
  - `silvestri-capital.vercel.app` — un link, cinque direzioni bilingui: `/a`, `/b`, `/modernist`, `/modernist-blue`, `/atto`
  - `silvestri-sito-preview.vercel.app` — Modernist da solo
- Foto e video: licenza Pexels, ospitati dal sito. Ritratti: segnaposto dichiarati.
- Pagine legali: struttura e fatti misurati; i testi che spettano allo studio sono elencati dentro ogni pagina. Vedi `docs/PRIVACY-AUDIT.md`.
- Dati mancanti: `docs/OPEN-DATA.md`. Piano corrente: `tasks/todo.md`.

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

## Variabili d'ambiente

Copiare `.env.example` in `.env.local`. Tutti i flag sono spenti per default: il
default è l'anteprima onesta, non il sito pubblicabile.

| Variabile | Default | Effetto |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://silvestri-international.com` | base per canonical, hreflang, sitemap, JSON-LD |
| `NEXT_PUBLIC_SITE_INDEXABLE` | `false` | `false` → `robots.txt` blocca tutto, ogni pagina è `noindex`, la sitemap è vuota e in testa compare la fascia "Anteprima interna" |
| `NEXT_PUBLIC_CLAIM_FIRST_FIRM` | `false` | `true` → ripristina il superlativo "il primo studio legale italiano in Florida" in home e Chi siamo (vedi `docs/DECISIONS.md`) |
| `NEXT_PUBLIC_THEME` | `modernist` | una delle cinque varianti qui sotto |
| `NEXT_STATIC_EXPORT` / `NEXT_BASE_PATH` | spenti | export statico radicato in un sottopercorso, usato da `scripts/build-capital.sh` |

### Le cinque varianti visive

Un solo set di componenti, cinque set di token in `src/styles/globals.css`
(`:root` per Modernist, `:root[data-theme="…"]` per le altre). Nessun componente
conosce il tema.

| Tema | Percorso su `silvestri-capital` | Carattere |
|---|---|---|
| `modernist` | `/modernist` | il sistema verificato: Archivo 800, carta `#f3f2f2`, rosso `#ec3013`. **Approvato, congelato** |
| `modernist-blue` | `/modernist-blue` | Modernist identico, accento navy `#002949` di Brickell 21 Capital |
| `capital-a` | `/a` | Capital Close: centrato, testata navy, serif. **Approvato, congelato** |
| `capital-b` | `/b` | Capital Measured: editoriale, rigato, carta bianca. **Approvato, congelato** |
| `institutional` | `/atto` | Atto: corpo serif, carta avorio, terracotta |

"Congelato" vuol dire che il committente ha approvato il disegno il 25 ottobre
2026: le novità arrivano come temi nuovi, non come modifiche a quei blocchi.

Tutte e cinque in un colpo, in `docs/capital-sites/`:

```bash
./scripts/build-capital.sh
cd docs/capital-sites && vercel deploy --prod
```

La build cancella `.next`: non lanciarla nella stessa cartella di un `pnpm dev`
che si sta guardando.

## Struttura

```
src/
  app/(en)/…            route EN: /, /practice-areas/, /about/, /professionals/, /contact/,
                        /privacy/, /cookie-policy/, /legal-notice/
  app/(it)/it/…         route IT: /it/, /it/servizi/, /it/chi-siamo-2/, /it/professionisti-3/, /it/contatti/,
                        /it/privacy/, /it/cookie-policy/, /it/note-legali/
  app/robots.ts         robots.txt (gated da SITE_INDEXABLE)
  app/sitemap.ts        sitemap.xml (vuota in anteprima)
  content/en.ts|it.ts   copy integrale per lingua, tipizzato da content/types.ts
  content/firm.ts       dati non linguistici (sedi, recapiti, social, fusi orari)
  lib/routes.ts         mappa degli slug e switch lingua pagina→pagina equivalente
  lib/metadata.ts       title, description, canonical, hreflang, OG, robots
  lib/jsonld.ts         dati strutturati, costruiti dagli stessi dizionari del testo
  lib/time.ts           fusi orari e finestra comune, ricalcolati (niente 13–16 UTC fisso)
  components/           nav + menu mobile, footer, segnaposto media, orologi, mappa, sezioni
  views/                una vista per pagina, condivisa dalle due lingue (LegalView per le tre legali)
  styles/globals.css    token dei cinque temi e componenti
public/photo/, public/video/   foto e filmati con licenza, serviti dal sito
docs/                   inventario, decisioni, registro asset, checklist, dati mancanti
docs/screenshots/       catture desktop 1440 e mobile 390/375
```

Due root layout (`(en)` e `(it)`) servono a dichiarare `lang` corretto per
route senza rewrite. Ogni pagina è prerenderizzata staticamente.

## Cosa NON c'è, di proposito

- Nessun form di contatto: solo `mailto:` e `tel:` verificati. Un form arriverà
  solo con recapito reale, validazione accessibile, antispam e stati veri.
- Nessun analytics, tracker, cookie. Nessuna richiesta a terzi al caricamento:
  font, foto e video sono serviti dal sito. Le mappe Google si caricano solo dopo
  clic esplicito dell'utente.
- Nessun runtime Claude Design: `support.js`, `image-slot.js`, `<x-dc>`,
  `<sc-if>`, `<dc-import>` non sono stati portati.
- Nessun CMS, backend o servizio a pagamento.
- Nessun logo o riferimento Brickell 21 Capital.

## Documenti

- `docs/INVENTORY.md` — fonti, copertura, contenuti e asset con stato verificato / da confermare / mancante.
- `docs/DECISIONS.md` — scelte di porting e conflitti risolti, con motivo.
- `docs/ASSET-REGISTRY.md` — ogni media, origine, licenza, ritagli e ritocchi.
- `docs/PRIVACY-AUDIT.md` — cosa il sito fa coi dati, misurato, e cosa deve scrivere lo studio.
- `docs/PRECHECK.md` — checklist di prepubblicazione.
- `docs/OPEN-DATA.md` — dati mancanti, ciascuno con la decisione richiesta.
- `docs/BRICKELL21-ALIGNMENT.md` — blocco visivo aperto e matrice da compilare.
