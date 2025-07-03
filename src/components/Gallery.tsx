
import React, { useState, useEffect } from 'react';

const galleryImages = [
  {
    id: 1,
    src: '/placeholder.svg',
    title: 'Urban Portrait',
    category: 'Portrait'
  },
  {
    id: 2,
    src: '/placeholder.svg',
    title: 'Golden Hour',
    category: 'Landscape'
  },
  {
    id: 3,
    src: '/placeholder.svg',
    title: 'Street Life',
    category: 'Street'
  },
  {
    id: 4,
    src: '/placeholder.svg',
    title: 'Nature\'s Beauty',
    category: 'Nature'
  },
  {
    id: 5,
    src: '/placeholder.svg',
    title: 'City Lights',
    category: 'Urban'
  },
  {
    id: 6,
    src: '/placeholder.svg',
    title: 'Emotional Depth',
    category: 'Portrait'
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const categories = ['All', 'Portrait', 'Landscape', 'Street', 'Nature', 'Urban'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => observer.disconnect();
  }, []);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-6xl font-thin mb-4 tracking-wider">
            MY <span className="text-yellow-400">WORK</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            A collection of moments captured through my lens
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center mb-12 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-2 mb-2 px-6 py-2 border transition-all duration-300 tracking-wider font-light ${
                selectedCategory === category
                  ? 'border-yellow-400 text-yellow-400'
                  : 'border-gray-600 text-gray-400 hover:border-yellow-400 hover:text-yellow-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden aspect-square bg-gray-900 transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-light text-white mb-2">{image.title}</h3>
                  <p className="text-yellow-400 text-sm tracking-wider">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
