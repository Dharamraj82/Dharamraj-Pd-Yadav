import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import { useTheme } from "../context/ThemeProvider";

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Get current year
  const currentYear = new Date().getFullYear();

  // Last updated date (you can make this dynamic)
  const lastUpdated = "October 12, 2025";

  // Social Media Links
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/yourusername",
      color: isDark ? "hover:text-gray-300" : "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/yourusername",
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-500",
    }
  ];

  return (
    <footer className={`relative w-full overflow-hidden`}>
      {/* Divider */}
      <div
        className={`w-full h-[2px] ${
          isDark ? "bg-blue-700" : "bg-blue-300"
        }`}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footerGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="20"
                cy="20"
                r="1"
                fill={
                  isDark ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.3)"
                }
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-8 md:gap-4">
          {/* Left Section */}
          <div className="flex gap-6 flex-col">
            {/* Website Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-shrink-0"
              >
                <a
                  href="/"
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent`}
                >
                  Dharamraj
                </a>
              </motion.div>
              <p
                className={`text-sm md:text-base mt-2 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Full Stack Web Developer
              </p>
            </motion.div>

            {/* Copyright & Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
            >
              {/* Copyright */}
              <p
                className={`text-sm flex items-center gap-2 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                © {currentYear} Made with{" "}
                <HiHeart className="text-red-500 animate-pulse" /> by{" "}
                <span
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Dharamraj
                </span>
              </p>

              {/* Separator */}
              <span
                className={`hidden sm:block w-1 h-1 rounded-full ${
                  isDark ? "bg-gray-600" : "bg-gray-400"
                }`}
              />

              {/* Last Updated */}
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Last updated: <span className="font-medium">{lastUpdated}</span>
              </p>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="flex flex-row md:flex-col gap-6 md:gap-10 items-center md:items-end">
            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`flex items-center gap-4 p-4 rounded-2xl ${
                isDark
                  ? "bg-gray-800/30 backdrop-blur-md border border-gray-700/50"
                  : "bg-white/50 backdrop-blur-md border border-gray-200"
              } shadow-lg`}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-all ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`h-10 w-10 flex items-center justify-center p-2 rounded-full transition-all ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              } shadow-lg hover:shadow-xl`}
              aria-label="Scroll to top"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
