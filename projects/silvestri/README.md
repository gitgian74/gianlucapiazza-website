# Silvestri International — sito

Sotto-progetto con una propria toolchain e un proprio deploy. Non fa parte del
build di gianlucapiazza.com: `projects` è escluso in `.vercelignore` e
`projects/**` negli `ignores` di `eslint.config.js` alla radice del repo.

```
silvestri-site/          applicativo Next.js, bilingue IT/EN
  src/content/           tutti i testi, en.ts e it.ts
  src/styles/globals.css i quattro temi
  docs/                  decisioni, dati aperti, audit, screenshot
  scripts/build-capital.sh
```

## Avvio

```bash
cd silvestri-site
pnpm install
pnpm dev
```

## I quattro temi

`NEXT_PUBLIC_THEME` sceglie il disegno; i contenuti non cambiano.

| valore | |
|---|---|
| `modernist` | default, il sistema Silvestri verificato |
| `institutional` | variante "Atto", non approvata |
| `capital-a` | "Capital Close", composizione centrata |
| `capital-b` | "Capital Measured", editoriale allineata a sinistra |

## Cosa è pubblicato

Quattro progetti Vercel, tutti `noindex` e con `robots.txt` bloccante. I link
`.vercel/` dentro le rispettive cartelle sono già configurati.

| cartella | progetto | |
|---|---|---|
| `silvestri-site/` | `silvestri-sito-preview` | il sito, tema Modernist |
| `silvestri-site/docs/prototype-artifact/` | `silvestri-prototipo-artifact` | il prototipo Claude Design originale |
| `silvestri-site/docs/capital-sites/` | `silvestri-capital` | A e B completi, un link solo |
| `silvestri-site/docs/mockups/` | `silvestri-mockup-capital` | superato da `silvestri-capital` |

`docs/capital-sites/a` e `/b` sono export rigenerabili e stanno fuori da git:
si ricostruiscono con `./scripts/build-capital.sh`.

## Prima di pubblicare davvero

`docs/OPEN-DATA.md` (18 voci, 10 bloccanti), `docs/PRIVACY-AUDIT.md` (mancano
informativa privacy, cookie policy e disclaimer professionale) e
`docs/PRECHECK.md`. Nessun dominio del cliente è stato toccato.
