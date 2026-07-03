import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/use-language';
import { CookieConsent } from './shared/CookieConsent';
import { SocialLinks } from './shared/SocialLinks';
import { trackSiteEvent } from './shared/tracking';
import { ANALYTICS_EVENTS } from './shared/analyticsEvents';
import { seoPages } from '../pages/seo/seoPageData';
import { marketPath, marketRoutes } from '../pages/markets/marketRoutes';

const marketLinks = marketRoutes.map(({ slug, it, en }) => ({ path: marketPath(slug), it, en }));

export function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const location = useLocation();
    const shouldReduceMotion = useReducedMotion();

    const toggleLanguage = () => {
        trackSiteEvent(ANALYTICS_EVENTS.LANGUAGE_SWITCH, {
            from_language: language,
            to_language: language === 'it' ? 'en' : 'it',
            placement: 'header',
        });
        setLanguage(prev => prev === 'it' ? 'en' : 'it');
    };

    const isActive = (path) => location.pathname === path;
    const navLinks = [
        { path: '/', label: t.nav.home },
        { path: '/about', label: t.nav.about },
        { path: '/services', label: t.nav.services },
        { path: '/projects', label: t.nav.projects },
        // Temporarily hidden — re-add to restore AI Research in the nav:
        // { path: '/market-research', label: 'AI Research' },
    ];
    const quickLinks = [
        ...navLinks,
        { path: '/contact', label: t.nav.contact },
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-[var(--us-red)]/20 selection:text-[var(--us-red)]">
            {/* Floating Navigation */}
            <div className="absolute right-4 top-3 z-50 flex pointer-events-none md:fixed md:left-0 md:right-0 md:top-6 md:justify-center md:px-4">
                <motion.nav
                    initial={shouldReduceMotion ? false : { y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="liquid-glass pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-1 rounded-full p-1.5 transition-all duration-500 md:gap-2 md:p-2"
                >
                    <Link
                        to="/"
                        aria-label="GP & Partners"
                        className="mr-1 flex h-9 items-center gap-2 rounded-full pr-1.5 text-white transition-transform hover:scale-[1.02] md:mr-2 md:h-10 md:pr-3"
                    >
                        <img
                            src="/logo.svg"
                            alt=""
                            className="h-9 w-9 rounded-full ring-1 ring-white/15 md:h-10 md:w-10"
                        />
                        <span className="hidden text-sm font-semibold tracking-normal text-white md:inline">
                            GP &amp; Partners
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => trackSiteEvent(ANALYTICS_EVENTS.NAVIGATION_CLICK, {
                                    destination: link.path,
                                    label: link.label,
                                    placement: 'header_desktop',
                                })}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-white text-slate-950 shadow-sm ring-1 ring-[var(--us-red)]/25'
                                        : 'text-white/82 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-[var(--us-red)]/20'
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
                            className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium text-white/82 transition-colors hover:bg-white/10 hover:text-white md:h-10 md:w-10 md:text-sm"
                        >
                            {language.toUpperCase()}
                        </button>

                        <Link
                            to="/contact"
                            onClick={() => trackSiteEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                                cta_id: 'header_contact',
                                destination: '/contact',
                                placement: 'header_desktop',
                            })}
                            className="hidden md:flex px-5 py-2.5 bg-[var(--us-red)] text-[var(--us-red-foreground)] rounded-full font-medium hover:bg-[#9f1539] transition-all shadow-md shadow-[var(--us-red)]/20 hover:shadow-lg text-sm items-center gap-2"
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
                                    onClick={() => {
                                        trackSiteEvent(ANALYTICS_EVENTS.NAVIGATION_CLICK, {
                                            destination: link.path,
                                            label: link.label,
                                            placement: 'mobile_menu',
                                        });
                                        setIsMenuOpen(false);
                                    }}
                                    className={`flex items-center justify-between p-4 rounded-2xl text-lg font-medium transition-colors ${isActive(link.path)
                                            ? 'bg-[var(--us-red)]/10 text-[var(--us-red)]'
                                            : 'hover:bg-muted text-foreground'
                                        }`}
                                >
                                    {link.label}
                                    <ChevronRight size={20} className="opacity-50" />
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => {
                                    trackSiteEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                                        cta_id: 'mobile_menu_contact',
                                        destination: '/contact',
                                        placement: 'mobile_menu',
                                    });
                                    setIsMenuOpen(false);
                                }}
                                className="mt-4 flex items-center justify-center p-4 rounded-2xl bg-[var(--us-red)] text-[var(--us-red-foreground)] text-lg font-medium"
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
                <div className="absolute inset-x-0 top-0 h-px us-red-rule opacity-70"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid gap-10 md:grid-cols-12 md:gap-12 mb-16">
                        <div className="md:col-span-4 lg:col-span-3">
                            <Link
                                to="/"
                                onClick={() => trackSiteEvent(ANALYTICS_EVENTS.NAVIGATION_CLICK, {
                                    destination: '/',
                                    label: 'GP & Partners',
                                    placement: 'footer_brand',
                                })}
                                className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight"
                            >
                                <img src="/logo.svg" alt="" className="h-10 w-10 rounded-full ring-1 ring-white/15" />
                                GP & Partners
                            </Link>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {t.footer.about}
                            </p>
                            <h2 className="font-semibold text-foreground mb-4 text-sm">{t.footer.followSocial}</h2>
                            <SocialLinks showLabels className="max-w-sm" linkClassName="bg-card/60" />
                        </div>

                        <nav aria-label={t.footer.quickLinks} className="md:col-span-8 lg:col-span-9 grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-10">
                            <div>
                                <h2 className="font-semibold text-foreground mb-5 text-sm">{t.footer.quickLinks}</h2>
                                <ul className="space-y-3 text-sm">
                                    {quickLinks.map((link) => (
                                        <li key={link.path}>
                                            <Link
                                                to={link.path}
                                                onClick={() => trackSiteEvent(ANALYTICS_EVENTS.NAVIGATION_CLICK, {
                                                    destination: link.path,
                                                    label: link.label,
                                                    placement: 'footer',
                                                })}
                                                className="text-muted-foreground hover:text-[var(--us-red)] transition-colors inline-flex items-center gap-2"
                                            >
                                                {link.label}
                                                {link.path === '/market-research' && (
                                                    <span className="px-2 py-0.5 rounded-full bg-[var(--us-red)]/10 text-[var(--us-red)] text-[10px] font-bold uppercase tracking-wider">New</span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-semibold text-foreground mb-5 text-sm">{t.footer.markets}</h2>
                                <ul className="space-y-3 text-sm">
                                    {marketLinks.map((link) => (
                                        <li key={link.path}>
                                            <Link
                                                to={link.path}
                                                onClick={() => trackSiteEvent(ANALYTICS_EVENTS.NAVIGATION_CLICK, {
                                                    destination: link.path,
                                                    label: link[language] || link.en,
                                                    placement: 'footer_sitemap',
                                                })}
                                                className="text-muted-foreground hover:text-[var(--us-red)] transition-colors"
                                            >
                                                {link[language] || link.en}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-semibold text-foreground mb-5 text-sm">{t.footer.landings}</h2>
                                <ul className="space-y-3 text-sm">
                                    {Object.values(seoPages).map((page) => (
                                        <li key={page.path}>
                                            <Link
                                                to={page.path}
                                                onClick={() => trackSiteEvent(ANALYTICS_EVENTS.NAVIGATION_CLICK, {
                                                    destination: page.path,
                                                    label: page.path,
                                                    placement: 'footer_sitemap',
                                                })}
                                                className="text-muted-foreground hover:text-[var(--us-red)] transition-colors leading-snug block"
                                            >
                                                {(page[language] || page.en).hero}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
                        <p>&copy; {new Date().getFullYear()} GP & Partners. {t.footer.rights}</p>
                        <div className="flex gap-6">
                            <Link to="/privacy" onClick={() => trackSiteEvent(ANALYTICS_EVENTS.NAVIGATION_CLICK, { destination: '/privacy', label: 'privacy', placement: 'footer_legal' })} className="hover:text-foreground transition-colors">{t.footer.privacy}</Link>
                            <Link to="/privacy" onClick={() => trackSiteEvent(ANALYTICS_EVENTS.NAVIGATION_CLICK, { destination: '/privacy', label: 'cookie', placement: 'footer_legal' })} className="hover:text-foreground transition-colors">{t.footer.cookie}</Link>
                        </div>
                    </div>
                </div>
            </footer>
            <CookieConsent />
        </div>
    );
}
