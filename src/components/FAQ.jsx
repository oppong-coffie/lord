import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const FAQ = () => {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your primary focus in environmental advocacy?",
      answer: "My work centers on climate change mitigation, public health, and youth empowerment. I focus on creating data-driven solutions that address environmental challenges while improving livelihoods in vulnerable communities, particularly in Ghana and across Africa."
    },
    {
      question: "How can I get involved in your environmental initiatives?",
      answer: "There are several ways to get involved! You can join community clean-up events, participate in awareness campaigns, collaborate on research projects, or volunteer with the Accra Cityzens Hub. Feel free to reach out through the contact form to discuss specific opportunities that align with your interests and skills."
    },
    {
      question: "What qualifications do you have in environmental science?",
      answer: "I hold a Bachelor's degree in Biological Sciences and am currently pursuing advanced studies in Environmental Science and International Relations. This multidisciplinary background allows me to approach environmental challenges from both scientific and policy perspectives."
    },
    {
      question: "Do you offer mentorship or speaking engagements?",
      answer: "Yes! I'm passionate about empowering the next generation of environmental leaders. I offer mentorship programs for young environmentalists and am available for speaking engagements at conferences, universities, and community events. Contact me to discuss your specific needs."
    },
    {
      question: "What is the Accra Cityzens Hub?",
      answer: "The Accra Cityzens Hub is part of the UrbanBetter initiative, where I serve as Coordinator. We work on urban sustainability projects, community engagement, and creating citizen-led solutions for environmental challenges in Accra, Ghana. The hub brings together researchers, activists, and community members to drive positive change."
    },
    {
      question: "How do you incorporate research into your advocacy work?",
      answer: "I believe in evidence-based advocacy. My approach involves conducting thorough research, analyzing data, and using scientific findings to inform policy recommendations and community interventions. This ensures that our initiatives are grounded in solid evidence and have measurable impacts."
    },
    {
      question: "Can I collaborate with you on a research project?",
      answer: "Absolutely! I'm always open to collaborative research opportunities, especially those focused on climate change, environmental health, or sustainable development in Africa. Please reach out with details about your project, and we can explore potential partnerships."
    },
    {
      question: "What are your future goals in environmental advocacy?",
      answer: "My long-term vision is to bridge the gap between scientific research and policy implementation, ensuring that environmental solutions are both scientifically sound and culturally appropriate. I aim to expand youth engagement programs, influence climate policy at national and international levels, and continue building sustainable communities across Africa."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`py-20 transition-colors ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm mb-6 ${
            isDark ? 'bg-air-blue/20 text-air-blue' : 'bg-air-blue/10 text-deep-teal'
          }`}>
            <FaQuestionCircle />
            <span>FAQ</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Frequently Asked Questions
          </h2>
          
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Find answers to common questions about my work, background, and how we can collaborate.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-air-blue/50' 
                  : 'bg-gray-50 border-gray-200 hover:border-deep-teal/50'
              } ${openIndex === index ? (isDark ? 'shadow-lg shadow-air-blue/10' : 'shadow-lg shadow-deep-teal/10') : ''}`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-opacity-80"
              >
                <span className={`font-semibold text-lg pr-8 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {faq.question}
                </span>
                
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`shrink-0 ${
                    isDark ? 'text-air-blue' : 'text-deep-teal'
                  }`}
                >
                  <FaChevronDown size={20} />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-5 pt-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className={`border-l-4 pl-4 ${
                        isDark ? 'border-air-blue' : 'border-deep-teal'
                      }`}>
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Still have questions?
          </p>
          <a
            href="#contact"
            className={`inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-air-blue text-white hover:bg-air-blue/90 shadow-lg shadow-air-blue/30' 
                : 'bg-deep-teal text-white hover:bg-deep-teal/90 shadow-lg shadow-deep-teal/30'
            }`}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
