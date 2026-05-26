# Website Tracking

## Current Baseline

- Hosting: Vercel project `gianlucapiazza-website`
- Repository: `https://github.com/gitgian74/gianlucapiazza-website.git`
- Framework: Vite + React
- Analytics implementation: `@vercel/analytics/react`
- Privacy mode: cookieless Vercel Web Analytics with browser opt-out
- Optional GA4 implementation: `src/components/shared/GoogleAnalytics.jsx`

## What Is Active In Code

- Page views are tracked through Vercel Web Analytics.
- The cookie banner stores the user's choice in `localStorage`.
- If the user disables measurement, the site stores `va-disable=1`.
- The Vercel Analytics `beforeSend` hook drops analytics events when `va-disable` exists.
- GA4 can be enabled by setting `VITE_GA_MEASUREMENT_ID=G-...`.
- GA4 is not loaded until the user accepts analytics measurement in the banner.
- GA4 page views are sent manually on React route changes.
- Current GA4 Measurement ID: `G-7DW4MMZWP3`.
- Current GA4 stream: `MonsterInsights - http://gianlucapiazza.com` (`5973238822`).

## What Is Not Active

- Google Ads tags
- Meta Pixel
- TikTok Pixel
- Retargeting or profiling cookies

Those tools require a consent layer, updated policy text, account credentials, and explicit approval before activation.
GA4 also requires updated privacy text and the Vercel environment variable before production activation.

## Production Readiness Checklist

1. Enable Web Analytics in the Vercel dashboard for `gianlucapiazza-website`.
2. Deploy the commit containing `@vercel/analytics/react`.
3. Open the production site without blockers and verify `/_vercel/insights/script.js` loads.
4. Navigate across at least two pages.
5. Confirm page views appear in Vercel Analytics.
6. Test banner disable flow: click `Disattiva` / `Disable`, reload, and confirm events are not sent.

## Search Indexing Checklist

1. Deploy `public/robots.txt` and `public/sitemap.xml`.
2. Verify `https://gianlucapiazza.com/robots.txt` returns only plain text, not the React app fallback.
3. Verify `https://gianlucapiazza.com/sitemap.xml` returns XML and includes the public routes.
4. Submit `https://gianlucapiazza.com/sitemap.xml` in Google Search Console.
5. Use URL Inspection in Search Console for `/`, `/services`, `/projects`, and `/contact`.
6. Monitor indexed pages and query impressions weekly before planning content changes.

## PM Orchestrator Notes

The `website-product-pm` agent can inspect this repository locally for tracking code, privacy text, and data quality tasks. It must not push, deploy, connect external accounts, or add advertising pixels without explicit approval.
