import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import { HiTag } from "react-icons/hi";
import { useTheme } from "../context/ThemeProvider";

function BlogCard({ blog, index }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <motion.article
      id={blog.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isDark
          ? "bg-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:border-purple-500/50"
          : "bg-white/80 backdrop-blur-md border border-gray-200 hover:border-purple-400"
      } shadow-lg hover:shadow-2xl hover:-translate-y-2`}
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden h-56 sm:h-64">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark
              ? "bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
              : "bg-gradient-to-t from-white via-white/50 to-transparent"
          }`}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
              isDark
                ? "bg-purple-500/90 text-white"
                : "bg-purple-600/90 text-white"
            } shadow-lg`}
          >
            <HiTag size={14} />
            {blog.category}
          </motion.span>
        </div>

        {/* Reading Time Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md ${
              isDark
                ? "bg-gray-900/80 text-gray-200 border border-gray-700"
                : "bg-white/80 text-gray-700 border border-gray-200"
            } shadow-md`}
          >
            <FiClock size={14} />
            {blog.readTime}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 mb-3">
          <FiCalendar
            className={isDark ? "text-purple-400" : "text-purple-600"}
            size={16}
          />
          <time
            className={`text-sm font-medium ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
            dateTime={blog.date}
          >
            {formatDate(blog.date)}
          </time>
        </div>

        {/* Title */}
        <h3
          className={`text-xl sm:text-2xl font-bold mb-3 line-clamp-2 transition-colors ${
            isDark
              ? "text-white group-hover:text-purple-400"
              : "text-gray-900 group-hover:text-purple-600"
          }`}
        >
          {blog.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {blog.description}
        </p>

        {/* Author Info & Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50 dark:border-gray-600">
          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-purple-500/50"
            />
            <div>
              <p
                className={`text-sm font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {blog.author.name}
              </p>
              <p
                className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {blog.author.role}
              </p>
            </div>
          </div>

          {/* Read More Button */}
          <motion.a
            href={blog.url || `#${blog.id}`}
            whileHover={{ x: 5 }}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              isDark
                ? "text-purple-400 hover:text-purple-300"
                : "text-purple-600 hover:text-purple-700"
            }`}
          >
            Read More
            <FiArrowRight size={16} />
          </motion.a>
        </div>
      </div>

      {/* Animated Border Effect */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isDark
            ? "bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20"
            : "bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20"
        }`}
        style={{
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.article>
  );
}

export default BlogCard;
