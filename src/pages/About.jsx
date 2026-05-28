import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiSparkles,
  HiCode,
  HiDatabase,
  HiLightningBolt,
} from "react-icons/hi";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiCplusplus,
  SiPostgresql,
  SiSocketdotio,
  SiRedux,
  SiPython,
  SiFastapi,
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
  SiGeeksforgeeks
} from "react-icons/si";
import { FaJava, FaGithub, FaSchool, FaFileExcel, FaGraduationCap, FaCode, FaServer, FaLinkedin, FaEnvelope } from "react-icons/fa";

import SkillBadge from "../components/SkillBadge";
import { useTheme } from "../context/ThemeProvider";

function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const skillCategories = [
    {
      title: "Languages",
      icon: FaCode,
      skills: [
        { skill: "C++", icon: SiCplusplus, color: "#00599C" },
        { skill: "Java", icon: FaJava, color: "#007396" },
        { skill: "Python", icon: SiPython, color: "#3776AB" },
      ]
    },
    {
      title: "Frontend",
      icon: HiSparkles,
      skills: [
        { skill: "HTML", icon: SiHtml5, color: "#E34F26" },
        { skill: "CSS", icon: SiCss3, color: "#1572B6" },
        { skill: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { skill: "React.js", icon: SiReact, color: "#61DAFB" },
        { skill: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { skill: "Redux", icon: SiRedux, color: "#764ABC" },
        { skill: "EJS", icon: FaCode, color: "#B4CA65" },
      ]
    },
    {
      title: "Backend",
      icon: FaServer,
      skills: [
        { skill: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { skill: "Express", icon: SiExpress, color: "#68A063" },
        { skill: "FastAPI", icon: SiFastapi, color: "#009688" },
        { skill: "Servlet", icon: FaJava, color: "#EA2D2E" },
        { skill: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      ]
    },
    {
      title: "Databases",
      icon: HiDatabase,
      skills: [
        { skill: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { skill: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { skill: "SQL", icon: SiMysql, color: "#4479A1" },
      ]
    },
    {
      title: "Tools & Others",
      icon: FaGithub,
      skills: [
        { skill: "Git", icon: SiGit, color: "#F05032" },
        { skill: "GitHub", icon: FaGithub, color: "#181717" },
        { skill: "Excel", icon: FaFileExcel, color: "#217346" },
      ]
    }
  ];

  const codingProfiles = [
    { platform: "LeetCode", icon: SiLeetcode, color: "#FFA116", link: "#" },
    { platform: "CodeChef", icon: SiCodechef, color: isDark ? "#FFFFFF" : "#5B4638", link: "#" },
    { platform: "HackerRank", icon: SiHackerrank, color: "#00EA64", link: "#" },
    { platform: "GeeksforGeeks", icon: SiGeeksforgeeks, color: "#2F8D46", link: "#" },
  ];

  return (
    <section id="about" className={`relative pt-32 pb-12 md:pt-40 lg:pt-48 md:pb-20 overflow-hidden`}>
      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero: Text + Image ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <HiSparkles className="text-primary" size={24} />
              <span className="text-sm md:text-base font-semibold uppercase tracking-wider text-primary">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Full Stack Web Developer{" "}
              <span
                className={
                  isDark
                    ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                }
              >
                & Tech Enthusiast
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-base md:text-lg leading-relaxed mb-8 max-w-2xl ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              A passionate Full Stack Web Developer and BCA Graduate from Vinoba
              Bhave University, Jharkhand. With a strong grip on the MERN stack,
              I love crafting efficient, scalable, and visually appealing web
              applications. My passion lies in transforming ideas into
              real-world digital experiences.
            </motion.p>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/dharamraj-pd-yadav"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none
                  bg-gradient-to-b from-[#0A66C2] to-[#074d94]
                  border-t border-white/25 border-x border-white/10 border-b-0
                  shadow-[0_5px_0_rgba(4,38,80,1),_0_10px_20px_rgba(10,102,194,0.35)]
                  hover:shadow-[0_3px_0_rgba(4,38,80,1),_0_5px_10px_rgba(10,102,194,0.25)]"
              >
                <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
                <FaLinkedin size={22} className="relative z-10" />
                <span className="relative z-10">LinkedIn</span>
              </a>
              {/* Gmail */}
              <a
                href="mailto:dharamrajyadav8227@gmail.com"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none
                  bg-gradient-to-b from-[#EA4335] to-[#c1291d]
                  border-t border-white/25 border-x border-white/10 border-b-0
                  shadow-[0_5px_0_rgba(120,20,10,1),_0_10px_20px_rgba(234,67,53,0.35)]
                  hover:shadow-[0_3px_0_rgba(120,20,10,1),_0_5px_10px_rgba(234,67,53,0.25)]"
              >
                <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
                <FaEnvelope size={20} className="relative z-10" />
                <span className="relative z-10">Gmail</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-50 blur-3xl animate-blob"></div>
            <div className="absolute inset-4 bg-gradient-to-bl from-secondary to-primary opacity-50 blur-2xl animate-blob" style={{ animationDelay: "2s" }}></div>

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] flex items-center justify-center">
              {/* Profile Image Container */}
              <div className="relative w-full h-full p-2 glass animate-liquid overflow-hidden shadow-2xl">
                <img
                  src="./profileImage.png"
                  alt="Developer Profile"
                  className="w-full h-full object-cover animate-liquid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="%236366f1"/></svg>';
                  }}
                />
                
                {/* Glassmorphism overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Knowledge & Skills ── */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              My Knowledge & Skills
            </h3>
            <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + catIdx * 0.1 }}
                className="glass p-6 rounded-2xl border border-white/10 shadow-lg"
              >
                <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon size={20} />
                  </div>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((item, idx) => (
                    <SkillBadge
                      key={idx}
                      skill={item.skill}
                      icon={item.icon}
                      color={item.color}
                      delay={idx * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Competitive Programming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 flex flex-col items-center w-full"
          >
            <h3 className={`text-2xl font-bold mb-8 flex items-center justify-center gap-3 ${isDark ? "text-white" : "text-gray-900"}`}>
              <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <HiCode size={24} />
              </div>
              Competitive Programming
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mx-auto">
              {codingProfiles.map((profile, idx) => (
                <a
                  key={idx}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden glass border shadow-sm hover:shadow-xl"
                  style={{ borderColor: isDark ? `${profile.color}30` : `${profile.color}40` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${profile.color}, transparent 70%)` }}></div>
                  <profile.icon
                    size={48}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: profile.color, filter: `drop-shadow(0 0 12px ${profile.color}80)` }}
                  />
                  <span className="font-bold text-base md:text-lg relative z-10" style={{ color: isDark ? "#f8fafc" : "#0f172a" }}>
                    {profile.platform}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Education Journey ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full mt-8 mb-8"
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-12 flex items-center justify-center gap-3 ${isDark ? "text-white" : "text-slate-900"}`}>
            <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <FaGraduationCap size={28} />
            </div>
            Education Journey
          </h3>

          <div className="relative w-full max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-[26px] left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)] z-0"></div>
            <div className="md:hidden absolute top-[28px] bottom-[28px] left-[27px] w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)] z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              {/* 10th */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative flex flex-row md:flex-col items-center gap-4 md:gap-6 group"
              >
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] transition-all duration-300 z-10">
                  <span className="text-primary font-bold text-base md:text-lg">10th</span>
                </div>
                <div className="glass p-6 md:p-8 rounded-2xl w-full text-left md:text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] group-hover:border-primary/50">
                  <h4 className="text-lg md:text-xl font-bold text-main mb-2">Matriculation</h4>
                  <p className="text-sm md:text-base font-semibold text-primary mb-3 flex items-center md:justify-center gap-2">
                    <FaSchool size={16} /> High School
                  </p>
                  <p className="text-sm md:text-base text-muted">Foundational Studies</p>
                </div>
              </motion.div>

              {/* 12th */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex flex-row md:flex-col items-center gap-4 md:gap-6 group"
              >
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] transition-all duration-300 z-10">
                  <span className="text-primary font-bold text-base md:text-lg">12th</span>
                </div>
                <div className="glass p-6 md:p-8 rounded-2xl w-full text-left md:text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] group-hover:border-primary/50">
                  <h4 className="text-lg md:text-xl font-bold text-main mb-2">Intermediate</h4>
                  <p className="text-sm md:text-base font-semibold text-primary mb-3 flex items-center md:justify-center gap-2">
                    <FaSchool size={16} /> UPG+2 Daganwar
                  </p>
                  <p className="text-sm md:text-base text-muted">Physics, Chem, Math</p>
                </div>
              </motion.div>

              {/* BCA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative flex flex-row md:flex-col items-center gap-4 md:gap-6 group"
              >
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)] group-hover:shadow-[0_0_30px_rgba(37,99,235,1)] transition-all duration-300 z-10">
                  <span className="text-white font-bold text-base md:text-lg">BCA</span>
                </div>
                <div className="glass p-6 md:p-8 rounded-2xl w-full text-left md:text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] group-hover:border-primary/50 border-primary/30">
                  <h4 className="text-lg md:text-xl font-bold text-main mb-2">Bachelors (BCA)</h4>
                  <p className="text-sm md:text-base font-semibold text-primary mb-3 flex items-center md:justify-center gap-2">
                    <FaSchool size={16} /> Vinoba Bhave Univ.
                  </p>
                  <p className="text-sm md:text-base text-muted">Web & Software Dev</p>
                </div>
              </motion.div>

              {/* MCA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative flex flex-row md:flex-col items-center gap-4 md:gap-6 group"
              >
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.8)] group-hover:shadow-[0_0_35px_rgba(37,99,235,1)] animate-pulse z-10">
                  <span className="text-white font-bold text-base md:text-lg">MCA</span>
                </div>
                <div className="glass p-6 md:p-8 rounded-2xl w-full text-left md:text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] border-primary/50 group-hover:border-primary">
                  <h4 className="text-lg md:text-xl font-bold text-main mb-2">Masters (MCA)</h4>
                  <p className="text-sm md:text-base font-semibold text-primary mb-3 flex items-center md:justify-center gap-2">
                    <FaSchool size={16} /> Current
                  </p>
                  <p className="text-sm md:text-base text-muted">Advanced Computing</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom Call to Action ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full mt-24 mb-12 flex flex-col items-center text-center"
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? "text-white" : "text-slate-900"}`}>
            Want to explore more?
          </h3>

          <div className="flex flex-wrap justify-center gap-5">
            {/* My Certifications */}
            <Link
              to="/"
              className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none ${
                isDark
                  ? "bg-gradient-to-b from-slate-700 to-slate-800 text-white border-t border-white/20 border-x border-white/5 border-b-0 shadow-[0_5px_0_rgba(30,41,59,1),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(30,41,59,1),_0_5px_10px_rgba(0,0,0,0.3)]"
                  : "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 border-t border-white/80 border-x border-white/40 border-b-0 shadow-[0_5px_0_rgba(203,213,225,1),_0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_0_rgba(203,213,225,1),_0_5px_10px_rgba(0,0,0,0.05)]"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
              <span className="relative z-10">My Certifications</span>
            </Link>

            {/* View Projects */}
            <Link
              to="/projects"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none
                bg-gradient-to-b from-primary to-primary/80
                border-t border-white/25 border-x border-white/10 border-b-0
                shadow-[0_5px_0_rgba(180,60,0,1),_0_10px_20px_rgba(249,115,22,0.35)]
                hover:shadow-[0_3px_0_rgba(180,60,0,1),_0_5px_10px_rgba(249,115,22,0.25)]"
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
              <span className="relative z-10">View Projects</span>
            </Link>

            {/* Read Blogs */}
            <Link
              to="/blog"
              className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none ${
                isDark
                  ? "bg-gradient-to-b from-slate-700 to-slate-800 text-white border-t border-white/20 border-x border-white/5 border-b-0 shadow-[0_5px_0_rgba(30,41,59,1),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(30,41,59,1),_0_5px_10px_rgba(0,0,0,0.3)]"
                  : "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 border-t border-white/80 border-x border-white/40 border-b-0 shadow-[0_5px_0_rgba(203,213,225,1),_0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_0_rgba(203,213,225,1),_0_5px_10px_rgba(0,0,0,0.05)]"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
              <span className="relative z-10">Read Blogs</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
