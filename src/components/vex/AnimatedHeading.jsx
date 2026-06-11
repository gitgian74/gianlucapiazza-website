import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function AnimatedHeading({
    text,
    className = '',
    as: Tag = 'h1',
    initialDelay = 200,
    charDelay = 30,
}) {
    const shouldReduceMotion = useReducedMotion();
    const [started, setStarted] = useState(shouldReduceMotion);

    useEffect(() => {
        if (shouldReduceMotion) return;
        const timeout = setTimeout(() => setStarted(true), initialDelay);
        return () => clearTimeout(timeout);
    }, [initialDelay, shouldReduceMotion]);

    const lines = text.split('\n');
    const lineOffsets = lines.map((_, i) =>
        lines.slice(0, i).reduce((sum, l) => sum + l.length, 0)
    );

    const renderChar = (char, lineOffset, charIndex) => (
        <span
            key={charIndex}
            className="inline-block"
            style={{
                opacity: started ? 1 : 0,
                transform: started ? 'translateX(0)' : 'translateX(-18px)',
                transition: shouldReduceMotion ? 'none' : 'opacity 500ms, transform 500ms',
                transitionDelay: `${(lineOffset + charIndex) * charDelay}ms`,
            }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    );

    return (
        <Tag className={className} style={{ letterSpacing: '-0.04em' }} aria-label={lines.join(' ')}>
            {lines.map((line, lineIndex) => {
                let charIndex = 0;
                return (
                    <span key={lineIndex} className="block" aria-hidden="true">
                        {line.split(' ').map((word, wordIndex) => (
                            <span key={wordIndex}>
                                {wordIndex > 0 && renderChar(' ', lineOffsets[lineIndex], charIndex++)}
                                <span className="inline-block whitespace-nowrap">
                                    {word.split('').map((char) => renderChar(char, lineOffsets[lineIndex], charIndex++))}
                                </span>
                            </span>
                        ))}
                    </span>
                );
            })}
        </Tag>
    );
}
