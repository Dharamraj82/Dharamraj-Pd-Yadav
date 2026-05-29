import React from "react";
import { motion } from "framer-motion";
import { HiPencilAlt } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import BlogCard, { BlogCardSkeleton } from "./BlogCard";
import { useTheme } from "../context/ThemeProvider";
import { useApiCache } from "../context/useApiCache";

function BlogSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { data, loading } = useApiCache(
    import.meta.env.VITE_API_URL + "/blogs",
    { ttl: 5 * 60 * 1000, transform: (d) => (Array.isArray(d) ? d : []).slice(0, 3) }
  );
  const blogs = data || [];

  if (!loading && blogs.length === 0) return null;

  return (
    <section id="blog" className={`relative py-12`}>
      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header — matches ProjectsSection style exactly */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <HiPencilAlt
              className={isDark ? "text-primary" : "text-primary"}
              size={32}
            />
            <span
              className={`text-sm md:text-base font-semibold uppercase tracking-wider ${
                isDark ? "text-primary" : "text-primary"
              }`}
            >
              My Blogs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Latest{" "}
            <span
              className={
                isDark
                  ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              }
            >
              Insights &amp; Tutorials
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Sharing my journey in web development, coding tips, and tech insights
            to help fellow developers grow.
          </motion.p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))
            : blogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
        </div>

        {/* View All Button — matches ProjectsSection 3D button style exactly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/blogs"
            className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none ${
              isDark
                ? "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.3)]"
                : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.15)]"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none" />
            <span className="relative z-10" style={{ textShadow: isDark ? "0 1px 2px rgba(0,0,0,0.4)" : "none" }}>
              View All Blogs
            </span>
            <FiArrowUpRight size={22} className="relative z-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogSection;
