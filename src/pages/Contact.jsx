import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/use-language';
import { Send, Building2 } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { SocialLinks } from '../components/shared/SocialLinks';
import { getLeadAttribution, trackSiteEvent } from '../components/shared/tracking';
import { ANALYTICS_EVENTS } from '../components/shared/analyticsEvents';
import { BOOKING_URL, hasBooking } from '../lib/bookingLink';

const messageLengthBucket = (message) =>
    message.length < 250 ? 'short' : message.length < 1000 ? 'medium' : 'long';

const TURNSTILE_SITEKEY = import.meta.env.VITE_TURNSTILE_SITEKEY;
// Canale di riserva quando l'invio fallisce: senza, un errore fa sparire il
// contatto e basta. Reso opzionale di proposito, cosi' l'indirizzo lo decidi
// tu e non finisce nel codice per svista.
const FALLBACK_EMAIL = import.meta.env.VITE_CONTACT_FALLBACK_EMAIL;
const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js';

export function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        company: '',
        message: '',
        website: ''
    });
    const [status, setStatus] = React.useState('idle'); // idle, sending, success, error
    const hasTrackedFormStart = React.useRef(false);
    const turnstileRef = React.useRef(null);
    const widgetIdRef = React.useRef(null);

    // Load Turnstile only on this page (keeps the third-party script off every
    // other route) and render it EXPLICITLY, so the widget re-appears on every
    // SPA re-navigation to /contact (implicit rendering only scans the DOM once
    // at script load, leaving a re-mounted container empty).
    React.useEffect(() => {
        if (!TURNSTILE_SITEKEY) return;
        let cancelled = false;

        const render = () => {
            if (cancelled || !window.turnstile || !turnstileRef.current || widgetIdRef.current !== null) return;
            widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
                sitekey: TURNSTILE_SITEKEY,
                theme: 'dark',
            });
        };

        if (!document.querySelector(`script[src="${TURNSTILE_SRC}"]`)) {
            const script = document.createElement('script');
            script.src = TURNSTILE_SRC;
            script.async = true;
            script.defer = true;
            script.onload = render;
            document.head.appendChild(script);
        }
        // Covers the case where the script is already present (later visits).
        const timer = setInterval(() => {
            if (window.turnstile) { render(); clearInterval(timer); }
        }, 150);

        return () => {
            cancelled = true;
            clearInterval(timer);
            if (widgetIdRef.current !== null && window.turnstile) {
                try { window.turnstile.remove(widgetIdRef.current); } catch { /* noop */ }
            }
            widgetIdRef.current = null;
        };
    }, []);

    const handleChange = (e) => {
        if (!hasTrackedFormStart.current && e.target.name !== 'website') {
            hasTrackedFormStart.current = true;
            trackSiteEvent(ANALYTICS_EVENTS.CONTACT_FORM_START, {
                field_name: e.target.name,
            });
        }

        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const turnstileToken = TURNSTILE_SITEKEY
            ? String(new FormData(e.currentTarget).get('cf-turnstile-response') || '')
            : '';
        setStatus('sending');
        const formTrackingPayload = {
            form_id: 'market_readiness_contact',
            form_name: 'Market Readiness Contact',
            has_company: Boolean(formData.company.trim()),
            message_length_bucket: messageLengthBucket(formData.message),
        };
        trackSiteEvent(ANALYTICS_EVENTS.FORM_SUBMIT, formTrackingPayload);
        trackSiteEvent(ANALYTICS_EVENTS.CONTACT_FORM_SUBMIT, formTrackingPayload);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    turnstileToken,
                    attribution: getLeadAttribution(),
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', message: '', website: '' });
                trackSiteEvent(ANALYTICS_EVENTS.CONTACT_FORM_SUCCESS, {
                    has_company: Boolean(formData.company.trim()),
                    message_length_bucket: messageLengthBucket(formData.message),
                }, {
                    metaEvent: 'Lead',
                });
                trackSiteEvent(ANALYTICS_EVENTS.GENERATE_LEAD, {
                    source: 'contact_form',
                    has_company: Boolean(formData.company.trim()),
                }, {
                    metaEvent: 'Lead',
                });
                // After the email is sent, start the call-booking flow.
                if (hasBooking) {
                    trackSiteEvent(ANALYTICS_EVENTS.BOOK_CALL, {
                        cta_id: 'contact_form_success',
                        placement: 'contact_form',
                        destination: BOOKING_URL,
                        offer: 'market_readiness_call',
                    });
                    // Best-effort auto-open; popup blockers may defer this to the
                    // fallback button shown in the success message.
                    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
                }
            } else {
                const data = await response.json().catch(() => ({}));
                console.error('Server Error:', data);
                setStatus('error');
                trackSiteEvent(ANALYTICS_EVENTS.CONTACT_FORM_ERROR, {
                    error_type: 'server',
                    status_code: response.status,
                    // Il codice applicativo distingue un rifiuto Turnstile da un
                    // limite di frequenza da un guasto del trasporto mail: senza
                    // questo restiamo a indovinare come e' successo finora.
                    error_code: typeof data?.error === 'string' ? data.error.slice(0, 60) : 'unknown',
                });
                // Optional: Set a specific error message state to display to the user
                // setErrorMessage(data.details || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            trackSiteEvent(ANALYTICS_EVENTS.CONTACT_FORM_ERROR, {
                error_type: 'network',
            });
        } finally {
            if (TURNSTILE_SITEKEY && window.turnstile && widgetIdRef.current !== null) {
                window.turnstile.reset(widgetIdRef.current);
            }
        }
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <PageHeader
                title={t.contact.title}
                subtitle={t.contact.subtitle}
                backgroundImage="/images/heroes/miami.jpg"
            />

            <Section className="max-w-6xl">
                <div className="grid md:grid-cols-12 gap-8">

                    {/* Contact Info Column */}
                    <div className="md:col-span-5 space-y-6">
                        <Card
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="liquid-glass border-white/20 p-8 h-full"
                        >
                            <h2 className="text-2xl font-bold text-white mb-8">{t.contact.info.title}</h2>

                            <div className="space-y-8">
                                {/* Address IT */}
                                {/* Address US */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-indigo-900/20 text-indigo-400 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Office (USA)</h3>
                                        <p className="text-lg font-medium text-white">
                                            {t.contact.info.addressUS}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-border pt-8">
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.info.followSocial}</h3>
                                <SocialLinks showLabels linkClassName="bg-slate-950/30" />
                            </div>

                        </Card>
                    </div>

                    {/* Contact Form Column */}
                    <div className="md:col-span-7">
                        <Card
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="liquid-glass border-white/20 p-8 md:p-10 shadow-xl shadow-black/20"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="text-sm font-semibold text-muted-foreground ml-1">{t.contact.form.name}</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            minLength={2}
                                            maxLength={120}
                                            className="w-full px-6 py-4 bg-input border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder:text-muted-foreground/50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-sm font-semibold text-muted-foreground ml-1">{t.contact.form.email}</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 bg-input border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder:text-muted-foreground/50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-company" className="text-sm font-semibold text-muted-foreground ml-1">{t.contact.form.company}</label>
                                    <input
                                        id="contact-company"
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-input border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder:text-muted-foreground/50"
                                        placeholder="Company Ltd."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="text-sm font-semibold text-muted-foreground ml-1">{t.contact.form.message}</label>
                                    <textarea
                                        id="contact-message"
                                        rows={6}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        minLength={10}
                                        maxLength={3000}
                                        className="w-full px-6 py-4 bg-input border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none text-white placeholder:text-muted-foreground/50"
                                        placeholder="How can I help you?"
                                    ></textarea>
                                </div>

                                <div className="sr-only" aria-hidden="true">
                                    <label htmlFor="contact-website">{t.contact.form.website}</label>
                                    <input
                                        id="contact-website"
                                        type="text"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                {TURNSTILE_SITEKEY && (
                                    <div ref={turnstileRef} className="flex justify-center"></div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
                                    <Send size={20} />
                                </Button>

                                <p className="text-center text-sm text-muted-foreground">{t.contact.form.nextStep}</p>

                                {/* Informativa al punto di raccolta (art. 13 GDPR): fino a ora
                                    l'unico link all'informativa era nel footer. */}
                                <p className="text-center text-xs text-muted-foreground">
                                    {t.contact.form.privacyNoticePre}
                                    <Link to="/privacy" className="underline underline-offset-2 hover:text-foreground">
                                        {t.contact.form.privacyNoticeLink}
                                    </Link>
                                    .
                                </p>

                                <div role="status" aria-live="polite">
                                    {status === 'success' && (
                                        <div className="text-center">
                                            <p className="text-green-400 font-medium">{t.contact.form.success}</p>
                                            {hasBooking && (
                                                <a
                                                    href={BOOKING_URL}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-4 inline-flex items-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                                >
                                                    {t.home.ctaButton} →
                                                </a>
                                            )}
                                        </div>
                                    )}
                                    {status === 'error' && (
                                        <div className="text-center">
                                            <p className="text-red-400 font-medium">{t.contact.form.error}</p>
                                            {FALLBACK_EMAIL && (
                                                <p className="mt-2 text-sm">
                                                    <a
                                                        className="text-white underline underline-offset-2"
                                                        href={`mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(t.contact.form.fallbackSubject)}&body=${encodeURIComponent(`${formData.message}\n\n---\n${formData.name}${formData.company ? ` — ${formData.company}` : ''}\n${formData.email}`)}`}
                                                        onClick={() => trackSiteEvent(ANALYTICS_EVENTS.CONTACT_FORM_ERROR, { error_type: 'fallback_mailto_used' })}
                                                    >
                                                        {t.contact.form.fallbackLink}
                                                    </a>
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>

            </Section>
        </div>
    );
}
