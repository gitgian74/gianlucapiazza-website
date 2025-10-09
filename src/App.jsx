import { createContext, useContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Globe, 
  TrendingUp, 
  Users, 
  Mail, 
  Phone,
  Linkedin, 
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Languages,
  CheckCircle,
  Briefcase,
  Award,
  Target,
  Building2
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import Hero3D from './components/Hero3D'
import { translations } from './translations'
import './App.css'

// Language Context
const LanguageContext = createContext()

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('it')
  const t = translations[language]
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

function useLanguage() {
  return useContext(LanguageContext)
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/projects', label: t.nav.projects },
    { path: '/contact', label: t.nav.contact }
  ]
  
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-900">
            Gianluca Piazza
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-blue-900 transition-colors ${
                  location.pathname === item.path ? 'text-blue-900 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
            >
              <Languages size={18} />
              {language === 'it' ? 'EN' : 'IT'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'it' ? 'en' : 'it')
                setIsOpen(false)
              }}
              className="mt-2 flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-900"
            >
              <Languages size={18} />
              {language === 'it' ? 'EN' : 'IT'}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

// Home Page
function HomePage() {
  const { language, t } = useLanguage()
  
  return (
    <div>
      <Hero3D language={language} translations={translations} />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '18+', label: t.home.stats.experience },
              { value: '6', label: t.home.stats.markets },
              { value: '50+', label: t.home.stats.partnerships },
              { value: 'CEO', label: t.home.stats.ceo }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-5xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.home.servicesTitle}</h2>
            <p className="text-xl text-gray-600">{t.home.servicesSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: t.services.service1.title,
                description: t.services.service1.description.substring(0, 100) + '...'
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
                title: t.services.service2.title,
                description: t.services.service2.description.substring(0, 100) + '...'
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: t.services.service3.title,
                description: t.services.service3.description.substring(0, 100) + '...'
              },
              {
                icon: <Briefcase className="w-12 h-12 text-blue-600" />,
                title: t.services.service4.title,
                description: t.services.service4.description.substring(0, 100) + '...'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t.home.ctaTitle}</h2>
          <p className="text-xl mb-8">{t.home.ctaText}</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              {t.home.ctaButton}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// About Page
function AboutPage() {
  const { t } = useLanguage()
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-8">{t.about.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {t.about.intro}
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.experienceTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t.about.experience1}</p>
            <p className="text-gray-700 leading-relaxed mb-8">{t.about.experience2}</p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.projectsTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{t.about.projects}</p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.backgroundTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{t.about.background}</p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.philosophyTitle}</h2>
            <blockquote className="border-l-4 border-blue-600 pl-6 italic text-2xl text-gray-800 mb-6">
              "{t.about.philosophyQuote}"
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-8">{t.about.philosophy}</p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.skillsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {t.about.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 bg-blue-50 p-4 rounded-lg">
                  <Award className="text-blue-600" size={24} />
                  <span className="font-semibold text-gray-900">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Services Page
