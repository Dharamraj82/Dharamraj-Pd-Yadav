import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { FaAddressCard } from "react-icons/fa6";
import Button from "./Button";
import { useTheme } from "../context/ThemeProvider";

function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Scroll to next section
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Main Content */}
      <div className="relative z-10 min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <span
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                isDark
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  : "bg-blue-100 text-blue-600 border border-blue-200"
              }`}
            >
              Full-Stack Web Developer (MERN)
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="block">Hi, I’m</span>
            <span
              className={`block italic py-[9px] md:py-[11px]  ${
                isDark
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              }`}
            >
              Dharamraj Prasad Yadav
            </span>
            <span className="block text-xl md:text-2xl italic font-medium">#StudentLife, #Programming, #SoftwareDevelopment, #WebDevelopment</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            A BCA Graduate passionate about web development, React.js,
            full-stack projects, and proficient in Data Structures & Algorithms
            (DSA) to build efficient and optimized solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="secondary"
              icon={FaAddressCard}
              iconPosition="left"
              href="#"
            >
              Resume
            </Button>

            <Button
              variant="primary"
              icon={VscGithubAlt}
              iconPosition="left"
              href="https://github.com/Dharamraj82"
            >
              Connect with Github
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className={`absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-20 p-3 rounded-full ${
          isDark
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-blue-600 text-white hover:bg-blue-700"
        } transition-all shadow-lg hover:shadow-xl`}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}

export default HeroSection;
