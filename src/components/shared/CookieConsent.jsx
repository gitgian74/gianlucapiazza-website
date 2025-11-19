import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/use-language';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export function CookieConsent() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-6xl mx-auto bg-slate-900/95 backdrop-blur-lg border border-slate-800 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-slate-300 text-sm md:text-base text-center md:text-left">
                            {t.cookieConsent.text}{' '}
                            <Link to="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                                {t.cookieConsent.learnMore}
                            </Link>.
                        </div>
                        <div className="flex items-center gap-4 shrink-0">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleDecline}
                                className="border-slate-700 hover:bg-slate-800 text-slate-300"
                            >
                                {t.cookieConsent.decline}
                            </Button>
                            <Button
                                size="sm"
                                onClick={handleAccept}
                                className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                            >
                                {t.cookieConsent.accept}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
