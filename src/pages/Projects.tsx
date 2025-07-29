import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import type Project from '../types/Project';

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-800 mb-6">
            I miei progetti
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Una selezione dei miei lavori più recenti. Ogni progetto rappresenta una sfida unica e un'opportunità per creare qualcosa di straordinario.
          </p>
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
      <section className="bg-slate-900 text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Hai un progetto in mente?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Sono sempre interessato a nuovi progetti stimolanti. Contattami per discutere di come posso aiutarti a realizzare la tua visione.
          </p>
          <a href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4">
            Inizia una conversazione
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;