import React from 'react';
import { FaGlobe, FaHandHoldingHeart, FaUsers, FaLeaf } from 'react-icons/fa';

const Impact = () => {
  const impacts = [
    {
      img: '/51.jpg',
      icon: <FaGlobe className="text-4xl text-air-blue" />,
      title: 'Global Policy',
      description:
        'Contributed technical foresight strategy to the Global Outlook for Youth and Children 2024 Policy document as a participant of the Global UNICEF Youth Foresight Circle.',
    },
    {
      img: '/23.jpg',
      icon: <FaHandHoldingHeart className="text-4xl text-deep-teal" />,
      title: 'Climate & Health',
      description:
        'Serving as Project advisory board member for sustyvibes, reviewing climate change and health projects to ensure impactful outcomes.',
    },
    {
      img: '/272.jpg',
      icon: <FaUsers className="text-4xl text-air-blue" />,
      title: 'Youth Advocacy',
      description:
        'Bridging the gap between international decisions and ground reality, serving on several youth project review and institutional committees.',
    },
  ];

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-teal mb-4 flex items-center justify-center gap-3">
            <FaLeaf className="text-air-blue" /> 
            Impact & Advocacy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A snapshot of contributions made toward global development, policy innovation, and youth empowerment.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-air-blue to-deep-teal mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {impacts.map((item, index) => (
            <div
              key={index}
              className="group bg-deep-teal border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt="Impact"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-2">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                  <div className="rounded-full group-hover:bg-gray-200 transition-all">
                    {item.icon}
                  </div>
                  
                </div>

               

                <p className="text-gray-200 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-air-blue to-deep-teal opacity-70"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
