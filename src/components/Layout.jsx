import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { Menu, X, Globe } from 'lucide-react';

export function Layout({ children }) {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieBanner(false);
    // Load GA4 when accepted
    window.gtag?.('consent', 'update', {
      'analytics_storage': 'granted'
    });
  };

  const handleCookieDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowCookieBanner(false);
  };

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/projects', label: t.nav.projects },
    { path: '/research', label: t.nav.research },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '16px 24px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#1d1d1f',
              textDecoration: 'none',
              letterSpacing: '-0.5px',
            }}
          >
            Gianluca Piazza
          </Link>

          {/* Desktop Menu */}
          <div
            style={{
              display: 'none',
              gap: '32px',
              alignItems: 'center',
              '@media (min-width: 768px)': {
                display: 'flex',
              },
            }}
            className="desktop-menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#1d1d1f',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#34c759')}
                onMouseLeave={(e) => (e.target.style.color = '#1d1d1f')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              style={{
                padding: '8px 12px',
                background: '#f5f5f7',
                border: '1px solid #d5d5d7',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#1d1d1f',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#e5e5e7';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f5f5f7';
              }}
            >
              <Globe size={14} />
              {language === 'it' ? 'EN' : 'IT'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                '@media (min-width: 768px)': {
                  display: 'none',
                },
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#1d1d1f',
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid #e5e5e7',
            }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#1d1d1f',
                  textDecoration: 'none',
                  padding: '8px 0',
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer
        style={{
          background: '#1d1d1f',
          color: '#f5f5f7',
          padding: '60px 24px 40px',
          marginTop: '80px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Footer Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              marginBottom: '60px',
            }}
          >
            {/* Brand Column */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
                {t.footer.company}
              </h3>
              <p style={{ fontSize: '13px', color: '#a1a1a6', lineHeight: '1.6' }}>
                {t.footer.tagline}
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>
                Services
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link to="/services" style={{ fontSize: '13px', color: '#a1a1a6', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#a1a1a6')}>
                  {t.services.list[0]?.title}
                </Link>
                <Link to="/services" style={{ fontSize: '13px', color: '#a1a1a6', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#a1a1a6')}>
                  {t.services.list[1]?.title}
                </Link>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>
                Company
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link to="/about" style={{ fontSize: '13px', color: '#a1a1a6', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#a1a1a6')}>
                  {t.nav.about}
                </Link>
                <Link to="/contact" style={{ fontSize: '13px', color: '#a1a1a6', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#a1a1a6')}>
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>
                {t.footer.contact}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="mailto:mail@gianlucapiazza.com" style={{ fontSize: '13px', color: '#a1a1a6', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#a1a1a6')}>
                  mail@gianlucapiazza.com
                </a>
                <a href="tel:+39337303431" style={{ fontSize: '13px', color: '#a1a1a6', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#a1a1a6')}>
                  +39 337 303431
                </a>
                <a href="tel:+13055480002" style={{ fontSize: '13px', color: '#a1a1a6', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#a1a1a6')}>
                  +1 (305) 548-0002
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid #424245',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <p style={{ fontSize: '12px', color: '#86868b' }}>
              © 2026 {t.footer.company}. {t.footer.rights}
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link to="/privacy" style={{ fontSize: '12px', color: '#86868b', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#86868b')}>
                {t.footer.privacy}
              </Link>
              <a href="#" style={{ fontSize: '12px', color: '#86868b', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#86868b')}>
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(29, 29, 31, 0.95)',
            backdropFilter: 'blur(20px)',
            color: '#f5f5f7',
            padding: '24px',
            zIndex: 1000,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                Cookie & Privacy Notice
              </h3>
              <p style={{ fontSize: '14px', color: '#a1a1a6', lineHeight: '1.6' }}>
                We use cookies and analytics to improve your experience. We collect only essential data and respect your privacy. See our <Link to="/privacy" style={{ color: '#34c759', textDecoration: 'none' }}>Privacy Policy</Link> for details.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
              <button
                onClick={handleCookieDecline}
                style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  border: '1px solid #86868b',
                  borderRadius: '8px',
                  color: '#a1a1a6',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = '#a1a1a6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = '#86868b';
                }}
              >
                Decline
              </button>
              <button
                onClick={handleCookieAccept}
                style={{
                  padding: '8px 16px',
                  background: '#34c759',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#30b452';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#34c759';
                }}
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          .mobile-menu {
            display: none !important;
          }
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
