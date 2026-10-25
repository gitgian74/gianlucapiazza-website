# Decisioni di porting

Ogni voce dice cosa è stato deciso, perché, e come si torna indietro.

## 1. Stack

Next.js 16.4.3 (App Router, Turbopack) + React 19.3.1 + TypeScript, rendering
statico, nessuna dipendenza oltre al framework. Contenuti in dizionari TypeScript
tipizzati, non in un CMS: cinque pagine per lingua non giustificano un backend, e
il brief vieta di aggiungerne senza approvazione. CSS scritto a mano sui token
Modernist, senza framework di utility: il sistema è già definito e un layer in più
renderebbe più difficile, non più facile, un eventuale allineamento Capital.

## 2. Slug e URL

Mantenuti esattamente gli slug dichiarati nei canonical del prototipo, suffissi
compresi: `/it/chi-siamo-2/` e `/it/professionisti-3/`. Sono potenzialmente
indicizzati e rinominarli richiede una mappa di redirect approvata. La proposta di
rinomina è in `OPEN-DATA.md` come decisione aperta, non applicata.

`trailingSlash: true` per far coincidere le route con i canonical; `/about`
reindirizza 308 a `/about/`.

## 3. Switch lingua

Ogni pagina conosce la propria chiave e il selettore punta **alla pagina
equivalente nell'altra lingua**, mai alla home. Verificato in entrambe le
direzioni su tutte e cinque le pagine.

## 4. Perimetro professionale (correzione sostanziale)

Il vecchio H1 "Two jurisdictions. One firm that reads both." e i testi OG
potevano leggersi come abilitazione piena in entrambe le giurisdizioni. Invece
di riscrivere il titolo di testa d'autorità, è stata aggiunta una **fascia
perimetro** fissa subito sotto l'hero, su home, servizi, professionisti e
contatti, in entrambe le lingue:

> Seguito direttamente dallo studio — diritto italiano …
> Seguito con professionisti locali abilitati — diritto della Florida, procedimenti, immigrazione … Lorenzo Silvestri non è abilitato all'esercizio della professione forense in Florida.

Inoltre ogni area di attività dichiara separatamente **prestazione diretta** e
**coordinamento**. Le description SEO sono state riscritte perché il limite sia
leggibile anche nello snippet, non solo nel footer.

Titoli alternativi proposti per l'H1 della home, **non adottati** senza approvazione:

1. "Two jurisdictions. One file." / "Due giurisdizioni. Una sola pratica."
2. "Italian law, read properly — on both sides of the Atlantic." / "Diritto italiano, letto davvero — su entrambe le sponde."
3. "The Italian side of your American file." / "Il lato italiano della vostra pratica americana."

## 5. Superlativo "il primo studio legale italiano in Florida"

È un claim che il cliente **pubblica oggi** sulla propria pagina About, ma non è
documentato in modo indipendente e il brief chiede di evitarlo finché non è
approvato. Soluzione: il testo esiste nel codice ma è spento.

- Default (`NEXT_PUBLIC_CLAIM_FIRST_FIRM=false`): H1 di Chi siamo "Due ordinamenti, letti davvero." / "Two systems, read properly."; occhiello home "Uno studio legale italiano e foreign legal consulting company in diritto italiano in Florida".
- Con il flag a `true`: tornano "Il primo studio legale italiano in Florida." e "Il primo studio legale italiano e foreign legal consulting company…".

I `title`/`description` non contengono il superlativo in nessuno dei due casi.

## 6. Promessa di risposta entro un giorno lavorativo

Rimossa dal testo visibile. Era un impegno di servizio non verificato. Il blocco
"Quando rispondiamo" ora dice che si risponde nella lingua in cui si è scritto e
rimanda alla linea diretta di Miami per le urgenze. Il testo originale è in
`OPEN-DATA.md`, pronto da ripristinare se il committente lo conferma.

## 7. Orari delle tre sedi

