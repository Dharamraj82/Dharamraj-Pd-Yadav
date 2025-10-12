import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeProvider";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Navigation links
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4"
      >
        <nav
          className={`w-[90%] md:w-[85%] lg:w-[80%] rounded-2xl flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 md:h-20 transition-all duration-300 ${
            isDark
              ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
              : "bg-white/15 backdrop-blur-md border border-white/30 shadow-lg"
          }`}
        >
          {/* Logo */}
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
              Dharamraj{" "}
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.href}
                  className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all ${
                    isDark
                      ? "text-gray-200 hover:text-white hover:bg-white/10"
                      : "text-gray-800 hover:text-gray-900 hover:bg-white/30"
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Theme Toggle + CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${
                isDark
                  ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  : "bg-gray-900 text-yellow-400 hover:bg-gray-800"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
            </motion.button>

            {/* CTA Button (Desktop) */}
            <motion.a
              href="https://www.linkedin.com/in/dharamraj-prasad-yadav/"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-5 lg:px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              Let's Talk
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all ${
                isDark
                  ? "text-white hover:bg-white/10"
                  : "text-gray-900 hover:bg-white/30"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation - Full Screen Overlay with Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm md:hidden shadow-2xl ${
                isDark
                  ? "bg-gray-900/40 backdrop-blur-xl border-l border-white/20"
                  : "bg-white/30 backdrop-blur-xl border-l border-white/40"
              }`}
            >
              {/* Mobile Menu Header */}
              <div
                className={`flex justify-between items-center p-6 border-b ${
                  isDark ? "border-white/10" : "border-white/20"
                }`}
              >
                <h2
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Console
                </h2>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-lg transition-all ${
                    isDark
                      ? "text-white hover:bg-white/10"
                      : "text-gray-900 hover:bg-white/30"
                  }`}
                  aria-label="Close menu"
                >
                  <HiX size={24} />
                </motion.button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex flex-col h-[calc(100%-80px)] justify-between p-6">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={handleLinkClick}
                      whileTap={{ scale: 0.95 }}
                      className={`block px-4 py-4 rounded-lg text-lg font-medium transition-all ${
                        isDark
                          ? "text-gray-200 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                          : "text-gray-800 hover:text-gray-900 hover:bg-white/40 backdrop-blur-sm"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.a
                  href="https://www.linkedin.com/in/dharamraj-prasad-yadav/"
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                  onClick={handleLinkClick}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full px-6 py-4 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Let's Talk
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
