export const CONSENT_EVENT = 'analytics-consent-changed';

export function hasAnalyticsConsent() {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.localStorage.getItem('cookieConsent') === 'accepted';
}
