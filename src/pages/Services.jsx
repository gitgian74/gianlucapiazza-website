import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { Globe, TrendingUp, Handshake, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';

export function Services() {
    const { t } = useLanguage();

    const services = [
        {
            id: 'service1',
            icon: <Globe size={32} className="text-blue-600" />,
            iconWrapClass: 'bg-blue-500/10 text-blue-400',
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
            data: t.services.service1
        },
        {
            id: 'service2',
            icon: <TrendingUp size={32} className="text-purple-600" />,
            iconWrapClass: 'bg-purple-500/10 text-purple-400',
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
            data: t.services.service2
        },
        {
            id: 'service3',
            icon: <Handshake size={32} className="text-green-600" />,
            iconWrapClass: 'bg-green-500/10 text-green-400',
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
            data: t.services.service3
        },
        {
            id: 'service4',
            icon: <Scale size={32} className="text-orange-600" />,
            iconWrapClass: 'bg-orange-500/10 text-orange-400',
            image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80",
            data: t.services.service4
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <PageHeader
                title={t.services.title}
                subtitle={t.services.subtitle}
                backgroundImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920"
            />

            <Section className="max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            hoverEffect={true}
                            className="group"
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
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
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

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-card rounded-3xl p-12 text-center relative overflow-hidden border border-sky-100"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            {t.services.ctaTitle}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {t.services.ctaText}
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" size="lg" className="bg-foreground text-background hover:bg-blue-50">
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
