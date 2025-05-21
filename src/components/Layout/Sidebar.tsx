import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Award, AlignCenterVertical as Certificate, Folders, User, Code2, Mail, Menu, X, Sun, Moon, Github } from 'lucide-react';
import { contactData } from '../../data/mockData';

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar = ({ darkMode, toggleDarkMode }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const navItems = [
    { path: '/', icon: <User size={20} />, label: 'About Me' },
    { path: '/projects', icon: <Folders size={20} />, label: 'Projects' },
    { path: '/skills', icon: <Code2 size={20} />, label: 'Skills' },
    { path: '/certificates', icon: <Certificate size={20} />, label: 'Certificates & Education' },
    { path: '/achievements', icon: <Award size={20} />, label: 'Achievements & Experience' },
    { path: '/contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  const sidebarClasses = `
    ${isMobile ? 'fixed inset-y-0 left-0 z-50 transform transition-transform duration-500 ease-in-out' : 'sticky top-0 h-screen'}
    ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
    flex flex-col w-64 backdrop-blur-md bg-white/80 dark:bg-gray-900/90 border-r border-gray-200/50 dark:border-gray-800/50
    shadow-lg transition-all duration-300
  `;

  const overlayClasses = `
    fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out
    ${isMobile && isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `;

  const activeLinkClass = darkMode 
    ? 'bg-blue-600/20 text-blue-400 dark:text-blue-300 border-r-4 border-blue-500' 
    : 'bg-blue-50 text-blue-600 border-r-4 border-blue-500';

  return (
    <>
      {isMobile && (
        <button 
          onClick={toggleSidebar}
          className={`fixed top-4 left-4 z-50 p-2 rounded-xl ${
            darkMode 
              ? 'bg-gray-800 text-white hover:bg-gray-700' 
              : 'bg-white text-gray-800 hover:bg-gray-50'
          } shadow-lg transition-all duration-300 hover:scale-105 active:scale-95`}
          aria-label="Toggle sidebar"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      <div className={overlayClasses} onClick={closeSidebar} />

      <aside className={sidebarClasses}>
        <div className="flex flex-col flex-grow p-4">
          <div className="flex items-center justify-between mb-8 mt-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          
          <nav className="flex-grow">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={closeSidebar}
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                      hover:translate-x-1
                      ${isActive 
                        ? activeLinkClass 
                        : darkMode 
                          ? 'text-gray-300 hover:bg-gray-800/50' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
            <a 
              href={contactData.github}
              target="_blank" 
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
                hover:translate-x-1
                ${darkMode ? 'text-gray-300 hover:bg-gray-800/50' : 'text-gray-700 hover:bg-gray-100'}
              `}
            >
              <Github size={20} />
              <span>View Source</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;