
import React, { useState, useEffect } from 'react';

const galleryImages = [
  {
    id: 1,
    src: "images/lifestyle/image1.JPG",
    title: "Urban Living",
    category: "Lifestyle",
    year: "2024",
    shape: "square",
  },
  {
    id: 2,
    src: "images/lifestyle/image2.JPG",
    title: "Golden Hour Hike",
    category: "Lifestyle",
    year: "2024",
    shape: "rectangle",
  },
  {
    id: 3,
    src: "images/lifestyle/image3.JPG",
    title: "Street Vibes",
    category: "Lifestyle",
    year: "2023",
    shape: "square",
  },
  {
    id: 4,
    src: "images/lifestyle/image4.JPG",
    title: "Nature’s Beauty",
    category: "Lifestyle",
    year: "2023",
    shape: "rectangle",
  },
  {
    id: 5,
    src: "images/lifestyle/image5.JPG",
    title: "City Lights",
    category: "Lifestyle",
    year: "2024",
    shape: "landscape",
  },

  {
    id: 8,
    src: "images/lifestyle/image8.JPG",
    title: "Minimal Watch",
    category: "Lifestyle",
    year: "2023",
    shape: "rectangle",
  },
  {
    id: 9,
    src: "images/lifestyle/image9.JPG",
    title: "Minimal Watch",
    category: "Lifestyle",
    year: "2023",
    shape: "square",
  },
  {
    id: 10,
    src: "images/outdoor/image1.JPG",
    title: "Minimal Watch",
    category: "Outdoor",
    year: "2023",
    shape: "landscape",
  },
  {
    id: 6,
    src: "images/lifestyle/image6.JPG",
    title: "Minimal Watch",
    category: "Lifestyle",
    year: "2023",
    shape: "square",
  },
  {
    id: 11,
    src: "images/outdoor/image2.JPG",
    title: "Minimal Watch",
    category: "Outdoor",
    year: "2023",
    shape: "portrait",
  },
  {
    id: 12,
    src: "images/outdoor/image3.JPG",
    title: "Minimal Watch",
    category: "Outdoor",
    year: "2023",
    shape: "rectangle",
  },
  {
    id: 13,
    src: "images/outdoor/image4.png",
    title: "Minimal Watch",
    category: "Outdoor",
    year: "2023",
    shape: "landscape",
  },
  {
    id: 14,
    src: "images/outdoor/image5.JPG",
    title: "Minimal Watch",
    category: "Outdoor",
    year: "2023",
    shape: "square",
  },
  {
    id: 15,
    src: "images/outdoor/image6.JPG",
    title: "Minimal Watch",
    category: "Outdoor",
    year: "2023",
    shape: "landscape",
  },
  {
    id: 16,
    src: "images/outdoor/image7.jpg",
    title: "Minimal Watch",
    category: "Outdoor",
    year: "2023",
    shape: "square",
  },
  {
    id: 17,
    src: "images/outdoor/image8.jpg",
    title: "Minimal Watch",
    category: "Outdoor",
    year: "2023",
    shape: "landscape",
  },
  {
    id: 18,
    src: "images/product/image1.jpg",
    title: "Minimal Watch",
    category: "Product",
    year: "2023",
    shape: "rectangle",
  },
  {
    id: 19,
    src: "images/product/image2.jpg",
    title: "Minimal Watch",
    category: "Product",
    year: "2023",
    shape: "square",
  },
  {
    id: 20,
    src: "images/product/image3.png",
    title: "Minimal Watch",
    category: "Product",
    year: "2023",
    shape: "rectangle",
  },
  {
    id: 21,
    src: "images/product/image4.png",
    title: "Minimal Watch",
    category: "Product",
    year: "2023",
    shape: "square",
  },
  {
    id: 22,
    src: "/images/product/image5.JPG",
    title: "Minimal Watch",
    category: "Product",
    year: "2023",
    shape: "rectangle",
  },

  {
    id: 24,
    src: "images/product/image7.jpg",
    title: "Minimal Watch",
    category: "Product",
    year: "2023",
    shape: "rectangle",
  },
  {
    id: 25,
    src: "images/product/image8.JPG",
    title: "Minimal Watch",
    category: "Product",
    year: "2023",
    shape: "landscape",
  },
  {
    id: 26,
    src: "images/product/image9.JPG",
    title: "Minimal Watch",
    category: "Product",
    year: "2023",
    shape: "square",
  },
];


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const categories = ["All", "Lifestyle", "Outdoor", "Product"];


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
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-extralight mb-4 tracking-[0.1em]"></h2>
              <h3 className="text-3xl md:text-5xl font-extralight text-yellow-400 tracking-[0.1em]">
                WORKS
              </h3>
            </div>
            <p className="text-gray-400 text-lg font-light mt-6 md:mt-0 max-w-md">
              A curated collection of visual stories captured through my lens
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-sm tracking-[0.1em] font-light border transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-yellow-400 text-yellow-400 bg-yellow-400 bg-opacity-10"
                    : "border-gray-700 text-gray-400 hover:border-gray-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative aspect-[4/5] bg-gray-900 overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                hoveredImage === image.id ? 'bg-opacity-60' : 'bg-opacity-0'
              }`}>
                <div className={`absolute bottom-6 left-6 right-6 transform transition-all duration-500 ${
                  hoveredImage === image.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <h3 className="text-white text-xl font-light mb-1 tracking-[0.05em]">
                    {image.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-yellow-400 text-sm tracking-[0.1em]">
                      {image.category}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {image.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>*/}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 px-4">
  {filteredImages.map((image, index) => (
    <div
      key={image.id}
      className="mb-4 break-inside-avoid relative group overflow-hidden rounded-lg"
      onMouseEnter={() => setHoveredImage(image.id)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
        hoveredImage === image.id ? 'bg-opacity-60' : 'bg-opacity-0'
      }`}>
        <div className={`absolute bottom-6 left-6 right-6 transform transition-all duration-500 ${
          hoveredImage === image.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h3 className="text-white text-xl font-light mb-1 tracking-[0.05em]">
            {image.title}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-yellow-400 text-sm tracking-[0.1em]">
              {image.category}
            </p>
            <p className="text-gray-400 text-sm">
              {image.year}
            </p>
          </div>
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
