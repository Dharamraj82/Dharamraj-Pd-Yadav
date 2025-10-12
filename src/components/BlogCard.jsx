import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiChevronDown } from "react-icons/fi";
import { HiTag } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { useTheme } from "../context/ThemeProvider";
import { useState, useId } from "react";

function BlogCard({ blog, index }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isExpanded, setIsExpanded] = useState(false);
  const uniqueId = useId();

  // Format date function
 const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-800/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/30"
          : "bg-gradient-to-br from-white via-gray-50/50 to-white backdrop-blur-xl border border-gray-200/50"
      } shadow-xl hover:shadow-2xl hover:-translate-y-3`}
    >
      {/* Blog Image with Enhanced Overlay */}
      <div className="relative overflow-hidden h-64 sm:h-72">
        <motion.img
          whileHover={{ scale: 1.15, rotate: 2 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        
        {/* Dynamic Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"
              : "bg-gradient-to-t from-white via-white/70 to-transparent"
          }`}
        />

        {/* Floating Category Badge */}
        <motion.div 
          className="absolute top-4 left-4"
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-xl ${
              isDark
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-400/40"
            } border border-white/20`}
          >
            <HiTag size={14} />
            {blog.category}
          </span>
        </motion.div>

        {/* Enhanced Reading Time Badge */}
        <div className="absolute top-4 right-4">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-xl ${
              isDark
                ? "bg-gray-900/90 text-gray-100 border border-gray-700/50 shadow-lg"
                : "bg-white/90 text-gray-800 border border-gray-300/50 shadow-lg"
            }`}
          >
            <FiClock size={14} />
            {blog.readTime}
          </motion.span>
        </div>

        {/* Animated Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>

      {/* Blog Content with Enhanced Spacing */}
      <div className="p-7 sm:p-8">
        {/* Date with Author Meta */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <FiCalendar
              className={isDark ? "text-purple-400" : "text-purple-600"}
              size={16}
            />
            <time
              className={`text-sm font-semibold ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
              dateTime={blog.date}
            >
              {formatDate(blog.date)}
            </time>
          </div>
          <BsDot className={isDark ? "text-gray-600" : "text-gray-400"} size={20} />
          <span className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {blog.author.role}
          </span>
        </div>

        {/* Title with Better Typography */}
        <motion.h3
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`text-2xl sm:text-3xl font-bold mb-4 line-clamp-2 leading-tight transition-colors duration-300 ${
            isDark
              ? "text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent"
              : "text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent"
          }`}
        >
          {blog.title}
        </motion.h3>

        {/* Expandable Description */}
        <div className="mb-6">
          <p
            id={`desc-${uniqueId}`}
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: isExpanded ? 999 : 3,
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {blog.description}
          </p>
          
          {/* Read More/Less Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(prev => !prev);
            }}
            className={`mt-3 inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 ${
              isDark
                ? "text-purple-400 hover:text-pink-400"
                : "text-purple-600 hover:text-pink-600"
            }`}
          >
            <span>{isExpanded ? "Show Less" : "Read More"}</span>
            <span
              style={{
                display: 'inline-block',
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <FiChevronDown size={18} />
            </span>
          </button>
        </div>

        {/* Enhanced Author Section */}
        <div className={`flex items-center justify-between pt-6 border-t ${
          isDark ? "border-gray-700/50" : "border-gray-200"
        }`}>
          {/* Author Info */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className={`w-12 h-12 rounded-full object-cover border-2 ${
                  isDark ? "border-purple-500/60" : "border-purple-400/60"
                } shadow-md`}
              />
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  isDark ? "bg-purple-500/20" : "bg-purple-400/20"
                }`}
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <p
                className={`text-base font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {blog.author.name}
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Author
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Glow Border Effect */}
      <motion.div
        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        style={{
          background: isDark
            ? "linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.4) 50%, rgba(168, 85, 247, 0.4) 100%)"
            : "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.3) 50%, rgba(168, 85, 247, 0.3) 100%)",
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Corner Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-0 right-0 w-32 h-32 ${
          isDark
            ? "bg-gradient-to-bl from-purple-600/20 to-transparent"
            : "bg-gradient-to-bl from-purple-400/20 to-transparent"
        } rounded-3xl pointer-events-none`}
      />
    </motion.article>
  );
}

export default BlogCard;
