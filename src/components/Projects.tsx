
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vulnerability Scanner",
      description: "Python-based network vulnerability scanner that identifies common security weaknesses in web applications and network services.",
      tech: ["Python", "Nmap", "SQLMap", "BeautifulSoup"],
      image: "photo-1518770660439-4636190af475",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Phishing Detection System",
      description: "Machine learning model to detect phishing websites using URL analysis and content inspection.",
      tech: ["Python", "Scikit-learn", "Flask", "JavaScript"],
      image: "photo-1487058792275-0ad4aaf24ca7",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Secure sharing and collaboration platform",
      description: "Web-based platform for secure file sharing and team collaboration.",
      tech: ["React", "Flask", "SQLite", "Socket.io"],
      image: "photo-1461749280684-dccba630e2f6",
      github: "#",
      featured: false
    },
    {
      title: "Password Strength Analyzer",
      description: "Tool that analyzes password strength and provides recommendations for improvement.",
      tech: ["JavaScript", "Python", "Chart.js", "Bootstrap"],
      image: "photo-1488590528505-98d2b5aba04b",
      github: "#",
      demo: "#",
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
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
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
