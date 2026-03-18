import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback
    const mailtoLink = `mailto:info@gianlucapiazza.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="apple-redesign">
      {/* Hero Section */}
      <section style={{ background: '#1d1d1f', padding: '120px 24px 80px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow-apple" style={{ color: '#86868b' }}>
            {t.contact.eyebrow}
          </div>
          <h1 className="section-title-apple" style={{ color: 'white', marginBottom: '16px' }}>
            {t.contact.title}
          </h1>
          <p className="section-text-apple" style={{ color: '#a1a1a6', maxWidth: '720px', margin: '0 auto' }}>
            {t.contact.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '15px',
                      border: '1px solid #d5d5d7',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '15px',
                      border: '1px solid #d5d5d7',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '15px',
                      border: '1px solid #d5d5d7',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '15px',
                      border: '1px solid #d5d5d7',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '15px',
                      border: '1px solid #d5d5d7',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-apple"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  {submitted ? t.contact.form.success : t.contact.form.submit}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Offices */}
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '32px', color: '#1d1d1f' }}>
                {t.contact.info.offices}
              </h3>

              {/* Italy */}
              <div style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <MapPin size={20} style={{ color: '#34c759', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1d1d1f' }}>
                      {t.contact.info.italy.city}
                    </p>
                    <p style={{ fontSize: '13px', color: '#555555', marginTop: '4px' }}>
                      {t.contact.info.italy.phone}
                    </p>
                    <p style={{ fontSize: '13px', color: '#555555' }}>
                      {t.contact.info.italy.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* USA */}
              <div style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <MapPin size={20} style={{ color: '#34c759', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1d1d1f' }}>
                      {t.contact.info.usa.city}
                    </p>
                    <p style={{ fontSize: '13px', color: '#555555', marginTop: '4px' }}>
                      {t.contact.info.usa.phone}
                    </p>
                    <p style={{ fontSize: '13px', color: '#555555' }}>
                      {t.contact.info.usa.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div style={{ marginBottom: '48px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#1d1d1f' }}>
                  {t.contact.info.hours}
                </h4>
                <p style={{ fontSize: '13px', color: '#555555', marginBottom: '4px' }}>
                  {t.contact.info.mondayFriday}
                </p>
                <p style={{ fontSize: '13px', color: '#555555', marginBottom: '12px' }}>
                  {t.contact.info.saturday}
                </p>
                <p style={{ fontSize: '12px', color: '#a1a1a6' }}>
                  {t.contact.info.timezone}
                </p>
              </div>

              {/* Response Time */}
              <div style={{ padding: '16px', background: '#f5f5f7', borderRadius: '10px' }}>
                <p style={{ fontSize: '13px', color: '#555555' }}>
                  {t.contact.info.response}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Responsive - Stack on small screens */}
      <style>{`
        @media (max-width: 768px) {
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
