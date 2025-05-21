import { ExternalLink, Calendar } from 'lucide-react';
import { certificatesData } from '../data/mockData';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const CertificatesPage = () => {
  // Format date to display in a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="animate-fadeIn">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">My Certificates</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Credentials and certifications earned throughout my career
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((certificate) => (
          <Card key={certificate.id} className="group overflow-hidden flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={certificate.imageUrl} 
                alt={certificate.title} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {certificate.title}
              </h3>
              <div className="text-gray-600 dark:text-gray-300 mb-2">
                Issued by: <span className="font-medium">{certificate.issuer}</span>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{formatDate(certificate.date)}</span>
              </div>
              
              {certificate.verificationUrl && (
                <div className="mt-auto">
                  <Button 
                    variant="outline"
                    icon={<ExternalLink size={16} />}
                    className="w-full"
                    onClick={() => window.open(certificate.verificationUrl, '_blank')}
                  >
                    Verify Certificate
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Education
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Beyond formal certifications, I'm committed to continuous learning with a strong academic profile.
        </p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              B.Tech Artificial Intelligence and Data Science (2022-2026)
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Current CGPA : 9.1
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              HSC (12th Grade) - 2022
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              92%
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              SSLC (10th Grade) - 2020
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              97.67%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;