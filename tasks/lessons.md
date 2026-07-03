# Lessons — gianlucapiazza-website

### 2026-07-03 · Smoke test su porta condivisa = verifica del codice sbagliato
**Pattern**: `dev_server_guard.py` riusava qualunque server già in ascolto su :5173; lanciato da un worktree, lo smoke ha validato il vite del repo principale (passava "verde" senza testare le modifiche).
**Regola**: prima di dichiarare verde un test che dipende da un server locale, verifica CHI serve la porta (`lsof -p <pid> | grep cwd`); nei worktree usa sempre `SMOKE_PORT` dedicata.
**Esempio**: ❌ `pnpm test:smoke` con vite del clone principale su :5173 · ✅ `SMOKE_PORT=5273 pnpm test:smoke`
**Perché**: un guard "already running" senza controllo dell'origine trasforma il test in un falso positivo silenzioso — collegato al problema storico dei due cloni locali.
**Hook candidate**: non necessario — fix deterministico già nel repo (env `SMOKE_PORT` in `scripts/dev_server_guard.py` + `scripts/smoke_routes.py`, PR #14).

### 2026-07-03 · Asset CDN di terzi possono sparire in silenzio
**Pattern**: la hero Unsplash di Boston (`photo-1501979376754…`) è stata rimossa upstream: 404 in produzione da data ignota, nessun alert.
**Regola**: niente URL di CDN di terzi per asset critici di pagina (hero/OG image) — self-hostare con la pipeline heroes (ffmpeg hqdn3d + scale 1600 + cjpeg q50).
**Esempio**: ❌ `backgroundImage="https://images.unsplash.com/…"` · ✅ `/images/heroes/boston.jpg`
**Perché**: gli asset esterni sono dipendenze runtime invisibili a build e CI; falliscono solo davanti all'utente.

### 2026-07-03 · Fallback prerender senza sipario JS = flash di testo grezzo
**Pattern**: il fallback statico per crawler dentro `#root` (GEO) restava visibile a ogni reload finché React non montava — "pagina scura con testo" segnalata dall'utente su home e chi-siamo.
**Regola**: ogni contenuto fallback pre-hydration nasce già con il sipario: script inline in `<head>` che aggiunge `html.js` + CSS `html.js .fallback{display:none}`. HTML identico per tutti (no cloaking), i browser non lo dipingono mai.
**Esempio**: ❌ fallback nudo in #root · ✅ `classList.add('js')` prima del primo paint
**Perché**: i crawler AI leggono il markup, non il rendering; gli umani vedono solo il paint — le due audience si separano con la classe, non con HTML diverso.
**Hook candidate**: no — assert di regressione già in validate_marketing_execution.py.
