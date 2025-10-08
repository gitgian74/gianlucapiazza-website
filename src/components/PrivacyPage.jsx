import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { privacyContent } from '../privacy-content'

export default function PrivacyPage({ language = 'it' }) {
  const content = privacyContent[language].privacy
  
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
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-blue-100 text-lg">
              {content.lastUpdated}
            </p>
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
                <FileText className="w-6 h-6 text-blue-600" />
                {content.intro.title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {content.intro.content}
              </p>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Data Controller */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.dataController.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="prose prose-blue max-w-none">
                <div dangerouslySetInnerHTML={{ __html: content.dataController.content.replace(/\n/g, '<br/>') }} />
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Data Collection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-blue-600" />
            {content.dataCollection.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{content.dataCollection.content}</p>
              <div className="space-y-6">
                {content.dataCollection.categories.map((category, index) => (
                  <div key={index} className="border-l-4 border-l-blue-200 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {category.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Data Use */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.dataUse.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{content.dataUse.content}</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-blue-200 px-4 py-3 text-left font-semibold text-gray-900">
                        {language === 'it' ? 'Finalità' : 'Purpose'}
                      </th>
                      <th className="border border-blue-200 px-4 py-3 text-left font-semibold text-gray-900">
                        {language === 'it' ? 'Descrizione' : 'Description'}
                      </th>
                      <th className="border border-blue-200 px-4 py-3 text-left font-semibold text-gray-900">
                        {language === 'it' ? 'Base Giuridica' : 'Legal Basis'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.dataUse.purposes.map((purpose, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                          {purpose.purpose}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">
                          {purpose.description}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">
                          {purpose.legal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Legal Basis */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.legalBasis.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">{content.legalBasis.content}</p>
              <ul className="space-y-3">
                {content.legalBasis.bases.map((basis, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: basis }} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Data Sharing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.dataSharing.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{content.dataSharing.content}</p>
              <div className="space-y-4">
                {content.dataSharing.recipients.map((recipient, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{recipient.category}</h3>
                    <p className="text-gray-700 mb-2">{recipient.description}</p>
                    <p className="text-sm text-blue-600">
                      <strong>{language === 'it' ? 'Garanzie:' : 'Safeguards:'}</strong> {recipient.safeguards}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Data Retention */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            {content.dataRetention.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">{content.dataRetention.content}</p>
              <ul className="space-y-2">
                {content.dataRetention.periods.map((period, index) => (
                  <li key={index} className="text-gray-700" dangerouslySetInnerHTML={{ __html: period }} />
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* User Rights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.userRights.title}
          </h2>
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">{content.userRights.content}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {content.userRights.rights.map((right, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">{right.right}</h3>
                    <p className="text-sm text-gray-700">{right.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-900 text-white p-4 rounded-lg">
                <p dangerouslySetInnerHTML={{ __html: content.userRights.exercise }} />
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Security */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-blue-600" />
            {content.security.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">{content.security.content}</p>
              <ul className="space-y-2">
                {content.security.measures.map((measure, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{measure}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* International Transfers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.international.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">{content.international.content}</p>
              <ul className="space-y-2">
                {content.international.safeguards.map((safeguard, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{safeguard}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Children */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.children.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">{content.children.content}</p>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Changes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.changes.title}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">{content.changes.content}</p>
            </CardContent>
          </Card>
        </motion.section>
        
        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-600" />
            {content.contact.title}
          </h2>
          <Card className="border-2 border-blue-600">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">{content.contact.content}</p>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 mb-2">{content.contact.details.name}</p>
                <p className="text-blue-600 mb-2">
                  <strong>Email:</strong> {content.contact.details.email}
                </p>
                <p className="text-gray-700 text-sm">{content.contact.details.subject}</p>
              </div>
              <p className="text-sm text-gray-600 italic">{content.contact.authority}</p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
