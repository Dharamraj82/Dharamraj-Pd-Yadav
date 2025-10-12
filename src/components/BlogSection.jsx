import { motion } from "framer-motion";
import { HiPencilAlt, HiLightningBolt } from "react-icons/hi";
import BlogCard from "./BlogCard";
import { useTheme } from "../context/ThemeProvider";

function BlogSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Blog Posts Data
  const blogPosts = [
    {
      id: "blog-mern-authentication",
      title: "Building Secure Authentication in MERN Stack Applications",
      description:
        "Learn how to implement JWT-based authentication with refresh tokens, secure password hashing using bcrypt, and best practices for protecting your MERN stack applications from common security vulnerabilities.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      category: "Web Development",
      date: "2025-10-05",
      readTime: "8 min read",
      author: {
        name: "Your Name",
        role: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      },
      url: "#",
    },
    {
      id: "blog-react-performance",
      title: "React Performance Optimization: Tips and Tricks",
      description:
        "Discover essential techniques to boost your React application's performance including code splitting, lazy loading, memoization, virtual scrolling, and proper state management strategies for faster load times.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      category: "React.js",
      date: "2025-09-28",
      readTime: "10 min read",
      author: {
        name: "Your Name",
        role: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      },
      url: "#",
    },
    {
      id: "blog-mongodb-aggregation",
      title: "Mastering MongoDB Aggregation Pipeline",
      description:
        "Deep dive into MongoDB's powerful aggregation framework. Learn how to perform complex data transformations, filtering, grouping, and analysis with real-world examples and performance optimization tips.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
      category: "Database",
      date: "2025-09-20",
      readTime: "12 min read",
      author: {
        name: "Your Name",
        role: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      },
      url: "#",
    }
  ];

  return (
    <section
      id="blog"
      className={`relative py-10 overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="blogGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="25"
                cy="25"
                r="2"
                fill={isDark ? "rgba(168, 85, 247, 0.3)" : "rgba(168, 85, 247, 0.2)"}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blogGrid)" />
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-32 left-20 text-6xl opacity-10 ${
          isDark ? "text-purple-400" : "text-purple-600"
        }`}
      >
        ✍️
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute bottom-20 right-20 text-5xl opacity-10 ${
          isDark ? "text-pink-400" : "text-pink-600"
        }`}
      >
        📝
      </motion.div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <HiPencilAlt
              className={isDark ? "text-purple-400" : "text-purple-600"}
              size={32}
            />
            <span
              className={`text-sm md:text-base font-semibold uppercase tracking-wider ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Blog & Articles
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
                  ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              }
            >
              Insights & Tutorials
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/blogs&articals"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
              isDark
                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            } shadow-lg hover:shadow-2xl`}
          >
            <HiLightningBolt size={24} />
            View All Blog and Articles
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogSection;
