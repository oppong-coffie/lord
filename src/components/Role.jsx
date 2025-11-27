import React from "react";
import { FaBriefcase } from "react-icons/fa";

const CurrentRole = () => {
  return (
    <section id="current-role" className="py-20 bg-deep-teal">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-12 animate-fadeIn">
          <FaBriefcase className="text-white text-4xl mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold text-white">Current Role</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 animate-slideUp">
          <h3 className="text-2xl font-bold text-white mb-2">
            Accra Cityzens Hub Coordinator
          </h3>
          <a 
            href="https://cityzens.urbanbetter.science/accra-hub/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white underline mb-4 inline-block"
          >
            UrbanBetter
          </a>
          
          <p className="text-white/80 mb-6">📍 Accra, Ghana • 📅 August 2024 – Present</p>

          <ul className="space-y-2 text-white/90">
            <li className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>• Hub scaling & grant management (US$50,000+)</li>
            <li className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>• Stakeholder engagement & partnership strategy</li>
            <li className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>• Mobilization for 200+ Cityzens</li>
            <li className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>• Policy briefs & citizen science training</li>
          </ul>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default CurrentRole;
