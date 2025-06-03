
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Cybersecurity Student";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%20class%3D%22dark%3Afill-white%22%3E%3Cpath%20d%3D%22M20%2020h20v20H20z%22/%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M20%2020h20v20H20z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
              alt="Mohammed TAMIS"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-green-400 shadow-lg shadow-green-400/25"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400/20 to-blue-500/20"></div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Mohammed TAMIS
          </h1>
          <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-mono">
            <span className="text-green-400">$</span> {text}
            {isTyping && <span className="animate-pulse text-green-400">_</span>}
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm a dedicated cybersecurity student with a strong interest in protecting digital assets and building secure systems.  
          Through my studies and practical projects, I've developed a solid understanding of security principles, risk assessment,
          and threat mitigation. I'm eager to apply my knowledge to real-world challenges and contribute to creating safer digital
          environments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-200 shadow-lg shadow-green-500/25">
            View My Work
          </button>
          <button className="px-8 py-3 border border-green-400 text-green-600 dark:text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-200">
            Download CV
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-green-400" />
      </div>
    </section>
  );
};

export default Hero;
