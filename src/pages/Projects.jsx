import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiCode, HiLightningBolt } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeProvider";
import ProjectCard, { ProjectCardSkeleton } from "../components/ProjectCard";

function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProjects = async (pageNumber) => {
    try {
      if (pageNumber === 1) setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?page=${pageNumber}&limit=10`);
      const data = await res.json();
      
      if (res.ok) {
        const arr = data.data || [];
        if (pageNumber === 1) {
          setProjects(arr);
        } else {
          setProjects(prev => [...prev, ...arr]);
        }
        setHasMore(pageNumber * 10 < (data.total || 0));
      }
    } catch (error) {
      console.error("Failed to fetch projects", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProjects(nextPage);
  };


  return (
    <section
      id="projects"
      className={`relative py-20 md:py-32 overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="projectGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke={
                  isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(147, 51, 234, 0.1)"
                }
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectGrid)" />
        </svg>
      </div>



      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <HiCode
              className={isDark ? "text-primary" : "text-primary"}
              size={32}
            />
            <span
              className={`text-sm md:text-base font-semibold uppercase tracking-wider ${
                isDark ? "text-primary" : "text-primary"
              }`}
            >
              My Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured{" "}
            <span
              className={
                isDark
                  ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              }
            >
              Work & Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore my latest projects showcasing my expertise in full-stack
            development, from concept to deployment.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {loading && page === 1 ? (
            Array.from({ length: 4 }).map((_, index) => (
              <ProjectCardSkeleton key={`skeleton-${index}`} index={index} />
            ))
          ) : (
            projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          )}
        </div>
        
        {/* Load More Button */}
        {hasMore && (
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
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <a
          href="https://github.com/Dharamraj82"
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none ${
            isDark
              ? "bg-gradient-to-b from-slate-700 to-slate-800 text-white border-t border-white/20 border-x border-white/5 border-b-0 shadow-[0_5px_0_rgba(30,41,59,1),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(30,41,59,1),_0_5px_10px_rgba(0,0,0,0.3)]"
              : "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 border-t border-white/80 border-x border-white/40 border-b-0 shadow-[0_5px_0_rgba(203,213,225,1),_0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_0_rgba(203,213,225,1),_0_5px_10px_rgba(0,0,0,0.05)]"
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
          <FaGithub size={24} className="relative z-10" />
          <span className="relative z-10">View More on Github</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;
