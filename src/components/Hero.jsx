import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-deep-teal)] to-[var(--color-air-blue)] text-white">
      <div className="text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl mb-4 font-light"
        >
          Hello, I am
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Offei-Darko Lord
        </motion.h1>
        <div className="text-2xl md:text-4xl font-semibold mb-8 h-20">
          <Typewriter
            options={{
              strings: ['Environmentalist', 'Researcher', 'Advocate'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[var(--color-deep-teal)] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
