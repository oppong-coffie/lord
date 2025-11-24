import React from 'react';
import { FaLeaf, FaLightbulb, FaUsers, FaGlobe, FaHandHoldingHeart, FaQuoteLeft } from 'react-icons/fa';

const Vision = () => {
  const cards = [
    {
      icon: <FaLightbulb />,
      title: "Innovation & Synthesis",
      desc: "Noted for innovative approaches and solutions, rapidly synthesizing disparate data into coherent strategies."
    },
    {
      icon: <FaUsers />,
      title: "Leadership & Impact",
      desc: "Serving on youth project review boards and contributing technical foresight strategies to global policy documents."
    },
    {
      icon: <FaGlobe />,
      title: "Global Advocacy",
      desc: "Bridging the gap between international climate decisions and the reality on the ground for vulnerable communities."
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Community Action",
      desc: "Empowering youth and local communities to take ownership of their environmental future."
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4 flex items-center justify-center gap-3">
            <FaLeaf className="text-air-blue" /> Vision
          </h2>
          <div className="w-24 h-1 bg-air-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Driven by a passion for sustainability and social justice, I strive to create lasting impact through innovation and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-air-blue"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl text-deep-teal mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Redesigned Core Philosophy Section */}
        <div className="mt-20 relative rounded-3xl overflow-hidden bg-deep-teal text-white shadow-2xl" data-aos="zoom-in">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 opacity-10 pointer-events-none">
             <FaQuoteLeft className="text-xl absolute -top-10 -left-10 transform -rotate-12" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-air-blue rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-6 text-center">
            <h3 className="text-blue-100 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">My Core Philosophy</h3>
            <p className="text-2xl md:text-xl font-serif italic leading-relaxed max-w-4xl mx-auto text-air-blue">
              "True progress is achieved when we harmonize scientific innovation with indigenous knowledge and community needs. We must not only study the world but actively work to heal it."
            </p>
            <div className="w-24 h-1 bg-air-blue mx-auto mt-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
