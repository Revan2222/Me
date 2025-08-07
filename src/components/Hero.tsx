import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-16">
      {/* Background bubbles and particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-1000"></div>
        <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-2000"></div>

        <div className="hidden md:block absolute inset-0 z-0">
          {Array.from({ length: 20 }).map((_, i) => (
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
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400 animate-gradient mb-6 opacity-0 animate-fade-in">
          Revan R
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 opacity-0 animate-fade-in stagger-1">
          <Typewriter
            words={['Frontend Developer', 'React.js Lover', 'Full-Stack Learner','Spring Boot Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto opacity-0 animate-fade-in stagger-2">
          I build beautiful and responsive web experiences with React.js, Tailwind CSS, and a passion for great design. Currently learning backend integration to become a full-stack developer.
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['React', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'Spring Boot'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 text-sm bg-slate-800 text-blue-300 border border-slate-600 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="text-gray-300 hover:text-white transition-colors" size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-gray-300 hover:text-white transition-colors" size={24} />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in stagger-3 mb-16">
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


      </div>
    </section>
  );
};

export default Hero;
