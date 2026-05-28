import { motion } from "framer-motion";
import { HiCode, HiLightningBolt } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFramer
} from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { useTheme } from "../context/ThemeProvider";
import ProjectCard from "../components/ProjectCard";

function Projects() {
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
    {
      id: "project-aiCoder",
      title: "AI Power Coder",
      description:
        "AI Power Coder is an intelligent code reviewer and assistant built for developers. It uses advanced AI to analyze, review, and explain code in real time helping developers write better, faster, and more secure code.",
      image: "./projectsImages/aiCoder.png",
      category: "Full Stack",
      techStack: [
        { name: "React.js", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Gemini", icon: RiGeminiFill },
      ],
      liveUrl: "https://ai-powered-coder-6fk8.vercel.app/",
      githubUrl: "https://github.com/Dharamraj82/AI-Powered-Coder",
      docsUrl:
        "https://github.com/Dharamraj82/AI-Powered-Coder/blob/main/README.md",
    },
    {
      id: "project-taskManager",
      title: "Employee Task Management System",
      description:
        "Built a task management system with role-based access for admins and employees.",
      image: "./projectsImages/taskManager.png",
      category: "Frontend",
      techStack: [
        { name: "React.js", icon: SiReact },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "LocalStorage", icon: SiJavascript },
      ],
      liveUrl: "https://employees-task-management.vercel.app/",
      githubUrl:
        "https://github.com/Dharamraj82/Employees-task-management/tree/main",
      docsUrl: null,
    },
    {
      id: "project-templateCustomization",
      title: "Build Yourself (Template Customization)",
      description:
        "Users browse and choose a template that fits their needs. Users edit the template’s text, images, and other elements to personalize it.",
      image: "./projectsImages/buildYourslef.png",
      category: "Full Stack",
      techStack: [
        { name: "EJS", icon: HiCode },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express", icon: SiExpress },
      ],
      liveUrl: null,
      githubUrl: "https://github.com/Dharamraj82/Build-Yourself",
      docsUrl: null,
    },

    {
      id: "project-landingPage",
      title: "Watch-LandingPage",
      description: "",
      image: "./projectsImages/watch.png",
      category: "Frontend",
      techStack: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "Javascript", icon: SiJavascript },
      ],
      liveUrl: "https://dharamraj82.github.io/Watch-LandingPage/",
      githubUrl: "https://github.com/Dharamraj82/Watch-LandingPage",
      docsUrl: null,
    },
  ];

  return (
    <section
      id="projects"
      className={`relative py-20 md:py-32 overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="projectGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke={
                  isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(147, 51, 234, 0.1)"
                }
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectGrid)" />
        </svg>
      </div>



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
              isDark ? "text-white" : "text-gray-900"
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
              isDark ? "text-gray-300" : "text-gray-600"
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
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <a
          href="https://github.com/Dharamraj82"
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none ${
            isDark
              ? "bg-gradient-to-b from-slate-700 to-slate-800 text-white border-t border-white/20 border-x border-white/5 border-b-0 shadow-[0_5px_0_rgba(30,41,59,1),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(30,41,59,1),_0_5px_10px_rgba(0,0,0,0.3)]"
              : "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 border-t border-white/80 border-x border-white/40 border-b-0 shadow-[0_5px_0_rgba(203,213,225,1),_0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_0_rgba(203,213,225,1),_0_5px_10px_rgba(0,0,0,0.05)]"
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
          <FaGithub size={24} className="relative z-10" />
          <span className="relative z-10">View More on Github</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;
