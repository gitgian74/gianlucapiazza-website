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
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t.privacy.intro}
                        </p>

                        <div className="mt-8 space-y-8">
                            {/* Data Controller */}
                            <section className="bg-card/50 p-6 rounded-2xl border border-border">
                                <h2 className="text-xl font-bold text-foreground mb-4">{t.privacy.controller.title}</h2>
                                <p className="text-muted-foreground mb-2">{t.privacy.controller.text}</p>
                                <div className="text-muted-foreground">
                                    <p className="font-semibold text-foreground">{t.privacy.controller.name}</p>
                                    <p>{t.privacy.controller.address}</p>
                                    <p>{t.privacy.controller.vat}</p>
                                    <p className="mt-2">Email: <a href={`mailto:${t.privacy.controller.email}`} className="text-blue-400 hover:text-blue-300">{t.privacy.controller.email}</a></p>
                                </div>
                            </section>

                            {/* Data Collection */}
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">{t.privacy.collection.title}</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {t.privacy.collection.text}
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                    {t.privacy.collection.list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            {/* Purpose */}
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">{t.privacy.purpose.title}</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {t.privacy.purpose.text}
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                    {t.privacy.purpose.list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            {/* Cookies */}
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">{t.privacy.cookies.title}</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {t.privacy.cookies.text}
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                                    {t.privacy.cookies.types.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground italic">
                                    {t.privacy.cookies.management}
                                </p>
                            </section>

                            {/* Rights */}
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">{t.privacy.rights.title}</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {t.privacy.rights.text}
                                </p>
                            </section>

                            {/* Contact */}
                            <section className="pt-8 border-t border-border">
                                <h2 className="text-xl font-bold text-foreground mb-4">{t.privacy.contact.title}</h2>
                                <p className="text-muted-foreground">
                                    {t.privacy.contact.text} <a href={`mailto:${t.privacy.controller.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">{t.privacy.controller.email}</a>
                                </p>
                            </section>
                        </div>
                    </div>
                </Card>
            </Section>
        </div>
    );
}
