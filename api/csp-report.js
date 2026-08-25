import { getClientId, isRateLimited } from './_security.js';

// Raccoglie le violazioni della Content-Security-Policy.
// Finche' la policy e' in Report-Only questo e' l'unico modo per sapere che
// cosa si romperebbe passando all'enforcement: senza un endpoint, la modalita'
// report non produce alcun dato.
//
// Il corpo e' interamente controllato dal browser (e quindi, indirettamente,
// da chi visita il sito): va trattato come non fidato. Per questo la risposta
// e' sempre 204 senza contenuto, il payload e' limitato in dimensione e viene
// troncato prima di finire nei log.
const MAX_BYTES = 8_000;
const MAX_LOGGED_CHARS = 2_000;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end();
    }

    // Un endpoint pubblico che scrive nei log e' un invito al log flooding.
    if (isRateLimited(`csp:${getClientId(req)}`, { limit: 30, windowMs: 60_000 })) {
        return res.status(204).end();
    }

    if (Number(req.headers['content-length'] || 0) > MAX_BYTES) {
        return res.status(204).end();
    }

    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        // Il formato varia: report-uri manda {"csp-report":{...}},
        // report-to manda un array di report.
        const report = body?.['csp-report'] || (Array.isArray(body) ? body[0]?.body : body);

        if (report) {
            const summary = {
                directive: report['effective-directive'] || report.effectiveDirective || null,
                blocked: report['blocked-uri'] || report.blockedURL || null,
                document: report['document-uri'] || report.documentURL || null,
            };
            console.warn('[csp]', JSON.stringify(summary).slice(0, MAX_LOGGED_CHARS));
        }
    } catch {
        // Un report malformato non deve produrre un errore visibile.
    }

    return res.status(204).end();
}
