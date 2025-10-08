import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Settings, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

// Cookie consent translations
const consentTranslations = {
  it: {
    title: "Questo sito utilizza i cookie",
    description: "Utilizziamo cookie per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e personalizzare i contenuti. Puoi scegliere quali cookie accettare.",
    acceptAll: "Accetta Tutti",
    rejectAll: "Rifiuta Tutti",
    customize: "Personalizza",
    savePreferences: "Salva Preferenze",
    close: "Chiudi",
    learnMore: "Maggiori informazioni",
    cookieSettings: "Impostazioni Cookie",
    categories: {
      necessary: {
        title: "Cookie Necessari",
        description: "Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati.",
        alwaysActive: "Sempre Attivi"
      },
      functional: {
        title: "Cookie Funzionali",
        description: "Permettono al sito di ricordare le tue scelte (come la lingua) e fornire funzionalità avanzate."
      },
      analytics: {
        title: "Cookie Analitici",
        description: "Ci aiutano a capire come i visitatori interagiscono con il sito, raccogliendo informazioni in forma anonima."
      },
      marketing: {
        title: "Cookie di Marketing",
        description: "Utilizzati per mostrare pubblicità pertinenti. Attualmente non utilizziamo cookie di marketing."
      }
    }
  },
  en: {
    title: "This site uses cookies",
    description: "We use cookies to improve your browsing experience, analyze site traffic and personalize content. You can choose which cookies to accept.",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    customize: "Customize",
    savePreferences: "Save Preferences",
    close: "Close",
    learnMore: "Learn more",
    cookieSettings: "Cookie Settings",
    categories: {
      necessary: {
        title: "Necessary Cookies",
        description: "These cookies are essential for the site to function and cannot be disabled.",
        alwaysActive: "Always Active"
      },
      functional: {
        title: "Functional Cookies",
        description: "Allow the site to remember your choices (such as language) and provide advanced features."
      },
      analytics: {
        title: "Analytics Cookies",
        description: "Help us understand how visitors interact with the site, collecting information anonymously."
      },
      marketing: {
        title: "Marketing Cookies",
        description: "Used to display relevant advertising. We currently do not use marketing cookies."
      }
    }
  }
}

