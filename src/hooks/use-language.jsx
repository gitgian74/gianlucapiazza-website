import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations } from '../translations';
import { alternatePath, splitLangPath } from '../lib/locale';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const location = useLocation();
    const navigate = useNavigate();

    // La lingua viene dall'URL, non da una preferenza salvata: cosi' lo stesso
    // indirizzo mostra sempre lo stesso contenuto, a chiunque lo apra — persona
    // o crawler. E' il presupposto perche' l'inglese sia indicizzabile.
    const { lang: language } = splitLangPath(location.pathname);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value = useMemo(() => ({
        language,
        t: translations[language],
        // Cambiare lingua e' una navigazione, non un cambio di stato: porta
        // alla stessa pagina nell'altra lingua, con un URL condivisibile.
        setLanguage: (next) => {
            const target = typeof next === 'function' ? next(language) : next;
            if (target !== language) {
                navigate(alternatePath(location.pathname, target) + location.search + location.hash);
            }
        },
    }), [language, location.pathname, location.search, location.hash, navigate]);

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
