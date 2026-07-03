import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { seoPages } from '../src/pages/seo/seoPageData.js';
import { marketLandingData } from '../src/pages/markets/marketLandingData.js';
import { marketPath, marketRoutes } from '../src/pages/markets/marketRoutes.js';
import { translations } from '../src/translations.js';
import { coreMeta } from '../src/lib/coreMeta.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const siteUrl = 'https://gianlucapiazza.com';
const defaultImage = `${siteUrl}/images/og-default.jpg`;

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('\n', ' ');
}

function buildJsonLd(page, content) {
  const pageUrl = `${siteUrl}${page.path}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: content.hero,
        description: content.description,
        serviceType: content.hero,
        provider: {
          '@type': 'ProfessionalService',
          '@id': `${siteUrl}/#organization`,
          name: 'GP & Partners',
          url: siteUrl,
          founder: {
            '@type': 'Person',
            '@id': `${siteUrl}/about#person`,
            name: 'Gianluca Piazza',
          },
        },
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Italy' },
          { '@type': 'Place', name: 'Europe' },
        ],
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Italian and European companies entering or growing in the US market',
        },
        keywords: page.keywords,
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: content.faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${siteUrl}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: content.hero,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

function renderFallback(page, content) {
  const bullets = [...content.process, ...content.proof]
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
  const faqs = content.faqs
    .map(([question, answer]) => (
      `<article><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></article>`
    ))
    .join('');
  const secondaryCta = page.downloadPath && content.secondaryCta
    ? `<p><a href="${escapeAttr(page.downloadPath)}" download>${escapeHtml(content.secondaryCta)}</a></p>`
    : '';

  return `
      <main class="seo-static-fallback">
        <nav aria-label="Breadcrumb">
          <a href="/">Home</a> / <a href="/services">Services</a> / <span>${escapeHtml(content.hero)}</span>
        </nav>
        <h1>${escapeHtml(content.hero)}</h1>
        <p>${escapeHtml(content.subtitle)}</p>
        <p>${escapeHtml(content.answer)}</p>
        <h2>${escapeHtml(content.processTitle)}</h2>
        <ul>${bullets}</ul>
        <h2>FAQ</h2>
        ${faqs}
        <p><a href="/contact">${escapeHtml(content.cta.label)}</a></p>
        ${secondaryCta}
      </main>
    `;
}

function setTag(html, pattern, replacement) {
  return html.replace(pattern, replacement);
}

function applyMeta(template, { title, description, pageUrl, image, jsonLd, fallback }) {
  let html = template;
  html = html.replace(/<html lang="[^"]*">/, '<html lang="it">');
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = setTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${pageUrl}" />`);
  html = setTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = setTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  html = setTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${pageUrl}" />`);
  html = setTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  html = setTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  html = setTag(html, /<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${image}" />`);
  html = setTag(html, /<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${image}" />`);
  html = html.replace(
    '</head>',
    `    <script type="application/ld+json" id="structured-data-page">${jsonLd}</script>\n  </head>`,
  );
  html = html.replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);

  return html;
}

function buildPageHtml(template, page) {
  const content = page.it;
  const pageUrl = `${siteUrl}${page.path}`;

  return applyMeta(template, {
    title: escapeAttr(content.title),
    description: escapeAttr(content.description),
    pageUrl,
    image: defaultImage,
    jsonLd: JSON.stringify(buildJsonLd(page, content)),
    fallback: renderFallback(page, content),
  });
}

function buildMarketJsonLd(page, content, pagePath) {
  const pageUrl = `${siteUrl}${pagePath}`;
  const faqNode = content.faqs?.length
    ? [{
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: content.faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      }]
    : [];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...faqNode,
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: content.hero,
        description: content.seoDesc,
        serviceType: content.hero,
        provider: {
          '@type': 'ProfessionalService',
          '@id': `${siteUrl}/#organization`,
          name: 'GP & Partners',
          url: siteUrl,
          founder: {
            '@type': 'Person',
            '@id': `${siteUrl}/about#person`,
            name: 'Gianluca Piazza',
          },
        },
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Italy' },
          { '@type': 'Place', name: 'Europe' },
        ],
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Italian and European companies entering or growing in the US market',
        },
        keywords: page.keywords,
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: content.hero,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

