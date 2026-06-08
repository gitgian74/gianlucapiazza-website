import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CONSENT_EVENT, hasMarketingConsent } from './analyticsConsent';

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
let isMetaPixelInitialized = false;

function setupMetaPixel() {
    if (!META_PIXEL_ID || isMetaPixelInitialized) {
        return;
    }

    window.fbq = window.fbq || function fbq() {
        if (window.fbq.callMethod) {
            window.fbq.callMethod.apply(window.fbq, arguments);
            return;
        }

        window.fbq.queue.push(arguments);
    };

    if (!window._fbq) {
        window._fbq = window.fbq;
    }

    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = window.fbq.queue || [];
    window.fbq('init', META_PIXEL_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    isMetaPixelInitialized = true;
}

export function MetaPixel() {
    const location = useLocation();
    const [isAllowed, setIsAllowed] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }

        return hasMarketingConsent();
    });

    useEffect(() => {
        const handleConsentChange = () => {
            setIsAllowed(hasMarketingConsent());
        };

        window.addEventListener(CONSENT_EVENT, handleConsentChange);
        window.addEventListener('storage', handleConsentChange);

        return () => {
            window.removeEventListener(CONSENT_EVENT, handleConsentChange);
            window.removeEventListener('storage', handleConsentChange);
        };
    }, []);

    useEffect(() => {
        if (!META_PIXEL_ID || !isAllowed) {
            return;
        }

        setupMetaPixel();

        window.fbq('track', 'PageView', {
            page_path: `${location.pathname}${location.search}`,
            page_title: document.title,
            page_location: window.location.href,
        });
    }, [isAllowed, location.pathname, location.search]);

    return null;
}
