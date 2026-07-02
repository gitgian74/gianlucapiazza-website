# Runbook — Deploy, rollback e regole operative

> Nato dall'incidente del 15/06/2026: un `vercel --prod` lanciato a mano da un working
> tree sporco ha riportato in produzione il logo vecchio, scavalcando `main`.
> Queste regole esistono perché non succeda più.

## Clone canonico

`/Users/gianlucapiazza/Projects/gianlucapiazza-website`

Il clone in `Projects/_Software/Portfolio/gianlucapiazza-website` è deprecato: non
lavorarci, non committarci, non deployare da lì.

## Come si deploya

1. Branch da `main` (`feat/…`, `fix/…`, `chore/…`), commit, push.
2. Pull request su GitHub → la CI (lint + build + test:marketing) e il preview
   deployment Vercel partono da soli. Verifica il preview URL.
3. Merge della PR → Vercel deploya `main` in produzione automaticamente (~20s).
4. Verifica live: `curl -sL https://www.gianlucapiazza.com/<pagina-toccata>`.

**Vietato**: `vercel --prod` manuale (da qualsiasi stato del tree), push diretto su
`main`, deploy con working tree sporco. La produzione è definita da `main`, sempre.

## Rollback

Vercel dashboard → progetto `gianlucapiazza-website` → Deployments → deployment
precedente con target Production → **Promote to Production**. Poi sistemare `main`
con un revert PR (`git revert -m 1 <merge-sha>`): il rollback da dashboard è un
tampone, non lo stato di verità.

## Gate pre-merge (li fa la CI, replicabili in locale)

```bash
pnpm lint            # 0 errori richiesti
pnpm build           # vite build + 18 pagine SEO statiche generate
pnpm test:marketing  # invarianti copy/eventi
pnpm test:smoke      # opzionale in locale: serve python3 + playwright e dev server
```

## Aggiungere una route (checklist)

Le route sono registrate a mano in più punti (debito noto, vedi chip "Refactor
market landing architecture"). Fino al consolidamento, una route nuova richiede:

1. `src/App.jsx` — la `<Route>`
2. `public/sitemap.xml` — la `<url>`
3. `scripts/smoke_routes.py` — la voce in `ROUTES`
4. Se è una pagina mercato: entry in `src/pages/markets/marketLandingData.js`
   (l'HTML statico segue da solo); se è SEO landing: `src/pages/seo/seoPageData.js`
5. Footer in `src/components/Layout.jsx` se deve comparire nella sitemap del footer

## Contatti tecnici

- Vercel project: `prj_NixpKEPwvXzMobDcZWGWdYacqNFu` (team gitgian74s-projects)
- Repo: https://github.com/gitgian74/gianlucapiazza-website (branch default: `main`)
- DNS/edge: Cloudflare davanti a Vercel
