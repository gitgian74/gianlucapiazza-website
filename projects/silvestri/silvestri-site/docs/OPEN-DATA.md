# Dati mancanti e decisioni richieste

Ogni riga richiede una risposta del committente prima della pubblicazione.
Niente di tutto questo è stato inventato o dato per buono.

## Bloccanti per il rilascio

| # | Questione | Stato attuale nel sito | Decisione richiesta |
|---|---|---|---|
| 1 | **Revisione legale** di testi, qualifiche e disclaimer | testo del prototipo, perimetro reso esplicito | approvazione scritta del professionista |
| 2 | **Ritratti** di Lorenzo e Guillermina | segnaposto dichiarato 4:5 | fornire le fotografie |
| 3 | **Licenze fotografiche e video** | nessun media di terze parti servito | acquistare/confermare la licenza oppure commissionare scatti |
| 4 | **Orari 09:00–18:00** per le tre sedi | mostrati sotto "Orari" e usati nel grafico | confermare o correggere sede per sede |
| 5 | **Risposta entro un giorno lavorativo** | **rimossa** | se confermata, ripristinare: EN "Within one working day, in the language you wrote in." / IT "Entro un giorno lavorativo, nella lingua in cui ci avete scritto." |
| 6 | **Superlativo "il primo studio legale italiano in Florida"** | spento (`NEXT_PUBLIC_CLAIM_FIRST_FIRM=false`) | confermare per iscritto la formulazione, poi accendere il flag |
| 7 | **Pin mappa Miami** | l'URL dell'embed punta a `1200 Brickell Ave # 310-B`, il testo dice Suite 310 | indicare quale è corretto |
| 8 | **Data di fondazione** | sito: gennaio 2019 (da prototipo e `llms.txt`); la pagina About pubblica non la riporta | confermare 2019 |
| 9 | **Fax di Roma** `+39 06 32295715` | pubblicato | confermare che è ancora attivo |
| 10 | **Email `segreteria@coenpalandri.it`** come recapito della sede di Roma | pubblicata | confermare che è il canale giusto per i clienti dello studio |

## Decisioni di architettura

| # | Questione | Stato | Decisione richiesta |
|---|---|---|---|
| 11 | Slug italiani `chi-siamo-2` e `professionisti-3` | **conservati** | tenerli, oppure approvare una mappa di redirect 301 verso `/it/chi-siamo/` e `/it/professionisti/` |
| 12 | Sostituzione del sito attuale | nessuna azione | definire se è un rifacimento del dominio esistente, con inventario URL e redirect |
| 13 | Form di contatto | assente, solo `mailto:`/`tel:` | se serve, indicare casella di destinazione, titolare del trattamento e antispam |
| 14 | Analytics | assente | decidere se, quale, e con quale base giuridica |
| 15 | Privacy policy e cookie policy | **pagine non previste dal prototipo e non create** | se il sito raccoglierà dati, servono testi legali e una pagina dedicata |
| 16 | Immagine social `og:image` | assente | fornire un'immagine 1200×630 approvata |
| 17 | Riferimento visivo Brickell 21 Capital | non disponibile | fornire link/export/screenshot approvato — vedi `BRICKELL21-ALIGNMENT.md` |
| 18 | Hosting e dominio | nessun deploy, nessun progetto Vercel, nessun DNS toccato | autorizzazione separata |
