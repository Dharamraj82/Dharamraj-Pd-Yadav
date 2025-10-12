import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFileText } from "react-icons/fi";
import { useTheme } from "../context/ThemeProvider";

function ProjectCard({ project, index }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      id={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isDark
          ? "bg-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50"
          : "bg-white/80 backdrop-blur-md border border-gray-200 hover:border-blue-400"
      } shadow-lg hover:shadow-2xl`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-56 sm:h-64">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
            isDark
              ? "bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"
              : "bg-gradient-to-t from-white via-white/80 to-transparent"
          }`}
        />

        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full backdrop-blur-md ${
                isDark
                  ? "bg-blue-500/90 hover:bg-blue-600 text-white"
                  : "bg-blue-600/90 hover:bg-blue-700 text-white"
              } shadow-lg`}
              title="Live Preview"
            >
              <FiExternalLink size={20} />
            </motion.a>
          )}

          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full backdrop-blur-md ${
                isDark
                  ? "bg-gray-700/90 hover:bg-gray-600 text-white"
                  : "bg-gray-800/90 hover:bg-gray-900 text-white"
              } shadow-lg`}
              title="View Code"
            >
              <FiGithub size={20} />
            </motion.a>
          )}

          {project.docsUrl && (
            <motion.a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full backdrop-blur-md ${
                isDark
                  ? "bg-purple-500/90 hover:bg-purple-600 text-white"
                  : "bg-purple-600/90 hover:bg-purple-700 text-white"
              } shadow-lg`}
              title="Documentation"
            >
              <FiFileText size={20} />
            </motion.a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
              isDark ? "bg-blue-500/80 text-white" : "bg-blue-600/80 text-white"
            }`}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          className={`text-xl sm:text-2xl font-bold mb-3 transition-colors ${
            isDark
              ? "text-white group-hover:text-blue-400"
              : "text-gray-900 group-hover:text-blue-600"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm sm:text-base mb-4 line-clamp-3 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <p
            className={`text-xs font-semibold mb-2 uppercase tracking-wide ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  isDark
                    ? "bg-gray-700/80 text-blue-300 border border-gray-600"
                    : "bg-blue-50 text-blue-700 border border-blue-200"
                }`}
              >
                {tech.icon && <tech.icon size={14} />}
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Links Row */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50 dark:border-gray-600">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-700"
              }`}
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-700"
              }`}
            >
              <FiGithub size={16} />
              Code
            </a>
          )}

          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? "text-purple-400 hover:text-purple-300"
                  : "text-purple-600 hover:text-purple-700"
              }`}
            >
              <FiFileText size={16} />
              Docs
            </a>
          )}
        </div>
      </div>

      {/* Animated Border Effect */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isDark
            ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"
            : "bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20"
        }`}
        style={{
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
}

export default ProjectCard;
