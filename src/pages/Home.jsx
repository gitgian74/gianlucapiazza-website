import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { ArrowRight, Globe, TrendingUp, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hero3D } from '../components/Hero3D';

export function Home() {
    const { t } = useLanguage();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col gap-12 lg:gap-24 mb-24">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden min-h-[80vh] flex items-center">
                {/* 3D Hero Element */}
                <Hero3D />

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-card/40 backdrop-blur-xl text-primary font-medium text-sm mb-6 border border-border shadow-sm">
                            International Business Consultant
                        </span>
                        <h1 className="text-5xl md:text-8xl font-semibold text-foreground mb-8 tracking-tighter leading-tight drop-shadow-sm">
                            Business Growth <br /> <span className="text-muted-foreground">& Expansion</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                            {t.home.tagline}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:opacity-90 transition-all shadow-md hover:scale-105 active:scale-95"
                            >
                                {t.home.ctaButton}
                            </Link>
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-card/60 backdrop-blur-xl text-foreground rounded-full font-medium text-lg hover:bg-card transition-all border border-border shadow-sm hover:scale-105 active:scale-95"
                            >
                                {t.home.discoverServices}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bento Box Section */}
            <section className="px-6 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <motion.div variants={item} className="bento-card card-hover flex flex-col justify-between">
                            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-foreground mb-12">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h3 className="text-5xl font-semibold text-foreground mb-2 tracking-tight">{t.home.stats.experienceValue}</h3>
                                <p className="text-muted-foreground font-medium text-lg">{t.home.stats.experience}</p>
                            </div>
                        </motion.div>

                        <motion.div variants={item} className="bento-card card-hover flex flex-col justify-between">
                            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-foreground mb-12">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-5xl font-semibold text-foreground mb-2 tracking-tight">{t.home.stats.marketsValue}</h3>
                                <p className="text-muted-foreground font-medium text-lg">{t.home.stats.markets}</p>
                            </div>
                        </motion.div>

                        <motion.div variants={item} className="bento-card card-hover flex flex-col justify-between">
                            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-foreground mb-12">
                                <Building2 size={24} />
                            </div>
                            <div>
                                <h3 className="text-5xl font-semibold text-foreground mb-2 tracking-tight">Global</h3>
                                <p className="text-muted-foreground font-medium text-lg">{t.home.stats.partnerships}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Bento Box Section */}
            <section className="px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bento-card bg-secondary/30 backdrop-blur-md p-10 md:p-16 border-0"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-8 tracking-tight max-w-3xl">
                            {t.home.subtitle}
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">
                            {t.home.intro}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview Bento */}
            <section className="px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">{t.home.servicesTitle}</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">{t.home.servicesSubtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Link to="/services" className="group block">
                            <div className="bento-card card-hover h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-8 p-4 bg-secondary rounded-2xl inline-flex text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                                        <Globe size={32} />
                                    </div>
                                    <h3 className="text-3xl font-semibold text-foreground mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                                        {t.services.service1.title}
                                    </h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                        {t.services.service1.description}
                                    </p>
                                </div>
                                <div className="flex items-center text-foreground font-medium group-hover:translate-x-2 transition-transform">
                                    Learn more <ArrowRight size={20} className="ml-2" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/services" className="group block">
                            <div className="bento-card card-hover h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-8 p-4 bg-secondary rounded-2xl inline-flex text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                                        <TrendingUp size={32} />
                                    </div>
                                    <h3 className="text-3xl font-semibold text-foreground mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                                        {t.services.service2.title}
                                    </h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                        {t.services.service2.description}
                                    </p>
                                </div>
                                <div className="flex items-center text-foreground font-medium group-hover:translate-x-2 transition-transform">
                                    Learn more <ArrowRight size={20} className="ml-2" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Bento Section */}
            <section className="px-6 pb-24">
                <div className="container mx-auto max-w-6xl">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-foreground rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-semibold text-background mb-8 tracking-tight">
                                {t.home.ctaTitle}
                            </h2>
                            <p className="text-xl text-background/80 mb-12 max-w-2xl mx-auto font-medium">
                                {t.home.ctaText}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-background text-foreground rounded-full font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg"
                            >
                                {t.home.ctaButton}
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}