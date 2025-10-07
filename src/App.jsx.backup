import { useState } from 'react'
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
  MapPin
} from 'lucide-react'
import './App.css'

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Chi Sono', path: '/about' },
    { name: 'Servizi', path: '/services' },
    { name: 'Progetti', path: '/projects' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contatti', path: '/contact' }
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
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gianluca Piazza</h3>
            <p className="text-gray-400">
              Consulente Internazionalizzazione | Business Developer | Entrepreneur
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Servizi</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Progetti</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
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
          <p>&copy; {new Date().getFullYear()} Gianluca Piazza. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

// Home Page
function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Gianluca Piazza
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-100">
              Consulente Internazionalizzazione | Business Developer | Entrepreneur
            </p>
            <p className="text-xl md:text-2xl mb-8 text-blue-200 italic">
              "Trasformo le sfide dell'internazionalizzazione in opportunità di successo globale"
            </p>
            <p className="text-lg mb-8 text-blue-100 max-w-3xl mx-auto">
              Con oltre 15 anni di esperienza nei mercati internazionali, supporto aziende italiane ed europee 
              nella loro espansione globale, con particolare focus sui mercati USA (Miami, New York, San Francisco).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Scopri i Servizi
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contattami
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
              <div className="text-gray-600">Anni di Esperienza</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">3</div>
              <div className="text-gray-600">Mercati USA Principali</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Partnership Strategiche</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">CEO</div>
              <div className="text-gray-600">Lab101 Srl</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Aree di Competenza</h2>
            <p className="text-xl text-gray-600">Servizi specializzati per la crescita internazionale</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Internazionalizzazione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategia completa per l'espansione nei mercati globali, con focus sui mercati USA.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Business Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sviluppo di nuove opportunità e partnership strategiche per accelerare la crescita.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Partnership & Negoziazione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Esperienza con grandi catene retail: Walmart, Starbucks, Target, Publix.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                Vedi Tutti i Servizi
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto a Espandere il Tuo Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Trasforma la tua visione globale in realtà. Contattami per una consulenza personalizzata.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Richiedi una Consulenza
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
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Chi Sono</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Mi chiamo Gianluca Piazza e sono un imprenditore, leader esecutivo e business developer con una carriera 
            che abbraccia continenti e industrie. La mia missione è accompagnare le aziende nel loro percorso di 
            internazionalizzazione, trasformando visioni ambiziose in realtà concrete sui mercati globali.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Esperienza Internazionale</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Attualmente ricopro il ruolo di <strong>CEO di Lab101 Srl</strong>, un'innovativa azienda italiana specializzata 
            in soluzioni smart, dove da oltre due anni guido la crescita strategica e operativa, posizionando l'azienda come 
            leader di mercato. Sono inoltre <strong>co-fondatore di WeDeal Srl</strong>, un'impresa con sede a Milano dove, 
            da oltre quattro anni, gestisco e sviluppo multiple iniziative imprenditoriali.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            La mia esperienza internazionale si è consolidata in <strong>15 anni come Senior Business Developer</strong> presso 
            GP Business and Market Strategy, dove ho coordinato iniziative e progetti di investimento nei principali mercati 
            statunitensi: <strong>Miami, New York e San Francisco</strong>. Durante il mio periodo negli Stati Uniti, ho mantenuto 
            un'attenzione costante ai progressi tecnologici, integrando le ultime innovazioni nelle strategie aziendali e 
            anticipando i trend di settore.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Progetti di Rilievo</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Ho co-fondato e ricoperto il ruolo di <strong>Executive Director di Vine N Ale Distributors</strong> a Miami, 
            svolgendo un ruolo chiave nell'espansione della presenza sul mercato. Ho negoziato partnership con le principali 
            catene retail, introducendo prodotti iconici come quelli del <strong>Birrificio Angelo Poretti in Starbucks Reserve</strong>, 
            e collaborato con Acque Minerali d'Italia in un progetto con Niagara Waters che ha portato l'eccellenza italiana 
            in network come <strong>Walmart, Publix, Target, Sedano's e Fresh Market</strong>.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Background e Formazione</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            La mia carriera è iniziata come Project Developer e Area Sales Manager presso Just Quality Business e attraverso 
            la fondazione di GP Business and Intelligence, che mi ha permesso di lanciare iniziative a Miami, New York e 
            San Francisco. Ho inoltre acquisito preziosa esperienza come <strong>Junior Buyer e Italian Specialist presso 
            Tesco Sourcing</strong> a Londra.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Dopo il ritorno in Italia, ho riacceso la mia passione per la tecnologia, un campo che mi affascina fin 
            dall'infanzia. Poco prima del COVID, collaborazioni con <strong>Meta e Teslasuit</strong> mi stavano proiettando 
            sulla scena internazionale con progetti innovativi per la formazione delle forze armate e l'avanzamento 
            dell'ecosistema Meta, sebbene le restrizioni pandemiche abbiano rallentato queste iniziative.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Filosofia Professionale</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-xl italic text-blue-900">
              "Gettare il cuore oltre l'ostacolo"
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            La mia filosofia fonde organizzazione, leadership e problem solving in contesti dinamici e multiculturali, 
            riflettendo il mio spirito imprenditoriale e l'impegno incrollabile verso l'innovazione e l'eccellenza. 
            Guidato da determinazione e visione, cerco continuamente nuove opportunità per crescere e innovare nel 
            mercato globale, forgiando sinergie che uniscono tradizione e modernità, trasformando le sfide in successi duraturi.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Competenze Chiave</h2>
          
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
              Lavoriamo Insieme
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Services Page
function ServicesPage() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Consulenza Internazionalizzazione",
      description: "Supporto strategico completo per l'espansione internazionale della tua azienda. Dall'analisi dei mercati target alla definizione della strategia di ingresso, fino all'implementazione operativa e al consolidamento della presenza estera.",
      features: [
        "Analisi di mercato e opportunità",
        "Strategia di ingresso personalizzata",
        "Identificazione partner locali",
        "Supporto operativo e logistico",
        "Gestione aspetti legali e fiscali"
      ],
      markets: "Stati Uniti (Miami, New York, San Francisco), Europa, Mercati emergenti"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Business Development",
      description: "Sviluppo di nuove opportunità di business, identificazione di canali distributivi e creazione di partnership strategiche per accelerare la crescita aziendale.",
      features: [
        "Identificazione opportunità di crescita",
        "Sviluppo rete commerciale",
        "Analisi competitor e posizionamento",
        "Strategie di go-to-market",
        "KPI e monitoraggio performance"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Partnership e Negoziazione",
      description: "Negoziazione e gestione di partnership strategiche con grandi catene retail, distributori e player di mercato. Esperienza diretta con network come Walmart, Starbucks, Target, Publix.",
      features: [
        "Identificazione partner strategici",
        "Negoziazione contratti",
        "Gestione relazioni commerciali",
        "Ottimizzazione termini di partnership",
        "Monitoraggio performance partnership"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Strategie di Mercato USA",
      description: "Consulenza specializzata per l'ingresso e l'espansione nel mercato statunitense, con focus su Miami, New York e San Francisco. Conoscenza approfondita delle dinamiche locali e delle best practice.",
      features: [
        "Market entry strategy USA",
        "Analisi opportunità per stato/città",
        "Network di contatti locali",
        "Supporto setup operativo",
        "Compliance e regolamentazione USA"
      ]
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: "Innovazione e Tecnologia",
      description: "Integrazione di innovazioni tecnologiche nelle strategie aziendali, anticipando trend di settore e posizionando l'azienda all'avanguardia. Esperienza con progetti Meta, Teslasuit e altre tecnologie emergenti.",
      features: [
        "Technology scouting",
        "Valutazione innovazioni applicabili",
        "Strategia di digital transformation",
        "Partnership tecnologiche",
        "Progetti pilota e implementazione"
      ]
    }
  ]
  
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Servizi di Consulenza</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offro servizi di consulenza specializzati per accompagnare le aziende nel loro percorso di crescita 
            internazionale, con particolare focus sui mercati USA e sull'integrazione di innovazione tecnologica 
            nelle strategie di business.
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
                  <h4 className="font-semibold text-gray-900 mb-4">Cosa Include:</h4>
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
                      <p className="text-sm font-semibold text-blue-900 mb-2">Mercati di Specializzazione:</p>
                      <p className="text-gray-700">{service.markets}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Interessato ai Miei Servizi?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contattami per discutere come posso aiutare la tua azienda a crescere nei mercati internazionali.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Richiedi una Consulenza
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Projects Page
function ProjectsPage() {
  const projects = [
    {
      title: "Birrificio Angelo Poretti × Starbucks Reserve",
      client: "Vine N Ale Distributors / Birrificio Angelo Poretti",
      market: "USA - Miami",
      objective: "Introduzione prodotti premium italiani nel circuito Starbucks Reserve",
      results: [
        "Partnership strategica con Starbucks Reserve",
        "Introduzione prodotti iconici del Birrificio Angelo Poretti",
        "Espansione presenza brand italiano nel mercato premium USA",
        "Creazione modello replicabile per altri brand"
      ],
      skills: ["Negoziazione partnership", "Posizionamento premium", "Gestione relazioni strategiche"]
    },
    {
      title: "Acque Minerali d'Italia × Niagara Waters",
      client: "Acque Minerali d'Italia",
      partner: "Niagara Waters",
      market: "USA - Network nazionale",
      objective: "Distribuzione eccellenza italiana nelle principali catene retail USA",
      results: [
        "Accordo distributivo con Niagara Waters",
        "Presenza in Walmart, Publix, Target, Sedano's, Fresh Market",
        "Espansione nazionale del brand",
        "Consolidamento presenza mercato USA"
      ],
      skills: ["Partnership strategiche", "Negoziazione con grandi catene", "Supply chain internazionale"]
    },
    {
      title: "Collaborazioni Meta e Teslasuit",
      client: "Progetti Tecnologici Internazionali",
      market: "Internazionale",
      objective: "Progetti innovativi per training forze armate e ecosistema Meta",
      results: [
        "Sviluppo collaborazioni con Meta e Teslasuit",
        "Progetti all'avanguardia in VR/AR",
        "Applicazioni per training forze armate",
        "Avanzamento ecosistema Meta"
      ],
      skills: ["Technology partnerships", "Innovazione tecnologica", "Project management complesso"]
    },
    {
      title: "Espansione Lab101 Srl",
      client: "Lab101 Srl (CEO)",
      market: "Italia e Internazionale",
      period: "2+ anni",
      objective: "Crescita strategica e posizionamento come leader di mercato",
      results: [
        "Crescita strategica e operativa",
        "Posizionamento come leader nel settore smart solutions",
        "Sviluppo nuove linee di business",
        "Espansione team e competenze"
      ],
      skills: ["Leadership esecutiva", "Strategic planning", "Gestione crescita aziendale"]
    },
    {
      title: "WeDeal Srl - Multiple Ventures",
      client: "WeDeal Srl (Co-founder)",
      market: "Milano",
      period: "4+ anni",
      objective: "Gestione e sviluppo multiple iniziative imprenditoriali",
      results: [
        "Lancio e gestione multiple ventures",
        "Diversificazione portfolio business",
        "Creazione sinergie tra progetti",
        "Crescita sostenibile"
      ],
      skills: ["Entrepreneurship", "Portfolio management", "Business development"]
    }
  ]
  
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Progetti e Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alcuni dei progetti di internazionalizzazione e partnership strategiche che ho guidato con successo.
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
                    <span><strong>Cliente:</strong> {project.client}</span>
                  </div>
                  {project.partner && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span><strong>Partner:</strong> {project.partner}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span><strong>Mercato:</strong> {project.market}</span>
                  </div>
                  {project.period && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award size={16} />
                      <span><strong>Periodo:</strong> {project.period}</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Obiettivo:</h4>
                    <p className="text-gray-700">{project.objective}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Risultati:</h4>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Competenze Applicate:</h4>
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
            Vuoi discutere un progetto simile per la tua azienda?
          </p>
          <Link to="/contact">
            <Button size="lg">
              Contattami
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Insights Page
function InsightsPage() {
  const insights = [
    {
      title: "L'Internazionalizzazione nell'Era Post-COVID",
      excerpt: "Come le aziende italiane possono sfruttare le nuove opportunità nei mercati globali dopo la pandemia. Analisi dei cambiamenti strutturali e delle strategie vincenti.",
      category: "Strategia",
      readTime: "8 min"
    },
    {
      title: "USA: Opportunità nei Mercati di Miami, New York e San Francisco",
      excerpt: "Guida pratica ai tre principali hub per le aziende italiane che vogliono espandersi negli Stati Uniti. Differenze, opportunità e best practice per ciascun mercato.",
      category: "Mercati USA",
      readTime: "12 min"
    },
    {
      title: "Negoziare con le Grandi Catene: Lezioni dal Campo",
      excerpt: "Strategie e tattiche per negoziare con successo partnership con i grandi player retail come Walmart, Target e Starbucks.",
      category: "Partnership",
      readTime: "10 min"
    },
    {
      title: "Tecnologia e Internazionalizzazione: Un Binomio Vincente",
      excerpt: "Come l'innovazione tecnologica può accelerare e ottimizzare i processi di espansione internazionale. Casi pratici e strumenti.",
      category: "Innovazione",
      readTime: "7 min"
    },
    {
      title: "Gettare il Cuore Oltre l'Ostacolo: La Filosofia del Business Developer",
      excerpt: "Riflessioni sulla mentalità imprenditoriale, la gestione del rischio e l'importanza della visione nel business internazionale.",
      category: "Leadership",
      readTime: "6 min"
    },
    {
      title: "Il Ruolo della Cultura nell'Espansione Internazionale",
      excerpt: "Comprendere le differenze culturali è fondamentale per il successo nei mercati esteri. Come navigare le sfide interculturali.",
      category: "Strategia",
      readTime: "9 min"
    }
  ]
  
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Insights & Tendenze</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Riflessioni, analisi e tendenze sui mercati internazionali, l'innovazione e le strategie di business development.
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
                  Leggi di più
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vuoi Rimanere Aggiornato?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Seguimi su LinkedIn per insights regolari sui mercati internazionali e strategie di business.
          </p>
          <a 
            href="https://www.linkedin.com/in/gianlucapiazza/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg">
              <Linkedin className="mr-2" size={20} />
              Seguimi su LinkedIn
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
    alert('Grazie per il tuo messaggio! Ti contatterò al più presto.')
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
  
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contatti</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interessato a espandere la tua azienda sui mercati internazionali? Contattami per una consulenza personalizzata.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Invia un Messaggio</CardTitle>
              <CardDescription>
                Compila il form e ti risponderò il prima possibile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Azienda</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome della tua azienda"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tua@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefono</Label>
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
                  <Label htmlFor="service">Servizio di Interesse</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Seleziona un servizio</option>
                    <option value="internazionalizzazione">Consulenza Internazionalizzazione</option>
                    <option value="business-development">Business Development</option>
                    <option value="partnership">Partnership e Negoziazione</option>
                    <option value="usa">Strategie di Mercato USA</option>
                    <option value="innovazione">Innovazione e Tecnologia</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Messaggio *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Descrivi brevemente il tuo progetto o le tue esigenze..."
                    rows={5}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Invia Messaggio
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Informazioni di Contatto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Località</h4>
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
                <CardTitle className="text-2xl text-white">Trasforma la Tua Visione Globale in Realtà</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6">
                  Con oltre 15 anni di esperienza nei mercati internazionali e partnership con i più grandi 
                  player globali, sono pronto ad aiutarti a raggiungere i tuoi obiettivi di espansione.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>Consulenza personalizzata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>Esperienza comprovata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>Network internazionale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    <span>Risultati misurabili</span>
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

// Main App Component
function App() {
  return (
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
