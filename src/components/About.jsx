import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Side - Portrait Look */}
          <div className="w-full md:w-1/2 relative flex justify-center" data-aos="fade-right">
            {/* Organic Background Blobs */}
            <div className="absolute w-80 h-80 bg-deep-teal/5 rounded-full blur-3xl -z-10 translate-x-12 translate-y-12"></div>
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img 
                src="/hero6.png" 
                alt="Offei-Darko Lord" 
                className="w-full max-w-md drop-shadow-2xl object-contain"
              />
            </motion.div>
          </div>

          {/* Content Side - Enhanced Typography */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-air-blue/10 rounded-full text-deep-teal font-bold text-sm mb-6">
              <FaLeaf /> 
              <span>ABOUT ME</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Bridging Science & <span className="text-transparent bg-clip-text bg-linear-to-r from-deep-teal to-air-blue">Community Action</span>
            </h2>

            <div className="space-y-6 text-gray-600">
              <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed border-l-4 border-air-blue pl-6">
                I am an <span className="font-semibold text-deep-teal">Environmentalist, Researcher, and Advocate</span> dedicated to creating sustainable solutions for our planet.
              </p>
              
              <p className="text-lg leading-relaxed">
                With a strong foundation in <span className="font-semibold text-deep-teal">Biological Sciences</span> and ongoing advanced studies in <span className="font-semibold text-deep-teal">Environmental Science</span> and <span className="font-semibold text-deep-teal">International Relations</span>, I approach global challenges with a multidisciplinary lens.
              </p>
              
              <p className="text-lg leading-relaxed">
                My work focuses on <span className="font-semibold text-deep-teal">Climate Change, Public Health, and Youth Empowerment</span>. I believe in the power of data-driven advocacy to drive policy change and improve livelihoods in vulnerable communities.
              </p>
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
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
                <h3 className="text-xl font-bold text-deep-teal mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
