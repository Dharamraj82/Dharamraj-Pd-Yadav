import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { useTheme } from "../context/ThemeProvider";

const placeholderCertifications = [
  {
    id: 1,
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "Aug 2023",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Mar 2023",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  }
];

function Certifications() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative w-full min-h-screen py-32 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <HiOutlineAcademicCap className="text-primary" size={28} />
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Achievements
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            My{" "}
            <span
              className={
                isDark
                  ? "bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              }
            >
              Certifications
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A showcase of my professional qualifications, continuous learning, and technical credentials.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
                isDark 
                  ? "bg-[#111111] border border-white/5 hover:border-primary/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)]" 
                  : "bg-white border border-slate-200 hover:border-primary/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)]"
              }`}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden w-full h-48 shrink-0">
                <div className="w-full h-full">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Date overlay */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col grow relative z-0">
                <p className="text-primary font-bold text-[11px] tracking-widest uppercase mb-2">
                  {cert.issuer}
                </p>
                <h3 className={`text-lg font-bold mb-6 transition-colors duration-300 ${
                  isDark ? "text-white group-hover:text-primary" : "text-slate-900 group-hover:text-primary"
                }`}>
                  {cert.title}
                </h3>

                <div className="mt-auto pt-4 border-t border-slate-500/20">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none ${
                      isDark 
                        ? "bg-gradient-to-b from-slate-700 to-slate-800 text-white border-t border-white/20 border-x border-white/5 border-b-0 shadow-[0_4px_0_rgba(30,41,59,1),_0_8px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_2px_0_rgba(30,41,59,1),_0_4px_8px_rgba(0,0,0,0.3)]" 
                        : "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 border-t border-white/80 border-x border-white/40 border-b-0 shadow-[0_4px_0_rgba(203,213,225,1),_0_8px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_rgba(203,213,225,1),_0_4px_8px_rgba(0,0,0,0.05)]"
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-lg pointer-events-none"></div>
                    <FiExternalLink size={16} className="relative z-10" />
                    <span className="relative z-10">Verify Credential</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