function renderMarketFallback(content) {
  const why = content.whyItems.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const areas = content.marketsList
    .map((area) => `<article><h3>${escapeHtml(area.name)}</h3><p>${escapeHtml(area.note)}</p></article>`)
    .join('');
  const services = content.servicesList.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const faqs = (content.faqs || [])
    .map(([question, answer]) => `<article><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></article>`)
    .join('');
  const faqSection = faqs ? `<h2>FAQ</h2>\n        ${faqs}` : '';

  return `
      <main class="seo-static-fallback">
        <nav aria-label="Breadcrumb">
          <a href="/">Home</a> / <span>${escapeHtml(content.hero)}</span>
        </nav>
        <h1>${escapeHtml(content.hero)}</h1>
        <p>${escapeHtml(content.heroSub)}</p>
        <p>${escapeHtml(content.intro)}</p>
        <h2>${escapeHtml(content.why)}</h2>
        <ul>${why}</ul>
        <h2>${escapeHtml(content.markets)}</h2>
        ${areas}
        <h2>${escapeHtml(content.services)}</h2>
        <ul>${services}</ul>
        ${faqSection}
        <p><a href="/contact">${escapeHtml(content.ctaBtn)}</a></p>
      </main>
    `;
}

function buildMarketPageHtml(template, page, pagePath) {
  const content = page.it;
  const pageUrl = `${siteUrl}${pagePath}`;

  return applyMeta(template, {
    title: escapeAttr(content.seoTitle),
    description: escapeAttr(content.seoDesc),
    pageUrl,
    image: `${siteUrl}${page.image}`,
    jsonLd: JSON.stringify(buildMarketJsonLd(page, content, pagePath)),
    fallback: renderMarketFallback(content),
  });
}

// Core pages are prerendered too: AI crawlers (GPTBot, ClaudeBot,
// PerplexityBot, OAI-SearchBot) do not execute JavaScript, so without a
// static fallback they see an empty <div id="root"> on the most important
// pages of the site.
const it = translations.it;

