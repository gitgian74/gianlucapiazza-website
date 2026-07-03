import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/use-language';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { isConsentCurrent, setStoredConsent } from './analyticsConsent';

export function CookieConsent() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isConsentCurrent()) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDecline = () => {
        setStoredConsent({
            analytics: false,
            marketing: false,
        });
        setIsVisible(false);
    };

    const handleAcceptAnalytics = () => {
        setStoredConsent({
            analytics: true,
            marketing: false,
        });
        setIsVisible(false);
    };

    const handleAcceptAll = () => {
        setStoredConsent({
            analytics: true,
            marketing: true,
        });
        setIsVisible(false);
    };

    // Safety check: return null if translations aren't loaded yet
    if (!t || !t.cookieConsent) {
        return null;
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <Motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                        <div className="flex-1">
                            {t.cookieConsent.title && (
                                <p className="text-slate-950 font-semibold text-sm mb-2">
                                    {t.cookieConsent.title}
                                </p>
                            )}
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {t.cookieConsent.text}{' '}
                                <Link to="/privacy" className="text-red-700 hover:text-red-800 underline">
                                    {t.cookieConsent.learnMore}
                                </Link>.
                            </p>
                            {t.cookieConsent.marketingText && (
                                <p className="text-slate-600 text-xs leading-relaxed mt-2">
                                    {t.cookieConsent.marketingText}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                            <Button
                                variant="outline"
                                onClick={handleDecline}
                                className="border-slate-300 hover:bg-slate-50 text-slate-700"
                            >
                                {t.cookieConsent.decline}
                            </Button>
                            <Button
                                variant="outline"
                                onClick={handleAcceptAnalytics}
                                className="border-slate-300 hover:bg-slate-50 text-slate-800"
                            >
                                {t.cookieConsent.acceptAnalytics}
                            </Button>
                            <Button
                                size="sm"
                                onClick={handleAcceptAll}
                                className="bg-[var(--us-red)] hover:bg-[var(--us-red)]/90 text-white shadow-lg shadow-red-900/15"
                            >
                                {t.cookieConsent.acceptAll}
                            </Button>
                        </div>
                    </div>
                </Motion.div>
            )}
        </AnimatePresence>
    );
}
