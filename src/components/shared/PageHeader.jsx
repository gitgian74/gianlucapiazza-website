import React from 'react';
import { AnimatedHeading } from '../vex/AnimatedHeading';
import { FadeIn } from '../vex/FadeIn';

export function PageHeader({ title, subtitle, children, className, backgroundImage, tag }) {
    const isShortTitle = typeof title === 'string' && title.length < 60;

    return (
        <div className={`relative flex min-h-[55vh] flex-col justify-end overflow-hidden border-b border-border px-6 pb-12 pt-32 md:min-h-[65vh] md:px-12 lg:px-16 ${className || ''}`}>
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={backgroundImage}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-background via-background/55 to-transparent"></div>
                </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-px us-red-rule opacity-80"></div>
            <div className="relative z-10 w-full lg:grid lg:grid-cols-2 lg:items-end">
                <div>
                    {isShortTitle ? (
                        <AnimatedHeading
                            text={title}
                            charDelay={title.length >= 40 ? 15 : 30}
                            className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4"
                        />
                    ) : (
                        <FadeIn>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
                                {title}
                            </h1>
                        </FadeIn>
                    )}
                    <FadeIn delay={800}>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            {subtitle}
                        </p>
                    </FadeIn>
                    {children && (
                        <FadeIn delay={1200} className="mt-6">
                            {children}
                        </FadeIn>
                    )}
                </div>
                {tag && (
                    <FadeIn delay={1400} className="flex items-end justify-start lg:justify-end">
                        <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl mt-8 lg:mt-0">
                            <span className="text-lg md:text-xl font-light text-white">{tag}</span>
                        </div>
                    </FadeIn>
                )}
            </div>
        </div>
    );
}
