
import React, { useState, useEffect } from 'react';
import { Camera, Award, Users, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Camera, number: '500+', label: 'Projects Completed' },
    { icon: Award, number: '15+', label: 'Awards Won' },
    { icon: Users, number: '200+', label: 'Happy Clients' },
    { icon: Heart, number: '5', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-black bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-thin mb-6 tracking-wider">
              ABOUT <span className="text-yellow-400">ME</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 font-light leading-relaxed">
              I'm a passionate photographer with over 5 years of experience capturing life's most beautiful moments. 
              My work focuses on creating authentic, emotional connections through the lens.
            </p>
            
            <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
              From intimate portraits to sweeping landscapes, I believe every image should tell a story that resonates 
              with the viewer long after they've looked away.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-light text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400 tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              <div className="aspect-square bg-gray-900 overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Alex Chen - Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-yellow-400 bg-black bg-opacity-80 flex items-center justify-center">
                <Camera className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
