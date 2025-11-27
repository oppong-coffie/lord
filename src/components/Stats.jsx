import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const Stats = () => {
  const { isDark } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const stats = [
    { label: 'Years Experience', value: 4, suffix: '+' },
    { label: 'Projects Reviewed', value: 15, suffix: '+' },
    { label: 'Articles Published', value: 8, suffix: '' },
    { label: 'Global Conferences', value: 5, suffix: '+' },
  ];

  return (
    <section className={`py-16 text-white relative overflow-hidden transition-colors ${
      isDark ? 'bg-gray-800' : 'bg-deep-teal'
    }`} ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-air-blue">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  <span>0</span>
                )}
              </div>
              <div className="text-sm md:text-base font-medium opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