Il prototipo disegnava barre su offset fissi (UTC+2 / −3 / −4) e dichiarava una
finestra comune fissa 13:00–16:00 UTC. Entrambi diventano falsi a ogni cambio di
ora legale, e i tre Paesi non cambiano nello stesso fine settimana.

Ora gli offset sono letti dai fusi IANA (`America/New_York`, `Europe/Rome`,
`America/Montevideo`) alla data corrente, le barre sono posizionate su quegli
offset e la finestra comune è l'intersezione calcolata. Verifica eseguita:

| Data | Offset | Finestra comune calcolata |
|---|---|---|
| 24-10-2026 | −4 / +2 / −3 | 13:00–16:00 UTC |
| 27-10-2026 (dopo il cambio europeo) | −4 / +1 / −3 | 13:00–17:00 UTC |
| 03-11-2026 (dopo il cambio USA) | −5 / +1 / −3 | 14:00–17:00 UTC |
| 30-03-2027 | −4 / +2 / −3 | 13:00–16:00 UTC |

Orologi e grafico usano `useSyncExternalStore` con snapshot lato server: nessun
disallineamento in idratazione, e il valore si corregge appena la pagina è viva.
Gli orari 09:00–18:00 restano dato da riconfermare (`OPEN-DATA.md`).

## 8. Media

Nessuna licenza è stata verificata, quindi nessun media di terze parti è servito
per default. Al suo posto c'è un **segnaposto dichiarato** in stile Modernist che
indica soggetto richiesto, formato e il fatto che serve una licenza. Non sono
stati generati ritratti: gli slot 4:5 restano vuoti e dichiarati.

`NEXT_PUBLIC_REFERENCE_MEDIA=true` mostra video e foto di riferimento per
valutare la direzione artistica, **senza che questo costituisca un diritto d'uso**.
Il video hero resta `preload="none"`, `muted`, `playsInline`, con poster, controllo
di pausa e rispetto di `prefers-reduced-motion`.

## 9. Allineamento bottoni (conflitto handoff risolto)

Il README storico chiedeva label a sinistra, il CSS del design system centra
`.btn`. Regola adottata e documentata nel CSS: **i bottoni inline centrano la
label; solo `.btn--block` a larghezza piena allinea a sinistra**, dove altrimenti
il testo fluttuerebbe nel vuoto. Unico uso di `.btn--block`: la CTA del menu mobile.

## 10. Contrasto e accento rosso

Verifica WCAG eseguita a calcolo sui colori reali. Tre coppie del prototipo non
passavano:

| Coppia | Prima | Dopo |
|---|---|---|
| Bianco su bottone rosso `#ec3013` | 4.20:1 ✗ | fondo `#dd2b0f` → 4.74:1 ✓ |
| Testo della fascia CTA su rosso | 3.72:1 ✗ | bianco pieno su `#dd2b0f` → 4.74:1 ✓ |
| Etichette piccole in `#ec3013` (11–13 px) | 3.76:1 ✗ | `#ae1800` → 5.9–6.4:1 ✓ |

`#ec3013` resta per ciò che non è testo piccolo: filetti, quadratini, barre,
focus ring, numeri display (≥34 px, 3.76:1 ≥ 3:1 per testo grande), punto del
wordmark. I token stanno tutti in `:root`.

## 11. Dati strutturati

Costruiti dagli stessi dizionari che generano il testo, quindi non possono
divergere. Correzioni rispetto al prototipo:

- FAQ: **4 domande nei dati strutturati, come le 4 visibili** (il prototipo ne aveva 5).
- `ItemList` dei servizi IT finalmente **in italiano** (era rimasto in inglese).
- `inLanguage` coerente con la route; `<html lang>` corretto su ogni pagina.
- Il limite di abilitazione è nella `description` della `Person` di Lorenzo.
- Tolto `parentOrganization: Coen Palandri Silvestri`: le fonti dicono "partner di", non controllante.
- Nessun dato di recensioni, premi, risultati o clienti.

