import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';

export function Privacy() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-background pb-20">
            <PageHeader
                title={t.privacy.title}
                subtitle={t.privacy.lastUpdated + ' ' + new Date().toLocaleDateString()}
            />

            <Section className="max-w-4xl">
                <Card className="p-8 md:p-12 space-y-8">
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {t.privacy.intro}
                        </p>

                        <div className="mt-8 space-y-6">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.collection.title}</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    {t.privacy.collection.text}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.usage.title}</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    {t.privacy.usage.text}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.cookies.title}</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    {t.privacy.cookies.text}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">{t.privacy.rights.title}</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    {t.privacy.rights.text}
                                </p>
                            </section>

                            <section className="pt-8 border-t border-slate-800">
                                <h2 className="text-xl font-bold text-white mb-4">{t.privacy.contact.title}</h2>
                                <p className="text-slate-400">
                                    {t.privacy.contact.text} <a href="mailto:mail@gianlucapiazza.com" className="text-blue-400 hover:text-blue-300 transition-colors">mail@gianlucapiazza.com</a>
                                </p>
                            </section>
                        </div>
                    </div>
                </Card>
            </Section>
        </div>
    );
}
