import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFileText, FiChevronDown } from "react-icons/fi";
import { useTheme } from "../context/ThemeProvider";
import { useState } from "react";

function ProjectCard({ project, index }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isEven = index % 2 === 0;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      id={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      layout
      className={`group relative flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } w-full overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
        isDark 
          ? "bg-[#111111] border border-white/5 hover:border-primary/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)]" 
          : "bg-white border border-slate-200 hover:border-primary/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)]"
      }`}
    >
      {/* Project Image Section */}
      <div className="relative overflow-hidden w-full md:w-5/12 shrink-0 h-56 md:h-auto">
        <div className="w-full h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Category Label overlay on image for mobile, hidden on desktop */}
        <div className="absolute top-4 left-4 md:hidden">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Text Content */}
      <div className={`p-6 md:p-8 flex flex-col justify-center grow w-full md:w-7/12 relative z-0`}>
        
        {/* Category Label (Desktop) */}
        <div className="hidden md:flex items-center gap-2 mb-3">
          <span className="w-6 h-[2px] bg-primary rounded-full"></span>
          <span className="text-primary font-bold text-[11px] tracking-widest uppercase">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 transition-colors duration-300 ${
          isDark ? "text-white group-hover:text-primary" : "text-slate-900 group-hover:text-primary"
        }`}>
          {project.title}
        </h3>

        {/* Expandable Description */}
        <div className="mb-6">
          <motion.p
            layout
            className={`text-sm md:text-base leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            } ${!isExpanded ? "line-clamp-2" : ""}`}
          >
            {project.description}
          </motion.p>
          
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary hover:text-orange-500 transition-colors"
          >
            <span>{isExpanded ? "Show Less" : "Read More"}</span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <FiChevronDown size={14} />
            </motion.div>
          </motion.button>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all duration-300 ${
                  isDark
                    ? "bg-white/5 text-slate-300 border border-white/10"
                    : "bg-slate-100 text-slate-600 border border-slate-200"
                }`}
              >
                {tech.icon && <tech.icon size={12} className={isDark ? 'opacity-70' : 'opacity-60'} />}
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons with 3D Effect */}
        <div className="mt-auto flex items-center gap-3">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none ${
                isDark
                  ? "bg-gradient-to-b from-primary/80 to-primary/60 text-white border-t border-white/30 border-x border-white/10 border-b-0 shadow-[0_4px_0_rgba(194,65,12,0.8),_0_8px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_2px_0_rgba(194,65,12,0.8),_0_4px_8px_rgba(0,0,0,0.3)]"
                  : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_4px_0_rgba(194,65,12,0.8),_0_8px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_rgba(194,65,12,0.8),_0_4px_8px_rgba(0,0,0,0.15)]"
              }`}
              title="Live Preview"
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-lg pointer-events-none"></div>
              <FiExternalLink size={16} className="relative z-10" />
              <span className="relative z-10" style={{ textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.4)' : 'none' }}>Live Preview</span>
            </motion.a>
          )}
          
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none ${
                isDark 
                  ? "bg-gradient-to-b from-slate-700 to-slate-800 text-white border-t border-white/20 border-x border-white/5 border-b-0 shadow-[0_4px_0_rgba(30,41,59,1),_0_8px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_2px_0_rgba(30,41,59,1),_0_4px_8px_rgba(0,0,0,0.3)]" 
                  : "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 border-t border-white/80 border-x border-white/40 border-b-0 shadow-[0_4px_0_rgba(203,213,225,1),_0_8px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_rgba(203,213,225,1),_0_4px_8px_rgba(0,0,0,0.05)]"
              }`}
              title="View Code"
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-lg pointer-events-none"></div>
              <FiGithub size={16} className="relative z-10" />
              <span className="relative z-10">Code</span>
            </motion.a>
          )}

          {project.docsUrl && (
            <motion.a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none ${
                isDark 
                  ? "bg-gradient-to-b from-slate-700 to-slate-800 text-white border-t border-white/20 border-x border-white/5 border-b-0 shadow-[0_4px_0_rgba(30,41,59,1),_0_8px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_2px_0_rgba(30,41,59,1),_0_4px_8px_rgba(0,0,0,0.3)]" 
                  : "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 border-t border-white/80 border-x border-white/40 border-b-0 shadow-[0_4px_0_rgba(203,213,225,1),_0_8px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_rgba(203,213,225,1),_0_4px_8px_rgba(0,0,0,0.05)]"
              }`}
              title="Documentation"
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-lg pointer-events-none"></div>
              <FiFileText size={16} className="relative z-10" />
              <span className="relative z-10">Docs</span>
            </motion.a>
          )}
        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;
