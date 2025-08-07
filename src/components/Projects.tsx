
import { Github, Link as LinkIcon, Briefcase } from 'lucide-react';
import { Project } from '../pages/Index';

interface ProjectsProps {
  projects: Project[];
  onDeleteProject: (id: string) => void;
}

const Projects = ({ projects, onDeleteProject }: ProjectsProps) => {
  // We'll use a combination of the provided projects and some default ones
  const displayedProjects = projects.length >= 3 ? projects : [
    {
      id: '1',
      title: 'Home-Rental Website',
      description: 'A full-stack e-commerce platform built with Reactjs and featuring Home Rental Booking and secure checkout.',
      githubLink: 'https://github.com/Revan2222/RentMate.git',
      liveLink: 'https://rent-mate-seven.vercel.app/'
    },
    {
      id: '2',
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my projects and skills.',
      githubLink: 'https://github.com/username/portfolio',
      liveLink: 'https://myportfolio.netlify.app'
    },
    {
      id: '3',
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, user authentication, and real-time updates.',
      githubLink: 'https://github.com/username/taskmanager',
      liveLink: 'https://mytaskmanager.netlify.app'
    }
  ];

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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
