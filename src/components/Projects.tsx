
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Security cameras network with Blynk",
      description: "A project that integrates Wi-Fi security cameras with the Blynk platform for remote monitoring, control, and vulnerabilities detection.",
      tech: ["ESP32", "Blynk", "Python", "Flask"],
      image: "photo-1518770660439-4636190af475",
      github: "#",
      
      featured: true
    },
    
    {
      title: "Secure sharing and collaboration platform",
      description: "Web-based platform for secure file sharing and team collaboration.",
      tech: ["React", "Flask", "SQLite", "Socket.io"],
      image: "photo-1461749280684-dccba630e2f6",
      github: "https://github.com/lkhdtu1/secure-collab-platform1.git",
      featured: false
    },
    {
      title: "online shopping platform for local products with collection point system",
      description: "A platform that connects local producers with consumers, allowing for online shopping and a collection point system.",
      tech: ["React", "Node.js", "MySQL", "Express"],
      image: "photo-1488590528505-98d2b5aba04b",
      github: "https://classroom.github.com/a/ep7yRoXn",
      
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
