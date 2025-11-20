import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Gianluca Piazza Website <noreply@gianlucapiazza.com>',
            to: ['mail@gianlucapiazza.com'],
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

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: 'Failed to send email', details: error.message, name: error.name });
    }
}
