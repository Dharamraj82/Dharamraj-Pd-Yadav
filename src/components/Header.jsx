import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeProvider";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeHovered, setThemeHovered] = useState(false);
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
    { name: "Certifications", href: "/certifications" },
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
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-6'}`}
      >
        <nav
          className={`w-[95%] md:w-[85%] lg:w-[75%] rounded-full flex justify-between items-center px-6 sm:px-8 h-16 md:h-18 transition-all duration-300 glass border-t border-white/40 ${scrolled ? 'shadow-2xl shadow-primary/10' : ''}`}
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
              className={`text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}
            >
              Dharamraj.
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-2 lg:space-x-4"
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
                  className={`relative px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all group overflow-hidden ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={handleLinkClick}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Theme Toggle + CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-3 md:space-x-5">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              onHoverStart={() => setThemeHovered(true)}
              onHoverEnd={() => setThemeHovered(false)}
              className={`relative p-2.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center overflow-hidden ${
                isDark
                  ? "bg-slate-800 border border-slate-700 hover:border-yellow-400/40 hover:shadow-yellow-400/20 hover:shadow-lg"
                  : "bg-white border border-gray-100 hover:border-indigo-400/40 hover:shadow-indigo-400/20 hover:shadow-lg"
              }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {(() => {
                  // Show hovered (opposite) icon when hovering, else show current
                  const showDark = isDark ? !themeHovered : themeHovered;
                  return showDark ? (
                    <motion.span
                      key="moon"
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className="text-indigo-400 flex"
                    >
                      <BsMoonStarsFill size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sun"
                      initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className="text-yellow-400 flex"
                    >
                      <BsSunFill size={18} />
                    </motion.span>
                  );
                })()}
              </AnimatePresence>
            </motion.button>

            {/* CTA Button (Desktop) */}
            <a
              href="https://www.linkedin.com/in/dharamraj-prasad-yadav/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex group relative overflow-hidden items-center justify-center px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none ${
                isDark
                  ? "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_4px_0_rgba(194,65,12,0.8),_0_8px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_2px_0_rgba(194,65,12,0.8),_0_4px_8px_rgba(0,0,0,0.3)]"
                  : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_4px_0_rgba(194,65,12,0.8),_0_8px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_rgba(194,65,12,0.8),_0_4px_8px_rgba(0,0,0,0.15)]"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-lg pointer-events-none"></div>
              <span className="relative z-10" style={{ textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.4)' : 'none' }}>Let's Talk</span>
            </a>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-full transition-all glass ${
                isDark
                  ? "text-white hover:bg-white/20"
                  : "text-gray-900 hover:bg-black/5"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation - Full Screen Overlay with Glassmorphism */}
      {/* Mobile Navigation - Full Screen Overlay with Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xl md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
              className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[320px] md:hidden shadow-[-20px_0_40px_rgba(0,0,0,0.3)] border-l ${
                isDark
                  ? "bg-slate-900/80 border-white/10"
                  : "bg-white/80 border-white/40"
              } backdrop-blur-2xl rounded-l-[2.5rem]`}
            >
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-8 pb-4">
                <h2 className="text-xl font-black uppercase tracking-widest bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Navigation
                </h2>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  className={`p-2.5 rounded-full transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 text-white hover:bg-white/15"
                      : "bg-black/5 text-gray-900 hover:bg-black/10"
                  }`}
                  aria-label="Close menu"
                >
                  <HiX size={20} />
                </motion.button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex flex-col h-[calc(100%-100px)] justify-between px-8 pb-8 pt-4">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.1 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <Link
                        to={link.href}
                        onClick={handleLinkClick}
                        className={`group flex items-center justify-between py-4 border-b ${
                          isDark ? "border-white/5" : "border-black/5"
                        }`}
                      >
                        <span className={`text-xl font-medium transition-colors duration-300 ${
                          isDark
                            ? "text-gray-300 group-hover:text-white"
                            : "text-gray-600 group-hover:text-black"
                        }`}>
                          {link.name}
                        </span>
                        <span className={`transform transition-transform duration-300 group-hover:translate-x-2 ${
                          isDark ? "text-primary/70" : "text-primary"
                        }`}>
                          →
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-auto"
                >
                  <a
                    href="https://www.linkedin.com/in/dharamraj-prasad-yadav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="group relative overflow-hidden w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none
                      bg-gradient-to-b from-primary to-primary/80
                      border-t border-white/25 border-x border-white/10 border-b-0
                      shadow-[0_5px_0_rgba(180,60,0,1),_0_10px_20px_rgba(249,115,22,0.35)]
                      hover:shadow-[0_3px_0_rgba(180,60,0,1),_0_5px_10px_rgba(249,115,22,0.25)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Talk
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
