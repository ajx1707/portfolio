import { useState } from 'react';
import { skillsData } from '../data/mockData';
import { FileCode, Server, PenTool as Tool, MessageCircle, Star, Code2, Database, PieChart, BarChart, Table, Users, Clock, LineChart } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const categories = [
    { id: 'all', label: 'All Skills', icon: <Star size={18} /> },
    { id: 'frontend', label: 'Frontend', icon: <Code2 size={18} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={18} /> },
    { id: 'tools', label: 'Tools', icon: <Tool size={18} /> },
    { id: 'soft', label: 'Soft Skills', icon: <MessageCircle size={18} /> },
  ];
  
  const filteredSkills = skillsData.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  );

  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={24} />;
      case 'FileCode': return <FileCode size={24} />;
      case 'Database': return <Database size={24} />;
      case 'BarChart': return <BarChart size={24} />;
      case 'PieChart': return <PieChart size={24} />;
      case 'Table': return <Table size={24} />;
      case 'MessageSquare': return <MessageCircle size={24} />;
      case 'Users': return <Users size={24} />;
      case 'Clock': return <Clock size={24} />;
      case 'LineChart': return <LineChart size={24} />;
      default: return <FileCode size={24} />;
    }
  };

  const getSkillLevelText = (proficiency: number) => {
    switch (proficiency) {
      case 1: return 'Beginner';
      case 2: return 'Elementary';
      case 3: return 'Intermediate';
      case 4: return 'Advanced';
      case 5: return 'Expert';
      default: return 'Unknown';
    }
  };

  return (
    <div className="animate-fadeIn">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Technical Proficiency</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A comprehensive overview of my technical skills and expertise
        </p>
      </header>

      <div className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-900 py-4 -mx-8 px-8">
        <div className="flex flex-wrap gap-2 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'primary' : 'outline'}
              icon={category.icon}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300 transform hover:scale-105"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredSkills.map((skill) => (
          <div 
            key={skill.id} 
            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg transition-colors duration-300 ${
                hoveredSkill === skill.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
              }`}>
                {getIconComponent(skill.icon)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-sm px-2 py-1 rounded-full transition-colors duration-300 ${
                    hoveredSkill === skill.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                  }`}>
                    {getSkillLevelText(skill.proficiency)}
                  </span>
                </div>
                <div className="relative w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${(skill.proficiency / 5) * 100}%`,
                      transform: hoveredSkill === skill.id ? 'scaleX(1.05)' : 'scaleX(1)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Section title="Professional Growth" className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Clock size={24} className="text-blue-600" />
              Current Focus Areas
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: 'Full-Stack Development',
                  description: 'Mastering MERN stack and modern JavaScript frameworks'
                },
                {
                  title: 'Data Science & ML',
                  description: 'Practical application through real-world projects'
                },
                {
                  title: 'DevOps & Cloud',
                  description: 'Cloud deployment and containerization expertise'
                }
              ].map((focus, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {focus.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {focus.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Users size={24} className="text-blue-600" />
              Professional Approach
            </h3>
            <div className="prose dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                My approach combines technical expertise with creative problem-solving. I believe in continuous learning and staying ahead of technology trends while focusing on delivering practical, user-centered solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm particularly passionate about:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Building accessible and inclusive applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Integrating AI/ML in practical applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Creating efficient and scalable solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SkillsPage;