import React from 'react';
import { cn } from '../../lib/utils';

export function Button({ children, className, variant = 'primary', size = 'default', ...props }) {
    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
        secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 shadow-sm",
        outline: "bg-transparent border border-border text-foreground hover:bg-muted",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
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
