import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/use-language';
import { CookieConsent } from './shared/CookieConsent';

export function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const location = useLocation();

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'it' ? 'en' : 'it');
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight text-primary flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
                            G
                        </div>
                        <span>Piazza</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200">
                            {[
                                { path: '/', label: t.nav.home },
                                { path: '/about', label: t.nav.about },
                                { path: '/services', label: t.nav.services },
                                { path: '/projects', label: t.nav.projects },
                                { path: '/market-research', label: 'AI Research' },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-white text-primary shadow-sm'
                                        : 'text-slate-500 hover:text-primary hover:bg-white/50'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 hover:bg-white text-slate-600 transition-colors text-sm font-medium border border-sky-100"
                        >
                            <Globe size={16} />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        <Link
                            to="/contact"
                            className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg text-sm"
                        >
                            {t.nav.contact}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 text-slate-600 text-sm font-medium border border-sky-100"
                        >
                            <Globe size={16} />
                            <span>{language.toUpperCase()}</span>
                        </button>
                        <button
                            className="p-2 text-slate-700 hover:bg-sky-50 rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {[
                                { path: '/', label: t.nav.home },
                                { path: '/about', label: t.nav.about },
                                { path: '/services', label: t.nav.services },
                                { path: '/projects', label: t.nav.projects },
                                { path: '/market-research', label: 'AI Research' },
                                { path: '/contact', label: t.nav.contact },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-xl bg-card hover:bg-sky-100 text-lg font-medium text-foreground transition-colors border border-sky-50"
                                >
                                    {link.label}
                                    <ChevronRight size={20} className="text-muted-foreground" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-background border-t border-border py-12 mt-auto">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <Link to="/" className="text-xl font-bold text-primary mb-4 block">
                                Gianluca Piazza
                            </Link>
                            <p className="text-muted-foreground max-w-md leading-relaxed">
                                {t.footer.about}
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-4">{t.footer.quickLinks}</h4>
                            <ul className="space-y-2">
                                <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">{t.nav.services}</Link>
                                <Link to="/projects" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">{t.nav.projects}</Link>
                                <Link to="/market-research" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                                    <Sparkles size={14} />
                                    AI Research
                                </Link>
                                <Link to="/contact" className="px-5 py-2.5 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-500/10">
                                    {t.nav.contact}
                                </Link>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-4">{t.footer.contactTitle}</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>mail@gianlucapiazza.com</li>
                                <li>+39 337 303431</li>
                                <li>+1 (305) 548-0002</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
                        <p>&copy; {new Date().getFullYear()} Gianluca Piazza. {t.footer.rights}</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link to="/privacy" className="hover:text-blue-400 transition-colors">{t.footer.privacy}</Link>
                            <Link to="/privacy" className="hover:text-blue-400 transition-colors">{t.footer.cookie}</Link>
                            <a href="https://www.linkedin.com/in/gianlucapiazza/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Cookie Consent */}
            <CookieConsent />
        </div>
    );
}
