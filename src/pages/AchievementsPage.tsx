import { CalendarClock } from 'lucide-react';
import { achievementsData } from '../data/mockData';
import Card from '../components/UI/Card';

const AchievementsPage = () => {
  // Format date to display in a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="animate-fadeIn">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">My Achievements</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Recognition and notable milestones throughout my career
        </p>
      </header>

      <div className="space-y-8">
        {achievementsData.map((achievement, index) => (
          <Card key={achievement.id} className="overflow-hidden">
            <div className="md:flex">
              {achievement.imageUrl && (
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={achievement.imageUrl} 
                    alt={achievement.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div className="p-6 md:w-2/3">
                <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                  <CalendarClock size={16} className="mr-2" />
                  <span className="text-sm">{formatDate(achievement.date)}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Experience
        </h2>
        
        <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 pb-8 space-y-10">
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-2 border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">2024</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Summer Intern at Meenakshi Sundararajan Engineering College
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I am a full stack developer in this Project that performs Staff Analysis that is done by the Students and we also generate report cards to the respective Professors and give them their strengths,areas of improvements and scores on the subjects handled by them
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-2 border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">2025</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Data Science and Analysis Intern Main Flow Services and Technologies Pvt. Ltd.
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I am a full stack developer in this Project that performs Staff Analysis that is done by the Students and we also generate report cards to the respective Professors and give them their strengths,areas of improvements and scores on the subjects handled by them.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-2 border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">2025</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Web Development Intern at InternPe
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Completed a 4-week internship in Web Development, gaining hands-on experience in front-end technologies and interactive web applications. Worked on real-world projects, enhancing skills in HTML, CSS, JavaScript, and UI/UX design. Developed and improved problem-solving, responsiveness, and user experience through structured weekly tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;