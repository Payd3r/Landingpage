import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../types/Project';

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="gradient-bg pt-20 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            I nostri progetti
          </h1>         
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="accent-gradient text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Hai un progetto in mente?</h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-lg">
            Siamo sempre interessati a nuovi progetti stimolanti. Contattaci per discutere di come possiamo aiutarti a realizzare la tua visione.
          </p>
          <a href="/contact" className="btn-secondary bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4">
            Inizia una conversazione
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;