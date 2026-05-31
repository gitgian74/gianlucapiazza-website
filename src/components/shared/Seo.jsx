import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/use-language';
import { seoPages } from '../../pages/seo/seoPageData';
import { socialProfileUrls } from '../../lib/socialLinks';

const SITE_URL = 'https://gianlucapiazza.com';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

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
        title: 'Gianluca Piazza | Consulente Internazionalizzazione',
        description: 'Consulenza per internazionalizzazione, business development e partnership strategiche per aziende italiane ed europee che vogliono crescere sui mercati globali.',
    },
    '/services': {
        title: 'Servizi di Consulenza Internazionale | Gianluca Piazza',
        description: 'Servizi per espansione internazionale, business development, partnership commerciali e risoluzione di dispute nei mercati esteri.',
    },
    '/projects': {
        title: 'Progetti e Case Study Internazionali | Gianluca Piazza',
        description: 'Case study di internazionalizzazione, partnership retail, distribuzione, business intelligence e trasformazione digitale guidati da Gianluca Piazza.',
    },
    '/about': {
        title: 'Chi Sono | Gianluca Piazza',
        description: 'Profilo professionale di Gianluca Piazza: imprenditore, business builder e consulente per internazionalizzazione e sviluppo commerciale.',
    },
    '/contact': {
        title: 'Contatti | Gianluca Piazza',
        description: 'Contatta Gianluca Piazza per progetti di internazionalizzazione, sviluppo commerciale, partnership strategiche e ingresso in nuovi mercati.',
    },
    '/market-research': {
        title: 'AI Market Research | Gianluca Piazza',
        description: 'Assistente AI per ricerche di mercato, trend internazionali e valutazioni preliminari di opportunita di espansione.',
    },
    '/privacy': {
        title: 'Privacy & Cookie Policy | Gianluca Piazza',
        description: 'Informativa privacy e cookie policy del sito gianlucapiazza.com.',
    },
    '/mercati/chicago': {
        title: 'Consulente Mercato Chicago per Aziende Italiane | GP & Partners',
        description: 'GP & Partners apre il mercato di Chicago e Midwest per PMI italiane: business development, partnership, distributori e market entry USA.',
        keywords: 'consulente Chicago azienda italiana, mercato Chicago italiani, business development Chicago, Midwest USA italiani, GP Partners',
    },
    '/mercati/boston': {
        title: 'Consulente Mercato Boston per Aziende Italiane | GP & Partners',
        description: 'GP & Partners apre il mercato di Boston e New England per PMI italiane: tech, biotech, universita, food e business development USA.',
        keywords: 'consulente Boston mercato americano italiani, business development Boston, azienda italiana Boston, New England mercato USA, GP Partners',
    },
    '/mercati/las-vegas': {
        title: 'Consulente Mercato Las Vegas per Aziende Italiane | GP & Partners',
        description: 'GP & Partners apre il mercato di Las Vegas e Nevada per PMI italiane: hospitality, food and beverage, luxury, retail e fiere USA.',
        keywords: 'consulente Las Vegas italiani, business Las Vegas azienda italiana, mercato Nevada italiani, hospitality Las Vegas Made in Italy, GP Partners',
    },
    '/mercati/caraibi': {
        title: 'Consulente Mercato Caraibi per Aziende Italiane | GP & Partners',
        description: 'GP & Partners apre il mercato caraibico per PMI italiane: business development, partnership commerciali, distributori e market entry nei Caraibi.',
        keywords: 'consulente caraibi italiani, business development caraibi, mercato caraibico aziende italiane, market entry caraibi, GP Partners',
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
        upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Gianluca Piazza' });
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
            name: 'Gianluca Piazza',
            url: SITE_URL,
            image: DEFAULT_IMAGE,
            jobTitle: 'Consulente Internazionalizzazione e Business Developer',
            sameAs: socialProfileUrls,
            knowsAbout: [
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
            name: 'GP & Partners',
            url: SITE_URL,
            image: DEFAULT_IMAGE,
            founder: {
                '@type': 'Person',
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
