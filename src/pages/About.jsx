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
  SiGeeksforgeeks,
  SiFramer,
} from "react-icons/si";
import {
  FaJava,
  FaGithub,
  FaCode,
  FaFileExcel,
  FaGraduationCap,
  FaServer,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

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
      ],
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
        { skill: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { skill: "Redux", icon: SiRedux, color: "#764ABC" },
        { skill: "EJS", icon: FaCode, color: "#B4CA65" },
      ],
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
      ],
    },
    {
      title: "Databases",
      icon: HiDatabase,
      skills: [
        { skill: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { skill: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { skill: "SQL", icon: SiMysql, color: "#4479A1" },
      ],
    },
    {
      title: "Tools & Others",
      icon: FaGithub,
      skills: [
        { skill: "Git", icon: SiGit, color: "#F05032" },
        { skill: "GitHub", icon: FaGithub, color: "#181717" },
        { skill: "Excel", icon: FaFileExcel, color: "#217346" },
      ],
    },
  ];

  const codingProfiles = [
    { platform: "LeetCode", icon: SiLeetcode, color: "#FFA116", link: "https://leetcode.com/u/Dharamraj82/" },
    {
      platform: "CodeChef",
      icon: SiCodechef,
      color: isDark ? "#FFFFFF" : "#5B4638",
      link: "https://www.codechef.com/users/dharamraj82",
    },
    { platform: "HackerRank", icon: SiHackerrank, color: "#00EA64", link: "https://www.hackerrank.com/profile/dpy9572" },
    {
      platform: "GeeksforGeeks",
      icon: SiGeeksforgeeks,
      color: "#2F8D46",
      link: "https://www.geeksforgeeks.org/profile/dharamraj_pd_yadav",
    },
  ];

  return (
    <section
      id="about"
      className={`relative pt-32 pb-12 md:pt-40 lg:pt-48 md:pb-20 overflow-hidden`}
    >
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
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-center lg:text-left ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Web Developer,{" "}
              <span
                className={`block ${
                  isDark
                    ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                }`}
              >
                Problem Solver &amp; Tech Enthusiast
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-base md:text-lg leading-relaxed mb-8 max-w-2xl text-center lg:text-left ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I'm a{" "}
              <span className="text-purple-500 font-semibold">
                Full Stack Web Developer
              </span>{" "}
              who genuinely enjoys building things that matter. From crafting
              modern web apps with the MERN stack to solving problems on{" "}
              <span className="text-yellow-500 font-semibold">LeetCode</span>,{" "}
              <span className="text-[#795548] font-semibold">CodeChef</span>,{" "}
              <span className="text-green-600 font-semibold">GeeksforGeeks</span>
              , and{" "}
              <span className="text-green-400 font-semibold">HackerRank</span> —
              I'm always coding, always learning, and always looking to grow.
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
            <div
              className="absolute inset-4 bg-gradient-to-bl from-secondary to-primary opacity-50 blur-2xl animate-blob"
              style={{ animationDelay: "2s" }}
            ></div>

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] flex items-center justify-center">
              {/* Profile Image Container */}
              <div className="relative w-full h-full p-2 glass animate-liquid overflow-hidden shadow-2xl">
                <img
                  src="./profileImage.png"
                  alt="Developer Profile"
                  className="w-full h-full object-cover animate-liquid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="%236366f1"/></svg>';
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
            <h3
              className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              My Knowledge & Skills
            </h3>
            <p
              className={`text-base md:text-lg max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Here are the technologies and tools I work with to bring ideas to
              life.
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
                <h3
                  className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? "text-white" : "text-gray-900"}`}
                >
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
            <h3
              className={`text-2xl font-bold mb-8 flex items-center justify-center gap-3 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <HiCode size={24} />
              </div>
              Where I practice and prove my programming skills.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mx-auto">
              {codingProfiles.map((profile, idx) => (
                <a
                  key={idx}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden glass border shadow-sm hover:shadow-xl"
                  style={{
                    borderColor: isDark
                      ? `${profile.color}30`
                      : `${profile.color}40`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${profile.color}, transparent 70%)`,
                    }}
                  ></div>
                  <profile.icon
                    size={48}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      color: profile.color,
                      filter: `drop-shadow(0 0 12px ${profile.color}80)`,
                    }}
                  />
                  <span
                    className="font-bold text-base md:text-lg relative z-10"
                    style={{ color: isDark ? "#f8fafc" : "#0f172a" }}
                  >
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full mt-8 mb-8"
        >
          <h3
            className={`text-2xl md:text-3xl font-bold mb-16 flex items-center justify-center gap-3 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <FaGraduationCap size={28} />
            </div>
            Education Journey
          </h3>

          {/* ── Desktop: Alternating Timeline ── */}
          <div
            className="hidden md:block relative w-full max-w-5xl mx-auto"
            style={{ minHeight: "360px" }}
          >
            {/* Central glowing line */}
            <div className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2 z-0 rounded-full">
              <div
                className={`w-full h-full rounded-full ${
                  isDark
                    ? "bg-gradient-to-r from-transparent via-primary to-transparent"
                    : "bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                } shadow-[0_0_16px_rgba(37,99,235,0.6)]`}
              ></div>
            </div>

            <div
              className="grid grid-cols-4 gap-6 relative z-10"
              style={{ minHeight: "360px" }}
            >
              {/* ─ 10th: Card ABOVE ─ */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center group cursor-default"
                style={{ minHeight: "360px" }}
              >
                <div
                  className={`w-full rounded-2xl p-5 flex-shrink-0 border text-center transition-all duration-300 ease-out relative overflow-hidden
                  group-hover:-translate-y-2 group-hover:border-primary/60
                  group-hover:shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_8px_32px_rgba(37,99,235,0.25),0_0_40px_rgba(37,99,235,0.1)]
                  ${isDark ? "bg-white/5 border-white/10 backdrop-blur-sm" : "bg-white border-slate-200 shadow-sm"}`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)",
                    }}
                  ></div>
                  <div
                    className={`text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${isDark ? "text-primary/50" : "text-primary/40"}`}
                  >
                    2018 – 2019
                  </div>
                  <h4
                    className={`font-black text-base mb-1.5 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Matriculation
                  </h4>
                  <p
                    className={`text-xs flex items-center justify-center gap-1.5 mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    UPG +2 High School, Jagdishpur
                  </p>
                  <span
                    className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.3)]
                    ${isDark ? "bg-primary/10 text-primary border-primary/25" : "bg-blue-50 text-primary border-primary/20"}`}
                  >
                    Percentage: 84%
                  </span>
                </div>
                <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/50 to-primary/20 min-h-[24px]"></div>
                <div
                  className={`w-[52px] h-[52px] rounded-full flex-shrink-0 flex items-center justify-center border-[3px] bg-surface relative z-10 transition-all duration-500
                  border-primary/40 shadow-[0_0_0_5px_rgba(37,99,235,0.06)]
                  group-hover:border-primary group-hover:shadow-[0_0_0_8px_rgba(37,99,235,0.12),0_0_28px_rgba(37,99,235,0.5),0_0_50px_rgba(37,99,235,0.2)]`}
                >
                  <span className="text-[11px] font-black text-primary tracking-tight">
                    10TH
                  </span>
                </div>
                <div className="flex-1 min-h-[24px]"></div>
              </motion.div>

              {/* ─ 12th: Card BELOW ─ */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center group cursor-default"
                style={{ minHeight: "360px" }}
              >
                <div className="flex-1 min-h-[24px]"></div>
                <div
                  className={`w-[52px] h-[52px] rounded-full flex-shrink-0 flex items-center justify-center border-[3px] bg-surface relative z-10 transition-all duration-500
                  border-primary/50 shadow-[0_0_0_5px_rgba(37,99,235,0.08)]
                  group-hover:border-primary group-hover:shadow-[0_0_0_8px_rgba(37,99,235,0.15),0_0_28px_rgba(37,99,235,0.55),0_0_50px_rgba(37,99,235,0.2)]`}
                >
                  <span className="text-[11px] font-black text-primary tracking-tight">
                    12TH
                  </span>
                </div>
                <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/20 to-primary/50 min-h-[24px]"></div>
                <div
                  className={`w-full rounded-2xl p-5 flex-shrink-0 border text-center transition-all duration-300 ease-out relative overflow-hidden
                  group-hover:translate-y-2 group-hover:border-primary/60
                  group-hover:shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_8px_32px_rgba(37,99,235,0.25),0_0_40px_rgba(37,99,235,0.1)]
                  ${isDark ? "bg-white/5 border-white/10 backdrop-blur-sm" : "bg-white border-slate-200 shadow-sm"}`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.08) 0%, transparent 70%)",
                    }}
                  ></div>
                  <div
                    className={`text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${isDark ? "text-primary/50" : "text-primary/40"}`}
                  >
                    2019 – 2021
                  </div>
                  <h4
                    className={`font-black text-base mb-1.5 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Intermediate of Science (PCM)
                  </h4>
                  <p
                    className={`text-xs flex items-center justify-center gap-1.5 mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Upg+2 high school Dagarnawa
                  </p>
                  <span
                    className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.3)]
                    ${isDark ? "bg-primary/10 text-primary border-primary/25" : "bg-blue-50 text-primary border-primary/20"}`}
                  >
                    Percentage: 76.6%
                  </span>
                </div>
              </motion.div>

              {/* ─ BCA: Card ABOVE ─ */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center group cursor-default"
                style={{ minHeight: "360px" }}
              >
                <div
                  className={`w-full rounded-2xl p-5 flex-shrink-0 border text-center transition-all duration-300 ease-out relative overflow-hidden
                  group-hover:-translate-y-2 group-hover:border-primary/70
                  group-hover:shadow-[0_0_0_1px_rgba(37,99,235,0.35),0_8px_36px_rgba(37,99,235,0.3),0_0_50px_rgba(37,99,235,0.15)]
                  ${isDark ? "bg-white/5 border-white/10 backdrop-blur-sm" : "bg-white border-slate-200 shadow-sm"}`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)",
                    }}
                  ></div>
                  <div
                    className={`text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${isDark ? "text-primary/60" : "text-primary/50"}`}
                  >
                    2021 – 2024
                  </div>
                  <h4
                    className={`font-black text-base mb-1.5 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Bachelor of Computer Applications
                  </h4>
                  <p
                    className={`text-xs flex items-center justify-center gap-1.5 mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Vinoba Bhave University
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    <span
                      className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.3)]
                      ${isDark ? "bg-primary/15 text-primary border-primary/35" : "bg-primary/10 text-primary border-primary/25"}`}
                    >
                      CGPA: 7.3
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full border transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(234,88,12,0.3)]
                      ${isDark ? "bg-accent/10 text-accent border-accent/30" : "bg-orange-50 text-accent border-accent/25"}`}
                    >
                      <HiSparkles size={9} /> Best: 8.05
                    </span>
                  </div>
                </div>
                <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/50 to-primary/20 min-h-[24px]"></div>
                <div
                  className={`w-[52px] h-[52px] rounded-full flex-shrink-0 flex items-center justify-center border-[3px] bg-surface relative z-10 transition-all duration-500
                    border-primary/50 shadow-[0_0_0_5px_rgba(37,99,235,0.08)]
                    group-hover:border-primary group-hover:shadow-[0_0_0_8px_rgba(37,99,235,0.15),0_0_28px_rgba(37,99,235,0.55),0_0_50px_rgba(37,99,235,0.2)]`}
                >
                  <span className="text-[11px] font-black text-primary tracking-tight">
                    BCA
                  </span>
                </div>
                <div className="flex-1 min-h-[24px]"></div>
              </motion.div>

              {/* ─ MCA: Card BELOW ─ */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center group cursor-default"
                style={{ minHeight: "360px" }}
              >
                <div className="flex-1 min-h-[24px]"></div>
                <div
                  className={`w-[52px] h-[52px] rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-primary to-accent z-10 transition-all duration-300 ease-out animate-pulse group-hover:animate-none
                  shadow-[0_0_0_5px_rgba(37,99,235,0.15),0_0_22px_rgba(37,99,235,0.55)]
                  group-hover:shadow-[0_0_0_10px_rgba(37,99,235,0.18),0_0_40px_rgba(37,99,235,0.8),0_0_70px_rgba(37,99,235,0.3)]`}
                >
                  <span className="text-[11px] font-black text-white tracking-tight drop-shadow">
                    MCA
                  </span>
                </div>
                <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/20 to-primary/50 min-h-[24px]"></div>
                <div
                  className={`w-full rounded-2xl p-5 flex-shrink-0 border text-center transition-all duration-300 ease-out relative overflow-hidden
                  group-hover:translate-y-2 group-hover:border-primary/70
                  group-hover:shadow-[0_0_0_1px_rgba(37,99,235,0.35),0_8px_36px_rgba(37,99,235,0.3),0_0_55px_rgba(37,99,235,0.18)]
                  ${isDark ? "bg-gradient-to-b from-primary/12 to-accent/8 border-primary/30 backdrop-blur-sm" : "bg-gradient-to-b from-blue-50 to-orange-50/50 border-primary/25 shadow-sm"}`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.1) 0%, transparent 70%)",
                    }}
                  ></div>
                  <div
                    className={`text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${isDark ? "text-primary/60" : "text-primary/50"}`}
                  >
                    2023 – Present
                  </div>
                  <h4
                    className={`font-black text-base mb-1.5 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Masters of Computer Applications
                  </h4>
                  <p
                    className={`text-xs flex items-center justify-center gap-1.5 mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Galgotias University
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    <span
                      className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.3)]
                      ${isDark ? "bg-primary/15 text-primary border-primary/35" : "bg-primary/10 text-primary border-primary/25"}`}
                    >
                      SGPA: 9.15
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full border transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(234,88,12,0.3)]
                      ${isDark ? "bg-accent/10 text-accent border-accent/30" : "bg-orange-50 text-accent border-accent/25"}`}
                    >
                      <HiSparkles size={9} /> Best: 9.15
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Mobile: Vertical Timeline ── */}
          <div className="md:hidden relative flex flex-col gap-0 pl-12">
            <div className="absolute top-5 bottom-5 left-5 w-[2px] rounded-full bg-gradient-to-b from-primary/15 via-primary to-primary/15 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>

            {[
              {
                label: "10TH",
                year: "2016–2017",
                title: "Matriculation",
                sub: "High School",
                score: "85%",
                scoreType: "percent",
                delay: 0.1,
              },
              {
                label: "12TH",
                year: "2017–2019",
                title: "Intermediate",
                sub: "UPG+2 Daganwar",
                score: "80%",
                scoreType: "percent",
                delay: 0.2,
              },
              {
                label: "BCA",
                year: "2019–2022",
                title: "Bachelors (BCA)",
                sub: "Vinoba Bhave Univ.",
                score: "8.5",
                highest: "9.0",
                scoreType: "cgpa",
                delay: 0.3,
              },
              {
                label: "MCA",
                year: "2023–Now",
                title: "Masters (MCA)",
                sub: "Currently Pursuing",
                score: "8.8",
                highest: "9.2",
                scoreType: "cgpa",
                active: true,
                delay: 0.4,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="relative flex items-start gap-4 pb-8 last:pb-0 group"
              >
                <div
                  className={`absolute -left-[1.45rem] top-1 w-10 h-10 rounded-full flex items-center justify-center z-10 border-[2.5px] transition-all duration-500 ${
                    item.active
                      ? "bg-gradient-to-br from-primary to-accent border-transparent shadow-[0_0_0_4px_rgba(37,99,235,0.18),0_0_18px_rgba(37,99,235,0.55)] animate-pulse"
                      : item.scoreType === "cgpa"
                        ? "bg-primary border-primary shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                        : "bg-surface border-primary/40 shadow-[0_0_8px_rgba(37,99,235,0.2)]"
                  }`}
                >
                  <span
                    className={`text-[9px] font-black tracking-tight ${item.scoreType === "cgpa" || item.active ? "text-white" : "text-primary"}`}
                  >
                    {item.label}
                  </span>
                </div>
                <div
                  className={`w-full rounded-xl p-4 border transition-all duration-300 group-hover:border-primary/40
                  group-hover:shadow-[0_0_0_1px_rgba(37,99,235,0.2),0_4px_20px_rgba(37,99,235,0.2),0_0_35px_rgba(37,99,235,0.08)] ${
                    item.active
                      ? isDark
                        ? "bg-gradient-to-b from-primary/12 to-accent/8 border-primary/30"
                        : "bg-gradient-to-b from-blue-50 to-orange-50/50 border-primary/25 shadow-sm"
                      : item.scoreType === "cgpa"
                        ? isDark
                          ? "bg-primary/10 border-primary/20"
                          : "bg-blue-50/80 border-primary/20 shadow-sm"
                        : isDark
                          ? "bg-white/5 border-white/10"
                          : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  {item.active && (
                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-[1.5px] border-surface animate-ping opacity-80"></span>
                  )}
                  <div
                    className={`text-[9px] font-extrabold uppercase tracking-[0.12em] mb-1 ${isDark ? "text-primary/60" : "text-primary/50"}`}
                  >
                    {item.year}
                  </div>
                  <h4
                    className={`text-sm font-black mb-0.5 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-[11px] flex items-center gap-1 mb-3 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {item.sub}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${isDark ? "bg-primary/10 border-primary/30 text-primary" : "bg-primary/8 border-primary/20 text-primary"}`}
                    >
                      {item.scoreType === "cgpa"
                        ? `CGPA: ${item.score}`
                        : `${item.score}`}
                    </span>
                    {item.highest && (
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-0.5 ${isDark ? "bg-accent/10 border-accent/30 text-accent" : "bg-orange-50 border-accent/20 text-accent"}`}
                      >
                        <HiSparkles size={9} /> Best: {item.highest}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
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
          <h3
            className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? "text-white" : "text-slate-900"}`}
          >
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
