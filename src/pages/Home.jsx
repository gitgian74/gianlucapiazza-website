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
            <section className="relative pt-32 pb-40 px-6 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=1920"
                        alt="Brickell Miami Skyline Sunny Day"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-background"></div>
                </div>

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-card/80 backdrop-blur-sm text-blue-400 font-medium text-sm mb-6 border border-blue-900/30 shadow-sm">
                            International Business Consultant
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                            {t.home.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                            {t.home.tagline}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                {t.home.ctaButton}
                            </Link>
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-card/80 backdrop-blur-sm text-foreground rounded-full font-semibold text-lg hover:bg-white transition-all border border-border shadow-sm hover:shadow-md"
                            >
                                {t.home.discoverServices}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Cards */}
            <section className="py-12 px-6 -mt-20 relative z-10">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <motion.div variants={item} className="bg-card p-8 rounded-3xl shadow-xl shadow-black/20 border border-border card-hover">
                            <div className="w-12 h-12 bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-400 mb-4">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">{t.home.stats.experienceValue}</h3>
                            <p className="text-muted-foreground font-medium">{t.home.stats.experience}</p>
                        </motion.div>

                        <motion.div variants={item} className="bg-card p-8 rounded-3xl shadow-xl shadow-black/20 border border-border card-hover">
                            <div className="w-12 h-12 bg-green-900/20 rounded-2xl flex items-center justify-center text-green-400 mb-4">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">{t.home.stats.marketsValue}</h3>
                            <p className="text-muted-foreground font-medium">{t.home.stats.markets}</p>
                        </motion.div>

                        <motion.div variants={item} className="bg-card p-8 rounded-3xl shadow-xl shadow-black/20 border border-border card-hover">
                            <div className="w-12 h-12 bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-400 mb-4">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">Global</h3>
                            <p className="text-muted-foreground font-medium">{t.home.stats.partnerships}</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 px-6 bg-card">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            {t.home.subtitle}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {t.home.intro}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 px-6 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.home.servicesTitle}</h2>
                        <p className="text-xl text-muted-foreground">{t.home.servicesSubtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Link to="/services" className="group">
                            <div className="bg-card p-8 rounded-3xl shadow-sm border border-border hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 h-full">
                                <div className="mb-6 p-4 bg-blue-900/20 rounded-2xl inline-block text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Globe size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {t.services.service1.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {t.services.service1.description}
                                </p>
                                <div className="flex items-center text-blue-400 font-medium">
                                    Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/services" className="group">
                            <div className="bg-card p-8 rounded-3xl shadow-sm border border-border hover:shadow-xl hover:border-purple-500/30 transition-all duration-300 h-full">
                                <div className="mb-6 p-4 bg-purple-900/20 rounded-2xl inline-block text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <TrendingUp size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                                    {t.services.service2.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {t.services.service2.description}
                                </p>
                                <div className="flex items-center text-purple-400 font-medium">
                                    Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                {t.home.ctaTitle}
                            </h2>
                            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                                {t.home.ctaText}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                {t.home.ctaButton}
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
