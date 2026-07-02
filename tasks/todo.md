# Redesign VEX-style — staging branch

> Obiettivo: portare lo stile hero VEX (video bg, liquid glass, animazione caratteri, claim
> "Shaping tomorrow with vision and action.") su gianlucapiazza.com mantenendo dati,
> struttura, i18n e palette brand (navy ink + US red #B22234). Staging = branch `staging`
> + Vercel preview deploy automatico. Nessun deploy in produzione.

## Fase A — Fondamenta (main context) — P0 / M
- [x] Branch `feat/vex-redesign` da main (NB: `staging` esistente lasciato intatto, ha lavoro divergente)
- [x] Video Miami in `public/videos/miami-hero.mp4` (9.4MB)
- [x] `.liquid-glass` CSS in `src/index.css` (base rgba(2,6,23,.4) = slate-950 brand)
- [x] Componenti `src/components/vex/FadeIn.jsx` + `AnimatedHeading.jsx` (con reduced-motion)
- [x] Navbar Layout.jsx → liquid-glass (funzionalità invariate)
- [x] Hero Home.jsx → verificato screenshot 1920px su dev server :5198
- [x] Claim `heroClaim` + `heroTag` in translations (IT+EN; il sito non ha ES)
- [x] index.html: rimosso preload/preconnect Unsplash (hero image non più usata)

## Fase B — Tutte le pagine (subagent paralleli) — P1 / L
- [ ] Agent 1: About, Services, Projects, Contact, MarketResearch, Privacy, NotFound
- [ ] Agent 2: markets/* (Caribbean, Chicago, Boston, LasVegas)
- [ ] Agent 3: seo/* (9 pagine)
- Regole: solo restyle classi/wrapper (surgical), zero modifiche a contenuti/i18n/route,
  AnimatedHeading per i titoli pagina, FadeIn per sezioni, glass card al posto di card piatte.

## Fase C — Verifica e staging — P0 / S
- [x] `pnpm build` verde (+ static SEO HTML 9 pagine)
- [x] Screenshot home + services + contact + market + seo → ok
- [x] Commit e2fe3e99 su `feat/vex-redesign` (28 file) + push
- [x] Vercel deploy dpl_Ljterrc33… READY — staging:
      https://gianlucapiazza-website-git-feat-vex-c0e3df-gitgian74s-projects.vercel.app

## Hero città (2026-06-11, richiesta GP)
- [x] Curation 5 città (workflow 6 agent, cross-check tonale): NY 18679962, LA 10895071,
      SF 18003955 (Bay Bridge night, runner-up — la prima scelta GGB bocciata: troppo chiara),
      DC 3369102, Miami 19705160 — tutte Pexels free license, self-hosted 2000w in
      public/images/heroes/ (~1MB totale)
- [x] PageHeader → hero VEX alta bottom-left con bg full-bleed + gradiente; markets e SEO
      tornati a PageHeader (era stato inlined per non toccare il condiviso)
- [x] Mapping: About=NY, Services+Privacy=DC, Projects=LA, MarketResearch=SF, Contact=Miami,
      SEO=rotazione 5 città per slug-hash, markets=foto della propria città
- [x] Logo: navbar (già) + footer brand

## Decisioni intenzionali (review 2026-06-11)
- Claim hero in inglese anche su locale IT: scelta brand esplicita di Gianluca ("mi piace il claim").
- Home hero: `t.home.subtitle` ('USA Market Entry | …') sostituito da `taglineSub` — la stringa
  pipe-separated non regge il nuovo design; keyword SEO restano in meta/structured data.
  `subtitle` resta in translations (usabile altrove).
- Gradiente bottom 40% sul video hero (deroga al "no overlay" della spec VEX demo): serve
  contrasto WCAG del testo bianco sul video chiaro.

## Fix da review multi-agente (12 confermati, applicati)
- [x] AnimatedHeading: offset riga cumulativo (era lineIndex*line.length)
- [x] AnimatedHeading: aria-label sul tag + aria-hidden sugli span per-char
- [x] FadeIn: inert finché invisibile (no CTA focusabili a opacity 0)
- [x] Hero video: poster 150K + reduced-motion → immagine statica + aria-hidden
- [x] Video re-encode CRF31: 9.4→5.0MB
- [x] .liquid-glass: rimosso border:none (uccideva i border-white/20 Tailwind)
- [x] Navbar: rimosso toggle shadow isScrolled morto (override da liquid-glass) + listener orfano
- [x] Hero: height 100dvh inline con fallback h-screen (mobile browser chrome)
- [x] index.html: ripristinato preconnect Unsplash (pagine interne lo usano ancora)
- [x] Contrasto: gradiente bottom-third dietro al testo hero

## Capability usage
- Subagent: Explore (fatto, ricognizione), general-purpose x3 (Fase B)
- MCP: Claude Preview (verifica visiva), Vercel MCP (deployment URL)
- CLI: gh (verifiche GitHub), pnpm
