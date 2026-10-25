# Silvestri — piano corrente (25 ottobre 2026, giorno di presentazione)

Ogni istruzione del committente in questa sessione, testuale o quasi, con stato.
Niente si chiude senza prova (build, URL, misura).

## Istruzioni ricevute oggi

| # | Istruzione (parole del committente) | Stato |
|---|---|---|
| 1 | "licenzia e ospita le foto per chiudere le origini terze, poi costruisci le pagine legali bilingui con struttura e parti verificabili" | fatto e pubblicato |
| 2 | "oggi devo presentare tutti e tre o quattro differenti mockup di siti" | i link pubblicati devono essere aggiornati e funzionanti **oggi** |
| 3 | quarto mockup "con una hero che spacca … modelli 3D, la bilancia, simboli della legge americana e italiana" | **sostituito** dall'istruzione 5 (non ripreso dal committente). Da riproporre a fine lavoro, non dimenticare |
| 4 | "questo in locale sulla 3212 con i pulsanti in arancio spacca … il doppio video … devi tenerlo assolutamente così" | Modernist arancione: **design congelato** |
| 5 | "anche i due blu terrai assolutamente così" | Capital A e Capital B: **design congelati** |
| 6 | "una seconda versione di questo [arancione] con i bottoni blu, prendendo la tinta di blu dal sito che ti ho incollato" (Brickell 21 Capital, navy `#002949`) | fatto e pubblicato su `/modernist-blue` |
| 7 | "sempre tutto bilingue" | vale per il quarto e per le pagine legali |
| 8 | "fai una revisione totale, completa, prima di procedere e finalizzare … non dimenticare nulla, segnati tutto" | fatto: 19 rilievi, `docs/DECISIONS.md` §25 |
| 9 | "Yes please" a: correggere il contrasto dei link social anche nei temi approvati, e fare il push | fatto: ripubblicato, misurato, push |

## Vincoli permanenti (brief iniziale)

- Non toccare il sito live `silvestri-international.com`, il dominio, il DNS.
- Lorenzo Silvestri: avvocato italiano e Certified Foreign Legal Consultant, **non** abilitato in Florida.
- Nessun superlativo ("il primo studio") senza documento e approvazione.
- Nessun asset, palette o font inventato per Brickell 21 Capital; nessun loro logo o affiliazione dichiarata.
- Nessun ritratto generato, nessuna immagine rotta.
- Nessun analytics o tracker; nessun invio simulato di moduli.
- Testo delle informative legali: lo scrive lo studio. Qui solo fatti misurati e l'elenco di cosa manca.
- Push, deploy, cancellazioni: solo su richiesta esplicita.

## Lavoro di oggi — checklist

- [x] Tre foto Pexels licenziate, ritagliate, WebP in `public/photo/` (580 KB contro ~983 KB da Unsplash)
- [x] `Media` usa `src` locale; flag `REFERENCE_MEDIA` rimosso ovunque
- [x] **Difetto trovato e corretto:** sotto `basePath` (/a, /b, /atto) il video della hero puntava a `/video/…` → 404. Ora `asset()` antepone il basePath
- [x] Pagine privacy, cookie policy, note legali in EN e IT, linkate dal footer, in sitemap
- [x] Misura in dev: zero origini terze, zero cookie, zero storage
- [x] Tema `modernist-blue` (solo famiglia accento cambiata)
- [x] Revisione completa del diff: revisore indipendente, 19 rilievi, esito in `docs/DECISIONS.md` §25
- [x] Prototipo artifact: foto locali in `docs/prototype-artifact/photo/`, alt aggiornati
- [x] Build dei cinque export in una copia separata (la 3212 non è stata toccata)
- [x] Deploy `silvestri-capital`: /a /b /modernist /modernist-blue /atto + pagina di scelta
- [x] Redeploy `silvestri-sito-preview`
- [x] Redeploy `silvestri-prototipo-artifact` con le foto locali
- [x] Verifica pubblicata: 96/96 pagine 200; nessun `Set-Cookie`; nel browser zero terzi, nessun cookie, storage vuoto; video in riproduzione su tutti e cinque i basePath; foto caricate
- [x] Doc aggiornati: ASSET-REGISTRY, PRIVACY-AUDIT, DECISIONS §24, README, .env.example, PRECHECK, INVENTORY
- [x] Commit selettivo `b1c23a13` (solo `projects/`), pushato su conferma

## Aperti da riproporre al committente

- Hero 3D (istruzione 3): non fatta, superata dal blu. Chiedere se la vuole ancora come quinta/sesta direzione.
- `silvestri-mockup-capital` superato: cancellabile, mai risposto.
- `docs/mockups/*.html` (pubblicati su `silvestri-mockup-capital`): ancora Unsplash. Superati, non aggiornati di proposito.
- Il server di anteprima del pannello parte dalla copia su Google Drive, non dal repo: la config in `projects/silvestri/.claude/launch.json` va controllata.

## Aggiunte durante la revisione

- [x] Insegna di una banca d'affari leggibile nella foto di Brickell → ritoccata via, dichiarato in ASSET-REGISTRY
- [x] `rome-rooftops-portrait.webp` tolto da `public/photo/` (il sito non lo usa; resta nel prototipo)
- [x] `projects/silvestri/.claude/launch.json` con percorsi assoluti
- [x] Modernist Blue verificato a schermo da export con basePath: video, foto, pagine legali 200; contrasti misurati tutti sopra soglia; zero terzi
- [x] Detto al committente: su Modernist Blue il pulsante navy sulla hero scura spicca meno di quello arancione (testo leggibile, 14,9:1)
- [x] Link social del footer sotto soglia anche nei temi congelati: corretti su richiesta del committente, da 10,17:1 a 13,37:1 misurati sui siti pubblicati
- [ ] Osservazione: `.env.example` è ignorato da `.env*` nel `.gitignore` del progetto, quindi non è versionato
