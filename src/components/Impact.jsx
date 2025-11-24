import React from 'react';
import { FaGlobe, FaHandHoldingHeart, FaUsers, FaLeaf } from 'react-icons/fa';

const Impact = () => {
  const impacts = [
    {
      icon: <FaGlobe className="text-4xl text-air-blue" />,
      title: 'Global Policy',
      description: 'Contributed technical foresight strategy to the Global Outlook for Youth and Children 2024 Policy document as a participant of the Global UNICEF Youth Foresight Circle.',
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl text-deep-teal" />,
      title: 'Climate & Health',
      description: 'Serving as Project advisory board member for sustyvibes, reviewing climate change and health projects to ensure impactful outcomes.',
    },
    {
      icon: <FaUsers className="text-4xl text-air-blue" />,
      title: 'Youth Advocacy',
      description: 'Bridging the gap between international decisions and ground reality, serving on several youth project review and institutional committees.',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4 flex items-center justify-center gap-3">
            <FaLeaf className="text-air-blue" /> Impact & Advocacy
          </h2>
          <div className="w-24 h-1 bg-air-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-deep-teal mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