function listItems(items) {
  return (items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
}

function coreServices() {
  return Object.keys(it.services)
    .filter((key) => /^service\d+$/.test(key))
    .map((key) => it.services[key]);
}

function renderHomeFallback() {
  const services = coreServices()
    .map((s) => `<li><strong>${escapeHtml(s.title)}</strong>: ${escapeHtml(s.description)}</li>`)
    .join('');
  const landingLinks = [
    ...Object.values(seoPages).map((page) => `<li><a href="${escapeAttr(page.path)}">${escapeHtml(page.it.hero)}</a></li>`),
    ...marketRoutes.map(({ slug }) => `<li><a href="${escapeAttr(marketPath(slug))}">${escapeHtml(marketLandingData[slug].it.hero)}</a></li>`),
  ].join('');

  return `
      <main class="seo-static-fallback">
        <h1>GP &amp; Partners — USA Market Entry Partner operativo</h1>
        <p>${escapeHtml(it.home.tagline)}</p>
        <p>${escapeHtml(it.home.taglineSub)}</p>
        <p>${escapeHtml(it.home.intro)}</p>
        <h2>${escapeHtml(it.home.servicesTitle)}</h2>
        <ul>${services}</ul>
        <h2>${escapeHtml(it.home.ctaTitle)}</h2>
        <p>${escapeHtml(it.home.ctaText)}</p>
        <p><a href="/contact">${escapeHtml(it.home.ctaButton)}</a></p>
        <h2>Servizi e mercati USA</h2>
        <ul>${landingLinks}</ul>
      </main>
    `;
}

function renderAboutFallback() {
  return `
      <main class="seo-static-fallback">
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <span>${escapeHtml(it.about.title)}</span></nav>
        <h1>${escapeHtml(it.about.heroHeadline)}</h1>
        <p>${escapeHtml(it.about.intro)}</p>
        <h2>${escapeHtml(it.about.experienceTitle)}</h2>
        <p>${escapeHtml(it.about.experience1)}</p>
        <p>${escapeHtml(it.about.experience2)}</p>
        <h2>${escapeHtml(it.about.projectsTitle)}</h2>
        <p>${escapeHtml(it.about.projects)}</p>
        <h2>${escapeHtml(it.about.backgroundTitle)}</h2>
        <p>${escapeHtml(it.about.background)}</p>
        <h2>${escapeHtml(it.about.principlesTitle)}</h2>
        <ul>${listItems(it.about.principles)}</ul>
        <h2>${escapeHtml(it.about.skillsTitle)}</h2>
        <ul>${listItems(it.about.skills)}</ul>
        <p><a href="/contact">${escapeHtml(it.about.primaryCta)}</a></p>
      </main>
    `;
}

function renderServicesFallback() {
  const services = coreServices()
    .map((s) => `<article><h2>${escapeHtml(s.title)}</h2><p>${escapeHtml(s.description)}</p><ul>${listItems(s.items)}</ul></article>`)
    .join('');

  return `
      <main class="seo-static-fallback">
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <span>${escapeHtml(it.services.title)}</span></nav>
        <h1>${escapeHtml(it.services.title)}</h1>
        <p>${escapeHtml(it.services.subtitle)}</p>
        <p>${escapeHtml(it.services.intro)}</p>
        <h2>${escapeHtml(it.services.modular.title)}</h2>
        <p>${escapeHtml(it.services.modular.text)}</p>
        ${services}
        <p><a href="/contact">${escapeHtml(it.home.ctaButton)}</a></p>
      </main>
    `;
}

function renderProjectsFallback() {
  const projects = Object.keys(it.projects)
    .filter((key) => /^project\d+$/.test(key))
    .map((key) => it.projects[key])
    .map((p) => `<article><h2>${escapeHtml(p.title)}</h2><p>${escapeHtml(p.objectiveText)} (${escapeHtml(p.marketName)})</p><ul>${listItems(p.resultsList)}</ul></article>`)
    .join('');

  return `
      <main class="seo-static-fallback">
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <span>${escapeHtml(it.projects.title)}</span></nav>
        <h1>${escapeHtml(it.projects.title)}</h1>
        <p>${escapeHtml(it.projects.subtitle)}</p>
        ${projects}
        <p><a href="/contact">${escapeHtml(it.home.contactMe)}</a></p>
      </main>
    `;
}

function renderContactFallback() {
  const info = it.contact.info;

  return `
      <main class="seo-static-fallback">
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <span>${escapeHtml(it.contact.title)}</span></nav>
        <h1>${escapeHtml(it.contact.title)}</h1>
        <p>${escapeHtml(it.contact.subtitle)}</p>
        <h2>${escapeHtml(info.title)}</h2>
        <ul>
          <li>Sede (Italia): ${escapeHtml(info.addressIT)}</li>
          <li>Sede (USA): ${escapeHtml(info.addressUS)}</li>
          <li><a href="https://www.linkedin.com/company/gp-and-partners/">LinkedIn — GP &amp; Partners</a></li>
        </ul>
        <p>${escapeHtml(it.contact.form.nextStep)}</p>
      </main>
    `;
}

const CORE_FALLBACKS = {
  '/about': renderAboutFallback,
  '/services': renderServicesFallback,
  '/projects': renderProjectsFallback,
  '/contact': renderContactFallback,
};

function buildCorePageHtml(template, pagePath) {
  const meta = coreMeta[pagePath];
  const pageUrl = `${siteUrl}${pagePath}`;

  return applyMeta(template, {
    title: escapeAttr(meta.title),
    description: escapeAttr(meta.description),
    pageUrl,
    image: defaultImage,
    jsonLd: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': pageUrl,
      name: meta.title,
      description: meta.description,
      url: pageUrl,
      isPartOf: { '@id': `${siteUrl}/#organization` },
    }),
    fallback: CORE_FALLBACKS[pagePath](),
  });
}

