import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

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

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)] mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-[var(--color-air-blue)] mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-[var(--color-air-blue)] flex items-start gap-4">
                    <img 
                        src={item.logo} 
                        alt={`${item.school} logo`} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 shrink-0"
                    />
                    <div>
                        <span className="inline-block px-3 py-1 bg-[var(--color-air-blue)] text-white text-sm rounded-full mb-2">
                        {item.date}
                        </span>
                        <h3 className="text-xl font-bold text-[var(--color-deep-teal)] mb-1">
                        {item.degree}
                        </h3>
                        <p className="text-gray-600 font-medium mb-2">{item.school}</p>
                        <p className="text-sm text-gray-500 italic">{item.status}</p>
                    </div>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--color-deep-teal)] rounded-full border-4 border-white flex items-center justify-center z-10">
                  <FaGraduationCap className="text-white text-xs" />
                </div>
                
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