## 12. Privacy

Font self-hosted al build. Mappe Google caricate **solo dopo clic**, con avviso
esplicito su IP e cookie: così non serve un banner di consenso per il caricamento
automatico. Nessun analytics, nessun tracker, nessun form.

## 13. Indicizzazione

`NEXT_PUBLIC_SITE_INDEXABLE=false` per default: `robots.txt` blocca tutto, ogni
pagina emette `noindex, nofollow`, la sitemap è vuota e in testa compare la fascia
"Anteprima interna". Si accende solo per il rilascio approvato.

## 14. Variante istituzionale "Atto" (non approvata)

Nata dalla richiesta di un'alternativa che somigliasse a Brickell 21 Capital.
La lettura del design Capital reale (`BRICKELL21-ALIGNMENT.md`) ha mostrato che
non esiste un sistema autonomo da cui ereditare: è un template Raymond James
co-brandizzato, con badge BrokerCheck e disclosure FINRA/SIPC. La parentela
realizzabile è di registro, non di palette.

Tre direzioni indipendenti sono state proposte e giudicate da tre lenti diverse
(cliente, brand designer, revisore accessibilità). Vincitore unanime: **Atto**,
68 punti contro 58 di "Institutional Paper" e 52 di "Travertine & Bay".

| | Modernist (default) | Atto (variante) |
|---|---|---|
| Titoli | Archivo 800 | Libre Franklin 800 |
| Corpo | Archivo 400/500 | Source Serif 4 400/500/600 |
| Carta | `#f3f2f2` | `#f3f1ea` |
| Inchiostro | `#201e1d` · hero `#0b0d12` | `#15181c` · hero `#0e1620` |
| Accento | `#ec3013` | `#b8371d` |
| Hero max | 88px | 60px |
| Misura | 1200px | 1120px |

Correzione applicata rispetto alla proposta: `--color-accent-200` da `#ad7a63`
a `#a06a52`, perché il valore proposto dava 2.65:1 contro il track degli orari
(serve 3:1 per WCAG 1.4.11). Verificato a calcolo: 3.25 sul track, 3.97 sulla
carta, 3.97 contro la barra.

**Stato: non approvata.** Il default resta Modernist. Resta disponibile perché il
costo di tenerla è un blocco di token, e perché serve da termine di paragone se
il committente fornirà mai un design Capital distinto.

## 15. Contrasto della fascia orari (difetto corretto)

La revisione dei contrasti ha trovato un difetto nel build già costruito, non
nelle proposte: `.hours__overlap` (`#ffe0d9`) contro il proprio track
(`#eae7e7`) dava **1.01:1**. La fascia "tutte e tre le sedi aperte" era l'unico
modo visivo di leggere quell'informazione ed era di fatto invisibile — WCAG 1.4.11
richiede 3:1 per gli elementi non testuali.

C'era anche un secondo difetto, più serio del contrasto: essendo l'**intersezione**
delle tre giornate, la fascia cade per definizione sotto tutte e tre le barre.
Disegnata dietro di esse era invisibile a prescindere dalla tinta.

Correzione strutturale: la fascia è ora disegnata **sopra** le barre
(`z-index: 1`, estesa di 8px oltre il track) come colonna traslucida
`color-mix(accent 16%)` delimitata da due filetti da 2px in `--color-accent`.
Il contrasto lo portano i filetti, non la tinta: 3.42:1 contro il track e 3.95:1
contro la barra nel tema Modernist, 4.22 e 3.05 in Atto. La legenda usa lo stesso
trattamento, così il campione corrisponde a ciò che si vede nel grafico.
Cattura: `docs/screenshots/hours-overlap-fixed.png`.

## 16. Pubblicazione su Vercel (24 ottobre 2026)

Il brief vietava di pubblicare e di creare progetti Vercel "senza approvazione
separata". L'approvazione è arrivata in chat: *"metti entrambi i siti su vercel
e dammi il link pubblico"*, poi *"tutti e due i siti, prendi anche quello su
artifacts"*. Tre progetti creati sull'account `gitgian74`.

