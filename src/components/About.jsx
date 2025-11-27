import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="about" className={`py-20 overflow-hidden transition-colors ${
      isDark ? 'bg-black' : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Side - Portrait Look */}
 <div className="relative flex justify-center py-10">
  {/* Floating background accents - only in light mode */}
  {!isDark && (
    <>
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 left-10 w-44 h-44 bg-amber-300/40 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 right-10 w-52 h-52 bg-emerald-300/40 blur-[80px] rounded-full"
      ></motion.div>
    </>
  )}

  {/* Main card with hover animations - conditional styling */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={!isDark ? { scale: 1.04, rotate: 0.8 } : {}}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={isDark ? "relative z-10" : `
      relative z-10
      rounded-3xl p-3
      bg-white/40 backdrop-blur-xl
      border border-white/50
      shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
      transition-all duration-500
      group
    `}
  >
    {/* Glow Border Animation - only in light mode */}
    {!isDark && (
      <div
        className="
          absolute inset-0 rounded-3xl pointer-events-none
          bg-gradient-to-br from-amber-300/30 to-emerald-300/30
          blur-[6px] opacity-70
          group-hover:opacity-90 transition-opacity duration-500
        "
      ></div>
    )}

    {/* Image container - conditional styling */}
    <div className={isDark ? "relative" : "rounded-2xl overflow-hidden border border-neutral-200 shadow-xl relative"}>
      <motion.img
        src={isDark ? "/hero3.png" : "/hero1.png"}
        alt="Featured Image"
        className="w-full max-w-md object-cover"
        initial={{ scale: 1.05 }}
        whileHover={{ scale: 1.13 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Subtle bottom fade - only in light mode */}
      {!isDark && (
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
      )}
    </div>
  </motion.div>

  {/* Floating floor shadow - only in light mode */}
  {!isDark && (
    <div className="absolute bottom-2 w-60 h-10 bg-black/20 blur-2xl rounded-full opacity-50"></div>
  )}
</div>



          {/* Content Side - Enhanced Typography */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm mb-6 ${
              isDark ? 'bg-air-blue/20 text-air-blue' : 'bg-air-blue/10 text-deep-teal'
            }`}>
              <FaLeaf /> 
              <span>ABOUT ME</span>
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Bridging Science & <span className="text-transparent bg-clip-text bg-linear-to-r from-deep-teal to-air-blue">Community Action</span>
            </h2>

            <div className={`space-y-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className={`text-xl md:text-2xl font-light leading-relaxed border-l-4 border-air-blue pl-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                I am an <span className={`font-semibold ${isDark ? 'text-air-blue' : 'text-deep-teal'}`}>Environmentalist, Researcher, and Advocate</span> dedicated to creating sustainable solutions for our planet.
              </p>
              
              <p className="text-lg leading-relaxed">
                With a strong foundation in <span className={`font-semibold ${isDark ? 'text-air-blue' : 'text-deep-teal'}`}>Biological Sciences</span> and ongoing advanced studies in <span className={`font-semibold ${isDark ? 'text-air-blue' : 'text-deep-teal'}`}>Environmental Science</span> and <span className={`font-semibold ${isDark ? 'text-air-blue' : 'text-deep-teal'}`}>International Relations</span>, I approach global challenges with a multidisciplinary lens.
              </p>
              
              <p className="text-lg leading-relaxed">
                My work focuses on <span className={`font-semibold ${isDark ? 'text-air-blue' : 'text-deep-teal'}`}>Climate Change, Public Health, and Youth Empowerment</span>. I believe in the power of data-driven advocacy to drive policy change and improve livelihoods in vulnerable communities.
              </p>
            </div>
          </div>
        </div>

        {/* Current Role Section */}
        <div className={`mt-16 rounded-2xl p-8 shadow-xl ${
          isDark ? 'bg-gray-800' : 'bg-deep-teal'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-sm font-semibold mb-2">CURRENT ROLE</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Accra Cityzens Hub Coordinator
              </h3>
              <a 
                href="https://cityzens.urbanbetter.science/accra-hub/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white underline font-medium"
              >
                UrbanBetter
              </a>
            </div>
            <div className="text-white/80 text-center md:text-right">
              <p className="mb-1">📍 Accra, Ghana</p>
              <p>📅 August 2024 – Present</p>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Global Advocacy",
              emoji: "🌍",
              desc: "Representing youth voices on international platforms.",
              img: "/23.jpg"
            },
            {
              title: "Community Action",
              emoji: "🌱",
              desc: "Hands-on work with local communities for sustainable change.",
              img: "/112.jpg"
            },
            {
              title: "Research & Data",
              emoji: "📊",
              desc: "Evidence-based approaches to environmental challenges.",
              img: "/48.jpg"
            },
            {
              title: "Mentorship",
              emoji: "🤝",
              desc: "Empowering the next generation of changemakers.",
              img: "/58.jpg"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-tl-xl text-2xl shadow-sm">
                  {item.emoji}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-air-blue' : 'text-deep-teal'
                }`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
