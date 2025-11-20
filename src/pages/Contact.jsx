import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { Mail, Phone, MapPin, Send, Linkedin, Building2 } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';

export function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = React.useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                const data = await response.json();
                console.error('Server Error:', data);
                setStatus('error');
                // Optional: Set a specific error message state to display to the user
                // setErrorMessage(data.details || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <PageHeader
                title={t.contact.title}
                subtitle={t.contact.subtitle}
            />

            <Section className="max-w-6xl">
                <div className="grid md:grid-cols-12 gap-8">

                    {/* Contact Info Column */}
                    <div className="md:col-span-5 space-y-6">
                        <Card
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-8 h-full"
                        >
                            <h2 className="text-2xl font-bold text-white mb-8">{t.contact.info.title}</h2>

                            <div className="space-y-8">
                                {/* Email */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-blue-900/20 text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-slate-400 mb-1">Email</h3>
                                        <a href={`mailto:${t.contact.info.email}`} className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                                            {t.contact.info.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Phone IT */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-green-900/20 text-green-400 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-slate-400 mb-1">Phone (Italy)</h3>
                                        <a href={`tel:${t.contact.info.phoneIT}`} className="text-lg font-medium text-white hover:text-green-400 transition-colors">
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
                                        <h3 className="text-sm font-medium text-slate-400 mb-1">Phone (USA)</h3>
                                        <a href={`tel:${t.contact.info.phoneUS}`} className="text-lg font-medium text-white hover:text-purple-400 transition-colors">
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
                                        <h3 className="text-sm font-medium text-slate-400 mb-1">Office (Italy)</h3>
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
                                        <h3 className="text-sm font-medium text-slate-400 mb-1">Office (USA)</h3>
                                        <p className="text-lg font-medium text-white">
                                            {t.contact.info.companyUS}
                                        </p>
                                        <p className="text-slate-400">
                                            {t.contact.info.addressUS}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-start gap-4 group mt-8">
                                <div className="p-3 bg-blue-900/20 text-blue-400 rounded-xl group-hover:bg-blue-700 group-hover:text-white transition-colors">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-slate-400 mb-1">LinkedIn</h3>
                                    <a
                                        href="https://www.linkedin.com/in/gianlucapiazza/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
                                    >
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>

                        </Card>
                    </div>

                    {/* Contact Form Column */}
                    <div className="md:col-span-7">
                        <Card
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-8 md:p-10 shadow-xl shadow-black/20"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300 ml-1">{t.contact.form.name}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 bg-slate-900 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder:text-slate-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-300 ml-1">{t.contact.form.email}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 bg-slate-900 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder:text-slate-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">{t.contact.form.company}</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-900 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-white placeholder:text-slate-600"
                                        placeholder="Company Ltd."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">{t.contact.form.message}</label>
                                    <textarea
                                        rows={6}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-slate-900 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none text-white placeholder:text-slate-600"
                                        placeholder="How can I help you?"
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? 'Sending...' : t.contact.form.send}
                                    <Send size={20} />
                                </Button>

                                {status === 'success' && (
                                    <p className="text-green-400 text-center font-medium">Message sent successfully!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-center font-medium">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </Card>
                    </div>
                </div>

            </Section>
        </div>
    );
}
