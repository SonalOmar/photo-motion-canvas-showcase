
import React, { useState, useEffect } from 'react';
import { Camera, Award, Users, Heart } from 'lucide-react';
// import './About.css'
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
    <div
      className="bg-custom min-h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/public/bg.jpg')" }}
    >
      <section id="about" className="py-32 px-6 bg-gray-950 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Content */}
            <div
              className={`lg:col-span-5 transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-extralight mb-4 tracking-[0.1em]">
                  ABOUT
                </h2>
                <h3 className="text-3xl md:text-4xl font-extralight text-yellow-400 tracking-[0.1em]">
                  THE ARTIST
                </h3>
              </div>

              <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                <p>
                  I'm a creative  photographer and visual storyteller
                  with a passion for transforming brands through impactful
                  imagery. Over the past 2+ years, I've worked with clients dealing with leading
                  products delivering high-end
                  product photography, professional image editing, and engaging
                  video content.
                  From volunteering in Ajapa Yog Sansthan where I brought not just
                  technical skills — but creativity, precision, and captured various events .
                </p>

                <p>
                  With a background in commercial photography, video
                  post-production, and graphic design, my mission is to help
                  brands stand out visually and connect meaningfully with their
                  audience. 📍 Based in Kanpur | Available for Hybrid & Remote
                  Projects
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`lg:col-span-7 transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              {/* Stats Grid
            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-8 border border-gray-800 hover:border-yellow-400 transition-all duration-500 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                  <div className="text-3xl font-extralight text-white mb-2 tracking-wider">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 tracking-[0.1em] font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}

              {/* Image Placeholder */}
              {/* <div className="relative">
                <div className="aspect-[3/4] bg-gray-900 overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Alex Chen - Photographer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-yellow-400 bg-black flex items-center justify-center">
                  <Camera className="w-8 h-8 text-yellow-400" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
