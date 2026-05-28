import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { ArrowRight, Globe, TrendingUp, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920"
                        alt="Financial District Blue Sky"
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-lg">
                            {t.home.heroHeadline}
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-50 mb-4 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                            {t.home.tagline}
                        </p>
                        <p className="text-base md:text-lg text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                            {t.home.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                to="/contact"
                                className="px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                {t.home.ctaButton}
                            </Link>
                            <Link
                                to="/services"
                                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all border border-white/20 shadow-lg hover:shadow-xl"
                            >
                                {t.home.discoverServices}
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
                >
                    <ArrowRight className="rotate-90" size={24} />
                </motion.div>
            </section>

            {/* Stats Cards - Floating Overlap */}
            <section className="py-12 px-6 md:-mt-24 relative z-20">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-3 md:gap-8"
                    >
                        <motion.div variants={item} className="glass-card p-4 md:p-10 rounded-[1.5rem] md:rounded-[2rem] hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-4">
                                <Globe size={20} />
                            </div>
                            <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2">{t.home.stats.experienceValue}</h3>
                            <p className="text-muted-foreground font-medium text-xs md:text-lg">{t.home.stats.experience}</p>
                        </motion.div>

                        <motion.div variants={item} className="glass-card p-4 md:p-10 rounded-[1.5rem] md:rounded-[2rem] hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400 mb-4">
                                <TrendingUp size={20} />
                            </div>
                            <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2">{t.home.stats.marketsValue}</h3>
                            <p className="text-muted-foreground font-medium text-xs md:text-lg">{t.home.stats.markets}</p>
                        </motion.div>

                        <motion.div variants={item} className="glass-card p-4 md:p-10 rounded-[1.5rem] md:rounded-[2rem] hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 mb-4">
                                <Building2 size={20} />
                            </div>
                            <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2">Global</h3>
                            <p className="text-muted-foreground font-medium text-xs md:text-lg">{t.home.stats.partnerships}</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-8 md:py-12 px-6 relative z-10">
                <div className="container mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-base md:text-xl text-muted-foreground leading-relaxed font-light">
                            {t.home.intro}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview - Apple Style Cards */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-secondary/30">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-10 md:mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t.home.servicesTitle}</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.home.servicesSubtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        <Link to="/services" className="group">
                            <div className="bg-card p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>

                                <div>
                                    <div className="mb-8 p-5 bg-blue-500/10 rounded-2xl inline-block text-primary group-hover:scale-110 transition-transform duration-500">
                                        <Globe size={40} />
                                    </div>
                                    <h3 className="text-lg md:text-3xl font-bold text-foreground mb-4 md:mb-6 group-hover:text-primary transition-colors leading-tight">
                                        {t.services.service1.title}
                                    </h3>
                                    <p className="text-sm md:text-xl text-muted-foreground leading-relaxed">
                                        {t.services.service1.description}
                                    </p>
                                </div>
                                <div className="mt-6 md:mt-10 flex items-center text-primary font-bold text-sm md:text-lg">
                                    {t.home.learnMore} <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/services" className="group">
                            <div className="bg-card p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>

                                <div>
                                    <div className="mb-8 p-5 bg-purple-500/10 rounded-2xl inline-block text-purple-500 group-hover:scale-110 transition-transform duration-500">
                                        <TrendingUp size={40} />
                                    </div>
                                    <h3 className="text-lg md:text-3xl font-bold text-foreground mb-4 md:mb-6 group-hover:text-purple-500 transition-colors leading-tight">
                                        {t.services.service2.title}
                                    </h3>
                                    <p className="text-sm md:text-xl text-muted-foreground leading-relaxed">
                                        {t.services.service2.description}
                                    </p>
                                </div>
                                <div className="mt-6 md:mt-10 flex items-center text-purple-500 font-bold text-sm md:text-lg">
                                    {t.home.learnMore} <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </Link>
                        <Link to="/services" className="group">
                            <div className="bg-card p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
                                <div>
                                    <div className="mb-5 md:mb-8 p-4 md:p-5 bg-emerald-500/10 rounded-2xl inline-block text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                                        <Building2 size={28} />
                                    </div>
                                    <h3 className="text-lg md:text-3xl font-bold text-foreground mb-4 md:mb-6 group-hover:text-emerald-500 transition-colors leading-tight">
                                        {t.services.service5.title}
                                    </h3>
                                    <p className="text-sm md:text-xl text-muted-foreground leading-relaxed">
                                        {t.services.service5.description}
                                    </p>
                                </div>
                                <div className="mt-6 md:mt-10 flex items-center text-emerald-500 font-bold text-sm md:text-lg">
                                    {t.home.learnMore} <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-24 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20 group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-foreground)_0%,_transparent_100%)] opacity-0 group-hover:opacity-5 transition-opacity duration-1000"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-6xl font-bold text-primary-foreground mb-6 md:mb-8 tracking-tight">
                                {t.home.ctaTitle}
                            </h2>
                            <p className="text-base md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto font-light">
                                {t.home.ctaText}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-6 bg-background text-foreground rounded-full font-bold text-base md:text-xl hover:scale-105 transition-all shadow-xl"
                            >
                                {t.home.ctaButton}
                                <ArrowRight size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
