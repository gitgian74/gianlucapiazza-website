export const CONSENT_EVENT = 'site-consent-changed';
// Riapre il banner su richiesta dell'utente. Serve a rendere la revoca del
// consenso facile quanto prestarlo (art. 7 par. 3 GDPR): senza questo, una
// volta scelto non c'era piu' modo di cambiare idea dall'interfaccia.
export const CONSENT_REOPEN_EVENT = 'site-consent-reopen';
export const CONSENT_STORAGE_KEY = 'cookieConsent';
export const CONSENT_VERSION = 2;

const DEFAULT_CONSENT = {
    version: CONSENT_VERSION,
    analytics: false,
    marketing: false,
};

function normalizeConsent(consent) {
    return {
        version: Number(consent?.version) || 1,
        analytics: consent?.analytics === true,
        marketing: consent?.marketing === true && !hasGlobalPrivacyControl(),
    };
}

export function hasGlobalPrivacyControl() {
    return typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true;
}

export function getStoredConsent() {
    if (typeof window === 'undefined') {
        return DEFAULT_CONSENT;
    }

    const rawConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!rawConsent) {
        return DEFAULT_CONSENT;
    }

    if (rawConsent === 'accepted') {
        return {
            version: 1,
            analytics: true,
            marketing: false,
        };
    }

    if (rawConsent === 'declined') {
        return {
            version: 1,
            analytics: false,
            marketing: false,
        };
    }

    try {
        return normalizeConsent(JSON.parse(rawConsent));
    } catch {
        return DEFAULT_CONSENT;
    }
}

export function setStoredConsent(consent) {
    if (typeof window === 'undefined') {
        return;
    }

    const nextConsent = {
        version: CONSENT_VERSION,
        analytics: consent?.analytics === true,
        marketing: consent?.marketing === true && !hasGlobalPrivacyControl(),
    };

    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(nextConsent));
    window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function isConsentCurrent() {
    if (typeof window === 'undefined') {
        return false;
    }

    if (!window.localStorage.getItem(CONSENT_STORAGE_KEY)) {
        return false;
    }

    return getStoredConsent().version === CONSENT_VERSION;
}

export function hasAnalyticsConsent() {
    const consent = getStoredConsent();
    return consent.version === CONSENT_VERSION && consent.analytics;
}

export function hasMarketingConsent() {
    const consent = getStoredConsent();
    return consent.version === CONSENT_VERSION && consent.marketing;
}

export function openConsentPreferences() {
    if (typeof window === 'undefined') {
        return;
    }

    window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}