// Site-level JSON-LD (Organization/Person/WebSite) lives statically in
// index.html and is inherited by every prerendered page; here the home only
// needs its fallback content.
function buildHomeHtml(template) {
  return template.replace('<div id="root"></div>', `<div id="root">${renderHomeFallback()}</div>`);
}

// Sitemap is generated here (dist/sitemap.xml) so market and SEO landing
// routes can never drift from marketRoutes.js / seoPageData.js. Bump the
// lastmod constants when the related content changes.
const CORE_SITEMAP_URLS = [
  { path: '/', lastmod: '2026-06-03', changefreq: 'monthly', priority: '1.0' },
  { path: '/services', lastmod: '2026-06-03', changefreq: 'monthly', priority: '0.9' },
  { path: '/projects', lastmod: '2026-06-03', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', lastmod: '2026-06-03', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', lastmod: '2026-06-03', changefreq: 'monthly', priority: '0.8' },
  { path: '/market-research', lastmod: '2026-06-03', changefreq: 'monthly', priority: '0.5' },
];
const MARKET_LASTMOD = '2026-07-03';
const SEO_LASTMOD_DEFAULT = '2026-06-03';
const SEO_LASTMOD_OVERRIDES = {
  '/buyer-readiness-usa': '2026-07-02',
  '/food-beverage-usa': '2026-06-04',
  '/moda-design-usa': '2026-06-04',
  '/agente-vs-distributore-usa': '2026-06-04',
};

function renderSitemap() {
  const urls = [
    ...CORE_SITEMAP_URLS,
    ...marketRoutes.map(({ slug }) => ({
      path: marketPath(slug),
      lastmod: MARKET_LASTMOD,
      changefreq: 'monthly',
      priority: '0.8',
    })),
    ...Object.values(seoPages).map((page) => ({
      path: page.path,
      lastmod: SEO_LASTMOD_OVERRIDES[page.path] ?? SEO_LASTMOD_DEFAULT,
      changefreq: 'monthly',
      priority: '0.9',
    })),
    { path: '/privacy', lastmod: '2026-06-03', changefreq: 'yearly', priority: '0.2' },
  ];

  const entries = urls
    .map((url) => [
      '  <url>',
      `    <loc>${siteUrl}${url.path === '/' ? '/' : url.path}</loc>`,
      `    <lastmod>${url.lastmod}</lastmod>`,
      `    <changefreq>${url.changefreq}</changefreq>`,
      `    <priority>${url.priority}</priority>`,
      '  </url>',
    ].join('\n'))
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

const missingData = marketRoutes.filter(({ slug }) => !marketLandingData[slug]);
if (missingData.length > 0) {
  throw new Error(`marketRoutes slugs without marketLandingData entry: ${missingData.map((r) => r.slug).join(', ')}`);
}

await Promise.all([
  ...Object.values(seoPages).map(async (page) => {
    const outputDir = path.join(distDir, page.path.slice(1));
    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, 'index.html'), buildPageHtml(template, page));
  }),
  ...marketRoutes.map(async ({ slug }) => {
    const pagePath = marketPath(slug);
    const outputDir = path.join(distDir, pagePath.slice(1));
    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, 'index.html'), buildMarketPageHtml(template, marketLandingData[slug], pagePath));
  }),
  ...Object.keys(CORE_FALLBACKS).map(async (pagePath) => {
    const outputDir = path.join(distDir, pagePath.slice(1));
    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, 'index.html'), buildCorePageHtml(template, pagePath));
  }),
  writeFile(path.join(distDir, 'index.html'), buildHomeHtml(template)),
  writeFile(path.join(distDir, 'sitemap.xml'), renderSitemap()),
]);

const pageCount = Object.keys(seoPages).length + marketRoutes.length + Object.keys(CORE_FALLBACKS).length + 1;
console.log(`Generated static SEO HTML for ${pageCount} pages + sitemap.xml.`);
