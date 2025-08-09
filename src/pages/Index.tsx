
import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import ThreeBackground from '../components/ThreeBackground';

const Index = () => {
  return (
    <div>

   
    {/* <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      3D Background
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="bg-black w-full h-full" />}>
          <ThreeBackground />
        </Suspense>
      </div> */}
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
