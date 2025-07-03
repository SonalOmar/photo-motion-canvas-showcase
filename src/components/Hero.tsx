
import React, { useEffect, useState } from 'react';
import { Camera, Instagram, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className={`transition-all duration-1500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl font-extralight mb-4 tracking-[0.2em] leading-none">
              ALEX
            </h1>
            <h2 className="text-4xl md:text-6xl font-extralight text-yellow-400 tracking-[0.15em] mb-8">
              CHEN
            </h2>
          </div>
          
          <div className="space-y-4 mb-16">
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-[0.1em]">
              VISUAL STORYTELLER
            </p>
            <p className="text-lg md:text-xl text-gray-500 font-light tracking-[0.05em]">
              PORTRAIT PHOTOGRAPHER
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
            <a
              href="#gallery"
              className="group relative px-12 py-4 border border-gray-600 text-gray-300 hover:text-white transition-all duration-500 tracking-[0.1em] font-light text-sm overflow-hidden"
            >
              <span className="relative z-10">VIEW PORTFOLIO</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </a>
            <a
              href="#contact"
              className="group relative px-12 py-4 bg-yellow-400 text-black hover:bg-transparent hover:text-yellow-400 border border-yellow-400 transition-all duration-500 tracking-[0.1em] font-light text-sm"
            >
              GET IN TOUCH
            </a>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <a href="#gallery" className="flex flex-col items-center text-gray-500 hover:text-yellow-400 transition-colors duration-300">
          <span className="text-xs tracking-[0.2em] mb-2">SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
