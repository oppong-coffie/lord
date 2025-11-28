import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Education', href: '#education' },
    { name: 'Awards', href: '#awards' },
    { name: 'Publications', href: '#publications' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-md shadow-sm transition-colors ${
      isDark ? 'bg-gray-900/90 hover:bg-gray-900/95' : 'bg-white/80 hover:bg-white/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="bg-white rounded-full">
            <a href="#" className="">
              <img src="/logo.png" alt="Lord Logo" className="h-13 m-1 rounded-full" />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1, color: 'var(--color-air-blue)' }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isDark ? 'text-gray-200' : 'text-deep-teal'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'bg-yellow-400 text-gray-900' : 'bg-deep-teal text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Button - Mobile */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'bg-yellow-400 text-gray-900' : 'bg-deep-teal text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isDark ? 'text-gray-200 hover:text-air-blue' : 'text-deep-teal hover:text-air-blue'}`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isDark ? 'text-gray-200 hover:text-air-blue hover:bg-gray-800' : 'text-deep-teal hover:text-air-blue hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
