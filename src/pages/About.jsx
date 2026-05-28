import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { ArrowRight, Award, Briefcase, CheckCircle2, MapPin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';

export function About() {
    const { t } = useLanguage();
    const proofPoints = t.about.proofPoints || [];
    const principles = t.about.principles || [];

    return (
        <div className="min-h-screen bg-background pb-16">
            <header className="relative min-h-[82vh] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&q=80&w=1920"
                        alt="Miami Skyline"
                        className="h-full w-full object-cover object-[58%_center]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/88 via-slate-950/62 to-slate-950/25"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                </div>

                <div className="container relative z-10 mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-36">
                    <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55 }}
                            className="max-w-4xl"
                        >
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                                {t.about.heroKicker}
                            </p>
                            <h1 className="max-w-4xl text-4xl font-bold leading-[0.96] tracking-tight text-white md:text-6xl lg:text-7xl">
                                {t.about.heroHeadline}
                            </h1>
                            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                                {t.about.intro}
                            </p>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50"
                                >
                                    {t.about.primaryCta}
                                    <ArrowRight size={16} />
                                </Link>
                                <Link
                                    to="/projects"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
                                >
                                    {t.about.secondaryCta}
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.55 }}
                            className="rounded-[2rem] border border-white/15 bg-slate-950/50 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl"
                        >
                            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white">
                                GP
                            </div>
                            <p className="text-2xl font-semibold leading-tight text-white">
                                {t.about.heroCard}
                            </p>
                            <div className="mt-8 grid grid-cols-3 gap-3">
                                {proofPoints.map((point) => (
                                    <div key={point.label} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                                        <div className="text-2xl font-bold text-white">{point.value}</div>
                                        <div className="mt-1 text-xs leading-snug text-slate-300">{point.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            <Section className="relative z-20 -mt-16 max-w-6xl">
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
                    <div className="space-y-8 lg:col-span-8">

                        {/* Experience Card */}
                        <Card
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl">
                                    <Briefcase size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{t.about.experienceTitle}</h2>
                            </div>
                            <div className="prose prose-invert prose-lg text-muted-foreground space-y-6">
                                <p>{t.about.experience1}</p>
                                <p>{t.about.experience2}</p>
                            </div>
                        </Card>

                        {/* Projects Card */}
                        <Card
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 md:p-10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-purple-900/30 text-purple-400 rounded-xl">
                                    <Award size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{t.about.projectsTitle}</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t.about.projects}
                            </p>
                        </Card>

                        {/* Background Card */}
                        <Card
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 md:p-10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-900/30 text-green-400 rounded-xl">
                                    <Target size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{t.about.backgroundTitle}</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t.about.background}
                            </p>
                        </Card>

                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-8 lg:col-span-4">

                        {/* Philosophy Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-lg shadow-blue-900/10 lg:sticky lg:top-28"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <h3 className="mb-5 text-xl font-bold opacity-90">{t.about.philosophyTitle}</h3>
                            <blockquote className="mb-6 text-3xl font-semibold leading-tight">
                                {t.about.philosophyQuote}
                            </blockquote>
                            <p className="text-sm leading-relaxed text-blue-100">
                                {t.about.philosophy}
                            </p>
                        </motion.div>

                        <Card
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8"
                        >
                            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                                <MapPin className="text-blue-400" />
                                {t.about.principlesTitle}
                            </h2>
                            <div className="space-y-4">
                                {principles.map((principle) => (
                                    <div key={principle} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                                        <span>{principle}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8"
                        >
                            <h2 className="mb-6 text-2xl font-bold text-white">{t.about.skillsTitle}</h2>
                            <div className="flex flex-wrap gap-2">
                                {t.about.skills.map((skill) => (
                                    <span key={skill} className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-slate-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>

                    </div>
                </div>
            </Section>
        </div>
    );
}
