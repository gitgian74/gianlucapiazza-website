import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { ArrowUpRight, MapPin, Target, Trophy } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';

export function Projects() {
    const { t } = useLanguage();

    const projects = [
        t.projects.project1,
        t.projects.project2,
        t.projects.project3,
        t.projects.project4,
        t.projects.project5,
        t.projects.project6,
        t.projects.project7,
    ];

    const projectImages = [
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80", // Coffee/Starbucks vibe
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80", // Water/Bottles
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80", // Logistics/Warehouse
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80", // Gourmet Food
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80", // Tech/IoT
        "https://images.unsplash.com/photo-1592478411213-61535fdd861d?auto=format&fit=crop&q=80", // VR/Headset
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80", // Security/AI
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <PageHeader
                title={t.projects.title}
                subtitle={t.projects.subtitle}
                backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
            />

            <Section className="max-w-6xl">
                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            hoverEffect={true}
                            className="group flex flex-col md:flex-row"
                        >
                            {/* Image Section */}
                            <div className="md:w-1/3 h-64 md:h-auto overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-10"></div>
                                <img
                                    src={projectImages[index]}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {project.marketName && (
                                    <div className="absolute bottom-4 left-4 z-20 flex items-start gap-3">
                                        <div className="p-2 bg-card/80 backdrop-blur-sm rounded-lg text-muted-foreground">
                                            <MapPin size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{project.market}</p>
                                            <p className="text-white font-medium text-sm">{project.marketName}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-10 md:w-2/3 flex flex-col">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h2>
                                    <div className="h-1 w-12 bg-blue-500 rounded-full mt-4"></div>
                                </div>

                                <div className="space-y-6 flex-grow">
                                    {/* Objective */}
                                    <div className="bg-blue-900/10 rounded-2xl p-5 border border-blue-900/30">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Target size={18} className="text-blue-400" />
                                            <h3 className="font-bold text-blue-100 text-sm uppercase tracking-wide">{project.objective}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {project.objectiveText}
                                        </p>
                                    </div>

                                    {/* Results */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Trophy size={18} className="text-orange-400" />
                                            <h3 className="font-bold text-orange-100 text-sm uppercase tracking-wide">{project.results}</h3>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {project.resultsList.map((result, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <div className="mt-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></div>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{result}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                                    {project.skillsList.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-white text-slate-600 rounded-full text-xs font-medium border border-sky-100"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-xl text-muted-foreground mb-6">{t.projects.ctaText}</p>
                    <a href="mailto:mail@gianlucapiazza.com">
                        <Button variant="secondary" size="lg" className="shadow-lg">
                            {t.projects.ctaButton}
                            <ArrowUpRight size={20} />
                        </Button>
                    </a>
                </div>
            </Section>
        </div>
    );
}
