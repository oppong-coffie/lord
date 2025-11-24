import React from "react";
import { FaAward, FaLink } from "react-icons/fa";

const awards = [
  {
    year: "2023",
    title:
      "Global Undergraduate Award – Highly Commended Thesis in Earth & Environmental Sciences",
    link: "https://undergraduateawards.com/winners/highly-commended-2023",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep-teal flex items-center justify-center gap-3">
            <FaAward className="text-air-blue" />
            Meritorious Awards
          </h2>
          <div className="w-20 h-1 bg-air-blue mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition shadow-sm"
            >
              <div className="flex items-start gap-4">
                <FaAward className="text-2xl text-gold-500 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {award.title}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-gray-600 text-sm">
                    <span>{award.year}</span>
                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-air-blue hover:underline flex items-center gap-1"
                      >
                        <FaLink /> View Award
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
