import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Card({ children, className, hoverEffect = false, ...props }) {
    return (
        <motion.div
            className={cn(
                "bg-card text-card-foreground rounded-3xl shadow-sm border border-border overflow-hidden",
                hoverEffect && "hover:shadow-xl hover:border-[var(--us-red)]/35 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