// Cookie management functions
const CookieManager = {
  // Get consent from localStorage
  getConsent: () => {
    try {
      const consent = localStorage.getItem('cookie_consent')
      return consent ? JSON.parse(consent) : null
    } catch {
      return null
    }
  },
  
  // Save consent to localStorage
  setConsent: (preferences) => {
    const consent = {
      necessary: true, // Always true
      functional: preferences.functional,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookie_consent', JSON.stringify(consent))
    return consent
  },
  
  // Check if consent has been given
  hasConsent: () => {
    return CookieManager.getConsent() !== null
  },
  
  // Accept all cookies
  acceptAll: () => {
    return CookieManager.setConsent({
      functional: true,
      analytics: true,
      marketing: true
    })
  },
  
  // Reject all optional cookies
  rejectAll: () => {
    return CookieManager.setConsent({
      functional: false,
      analytics: false,
      marketing: false
    })
  },
  
  // Initialize Google Analytics if consent given
  initializeAnalytics: () => {
    const consent = CookieManager.getConsent()
    if (consent && consent.analytics) {
      // Initialize Google Analytics here
      // Example: gtag('config', 'GA_MEASUREMENT_ID')
      console.log('Analytics initialized')
    }
  }
}

// Main Cookie Consent Banner Component
export default function CookieConsent({ language = 'it' }) {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false
  })
  
  const t = consentTranslations[language]
  
  // Check if consent has been given on mount
  useEffect(() => {
    const hasConsent = CookieManager.hasConsent()
    if (!hasConsent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      // Initialize analytics if consent given
      CookieManager.initializeAnalytics()
    }
  }, [])
  
  // Load existing preferences
  useEffect(() => {
    const consent = CookieManager.getConsent()
    if (consent) {
      setPreferences(consent)
    }
  }, [])
  
  const handleAcceptAll = () => {
    CookieManager.acceptAll()
    CookieManager.initializeAnalytics()
    setShowBanner(false)
    setShowSettings(false)
  }
  
  const handleRejectAll = () => {
    CookieManager.rejectAll()
    setShowBanner(false)
    setShowSettings(false)
  }
  
  const handleSavePreferences = () => {
    CookieManager.setConsent(preferences)
    if (preferences.analytics) {
      CookieManager.initializeAnalytics()
    }
    setShowBanner(false)
    setShowSettings(false)
  }
  
  const handleOpenSettings = () => {
    setShowSettings(true)
  }
  
  const handleCloseSettings = () => {
    setShowSettings(false)
  }
  
  const togglePreference = (category) => {
    if (category === 'necessary') return // Cannot toggle necessary cookies
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }
  
  return (
    <>
      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <Card className="max-w-4xl mx-auto bg-white shadow-2xl border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Cookie className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={handleAcceptAll}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {t.acceptAll}
                      </Button>
                      <Button
                        onClick={handleRejectAll}
                        variant="outline"
                        className="border-gray-300"
                      >
                        {t.rejectAll}
                      </Button>
                      <Button
                        onClick={handleOpenSettings}
                        variant="outline"
                        className="border-blue-300 text-blue-600 hover:bg-blue-50"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        {t.customize}
                      </Button>
                    </div>
                    <a
                      href={language === 'it' ? '/privacy#cookies' : '/privacy#cookies'}
                      className="text-sm text-blue-600 hover:underline mt-3 inline-block"
                    >
                      {t.learnMore}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseSettings}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <Card className="bg-white">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Settings className="w-6 h-6 text-blue-600" />
                      <CardTitle>{t.cookieSettings}</CardTitle>
                    </div>
                    <button
                      onClick={handleCloseSettings}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <CardDescription className="mt-2">
                    {t.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  {/* Necessary Cookies */}
                  <div className="border-b pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t.categories.necessary.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t.categories.necessary.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {t.categories.necessary.alwaysActive}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Functional Cookies */}
                  <div className="border-b pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t.categories.functional.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t.categories.functional.description}
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('functional')}
                        className={`ml-4 w-12 h-6 rounded-full transition-colors ${
                          preferences.functional ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <motion.div
                          animate={{ x: preferences.functional ? 24 : 0 }}
                          className="w-6 h-6 bg-white rounded-full shadow-md"
                        />
                      </button>
                    </div>
                  </div>
                  
                  {/* Analytics Cookies */}
                  <div className="border-b pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t.categories.analytics.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t.categories.analytics.description}
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`ml-4 w-12 h-6 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <motion.div
                          animate={{ x: preferences.analytics ? 24 : 0 }}
                          className="w-6 h-6 bg-white rounded-full shadow-md"
                        />
                      </button>
                    </div>
                  </div>
                  
                  {/* Marketing Cookies */}
                  <div className="pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t.categories.marketing.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t.categories.marketing.description}
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`ml-4 w-12 h-6 rounded-full transition-colors ${
                          preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <motion.div
                          animate={{ x: preferences.marketing ? 24 : 0 }}
                          className="w-6 h-6 bg-white rounded-full shadow-md"
                        />
                      </button>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      onClick={handleSavePreferences}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      {t.savePreferences}
                    </Button>
                    <Button
                      onClick={handleAcceptAll}
                      variant="outline"
                      className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50"
                    >
                      {t.acceptAll}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Cookie Settings Button (for footer)
export function CookieSettingsButton({ language = 'it', className = '' }) {
  const [showSettings, setShowSettings] = useState(false)
  const t = consentTranslations[language]
  
  return (
    <>
      <button
        onClick={() => setShowSettings(true)}
        className={`flex items-center gap-2 text-sm hover:text-blue-600 transition-colors ${className}`}
      >
        <Cookie className="w-4 h-4" />
        {t.cookieSettings}
      </button>
      
      {showSettings && (
        <CookieConsent language={language} />
      )}
    </>
  )
}

// Export cookie manager for use in other components
export { CookieManager }
