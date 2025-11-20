import { Resend } from 'resend';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing');
        return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // 1. Send notification to owner (Critical)
        await resend.emails.send({
            from: 'Gianluca Piazza Website <noreply@gianlucapiazza.com>',
            to: ['mail@gianlucapiazza.com'],
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h1>New Contact Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        // 2. Send confirmation to user (Non-critical / Best Effort)
        try {
            await resend.emails.send({
                from: 'Gianluca Piazza <noreply@gianlucapiazza.com>',
                to: [email],
                subject: 'Thank you for contacting me',
                html: `
            <h1>Hello ${name},</h1>
            <p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p>
            <p>Best regards,</p>
            <p><strong>Gianluca Piazza</strong><br>Internationalization Consultant</p>
            <hr>
            <p style="color: #666; font-size: 12px;">Your message:</p>
            <p style="color: #666; font-style: italic;">${message}</p>
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
