# Registro asset

Nessuna licenza è stata verificata. Gli URL qui sotto provengono dal prototipo e
sono **riferimenti di direzione artistica**, non prove di diritto d'uso.
In build normale non viene caricato nulla di tutto questo: i segnaposto
dichiarati sono serviti dal sito stesso.

## Media di riferimento (solo con `NEXT_PUBLIC_REFERENCE_MEDIA=true`)

Peso e dimensioni misurati il 24-10-2026 con `curl` e dal browser.

| Uso | Origine | URL | Peso | Pixel reali | Licenza |
|---|---|---|---|---|---|
| Video hero home | Pexels 19109601 | `https://videos.pexels.com/video-files/19109601/19109601-hd_1920_1080_24fps.mp4` | **9 875 KB** | **1280×720** (il nome del file dice 1920×1080) | da verificare |
| Poster hero | Pexels 19109601 | `https://images.pexels.com/videos/19109601/florida-miami-miami-drone-miami-florida-19109601.jpeg?auto=compress&cs=tinysrgb&w=1920` | 241 KB | 1920 px | da verificare |
| Ponte, cella Italia → USA | Unsplash | `https://images.unsplash.com/photo-1566805068958-92c5648061e6?auto=format&fit=crop&w=1400&q=80` | 358 KB | 1400×927 in slot 491×305 | da verificare |
| Ponte, cella USA → Italia | Unsplash | `https://images.unsplash.com/photo-1752886355870-17e8ebe79a05?auto=format&fit=crop&w=1400&q=80` | 223 KB | 1400×933 in slot 491×305 | da verificare |
| Home, rete | Unsplash | `https://images.unsplash.com/photo-1748380868276-6faae7e27b94?auto=format&fit=crop&w=1600&q=80` | 402 KB | 1600×1067 in slot 1052×449 | da verificare |
| Chi siamo, missione | Unsplash | `https://images.unsplash.com/photo-1752886355870-17e8ebe79a05?auto=format&fit=crop&w=1200&q=80` | 170 KB | 1200×800 in slot 491×305 | da verificare |
| Chi siamo, fascia rete | Unsplash | `https://images.unsplash.com/photo-1748380868276-6faae7e27b94?auto=format&fit=crop&w=2400&q=80` | 812 KB | 2400×1600 in slot 1052×449 | da verificare |

**Peso della home con i media di riferimento accesi:** ~211 KB di risorse proprie
(HTML, CSS, JS, font self-hosted) + 241 KB di poster + ~983 KB di fotografie +
**9,6 MB di video in streaming**. Il video è l'88% del peso totale. Non blocca il
primo rendering — `preload="none"`, poster subito, riproduzione solo dopo il
montaggio e mai con `prefers-reduced-motion` — ma è traffico reale a ogni visita.

Se il video resta nella direzione definitiva, va ricodificato: loop corto di 6–8
secondi, 1280×720 (la risoluzione vera del file), target 2–3 MB. In alternativa
basta il poster fermo, che è già più sobrio.

**Nota di direzione artistica:** `photo-1748380868276` (usata due volte: rete in
home e fascia di Chi siamo) ritrae una passeggiata turistica con persone al
telefono. Legge come lifestyle da viaggio, non come il quartiere della sede di uno
studio legale. Le altre due — skyline di Brickell al tramonto e Roma all'ora
d'oro — reggono molto meglio.

## Da produrre

| Asset | Specifica | Note |
|---|---|---|
| Ritratto Lorenzo Silvestri | 4:5, bianco e nero, sfondo neutro | nessun volto generato; lo slot resta dichiarato finché non arriva la foto |
| Ritratto Guillermina Rodríguez Carpin | 4:5, bianco e nero, sfondo neutro | idem |
| Fotografia Brickell / Miami | 16:10 e 21:9, colore | serve licenza commerciale o scatto proprietario |
| Fotografia Roma | 16:10, colore | idem |
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

Per questo i filmati **non** dipendono più da `NEXT_PUBLIC_REFERENCE_MEDIA`, che
resta per le sole fotografie Unsplash, ancora senza licenza verificata.
