import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Certifications from "./Certifications";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <section id="certifications">
        <Certifications isHomePage={true} />
      </section>
      <BlogSection/>
      <ContactSection/>
    </div>
  );
}

export default Home;