| Progetto | URL | Cosa è |
|---|---|---|
| `silvestri-prototipo-artifact` | https://silvestri-prototipo-artifact.vercel.app | Il prototipo Claude Design originale, non modificato |
| `silvestri-sito-preview` | https://silvestri-sito-preview.vercel.app | Il sito Next.js, tema Modernist |
| `silvestri-mockup-capital` | https://silvestri-mockup-capital.vercel.app | I due mockup Capital A e B |

**Nessuno tocca il dominio del cliente.** Nessun DNS cambiato, nessun dominio
comprato, `silvestri-international.com` non sfiorato.

**Guardie attive su tutti e tre.** `robots.txt` con `Disallow: /`, header
`X-Robots-Tag: noindex, nofollow` sui due statici, meta
`noindex, nofollow, nocache` sul sito Next.js. `NEXT_PUBLIC_SITE_INDEXABLE`
resta `false`: il canonical del preview punta a sé stesso
(`silvestri-sito-preview.vercel.app`), non al dominio live, così non si crea
un duplicato che compete col sito del cliente.

**Flag di build del sito:** `REFERENCE_MEDIA=true` (per mostrare la direzione
artistica, come la si guardava in locale), `CLAIM_FIRST_FIRM=false`,
`THEME=modernist`, `INDEXABLE=false`.

### Cosa resta scoperto, e va sciolto prima di qualsiasi pubblicazione vera

1. **La data di fondazione *gennaio 2019*** resta nel prototipo e non è
   documentata in modo indipendente (`docs/OPEN-DATA.md`). Il superlativo che
   stava qui è stato rimosso: vedi §17.
2. **Foto Pexels/Unsplash con licenza non verificata**, ora su URL pubblici.
   `docs/ASSET-REGISTRY.md` elenca quali.
3. **Le 18 voci di `docs/OPEN-DATA.md`**, 10 bloccanti, restano aperte.
4. **La protezione Vercel** è attiva sui deployment di preview ma non sugli
   alias di produzione: i tre link sono raggiungibili da chiunque li abbia.
   Niente li indicizza, ma non sono segreti.


## 17. Superlativo rimosso dal prototipo pubblicato (24 ottobre 2026)

Il prototipo era stato messo online non ritoccato e conteneva ancora la
rivendicazione *"The first Italian law firm…"* / *"Il primo studio legale
italiano…"*, non documentata. Su richiesta del committente è stata rimossa e il
prototipo rideployato sullo stesso URL.

**19 sostituzioni in 5 file** — `Home.dc.html`, `Home-IT.dc.html`,
`About.dc.html`, `About-IT.dc.html`, `llms.txt` — allineate al testo già
approvato del sito Next.js, dove il claim è dietro `CLAIM_FIRST_FIRM=false`.

| Dove | Prima | Dopo |
|---|---|---|
| Hero home EN | The first Italian law firm and foreign legal consulting company… | An Italian law firm and foreign legal consulting company… |
| Hero home IT | Il primo studio legale italiano e foreign legal consulting company… | Uno studio legale italiano e foreign legal consulting company… |
| H1 Chi siamo EN | The first Italian law firm / in Florida. | An Italian law firm / in Florida. |
| H1 Chi siamo IT | Il primo studio legale italiano / in Florida. | Uno studio legale italiano / in Florida. |
| `<title>` Chi siamo EN | About the Firm — First Italian Law Firm in Florida | About the Firm — Italian Law Firm in Florida |
| `<title>` Chi siamo IT | Chi siamo — Il primo studio legale italiano in Florida | Chi siamo — Studio legale italiano in Florida |
| `og:description`, `meta description`, `keywords`, JSON-LD `description` | varianti del claim | riformulate senza superlativo |

La struttura su due righe degli H1 è stata mantenuta: cambia solo la prima riga,
così il disegno della pagina resta quello del prototipo.

