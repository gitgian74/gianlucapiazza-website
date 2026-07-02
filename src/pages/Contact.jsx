import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { Phone, MapPin, Send, Building2 } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { SocialLinks } from '../components/shared/SocialLinks';
import { getLeadAttribution, trackSiteEvent } from '../components/shared/tracking';

const messageLengthBucket = (message) =>
    message.length < 250 ? 'short' : message.length < 1000 ? 'medium' : 'long';

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

    const handleChange = (e) => {
        if (!hasTrackedFormStart.current && e.target.name !== 'website') {
            hasTrackedFormStart.current = true;
            trackSiteEvent('contact_form_start', {
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
        setStatus('sending');
        const formTrackingPayload = {
            form_id: 'market_readiness_contact',
            form_name: 'Market Readiness Contact',
            has_company: Boolean(formData.company.trim()),
            message_length_bucket: messageLengthBucket(formData.message),
        };
        trackSiteEvent('form_submit', formTrackingPayload);
        trackSiteEvent('contact_form_submit', formTrackingPayload);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    attribution: getLeadAttribution(),
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', message: '', website: '' });
                trackSiteEvent('contact_form_success', {
                    has_company: Boolean(formData.company.trim()),
                    message_length_bucket: messageLengthBucket(formData.message),
                }, {
                    metaEvent: 'Lead',
                });
                trackSiteEvent('generate_lead', {
                    source: 'contact_form',
                    has_company: Boolean(formData.company.trim()),
                }, {
                    metaEvent: 'Lead',
                });
            } else {
                const data = await response.json();
                console.error('Server Error:', data);
                setStatus('error');
                trackSiteEvent('contact_form_error', {
                    error_type: 'server',
                    status_code: response.status,
                });
                // Optional: Set a specific error message state to display to the user
                // setErrorMessage(data.details || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            trackSiteEvent('contact_form_error', {
                error_type: 'network',
            });
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
                                {/* Phone IT */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-green-900/20 text-green-400 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Phone (Italy)</h3>
                                        <a
                                            href={`tel:${t.contact.info.phoneIT}`}
                                            onClick={() => {
                                                trackSiteEvent('click_phone', { phone_region: 'it', placement: 'contact_card' });
                                                trackSiteEvent('contact_click', { method: 'phone_it', placement: 'contact_card' });
                                            }}
                                            className="text-lg font-medium text-white hover:text-green-400 transition-colors"
                                        >
                                            {t.contact.info.phoneIT}
                                        </a>
                                    </div>
                                </div>

                                {/* Phone US */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-purple-900/20 text-purple-400 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Phone (USA)</h3>
                                        <a
                                            href={`tel:${t.contact.info.phoneUS}`}
                                            onClick={() => {
                                                trackSiteEvent('click_phone', { phone_region: 'us', placement: 'contact_card' });
                                                trackSiteEvent('contact_click', { method: 'phone_us', placement: 'contact_card' });
                                            }}
                                            className="text-lg font-medium text-white hover:text-purple-400 transition-colors"
                                        >
                                            {t.contact.info.phoneUS}
                                        </a>
                                    </div>
                                </div>

                                {/* Address IT */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-orange-900/20 text-orange-400 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Office (Italy)</h3>
                                        <p className="text-lg font-medium text-white">
                                            {t.contact.info.addressIT}
                                        </p>
                                    </div>
                                </div>

                                {/* Address US */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-indigo-900/20 text-indigo-400 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Office (USA)</h3>
                                        <p className="text-lg font-medium text-white">
                                            {t.contact.info.companyUS}
                                        </p>
                                        <p className="text-muted-foreground">
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

                                <Button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
                                    <Send size={20} />
                                </Button>

                                <p className="text-center text-sm text-muted-foreground">{t.contact.form.nextStep}</p>

                                <div role="status" aria-live="polite">
                                    {status === 'success' && (
                                        <p className="text-green-400 text-center font-medium">{t.contact.form.success}</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-red-400 text-center font-medium">{t.contact.form.error}</p>
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
