# Coerenza visiva con Brickell 21 Capital — blocco aperto

## Stato

**Il riferimento non esiste nella forma richiesta.** Non è stato fornito alcun
link al design Capital, export o screenshot approvato — e la verifica tecnica del
24-10-2026 mostra perché probabilmente non esiste affatto un design autonomo.

### Verifica del dominio Capital (24-10-2026)

| Controllo | Risultato |
|---|---|
| `dig brickell21invest.com` | `3.33.139.32` |
| `curl http://www.brickell21invest.com/` | **`301 Moved Permanently` → `https://www.raymondjames.com/brickell21capital/about-us/bio?_=Francesco`** |
| `curl https://www.brickell21invest.com/` | **`ECONNREFUSED` sulla 443**: l'HTTPS non è servito |
| Scheda IACC | "Brickell 21 Financial Centre - 1200 Brickell Avenue I Suite 310, Miami, FL. 33131" · contatto "Mr. Francesco Traina - International Wealth Advisor" · settore Financial Services · sito dichiarato `www.brickell21invest.com` |
| Ricerca pubblica | Brickell 21 Capital Management risulta un team di wealth management allineato a Raymond James; le sue pagine vivono su `raymondjames.com/brickell21capital/` |

**Conseguenza:** l'identità web pubblica di Brickell 21 Capital è un **microsito
su template Raymond James**, non un sistema visivo proprio. "Rendere Silvestri
coerente con Capital" significherebbe quindi importare il linguaggio di una
società di investimento americana in un sito legale — proprio ciò che il brief
vieta ("non importare badge finanziari, affiliazioni Raymond James o claim
d'investimento"). Finché il committente non fornisce un design Capital distinto,
non c'è nulla di autonomo a cui somigliare.

**Nota di fatto, non di claim:** Silvestri International e Brickell 21 Capital
Management risultano allo **stesso indirizzo e alla stessa suite** — 1200 Brickell
Ave, Suite 310 — da due fonti indipendenti (pagina About di Silvestri e scheda
IACC). La condivisione dell'indirizzo è documentata; **proprietà, controllo o
appartenenza societaria no**, e nel sito non compaiono.

### Altre fonti controllate

- `https://www.iaccse.com/members/brickell-21-capital-management/` identifica la
  società e rimanda a `https://www.brickell21invest.com/`. È una fonte di identità
  societaria, non il prototipo richiesto.
- `https://brickell21.com/` è segnalato come Brickell21 ACCESS/coworking: **non va
  usato come sostituto** del riferimento Capital.
- `https://www.habita.one/partners/` elenca Silvestri International e Brickell21
  come voci distinte: non prova proprietà né controllo.
- Le pagine pubbliche di Silvestri non menzionano Brickell 21 Capital.

Perciò nel sito **non compare alcun riferimento al gruppo**: nessun logo, nessuna
dicitura "group company", nessuna partnership esclusiva, nessun badge finanziario,
nessuna affiliazione Raymond James, nessun claim d'investimento. L'unica menzione
di "Brickell 21" è il **Brickell 21 Financial Centre**, cioè l'indirizzo
dell'ufficio di Miami, già dichiarato sul sito pubblico del cliente.

## Il design Capital, letto davvero (24-10-2026)

La pagina è stata aperta nel browser dell'utente, perché `raymondjames.com`
respinge ogni client automatico. Catture in `docs/screenshots/capital-reference/`.
Valori estratti dagli stili calcolati, non stimati a occhio.

| Dimensione | Brickell 21 Capital (rilevato) |
|---|---|
| Marchio | lockup **co-brandizzato** "BRICKELL 21 / CAPITAL MANAGEMENT" **\|** "RAYMOND JAMES" su fascia navy |
| Tipografia | **Playfair Display** 300/400 (didone ad alto contrasto, maiuscoletto) + **Raleway** 300/400 (geometrico). Nessun peso oltre il 400 salvo il titolo hero |
| Palette | navy `#002949` dominante · testo `#393939` · grigio `#929090` · blu medi `#104C6E` e `#3F6B90` · azzurro filetto `#B7DEFF` · fondi bianco e `#c7c7c7` |
| Composizione | home **centrata e simmetrica**; pagine interne allineate a sinistra con misura stretta |
| Filetti | hairline grigio con segmento centrale azzurro, 1px |
| Fotografia | full-bleed, torri di Brickell al crepuscolo in dominante blu; ritratti di gruppo a colori su fondo grigio |
| CTA e footer | campo navy, titolo in maiuscoletto serif + riga in sans bold, logo doppio impilato |
| Conformità | badge **BrokerCheck**, disclosure FINRA/SIPC, "Brickell21 Capital is separately owned and operated and not independently registered as a broker-dealer or investment adviser" |
| Indirizzo nel footer | **1200 Brickell Ave Ste 310, Miami, FL 33131** — identico a quello di Silvestri |

## Matrice: cosa condividere, cosa differenziare

| Dimensione | Condividere | Differenziare | Perché |
|---|---|---|---|
| Registro | la sobrietà e la presenza di una voce serif | Capital mette il serif nei titoli, Silvestri lo mette nel **corpo** | parentela di registro senza ricalco tipografico; Playfair + Raleway sono la firma del template, non un linguaggio neutro |
| Palette | il campo scuro come ancora della pagina | navy `#002949` → inchiostro `#0e1620`, azzurro `#B7DEFF` → nessun equivalente | un navy quasi identico leggerebbe come stesso emittente; l'inchiostro freddo è parente ma non confondibile |
| Accento | abbassare la temperatura | rosso ceralacca `#b8371d` invece del rosso editoriale `#ec3013` | Capital non ha accento caldo: scendere di saturazione avvicina il registro senza adottarne il blu |
| Griglia | misura stretta e aria abbondante | Capital centra la home, Silvestri resta **allineato a sinistra e rigato** | la simmetria centrata è il tratto più riconoscibile del template: ereditarla significherebbe sembrare la stessa società |
| Fotografia | soggetto condiviso: Brickell | Capital full-bleed a colori, Silvestri inquadrata con filetto 2px, bianco e nero per i ritratti | stesso luogo, trattamento diverso: vicinanza senza sovrapposizione |
| Peso tipografico | — | Capital 300/400, Silvestri 800 sull'arredo | l'autorità dello studio sta nella struttura, non nella leggerezza |
| Conformità | **nulla** | nessun badge BrokerCheck, nessuna disclosure FINRA/SIPC, nessun claim d'investimento, nessun logo Raymond James | sono obblighi di un intermediario finanziario: su un sito legale sarebbero falsi |

**Conclusione.** Non esiste un "design Capital" autonomo da cui ereditare: esiste
un template Raymond James co-brandizzato. La parentela realizzabile è di
**registro** — sobrietà, misura stretta, voce serif, accento freddo — non di
palette o di composizione. La variante `institutional` ("Atto") implementa
esattamente questa lettura ed è attivabile con `NEXT_PUBLIC_THEME=institutional`.

## Cosa serve per chiudere il punto

Una di queste, approvata dal committente:

1. il link al progetto/design Capital;
2. un export del design system;
3. screenshot approvati delle schermate chiave.

## Come è stato preparato il terreno

L'implementazione corrente è una **proposta provvisoria** basata sul sistema
Silvestri verificato (Modernist). Tutto ciò che un allineamento toccherebbe sta
in un unico punto, `src/styles/globals.css`, nel blocco `:root`: colori,
tipografia, scala tipografica, spaziature, raggi, spessore dei filetti, larghezza
del contenitore, gutter e ritmo verticale. Sostituire quei token cambia il sito
senza toccare un solo componente.

## Matrice da compilare quando arriva il riferimento

| Dimensione | Silvestri oggi | Capital | Condividere | Differenziare | Perché |
|---|---|---|---|---|---|
| Griglia | contenitore 1200, gutter clamp(20,5vw,72) | — | | | |
| Densità | sezioni clamp(56,7vw,92) | — | | | |
| Tipografia | Archivo 800/500/400 | — | | | |
| Palette | `#f3f2f2` / `#eae9e9` / `#201e1d` / `#ec3013` | — | | | |
| Fotografia | urbana a colori, ritratti B/N | — | | | |
| CTA | campo rosso pieno, bottoni squadrati | — | | | |
| Motion | nessuna animazione decorativa | — | | | |

Regola che non cambia con l'allineamento: il marchio dello studio non deve essere
subordinato a quello del gruppo, e nessun elemento finanziario del gruppo entra in
un sito legale.
