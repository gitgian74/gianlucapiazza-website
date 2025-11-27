import React from 'react';
import { motion } from 'framer-motion';

export function PageHeader({ title, subtitle, children, className, backgroundImage }) {
    return (
        <div className={`relative border-b border-slate-800 pt-32 pb-20 px-6 ${className || ''}`}>
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={backgroundImage}
                        alt="Background"
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"></div>
                </div>
            )}
            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8"
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
