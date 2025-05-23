
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-1000"></div>
        <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-2000"></div>
        
        {/* Animated particles */}
        <div className="hidden md:block absolute inset-0 z-0">
          {Array.from({length: 20}).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full animate-float"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-10">
        <div className="mb-12 animate-float">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <img 
              src="/placeholder.svg" 
              alt="Profile" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400 animate-gradient mb-6 opacity-0 animate-fade-in">
          John <span className="text-blue-400">Doe</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fade-in stagger-1">
          Frontend Developer & UI/UX Enthusiast
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in stagger-2">
          Passionate about creating beautiful, functional web experiences. 
          Fresh graduate ready to bring creativity and technical skills to your team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in stagger-3">
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg shadow-md"
          >
            Get to Know Me
          </button>
          <a
            href="/resume.pdf"
            download
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Download Resume
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in stagger-4">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors animate-bounce">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