Verificato sull'URL pubblico: `grep` di *"first italian"* e *"primo studio"* su
home, chi siamo e `llms.txt` in entrambe le lingue restituisce **0** occorrenze.

**Nota non risolta trovata strada facendo:** in `About-IT.dc.html` la
`description` del blocco JSON-LD è in inglese, non tradotta. È uno dei residui
già segnalati nell'audit iniziale e non è stato toccato in questo intervento.


## 18. Due difetti segnalati dal committente, corretti (24 ottobre 2026)

### 18.1 I mockup Capital non erano dinamici

Gli orari in footer erano scritti a mano (`09:41` / `15:41` / `11:41`). Ora
sono calcolati nel browser con `Intl.DateTimeFormat` sui tre fusi reali e
riaggiornati ogni 30 secondi; il DST lo risolve il motore, come nel sito.

Verificato sul pubblico: i tre orologi di A e di B coincidono al minuto con
l'ora attesa per `America/New_York`, `Europe/Rome` e `America/Montevideo`, e
nel DOM non resta traccia dei valori fissi.

### 18.2 Il prototipo aveva una grafica diversa fra IT e EN

Il markup era identico al 100% in tutte e sei le coppie di pagine
(confronto struttura tag/class/style: somiglianza 1.000, zero blocchi diversi).
La differenza era tipografica: il titolo della home.

| | EN | IT |
|---|---|---|
| H1 | 2 righe, 183px | **3 righe, 275px** |
| Altezza hero | 720px | **755px** |

A 88px con `letter-spacing -0.02em` la riga inglese occupa ~1034px su 1061
disponibili; *"Uno studio che le legge entrambe."* ne chiede ~1425 e va a capo.
Per farla stare a due righe senza toccare le parole servirebbe scendere a
**64px**, cioè il 27% in meno: a quel punto la differenza fra le due lingue
sarebbe il corpo del titolo invece del numero di righe. Peggio.

Ho misurato cinque varianti nel browser. **Solo una sta su due righe:**
*"Uno studio che le legge."* — tutte quelle che conservano *entrambe/entrambi*
ne richiedono tre.

### Decisione del committente: si tiene *entrambe*, si accettano le tre righe

La versione accorciata è stata provata e **scartata**: vale più la parola che
la simmetria. In italiano il titolo della home resta

> Due giurisdizioni.
> Uno studio che le legge entrambe.

su **tre righe**, con l'hero a 755px contro i 720px dell'inglese: 35px di
differenza fra le due lingue. Non è un difetto da correggere, è una
conseguenza accettata della lunghezza dell'italiano.

**Se un giorno si vuole la parità visiva**, le strade sono due e nessuna è
gratis: accorciare il titolo (si perde *entrambe*) oppure allargare il
contenitore dell'H1 oltre i 1061px attuali, che però tocca la griglia di tutte
le pagine. Il cambio di corpo tipografico è già stato escluso qui sopra.

### 18.3 Difetti trovati strada facendo

- **`<html>` senza attributo `lang`** su tutte e 12 le pagine del prototipo.
  Aggiunto `lang="en"` / `lang="it"`. Senza, uno screen reader legge l'italiano
  con la pronuncia inglese. Il sito Next.js lo faceva già correttamente.
- **`pnpm lint` era rotto** dopo aver copiato il prototipo dentro il progetto:
  il runtime Claude Design (`support.js`, `image-slot.js`, `_ds_bundle.js`)
  produceva 2 errori e 12 avvisi. Aggiunto `docs/**` agli `ignores` di
  `eslint.config.mjs`: è materiale di riferimento, non sorgente. Ora `lint`
  esce 0 e il build passa.

## 19. Da mockup a due siti completi, in un solo progetto Vercel

I due mockup statici erano una pagina sola, in inglese, con orari finti. Su
richiesta sono diventati **due siti interi e bilingue**, e non riscrivendo venti
pagine a mano: sono due **temi** dello stesso applicativo Next.js, come
Modernist e Atto. Contenuti, rotte, JSON-LD, orari con DST reale e hero video
arrivano dall'architettura esistente; il lavoro è stato solo il disegno.

