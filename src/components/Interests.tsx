
import { GamepadIcon, Code, BookOpen, Globe, Zap, Users, Trophy, Coffee } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      title: "Ethical Hacking",
      description: "Participating in CTF competitions and bug bounty programs",
      icon: Zap,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Open Source",
      description: "Contributing to cybersecurity tools and projects",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Gaming",
      description: "Strategy games and cyberpunk-themed adventures",
      icon: GamepadIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Learning",
      description: "Reading security research papers and threat intelligence",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Travel",
      description: "Exploring different cultures and attending security conferences",
      icon: Globe,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Community",
      description: "Engaging with cybersecurity communities and collaborating with peers",
      icon: Users,
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Competitions",
      description: "Hackathons, cybersecurity challenges, and tech competitions",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Tea & Code",
      description: "Late-night coding sessions with quality tea",
      icon: Coffee,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="interests" className="py-20 px-6 bg-gray-100 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Interests & Hobbies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Beyond cybersecurity, here are the passions that drive my creativity and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105 group shadow-sm"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${interest.color} mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{interest.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{interest.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
