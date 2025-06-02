
import { Shield, Code, Database, Monitor } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Shield, label: "Security Projects", value: "15+" },
    { icon: Code, label: "Lines of Code", value: "20K+" },
    { icon: Database, label: "Vulnerabilities Found", value: "20+" },
    { icon: Monitor, label: "Systems Secured", value: "30+" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My journey began with curiosity about how systems work and evolved 
              into a deep commitment to protecting them.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Passionate about emerging technologies, I am currently looking for an internship 
              opportunity where I can apply and further develop my skills in cybersecurity. 
              Throughout my academic journey, I’ve built a solid foundation in digital security, 
              risk assessment, and system resilience. Now, I’m eager 
              to translate this knowledge into real-world experience, contribute to impactful projects, 
              and grow within a professional environment where I can learn from experienced mentors and 
              stay at the forefront of cybersecurity advancements.

            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not analyzing security protocols, you'll find me contributing to open-source 
              security tools or participating in bug bounty programs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="w-8 h-8 text-green-400 mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
