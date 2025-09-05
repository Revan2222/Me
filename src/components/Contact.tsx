import { useState } from 'react';
import { Mail, Github, User } from 'lucide-react';
import emailjs from 'emailjs-com';

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

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Basic validation before sending
  if (!formData.name || !formData.email || !formData.message) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  // Debug: log form data
  console.log('Sending email with data:', {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  });

  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', result);

    // Reset form and show success message
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);

  } catch (error: any) {
    console.error('Email sending failed:', error);
    if (error?.status === 400) {
      alert('EmailJS: Bad Request. Check your service/template IDs and template variables.');
    } else if (error?.status === 412) {
      alert('EmailJS: Gmail API scopes issue. Check your Gmail integration.');
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }
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
          {/* Left Section */}
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's connect!</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email */}
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
                  <a href="mailto:revanofficial22@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    revanofficial22@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
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

              {/* LinkedIn */}
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
                    linkedin.com/in/Revan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
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
