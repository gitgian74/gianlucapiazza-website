import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission - can be connected to email service later
    alert('Grazie! Ti ricontatteremo presto.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100 flex items-center justify-center p-4">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full bg-white/60 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50"
        style={{
          boxShadow: '0 0 60px rgba(0, 217, 255, 0.3), 0 20px 80px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-6xl md:text-8xl font-black mb-4"
            style={{
              color: '#00D9FF',
              textShadow: `
                0 0 20px rgba(0, 217, 255, 0.6),
                0 0 40px rgba(0, 217, 255, 0.4),
                0 0 60px rgba(0, 217, 255, 0.2)
              `
            }}
          >
            Gianluca Piazza
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
            Consulente Internazionalizzazione
          </p>
          <p className="text-xl text-gray-600">
            Business Developer | Entrepreneur
          </p>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-8 py-3 bg-gradient-to-r from-[#FC4C02] to-[#FF6B35] text-white text-lg font-bold rounded-full shadow-lg">
            Sito in Costruzione
          </span>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Italy */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#00D9FF]" />
              Italia
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Lab101 Srl</p>
              <p>via Conca 8</p>
              <p>36030 Villaverla - VI</p>
              <div className="flex items-center gap-2 mt-3">
                <Phone className="w-4 h-4 text-[#FC4C02]" />
                <a href="tel:+393373303431" className="hover:text-[#00D9FF] transition-colors">
                  +39 337 303431
                </a>
              </div>
            </div>
          </div>

          {/* USA */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#00D9FF]" />
              USA
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">8Hz LLC</p>
              <p>4660 Arboretum Cir Unit 201</p>
              <p>Naples FL 34112</p>
              <div className="flex items-center gap-2 mt-3">
                <Phone className="w-4 h-4 text-[#FC4C02]" />
                <a href="tel:+13055480002" className="hover:text-[#00D9FF] transition-colors">
                  +1 (305) 548-0002
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-xl">
            <Mail className="w-6 h-6 text-[#00D9FF]" />
            <a 
              href="mailto:mail@gianlucapiazza.com" 
              className="text-gray-900 hover:text-[#00D9FF] transition-colors font-semibold"
            >
              mail@gianlucapiazza.com
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Richiedi di essere ricontattato
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nome e Cognome"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-[#00D9FF] focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-[#00D9FF] focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Messaggio"
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-[#00D9FF] focus:outline-none transition-colors text-gray-900 placeholder-gray-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#FC4C02] to-[#FF6B35] text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Invia Richiesta
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App

