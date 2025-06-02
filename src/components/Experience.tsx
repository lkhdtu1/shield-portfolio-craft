
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Student INE1",
      company: "Institut National des Postes et Télécommunications (INPT)",
      location: "Rabat, Morocco",
      period: "September 2024 – June 2025",
      description: [
        "Pursuing studies in cybersecurity with a focus on network security, cryptography, and ethical hacking.",
        "Participated in hands-on cybersecurity labs and simulations.",
        "Collaborated on group projects focused on network security.",
        "Engaged in continuous learning through workshops and seminars."

      ],
      current: true
    },

    {
      title: "Classes préparatoires aux grandes écoles (MP*)",
      company: "Lycée Moulay Youssef",
      location: "Rabat, Morocco",
      period: "September 2023 – June 2024",
      description: [
        "Studied advanced mathematics, physics, and computer science.",
        "Developed problem-solving skills through rigorous coursework.",
        "Participated in various french concours (Mine-Ponts, centrale, CCINP)."

      ],
      current: false
    },








    {
      title: "Classes préparatoires aux grandes écoles (MPSI)",
      company: "Lycée Acharrif al idrissi",
      location: "Taza, Morocco",
      period: "September 2022 – June 2023",
      description: [
        "Studied advanced mathematics, physics, and computer science.",
      ],
      current: false
    },
    {
      title: "Bac Sciences Mathématiques A(option francais)",
      company: "Lycée SALMA ERREGRAGUI",
      location: "Taza, Morocco",
      period: "September 2021 – June 2022",
      description: [
        "Mention : Très bien.",
        "Achieved a high score in mathematics and physics.",
        "Participated in various science fairs and mathematics competitions."
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-green-400 to-blue-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                exp.current ? 'bg-green-400 border-green-400' : 'bg-gray-900 border-blue-500'
              }`}>
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse"></div>
                )}
              </div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">{exp.period}</span>
                    {exp.current && (
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">Current</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-400 font-medium">{exp.company}</span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-400 text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-green-400 mr-2 mt-1.5 w-1 h-1 rounded-full bg-green-400 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
