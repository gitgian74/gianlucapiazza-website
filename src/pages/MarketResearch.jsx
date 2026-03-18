import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { Send, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MarketResearch() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', content: t.research.chat.error }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: t.research.chat.error }]);
    } finally {
      setLoading(false);
    }
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
            {t.research.eyebrow}
          </div>
          <h1 className="section-title-apple" style={{ color: 'white', marginBottom: '16px' }}>
            {t.research.title}
          </h1>
          <p className="section-text-apple" style={{ color: '#a1a1a6', maxWidth: '720px', margin: '0 auto' }}>
            {t.research.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Chat Interface */}
      <section style={{ padding: '60px 24px', background: 'white', minHeight: '600px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: '#f5f5f7',
              borderRadius: '18px',
              border: '1px solid #e5e5e7',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              height: '600px',
            }}
          >
            {/* Messages Container */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                marginBottom: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {messages.length === 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
                  <p style={{ fontSize: '15px', color: '#555555', marginBottom: '24px' }}>
                    {t.research.chat.placeholder}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', width: '100%', maxWidth: '400px' }}>
                    {t.research.examples.map((example, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setInput(example);
                          setMessages([{ role: 'user', content: example }]);
                          setTimeout(() => {
                            setLoading(true);
                            fetch('/api/chat', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ message: example }),
                            })
                              .then((res) => res.json())
                              .then((data) => {
                                setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
                              })
                              .catch(() => {
                                setMessages((prev) => [...prev, { role: 'assistant', content: t.research.chat.error }]);
                              })
                              .finally(() => setLoading(false));
                          }, 100);
                        }}
                        style={{
                          padding: '12px 16px',
                          background: 'white',
                          border: '1px solid #d5d5d7',
                          borderRadius: '10px',
                          fontSize: '13px',
                          color: '#1d1d1f',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s',
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = '#f5f5f7';
                          e.target.style.borderColor = '#a1a1a6';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = 'white';
                          e.target.style.borderColor = '#d5d5d7';
                        }}
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: 'flex',
                      justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '70%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        background: msg.role === 'user' ? '#34c759' : 'white',
                        color: msg.role === 'user' ? 'white' : '#1d1d1f',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        border: msg.role === 'user' ? 'none' : '1px solid #d5d5d7',
                      }}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))
              )}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: '8px',
                    padding: '12px 16px',
                  }}
                >
                  <Loader size={16} style={{ color: '#34c759', animation: 'spin 1s linear infinite' }} />
                  <span style={{ fontSize: '13px', color: '#555555' }}>
                    {t.research.chat.loading}
                  </span>
                </motion.div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '12px' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.research.chat.placeholder}
                disabled={loading}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  fontSize: '13px',
                  border: '1px solid #d5d5d7',
                  borderRadius: '10px',
                  fontFamily: 'inherit',
                  background: 'white',
                }}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                style={{
                  padding: '12px 20px',
                  background: loading || !input.trim() ? '#d5d5d7' : '#34c759',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                <Send size={16} />
                {t.research.chat.send}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-apple">
        <div className="cta-glow" />
        <motion.div
          style={{ position: 'relative', zIndex: 2 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-apple" style={{ color: 'white', marginBottom: '24px', textAlign: 'center' }}>
            {t.research.cta.title}
          </h2>
          <p style={{ color: '#a1a1a6', textAlign: 'center', marginBottom: '40px', fontSize: '17px' }}>
            {t.research.cta.description}
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn-primary-apple">
              {t.research.cta.button}
            </Link>
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
