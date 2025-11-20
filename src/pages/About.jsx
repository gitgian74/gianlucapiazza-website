import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { User, Briefcase, Award, BookOpen } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';

export function About() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <div className="relative">
                <div className="absolute inset-0 bg-background">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-background/50 to-background"></div>
                </div>

                <div className="relative pt-32 pb-20 px-6 container mx-auto max-w-5xl z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative"
                        >
                            <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50 transform translate-y-4"></div>
                            <img
                                src="/gianluca-profile.webp"
                                alt="Gianluca Piazza"
                                className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white relative z-10"
                            />
                        </motion.div>

                        {/* Intro Text */}
                        <div className="text-center md:text-left flex-grow">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-bold text-white mb-6"
                            >
                                {t.about.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-muted-foreground leading-relaxed"
                            >
                                {t.about.intro}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            <Section className="max-w-6xl">
                <div className="grid md:grid-cols-12 gap-8">

                    {/* Left Column - Main Content */}
                    <div className="md:col-span-8 space-y-8">

                        {/* Experience Card */}
                        <Card
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8"
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
                            className="p-8"
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
                            className="p-8"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-900/30 text-green-400 rounded-xl">
                                    <BookOpen size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{t.about.backgroundTitle}</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t.about.background}
                            </p>
                        </Card>

                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="md:col-span-4 space-y-8">

                        {/* Philosophy Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary text-white p-8 rounded-3xl shadow-lg shadow-blue-900/10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <h3 className="text-xl font-bold mb-4 opacity-90">{t.about.philosophyTitle}</h3>
                            <blockquote className="text-2xl font-serif italic mb-6 leading-snug">
                                "{t.about.philosophyQuote}"
                            </blockquote>
                            <p className="text-blue-100 leading-relaxed text-sm">
                                {t.about.philosophy}
                            </p>
                        </motion.div>

                        {/* Skills Card */}
                        <Card
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <User className="text-blue-400" />
                                {t.about.skillsTitle}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {t.about.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-card text-muted-foreground rounded-lg border border-border font-medium text-sm hover:bg-blue-900 hover:text-blue-300 hover:border-blue-700 transition-colors cursor-default"
                                    >
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
