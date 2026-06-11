import React, { useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { ArrowRight, Globe, TrendingUp, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackSiteEvent } from '../components/shared/tracking';
import { AnimatedHeading } from '../components/vex/AnimatedHeading';
import { FadeIn } from '../components/vex/FadeIn';

const HERO_VIDEO = '/videos/miami-hero.mp4';
const HERO_POSTER = '/videos/miami-hero-poster.jpg';

export function Home() {
    const { t } = useLanguage();
    const shouldReduceMotion = useReducedMotion();

    // Scroll-linked veil: the locked hero dims gradually as the content
    // scrolls over it, fully solid after ~1.2 viewport heights.
    const { scrollY } = useScroll();
    const [viewportH] = useState(
        () => (typeof window !== 'undefined' ? window.innerHeight : 800)
    );
    const veilOpacity = useTransform(scrollY, [0, viewportH * 1.2], [0, 1]);
    // Hero text fades out early so it never clashes with the cards scrolling over it
    const heroContentOpacity = useTransform(scrollY, [0, viewportH * 0.35], [1, 0]);
    const heroPointerEvents = useTransform(heroContentOpacity, (o) => (o < 0.05 ? 'none' : 'auto'));

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
        <div className="min-h-screen">
            {/* Hero Section — locked in place (sticky): the sections below scroll up
                over it while the scroll-linked veil dims it gradually.
                100dvh inline style wins where supported; h-screen is the fallback. */}
            <section className="sticky top-0 z-0 h-screen overflow-hidden" style={{ height: '100dvh' }}>
                <div className="absolute inset-0" aria-hidden="true">
                    {shouldReduceMotion ? (
                        <img
                            className="w-full h-full object-cover"
                            src={HERO_POSTER}
                            alt=""
                        />
                    ) : (
                        <video
                            className="w-full h-full object-cover"
                            src={HERO_VIDEO}
                            poster={HERO_POSTER}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    )}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none"></div>

                <motion.div className="relative z-10 flex flex-col h-full" style={{ opacity: heroContentOpacity, pointerEvents: heroPointerEvents }}>
                    <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16">
                        <div className="lg:grid lg:grid-cols-2 lg:items-end">
                            <div>
                                <AnimatedHeading
                                    text={t.home.heroClaim}
                                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4 drop-shadow-[0_2px_18px_rgba(2,6,23,0.6)]"
                                />
                                <FadeIn delay={800} duration={1000}>
                                    <p className="text-base md:text-lg text-white/90 mb-1 drop-shadow-[0_2px_16px_rgba(2,6,23,0.7)]">
                                        {t.home.tagline}
                                    </p>
                                    <p className="text-sm md:text-base text-white/70 mb-5 drop-shadow-[0_2px_16px_rgba(2,6,23,0.7)]">
                                        {t.home.taglineSub}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={1200} duration={1000}>
                                    <div className="flex flex-wrap gap-4">
                                        <Link
                                            to="/contact"
                                            onClick={() => trackSiteEvent('cta_click', {
                                                cta_id: 'home_hero_contact',
                                                destination: '/contact',
                                                placement: 'home_hero',
                                            })}
                                            className="bg-white text-slate-950 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                        >
                                            {t.home.ctaButton}
                                        </Link>
                                        <Link
                                            to="/services"
                                            onClick={() => trackSiteEvent('cta_click', {
                                                cta_id: 'home_hero_services',
                                                destination: '/services',
                                                placement: 'home_hero',
                                            })}
                                            className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-950 transition-colors"
                                        >
                                            {t.home.discoverServices}
                                        </Link>
                                    </div>
                                </FadeIn>
                            </div>

                            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end">
                                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl mt-8 lg:mt-0">
                                    <span className="text-lg md:text-xl lg:text-2xl font-light text-white">
                                        {t.home.heroTag}
                                    </span>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Scroll-linked veil: dims the locked hero as you scroll down */}
            <motion.div
                className="fixed inset-0 z-[1] bg-background pointer-events-none"
                style={{ opacity: veilOpacity }}
                aria-hidden="true"
            ></motion.div>

            {/* Post-hero content scrolls up over the locked hero */}
            <div className="relative z-10">

            {/* Stats Cards */}
            <section className="py-12 px-6 relative z-20">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-3 md:gap-8"
                    >
                        <motion.div variants={item} className="liquid-glass border border-white/20 p-4 md:p-10 rounded-[1.5rem] md:rounded-[2rem] hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-[var(--us-red)]/15 rounded-2xl flex items-center justify-center text-[var(--us-red)] mb-4">
                                <Globe size={20} />
                            </div>
                            <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2">{t.home.stats.experienceValue}</h3>
                            <p className="text-muted-foreground font-medium text-xs md:text-lg">{t.home.stats.experience}</p>
                        </motion.div>

                        <motion.div variants={item} className="liquid-glass border border-white/20 p-4 md:p-10 rounded-[1.5rem] md:rounded-[2rem] hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400 mb-4">
                                <TrendingUp size={20} />
                            </div>
                            <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2">{t.home.stats.marketsValue}</h3>
                            <p className="text-muted-foreground font-medium text-xs md:text-lg">{t.home.stats.markets}</p>
                        </motion.div>

                        <motion.div variants={item} className="liquid-glass border border-white/20 p-4 md:p-10 rounded-[1.5rem] md:rounded-[2rem] hover:scale-[1.02] transition-transform duration-300">
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
                        <p className="text-base md:text-xl text-slate-200/95 leading-relaxed font-light drop-shadow-[0_1px_12px_rgba(2,6,23,0.8)]">
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
                        <Link
                            to="/services"
                            onClick={() => trackSiteEvent('service_card_click', {
                                service_id: 'internationalization',
                                destination: '/services',
                                placement: 'home_services_preview',
                            })}
                            className="group"
                        >
                            <div className="bg-card p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--us-red)]/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
                                <div className="absolute left-0 top-0 h-full w-1 bg-[var(--us-red)] opacity-0 transition-opacity group-hover:opacity-100"></div>

                                <div>
                                    <div className="mb-8 p-5 bg-[var(--us-red)]/10 rounded-2xl inline-block text-[var(--us-red)] group-hover:scale-110 transition-transform duration-500">
                                        <Globe size={40} />
                                    </div>
                                    <h3 className="text-lg md:text-3xl font-bold text-foreground mb-4 md:mb-6 group-hover:text-[var(--us-red)] transition-colors leading-tight">
                                        {t.services.service1.title}
                                    </h3>
                                    <p className="text-sm md:text-xl text-muted-foreground leading-relaxed">
                                        {t.services.service1.description}
                                    </p>
                                </div>
                                <div className="mt-6 md:mt-10 flex items-center text-[var(--us-red)] font-bold text-sm md:text-lg">
                                    {t.home.learnMore} <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        <Link
                            to="/services"
                            onClick={() => trackSiteEvent('service_card_click', {
                                service_id: 'business_development',
                                destination: '/services',
                                placement: 'home_services_preview',
                            })}
                            className="group"
                        >
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
                        <Link
                            to="/services"
                            onClick={() => trackSiteEvent('service_card_click', {
                                service_id: 'specialist_team',
                                destination: '/services',
                                placement: 'home_services_preview',
                            })}
                            className="group"
                        >
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
                        <div className="absolute inset-x-10 top-0 h-1 us-red-rule opacity-90"></div>
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[var(--us-red)]/35"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-6xl font-bold text-primary-foreground mb-6 md:mb-8 tracking-tight">
                                {t.home.ctaTitle}
                            </h2>
                            <p className="text-base md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto font-light">
                                {t.home.ctaText}
                            </p>
                            <Link
                                to="/contact"
                                onClick={() => trackSiteEvent('cta_click', {
                                    cta_id: 'home_bottom_contact',
                                    destination: '/contact',
                                    placement: 'home_bottom_cta',
                                })}
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
        </div>
    );
}
