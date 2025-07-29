import type { Project } from '../types/Project';
import { ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      className="card overflow-hidden cursor-pointer group transform hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-blue-500 text-8xl font-bold mb-4">
              {project.title.charAt(0)}
            </div>
            <p className="text-blue-700 font-medium text-lg">Mockup Preview</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 text-center">
            <div className="text-slate-800 font-semibold text-lg">Visualizza dettagli</div>
            <ArrowRight className="w-5 h-5 mx-auto mt-2 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
          <span className="flex items-center text-slate-500 text-sm bg-slate-100 px-3 py-1 rounded-full">
            <Calendar className="w-4 h-4 mr-1" />
            {project.year}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-800 transition-colors p-2 hover:bg-slate-100 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-slate-600 mb-6 text-lg leading-relaxed">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium capitalize">
            {project.category.replace('-', ' ')}
          </span>
          {project.client && (
            <span className="text-sm text-slate-500">
              Per {project.client}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;