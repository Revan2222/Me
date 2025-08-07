
import { useState } from 'react';
import { Mail, Github, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoverState, setHoverState] = useState({
    email: false,
    github: false,
    linkedin: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800/30 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400 animate-gradient mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's connect!</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div 
                className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                onMouseEnter={() => setHoverState({...hoverState, email: true})}
                onMouseLeave={() => setHoverState({...hoverState, email: false})}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transition-all duration-500 ${hoverState.email ? 'bg-blue-500 rotate-6' : 'bg-blue-600'}`}>
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:john.doe@email.com" className="text-white hover:text-blue-400 transition-colors">
                    revanofficial22@gmail.com
                  </a>
                </div>
              </div>

              <div 
                className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                onMouseEnter={() => setHoverState({...hoverState, github: true})}
                onMouseLeave={() => setHoverState({...hoverState, github: false})}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transition-all duration-500 ${hoverState.github ? 'bg-purple-600 rotate-6' : 'bg-blue-600'}`}>
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a 
                    href="https://github.com/Revan2222" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    github.com/Revan
                  </a>
                </div>
              </div>

              <div 
                className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                onMouseEnter={() => setHoverState({...hoverState, linkedin: true})}
                onMouseLeave={() => setHoverState({...hoverState, linkedin: false})}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transition-all duration-500 ${hoverState.linkedin ? 'bg-green-600 rotate-6' : 'bg-blue-600'}`}>
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/revanr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/Revan                  </a>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-blue-500/30 transition-all duration-500 transform hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-400 rounded-lg animate-fade-in">
                <p className="text-green-400 text-sm">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/80 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/80 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-700/80 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md opacity-0 animate-fade-in"
                style={{ animationDelay: '0.7s' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
