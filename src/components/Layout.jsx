import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion, useScroll } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/use-language';
import { CookieConsent } from './shared/CookieConsent';
import { SocialLinks } from './shared/SocialLinks';

export function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const location = useLocation();
    const shouldReduceMotion = useReducedMotion();

    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'it' ? 'en' : 'it');
    };

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { path: '/', label: t.nav.home },
        { path: '/about', label: t.nav.about },
        { path: '/services', label: t.nav.services },
        { path: '/projects', label: t.nav.projects },
        { path: '/market-research', label: 'AI Research' },
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
            {/* Floating Navigation */}
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <motion.nav
                    initial={shouldReduceMotion ? false : { y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`pointer-events-auto flex items-center gap-2 p-2 rounded-full border transition-all duration-500 ${isScrolled
                            ? 'bg-slate-950/85 border-white/15 shadow-2xl shadow-slate-950/20 backdrop-blur-2xl'
                            : 'bg-slate-950/55 border-white/15 shadow-xl shadow-slate-950/20 backdrop-blur-2xl'
                        }`}
                >
                    <Link to="/" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-xl mr-2 hover:scale-105 transition-transform">
                        G
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-white text-slate-950 shadow-sm'
                                        : 'text-white/82 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="h-6 w-px bg-white/20 mx-2 hidden md:block"></div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            aria-label={language === 'it' ? 'Switch language to English' : 'Cambia lingua in italiano'}
                            className="flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium text-white/82 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            {language.toUpperCase()}
                        </button>

                        <Link
                            to="/contact"
                            className="hidden md:flex px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg text-sm items-center gap-2"
                        >
                            {t.nav.contact}
                            <ChevronRight size={14} />
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-x-4 top-24 z-40 bg-card/95 backdrop-blur-2xl rounded-3xl border border-border/50 shadow-2xl p-6 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-center justify-between p-4 rounded-2xl text-lg font-medium transition-colors ${isActive(link.path)
                                            ? 'bg-primary/10 text-primary'
                                            : 'hover:bg-muted text-foreground'
                                        }`}
                                >
                                    {link.label}
                                    <ChevronRight size={20} className="opacity-50" />
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-4 flex items-center justify-center p-4 rounded-2xl bg-primary text-primary-foreground text-lg font-medium"
                            >
                                {t.nav.contact}
                            </Link>
                            <div className="mt-4 border-t border-border pt-5">
                                <p className="mb-3 text-sm font-semibold text-muted-foreground">{t.footer.followSocial}</p>
                                <SocialLinks showLabels linkClassName="bg-muted/30" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-card border-t border-border py-10 md:py-16 mt-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary)_0%,_transparent_40%)] opacity-5"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div className="max-w-md">
                            <Link to="/" className="text-2xl font-bold tracking-tight mb-6 block">
                                GP & Partners
                            </Link>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {t.footer.about}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <h4 className="font-semibold text-foreground mb-6">{t.footer.quickLinks}</h4>
                                <ul className="space-y-4">
                                    <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.services}</Link></li>
                                    <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.projects}</Link></li>
                                    <li>
                                        <Link to="/market-research" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                            AI Research
                                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">New</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-6">{t.footer.followSocial}</h4>
                                <SocialLinks showLabels className="mb-5" linkClassName="bg-card/60" />
                                <a href="mailto:mail@gianlucapiazza.com" className="text-muted-foreground hover:text-primary transition-colors">mail@gianlucapiazza.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
                        <p>&copy; {new Date().getFullYear()} GP & Partners. {t.footer.rights}</p>
                        <div className="flex gap-6">
                            <Link to="/privacy" className="hover:text-foreground transition-colors">{t.footer.privacy}</Link>
                            <Link to="/privacy" className="hover:text-foreground transition-colors">{t.footer.cookie}</Link>
                        </div>
                    </div>
                </div>
            </footer>
            <CookieConsent />
        </div>
    );
}
