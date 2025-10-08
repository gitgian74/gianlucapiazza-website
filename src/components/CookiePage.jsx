import { motion } from 'framer-motion'
import { Cookie, Settings, Info, ExternalLink, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { privacyContent } from '../privacy-content'
import { CookieSettingsButton } from './CookieConsent'

export default function CookiePage({ language = 'it' }) {
  const content = privacyContent[language].cookies
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              {content.lastUpdated}
            </p>
            <CookieSettingsButton 
              language={language} 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="border-l-4 border-l-blue-600">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-600" />
                {content.intro.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {content.intro.content}
              </p>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Types of Cookies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.types.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{content.types.content}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {content.types.categories.map((category, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-700">{category.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Cookie Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.cookieCategories.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{content.cookieCategories.content}</p>
              <div className="space-y-6">
                {content.cookieCategories.categories.map((category, index) => (
                  <div 
                    key={index} 
                    className={`border-2 rounded-lg p-6 ${
                      category.required 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-blue-200 bg-blue-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.name}
                      </h3>
                      {category.required ? (
                        <span className="text-xs font-medium text-green-700 bg-green-200 px-3 py-1 rounded-full">
                          {language === 'it' ? 'Richiesti' : 'Required'}
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-blue-700 bg-blue-200 px-3 py-1 rounded-full">
                          {language === 'it' ? 'Opzionali' : 'Optional'}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    {category.examples.length > 0 && (
                      <>
                        <p className="text-sm font-semibold text-gray-900 mb-2">
                          {language === 'it' ? 'Esempi:' : 'Examples:'}
                        </p>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                          {category.examples.map((example, i) => (
                            <li key={i} className="text-sm text-gray-700">{example}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        <strong>{language === 'it' ? 'Durata:' : 'Duration:'}</strong> {category.duration}
                      </span>
                      {category.thirdParty && (
                        <span className="text-gray-600">
                          <strong>{language === 'it' ? 'Fornitore:' : 'Provider:'}</strong> {category.thirdParty}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Specific Cookies Table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.specificCookies.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{content.specificCookies.content}</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-blue-200 px-4 py-3 text-left font-semibold text-gray-900">
                        {language === 'it' ? 'Nome' : 'Name'}
                      </th>
                      <th className="border border-blue-200 px-4 py-3 text-left font-semibold text-gray-900">
                        {language === 'it' ? 'Scopo' : 'Purpose'}
                      </th>
                      <th className="border border-blue-200 px-4 py-3 text-left font-semibold text-gray-900">
                        {language === 'it' ? 'Tipo' : 'Type'}
                      </th>
                      <th className="border border-blue-200 px-4 py-3 text-left font-semibold text-gray-900">
                        {language === 'it' ? 'Durata' : 'Duration'}
                      </th>
                      <th className="border border-blue-200 px-4 py-3 text-left font-semibold text-gray-900">
                        {language === 'it' ? 'Fornitore' : 'Provider'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.specificCookies.table.map((cookie, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-mono text-sm text-gray-900">
                          {cookie.name}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                          {cookie.purpose}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cookie.type === 'Necessario' || cookie.type === 'Necessary'
                              ? 'bg-green-100 text-green-800'
                              : cookie.type === 'Funzionale' || cookie.type === 'Functional'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                          {cookie.duration}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                          {cookie.provider}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Cookie Management */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-blue-600" />
            {content.management.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{content.management.content}</p>
              <div className="space-y-6">
                {content.management.methods.map((method, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{method.method}</h3>
                    <p className="text-gray-700">{method.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Browser Links */}
              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {language === 'it' ? 'Guide per Browser:' : 'Browser Guides:'}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {content.management.browserLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: content.management.warning }} />
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Third-Party Cookies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.thirdParty.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{content.thirdParty.content}</p>
              <div className="space-y-4">
                {content.thirdParty.services.map((service, index) => (
                  <div key={index} className="border-2 border-blue-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>{language === 'it' ? 'Scopo:' : 'Purpose:'}</strong> {service.purpose}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={service.privacy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <Shield className="w-4 h-4" />
                        {language === 'it' ? 'Privacy Policy' : 'Privacy Policy'}
                      </a>
                      <a
                        href={service.optout}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {language === 'it' ? 'Opt-out' : 'Opt-out'}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 italic">{content.thirdParty.note}</p>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Updates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.updates.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">{content.updates.content}</p>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.contact.title}
          </h2>
          <Card className="border-2 border-blue-600">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">{content.contact.content}</p>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <a 
                  href={`mailto:${content.contact.email}`}
                  className="text-xl font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {content.contact.email}
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* CTA to manage cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center bg-gradient-to-r from-blue-900 to-blue-700 text-white p-12 rounded-xl"
        >
          <Cookie className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            {language === 'it' 
              ? 'Gestisci le Tue Preferenze sui Cookie' 
              : 'Manage Your Cookie Preferences'}
          </h3>
          <p className="text-blue-100 mb-6">
            {language === 'it'
              ? 'Puoi modificare le tue preferenze sui cookie in qualsiasi momento.'
              : 'You can change your cookie preferences at any time.'}
          </p>
          <CookieSettingsButton 
            language={language}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          />
        </motion.div>
      </div>
    </div>
  )
}
