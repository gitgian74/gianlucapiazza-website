import { track } from '@vercel/analytics/react';
import { hasAnalyticsConsent, hasMarketingConsent, getStoredConsent } from './analyticsConsent';

const ATTRIBUTION_STORAGE_KEY = 'siteAttribution';
const SESSION_STORAGE_KEY = 'siteSession';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

function nowIso() {
    return new Date().toISOString();
}
function safeString(value, maxLength = 500) {
    if (typeof value !== 'string') {
        return '';
    }

    return value.trim().slice(0, maxLength);
}

function readSearchParams() {
    if (typeof window === 'undefined') {
        return {};
    }

    const params = new URLSearchParams(window.location.search);

    return UTM_KEYS.reduce((acc, key) => {
        const value = safeString(params.get(key) || '', 200);
        if (value) {
            acc[key] = value;
        }
        return acc;
    }, {});
}

function hasUtmParams(params) {
    return UTM_KEYS.some((key) => Boolean(params[key]));
}

function getSessionId() {
    if (typeof window === 'undefined') {
        return '';
    }

    const existing = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (existing) {
        return existing;
    }

    const nextId = typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    window.sessionStorage.setItem(SESSION_STORAGE_KEY, nextId);
    return nextId;
}

export function rememberAttribution() {
    if (typeof window === 'undefined') {
        return null;
    }

    const existing = getStoredAttribution();
    const utm = readSearchParams();
    const shouldUpdate = !existing || hasUtmParams(utm);

    const attribution = {
        ...(existing || {}),
        ...utm,
        first_landing_page: existing?.first_landing_page || window.location.href,
        first_referrer: existing?.first_referrer || safeString(document.referrer, 500),
        first_seen_at: existing?.first_seen_at || nowIso(),
        last_landing_page: window.location.href,
        last_referrer: safeString(document.referrer, 500),
        last_seen_at: nowIso(),
        session_id: getSessionId(),
    };

    if (shouldUpdate || existing?.last_landing_page !== attribution.last_landing_page) {
        window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
    }

    return attribution;
}

export function getStoredAttribution() {
    if (typeof window === 'undefined') {
        return null;
    }

    try {
        const raw = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

export function getLeadAttribution() {
    if (typeof window === 'undefined') {
        return {};
    }

    const attribution = rememberAttribution() || {};
    const consent = getStoredConsent();

    return {
        ...attribution,
        current_page: window.location.href,
        current_path: `${window.location.pathname}${window.location.search}`,
        consent_analytics: consent.analytics === true,
        consent_marketing: consent.marketing === true,
    };
}

export function trackSiteEvent(name, properties = {}, options = {}) {
    if (typeof window === 'undefined' || !hasAnalyticsConsent()) {
        return;
    }

    const eventProperties = {
        path: `${window.location.pathname}${window.location.search}`,
        ...properties,
    };

    track(name, eventProperties);

    if (typeof window.gtag === 'function') {
        window.gtag('event', name, eventProperties);
    }

    if (options.metaEvent && hasMarketingConsent() && typeof window.fbq === 'function') {
        window.fbq('track', options.metaEvent, eventProperties);
    }
}
