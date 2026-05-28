import { motion } from "framer-motion";
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
import {FaJava, FaGithub, FaComment, FaSchool, FaFileExcel, FaGraduationCap, FaMapMarkerAlt, FaCode, FaServer} from "react-icons/fa";

import SkillBadge from "./SkillBadge";
import { useTheme } from "../context/ThemeProvider";

function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Skill Categories
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

  // Coding Profiles
  const codingProfiles = [
    { platform: "LeetCode", icon: SiLeetcode, color: "#FFA116", link: "#" },
    { platform: "CodeChef", icon: SiCodechef, color: isDark ? "#FFFFFF" : "#5B4638", link: "#" },
    { platform: "HackerRank", icon: SiHackerrank, color: "#00EA64", link: "#" },
    { platform: "GeeksforGeeks", icon: SiGeeksforgeeks, color: "#2F8D46", link: "#" },
  ];

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <HiSparkles
                className="text-primary"
                size={24}
              />
              <span
                className="text-sm md:text-base font-semibold uppercase tracking-wider text-primary"
              >
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-center ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Full Stack Web Developer{" "}
              <span
                className={`block ${
                  isDark
                    ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                }`}
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
              className={`text-base md:text-lg leading-relaxed mb-6 text-center ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              A passionate Full Stack Web Developer and BCA Graduate from Vinoba
              Bhave University, Jharkhand. With a strong grip on the MERN stack,
              I love crafting efficient, scalable, and visually appealing web
              applications. My passion lies in transforming ideas into
              real-world digital experiences.
            </motion.p>



            {/* Skill Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 mt-4">
              {skillCategories.map((category, catIdx) => (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + catIdx * 0.1 }}
                >
                  <h3 className={`text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    <category.icon className={isDark ? "text-primary" : "text-primary"} size={20} />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
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

            {/* Coding Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 mb-6 flex flex-col items-center md:items-start w-full"
            >
              <h3 className={`text-xl font-bold mb-6 flex items-center justify-center md:justify-start gap-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  <HiCode size={24} />
                </div>
                Competitive Programming
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {codingProfiles.map((profile, idx) => (
                  <a
                    key={idx}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden glass border shadow-sm hover:shadow-xl"
                    style={{ 
                      borderColor: isDark ? `${profile.color}30` : `${profile.color}40`,
                    }}
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${profile.color}, transparent 70%)` }}></div>
                    
                    {/* Icon with persistent drop shadow */}
                    <profile.icon 
                      size={42} 
                      className="relative z-10 transition-transform duration-500 group-hover:scale-110" 
                      style={{ 
                        color: profile.color, 
                        filter: `drop-shadow(0 0 12px ${profile.color}80)` 
                      }} 
                    />
                    
                    <span className="font-bold text-sm md:text-base relative z-10 transition-colors duration-300" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                      {profile.platform}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Education Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full mt-16 mb-8"
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-12 flex items-center justify-center gap-3 ${isDark ? "text-white" : "text-slate-900"}`}>
              <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <FaGraduationCap size={28} />
              </div>
              Education Journey
            </h3>

            <div className="relative w-full max-w-5xl mx-auto">
              {/* Horizontal line for desktop */}
              <div className="hidden md:block absolute top-[26px] left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)] z-0"></div>
              {/* Vertical line for mobile */}
              <div className="md:hidden absolute top-[28px] bottom-[28px] left-[27px] w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)] z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                {/* Node 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-6 group"
                >
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] transition-all duration-300 z-10 bg-surface">
                    <span className="text-primary font-bold text-base md:text-lg">10th</span>
                  </div>
                  <div className="glass p-6 md:p-8 rounded-2xl w-full text-left md:text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] group-hover:border-primary/50 relative">
                    <h4 className="text-lg md:text-xl font-bold text-main mb-2">Matriculation</h4>
                    <p className="text-sm md:text-base font-semibold text-primary mb-3 flex items-center md:justify-center gap-2">
                      <FaSchool size={16} /> High School
                    </p>
                    <p className="text-sm md:text-base text-muted">Foundational Studies</p>
                  </div>
                </motion.div>

                {/* Node 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-6 group"
                >
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] transition-all duration-300 z-10 bg-surface">
                    <span className="text-primary font-bold text-base md:text-lg">12th</span>
                  </div>
                  <div className="glass p-6 md:p-8 rounded-2xl w-full text-left md:text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] group-hover:border-primary/50 relative">
                    <h4 className="text-lg md:text-xl font-bold text-main mb-2">Intermediate</h4>
                    <p className="text-sm md:text-base font-semibold text-primary mb-3 flex items-center md:justify-center gap-2">
                      <FaSchool size={16} /> UPG+2 Daganwar
                    </p>
                    <p className="text-sm md:text-base text-muted">Physics, Chem, Math</p>
                  </div>
                </motion.div>

                {/* Node 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-6 group"
                >
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)] group-hover:shadow-[0_0_30px_rgba(37,99,235,1)] transition-all duration-300 z-10">
                    <span className="text-white font-bold text-base md:text-lg">BCA</span>
                  </div>
                  <div className="glass p-6 md:p-8 rounded-2xl w-full text-left md:text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] group-hover:border-primary/50 relative border-primary/30">
                    <h4 className="text-lg md:text-xl font-bold text-main mb-2">Bachelors (BCA)</h4>
                    <p className="text-sm md:text-base font-semibold text-primary mb-3 flex items-center md:justify-center gap-2">
                      <FaSchool size={16} /> Vinoba Bhave Univ.
                    </p>
                    <p className="text-sm md:text-base text-muted">Web & Software Dev</p>
                  </div>
                </motion.div>

                {/* Node 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-6 group"
                >
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.8)] group-hover:shadow-[0_0_35px_rgba(37,99,235,1)] animate-pulse z-10">
                    <span className="text-white font-bold text-base md:text-lg">MCA</span>
                  </div>
                  <div className="glass p-6 md:p-8 rounded-2xl w-full text-left md:text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] border-primary/50 group-hover:border-primary relative">
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
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
