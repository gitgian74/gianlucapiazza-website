import React, { useState } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grazie! Ti ricontatteremo presto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating 3D Shapes */}
        <div className="absolute top-20 left-20 w-24 h-24 border-2 border-cyan-400 rotate-45 animate-float-slow opacity-30" 
             style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}></div>
        <div className="absolute top-40 right-32 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-orange-500 animate-float opacity-40"
             style={{ filter: 'drop-shadow(0 0 20px rgba(252, 76, 2, 0.6))' }}></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 rounded-full bg-cyan-400 animate-pulse opacity-20"
             style={{ boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' }}></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 border-2 border-orange-500 animate-spin-slow opacity-25"
             style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', boxShadow: '0 0 30px rgba(252, 76, 2, 0.5)' }}></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rotate-12 animate-float-slow opacity-30"
             style={{ boxShadow: '0 0 25px rgba(0, 217, 255, 0.5)' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex flex-col items-center justify-center">
        
        {/* Neon Coming Soon Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-wider"
              style={{
                color: '#00D9FF',
                textShadow: '0 0 10px rgba(0, 217, 255, 0.8), 0 0 20px rgba(0, 217, 255, 0.6), 0 0 30px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.2)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
            COMING SOON
          </h1>
          <p className="text-2xl text-cyan-300 font-light tracking-wide">
            Gianluca Piazza
          </p>
          <p className="text-lg text-slate-400 mt-2">
            Consulente Internazionalizzazione | Business Developer | Entrepreneur
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          
          {/* Contact Information Card */}
          <div className="backdrop-blur-xl bg-slate-800/30 border border-cyan-500/30 rounded-2xl p-8 shadow-2xl"
               style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.15)' }}>
            <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3"
                style={{ textShadow: '0 0 15px rgba(252, 76, 2, 0.5)' }}>
              <span className="text-4xl">📍</span>
              CONTATTI
            </h2>
            
            {/* Email */}
            <div className="mb-6 p-4 bg-slate-700/40 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <p className="text-cyan-400 font-semibold mb-1 flex items-center gap-2">
                <span>✉️</span> Email
              </p>
              <a href="mailto:mail@gianlucapiazza.com" 
                 className="text-white hover:text-cyan-300 transition-colors">
                mail@gianlucapiazza.com
              </a>
            </div>

            {/* Italia */}
            <div className="mb-6 p-4 bg-slate-700/40 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <p className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                <span>🇮🇹</span> Italia
              </p>
              <p className="text-white font-medium">Lab101 Srl</p>
              <p className="text-slate-300">via Conca 8</p>
              <p className="text-slate-300">36030 Villaverla - VI</p>
              <a href="tel:+393373030431" 
                 className="text-orange-400 hover:text-orange-300 transition-colors mt-2 inline-block">
                📞 +39 337 303431
              </a>
            </div>

            {/* USA */}
            <div className="p-4 bg-slate-700/40 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <p className="text-orange-400 font-semibold mb-2 flex items-center gap-2">
                <span>🇺🇸</span> USA
              </p>
              <p className="text-white font-medium">8Hz LLC</p>
              <p className="text-slate-300">4660 Arboretum Cir Unit 201</p>
              <p className="text-slate-300">Naples FL 34112</p>
              <a href="tel:+13055480002" 
                 className="text-cyan-400 hover:text-cyan-300 transition-colors mt-2 inline-block">
                📞 +1 (305) 548-0002
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="backdrop-blur-xl bg-slate-800/30 border border-orange-500/30 rounded-2xl p-8 shadow-2xl"
               style={{ boxShadow: '0 0 30px rgba(252, 76, 2, 0.15)' }}>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-3"
                style={{ textShadow: '0 0 15px rgba(0, 217, 255, 0.5)' }}>
              <span className="text-4xl">💬</span>
              RICHIEDI CONTATTO
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="tua@email.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Messaggio</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                  placeholder="Come possiamo aiutarti?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                style={{ boxShadow: '0 0 20px rgba(252, 76, 2, 0.4)' }}>
                INVIA RICHIESTA
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-500 text-sm">
          <p>© 2024 Gianluca Piazza. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
