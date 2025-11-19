import React from 'react';
import { cn } from '../../lib/utils';

export function Button({ children, className, variant = 'primary', size = 'default', ...props }) {
    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-blue-500/20",
        secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg",
        outline: "bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white",
        ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-slate-800/50"
    };

    const sizes = {
        default: "px-6 py-3 rounded-full font-bold",
        sm: "px-4 py-2 rounded-full text-sm font-medium",
        lg: "px-8 py-4 rounded-full text-lg font-bold",
        icon: "p-2 rounded-full"
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
