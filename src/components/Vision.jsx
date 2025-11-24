import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)] mb-4">
            Vision & Drive
          </h2>
          <div className="w-24 h-1 bg-[var(--color-air-blue)] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--color-air-blue)]"
            data-aos="zoom-in-right"
          >
            <h3 className="text-2xl font-bold text-[var(--color-deep-teal)] mb-4">Innovation & Synthesis</h3>
            <p className="text-gray-700 leading-relaxed">
              Offei-Darko Lord is noted for innovative approaches and solutions as well as the ability to rapidly synthesize disparate data and information sets into coherent documents.
            </p>
          </div>

          <div 
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--color-deep-teal)]"
            data-aos="zoom-in-left"
          >
            <h3 className="text-2xl font-bold text-[var(--color-deep-teal)] mb-4">Leadership & Impact</h3>
            <p className="text-gray-700 leading-relaxed">
              In recognition of his vision and drive, he has been serving on several youth project review and institutional committees/boards. He is the Project advisory board member for sustyvibes reviewing climate change and health projects and has further contributed a technical foresight strategy to the Global Outlook for Youth and Children 2024 Policy document as a participant of the Global UNICEF Youth Foresight Circle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
