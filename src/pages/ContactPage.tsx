import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import { contactData } from '../data/mockData';

const ContactPage = () => {
  const contactItems = [
    { 
      icon: <Mail size={20} />, 
      label: 'Email', 
      value: contactData.email,
      href: `mailto:${contactData.email}`,
    },
    { 
      icon: <Phone size={20} />, 
      label: 'Phone', 
      value: contactData.phone,
      href: `tel:${contactData.phone?.replace(/[^0-9+]/g, '')}`,
    },
    { 
      icon: <Linkedin size={20} />, 
      label: 'LinkedIn', 
      value: 'Connect on LinkedIn',
      href: contactData.linkedin,
    },
    { 
      icon: <Github size={20} />, 
      label: 'GitHub', 
      value: 'Follow on GitHub',
      href: contactData.github,
    },

  ];

  return (
    <div className="animate-fadeIn">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Contact Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Let's connect and discuss potential opportunities
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              item.value && (
                <a 
                  key={index}
                  href={item.href}
                  target={item.label !== 'Email' && item.label !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.label}
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {item.value}
                    </div>
                  </div>
                </a>
              )
            ))}
          </div>
        </div>
          
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Current Availability
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            I'm currently available for freelance work and open to discussing new opportunities. I'm particularly interested in projects involving:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Full-Stack Web Development
              (MERN Stack, Flask, MySQL Workbench, Postman – dynamic and scalable applications)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Frontend Design & UI/UX Implementation
              (Responsive, user-friendly interfaces using HTML, CSS, JavaScript)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Data Analysis & Visualization
              (Exploring and presenting insights from structured and unstructured data)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Machine Learning & AI Model Development
              (Using Python, scikit-learn, and real-world datasets to build predictive systems)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Cloud-Based & Dockerized Deployments
              (Experience with deploying web and AI/ML applications using Docker and cloud services)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;