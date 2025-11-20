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
                    <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                <Cookie className="text-primary" size={20} />
                                {t.cookie.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {t.cookie.description}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                onClick={handleDecline}
                                className="border-slate-300 hover:bg-slate-50 text-slate-700"
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
