import React from "react";
import { FaAward, FaLink, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext';

// Award Data
const awards = [
  {
    year: "2023",
    title:
      "Global Undergraduate Award – Highly Commended Thesis in Earth & Environmental Sciences",
    link: "https://undergraduateawards.com/winners/highly-commended-2023",
  },
];

// Generate background sparkles
const generateSparkles = (count = 40) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));

// Generate frequent popping sparkles (foreground)
const generatePopSparkles = (count = 30) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

const Awards = () => {
  const { isDark } = useTheme();
  const sparkles = generateSparkles(40);
  const popSparkles = generatePopSparkles(30);

  return (
    <section
      id="awards"
      className={`py-24 relative overflow-hidden transition-colors ${
        isDark ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-slate-900 via-deep-teal to-black'
      }`}
    >
      {/* ✨ Frequent Pop Sparkles */}
      {popSparkles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-yellow-300 pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: 10,
            height: 10,
            boxShadow: "0 0 12px rgba(255, 215, 0, 0.9)",
          }}
          animate={{
            scale: [0, 1.4, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.2,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Soft floating sparkles */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-yellow-300"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px rgba(255, 215, 0, 0.8)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300 flex items-center justify-center gap-3 drop-shadow-lg">
            <FaAward className="text-yellow-400" />
            Meritorious Awards
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="space-y-10">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              className="relative p-8 rounded-2xl border border-yellow-500/30 bg-white/10 backdrop-blur-lg shadow-xl overflow-hidden"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* 🏆 Champions Cup (Right) */}
              <motion.div
                className="absolute right-[-40px] md:right-[-1px] top-1/2 -translate-y-1/2 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 8, repeat: Infinity, ease: "linear" 
                }}
              >
                <FaTrophy size={100} />
              </motion.div>

              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative flex items-start gap-5 z-10">
                <FaAward className="text-3xl text-yellow-400 drop-shadow-md mt-1" />

                <div>
                  <p className="text-xl font-semibold text-white">{award.title}</p>

                  <div className="mt-2 flex items-center gap-4 text-yellow-200 text-sm font-medium">
                    <span className="px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">{award.year}</span>

                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 hover:text-yellow-200 transition flex items-center gap-2"
                      >
                        <FaLink />
                        View Award
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;