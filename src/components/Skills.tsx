
import { Code, Image } from 'lucide-react';
import { Progress } from './ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 60 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Image className="text-green-400" size={24} />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Figma", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "MongoDB", level: 60 },
        { name: "Docker", level: 50 },
        { name: "AWS", level: 45 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400 animate-gradient mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-slate-700/50 rounded-lg">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.3 + skillIndex * 0.1 + index * 0.05}s` }}  
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-slate-700" 
                      indicatorClassName={`${
                        skill.level > 80 ? 'bg-green-500' : 
                        skill.level > 60 ? 'bg-blue-500' : 
                        skill.level > 40 ? 'bg-yellow-500' : 'bg-red-500'
                      } h-full transition-all duration-1000 ease-in-out`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
