# Website Tracking

## Current Baseline

- Hosting: Vercel project `gianlucapiazza-website`
- Repository: `https://github.com/gitgian74/gianlucapiazza-website.git`
- Framework: Vite + React
- Analytics implementation: `@vercel/analytics/react`
- Privacy mode: consent-gated analytics and marketing categories
- GA4 implementation: `src/components/shared/GoogleAnalytics.jsx`
- Optional Meta Pixel implementation: `src/components/shared/MetaPixel.jsx`

## What Is Active In Code

- Page views are tracked through Vercel Web Analytics.
- The cookie banner stores separate analytics and marketing choices in `localStorage`.
- Existing legacy `accepted` choices are treated as analytics-only, not marketing consent.
- Vercel Web Analytics is not loaded until the user accepts analytics measurement.
- GA4 can be enabled by setting `VITE_GA_MEASUREMENT_ID=G-...`.
- GA4 is not loaded until the user accepts analytics measurement in the banner.
- GA4 page views are sent manually on React route changes.
- Current GA4 Measurement ID: `G-7DW4MMZWP3`.
- Current GA4 stream: `MonsterInsights - http://gianlucapiazza.com` (`5973238822`).
- Meta Pixel can be enabled by setting `VITE_META_PIXEL_ID`.
- Meta Pixel is not loaded until the user accepts separate marketing consent.
- Meta Pixel sends `PageView` manually on React route changes when configured and consented.
- Current Meta dataset / Pixel ID: `4010642649069254` (`GP & Partners Website`).

## Business Events

The site sends client-side events to Vercel Analytics and GA4 only after analytics consent.
Meta receives the mapped `Lead` event only after marketing consent.

| Event | Meaning | GA4 key event? |
|---|---|---|
| `contact_form_start` | User starts filling the contact form | No |
| `contact_form_submit` | Contact form submission attempt | No |
| `contact_form_success` | Contact form accepted by the backend | Yes |
| `generate_lead` | GA4 recommended lead event after successful contact form submission | Yes |
| `contact_form_error` | Contact form server/network error | No |
| `contact_click` | Email or phone click | Yes, optional |
| `cta_click` | Contact/service CTA click | No |
| `navigation_click` | Header/footer/mobile navigation click | No |
| `social_click` | Click to LinkedIn, Instagram, or Facebook | No |
| `seo_path_click` | Click from services/SEO pages to related SEO paths | No |
| `service_card_click` | Home service preview card click | No |
| `market_research_submit` | AI Market Research query submitted | No |
| `market_research_success` | AI Market Research response returned | Yes, optional |
| `market_research_error` | AI Market Research rate limit, timeout, or server error | No |
| `language_switch` | Language toggle | No |

Recommended GA4 key events for first reporting cycle:

1. `generate_lead`
2. `contact_form_success`
3. `contact_click`
4. `market_research_success`

## What Is Not Active

- Google Ads tags
- TikTok Pixel
- Retargeting or profiling cookies

Google Ads and TikTok tags require updated policy text, account credentials, and explicit approval before activation.
Meta Pixel is configured in code and Production env; it fires only after marketing consent.

## Account Status / Blockers

- Meta dataset `GP & Partners Website` was created in Meta Business and connected to ad account `901526586292526`.
- Google Ads on `mail@gianlucapiazza.com` currently shows no Ads account.
- Google Search Console for `sc-domain:gianlucapiazza.com` is not verified. The open verification flow requests Cloudflare DNS authorization, which should only be started with explicit approval.
- Local `.env` contains `VITE_GA_MEASUREMENT_ID` and `VITE_META_PIXEL_ID`.
- Vercel Production contains `VITE_GA_MEASUREMENT_ID` and `VITE_META_PIXEL_ID`.
- `.env.example` documents the required public client variables for GA4 and Meta Pixel.

## Production Readiness Checklist

1. Enable Web Analytics in the Vercel dashboard for `gianlucapiazza-website`.
2. Deploy the commit containing `@vercel/analytics/react`.
3. Open the production site without blockers and verify `/_vercel/insights/script.js` loads.
4. Navigate across at least two pages.
5. Confirm page views appear in Vercel Analytics after analytics consent.
6. Test banner decline flow: click `Rifiuta` / `Reject`, reload, and confirm analytics and marketing scripts are not loaded.
7. Test marketing flow after `VITE_META_PIXEL_ID` is configured: click `Accetta tutto` / `Accept all`, navigate pages, and verify Meta `PageView` in Events Manager.

## Meta Pixel Activation Steps

1. Confirm `VITE_META_PIXEL_ID=4010642649069254` is present in the target environment.
2. Redeploy production after any env change.
3. Visit the site in a clean browser session, choose `Accetta tutto`, and verify `PageView` in Meta Events Manager.

## Search Indexing Checklist

1. Deploy `public/robots.txt` and `public/sitemap.xml`.
2. Verify `https://gianlucapiazza.com/robots.txt` returns only plain text, not the React app fallback.
3. Verify `https://gianlucapiazza.com/sitemap.xml` returns XML and includes the public routes.
4. Submit `https://gianlucapiazza.com/sitemap.xml` in Google Search Console.
5. Use URL Inspection in Search Console for `/`, `/services`, `/projects`, and `/contact`.
6. Monitor indexed pages and query impressions weekly before planning content changes.

## PM Orchestrator Notes

The `website-product-pm` agent can inspect this repository locally for tracking code, privacy text, and data quality tasks. It must not push, deploy, connect external accounts, or add advertising pixels without explicit approval.

### Pending PM Task: Company LinkedIn

- Add the GP & Partners LinkedIn company page to the site social/contact surface, not only Gianluca's personal LinkedIn profile.
- Company page: `https://www.linkedin.com/company/gp-and-partners/`
- Decide placement across footer, contact page, social links, and any GP & Partners brand blocks so personal and company profiles are clearly distinguished.
