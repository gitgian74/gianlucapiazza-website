import nodemailer from 'nodemailer';
import { z } from 'zod';
import { emailSchema, enforceJsonBody, escapeHtml, getClientId, isRateLimited, plainText } from './_security.js';

const CHECKLIST_URL =
    process.env.CHECKLIST_PDF_URL ||
    'https://gianlucapiazza.com/lead-magnets/buyer-distributor-readiness-checklist.pdf';

function missingMailEnv() {
    return ['GMAIL_USER', 'GMAIL_CLIENT_ID', 'GMAIL_PRIVATE_KEY'].filter((k) => !process.env[k]);
}

function createTransport() {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_USER,
            serviceClient: process.env.GMAIL_CLIENT_ID,
            privateKey: process.env.GMAIL_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
    });
}

async function fetchChecklist() {
    const res = await fetch(CHECKLIST_URL, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`checklist fetch failed: ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
}

// Cloudflare Turnstile. Fail-closed once TURNSTILE_SECRET is configured;
// inert (returns true) before the secret is set so rollout doesn't break the form.
async function verifyTurnstile(token, ip) {
    const secret = process.env.TURNSTILE_SECRET;
    if (!secret) return true;
    if (!token) {
        // Empty token while enforcing = a bot, OR a misconfig where the
        // frontend has no VITE_TURNSTILE_SITEKEY (build) to produce one.
        console.error('Turnstile: empty token with secret set (bot, or missing VITE_TURNSTILE_SITEKEY at build time)');
        return false;
    }
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.append('remoteip', ip);
    try {
        const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body,
            signal: AbortSignal.timeout(8000),
        });
        const data = await res.json();
        return data.success === true;
    } catch (err) {
        console.error('Turnstile siteverify failed:', err?.name || err);
        return false;
    }
}

const contactSchema = z.object({
    name: z.string().trim().min(2).max(120),
    email: emailSchema,
    company: z.string().trim().max(160).optional().default(''),
    message: z.string().trim().min(10).max(3_000),
    website: z.string().trim().max(0).optional().default(''),
    turnstileToken: z.string().max(4_096).optional().default(''),
    attribution: z.object({
        utm_source: z.string().max(200).optional(),
        utm_medium: z.string().max(200).optional(),
        utm_campaign: z.string().max(200).optional(),
        utm_term: z.string().max(200).optional(),
        utm_content: z.string().max(200).optional(),
        first_landing_page: z.string().max(500).optional(),
        first_referrer: z.string().max(500).optional(),
        first_seen_at: z.string().max(50).optional(),
        last_landing_page: z.string().max(500).optional(),
        last_referrer: z.string().max(500).optional(),
        last_seen_at: z.string().max(50).optional(),
        current_page: z.string().max(500).optional(),
        current_path: z.string().max(500).optional(),
        session_id: z.string().max(100).optional(),
        consent_analytics: z.boolean().optional(),
        consent_marketing: z.boolean().optional(),
    }).optional().default({}),
});

const RATE_LIMIT = {
    limit: 5,
    windowMs: 60 * 60 * 1000,
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const limited = isRateLimited(`contact:${getClientId(req)}`, RATE_LIMIT);
    if (limited) {
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const { body, error } = enforceJsonBody(req, 16_000);
    if (error) {
        return res.status(error.status).json({ error: error.message });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Invalid contact request' });
    }

    const humanVerified = await verifyTurnstile(parsed.data.turnstileToken, getClientId(req));
    if (!humanVerified) {
        return res.status(403).json({ error: 'Human verification failed. Please retry.' });
    }

    const missingEnv = missingMailEnv();
    if (missingEnv.length) {
        console.error('Mail env missing:', missingEnv.join(', '));
        return res.status(500).json({ error: 'Server configuration error: mail transport not configured' });
    }

    const { name, email, company, message, attribution } = parsed.data;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || 'N/A');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
    const textMessage = plainText(message);
    const textCompany = plainText(company || 'N/A');
    const attributionEntries = Object.entries(attribution)
        .filter(([, value]) => value !== undefined && value !== '')
        .map(([key, value]) => `${key}: ${value}`);
    const textAttribution = attributionEntries.length ? attributionEntries.join('\n') : 'N/A';
    const safeAttribution = attributionEntries.length
        ? attributionEntries.map((entry) => escapeHtml(entry)).join('<br>')
        : 'N/A';

    const sender = process.env.GMAIL_USER;
    const ownerInbox = process.env.CONTACT_TO || sender;
    const fromOwner = `GP & Partners Website <${sender}>`;
    const fromUser = `Gianluca Piazza <${sender}>`;

    try {
        const transporter = createTransport();

        // 1. Send notification to owner (Critical)
        await transporter.sendMail({
            from: fromOwner,
            to: ownerInbox,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: [
                'New Contact Request',
                '',
                `Name: ${name}`,
                `Email: ${email}`,
                `Company: ${textCompany}`,
                '',
                'Attribution:',
                textAttribution,
                '',
                'Message:',
                textMessage,
            ].join('\n'),
            html: `
        <h1>New Contact Request</h1>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Attribution:</strong></p>
        <p>${safeAttribution}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
        });

        // 2. Send confirmation to user with the readiness checklist attached
        //    (Non-critical / Best Effort — never fails the request)
        try {
            let attachments = [];
            try {
                attachments = [{
                    filename: 'GP-Partners-Buyer-Distributor-Readiness-Checklist.pdf',
                    content: await fetchChecklist(),
                    contentType: 'application/pdf',
                }];
            } catch (pdfError) {
                console.error('Checklist attachment skipped (Non-critical):', pdfError);
            }

            await transporter.sendMail({
                from: fromUser,
                to: email,
                subject: 'Thank you for contacting me — your readiness checklist inside',
                attachments,
                text: [
                    `Hello ${name},`,
                    '',
                    'Thank you for reaching out. I have received your message and will get back to you as soon as possible.',
                    '',
                    'In the meantime, you will find the Buyer/Distributor Readiness Checklist attached to this email.',
                    '',
                    'Best regards,',
                    'Gianluca Piazza',
                    'GP & Partners — USA Market Entry',
                ].join('\n'),
                html: `
            <h1>Hello ${safeName},</h1>
            <p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p>
            <p>In the meantime, you'll find the <strong>Buyer/Distributor Readiness Checklist</strong> attached to this email.</p>
            <p>Best regards,</p>
            <p><strong>Gianluca Piazza</strong><br>GP &amp; Partners — USA Market Entry</p>
          `,
            });
        } catch (confError) {
            console.error('Confirmation Email Failed (Non-critical):', confError);
            // Do not fail the request if confirmation fails
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Mail send error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
