import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/use-language';
import { seoPages } from '../../pages/seo/seoPageData';
import { socialProfileUrls } from '../../lib/socialLinks';

const SITE_URL = 'https://gianlucapiazza.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/og-default.jpg`;
const LOGO_IMAGE = `${SITE_URL}/logo.png`;

const SEO_LANDING_META = Object.values(seoPages).reduce((acc, page) => {
    acc[page.path] = {
        title: page.it.title,
        description: page.it.description,
        keywords: page.keywords,
        hasPageJsonLd: true,
    };

    return acc;
}, {});

const META_BY_PATH = {
    '/': {
        title: 'GP & Partners | USA Market Entry Partner operativo',
        description: 'GP & Partners costruisce pipeline commerciale reale per aziende italiane ed europee negli USA: readiness, distributori, buyer, retail partner e presenza locale.',
        keywords: 'USA market entry partner operativo, ricerca distributori USA, buyer readiness USA, temporary export manager USA, GP & Partners',
    },
    '/services': {
        title: 'Servizi di Consulenza Internazionale | GP & Partners',
        description: 'Servizi GP & Partners per espansione internazionale, business development, partnership commerciali e risoluzione di dispute nei mercati esteri.',
    },
    '/projects': {
        title: 'Progetti e Case Study Internazionali | GP & Partners',
        description: 'Case study GP & Partners di internazionalizzazione, partnership retail, distribuzione, business intelligence e trasformazione digitale.',
    },
    '/about': {
        title: 'Chi Siamo | GP & Partners',
        description: 'Profilo operativo di GP & Partners: team per internazionalizzazione, business development, partnership strategiche e mercato USA.',
    },
    '/contact': {
        title: 'Contatti | GP & Partners',
        description: 'Contatta GP & Partners per progetti di internazionalizzazione, sviluppo commerciale, partnership strategiche e ingresso in nuovi mercati.',
    },
    '/market-research': {
        title: 'AI Market Research | GP & Partners',
        description: 'Assistente AI per ricerche di mercato, trend internazionali e valutazioni preliminari di opportunita di espansione.',
    },
    '/privacy': {
        title: 'Privacy & Cookie Policy | GP & Partners',
        description: 'Informativa privacy e cookie policy del sito gianlucapiazza.com.',
    },
    ...SEO_LANDING_META,
};

function upsertMeta(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
}

function upsertLink(rel, href) {
    let element = document.head.querySelector(`link[rel="${rel}"]`);
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }
    element.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
    let element = document.getElementById(id);
    if (!element) {
        element = document.createElement('script');
        element.id = id;
        element.type = 'application/ld+json';
        document.head.appendChild(element);
    }
    element.textContent = JSON.stringify(data);
}

function removeElementById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}

function removeHeadElement(selector) {
    const element = document.head.querySelector(selector);
    if (element) {
        element.remove();
    }
}

export function Seo({ title, description, keywords, jsonLd } = {}) {
    const location = useLocation();
    const { language } = useLanguage();

    useEffect(() => {
        const pathname = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
        const pathMeta = META_BY_PATH[pathname];
        const meta = {
            ...(pathMeta || META_BY_PATH['/']),
            ...(title ? { title } : {}),
            ...(description ? { description } : {}),
            ...(keywords ? { keywords } : {}),
        };
        const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
        const isKnownPath = Boolean(pathMeta || title || description);

        document.documentElement.lang = language;
        document.title = meta.title;

        upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
        if (meta.keywords) {
            upsertMeta('meta[name="keywords"]', { name: 'keywords', content: meta.keywords });
        } else {
            removeHeadElement('meta[name="keywords"]');
        }
        upsertMeta('meta[name="robots"]', { name: 'robots', content: isKnownPath ? 'index, follow' : 'noindex, follow' });
        upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
        upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'GP & Partners' });
        upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
        upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
        upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
        upsertMeta('meta[property="og:image"]', { property: 'og:image', content: DEFAULT_IMAGE });
        upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
        upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
        upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
        upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: DEFAULT_IMAGE });
        upsertLink('canonical', canonical);

        upsertJsonLd('structured-data-person', {
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': `${SITE_URL}/about#person`,
            name: 'Gianluca Piazza',
            url: SITE_URL,
            image: LOGO_IMAGE,
            jobTitle: 'USA Market Entry Partner operativo',
            sameAs: socialProfileUrls,
            knowsAbout: [
                'USA Market Entry Partner operativo',
                'Buyer readiness USA',
                'Internazionalizzazione',
                'Business development',
                'Partnership strategiche',
                'Market entry',
                'Export',
                'USA market entry',
                'Retail negotiation',
                'Distribution channels',
            ],
        });

        upsertJsonLd('structured-data-professional-service', {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            '@id': `${SITE_URL}/#organization`,
            name: 'GP & Partners',
            url: SITE_URL,
            image: LOGO_IMAGE,
            founder: {
                '@type': 'Person',
                '@id': `${SITE_URL}/about#person`,
                name: 'Gianluca Piazza',
            },
            areaServed: ['United States', 'Italy', 'Europe'],
            serviceType: [
                'USA Market Entry',
                'International Business Development',
                'Retail Partnership Strategy',
                'Distribution Channel Development',
            ],
            knowsAbout: [
                'USA market entry for Italian companies',
                'Business development USA',
                'US retail partnerships',
                'Distributor search USA',
            ],
        });

        upsertJsonLd('structured-data-breadcrumbs', {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: `${SITE_URL}/`,
                },
                ...(pathname === '/'
                    ? []
                    : [{
                        '@type': 'ListItem',
                        position: 2,
                        name: meta.title.replace(' | GP & Partners', '').replace(' | Gianluca Piazza', ''),
                        item: canonical,
                    }]),
            ],
        });

        if (jsonLd) {
            upsertJsonLd('structured-data-page', jsonLd);
        } else if (!pathMeta?.hasPageJsonLd) {
            removeElementById('structured-data-page');
        }
    }, [description, jsonLd, keywords, language, location.pathname, title]);

    return null;
}
