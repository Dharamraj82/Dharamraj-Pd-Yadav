import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "../context/ThemeProvider";

function Certifications({ isHomePage = false }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = isHomePage ? 3 : 6;

  const fetchCertifications = async (pageNumber) => {
    try {
      if (pageNumber === 1) setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/certifications?page=${pageNumber}&limit=${limit}`);
      const data = await res.json();
      
      if (res.ok) {
        const allCerts = data.data || [];
        const startIndex = (pageNumber - 1) * limit;
        const endIndex = startIndex + limit;
        const chunk = allCerts.slice(startIndex, endIndex);

        if (pageNumber === 1) {
          setCertifications(chunk);
        } else {
          setCertifications(prev => [...prev, ...chunk]);
        }
        setHasMore(endIndex < allCerts.length);
      }
    } catch (error) {
      console.error("Failed to fetch certifications", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertifications(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCertifications(nextPage);
  };

  return (
    <section className="relative w-full min-h-screen py-12 overflow-hidden z-10">
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
          {loading && page === 1 ? (
            Array.from({ length: limit }).map((_, index) => (
              <CertificationCardSkeleton key={`skeleton-${index}`} isDark={isDark} />
            ))
          ) : (
            certifications.map((cert, index) => {
              const hasImage = !!cert.image;
              
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
                    isDark 
                      ? "bg-[#111111] border border-white/5 hover:border-primary/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)]" 
                      : "bg-white border border-slate-200 hover:border-primary/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)]"
                  }`}
                >
                  {/* Image Section */}
                  {hasImage && (
                    <div className="relative overflow-hidden w-full h-48 shrink-0">
                      <div className="w-full h-full">
                        <img
                          src={cert.image}
                          alt={cert.title || "Certification Image"}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Date overlay */}
                      {cert.certification_date && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                            {cert.certification_date}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Text Content */}
                  <div className="p-6 flex flex-col grow relative z-0">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-primary font-bold text-[11px] tracking-widest uppercase">
                        {cert.issuer}
                      </p>
                      {!hasImage && cert.certification_date && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                          {cert.certification_date}
                        </span>
                      )}
                    </div>
                    <h3 className={`text-lg font-bold mb-6 transition-colors duration-300 ${
                      isDark ? "text-white group-hover:text-primary" : "text-slate-900 group-hover:text-primary"
                    }`}>
                      {cert.title}
                    </h3>

                    {cert.link && (
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
                    )}
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* View All Certifications / Load More */}
        {isHomePage ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href="/certifications"
              className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none ${
                isDark
                  ? "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.3)]"
                  : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.15)]"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
              <span className="relative z-10" style={{ textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.4)' : 'none' }}>View All Certifications</span>
              <FiArrowUpRight size={22} className="relative z-10" />
            </a>
          </motion.div>
        ) : hasMore ? (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50"
              }`}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Certifications;

export function CertificationCardSkeleton({ isDark }) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl ${
        isDark ? "bg-[#111111] border border-white/5" : "bg-white border border-slate-200"
      } animate-pulse`}
    >
      <div className={`relative overflow-hidden w-full h-48 shrink-0 ${isDark ? "bg-white/5" : "bg-slate-200"}`}>
        <div className={`absolute top-4 right-4 w-20 h-6 rounded-full ${isDark ? "bg-white/10" : "bg-slate-300"}`}></div>
      </div>
      
      <div className="p-6 flex flex-col grow relative z-0">
        <div className={`w-24 h-4 rounded mb-2 ${isDark ? "bg-white/10" : "bg-slate-300"}`}></div>
        <div className={`w-full h-6 rounded mb-2 ${isDark ? "bg-white/10" : "bg-slate-300"}`}></div>
        <div className={`w-3/4 h-6 rounded mb-6 ${isDark ? "bg-white/10" : "bg-slate-300"}`}></div>
        
        <div className="mt-auto pt-4 border-t border-slate-500/20">
          <div className={`w-full h-12 rounded-lg ${isDark ? "bg-white/10" : "bg-slate-300"}`}></div>
        </div>
      </div>
    </div>
  );
}
