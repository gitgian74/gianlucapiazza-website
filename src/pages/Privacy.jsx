import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';

export function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="apple-redesign">
      {/* Hero Section */}
      <section style={{ background: '#1d1d1f', padding: '120px 24px 80px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title-apple" style={{ color: 'white', marginBottom: '16px' }}>
            {t.privacy.title}
          </h1>
          <p style={{ color: '#86868b', fontSize: '14px' }}>
            {t.privacy.lastUpdated}: March 18, 2026
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {t.privacy.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ marginBottom: '48px' }}
            >
              <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#1d1d1f' }}>
                {section.title}
              </h2>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555555' }}>
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Additional Legal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: '60px',
              padding: '24px',
              background: '#f5f5f7',
              borderRadius: '14px',
              borderLeft: '4px solid #34c759',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#1d1d1f' }}>
              Important Notice
            </h3>
            <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#555555' }}>
              This Privacy Policy is provided for informational purposes. For complete legal terms and conditions, please contact us directly at privacy@gianlucapiazza.com. We are committed to protecting your data and complying with all applicable privacy regulations including GDPR, CCPA, and other international standards.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
