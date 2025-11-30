import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration
      // IMPORTANT: You need to set up EmailJS account and replace these values
      const serviceId = 'service_vl1feyj'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
        to_email: 'lordoffeidarko@gmail.com'
      };

  

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24-48 hours.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email me directly at lordoffeidarko@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className={`py-20 transition-colors ${
      isDark ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 ${
            isDark ? 'text-air-blue' : 'text-deep-teal'
          }`}>
            <FaLeaf className="text-air-blue" /> Get in Touch
          </h2>
          <div className="w-24 h-1 bg-air-blue mx-auto"></div>
          <p className={`mt-4 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Interested in collaboration or have a question? Send me a message.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto rounded-2xl shadow-xl overflow-hidden ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`} data-aos="zoom-in">
          <div className="p-8 md:p-12">
            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  status.type === 'success'
                    ? isDark
                      ? 'bg-green-900/30 border border-green-700 text-green-300'
                      : 'bg-green-50 border border-green-200 text-green-800'
                    : isDark
                      ? 'bg-red-900/30 border border-red-700 text-red-300'
                      : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {status.type === 'success' ? (
                  <FaCheckCircle className="text-xl shrink-0" />
                ) : (
                  <FaExclamationCircle className="text-xl shrink-0" />
                )}
                <p className="text-sm">{status.message}</p>
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-air-blue focus:border-transparent outline-none transition-all ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-air-blue focus:border-transparent outline-none transition-all ${
                      isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>Subject</label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-air-blue focus:border-transparent outline-none transition-all ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-air-blue focus:border-transparent outline-none transition-all ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full bg-linear-to-r from-deep-teal to-air-blue text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>

            {/* Direct Email Link */}
            <div className={`mt-6 pt-6 border-t text-center text-sm ${
              isDark ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'
            }`}>
              Or email me directly at{' '}
              <a 
                href="mailto:lordoffeidarko@gmail.com"
                className={`font-semibold hover:underline ${
                  isDark ? 'text-air-blue' : 'text-deep-teal'
                }`}
              >
                lordoffeidarko@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
