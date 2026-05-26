import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://gianlucapiazza.com';
const DEFAULT_IMAGE = `${SITE_URL}/gianluca-profile.webp`;

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

export function Seo() {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
        const meta = META_BY_PATH[pathname] || META_BY_PATH['/'];
        const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

        document.documentElement.lang = 'it';
        document.title = meta.title;

        upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
        upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
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
            sameAs: ['https://www.linkedin.com/in/gianlucapiazza/'],
            knowsAbout: [
                'Internazionalizzazione',
                'Business development',
                'Partnership strategiche',
                'Market entry',
                'Export',
            ],
        });
    }, [location.pathname]);

    return null;
}
