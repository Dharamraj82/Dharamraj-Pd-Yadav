import { motion } from "framer-motion";
import { FaChevronDown, FaLinkedin } from "react-icons/fa";
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
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 md:pt-40 lg:pt-32">
      {/* Main Content */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Text */}
          <div className="text-left order-2 lg:order-1 flex flex-col justify-center items-start">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 cursor-pointer"
            >
              <div
                className={`group relative px-6 py-2 rounded-full text-sm font-bold tracking-wide ${
                  isDark
                    ? "bg-gradient-to-b from-purple-500/30 to-purple-500/10 text-purple-400 border-t border-purple-500/50 border-x border-purple-500/30 border-b-0 shadow-[0_5px_0_rgba(168,85,247,0.6),_0_10px_20px_rgba(0,0,0,0.5)]"
                    : "bg-gradient-to-b from-purple-600/20 to-purple-600/5 text-purple-600 border-t border-purple-600/40 border-x border-purple-600/20 border-b-0 shadow-[0_5px_0_rgba(147,51,234,0.4),_0_10px_20px_rgba(0,0,0,0.15)]"
                } backdrop-blur-md overflow-hidden`}
              >
                {/* 3D Gloss Highlight */}
                <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-full pointer-events-none"></div>
                <span className="relative z-10" style={{ textShadow: isDark ? '0 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
                  Full-Stack Web Developer
                </span>
              </div>
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              <span className="block mb-2">Hi, I’m</span>
              <span
                className={`block pb-2 ${
                  isDark
                    ? "bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                }`}
              >
                Dharamraj Prasad Yadav
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              A BCA Graduate passionate about modern web experiences, React.js, full-stack ecosystems, and building efficient software solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="#" variant="primary" icon={FaAddressCard}>
                Resume
              </Button>
              <Button href="https://github.com/Dharamraj82" target="_blank" rel="noreferrer" variant="secondary" icon={VscGithubAlt}>
                Github
              </Button>
              <Button href="https://www.linkedin.com/in/dharamraj-prasad-yadav/" target="_blank" rel="noreferrer" variant="linkedin" icon={FaLinkedin}>
                LinkedIn
              </Button>
            </motion.div>
          </div>

          {/* Right Side: Profile Image with Liquid Effect */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] flex items-center justify-center"
            >
              {/* Liquid blobs */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-60 blur-3xl animate-blob"></div>
              <div className="absolute inset-4 bg-gradient-to-bl from-secondary to-primary opacity-60 blur-2xl animate-blob" style={{ animationDelay: '2s' }}></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full p-2 glass animate-liquid overflow-hidden shadow-2xl">
                <img 
                  src="./profileImage.png" 
                  alt="Dharamraj Prasad Yadav" 
                  className="w-full h-full object-cover animate-liquid transition-transform hover:scale-110 duration-700"
                  onError={(e) => {
                    // Fallback gradient if image not found
                    e.target.onerror = null; 
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="%236366f1"/></svg>';
                  }}
                />
                
                {/* Glassmorphism overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HeroSection;
