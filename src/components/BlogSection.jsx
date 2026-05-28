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
      title: "",
      description:
        "I have recently completed the Wipro WILP program. Nevertheless, every interview presents an opportunity to engage in thoughtful reflection. After the assignment and business communication test, the interview turned its focus to my final year project, as well as the group and individual work. They inquired about my problem handling, the challenges I encountered in collaboration, and what I did in instances when my teammate couldn't grasp my concepts. A little about SDLC's foundational principles was touched upon. I believe anyone can pass interviews and achieve success in their profession through effective communication, project transparency, and a desire to learn.",
      image: "https://pbs.twimg.com/profile_images/1587084627428069376/o05qu0WH_400x400.jpg",
      category: "Bca to MNC",
      date: "2025-11-02",
      readTime: "3 min read",
      author: {
        name: "Dharamraj",
        role: "Full Stack Developer",
        avatar: "./profileImage.png",
      },
    },
    {
      id: 2,
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
      id: 3,
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
   
  ];

  return (
    <section
      id="blog"
      className={`relative py-12 md:py-20`}
    >
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
              Insights & Tutorials
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
          <a
            href="/blogs"
            className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none ${
              isDark
                ? "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.3)]"
                : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.15)]"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
            <HiLightningBolt size={24} className="relative z-10" />
            <span className="relative z-10" style={{ textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.4)' : 'none' }}>View All Blogs</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogSection;
