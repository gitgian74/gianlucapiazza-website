import React from 'react';
import { motion } from 'framer-motion';

export function PageHeader({ title, subtitle, children, className }) {
    return (
        <div className={`bg-card border-b border-slate-800 pt-32 pb-20 px-6 ${className || ''}`}>
            <div className="container mx-auto max-w-4xl text-center">
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
