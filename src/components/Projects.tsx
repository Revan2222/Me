
import { useState } from 'react';
import { Github, Link as LinkIcon, Briefcase } from 'lucide-react';
import { Project } from '../pages/Index';
import ProjectForm from './ProjectForm';

interface ProjectsProps {
  projects: Project[];
  onAddProject: (project: Omit<Project, 'id'>) => void;
  onDeleteProject: (id: string) => void;
}

const Projects = ({ projects, onAddProject, onDeleteProject }: ProjectsProps) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800/30 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400 animate-gradient mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg shadow-md"
          >
            {showForm ? 'Cancel' : 'Add New Project'}
          </button>
        </div>

        {showForm && (
          <div className="mb-12 bg-slate-800/70 p-8 rounded-2xl border border-blue-500/30 shadow-xl backdrop-blur-sm animate-fade-in">
            <ProjectForm 
              onSubmit={(project) => {
                onAddProject(project);
                setShowForm(false);
              }}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg">
                    <Briefcase className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <LinkIcon size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <button
                    onClick={() => onDeleteProject(project.id)}
                    className="ml-auto text-red-400 hover:text-red-300 text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12 bg-slate-800/30 rounded-2xl border border-slate-700 animate-fade-in">
            <p className="text-gray-400 text-lg">No projects yet. Add your first project!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
