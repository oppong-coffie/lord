import React, { useEffect } from "react";
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaExternalLinkAlt 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

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

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <section id="current-role" className="py-24 bg-gradient-to-br from-white via-blue-50/40 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-100">
              <FaBriefcase className="text-air-blue text-3xl" />
            </div>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Current Role
          </h2>
          <p className="text-gray-600 mt-2">
            Professional experience & responsibilities
          </p>
        </div>

        {/* Modern Card */}
        <div className="
          bg-white/70 backdrop-blur-xl 
          rounded-3xl shadow-xl border border-gray-200 
          p-10 transition-all duration-300
          hover:shadow-2xl hover:scale-[1.01]
        ">

          {/* Position + Company */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                {role.position}
              </h3>

              <a 
                href={role.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-air-blue flex items-center gap-2 mt-2 font-medium hover:underline"
              >
                {role.company}
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="p-2 bg-blue-100 text-air-blue rounded-xl">
                <FaMapMarkerAlt />
              </div>
              <span className="font-medium">{role.location}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <div className="p-2 bg-blue-100 text-air-blue rounded-xl">
                <FaCalendarAlt />
              </div>
              <span className="font-medium">{role.date}</span>
            </div>
          </div>

          {/* Responsibilities */}
          <h4 className="text-xl font-semibold text-gray-900 mb-5">
            Key Responsibilities
          </h4>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 leading-relaxed">
            {role.responsibilities.map((item, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 bg-blue-50/40 p-3 rounded-xl border border-blue-100"
                data-aos="fade-up"
                data-aos-delay={index * 100} // staggered animation
              >
                <span className="text-air-blue text-xl mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default CurrentRole;
