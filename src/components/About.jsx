import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            className="md:w-1/2" 
            data-aos="fade-right"
          >
            {/* Placeholder for Image - using a colored div for now */}
            <div className="w-full h-96 bg-[var(--color-air-blue)] rounded-lg shadow-xl flex items-center justify-center text-white text-2xl font-bold">
              Profile Image
            </div>
          </div>
          <div 
            className="md:w-1/2" 
            data-aos="fade-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)] mb-6">
              About Me
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Offei-Darko Lord is a practitioner level environmentalist with interest and experience in the environmental advocacy space. With a solid foundation between the nexus of academia and NGO showcasing both research and advocacy skills, he possesses outstanding writing skills and in depth and extensive knowledge in various ecosystems he has experience with such as socio-environmental governance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              He has considerable experience with multinational corporations, international constitutions, think tank bodies, CSO’s and research institutions such as, Ocean KAN, UNFCC YOUNGO and UNICEF U.S.A. As a certified foundational primer for Agenda 2030’s sustainable development by the United Nations System Staff College (UNSSC), Offei-Darko Lord has spent the last 4 years working to bridge the gap between “international decisions on issues such as climate change with the reality on the ground.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
