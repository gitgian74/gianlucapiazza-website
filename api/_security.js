import { z } from 'zod';

const buckets = new Map();

export const emailSchema = z.string().trim().email().max(254).toLowerCase();

export function getClientId(req) {
    const forwardedFor = req.headers['x-forwarded-for'];
    if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
        return forwardedFor.split(',')[0].trim();
    }

    return req.socket?.remoteAddress || 'unknown';
}

export function isRateLimited(key, { limit, windowMs }) {
    const now = Date.now();
    const bucket = buckets.get(key);

    if (!bucket || bucket.resetAt <= now) {
        buckets.set(key, { count: 1, resetAt: now + windowMs });
        return false;
    }

    bucket.count += 1;
    return bucket.count > limit;
}

export function enforceJsonBody(req, maxBytes = 10_000) {
    const contentLength = Number(req.headers['content-length'] || 0);
    if (contentLength > maxBytes) {
        return { error: { status: 413, message: 'Payload too large' } };
    }

    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
        return { error: { status: 400, message: 'Invalid request body' } };
    }

    return { body: req.body };
}

export function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

export function plainText(value) {
    return String(value ?? '').replace(/\r\n/g, '\n').trim();
}