function ServicesPage() {
  const { t } = useLanguage()
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.services.title}</h1>
          <p className="text-xl text-gray-700 mb-16">{t.services.intro}</p>
          
          <div className="space-y-12">
            {/* Service 1 */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center gap-4">
                  <Globe className="w-12 h-12 text-blue-600" />
                  <CardTitle className="text-2xl">{t.services.service1.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">{t.services.service1.description}</p>
                
                <h4 className="font-semibold text-lg mb-3">{t.services.service1.includes}</h4>
                <ul className="space-y-2 mb-6">
                  {t.services.service1.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{t.services.service1.markets}</h4>
                  <p>{t.services.service1.marketsList}</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Service 2 */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-green-50">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-12 h-12 text-green-600" />
                  <CardTitle className="text-2xl">{t.services.service2.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">{t.services.service2.description}</p>
                
                <h4 className="font-semibold text-lg mb-3">{t.services.service1.includes}</h4>
                <ul className="space-y-2">
                  {t.services.service2.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Service 3 */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center gap-4">
                  <Users className="w-12 h-12 text-purple-600" />
                  <CardTitle className="text-2xl">{t.services.service3.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">{t.services.service3.description}</p>
                
                <h4 className="font-semibold text-lg mb-3">{t.services.service1.includes}</h4>
                <ul className="space-y-2">
                  {t.services.service3.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Service 4 */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-amber-50">
                <div className="flex items-center gap-4">
                  <Briefcase className="w-12 h-12 text-amber-600" />
                  <CardTitle className="text-2xl">{t.services.service4.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">{t.services.service4.description}</p>
                
                <h4 className="font-semibold text-lg mb-3">{t.services.service1.includes}</h4>
                <ul className="space-y-2">
                  {t.services.service4.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">{t.services.ctaTitle}</h2>
            <p className="text-xl mb-8">{t.services.ctaText}</p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                {t.services.ctaButton}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Projects Page
function ProjectsPage() {
  const { t } = useLanguage()
  
  const projectColors = [
    'from-blue-600 to-blue-700',
    'from-blue-500 to-blue-600',
    'from-blue-700 to-blue-800',
    'from-blue-500 to-cyan-600',
    'from-indigo-600 to-blue-600',
    'from-cyan-600 to-blue-600',
    'from-blue-800 to-indigo-700'
  ]
  
  const projects = [
    t.projects.project1,
    t.projects.project2,
    t.projects.project3,
    t.projects.project4,
    t.projects.project5,
    t.projects.project6,
    t.projects.project7
  ]
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.projects.title}</h1>
          <p className="text-xl text-gray-700 mb-16">{t.projects.subtitle}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${projectColors[idx]} text-white`}>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold text-gray-700">{project.client}</span>
                      <p className="text-gray-600">{project.clientName}</p>
                    </div>
                    
                    {project.partner && (
                      <div>
                        <span className="font-semibold text-gray-700">{project.partner}</span>
                        <p className="text-gray-600">{project.partnerName}</p>
                      </div>
                    )}
                    
                    {project.technology && (
                      <div>
                        <span className="font-semibold text-gray-700">{project.technology}</span>
                        <p className="text-gray-600">{project.technologyName}</p>
                      </div>
                    )}
                    
                    <div>
                      <span className="font-semibold text-gray-700">{project.market}</span>
                      <p className="text-gray-600 flex items-center gap-2">
                        <MapPin size={16} />
                        {project.marketName}
                      </p>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-gray-700">{project.objective}</span>
                      <p className="text-gray-600">{project.objectiveText}</p>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-gray-700">{project.results}</span>
                      <ul className="mt-2 space-y-2">
                        {project.resultsList.map((result, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-gray-700">{project.skills}</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.skillsList.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">{t.projects.ctaText}</h2>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                {t.projects.ctaButton}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


// Contact Page
function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Messaggio inviato! Ti contatterò presto.')
  }
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-700 mb-16">{t.contact.subtitle}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Invia un Messaggio</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">{t.contact.form.company}</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Mail className="mr-2" size={18} />
                    {t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t.contact.info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-blue-600 mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a 
                        href="mailto:mail@gianlucapiazza.com"
                        className="text-blue-600 hover:underline"
                      >
                        {t.contact.info.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-blue-600 mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Italia</p>
                      <a 
                        href="tel:+393373303431"
                        className="text-blue-600 hover:underline"
                      >
                        {t.contact.info.phoneIT}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-blue-600 mt-1" size={24} />
                    <div>
                      <p className="font-semibold">USA</p>
                      <a 
                        href="tel:+13055480002"
                        className="text-blue-600 hover:underline"
                      >
                        {t.contact.info.phoneUS}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-blue-600 mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Italia</p>
                      <p className="text-gray-600">{t.contact.info.addressIT}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-blue-600 mt-1" size={24} />
                    <div>
                      <p className="font-semibold">USA</p>
                      <p className="text-gray-600">{t.contact.info.addressUS}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Linkedin className="text-blue-600 mt-1" size={24} />
                    <div>
                      <p className="font-semibold">{t.contact.info.linkedin}</p>
                      <a 
                        href="https://www.linkedin.com/in/gianlucapiazza/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        linkedin.com/in/gianlucapiazza
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building2 className="text-blue-600 mt-1" size={24} />
                    <div>
                      <p className="font-semibold">{t.contact.info.website}</p>
                      <a 
                        href="https://www.lab101.it" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        www.lab101.it
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Collaboriamo</h3>
                  <p className="mb-6">
                    Sono sempre interessato a nuovi progetti di internazionalizzazione e partnership strategiche.
                  </p>
                  <p className="text-blue-100">
                    Contattami per discutere come posso aiutare la tua azienda a crescere nei mercati globali.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Footer Component
function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Gianluca Piazza</h3>
            <p className="text-sm">{t.footer.about}</p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:mail@gianlucapiazza.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  mail@gianlucapiazza.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+393373303431"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  +39 337 303431 (IT)
                </a>
              </li>
              <li>
                <a 
                  href="tel:+13055480002"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  +1 (305) 548-0002 (US)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Villaverla - VI, Italy
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/gianlucapiazza/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.lab101.it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} />
                  Lab101 Srl
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">{t.nav.projects}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gianluca Piazza. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
