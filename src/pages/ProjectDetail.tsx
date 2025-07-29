import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, User, Globe } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Progetto non trovato</h1>
            <p className="text-slate-600 mb-8">Il progetto che stai cercando non esiste.</p>
            <Link to="/projects" className="btn-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna ai progetti
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container-custom">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna ai progetti
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="flex items-center text-slate-600 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {project.year}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visita il sito
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Codice sorgente
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Mockups Gallery */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Mockups del progetto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.mockups.map((mockup, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-blue-500 text-6xl font-bold mb-2">
                            {project.title.charAt(0)}
                          </div>
                          <p className="text-blue-700 font-medium">Mockup {index + 1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Caratteristiche principali</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Sfide affrontate</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-slate-700">{challenge}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Soluzioni implementate</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-slate-700">{solution}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">Informazioni progetto</h3>
                
                <div className="space-y-4">
                  {project.client && (
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-slate-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-500">Cliente</p>
                        <p className="font-medium text-slate-800">{project.client}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-slate-600 mr-3" />
                    <div>
                      <p className="text-sm text-slate-500">Anno</p>
                      <p className="font-medium text-slate-800">{project.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Tag className="w-5 h-5 text-slate-600 mr-3" />
                    <div>
                      <p className="text-sm text-slate-500">Categoria</p>
                      <p className="font-medium text-slate-800 capitalize">{project.category.replace('-', ' ')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-slate-800 mb-4">Tecnologie utilizzate</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.url && (
                  <div className="mt-8">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Visita il sito
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Hai un progetto simile?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Sono sempre interessato a nuovi progetti stimolanti. Contattami per discutere di come posso aiutarti a realizzare la tua visione.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Inizia una conversazione
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;