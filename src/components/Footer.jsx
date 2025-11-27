import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-air-blue mb-4">
<img src="/logo.png" className="w-16 rounded-full h-16" alt="" />            </h2>
            <p className="text-gray-400 mb-6 max-w-sm">
              Bridging the gap between international decisions on climate change and the reality on the ground.
            </p>
            <div className="flex space-x-4">
              {[FaLinkedin, FaTwitter, FaGithub, FaInstagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-air-blue transition-colors duration-300"
                >
                  <Icon className="text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-air-blue transition-colors">About</a></li>
              <li><a href="#vision" className="hover:text-air-blue transition-colors">Vision</a></li>
              <li><a href="#education" className="hover:text-air-blue transition-colors">Education</a></li>
              <li><a href="#gallery" className="hover:text-air-blue transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest updates and articles.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-air-blue"
              />
              <button className="bg-deep-teal hover:bg-air-blue text-white px-4 py-2 rounded transition-colors font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Offei-Darko Lord. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