`NEXT_PUBLIC_THEME` accetta ora quattro valori: `modernist` (default),
`institutional`, `capital-a`, `capital-b`.

### Un link solo, non due progetti

Il tema è una variabile di build: una build, un tema. Per avere entrambi i siti
dentro un unico indirizzo, `next.config.ts` accetta `NEXT_STATIC_EXPORT=true` e
`NEXT_BASE_PATH`, e lo script costruisce due export statici — uno radicato su
`/a`, uno su `/b` — che vengono uniti in una cartella sola con una pagina di
scelta bilingue alla radice. Un progetto Vercel, `silvestri-capital`, dieci
pagine per sito, cinque per lingua.

Tre ostacoli incontrati e risolti, tutti dovuti a `output: export`:
`sitemap.xml` e `robots.txt` richiedono `export const dynamic = "force-static"`;
la rotta catch-all del 404 non può esistere in export, e viene spostata da parte
durante le due build statiche (in export i percorsi sconosciuti li serve
`404.html`); `images.unoptimized` va attivato.

### Le due direzioni

| | A — Capital Close | B — Capital Measured |
|---|---|---|
| Composizione | centrata e simmetrica | allineata a sinistra, rigata |
| Testata | banda navy, nome al centro, nav serif | bianca, nav sans maiuscoletto |
| Titolo hero | serif azzurro maiuscolo + **sans pesante bianco** | serif su due voci, tutto serif |
| Carta | `#f5f6f7` | bianco |
| Navy | `#002949` | `#0b2a44` |
| Filetti | hairline 1px | 2px |
| Accento | `#4a85b8` | `#2f77a8` |

Entrambe usano Playfair Display + Raleway, cioè la coppia del riferimento.

**Vincolo di contrasto che ha deciso i due accenti.** L'accento disegna i filetti
della fascia orari, che devono stare sopra 3:1 sia contro il track chiaro sia
contro la barra scura. Un navy pieno fallisce contro la barra (2.8:1), un
azzurro chiaro fallisce contro il track: servono valori con luminanza intorno a
0.20. Da lì `#4a85b8` (3.17 sul track, 4.05 sulla barra) e `#2f77a8`
(4.12 e 3.58).

**Difetto trovato a schermo e corretto:** in A la CTA della testata era
`--color-accent-solid`, cioè navy, su una banda navy. Invisibile. Ora è un
bottone bordato chiaro.

## 20. Privacy e cookie: l'audit dice il contrario di quel che ci si aspetta

Vedi `docs/PRIVACY-AUDIT.md`. In sintesi, misurato sul pubblicato: **zero
cookie**, zero storage, zero analytics, font self-hosted, mappe click-to-load.
Quindi **nessun cookie banner è dovuto**.

Il problema vero è un altro: con `REFERENCE_MEDIA=true` il sito contatta
`videos.pexels.com`, `images.pexels.com` e `images.unsplash.com`, trasmettendo
l'IP del visitatore a server statunitensi prima di qualsiasi consenso.
Si chiude acquistando le licenze e ospitando i file: le richieste a terzi
vanno a zero.

Mancano in entrambe le direzioni, e in entrambe le lingue: informativa privacy,
informativa al punto di raccolta del modulo, cookie policy, **disclaimer
professionale** (il più importante e oggi del tutto assente), dati di iscrizione
all'Ordine.

## 21. Il progetto si sposta dentro il repo gianlucapiazza-website

Da `Google Drive/SILVESTRI/` a `~/Projects/gianlucapiazza-website/projects/silvestri/`,
come sotto-cartella di progetto. Copiati 28 MB su 545: fuori `node_modules`
(476 MB), `.next` e gli `out` delle build, tutti rigenerabili.

