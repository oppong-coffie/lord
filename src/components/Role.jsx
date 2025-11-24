import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

const CurrentRole = () => {
  const role = {
    company: "UrbanBetter",
    position: "Accra Cityzens Hub Coordinator",
    link: "https://cityzens.urbanbetter.science/accra-hub/",
    location: "Accra, Ghana",
    date: "August 2024 – Present",
    responsibilities: [
      "Hub scaling strategy",
      "Grant management (US$50,000+)",
      "Stakeholder mapping and engagement",
      "Network and partnership strategy (CSOs & Government agencies)",
      "Campaign, nurturing and mobilization for 200+ 'Cityzens'",
      "Development of 5+ policy briefs and presentations on urban sustainability",
      "Co-development of citizen science training courses",
      "Data Hub Management",
    ],
  };

  return (
    <section id="current-role" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal flex items-center justify-center gap-3">
            <FaBriefcase className="text-air-blue" />
            Current Role
          </h2>
          <div className="w-24 h-1 bg-air-blue mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Card */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">

          {/* Position + Company */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{role.position}</h3>
              <a 
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-air-blue hover:underline flex items-center gap-2 mt-1"
              >
                {role.company} <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>

          {/* Location + Dates */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-air-blue" />
              <span className="font-medium">{role.location}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <FaCalendarAlt className="text-air-blue" />
              <span className="font-medium">{role.date}</span>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-lg font-semibold text-deep-teal mb-4">Key Responsibilities</h4>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700 leading-relaxed">
              {role.responsibilities.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-2"
                >
                  <span className="text-air-blue mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CurrentRole;
