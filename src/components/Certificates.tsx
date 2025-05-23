
import { useState } from 'react';
import { Link as LinkIcon, BookOpen } from 'lucide-react';
import { Certificate } from '../pages/Index';
import CertificateForm from './CertificateForm';

interface CertificatesProps {
  certificates: Certificate[];
  onAddCertificate: (certificate: Omit<Certificate, 'id'>) => void;
  onDeleteCertificate: (id: string) => void;
}

const Certificates = ({ certificates, onAddCertificate, onDeleteCertificate }: CertificatesProps) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400 animate-gradient mb-4">
            My <span className="text-blue-400">Certificates</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Professional certifications and achievements that showcase my learning journey
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg shadow-md"
          >
            {showForm ? 'Cancel' : 'Add New Certificate'}
          </button>
        </div>

        {showForm && (
          <div className="mb-12 bg-slate-800/70 p-8 rounded-2xl border border-blue-500/30 shadow-xl backdrop-blur-sm animate-fade-in">
            <CertificateForm 
              onSubmit={(certificate) => {
                onAddCertificate(certificate);
                setShowForm(false);
              }}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, idx) => (
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
                    <button
                      onClick={() => onDeleteCertificate(certificate.id)}
                      className="text-red-400 hover:text-red-300 text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {certificates.length === 0 && (
          <div className="text-center py-12 bg-slate-800/30 rounded-2xl border border-slate-700 animate-fade-in">
            <p className="text-gray-400 text-lg">No certificates yet. Add your first certificate!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
