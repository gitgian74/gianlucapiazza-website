import { useState, createContext, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        if (typeof window === 'undefined') {
            return 'it';
        }

        const savedLanguage = window.localStorage.getItem('siteLanguage');
        return savedLanguage === 'en' ? 'en' : 'it';
    });

    useEffect(() => {
        window.localStorage.setItem('siteLanguage', language);
    }, [language]);

    const t = translations[language];

    const value = {
        language,
        setLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
