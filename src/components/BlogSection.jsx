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
      id: 1,
      title: "How Much AI Has Upgraded",
      description:
        "AI has evolved over the years. Originally, it was simple rule-governed machinery but not it includes intelligent systems capable of learning, comprehending, and creating. Advanced AI systems can identify visual information, process and respond to natural languages, compose written material, generate artworks, operate vehicles, and help with intricate decision processes. Due to the growth of scientific fields like machine learning, deep learning, and generative AI, many things that we once thought were the stuff of sci-fi have become reality, helping speed up and improve the quality of our work in daily life.",
      image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      category: "Artificial Intelligence (AI)",
      date: "2025-10-05",
      readTime: "3 min read",
      author: {
        name: "Dharamraj",
        role: "Full Stack Developer",
        avatar: "./profileImage.png",
      },
    },
    {
      id: 2,
      title: "MERN Developer in Today's Tech Market",
      description:
        "New graduates entering the tech industry typically have MERN stack skills. Given the current highly competitive job market and accelerated AI disruption, the situation has changed. Knowing only MERN stack will not cut it. Prospective employers want candidates knowledgeable in microservices, AWS, Docker, and CI/CD, while also understanding AI, scalability, and optimization. Developers need to build practical projects and keep learning to remain relevant. In today's competitive landscape, one must engage in continual learning to obtain meaningful employment.",
      image: "https://images.unsplash.com/photo-1653539465770-2d7120d830bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNvZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      category: "My Issue",
      date: "2025-09-28",
      readTime: "3 min read",
      author: {
        name: "Dharamraj",
        role: "Full Stack Developer",
        avatar: "./profileImage.png",
      },
    },
    {
      id: 3,
      title: "My Wipro WILP Interview Experience",
      description:
        "I have recently completed the Wipro WILP program. Nevertheless, every interview presents an opportunity to engage in thoughtful reflection. After the assignment and business communication test, the interview turned its focus to my final year project, as well as the group and individual work. They inquired about my problem handling, the challenges I encountered in collaboration, and what I did in instances when my teammate couldn't grasp my concepts. A little about SDLC's foundational principles was touched upon. I believe anyone can pass interviews and achieve success in their profession through effective communication, project transparency, and a desire to learn.",
      image: "https://pbs.twimg.com/profile_images/1587084627428069376/o05qu0WH_400x400.jpg",
      category: "Bca to MNC",
      date: "2025-09-25",
      readTime: "3 min read",
      author: {
        name: "Dharamraj",
        role: "Full Stack Developer",
        avatar: "./profileImage.png",
      },
    },
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
