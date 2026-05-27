import { Resend } from 'resend';
import { z } from 'zod';
import { emailSchema, enforceJsonBody, escapeHtml, getClientId, isRateLimited, plainText } from './_security.js';

const contactSchema = z.object({
    name: z.string().trim().min(2).max(120),
    email: emailSchema,
    company: z.string().trim().max(160).optional().default(''),
    message: z.string().trim().min(10).max(3_000),
    website: z.string().trim().max(0).optional().default(''),
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

    const { name, email, company, message } = parsed.data;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || 'N/A');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
    const textMessage = plainText(message);
    const textCompany = plainText(company || 'N/A');

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
                'Message:',
                textMessage,
            ].join('\n'),
            html: `
        <h1>New Contact Request</h1>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
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