Il repo ospite è un sito Vite attivo, con lavoro non committato su un branch di
feature. Tre cose andavano sistemate prima, o lo avrei rotto:

| | Problema | Fatto |
|---|---|---|
| `eslint.config.js` | `eslint .` alla radice avrebbe lintato anche questo progetto, che ha la propria configurazione | aggiunto `projects/**` agli `ignores` |
| `.vercelignore` | il sotto-progetto sarebbe stato caricato a ogni deploy di gianlucapiazza.com | aggiunto `projects` |
| `.gitignore` | `.next` e `out` non erano previsti in quel repo e sarebbero finiti committati | aggiunti, con `*.tsbuildinfo` |

In più, `docs/capital-sites/{a,b}` sono export rigenerabili: un `.gitignore`
locale li tiene fuori da git e lascia dentro solo la pagina di scelta e la
configurazione, che sono scritte a mano. Senza quella regola entravano 345 file;
con essa, 133.

**Verificato dopo lo spostamento.** Repo ospite: `pnpm install`, `lint` esce 0
(14 avvisi preesistenti, nessuno che citi `projects/`), `build` esce 0 con 2063
moduli. Sotto-progetto: `typecheck`, `lint` e `build` escono 0 con 14 rotte, e
`scripts/build-capital.sh` ricostruisce entrambe le direzioni dalla nuova
posizione rimettendo a posto la rotta catch-all. I quattro link `.vercel` sono
sopravvissuti alla copia, quindi i redeploy funzionano da qui.

Il lint del repo ospite non girava nemmeno prima: mancava `node_modules`. L'ho
installato per poter verificare davvero, invece di dichiarare che non avevo
rotto niente senza averlo provato.

**Niente è stato committato.** Quel branch ha modifiche di altro lavoro in corso
e non le mescolo con questo spostamento.

## 22. Atto pubblicato, dentro il progetto che c'era già

Atto era l'unica delle quattro direzioni mai messa online: esisteva solo come
blocco di token. Su richiesta è stato pubblicato **senza creare un quinto
progetto Vercel**, come terzo ramo di `silvestri-capital`:

| | |
|---|---|
| `/a` | Capital Close |
| `/b` | Capital Measured |
| `/atto` | Atto |

`scripts/build-capital.sh` costruisce ora tre export invece di due, la pagina di
scelta ha tre schede e `docs/capital-sites/.gitignore` tiene fuori da git anche
`atto/`, che è generato come gli altri.

**Verificato sul pubblico con gli stili calcolati dal browser**, non con un grep
sul CSS: tutti i temi stanno nello stesso foglio, quindi cercare `--color-accent`
nel sorgente restituisce il primo blocco, cioè Modernist. Il valore che conta è
quello risolto a pagina caricata.

| | risolto su `/atto/` |
|---|---|
| `data-theme` | `institutional` |
| `--color-accent` | `#b8371d` |
| `--color-bg` | `#f3f1ea` |
| titoli | Libre Franklin |
| corpo | Source Serif 4 |

Otto percorsi provati fra le tre direzioni, tutti 200, `lang` corretto in
entrambe le lingue, `X-Robots-Tag: noindex` attivo.

**Dettaglio tipografico.** In Atto il titolo italiano *"Uno studio che le legge
entrambe."* sta su **due righe**, non tre: la scala di Atto arriva a 60px contro
gli 88px di Modernist, quindi la riga ci entra. Lo scarto IT/EN discusso in §18
è un problema del solo Modernist, non del contenuto.

## 23. Video di giorno e selettore giorno/notte

### Il filmato

Cercato su Pexels con il vincolo dato: colorato, soleggiato, luce viva, e che
dica *finanza*, quindi Brickell. Scartati nell'ordine: una periferia con
autostrada e parcheggio, uno skyline con cantieri e scalo ferroviario in primo
piano, uno grigio e coperto, uno in controluce con la città in silhouette.

**Scelto Pexels 6345015** — skyline di Brickell dalla baia, acqua turchese,
cielo pulito, 1920×1080.

