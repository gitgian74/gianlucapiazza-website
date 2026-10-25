# Registro asset

Ogni immagine e ogni filmato del sito ha licenza verificata ed è servito dal sito
stesso: al caricamento di una pagina non parte nessuna richiesta a terzi. Restano
segnaposto dichiarati solo i ritratti.

## Fotografie — licenziate e ospitate dal sito (25 ottobre 2026)

In `public/photo/`, WebP qualità 82. Tre scatti Pexels, ritagliati per ogni slot.

| File | Slot | Origine | Pixel | Peso |
|---|---|---|---|---|
| `miami-twilight.webp` | Home, ponte, cella Italia → USA (16:10) | Pexels 8574509 — Downtown Miami al crepuscolo dalla Biscayne Bay | 1400×875 | 115 KB |
| `rome-rooftops.webp` | Home, ponte, cella USA → Italia; Chi siamo, missione (16:10) | Pexels 5035532 — tetti del centro di Roma al tramonto | 1400×875 | 114 KB |
| `brickell-bay.webp` | Home, rete; Chi siamo, fascia (21:9) | Pexels 8611579 — skyline di Miami dalla Biscayne Bay, di giorno | 2100×900 | 226 KB |

**Totale 455 KB**, contro ~983 KB che prima arrivavano da `images.unsplash.com`.

**Ritocco su Pexels 8611579:** sul parapetto di un edificio era leggibile, a
ingrandimento, l'insegna di una banca d'affari. In una foto che accompagna la
sede di Miami poteva leggersi come un'associazione, e il brief
esclude affiliazioni finanziarie dal sito legale. L'insegna è stata rimossa
riempiendo il pannello col suo stesso colore. Per lo stesso motivo era stato
scartato Pexels 4118101, che mostra un cartellone pubblicitario di un marchio di moda.

**Testi alternativi e didascalie scritti su quello che le foto mostrano davvero:**
la cella Italia → USA dice "Downtown Miami", non "Brickell", perché è Downtown;
e la foto sulla baia dice solo "Miami": Pexels la descrive come skyline di Miami
sulla Biscayne Bay, e che sia proprio Brickell era una deduzione dagli edifici,
non un fatto.

Il prototipo Claude Design (`docs/prototype-artifact/photo/`) usa gli stessi
file più due tagli suoi: `rome-rooftops-portrait.webp` (4:5, Chi siamo) e
`brickell-bay-3x2.webp` (lo slot della rete lì è 951:665).

**Scartate dalla direzione precedente:** le tre foto Unsplash (licenza mai
verificata). `photo-1748380868276` in particolare ritraeva una passeggiata
turistica con persone al telefono: leggeva come lifestyle da viaggio, non come il
quartiere della sede di uno studio legale.

## Da produrre

| Asset | Specifica | Note |
|---|---|---|
| Ritratto Lorenzo Silvestri | 4:5, bianco e nero, sfondo neutro | nessun volto generato; lo slot resta dichiarato finché non arriva la foto |
| Ritratto Guillermina Rodríguez Carpin | 4:5, bianco e nero, sfondo neutro | idem |
| Fotografie proprietarie | 16:10 e 21:9, colore | facoltative: le Pexels coprono già ogni slot; uno scatto degli uffici veri le batterebbe |
| Logo vettoriale | SVG | oggi esiste solo il wordmark tipografico `SILVESTRI.`; non è un logo ufficiale recuperato |
| Loghi partner | SVG | Coen Palandri Silvestri, FIDREV, IACC — serve autorizzazione all'uso del marchio |
| Immagine OG/social | 1200×630 | assente di proposito: meglio nessuna `og:image` che una rotta |

## Terze parti già nel sito

| Risorsa | Come è gestita |
|---|---|
| Archivo (Google Fonts) | scaricato e self-hosted al build da `next/font`. Nessuna richiesta a Google a runtime |
| Google Maps (3 embed) | caricata solo dopo clic esplicito, con avviso su IP e cookie. Il pin di Miami nell'URL contiene `1200 Brickell Ave # 310-B` mentre il testo dice Suite 310: da riconciliare |


## Video della hero — licenziati e ospitati dal sito (24 ottobre 2026)

Entrambi in `public/video/`, serviti dal sito: nessuna richiesta a Pexels al
caricamento. Ritagliati e ricodificati (h264, senza audio, `+faststart`).

| | File | Origine | Peso |
|---|---|---|---|
| Giorno | `miami-day.mp4` + `.jpg` | Pexels 6345015 — skyline di Brickell dalla baia, 1920×1080 | 4,2 MB (da 15) |
| Notte | `miami-night.mp4` + `.jpg` | Pexels 19109601 — lo stesso già in uso, 1280×720 | 2,5 MB (da 11) |

**Licenza Pexels**, letta il 24 ottobre 2026 su `pexels.com/license`: uso
gratuito anche commerciale, attribuzione non richiesta, modifica consentita.
Vietati: vendere copie non modificate, lasciar intendere un'approvazione da
parte di persone o marchi, redistribuire su altre piattaforme stock, usare come
marchio. Nessuno di questi casi si applica: sono riprese aeree senza persone
identificabili, tagliate e ricodificate, usate come sfondo.

La stessa licenza copre le fotografie. Il flag `NEXT_PUBLIC_REFERENCE_MEDIA`, che
nascondeva i media senza licenza, è stato rimosso il 25 ottobre: non ha più nulla
da nascondere.
