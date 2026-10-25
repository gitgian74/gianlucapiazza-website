# Privacy, cookie e obblighi informativi

Sito di uno studio legale con sede a Miami, visibile da tutto il mondo, Italia
inclusa. Quindi si applicano insieme: GDPR e ePrivacy per i visitatori UE,
regole deontologiche italiane per l'avvocato iscritto a Roma, e le regole della
Florida Bar sulla pubblicità, che per un *Foreign Legal Consultant* non sono
quelle di un avvocato ammesso.

Questo documento è un **audit tecnico**, non un parere legale: dice cosa il sito
fa davvero e cosa va coperto. Il testo delle informative lo scrive il
committente, che fa questo di mestiere.

## Cosa fa il sito, misurato (non dedotto)

Misurato il 25 ottobre 2026 leggendo `performance.getEntriesByType('resource')`,
`document.cookie` e gli storage del browser a pagina caricata, prima in sviluppo
e poi sui cinque siti pubblicati.

| | Esito |
|---|---|
| Cookie impostati | **nessuno** |
| `localStorage` | **vuoto** |
| `sessionStorage` | **vuoto** |
| Analytics / tag manager / pixel | **assenti** |
| Font | self-hosted da `next/font`, **nessuna chiamata a Google Fonts** |
| Fotografie e video | licenza Pexels, ospitati in `public/photo/` e `public/video/` |
| Mappe | click-to-load: **nessuna richiesta a Google** finché il visitatore non la chiede |
| Modulo di contatto | **non esiste**: il contatto passa da `mailto:` e `tel:` |
| Origini terze contattate al caricamento | **nessuna** |

### La conseguenza

**Non serve un cookie banner**, perché non ci sono cookie né accessi al
terminale dell'utente: l'art. 5(3) ePrivacy si attiva sulla memorizzazione o
sull'accesso a informazioni sul dispositivo, e qui non avviene.

**Le origini terze erano tre, ora sono zero.** Prima i video (24 ottobre), poi le
fotografie (25 ottobre): licenza verificata, download, ritaglio, hosting locale.
Il sito non trasferisce nulla a nessuno finché il visitatore non preme il
pulsante di una mappa o non scrive. Per uno studio legale è una posizione
difendibile e anche un argomento commerciale.

**Restano due tracce, entrambe dichiarate nella pagina privacy:** i log del
server tenuti dall'host (IP, ora, pagina, user agent) e la mappa di Google,
che riceve l'IP solo dopo il clic.

**Non c'è un modulo di contatto**, quindi non serve un'informativa al punto di
raccolta. Se in futuro se ne aggiunge uno, serve: trattandosi di uno studio
legale raccoglierebbe potenzialmente dati su controversie.

## Le tre pagine legali — fatte come struttura, da completare dallo studio

Rotte vere in entrambe le lingue, linkate dal footer di ogni pagina, presenti in
sitemap quando il sito diventa indicizzabile.

| Pagina | EN | IT |
|---|---|---|
| Informativa privacy | `/privacy/` | `/it/privacy/` |
| Cookie policy | `/cookie-policy/` | `/it/cookie-policy/` |
| Note legali e disclaimer | `/legal-notice/` | `/it/note-legali/` |

Ogni pagina contiene **solo fatti verificabili** e chiude con un riquadro che
elenca in chiaro cosa deve fornire lo studio. Niente clausole inventate: in un
sito di avvocati una clausola plausibile ma non approvata si legge come un
impegno.

**Cosa scrive lo studio:**

1. **Informativa privacy** (artt. 13-14 GDPR): titolare e contatti, eventuale
   rappresentante UE, eventuale DPO, finalità e base giuridica di ogni
   trattamento (log del server inclusi), destinatari e responsabili, trasferimenti
   extra-UE e garanzia (hosting e posta negli Stati Uniti), tempi di
   conservazione, autorità di controllo.
2. **Dati professionali**: Ordine, numero e data di iscrizione; partita IVA,
   registro imprese e sede di ogni entità; compagnia e numero della polizza di
   responsabilità professionale (l'obbligo di copertura è nell'art. 12 della
   legge 247/2012); con quale entità
   contrae il cliente.
3. **Posizione Florida**: conferma della Florida Bar che la formula usata per il
   Foreign Legal Consultant sia quella ammessa. È l'unico punto dove un errore di
   parole diventa un problema disciplinare.

La **cookie policy** invece è completa: dichiara un'assenza misurata. Resta
vera finché non si aggiungono analytics, chat, moduli incorporati, strumenti di
prenotazione o pixel; la pagina stessa lo dice.

Il **disclaimer professionale** (niente consulenza, nessun rapporto
professionale dalla sola lettura, limite FLC) era già nel footer di ogni pagina;
ora ha anche la sua pagina, con la stessa formula.

## Cosa è già a posto

- Nessun tracciamento, nessun cookie, nessun profiling, nessuna origine terza.
- Mappe caricate solo su richiesta esplicita del visitatore.
- Font, foto e video serviti dal sito stesso.
- Limite FLC nel footer di tutte le pagine e in entrambe le lingue.
- `noindex` e `robots.txt` bloccanti su tutte le anteprime pubblicate.
- Nessun badge, disclosure finanziaria o marchio di terzi.

## Fuori da questo audit

Il **prototipo Claude Design** (`docs/prototype-artifact/`, progetto Vercel
`silvestri-prototipo-artifact`) carica per costruzione React e Babel da
`unpkg.com`, i caratteri da Google Fonts e le mappe Google subito. È un
riferimento, non un candidato per la produzione: il brief vieta di portarne il
runtime in produzione. Le sue fotografie sono comunque passate ai file locali.
