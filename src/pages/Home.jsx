import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection/>
      <ContactSection/>
    </div>
  );
}

export default Home;
