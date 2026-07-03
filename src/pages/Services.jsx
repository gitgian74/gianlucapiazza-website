import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { Globe, TrendingUp, Handshake, Scale, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { trackSiteEvent } from '../components/shared/tracking';
import { ANALYTICS_EVENTS } from '../components/shared/analyticsEvents';

export function Services() {
    const { language, t } = useLanguage();

    const services = [
        {
            id: 'service1',
            icon: <Globe size={32} className="text-[var(--us-red)]" />,
            iconWrapClass: 'bg-[var(--us-red)]/10 text-[var(--us-red)]',
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
            data: t.services.service1
        },
        {
            id: 'service2',
            icon: <TrendingUp size={32} className="text-purple-600" />,
            iconWrapClass: 'bg-purple-500/10 text-purple-400',
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
            data: t.services.service2
        },
        {
            id: 'service3',
            icon: <Handshake size={32} className="text-green-600" />,
            iconWrapClass: 'bg-green-500/10 text-green-400',
            image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800",
            data: t.services.service3
        },
        {
            id: 'service4',
            icon: <Scale size={32} className="text-orange-600" />,
            iconWrapClass: 'bg-orange-500/10 text-orange-400',
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
            data: t.services.service4
        },
        {
            id: 'service5',
            icon: <Building2 size={32} className="text-emerald-600" />,
            iconWrapClass: 'bg-emerald-500/10 text-emerald-400',
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
            data: t.services.service5
        }
    ];

    const usMarketPaths = [
        {
            to: '/usa-market-entry-italian-companies',
            label: language === 'it' ? 'USA Market Entry' : 'USA Market Entry',
        },
        {
            to: '/temporary-export-manager-usa',
            label: language === 'it' ? 'Temporary Export Manager USA' : 'Temporary Export Manager USA',
        },
        {
            to: '/ricerca-distributori-usa',
            label: language === 'it' ? 'Ricerca distributori USA' : 'US Distributor Search',
        },
        {
            to: '/business-development-usa',
            label: language === 'it' ? 'Business Development USA' : 'Business Development USA',
        },
        {
            to: '/us-retail-partnerships',
            label: language === 'it' ? 'Retail partnership USA' : 'US Retail Partnerships',
        },
        {
            to: '/vendere-prodotti-italiani-usa',
            label: language === 'it' ? 'Vendere prodotti italiani negli USA' : 'Selling Italian Products in the USA',
        },
        {
            to: '/food-beverage-usa',
            label: language === 'it' ? 'Food, Beverage & Wine USA' : 'Food, Beverage & Wine USA',
        },
        {
            to: '/moda-design-usa',
            label: language === 'it' ? 'Moda e Design USA' : 'Fashion and Design USA',
        },
        {
            to: '/agente-vs-distributore-usa',
            label: language === 'it' ? 'Agente vs distributore USA' : 'Agent vs Distributor USA',
        },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <PageHeader
                title={t.services.title}
                subtitle={t.services.subtitle}
                backgroundImage="/images/heroes/washington-dc.jpg"
            />

            <Section className="max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 md:mb-20"
                >
                    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-start">
                        <div>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                {t.services.intro}
                            </p>
                        </div>
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 md:p-8">
                            <div className="mb-5 h-1 w-20 rounded-full us-red-rule"></div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400 mb-3">
                                {t.services.modular.eyebrow}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                {t.services.modular.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {t.services.modular.text}
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {t.services.modular.steps.map((step) => (
                                    <div key={step} className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm font-medium text-foreground">
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            hoverEffect={true}
                            className="group liquid-glass border-white/20"
                        >
                            {/* Image Section */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.data.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                                    <div className={`p-3 rounded-xl ${service.iconWrapClass} backdrop-blur-md border border-border`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{service.data.title}</h3>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    {service.data.description}
                                </p>
                                {service.data.items && (
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                                            {service.data.includes || t.services.service1.includes}
                                        </h4>
                                        <ul className="space-y-2">
                                            {service.data.items.slice(0, 4).map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--us-red)] shrink-0"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            onClick={() => trackSiteEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                                                cta_id: 'service_card_contact',
                                                service_id: service.id,
                                                service_title: service.data.title,
                                                destination: '/contact',
                                                placement: 'services_card',
                                            })}
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--us-red)] hover:text-[#9f1539]"
                                        >
                                            {t.services.ctaButton}
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 border-y border-border/70 py-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400 mb-5">
                        {language === 'it' ? 'Percorsi USA' : 'US Paths'}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {usMarketPaths.map((path) => (
                            <Link
                                key={path.to}
                                to={path.to}
                                onClick={() => trackSiteEvent(ANALYTICS_EVENTS.SEO_PATH_CLICK, {
                                    destination: path.to,
                                    label: path.label,
                                    placement: 'services_us_paths',
                                })}
                                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-[var(--us-red)] hover:text-[var(--us-red)]"
                            >
                                {path.label}
                                <ArrowRight size={15} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 liquid-glass rounded-3xl p-12 text-center relative overflow-hidden border border-white/20"
                >
                    <div className="absolute inset-x-8 top-0 h-1 us-red-rule opacity-80"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            {t.services.ctaTitle}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {t.services.ctaText}
                        </p>
                        <Link
                            to="/contact"
                            onClick={() => trackSiteEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                                cta_id: 'services_bottom_contact',
                                destination: '/contact',
                                placement: 'services_bottom_cta',
                            })}
                        >
                            <Button variant="primary" size="lg" className="bg-white text-slate-950 px-8 py-3 rounded-lg font-medium shadow-none hover:bg-gray-100 transition-colors">
                                {t.services.ctaButton}
                                <ArrowRight size={20} />
                            </Button>
                        </Link>
                    </div>
                </motion.div>

            </Section>
        </div >
    );
}
