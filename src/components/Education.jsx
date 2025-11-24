import React from 'react';
import { FaGraduationCap, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      date: '01/2027',
      degree: 'Msc. International Relations',
      school: 'University of East London – London, UK',
      status: 'Upcoming',
      logo: 'https://placehold.co/100x100/72A0C1/white?text=UEL',
    },
    {
      date: '12/2025',
      degree: 'MPhil. Environmental Science',
      school: 'University of Ghana – Legon, Accra',
      status: 'Awaiting Graduation',
      logo: 'https://placehold.co/100x100/006D77/white?text=UG',
    },
    {
      date: '07/2022',
      degree: 'Bsc. Biological Sciences: Biology Major',
      school: 'University of Ghana – Legon, Accra',
      status: 'Completed',
      logo: 'https://placehold.co/100x100/006D77/white?text=UG',
    },
    {
      date: '07/2022',
      degree: 'Program Diploma in Professional Career Skills',
      school: 'International Business Management Institute (IBMI) – Berlin, Germany',
      status: 'Completed',
      logo: 'https://placehold.co/100x100/72A0C1/white?text=IBMI',
    },
  ];

  // Generate random particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-air-blue/10 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4 flex items-center justify-center gap-3">
            <FaLeaf className="text-air-blue" /> Education
          </h2>
          <div className="w-24 h-1 bg-air-blue mx-auto"></div>
        </div>

        <div className="relative border-l-4 border-air-blue ml-4 md:ml-8 space-y-12">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="relative pl-8 md:pl-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-2 w-6 h-6 bg-air-blue rounded-full border-4 border-white shadow-md"></div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                {/* School Logo */}
                <div className="shrink-0">
                  <img src={item.logo} alt={item.school} className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" />
                </div>

                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-deep-teal text-white text-xs font-bold rounded-full mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.degree}</h3>
                  <h4 className="text-lg text-deep-teal font-medium mb-2 flex items-center gap-2">
                    <FaGraduationCap /> {item.school}
                  </h4>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                    item.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : item.status === 'Upcoming'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
