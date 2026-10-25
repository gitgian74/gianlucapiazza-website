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

Misurato sul build pubblicato, leggendo `performance.getEntriesByType('resource')`
e gli storage del browser a pagina caricata.

| | Esito |
|---|---|
| Cookie impostati | **nessuno** |
| `localStorage` | **vuoto** |
| `sessionStorage` | **vuoto** |
| Analytics / tag manager | **assenti** |
| Font | self-hosted da `next/font`, **nessuna chiamata a Google Fonts** |
| Mappe | click-to-load: **nessuna richiesta a Google** finché il visitatore non la chiede |
| Origini terze contattate al caricamento | **`images.unsplash.com`** soltanto (era anche Pexels, video e poster) |

### La conseguenza, che è l'opposto di quella che ci si aspetta

**Non serve un cookie banner**, perché non ci sono cookie né accessi al
terminale dell'utente: l'art. 5(3) ePrivacy si attiva sulla memorizzazione o
sull'accesso a informazioni sul dispositivo, e qui non avviene.

**Le origini terze erano tre, ora è una.** I due filmati della hero sono stati
scaricati, ricodificati e messi in `public/video/`: licenza Pexels verificata
(uso commerciale libero, attribuzione non richiesta, modifica consentita), e
soprattutto nessuna chiamata a `videos.pexels.com` o `images.pexels.com`.

**Resta `images.unsplash.com`**, due richieste per le fotografie di riferimento
della sezione "il ponte". Scaricarle trasmette a quel server l'**indirizzo IP**
del visitatore e lo user-agent, prima di qualsiasi consenso e verso gli Stati
Uniti. L'IP è dato personale: serve una base giuridica e la trasparenza sul
trasferimento. È lo stesso schema su cui in Germania sono state emesse condanne
per Google Fonts caricati da remoto.

**La soluzione è architetturale, non legale, ed è già stata applicata ai video.**
Stesso trattamento per le fotografie — licenza, download, hosting locale — e le
richieste a terzi scendono a **zero**: il sito non trasferirebbe nulla a nessuno
finché il visitatore non scrive. Per uno studio legale è una posizione
difendibile e anche un argomento commerciale. Nel frattempo
`NEXT_PUBLIC_REFERENCE_MEDIA=false` toglie quelle due chiamate, al prezzo dei
placeholder al posto delle immagini.

## Cosa manca e va prodotto, in entrambe le lingue

Nessuna delle due direzioni (A e B) ha queste pagine. Vanno aggiunte come rotte
vere, non come PDF allegati, e linkate dal footer di ogni pagina.

1. **Informativa privacy** — artt. 13-14 GDPR: titolare del trattamento e dati di
   contatto, eventuale DPO, finalità e base giuridica per ciascun trattamento,
   destinatari, trasferimenti extra-UE con le relative garanzie, periodi di
   conservazione, diritti dell'interessato e diritto di reclamo al Garante.
2. **Informativa al punto di raccolta** — il modulo di contatto raccoglie dati
   personali e, trattandosi di uno studio legale, potenzialmente dati su
   controversie. Serve un'informativa breve accanto al modulo, non solo il link.
3. **Cookie policy** — anche solo per dichiarare che non se ne usano. Dichiararlo
   vale più che tacerlo, ed è verificabile.
4. **Disclaimer professionale** — che il sito non costituisce consulenza legale e
   che la consultazione non instaura un rapporto professionale. Per uno studio
   legale è il più importante dei quattro, ed è quello che oggi manca del tutto.
5. **Dati professionali** — iscrizione all'Ordine di Roma, partita IVA,
   eventuale polizza assicurativa: li richiede il Codice Deontologico Forense
   italiano per la comunicazione informativa.
6. **Posizione Florida** — la qualifica di Certified Foreign Legal Consultant e il
   limite che ne deriva sono già nel contenuto di ogni pagina e nel footer. Va
   verificato con la Florida Bar che la formulazione usata sia quella ammessa:
   è l'unico punto dove un errore di parole diventa un problema disciplinare.

## Cosa è già a posto

- Nessun tracciamento, nessun cookie, nessun profiling.
- Mappe caricate solo su richiesta esplicita del visitatore.
- Font serviti dal sito stesso.
- Limite FLC presente nel footer di tutte le pagine e in entrambe le lingue.
- `noindex` e `robots.txt` bloccanti su tutte le anteprime pubblicate.
- Nessun badge, disclosure finanziaria o marchio di terzi.

## Ordine suggerito

Prima il disclaimer professionale e l'informativa privacy, che sono obblighi.
Poi le licenze fotografiche, che chiudono da sole il problema dei terzi. La
cookie policy viene ultima ed è la più corta, perché non c'è niente da
dichiarare se non l'assenza.