**Un candidato è stato scartato per la forma, non per il contenuto.** Quello che
piaceva di più a prima vista (30679246, Brickell Key sull'acqua) è **verticale,
1080×1920**: in una hero a tutta larghezza se ne vedrebbe una fetta stretta.
Resta buono per un eventuale hero mobile, dove il formato è invece ideale.
Verificato l'orientamento di tutti e dieci i candidati prima di decidere.

### Ospitati dal sito, non più da Pexels

Scaricati, tagliati e ricodificati in `public/video/`: 4,2 MB il giorno (da 15),
2,5 MB la notte (da 11), con il fotogramma di copertina estratto.

Conseguenza misurata sul pubblicato: le origini terze contattate al caricamento
passano da **tre a una**. Spariscono `videos.pexels.com` e `images.pexels.com`;
resta `images.unsplash.com` per le due fotografie della sezione "il ponte".
Cookie e storage restano a zero.

Licenza Pexels letta, non data per buona: uso commerciale libero, attribuzione
non richiesta, modifica consentita. Dettaglio in `docs/ASSET-REGISTRY.md`.

Per questo i filmati **non sono più dietro `NEXT_PUBLIC_REFERENCE_MEDIA`**: quel
flag esisteva per i media a licenza non verificata, e questi ora una licenza ce
l'hanno. Resta attivo per le sole fotografie.

### Il selettore

Tre bottoni in basso a destra nella hero: Giorno · Notte · Pausa. Le etichette
sono passate dal dizionario in entrambe le lingue — prima erano scritte in linea
in `HomeView.tsx` con un ternario sul locale, fuori dall'architettura del resto
del sito.

- `role="group"` con `aria-label`, `aria-pressed` su giorno e notte.
- 44px di altezza, contrasto 18:1 e 19:1 misurato sui colori calcolati.
- La barra ha un fondo scuro proprio: il contrasto non può dipendere da quale
  fotogramma passa sotto, che di giorno è un cielo chiarissimo.
- Chi arriva con `prefers-reduced-motion` resta sul fotogramma fisso, anche
  cambiando vista.
- **La scelta non viene memorizzata**: niente cookie, niente storage, così
  l'audit privacy resta vero.
- Default: **giorno**. Si cambia con una riga, `DEFAULT_VIEW` in `HeroMedia.tsx`.

**Difetto trovato provando, non leggendo.** Alla prima stesura il cambio vista
fermava il video: il `key` sul `<video>` ne forza il rimontaggio, quindi il
`play()` chiamato dentro il gestore del click agiva sull'elemento vecchio.
Spostato in un `useEffect` legato alla vista, che gira dopo il commit di React.
Verificato in entrambe le direzioni: la riproduzione continua e l'etichetta
resta "Pausa".

Vale per tutti e quattro i temi, perché il componente è uno solo: Modernist,
Capital A, Capital B e Atto.

### Anche sul prototipo artifact

Portato pure lì, su richiesta, riscrivendo `buildHero()` nel componente React
del runtime Claude Design e aggiungendo uno slot `{{ heroControls }}` nel
template della hero, in entrambe le lingue. Stesso comportamento, stesse
etichette, stesso `aria-pressed`. Niente bottone pausa: il prototipo non ne ha
mai avuto uno.

I video del prototipo sono ora locali come sugli altri siti, e con essi sono
spariti gli ultimi tre riferimenti a Pexels, compreso lo sfondo CSS del
contenitore e i `meta` delle risorse esterne.

**Misura che vale la pena registrare.** Senza più Pexels, il prototipo contatta
comunque `unpkg.com` (React, caricato dal runtime Claude Design) e
`fonts.googleapis.com` (Archivo da remoto), oltre a `images.unsplash.com`. Il
sito Next.js non fa né l'una né l'altra cosa: React è nel bundle e i font sono
self-hosted. È una ragione concreta, misurata, per cui il brief diceva di non
portare quel runtime in produzione.
