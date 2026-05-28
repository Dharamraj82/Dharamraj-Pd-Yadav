import { motion } from "framer-motion";
import { HiCode, HiLightningBolt } from "react-icons/hi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiFramer ,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";
import { useTheme } from "../context/ThemeProvider";

function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Projects Data
  const projects = [
       {
      id: "project-docbook",
      title: "DOCBOOK - Doctor Appointment System",
      description:
        "A comprehensive doctor-patient appointment booking application built with MERN stack. Features real-time appointment scheduling, user authentication, profile management, and an intuitive dashboard for both doctors and patients.",
      image: "./projectsImages/docbook.png",
      category: "Full Stack",
      techStack: [
        { name: "React.js", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express", icon: SiExpress },
        { name: "Joi (Validation)", icon: HiCode },
        { name: "Framer-Motion", icon: SiFramer },
      ],
      liveUrl: "https://docbook-frontend-taupe.vercel.app/",
      githubUrl: "https://github.com/Dharamraj82/DOCBOOK_Frontend",
      docsUrl:
        "https://github.com/Dharamraj82/DOCBOOK_Frontend/blob/main/README.md",
    },
    {
      id: "project-portfolio",
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my projects and skills. Built with React.js and Tailwind CSS, featuring smooth animations, dark mode toggle, and an interactive project showcase with detailed case studies.",
      image: "./projectsImages/portfolio.png",
      category: "Frontend and Backend",
      techStack: [
        { name: "React.js", icon: SiReact },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Express", icon: SiExpress },
        { name: "Framer-Motion", icon: SiFramer },
        { name: "Nodemailer", icon: HiCode },
      ],
      liveUrl: "https://dharamraj-pd-yadav.vercel.app/",
      githubUrl: "https://github.com/Dharamraj82/Dharamraj-Pd-Yadav",
      docsUrl: null,
    },
    {
      id: "project-notemaker",
      title: "AI-Notetaker",
      description:
        "AI Notetaker is an AI-powered application that generates structured, clean, and visually clear notes from user prompts and uploaded files.The system is designed with simplicity, clarity, and productivity in mind.",
      image: "./projectsImages/aINotetaker.png",
      category: "Full Stack",
      techStack: [
        { name: "React.js", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express", icon: SiExpress },
        { name: "Groq", icon: HiCode },
        { name: "Nodemailer", icon: HiCode },
      ],
      liveUrl: "https://ai-notetaker-ten.vercel.app/",
      githubUrl: "https://github.com/Dharamraj82/AI-Notetaker",
      docsUrl:
        "https://github.com/Dharamraj82/AI-Notetaker/blob/main/README.md",
    },
  ];

  return (
    <section
      id="projects"
      className={`relative py-12 md:py-20`}
    >
      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <HiCode
              className={isDark ? "text-primary" : "text-primary"}
              size={32}
            />
            <span
              className={`text-sm md:text-base font-semibold uppercase tracking-wider ${
                isDark ? "text-primary" : "text-primary"
              }`}
            >
              My Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Featured{" "}
            <span
              className={
                isDark
                  ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              }
            >
              Work & Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Explore my latest projects showcasing my expertise in full-stack
            development, from concept to deployment.
          </motion.p>
        </div>


        {/* Projects Grid */}
        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/projects"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none ${
              isDark
                ? "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.3)]"
                : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.15)]"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
            <HiLightningBolt size={24} className="relative z-10" />
            <span className="relative z-10" style={{ textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.4)' : 'none' }}>View More Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
