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
import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from "./context/ThemeProvider";
import Header from "./components/Header";
import useLenis from "./context/useLenis";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

import BackgroundAnimation from "./components/BackgroundAnimation";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Page404 = lazy(() => import("./pages/Page404"));
const Blogs = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Contact = lazy(() => import("./pages/Contact"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminLayout = lazy(() => import("./components/admin/AdminLayout"));
const AdminHome = lazy(() => import("./pages/admin/AdminHome"));
const AdminProjects = lazy(() => import("./pages/admin/AdminProjects"));
const AdminTech = lazy(() => import("./pages/admin/AdminTech"));
const AdminBlogs = lazy(() => import("./pages/admin/AdminBlogs"));
const AdminCertifications = lazy(() => import("./pages/admin/AdminCertifications"));
const AdminUpdates = lazy(() => import("./pages/admin/AdminUpdates"));

// Fallback loader component (Hero Skeleton)
const PageLoader = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div className="min-h-screen flex items-center justify-center w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 animate-pulse">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Side: Text Skeleton */}
        <div className="flex flex-col justify-center items-start order-2 lg:order-1">
          {/* Trust Badge Skeleton */}
          <div className={`w-48 h-10 rounded-full mb-6 ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`}></div>
          
          {/* Main Heading Skeleton */}
          <div className={`w-32 h-12 md:h-16 rounded-lg mb-2 ${isDark ? 'bg-white/10' : 'bg-slate-300'}`}></div>
          <div className={`w-3/4 h-14 md:h-20 rounded-xl mb-6 ${isDark ? 'bg-white/10' : 'bg-slate-300'}`}></div>
          
          {/* Description Skeleton */}
          <div className={`w-full max-w-lg h-24 rounded-xl mb-10 ${isDark ? 'bg-white/5' : 'bg-slate-200'}`}></div>
          
          {/* Buttons Skeleton */}
          <div className="flex flex-wrap items-center gap-4">
            <div className={`w-36 h-12 rounded-full ${isDark ? 'bg-primary/30' : 'bg-primary/20'}`}></div>
            <div className={`w-36 h-12 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-300'}`}></div>
          </div>
        </div>

        {/* Right Side: Image Skeleton */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
          <div className={`w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-200 border-slate-300'} border`}></div>
        </div>
      </div>
    </div>
  );
};

function AppContent() {
  useLenis();
  const { theme } = useTheme();
  const location = useLocation();
  const isDark = theme === "dark";
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="tech" element={<AdminTech />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="certifications" element={<AdminCertifications />} />
            <Route path="updates" element={<AdminUpdates />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-darkBg text-white' : 'bg-slate-50 text-slate-900'}`}>
      <section className="relative w-full min-h-screen flex items-center justify-center flex-col overflow-hidden">
        
        {/* Modern Background with Ribbons/Waves */}
        <BackgroundAnimation />

        {/* Gradient Overlay for subtle texture */}
        <div className={`fixed inset-0 z-0 opacity-50 ${isDark ? 'bg-[url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' : 'bg-[url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'}`} />

        <div className="relative z-10 w-full flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Page404 />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CookieConsent />
        </div>
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
