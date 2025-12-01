import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Gallery = () => {
  const { isDark } = useTheme();
  
  const images = [
    { src: '/hero4.png', title: 'Setting Example' },
    { src: '/lord1.png', title: 'Advisor' },
    { src: '/lord (2).jpg', title: 'Community' },
    { src: '/hero7.jpg', title: 'Advocacy' },
    { src: '/lord (3).jpg', title: 'Youth Engagement' },
    { src: '/lord (4).jpg', title: 'Data Analysis' },
    { src: '/lord.jpg', title: 'Connectivity' },

  ];

  return (
    <section id="gallery" className={`py-20 transition-colors ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 ${
            isDark ? 'text-air-blue' : 'text-deep-teal'
          }`}>
            <FaLeaf className="text-air-blue" /> Gallery
          </h2>
          <div className="w-24 h-1 bg-air-blue mx-auto"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
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
