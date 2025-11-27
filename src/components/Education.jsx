import React from "react";
import { FaGraduationCap, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext';

const Education = () => {
  const { isDark } = useTheme();
  
  const educationData = [
    {
      date: "01/2027",
      degree: "MSc. International Relations",
      school: "University of East London – London, UK",
      status: "Upcoming",
      logo: "/london.jpg",
    },
    {
      date: "12/2025",
      degree: "MPhil. Environmental Science",
      school: "University of Ghana – Legon, Accra",
      status: "Awaiting Graduation",
      logo: "/ug.jpg",
    },
    {
      date: "07/2022",
      degree: "BSc. Biological Sciences (Biology Major)",
      school: "University of Ghana – Legon, Accra",
      status: "Completed",
      logo: "/ug.jpg",
    },
    {
      date: "07/2022",
      degree: "Diploma in Professional Career Skills",
      school: "IBMI – Berlin, Germany",
      status: "Completed",
      logo: "ib.png",
    },
  ];

  return (
    <section id="education" className={`py-24 relative overflow-hidden transition-colors ${
      isDark ? 'bg-black' : 'bg-gradient-to-b from-white to-gray-50'
    }`}>

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-air-blue/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-deep-teal/20 blur-[130px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-extrabold flex justify-center items-center gap-4 ${
            isDark ? 'text-air-blue' : 'text-deep-teal'
          }`}>
            <FaLeaf className="text-air-blue" /> Education
          </h2>
          <p className={`mt-4 text-lg max-w-xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A refined look at my academic achievements, milestones, and professional training.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-air-blue to-deep-teal mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-6 md:ml-12">
          
          {/* Vertical Line */}
          <div className="absolute left-2 top-0 w-1 bg-gradient-to-b from-air-blue to-deep-teal rounded-full h-full opacity-50"></div>
          
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex gap-6 md:gap-10"
              >
                
                {/* Timeline Node */}
                <div className="absolute -left-6 top-4">
                  <div className="w-6 h-6 bg-white border-4 border-air-blue rounded-full shadow-lg"></div>
                </div>

                {/* Logo */}
                <img 
                  src={item.logo} 
                  alt={item.school}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-md object-cover border border-gray-200 bg-white/60 backdrop-blur-sm md:mt-7"
                />

                {/* Content Card */}
                <div className={`flex-1 backdrop-blur-xl border rounded-2xl shadow-sm hover:shadow-xl p-6 md:p-7 transition-all duration-300 ${
                  isDark ? 'bg-gray-800/70 border-gray-700' : 'bg-white/70 border-gray-200'
                }`}>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-air-blue text-white text-xs font-semibold rounded-full shadow">
                      {item.date}
                    </span>

                    {/* Status */}
                    <span
                      className={`
                        text-xs px-3 py-1 rounded-full font-semibold shadow 
                        ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Upcoming"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                      `}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className={`text-xl md:text-2xl font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.degree}
                  </h3>

                  <h4 className={`flex items-center gap-2 text-lg mb-2 ${
                    isDark ? 'text-air-blue' : 'text-deep-teal'
                  }`}>
                    <FaGraduationCap className="text-air-blue" /> {item.school}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
