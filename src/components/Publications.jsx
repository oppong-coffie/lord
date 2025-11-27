import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBook, 
  FaFileAlt, 
  FaUsers, 
  FaLink, 
  FaNewspaper, 
  FaBookOpen, 
  FaMicrophone 
} from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';

const Publications = () => {
  const { isDark } = useTheme();
  
  const tabs = [
    { name: "Peer-Reviewed Journals", icon: <FaBookOpen /> },
    { name: "Consultancy & Reports", icon: <FaNewspaper /> },
    { name: "Conference Proceedings", icon: <FaMicrophone /> }
  ];
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    // A. Peer-Reviewed Journals
    [
      {
        title:
          "Building Bridges for Ocean Sustainability: The Evolution and Impact of the Early Career Ocean Professional (ECOP) Programme.",
        authors:
          "Roman, R., Kostianaia, E., Bowes, A., Satterthwaite, E., Savage, C., Ilosvay, X. E. E., Offei-Darko, L. ... & Nwajiaku, L.",
        year: "2024",
        journal: "Marine Technology Society Journal, 58(1-2), 8-14.",
        link: "https://doi.org/10.4031/MTSJ.58.1.4",
      },
      {
        title:
          "Lobbying strategies for climate-affected farmers in rural communities in Ghana.",
        authors:
          "Offei-Darko L., Von Vordzogbe, V., Akwei, A. J. N., Adotey, W. A., Osei, S., Ofori, V., Aboagye, M., ... & Audrey, B. A.",
        year: "2024",
        journal:
          "Multidisciplinary Adaptive Climate Insights, 1(2), 40-45.",
        link: "https://dx.doi.org/10.21622/MACI.2024.01.2.1026",
      },
      {
        title:
          "The Role of the Ghana National Youth Policy in Promoting Youth Climate Justice Amidst Systematic Challenges.",
        authors: "Offei-Darko L.",
        year: "2025",
        journal:
          "Int. J. Sci. Res. in Multidisciplinary Studies, Vol.11, Issue.1, pp.01-04.",
        link: "https://www.isroset.org/journal/IJSRMS/full_paper_view.php?paper_id=3779",
      },
      {
        title: "A Rapid Literature Review of Climate Financing for Youths in Sub-Saharan Africa.",
        authors: "Offei-Darko, L., & Gandonou, N.",
        year: "2025",
        journal:
          "African Journal of Climate Change and Resource Sustainability, 4(1), 295-303.",
        link: "https://doi.org/10.37284/ajccrs.4.1.3014",
      },
      {
        title:
          "IUCN Red List of Ecosystems, Sandy Beaches/Dunes of West African Transition.",
        authors:
          "Appeaning Addo, K., Jayson-Quashigah, P-N., ... Offei-Darko, L., & S.G. McGregor.",
        year: "2025",
        journal: "International Union for Conservation of Nature (IUCN)",
        link: "https://doi.org/10.32942/X2B93Z",
      },
      {
        title:
          "IUCN Red List of Ecosystems, Sandy Beaches/Dunes of the Gulf of Guinea North.",
        authors:
          "Appeaning Addo, K., Jayson-Quashigah, P-N., ... Offei-Darko, L., & S.G. McGregor.",
        year: "2025",
        journal: "International Union for Conservation of Nature (IUCN)",
        link: "https://doi.org/10.32942/X26G9Q",
      },
      {
        title:
          "Early career ocean professionals’ declaration on Ocean Negative Carbon Emissions for our ocean and future.",
        authors:
          "Li, S., Addey, C.I., Roman, R., ... Offei-Darko, L., et al.",
        year: "2025",
        journal: "The Innovation",
        link: "https://doi.org/10.1016/j.xinn.2025.101007",
      },
    ],

    // B. Consultancy & Reports
    [
      {
        title: "Youth Delegate Impact Communique Report.",
        authors:
          "YOUNGA (Lead drafter: Offei-Darko, Climate & Sustainability Working Group)",
        year: "2023",
        link: "https://docsend.com/view/24ki7bqjsmvqq7zu",
      },
      {
        title: "Unalarmed Now, Alarmed When? Cocoa Farmers Battling Climate Change.",
        authors: "Offei-Darko, L.",
        year: "2023",
        link: "https://rethinking-climate.org/2023/02/07/unalarmed-now-alarmed-when-ghanians-cocoa-farmers-battling-climate-change/",
      },
      {
        title:
          "Indicators, MEL, and Modalities: Reflections and Recommendations from YOUNGO.",
        authors:
          "Pazola, L., Ayomide, I., Nathania, B., ... Offei-Darko, L. et al.",
        year: "2024",
      },
      {
        title:
          "Sharm el-Sheikh dialogue on Article 2.1c – submission on behalf of YOUNGO.",
        authors:
          "Parties, Observers, Operating Entities & YOUNGO including Offei-Darko L.",
        year: "2024",
      },
      {
        title:
          "Guidance Comments on Kunming-Montreal Global Biodiversity Framework Indicators.",
        authors: "Offei-Darko, L.",
        year: "2024",
        link: "https://chm.cbd.int/database/record?documentID=267238",
      },
      {
        title: "Voices from the Streets of Madina: “Trotro” Impacts on Health.",
        authors: "Offei-Darko, L., Adotey, W., Adotei, J.N., et al.",
        year: "2025",
      },
      {
        title:
          "Indigenous Knowledge Inclusion in Climate Justice – Southern Ghana.",
        authors:
          "Indigenous People Alliance Ghana (IPA-GH), Youth Climate Justice Fund, including Offei-Darko L.",
        year: "2025",
      },
      {
        title:
          "Indigenous Knowledge Inclusion in Climate Justice – Northern Ghana.",
        authors:
          "Indigenous People Alliance Ghana (IPA-GH), Youth Climate Justice Fund, including Offei-Darko L.",
        year: "2025",
      },
      {
        title:
          "Global Voices, Inclusive Ocean Action: Worldwide Call for Marine Conservation.",
        authors: "Offei-Darko, L.",
        year: "2025",
        link: "https://futureearth.org/2025/06/05/ocean-kan-unoc-statement/",
      },
    ],

    // C. Conference Proceedings
    [
      {
        title:
          "Integrating Indigenous Knowledge into Marine Conservation.",
        authors: "Offei-Darko, L., Strand, M., Sena, N.",
        year: "2023",
        details:
          "West African Marine Science Symposium (WAMSS), Accra, 18–20 Aug 2023",
      },
      {
        title:
          "Assessing Wood Waste Production: Coppon Sawmill Company Case Study.",
        authors: "Offei-Darko, L.",
        year: "2023",
        details:
          "YouSustain Conference, GAYO, Accra, 6–8 Dec 2023",
      },
      {
        title:
          "Application of Air Sensors for Clean Cooking Initiatives.",
        authors:
          "Ablo, V. D., Hodoli, G.C., ... Offei-Darko, L. et al.",
        year: "2024",
        details:
          "EGU General Assembly 2024, Vienna, Austria. https://doi.org/10.5194/egusphere-egu24-202",
      },
      {
        title:
          "Bringing the Outside, In: Voices for The Science We Need.",
        authors:
          "Pendleton, L., Oguguah, N.M., ... Offei-Darko, L., Mirobo, F.",
        year: "2025",
        details:
          "Ocean KAN One Ocean Science Congress, Nice, 4–6 June 2025",
      },
    ],
  ];

  return (
    <section id="publications" className={`py-24 relative overflow-hidden transition-colors ${
      isDark ? 'bg-gray-800' : 'bg-deep-teal'
    }`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-deep-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-air-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white flex justify-center items-center gap-3">
            <FaBook className="text-air-blue" /> Publications
          </h2>
          <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
            A complete record of scholarly publications, policy contributions, and conference outputs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-deep-teal to-air-blue mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${activeTab === index 
                  ? "bg-air-blue text-white shadow-[0_0_20px_rgba(114,160,193,0.4)] transform scale-105" 
                  : "bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white border border-white/10"}
              `}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {sections[activeTab].map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-air-blue/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-air-blue transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-gray-200 mt-2 text-sm leading-relaxed">{pub.authors}</p>
                  <p className="text-gray-200 text-xs mt-2 italic">
                    {pub.journal || pub.details}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-bold bg-deep-teal/20 text-teal-300 px-3 py-1 rounded-full border border-deep-teal/30">
                    {pub.year}
                  </span>

                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                      title="View Publication"
                    >
                      <FaLink />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
