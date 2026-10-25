# Lezioni

- **2026-10-25 — Aggiungere un tema = rilanciare `tsc`.** `THEMES` alimenta mappe `Record<Theme, …>` (es. `RootHtml` per i font). Il typecheck fatto prima dell'aggiunta era verde e non diceva niente; l'errore è uscito solo in build.
- **2026-10-25 — I rapporti di contrasto si misurano nel browser, non a mano.** Calcolato a mano "16,1:1", misurato 14,9:1. Il criterio era rispettato comunque, il numero scritto no.
- **2026-10-25 — `src` scritto a mano su `<img>`/`<video>` non riceve il `basePath`.** Solo gli asset di Next e `<Link>` lo ricevono. Passare sempre da `asset()`.
- **2026-10-25 — La build degli export cancella `.next`.** Mai nella cartella di un `pnpm dev` aperto: usare una copia.
- **2026-10-25 — Il pannello anteprima risolve i percorsi relativi di `launch.json` contro la cartella di nascita della sessione.** Ha avviato la copia su Drive mostrando contenuti vecchi. Percorsi assoluti.
