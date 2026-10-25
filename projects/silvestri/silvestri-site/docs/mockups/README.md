# Mockup Capital — A e B

Due statici, nessuno dei due è implementato nel sito. Servono a decidere
**quanto vicino** stare alla pagina incollata in chat
(`raymondjames.com/brickell21capital`) prima di spendere lavoro su un tema.

| | File | Screenshot |
|---|---|---|
| **A — Capital Close** | `capital-a-close.html` | `../screenshots/capital-mockups/A-1440.png` · `A-390.png` |
| **B — Capital Measured** | `capital-b-measured.html` | `../screenshots/capital-mockups/B-1440.png` · `B-390.png` |

Si aprono con un doppio clic: sono HTML autonomi, nessuna build.

## L'unica variabile è la composizione

Stessa coppia tipografica in entrambi — **Playfair Display + Raleway**, cioè
quella del riferimento — così il confronto non è confuso da due variabili.
I font sono Google Fonts, liberi: non sono un marchio di nessuno.

| | A — Close | B — Measured |
|---|---|---|
| Composizione | centrata e simmetrica, come il riferimento | allineata a sinistra e rigata, come Silvestri oggi |
| Testata | banda navy + wordmark centrato + nav serif centrata | logo a sinistra, nav a destra, filetto navy |
| Hero | foto full-bleed, titolo a due voci sovrapposto | testo a sinistra, foto incorniciata con filetto 2px |
| Pesi | serif 400 + sans 800, molta aria | sans 800 strutturale, più densità |
| Fascia ambito | due colonne centrate su bianco | banda navy piena, filetti azzurri |
| Aree | elenco centrato, solo nomi | elenco rigato con descrizioni |
| Lunghezza home | 3056px @1440 | 2842px @1440 |

Palette identica nei due, presa dal riferimento: navy `#002949`, inchiostro
`#393939`, blu medi `#104C6E` / `#3F6B90`, azzurro `#B7DEFF`, carta `#f5f6f7`.

## Cosa non c'è, e non ci sarà

Nessun badge BrokerCheck, nessuna disclosure FINRA/SIPC, nessun claim
d'investimento, nessun logo Raymond James, nessun lockup a due marchi. Sono
obblighi di un intermediario finanziario: su un sito legale sarebbero falsi.
Resta invece il limite FLC nel footer e la fascia "ambito diretto / ambito
coordinato", che su un sito legale servono davvero.

## Contrasti misurati

Non stimati a occhio: campionati sui pixel dello screenshot.

- Hero A, riga serif `#B7DEFF` (34px, testo grande → soglia 3:1): mediana
  **11.39:1**, 95° percentile **6.42:1**, pixel peggiore **4.41:1**. Passa.
- Hero A, riga bianca (46px): mediana **16.05:1**, pixel peggiore **6.22:1**.
- Vale per *questa* foto. Una foto definitiva diversa va rimisurata.

## Limiti dei mockup

- Foto Unsplash di riferimento, licenza **non verificata** — etichettata nei file.
- Orari in footer **dal vivo**, calcolati con `Intl.DateTimeFormat` sui fusi
  reali (`America/New_York`, `Europe/Rome`, `America/Montevideo`) e aggiornati
  ogni 30 secondi. Il DST lo risolve il motore del browser.
- Solo la home, solo in inglese. Nessuna pagina interna, nessun IT.
- Nessuno dei due tocca `src/`. Il sito corrente non è stato modificato.

## Nota di metodo

Gli screenshot mobile di questa cartella e quelli del sito in `../screenshots/`
sono stati rifatti con Playwright. Chrome headless impone un viewport minimo di
**500px**: ogni cattura "a 375/390px" fatta con `--window-size` mostrava un
layout a 500px ritagliato, cioè un finto straripamento. Il sito a 390px è
sempre stato corretto; sbagliate erano le catture.
