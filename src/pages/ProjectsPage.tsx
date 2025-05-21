import { useState } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';
import { projectsData } from '../data/mockData';
import { Project } from '../types';
import Card from '../components/UI/Card';
import Badge from '../components/UI/Badge';
import Button from '../components/UI/Button';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData
    .filter((project) => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  const renderGitHubButtons = (project: Project) => {
    if (project.githubUrls) {
      return project.githubUrls.map((github: { label: string; url: string }, index: number) => (
        <Button 
          key={index}
          variant="outline"
          icon={<Github size={16} />}
          className="flex-1"
          onClick={() => window.open(github.url, '_blank')}
        >
          {github.label}
        </Button>
      ));
    } else if (project.githubUrl) {
      return (
        <Button 
          variant="outline"
          icon={<Github size={16} />}
          className="flex-1"
          onClick={() => window.open(project.githubUrl, '_blank')}
        >
          Source
        </Button>
      );
    }
    return null;
  };

  return (
    <div className="animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A showcase of my recent work and personal projects!
        </p>
      </header>

      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            No projects found matching your search criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant={index % 2 === 0 ? 'primary' : 'secondary'}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.demoUrl && (
                    <Button 
                      variant="primary"
                      icon={<ExternalLink size={16} />}
                      className="flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      Demo
                    </Button>
                  )}
                  {renderGitHubButtons(project)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;