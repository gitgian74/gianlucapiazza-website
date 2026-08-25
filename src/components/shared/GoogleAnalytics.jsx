import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CONSENT_EVENT, hasAnalyticsConsent } from './analyticsConsent';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

function setupGoogleAnalytics() {
    if (!GA_MEASUREMENT_ID || document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments);
    };

    // Il default e' negato su tutti i segnali. Questa funzione gira soltanto
    // dopo il consenso analytics, ma partire da 'granted' rendeva la conformita'
    // dipendente da *dove* viene chiamata: bastava anticiparla per avere
    // tracking prima del consenso. Con default negato + update esplicito il
    // comportamento resta corretto ovunque la si sposti.
    window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
    });
    // I segnali pubblicitari restano negati anche con consenso marketing:
    // il marketing sul sito passa dal Meta Pixel, non da Google.
    window.gtag('consent', 'update', {
        analytics_storage: 'granted',
    });
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false,
        anonymize_ip: true,
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
}

export function GoogleAnalytics() {
    const location = useLocation();
    const [isAllowed, setIsAllowed] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        return hasAnalyticsConsent();
    });

    useEffect(() => {
        const handleConsentChange = () => {
            setIsAllowed(hasAnalyticsConsent());
        };

        window.addEventListener(CONSENT_EVENT, handleConsentChange);
        window.addEventListener('storage', handleConsentChange);

        return () => {
            window.removeEventListener(CONSENT_EVENT, handleConsentChange);
            window.removeEventListener('storage', handleConsentChange);
        };
    }, []);

    useEffect(() => {
        if (!GA_MEASUREMENT_ID || !isAllowed) {
            return;
        }

        setupGoogleAnalytics();

        window.gtag('event', 'page_view', {
            page_path: `${location.pathname}${location.search}`,
            page_title: document.title,
            page_location: window.location.href,
        });
    }, [isAllowed, location.pathname, location.search]);

    return null;
}
