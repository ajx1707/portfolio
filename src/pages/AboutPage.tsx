import { User, MapPin, Briefcase } from 'lucide-react';
import { aboutMeData } from '../data/mockData';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const AboutPage = () => {
  const handleDownloadResume = () => {
    const resumeUrl = '/portfolio/pictures/akshayaresume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Akshayaresume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="animate-fadeIn">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Get to know who I am and what drives me!
        </p>
      </header>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src="/portfolio/images/avatar.png"
                alt={aboutMeData.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {aboutMeData.name}
              </h2>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <Briefcase size={16} className="mr-2" />
                <span>{aboutMeData.title}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                <MapPin size={16} className="mr-2" />
                <span>{aboutMeData.location}</span>
              </div>

              <Button
                variant="primary"
                className="w-full"
                icon={<User size={16} />}
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Section title="Biography">
            <div className="prose dark:prose-invert max-w-none">
              {aboutMeData.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Section>

          <Section title="What I Do">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Frontend Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                Developing responsive and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React. Emphasis on clean UI design, mobile responsiveness, and interactive elements to enhance user experience.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Backend Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                Building scalable and efficient server-side applications using Node.js, Express, and MongoDB/MySQL. Experienced in implementing RESTful APIs and role-based authentication systems (e.g., in IPL Ticket Booking System).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  UI/UX Design
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                Creating intuitive layouts and improving user experience through structured web components. Gained hands-on experience in UI/UX during internships and project work such as the Movie Review System and InternPe tasks.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Data Science & Machine Learning
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                Applying Python, pandas, matplotlib, and scikit-learn to analyze data and build predictive models. Completed projects on machine downtime prediction and rainfall forecasting, with a focus on real-world problem-solving.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Docker & Containerization
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                Experience with Docker for containerizing applications and managing development environments. Familiar with deploying full-stack solutions in isolated environments to ensure consistency across systems.
                </p>
              </div>

            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;