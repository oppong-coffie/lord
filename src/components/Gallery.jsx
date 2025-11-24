import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: 'https://placehold.co/600x400/72A0C1/white?text=Field+Work', title: 'Field Work' },
    { src: 'https://placehold.co/400x600/006D77/white?text=Conference', title: 'Conference' },
    { src: 'https://placehold.co/600x400/72A0C1/white?text=Advocacy', title: 'Advocacy' },
    { src: 'https://placehold.co/400x600/006D77/white?text=Research', title: 'Research' },
    { src: 'https://placehold.co/600x400/72A0C1/white?text=Community', title: 'Community' },
    { src: 'https://placehold.co/400x600/006D77/white?text=Youth', title: 'Youth Engagement' },
    { src: 'https://placehold.co/600x400/72A0C1/white?text=Analysis', title: 'Data Analysis' },
    { src: 'https://placehold.co/400x600/006D77/white?text=Presentation', title: 'Presentation' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4 flex items-center justify-center gap-3">
            <FaLeaf className="text-air-blue" /> Gallery
          </h2>
          <div className="w-24 h-1 bg-air-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Capturing moments from field work, conferences, and advocacy events.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-lg aspect-square"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.2 
              }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-sm font-bold">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
