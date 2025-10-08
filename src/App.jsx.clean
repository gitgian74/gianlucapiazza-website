import { useState, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Globe, 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb, 
  Mail, 
  Linkedin, 
  ExternalLink,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Award,
  MapPin,
  Languages
} from 'lucide-react'
import './App.css'
import { translations } from './translations'
import { privacyContent } from './privacy-content'

// Language Context
const LanguageContext = createContext()

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('it')
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'it' ? 'en' : 'it')
  }
  
  const t = translations[language]
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()
  
  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.insights, path: '/insights' },
    { name: t.nav.contact, path: '/contact' }
  ]
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-900">
              Gianluca Piazza
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Languages size={18} />
              {language === 'it' ? 'EN' : 'IT'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <Languages size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

// Footer Component
function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gianluca Piazza</h3>
            <p className="text-gray-400">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">{t.nav.projects}</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">{t.nav.insights}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">{language === 'it' ? 'Privacy' : 'Privacy'}</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">{language === 'it' ? 'Cookie' : 'Cookies'}</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">{language === 'it' ? 'Termini' : 'Terms'}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contacts}</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Monteviale, Veneto, Italy
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
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gianluca Piazza. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}

// Home Page
function HomePage() {
  const { t } = useLanguage()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t.home.title}
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-100">
              {t.home.subtitle}
            </p>
            <p className="text-xl md:text-2xl mb-8 text-blue-200 italic">
              "{t.home.tagline}"
            </p>
            <p className="text-lg mb-8 text-blue-100 max-w-3xl mx-auto">
              {t.home.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  {t.home.discoverServices}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  {t.home.contactMe}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">{t.home.stats.experience}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">3</div>
              <div className="text-gray-600">{t.home.stats.markets}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">{t.home.stats.partnerships}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">{t.home.stats.ceo}</div>
              <div className="text-gray-600">{t.home.stats.ceoCompany}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.home.competenceTitle}</h2>
            <p className="text-xl text-gray-600">{t.home.competenceSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{t.home.services.internationalization.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t.home.services.internationalization.description}
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{t.home.services.businessDev.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t.home.services.businessDev.description}
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{t.home.services.partnership.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t.home.services.partnership.description}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                {t.home.seeAllServices}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t.home.ctaTitle}</h2>
          <p className="text-xl mb-8 text-blue-100">
            {t.home.ctaText}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              {t.home.requestConsultation}
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
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">{t.about.title}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {t.about.intro1}
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.expTitle}</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.about.exp1}
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.about.exp2}
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.projectsTitle}</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.about.projects}
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.backgroundTitle}</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.about.background}
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.about.tech}
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.philosophyTitle}</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-xl italic text-blue-900">
              "{t.about.quote}"
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.about.philosophy}
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{t.about.skillsTitle}</h2>
          
          <div className="grid md:grid-cols-2 gap-4 my-8">
            {['Leadership', 'Entrepreneurship', 'Project Management', 'Business Strategy', 'Negotiation'].map((skill) => (
              <div key={skill} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="text-blue-600" size={24} />
                <span className="font-semibold text-gray-900">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button size="lg">
              {t.about.workTogether}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Services Page - Simplified for length
function ServicesPage() {
  const { t, language } = useLanguage()
  
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: language === 'it' ? "Consulenza Internazionalizzazione" : "Internationalization Consulting",
      description: language === 'it' 
        ? "Supporto strategico completo per l'espansione internazionale della tua azienda. Dall'analisi dei mercati target alla definizione della strategia di ingresso, fino all'implementazione operativa e al consolidamento della presenza estera."
        : "Complete strategic support for your company's international expansion. From target market analysis to entry strategy definition, through operational implementation and consolidation of foreign presence.",
      features: language === 'it'
        ? [
            "Analisi di mercato e opportunità",
            "Strategia di ingresso personalizzata",
            "Identificazione partner locali",
            "Supporto operativo e logistico",
            "Gestione aspetti legali e fiscali"
          ]
        : [
            "Market analysis and opportunities",
            "Customized entry strategy",
            "Local partner identification",
            "Operational and logistical support",
            "Legal and fiscal aspects management"
          ],
      markets: language === 'it'
        ? "Stati Uniti (Miami, New York, San Francisco), Europa, Mercati emergenti"
        : "United States (Miami, New York, San Francisco), Europe, Emerging markets"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Business Development",
      description: language === 'it'
        ? "Sviluppo di nuove opportunità di business, identificazione di canali distributivi e creazione di partnership strategiche per accelerare la crescita aziendale."
        : "Development of new business opportunities, identification of distribution channels and creation of strategic partnerships to accelerate company growth.",
      features: language === 'it'
        ? [
            "Identificazione opportunità di crescita",
            "Sviluppo rete commerciale",
            "Analisi competitor e posizionamento",
            "Strategie di go-to-market",
            "KPI e monitoraggio performance"
          ]
        : [
            "Growth opportunities identification",
            "Commercial network development",
            "Competitor analysis and positioning",
            "Go-to-market strategies",
            "KPIs and performance monitoring"
          ]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: language === 'it' ? "Partnership e Negoziazione" : "Partnership & Negotiation",
      description: language === 'it'
        ? "Negoziazione e gestione di partnership strategiche con grandi catene retail, distributori e player di mercato. Esperienza diretta con network come Walmart, Starbucks, Target, Publix."
        : "Negotiation and management of strategic partnerships with major retail chains, distributors and market players. Direct experience with networks such as Walmart, Starbucks, Target, Publix.",
      features: language === 'it'
        ? [
            "Identificazione partner strategici",
            "Negoziazione contratti",
            "Gestione relazioni commerciali",
            "Ottimizzazione termini di partnership",
            "Monitoraggio performance partnership"
          ]
        : [
            "Strategic partners identification",
            "Contract negotiation",
            "Commercial relations management",
            "Partnership terms optimization",
            "Partnership performance monitoring"
          ]
    }
  ]
  
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.services.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-base text-gray-700">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">{t.services.whatIncludes}</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.markets && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-semibold text-blue-900 mb-2">{t.services.markets}</p>
                      <p className="text-gray-700">{service.markets}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">{t.services.interested}</h2>
          <p className="text-xl mb-8 text-blue-100">
            {t.services.interestedText}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              {t.home.requestConsultation}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Projects Page - Simplified
function ProjectsPage() {
  const { t, language } = useLanguage()
  
  const projects = [
    {
      title: language === 'it' 
        ? "Birrificio Angelo Poretti × Starbucks Reserve"
        : "Birrificio Angelo Poretti × Starbucks Reserve",
      client: "Vine N Ale Distributors / Birrificio Angelo Poretti",
      market: "USA - Miami",
      objective: language === 'it'
        ? "Introduzione prodotti premium italiani nel circuito Starbucks Reserve"
        : "Introduction of premium Italian products in Starbucks Reserve circuit",
      results: language === 'it'
        ? [
            "Partnership strategica con Starbucks Reserve",
            "Introduzione prodotti iconici del Birrificio Angelo Poretti",
            "Espansione presenza brand italiano nel mercato premium USA",
            "Creazione modello replicabile per altri brand"
          ]
        : [
            "Strategic partnership with Starbucks Reserve",
            "Introduction of iconic Birrificio Angelo Poretti products",
            "Expansion of Italian brand presence in US premium market",
            "Creation of replicable model for other brands"
          ],
      skills: language === 'it'
        ? ["Negoziazione partnership", "Posizionamento premium", "Gestione relazioni strategiche"]
        : ["Partnership negotiation", "Premium positioning", "Strategic relations management"]
    },
    {
      title: language === 'it'
        ? "Acque Minerali d'Italia × Niagara Waters"
        : "Acque Minerali d'Italia × Niagara Waters",
      client: "Acque Minerali d'Italia",
      partner: "Niagara Waters",
      market: language === 'it' ? "USA - Network nazionale" : "USA - National network",
      objective: language === 'it'
        ? "Distribuzione eccellenza italiana nelle principali catene retail USA"
        : "Distribution of Italian excellence in major US retail chains",
      results: language === 'it'
        ? [
            "Accordo distributivo con Niagara Waters",
            "Presenza in Walmart, Publix, Target, Sedano's, Fresh Market",
            "Espansione nazionale del brand",
            "Consolidamento presenza mercato USA"
          ]
        : [
            "Distribution agreement with Niagara Waters",
            "Presence in Walmart, Publix, Target, Sedano's, Fresh Market",
            "National brand expansion",
            "Consolidation of US market presence"
          ],
      skills: language === 'it'
        ? ["Partnership strategiche", "Negoziazione con grandi catene", "Supply chain internazionale"]
        : ["Strategic partnerships", "Negotiation with major chains", "International supply chain"]
    }
  ]
  
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.projects.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">{project.title}</CardTitle>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase size={16} />
                    <span><strong>{t.projects.client}</strong> {project.client}</span>
                  </div>
                  {project.partner && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span><strong>{t.projects.partner}</strong> {project.partner}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span><strong>{t.projects.market}</strong> {project.market}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t.projects.objective}</h4>
                    <p className="text-gray-700">{project.objective}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">{t.projects.results}</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">{t.projects.skills}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
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
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            {t.projects.discuss}
          </p>
          <Link to="/contact">
            <Button size="lg">
              {t.home.contactMe}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Insights Page - Simplified
function InsightsPage() {
  const { t, language } = useLanguage()
  
  const insights = [
    {
      title: language === 'it'
        ? "L'Internazionalizzazione nell'Era Post-COVID"
        : "Internationalization in the Post-COVID Era",
      excerpt: language === 'it'
        ? "Come le aziende italiane possono sfruttare le nuove opportunità nei mercati globali dopo la pandemia."
        : "How Italian companies can leverage new opportunities in global markets after the pandemic.",
      category: language === 'it' ? "Strategia" : "Strategy",
      readTime: "8 min"
    },
    {
      title: language === 'it'
        ? "USA: Opportunità nei Mercati di Miami, New York e San Francisco"
        : "USA: Opportunities in Miami, New York and San Francisco Markets",
      excerpt: language === 'it'
        ? "Guida pratica ai tre principali hub per le aziende italiane che vogliono espandersi negli Stati Uniti."
        : "Practical guide to the three main hubs for Italian companies looking to expand in the United States.",
      category: language === 'it' ? "Mercati USA" : "US Markets",
      readTime: "12 min"
    }
  ]
  
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.insights.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.insights.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-sm text-gray-500">{insight.readTime}</span>
                </div>
                <CardTitle className="text-xl">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                <Button variant="link" className="p-0 text-blue-600">
                  {t.insights.readMore}
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.insights.stayUpdated}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.insights.stayUpdatedText}
          </p>
          <a 
            href="https://www.linkedin.com/in/gianlucapiazza/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg">
              <Linkedin className="mr-2" size={20} />
              {t.insights.followLinkedIn}
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

// Contact Page
function ContactPage() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const message = language === 'it'
      ? 'Grazie per il tuo messaggio! Ti contatterò al più presto.'
      : 'Thank you for your message! I will contact you as soon as possible.'
    alert(message)
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const serviceOptions = language === 'it'
    ? [
        'Consulenza Internazionalizzazione',
        'Business Development',
        'Partnership e Negoziazione',
        'Strategie di Mercato USA',
        'Innovazione e Tecnologia',
        'Altro'
      ]
    : [
        'Internationalization Consulting',
        'Business Development',
        'Partnership and Negotiation',
        'US Market Strategies',
        'Innovation and Technology',
        'Other'
      ]
  
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t.contact.formTitle}</CardTitle>
              <CardDescription>
                {t.contact.formSubtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t.contact.name} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'it' ? 'Il tuo nome' : 'Your name'}
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">{t.contact.company}</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={language === 'it' ? 'Nome della tua azienda' : 'Your company name'}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">{t.contact.email} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={language === 'it' ? 'tua@email.com' : 'your@email.com'}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">{t.contact.phone}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+39 123 456 7890"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service">{t.contact.service}</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{t.contact.selectService}</option>
                    {serviceOptions.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">{t.contact.message} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={language === 'it' 
                      ? 'Descrivi brevemente il tuo progetto o le tue esigenze...'
                      : 'Briefly describe your project or needs...'}
                    rows={5}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  {t.contact.send}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.contact.infoTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.contact.location}</h4>
                    <p className="text-gray-600">Monteviale, Veneto, Italy</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Linkedin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/gianlucapiazza/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      linkedin.com/in/gianlucapiazza
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <ExternalLink className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Lab101 Srl</h4>
                    <a 
                      href="https://www.lab101.it" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      www.lab101.it
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{t.contact.transformTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6">
                  {t.contact.transformText}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>{t.contact.features.consultation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>{t.contact.features.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>{t.contact.features.network}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>{t.contact.features.results}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Privacy Pages Component
function PrivacyPage() {
  const { language } = useLanguage()
  const content = privacyContent[language].privacy
  
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{content.lastUpdated}</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {content.intro}
          </p>
          
          {content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
              {section.items && (
                <ul className="space-y-2 mb-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 ml-6">
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="text-gray-600 italic mt-4">{section.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CookiesPage() {
  const { language } = useLanguage()
  const content = privacyContent[language].cookies
  
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{content.lastUpdated}</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {content.intro}
          </p>
          
          {content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
              {section.items && (
                <ul className="space-y-2 mb-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 ml-6">
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TermsPage() {
  const { language } = useLanguage()
  const content = privacyContent[language].terms
  
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{content.lastUpdated}</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {content.intro}
          </p>
          
          {content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
              {section.items && (
                <ul className="space-y-2 mb-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 ml-6">
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main App Component
function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
