
import { Shield, Terminal, Database, Code, Zap, Lock } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Security Tools",
      icon: Shield,
      skills: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP", "Kali Linux"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "JavaScript", "Bash", "PowerShell", "SQL", "C++"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      icon: Database,
      skills: ["NIST", "ISO 27001", "OWASP Top 10", "MITRE ATT&CK", "CIS Controls"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Specializations",
      icon: Terminal,
      skills: ["Penetration Testing", "Incident Response", "Digital Forensics", "Risk Assessment"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Security",
      icon: Zap,
      skills: ["AWS Security", "Azure Security", "Docker", "Kubernetes", "Terraform"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Certifications",
      icon: Lock,
      skills: ["CEH (In Progress)", "Security+", "CISSP (Planned)", "OSCP (Planned)"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 cursor-default"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
