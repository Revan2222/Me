
import { Link as LinkIcon, BookOpen } from 'lucide-react';
import { Certificate } from '../pages/Index';

interface CertificatesProps {
  certificates: Certificate[];
  onDeleteCertificate: (id: string) => void;
}

const Certificates = ({ certificates, onDeleteCertificate }: CertificatesProps) => {
  // We'll use a combination of the provided certificates and some default ones
  const displayedCertificates = certificates.length >= 3 ? certificates : 
   [
      {
    id: '1',
    title: 'Responsive Web Design',
    description: 'Acquired skills in designing and developing mobile-first responsive websites that provide optimal user experience across devices.',
    link: 'https://certificate-link.com'
  },
  
  {
    id: '2',
    title: "Proglint's Computer Vision",
    description: 'Learned computer vision techniques and their applications including image processing, object detection, and machine learning integration.',
    link: 'https://certificate-link.com'
  },
  {
    id: '3',
    title: 'Docker for Developers',
    description: 'Mastered containerization concepts and hands-on experience with Docker to build, ship, and run scalable applications.',
    link: 'https://certificate-link.com'
  },
  {
    id: '4',
    title: 'AWS Academy Cloud Foundations',
    description: 'Intensive program covering both frontend and backend technologies including JavaScript, Node.js, Express, and MongoDB.',
    link: 'https://certificate-link.com'
  }


  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400 animate-gradient mb-4">
            My <span className="text-blue-400">Certificates</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedCertificates.map((certificate, idx) => (
            <div 
              key={certificate.id} 
              className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-green-400 rounded-lg flex items-center justify-center shadow-lg">
                  <BookOpen className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{certificate.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{certificate.description}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                      <LinkIcon size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                      <span className="text-sm">View Certificate</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
