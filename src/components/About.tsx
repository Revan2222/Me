
import { User, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Personal Info</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate frontend developer with a keen eye for design and user experience. 
                  I love turning complex problems into simple, beautiful, and intuitive solutions. 
                  When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                  or playing chess.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Book className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="font-medium">Bachelor of Technology in Computer Science</p>
                  <p className="text-blue-400">ABC University • 2020-2024</p>
                  <p className="text-sm">CGPA: 8.5/10</p>
                  <p className="text-sm leading-relaxed">
                    Specialized in web development, data structures, and software engineering. 
                    Active member of the coding club and participated in multiple hackathons.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600">
            <h3 className="text-2xl font-semibold text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-600">
                <span className="text-gray-400">Age</span>
                <span className="text-white font-medium">22</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-600">
                <span className="text-gray-400">Location</span>
                <span className="text-white font-medium">New York, USA</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-600">
                <span className="text-gray-400">Languages</span>
                <span className="text-white font-medium">English, Spanish</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-600">
                <span className="text-gray-400">Interests</span>
                <span className="text-white font-medium">Coding, Design, Music</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">Availability</span>
                <span className="text-green-400 font-medium">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
