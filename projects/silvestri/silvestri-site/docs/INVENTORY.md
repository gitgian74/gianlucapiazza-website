# Inventario fonti, contenuti e asset

Legenda stato: **V** verificato su fonte · **P** progettuale da confermare col committente · **M** mancante · **N** proposta nuova introdotta in questo porting.

## 1. Fonti e copertura

| Fonte | Controllo eseguito | Stato |
|---|---|---|
| `Modernizzazione sito Silvestri.zip` (Downloads) | SHA-256 `6e93b2815c187360b3365b60f351531cca2d4b332dca457d3e1d7a85a1424996`, coincide con l'hash dichiarato nel report; 36 file; 18 `.dc.html` = 12 correnti + 6 copie EN dentro `design_handoff_silvestri_site/` | V |
| `SILVESTRI_ESTRAZIONE_COMPLETA_2026-10-24.md` | SHA-256 `1b6fd71acc1fa4d823cabecb3f0fe551cd20e176914e64ae149f2e3eb38e9ca5`; copia in `~/Downloads` e copia in `~/Documents/Codex/2026-10-24/task/` byte-identiche | V |
| Copy IT/EN (Appendice A) | letto integralmente, 12 file | V |
| Metadati, JSON-LD, link, slot (Appendice B) | letto | V |
| Design system Modernist (`_ds/modernist-*/styles.css`) | letto dal sorgente, non dal report | V |
| `llms.txt` del progetto | letto | P (documento progettuale) |
| `https://silvestri-international.com/professionals/` | letto il 24-10-2026 | V |
| `https://silvestri-international.com/about/` | letto il 24-10-2026 | V |
| Design interno Brickell 21 Capital | **non fornito**; nessun link, export o screenshot approvato | M |
| Deployment Vercel esistente | non cercato e non assunto; nessun progetto creato | — |
| Workspace Silvestri preesistente | non trovato: la cartella di lavoro era vuota, `./design_handoff_silvestri_site/` esiste solo dentro l'export | V |

## 2. Qualifiche e posizionamento

| Dato | Stato | Nota |
|---|---|---|
| Lorenzo Silvestri — avvocato italiano, Ordine di Roma dal 2007 | V | prototipo + pagina pubblica + `llms.txt` |
| Certified Foreign Legal Consultant in diritto italiano (Florida Bar, 2016) | V | pagina pubblica: "Italian Lawyer and Certified Foreign Legal Consultant" |
| **Non abilitato alla professione forense in Florida** | V | pagina pubblica: "Not Admitted to Practice Law in Florida". Reso visibile su ogni pagina (fascia perimetro), nel profilo, nelle FAQ, nel footer e nei dati strutturati |
| Guillermina Rodríguez Carpin — Legal Assistant | V | pagina pubblica. Nessuna abilitazione attribuita |
| Notary Public Florida 2014, LL.M. Loyola 2008, laurea Bologna 2002 | P | fonte: prototipo + `llms.txt`; la pagina pubblica conferma Notary 2014 |
| Fondazione gennaio 2019 | P | `llms.txt` e prototipo. **La pagina About pubblica non riporta la data di fondazione**: riconciliare |
| Ufficio Brickell 21 Financial Centre dal gennaio 2020 | V | pagina About pubblica |
| "Il primo studio legale italiano in Florida" | P | claim presente oggi sul sito pubblico del cliente, non documentato in modo indipendente → spento per default, vedi `DECISIONS.md` |
| Rapporto con il gruppo Brickell 21 Capital | M | nessuna fonte pubblica lo documenta; **non usato come claim in nessuna pagina** |
| Partner di Coen Palandri Silvestri | V | pagina pubblica e prototipo. Non espresso come `parentOrganization` nei dati strutturati |

## 3. Contenuti portati

| Pagina | EN | IT | Stato copy |
|---|---|---|---|
| Home `/` · `/it/` | sì | sì | V dal prototipo, con correzioni di perimetro (vedi `DECISIONS.md`) |
| Aree di attività `/practice-areas/` · `/it/servizi/` | sì | sì | V, più riga "prestazione diretta / coordinata" per area — **N** |
| Chi siamo `/about/` · `/it/chi-siamo-2/` | sì | sì | V, H1 non superlativo di default — **N** |
| Professionisti `/professionals/` · `/it/professionisti-3/` | sì | sì | V |
| Contatti `/contact/` · `/it/contatti/` | sì | sì | V, SLA di risposta rimossa — vedi `OPEN-DATA.md` |
| Footer condiviso | sì | sì | V, disclaimer integrale |
| 404 bilingue | sì | sì | N |

Sezioni valutate e modificate rispetto al prototipo:

- **Fascia numeri**: da 5 a 4 voci. "2019 / a Miami dal 2011" è stato tolto perché
  ripete la timeline di Chi siamo senza chiarire il servizio.
- **Grafico orari**: mantenuto perché spiega il servizio transfrontaliero, ma
  ricalcolato sui fusi reali (vedi `DECISIONS.md`), non più "13–16 UTC" fisso.
- **Fascia perimetro** (nuova): diritto italiano diretto / diritto della Florida con
  professionisti abilitati, su home, servizi, professionisti e contatti.

## 4. Asset

| Asset | Stato | Nota |
|---|---|---|
| Video hero giorno e notte (Pexels 6345015, 19109601) | V | licenza verificata, `public/video/` |
| Foto Miami, Roma, Brickell (Pexels 8574509, 5035532, 8611579) | V | licenza verificata, `public/photo/`; sostituiscono le tre Unsplash mai licenziate |
| Ritratto Lorenzo Silvestri (4:5, B/N) | M | segnaposto dichiarato, nessun volto generato |
| Ritratto Guillermina Rodríguez Carpin (4:5, B/N) | M | idem |
| Logo vettoriale ufficiale | M | il wordmark testuale `SILVESTRI.` resta progettuale |
| Loghi partner (Coen Palandri Silvestri, FIDREV, IACC) | M | non presenti nel pacchetto, non inventati |
| Font Archivo | V | self-hosted al build via `next/font`, nessuna chiamata a Google Fonts a runtime |
| Mappe Google (3 embed) | V come URL | caricate solo dopo consenso esplicito dell'utente |
| Immagine OG/social | M | nessuna `og:image` dichiarata: meglio assente che rotta |

Dettaglio completo e URL in `ASSET-REGISTRY.md`.
