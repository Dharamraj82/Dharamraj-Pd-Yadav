import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import ToggleButton from "./components/ToggleButton";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import CircularText from "./uiComponents/CircularText";
import CountUp from "./uiComponents/CountUp";
import AboutMe from "./components/AboutMe";
import Technology from "./pages/Technology";
import Project from "./components/Project";
import Projects from "./pages/Projects";
import Page404 from "./pages/Page404";
import Footer from "./pages/Footer";
import useLenis from "./context/useLenis";

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!showMainContent) {
    return (
      <div className="flex items-center justify-center h-screen bg-secondary transition-all duration-500">
        <CountUp
          from={0}
          to={100}
          separator=","
          direction="up"
          duration={1}
          className="text-5xl text-primary font-bold"
        />
      </div>
    );
  }
  return (
    <ThemeProvider>
      <Header />
      <div className="h-screen overflow-hidden bg-primary px-5 pt-14 transition-all duration-500 text-secondary">
        <div className="h-full overflow-y-auto scroll-hidden  transition-all duration-500">
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex flex-col gap-10">
                  <Home />
                  <section id="about">
                    <AboutMe />
                  </section>
                  <section id="technology">
                    <Technology />
                  </section>
                  <section id="projects">
                    <Project />
                  </section>
                </div>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </div>

        <div className="fixed text-secondary z-[9999] bottom-5 transition-all duration-500 right-5">
          <CircularText
            text="Dharamraj*Pd*Yadav*Portfolio*"
            onHover="pause"
            spinDuration={10}
            className="custom-class"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
