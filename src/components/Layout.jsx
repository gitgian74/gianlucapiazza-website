import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { Menu, X, Globe } from 'lucide-react';

export function Layout({ children }) {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                <a href="mailto:info@gianlucapiazza.com" style={{ fontSize: '13px', color: '#a1a1a6', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#a1a1a6')}>
                  info@gianlucapiazza.com
                </a>
                <a href="tel:+390000000000" style={{ fontSize: '13px', color: '#a1a1a6', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#34c759')} onMouseLeave={(e) => (e.target.style.color = '#a1a1a6')}>
                  +39 02 XXXX XXXX
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
