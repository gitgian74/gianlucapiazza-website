import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Card({ children, className, hoverEffect = false, ...props }) {
    return (
        <motion.div
            className={cn(
                "bg-card rounded-3xl shadow-sm border border-slate-800 overflow-hidden",
                hoverEffect && "hover:shadow-xl hover:border-blue-500/30 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
