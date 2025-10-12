// import React, { useState, useEffect } from "react";
// import { ThemeProvider } from "./context/ThemeProvider";
// import ToggleButton from "./components/ToggleButton";
// import Home from "./pages/Home";

// import Header from "./components/Header";
// import CircularText from "./uiComponents/CircularText";
// import CountUp from "./uiComponents/CountUp";
// import AboutMe from "./components/AboutMe";
// import Technology from "./pages/Technology";
// import Project from "./components/Project";
// import Projects from "./pages/Projects";
// import Page404 from "./pages/Page404";
// import Footer from "./pages/Footer";
// import useLenis from "./context/useLenis";

// function App() {
//   const [showMainContent, setShowMainContent] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowMainContent(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!showMainContent) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-secondary transition-all duration-500">
//         <CountUp
//           from={0}
//           to={100}
//           separator=","
//           direction="up"
//           duration={1}
//           className="text-5xl text-primary font-bold"
//         />
//       </div>
//     );
//   }
//   return (
//     <ThemeProvider>
//       <Header />
//       {/* <div className="h-screen overflow-hidden bg-primary px-5 pt-14 transition-all duration-500 text-secondary">
//         <div className="h-full overflow-y-auto scroll-hidden  transition-all duration-500">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <div className="flex flex-col gap-10">
//                   <Home />
//                   <section id="about">
//                     <AboutMe />
//                   </section>
//                   <section id="technology">
//                     <Technology />
//                   </section>
//                   <section id="projects">
//                     <Project />
//                   </section>
//                 </div>
//               }
//             />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="*" element={<Page404 />} />
//           </Routes>
//           <Footer />
//         </div>

//         <div className="fixed text-secondary z-[9999] bottom-5 transition-all duration-500 right-5">
//           <CircularText
//             text="Dharamraj*Pd*Yadav*Portfolio*"
//             onHover="pause"
//             spinDuration={10}
//             className="custom-class"
//           />
//         </div>
//       </div> */}
//     </ThemeProvider>
//   );
// }

// export default App;
import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from "./context/ThemeProvider";
import Header from "./components/Header";
import useLenis from "./context/useLenis";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Page404 from "./pages/Page404";
import Blogs from "./pages/Blog";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
function AppContent() {
  useLenis();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen dark:bg-gray-900 bg-white transition-colors duration-500">
      <section className="relative w-full min-h-screen flex items-center justify-center flex-col overflow-hidden">
        {/* SVG Background Pattern */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Grid Pattern */}
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke={
                    isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                  }
                  strokeWidth="1"
                />
              </pattern>

              {/* Brackets */}
              <pattern
                id="brackets"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <text
                  x="20"
                  y="50"
                  fontSize="40"
                  fill={
                    isDark
                      ? "rgba(59, 130, 246, 0.1)"
                      : "rgba(59, 130, 246, 0.08)"
                  }
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {"{ }"}
                </text>
              </pattern>

              {/* Dots */}
              <pattern
                id="dots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="1"
                  fill={
                    isDark
                      ? "rgba(147, 197, 253, 0.2)"
                      : "rgba(59, 130, 246, 0.15)"
                  }
                />
              </pattern>
            </defs>

            {/* Apply patterns */}
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#brackets)" />
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-br from-blue-900/60 via-blue-500/20 to-purple-900/60"
                : "bg-gradient-to-br from-blue-300/60 via-blue-500/20 to-purple-300/60"
            }`}
          />
        </div>

        {/* Floating Code Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-20 left-10 text-6xl opacity-20 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          &lt;/&gt;
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-32 right-20 text-5xl opacity-20 ${
            isDark ? "text-purple-400" : "text-purple-600"
          }`}
        >
          {"{"}
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-1/3 right-10 text-4xl opacity-20 ${
            isDark ? "text-green-400" : "text-green-600"
          }`}
        >
          {"()"}
        </motion.div>

        {/* Main Content */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer/>
      </section>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
