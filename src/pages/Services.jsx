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
            color: 'bg-blue-50',
            image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80",
            data: t.services.service1
        },
        {
            id: 'service2',
            icon: <TrendingUp size={32} className="text-purple-600" />,
            color: 'bg-purple-50',
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
            data: t.services.service2
        },
        {
            id: 'service3',
            icon: <Handshake size={32} className="text-green-600" />,
            color: 'bg-green-50',
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
            data: t.services.service3
        },
        {
            id: 'service4',
            icon: <Scale size={32} className="text-orange-600" />,
            color: 'bg-orange-50',
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
                                />
                                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                                    <div className={`p-3 rounded-xl bg-card/50 backdrop-blur-md text-${service.color.split('-')[1]}-400 border border-border`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{service.data.title}</h3>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    {service.data.description}
                                </p>
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
