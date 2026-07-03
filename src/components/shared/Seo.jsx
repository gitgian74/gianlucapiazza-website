import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/use-language';
import { seoPages } from '../../pages/seo/seoPageData';
import { coreMeta } from '../../lib/coreMeta';

const SITE_URL = 'https://gianlucapiazza.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/og-default.jpg`;

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
    ...coreMeta,
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

        // Organization/Person/WebSite JSON-LD is static in index.html
        // (structured-data-site) so no-JS crawlers see it; only the
        // route-dependent blocks are managed client-side.
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
