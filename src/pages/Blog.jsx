import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiPencilAlt } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import BlogCard, { BlogCardSkeleton } from "../components/BlogCard";
import { useTheme } from "../context/ThemeProvider";

function Blog() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogs = async (pageNumber) => {
    try {
      if (pageNumber === 1) setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/blogs?page=${pageNumber}&limit=9`
      );
      const data = await res.json();

      if (res.ok) {
        const all = data.data || [];
        const limit = 9;
        const start = (pageNumber - 1) * limit;
        const chunk = all.slice(start, start + limit);

        if (pageNumber === 1) setBlogs(chunk);
        else setBlogs((prev) => [...prev, ...chunk]);

        setHasMore(start + limit < all.length);
      }
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const handleLoadMore = () => {
    const next = page + 1;
    setPage(next);
    fetchBlogs(next);
  };

  return (
    <section id="blog" className={`relative py-20 md:py-32 overflow-hidden`}>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blogGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle
                cx="25" cy="25" r="2"
                fill={isDark ? "rgba(234, 88, 12, 0.3)" : "rgba(234, 88, 12, 0.15)"}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blogGrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header — identical to ProjectsSection */}
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
              isDark ? "text-white" : "text-gray-900"
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
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Sharing my journey in web development, coding tips, and tech insights
            to help fellow developers grow.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && page === 1 ? (
            Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))
          ) : (
            blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))
          )}
        </div>

        {/* Load More Button — same 3D style as View All buttons */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed ${
                isDark
                  ? "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.3)]"
                  : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.15)]"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none" />
              <span className="relative z-10" style={{ textShadow: isDark ? "0 1px 2px rgba(0,0,0,0.4)" : "none" }}>
                {loading ? "Loading..." : "Load More"}
              </span>
              <FiArrowUpRight size={22} className="relative z-10" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Blog;
