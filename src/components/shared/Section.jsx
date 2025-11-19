import React from 'react';
import { cn } from '../../lib/utils'; // Reusing the cn utility from Card for now, or I should move it to a utils file.

export function Section({ children, className, id, ...props }) {
    return (
        <section
            id={id}
            className={cn("container mx-auto px-6 max-w-7xl mt-12", className)}
            {...props}
        >
            {children}
        </section>
    );
}
