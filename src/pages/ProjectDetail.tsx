import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, User, Globe, CheckCircle, XCircle } from 'lucide-react';
import { projects } from '../data/projects';
import { projectDetails } from '../data/projectDetails';
import MockupCarousel from '../components/MockupCarousel';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const projectDetail = projectDetails[id as string];

  if (!project || !projectDetail) {
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Progetto non trovato</h1>
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

  // Dati per il confronto prima/dopo (solo per Betta47)
  const beforeAfterData = project.id === 'project-2' ? {
    beforeProblems: [
      'Sito molto vecchio ed esteticamente datato',
      'Problemi di traduzione',
      'Navigazione difficile e confusa',
      'Design non responsive',
      'Contenuti poco organizzati'
    ],
    afterSolutions: [
      'Design moderno e professionale',
      'Traduzioni corrette e ottimizzate',
      'Navigazione intuitiva e user-friendly',
      'Completamente responsive',
      'Contenuti ben organizzati e strutturati'
    ],
    comparisonImages: [
      {
        before: '/carouselMockup/Betta47/before-1.jpg',
        after: '/carouselMockup/Betta47/after-1.jpg',
        title: 'Homepage'
      },
      {
        before: '/carouselMockup/Betta47/before-2.jpg',
        after: '/carouselMockup/Betta47/after-2.jpg',
        title: 'Galleria'
      },
      {
        before: '/carouselMockup/Betta47/before-3.jpg',
        after: '/carouselMockup/Betta47/after-3.jpg',
        title: 'Contatti'
      }
    ]
  } : null;

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="container-custom">
          <Link
            to="/projects"
            className="inline-flex items-center text-slate-900 hover:text-slate-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna ai progetti
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-slate-700 text-white rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="flex items-center text-slate-700 text-sm bg-slate-200 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 mr-1" />
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Mockups del progetto</h2>
                <MockupCarousel projectTitle={project.title} projectId={project.id} />
              </div>

              {/* Business Goals */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Obiettivi di business</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetail.businessGoals.map((goal: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Caratteristiche principali</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetail.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Risultati ottenuti</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetail.results.map((result: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Processo di lavoro</h2>
                <div className="space-y-6">
                  {projectDetail.process.map((step: { title: string; description: string }, index: number) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Informazioni progetto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-sm text-slate-500">Anno</p>
                      <p className="font-medium text-slate-900">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-sm text-slate-500">Categoria</p>
                      <p className="font-medium text-slate-900 capitalize">{project.category.replace('-', ' ')}</p>
                    </div>
                  </div>

                  {project.client && (
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="text-sm text-slate-500">Cliente</p>
                        <p className="font-medium text-slate-900">{project.client}</p>
                      </div>
                    </div>
                  )}

                  {project.url && (
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="text-sm text-slate-500">Sito web</p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-900 hover:text-slate-700 transition-colors"
                        >
                          Visita il sito
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="card p-6 accent-gradient text-white">
                <h3 className="text-lg font-semibold mb-4">Testimonianza cliente</h3>
                <p className="text-slate-200 mb-4 italic">"{projectDetail.testimonial.text}"</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold">{projectDetail.testimonial.author}</p>
                  <p className="text-sm text-slate-300">{projectDetail.testimonial.role}</p>
                </div>
              </div>

              {/* CTA Card */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Vuoi un progetto simile?</h3>
                <p className="text-slate-600 mb-6">
                  Contattaci per discutere di come possiamo aiutarti a realizzare la tua visione.
                </p>
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Inizia una conversazione
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison Section (solo per Betta47) - A tutta larghezza */}
      {beforeAfterData && (
        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Trasformazione Digitale</h2>

            {/* Comparison Carousel */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {beforeAfterData.comparisonImages.map((comparison, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4 bg-slate-50 border-b">
                      <h3 className="text-lg font-semibold text-slate-900 text-center">{comparison.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                      {/* Before */}
                      <div>
                        <div className="text-center mb-3">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <XCircle className="w-4 h-4 text-red-500" />
                          </div>
                          <h4 className="font-semibold text-slate-900">Prima</h4>
                        </div>
                        <div className="aspect-[4/3] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${comparison.before})` }}>
                          {/* Fallback */}
                          <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                            <div className="text-center">
                              <XCircle className="w-12 h-12 text-red-400 mx-auto mb-2" />
                              <p className="text-red-600 font-medium">Screenshot Vecchio</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* After */}
                      <div>
                        <div className="text-center mb-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                          <h4 className="font-semibold text-slate-900">Dopo</h4>
                        </div>
                        <div className="aspect-[4/3] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${comparison.after})` }}>
                          {/* Fallback */}
                          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                            <div className="text-center">
                              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-2" />
                              <p className="text-green-600 font-medium">Screenshot Nuovo</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before Section */}
              <div>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Prima</h3>
                  <p className="text-slate-600">I problemi del sito esistente</p>
                </div>

                <div className="space-y-3">
                  {beforeAfterData.beforeProblems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <XCircle className="w-3 h-3 text-red-500" />
                      </div>
                      <span className="text-slate-700">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After Section */}
              <div>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Dopo</h3>
                  <p className="text-slate-600">Le soluzioni implementate</p>
                </div>

                <div className="space-y-3">
                  {beforeAfterData.afterSolutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-slate-700">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;