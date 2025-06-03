
import { Mail, MapPin, Link as LinkIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm always interested in discussing cybersecurity opportunities, 
              collaborating on security projects, or sharing knowledge about the latest 
              security trends and threats.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-300">mohammedtamis0@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-300">INPT, Rabat</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <LinkIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">LinkedIn</div>
                  <div className="text-gray-300">linkedin.com/in/mohammedtamis</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-200 shadow-lg shadow-green-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2025 Mohammed TAMIS. Built with passion for cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
