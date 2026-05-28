import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { HiHeart } from "react-icons/hi";
import { useTheme } from "../context/ThemeProvider";

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Get current year
  const currentYear = new Date().getFullYear();

  // Last updated date (you can make this dynamic)
  const lastUpdated = "May 29, 2026.";

  // Social Media Links
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/dharamraj82",
      hoverClass: "hover:from-gray-700 hover:to-black hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/dharamraj-prasad-yadav/",
      hoverClass: "hover:from-[#0A66C2] hover:to-[#004182] hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: BsTwitterX,
      url: "https://x.com/Dharamrajpdyadv",
      hoverClass: "hover:from-gray-700 hover:to-black hover:text-white",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/dharamraj_pd_yadav/",
      hoverClass: "hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white",
    }
  ];

  return (
    <footer className={`relative w-full overflow-hidden`}>
      {/* Divider */}
      <div
        className={`w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent`}
      />

      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
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
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent`}
                >
                  Dharamraj Prasad Yadav
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
              className={`flex items-center gap-4 p-4 rounded-3xl glass shadow-[0_0_15px_rgba(99,102,241,0.1)]`}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden flex items-center justify-center shrink-0 w-12 h-12 mx-auto aspect-square rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:-translate-y-2 hover:z-10 active:scale-95 ${social.hoverClass} ${
                    isDark
                      ? "bg-gradient-to-b from-slate-700 to-slate-800 text-gray-300 border-t border-white/20 border-x border-white/5 shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                      : "bg-gradient-to-b from-slate-100 to-slate-200 text-gray-600 border-t border-white/80 border-x border-white/40 shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
                  }`}
                  aria-label={social.name}
                >
                  <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-full pointer-events-none"></div>
                  <social.icon size={20} className={`relative z-10 transition-colors group-hover:text-white`} />
                </a>
              ))}
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`group relative overflow-hidden h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300 hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none ${
                  isDark
                    ? "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_4px_0_rgba(194,65,12,0.8),_0_8px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_2px_0_rgba(194,65,12,0.8),_0_4px_8px_rgba(0,0,0,0.3)]"
                    : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_4px_0_rgba(194,65,12,0.8),_0_8px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_rgba(194,65,12,0.8),_0_4px_8px_rgba(0,0,0,0.15)]"
                }`}
                aria-label="Scroll to top"
              >
                <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-full pointer-events-none"></div>
                <svg
                  className="w-5 h-5 relative z-10"
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
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
