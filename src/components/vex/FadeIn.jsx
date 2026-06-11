import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function FadeIn({ children, delay = 0, duration = 1000, className = '' }) {
    const shouldReduceMotion = useReducedMotion();
    const [visible, setVisible] = useState(shouldReduceMotion);

    useEffect(() => {
        if (shouldReduceMotion) return;
        const timeout = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timeout);
    }, [delay, shouldReduceMotion]);

    return (
        <div
            className={`transition-opacity ${visible ? 'opacity-100' : 'opacity-0'} ${className}`}
            style={{ transitionDuration: `${duration}ms` }}
            inert={visible ? undefined : true}
        >
            {children}
        </div>
    );
}
