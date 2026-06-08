import { Resend } from 'resend';
import { z } from 'zod';
import { emailSchema, enforceJsonBody, escapeHtml, getClientId, isRateLimited, plainText } from './_security.js';

const contactSchema = z.object({
    name: z.string().trim().min(2).max(120),
    email: emailSchema,
    company: z.string().trim().max(160).optional().default(''),
    message: z.string().trim().min(10).max(3_000),
    website: z.string().trim().max(0).optional().default(''),
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

    const { body, error } = enforceJsonBody(req, 8_000);
    if (error) {
        return res.status(error.status).json({ error: error.message });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Invalid contact request' });
    }

    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing');
        return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
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

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // 1. Send notification to owner (Critical)
        await resend.emails.send({
            from: 'Gianluca Piazza Website <noreply@gianlucapiazza.com>',
            to: ['mail@gianlucapiazza.com'],
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

        // 2. Send confirmation to user (Non-critical / Best Effort)
        try {
            await resend.emails.send({
                from: 'Gianluca Piazza <noreply@gianlucapiazza.com>',
                to: [email],
                subject: 'Thank you for contacting me',
                text: [
                    `Hello ${name},`,
                    '',
                    'Thank you for reaching out. I have received your message and will get back to you as soon as possible.',
                    '',
                    'Best regards,',
                    'Gianluca Piazza',
                    'Internationalization Consultant',
                    '',
                    'Your message:',
                    textMessage,
                ].join('\n'),
                html: `
            <h1>Hello ${safeName},</h1>
            <p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p>
            <p>Best regards,</p>
            <p><strong>Gianluca Piazza</strong><br>Internationalization Consultant</p>
            <hr>
            <p style="color: #666; font-size: 12px;">Your message:</p>
            <p style="color: #666; font-style: italic;">${safeMessage}</p>
          `,
            });
        } catch (confError) {
            console.error('Confirmation Email Failed (Non-critical):', confError);
            // Do not fail the request if confirmation fails
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: 'Failed to send email', details: error.message, name: error.name });
    }
}
