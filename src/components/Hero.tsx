
import React, { useEffect, useState } from 'react';
import { Camera, Instagram, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="mb-8">
            <Camera className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-thin mb-6 tracking-wider">
            ALEX
            <span className="block text-yellow-400 font-light">CHEN</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
            Visual Storyteller & Portrait Photographer
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="#gallery"
              className="px-8 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 tracking-wider font-light"
            >
              VIEW WORK
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-yellow-400 text-black hover:bg-transparent hover:text-yellow-400 border border-yellow-400 transition-all duration-300 tracking-wider font-light"
            >
              GET IN TOUCH
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
