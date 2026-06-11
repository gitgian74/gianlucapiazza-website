import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { ArrowRight, Award, Briefcase, CheckCircle2, MapPin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../components/shared/Section';
import { trackSiteEvent } from '../components/shared/tracking';
import { FadeIn } from '../components/vex/FadeIn';

export function About() {
    const { t } = useLanguage();
    const proofPoints = t.about.proofPoints || [];
    const principles = t.about.principles || [];
    const profileCards = [
        {
            icon: Briefcase,
            title: t.about.experienceTitle,
            body: [t.about.experience1, t.about.experience2],
            accent: 'blue',
        },
        {
            icon: Award,
            title: t.about.projectsTitle,
            body: [t.about.projects],
            accent: 'red',
        },
        {
            icon: Target,
            title: t.about.backgroundTitle,
            body: [t.about.background],
            accent: 'green',
        },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden bg-background pb-16">
            <header className="relative min-h-[82vh] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/heroes/new-york.jpg"
                        alt="New York Skyline"
                        className="h-full w-full object-cover object-[58%_center]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/88 via-slate-950/62 to-slate-950/25"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                </div>

                <div className="container relative z-10 mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-36">
                    <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="max-w-4xl">
                            <FadeIn>
                                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                                    {t.about.heroKicker}
                                </p>
                                <h1 className="max-w-4xl text-[2.35rem] font-bold leading-[1.04] tracking-tight text-white [overflow-wrap:break-word] sm:text-5xl md:text-6xl md:leading-[0.98] lg:text-7xl">
                                    {t.about.heroHeadline}
                                </h1>
                            </FadeIn>
                            <FadeIn delay={800}>
                                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                                    {t.about.intro}
                                </p>
                            </FadeIn>
                            <FadeIn delay={1200} className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    to="/contact"
                                    onClick={() => trackSiteEvent('cta_click', {
                                        cta_id: 'about_hero_contact',
                                        destination: '/contact',
                                        placement: 'about_hero',
                                    })}
                                    className="inline-flex w-full items-center justify-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors sm:w-auto"
                                >
                                    {t.about.primaryCta}
                                    <ArrowRight size={16} />
                                </Link>
                                <Link
                                    to="/projects"
                                    onClick={() => trackSiteEvent('cta_click', {
                                        cta_id: 'about_hero_projects',
                                        destination: '/projects',
                                        placement: 'about_hero',
                                    })}
                                    className="liquid-glass inline-flex w-full items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-950 transition-colors sm:w-auto"
                                >
                                    {t.about.secondaryCta}
                                </Link>
                            </FadeIn>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.55 }}
                            className="liquid-glass relative overflow-hidden rounded-[1.35rem] border border-white/20 p-5 shadow-2xl shadow-slate-950/30 sm:p-6"
                        >
                            <div className="absolute inset-x-0 top-0 h-px us-red-rule"></div>
                            <div className="mb-7 flex items-center justify-between gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-lg font-bold text-white">
                                    GP
                                </div>
                                <div className="h-px flex-1 bg-white/12"></div>
                            </div>
                            <p className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                                {t.about.heroCard}
                            </p>
                            <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
                                {proofPoints.map((point) => (
                                    <div key={point.label} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-4 py-3">
                                        <dt className="text-2xl font-bold text-white">{point.value}</dt>
                                        <dd className="text-sm leading-snug text-slate-300">{point.label}</dd>
                                    </div>
                                ))}
                            </dl>
                        </motion.div>
                    </div>
                </div>
            </header>

            <Section className="relative z-20 -mt-8 max-w-6xl">
                <motion.figure
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/30"
                >
                    <img
                        src="/images/vr-work-strategy-room.webp"
                        alt="Scenario di lavoro immersivo con dashboard 3D e interfacce VR"
                        className="aspect-[16/9] w-full object-cover"
                        loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/42 via-transparent to-blue-950/12"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/50 to-transparent"></div>
                </motion.figure>
            </Section>

            <Section className="relative z-10 max-w-6xl">
                <div className="grid gap-8 lg:grid-cols-12">

                    {/* Left Column - Main Content */}
                    <div className="space-y-5 lg:col-span-8">
                        {profileCards.map((card, index) => {
                            const Icon = card.icon;
                            const accentClasses = {
                                blue: 'border-blue-400/35 bg-blue-400/10 text-blue-200',
                                red: 'border-[var(--us-red)]/45 bg-[var(--us-red)]/12 text-rose-100',
                                green: 'border-emerald-400/35 bg-emerald-400/10 text-emerald-100',
                            }[card.accent];

                            return (
                                <motion.article
                                    key={card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="group liquid-glass relative overflow-hidden rounded-[1.35rem] border border-white/20 p-6 shadow-xl shadow-slate-950/15 md:p-8"
                                >
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[var(--us-red)] via-blue-400/70 to-transparent opacity-70"></div>
                                    <div className="absolute inset-y-6 left-0 w-px bg-gradient-to-b from-transparent via-white/18 to-transparent"></div>
                                    <div className="grid gap-5 md:grid-cols-[8rem_1fr] md:gap-8">
                                        <div className="flex items-start justify-between gap-4 md:block">
                                            <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${accentClasses}`}>
                                                <Icon size={21} strokeWidth={1.8} />
                                            </div>
                                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 md:block">
                                                0{index + 1}
                                            </span>
                                        </div>
                                        <div>
                                            <h2 className="max-w-2xl text-[clamp(1.35rem,5vw,2rem)] font-semibold leading-tight tracking-tight text-white">
                                                {card.title}
                                            </h2>
                                            <div className="mt-5 space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
                                                {card.body.map((paragraph) => (
                                                    <p key={paragraph}>{paragraph}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-8 lg:col-span-4">

                        {/* Philosophy Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-[1.35rem] border border-blue-300/18 bg-gradient-to-br from-blue-600 to-slate-950 p-7 text-white shadow-xl shadow-blue-950/20 lg:sticky lg:top-28"
                        >
                            <div className="absolute inset-x-0 top-0 h-px us-red-rule opacity-90"></div>
                            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-blue-100/85">{t.about.philosophyTitle}</h3>
                            <blockquote className="mb-6 text-2xl font-semibold leading-tight sm:text-3xl">
                                {t.about.philosophyQuote}
                            </blockquote>
                            <p className="text-sm leading-relaxed text-blue-100/90">
                                {t.about.philosophy}
                            </p>
                        </motion.div>

                        <motion.article
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="liquid-glass rounded-[1.35rem] border border-white/20 p-6 shadow-xl shadow-slate-950/10 md:p-7"
                        >
                            <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-white">
                                <MapPin className="h-5 w-5 text-blue-300" />
                                {t.about.principlesTitle}
                            </h2>
                            <div className="space-y-4">
                                {principles.map((principle) => (
                                    <div key={principle} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                                        <span>{principle}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="liquid-glass rounded-[1.35rem] border border-white/20 p-6 shadow-xl shadow-slate-950/10 md:p-7"
                        >
                            <h2 className="mb-6 text-xl font-semibold text-white">{t.about.skillsTitle}</h2>
                            <div className="flex flex-wrap gap-2">
                                {t.about.skills.map((skill) => (
                                    <span key={skill} className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-sm font-medium text-slate-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.article>

                    </div>
                </div>
            </Section>
        </div>
    );
}
