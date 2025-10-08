// Projects Page - Updated with all 6 projects
export function ProjectsPageNew() {
  const { t } = useLanguage()
  
  const projectColors = [
    'from-amber-500 to-orange-500',
    'from-blue-500 to-cyan-500',
    'from-red-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-purple-500 to-indigo-500',
    'from-yellow-500 to-amber-500'
  ]
  
  const projects = [
    t.projects.project1,
    t.projects.project2,
    t.projects.project3,
    t.projects.project4,
    t.projects.project5,
    t.projects.project6
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
