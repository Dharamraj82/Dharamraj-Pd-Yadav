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
  SiGeeksforgeeks,
  SiFramer,
} from "react-icons/si";
import {
  FaJava,
  FaGithub,
  FaComment,
  FaSchool,
  FaFileExcel,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
  FaServer,
  FaVirus,
} from "react-icons/fa";

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

  // Coding Profiles
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
    <section id="about" className="py-10 md:py-14">
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
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-center ${
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
                Problem Solver & Tech Enthusiast
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
              I'm a{" "}
              <span className="text-purple-500 font-semibold">
                Full Stack Web Developer
              </span>{" "}
              who genuinely enjoys building things that matter. From crafting
              modern web apps with the MERN stack to solving problems on{" "}
              <span className="text-yellow-500 font-semibold">LeetCode</span>,{" "}
              <span className="text-[#795548] font-semibold">CodeChef</span>,{" "}
              <span className="text-green-600 font-semibold">
                GeeksforGeeks
              </span>
              , and{" "}
              <span className="text-green-400 font-semibold">HackerRank</span> —
              I'm always coding, always learning, and always looking to grow.
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
                  <h3
                    className={`text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    <category.icon
                      className={isDark ? "text-primary" : "text-primary"}
                      size={20}
                    />
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
              <h3
                className={`text-xl font-bold mb-6 flex items-center justify-center md:justify-start gap-3 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  <HiCode size={24} />
                </div>
                Where I practice and prove my programming skills.
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
                      borderColor: isDark
                        ? `${profile.color}30`
                        : `${profile.color}40`,
                    }}
                  >
                    {/* Hover Glow Background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${profile.color}, transparent 70%)`,
                      }}
                    ></div>

                    {/* Icon with persistent drop shadow */}
                    <profile.icon
                      size={42}
                      className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        color: profile.color,
                        filter: `drop-shadow(0 0 12px ${profile.color}80)`,
                      }}
                    />

                    <span
                      className="font-bold text-sm md:text-base relative z-10 transition-colors duration-300"
                      style={{ color: isDark ? "#f8fafc" : "#0f172a" }}
                    >
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full mt-16 mb-8"
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
                  {/* Card */}
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
                  {/* Stem down to node */}
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/50 to-primary/20 min-h-[24px]"></div>
                  {/* Node */}
                  <div
                    className={`w-[52px] h-[52px] rounded-full flex-shrink-0 flex items-center justify-center border-[3px] bg-surface relative z-10 transition-all duration-500
                    border-primary/40 shadow-[0_0_0_5px_rgba(37,99,235,0.06)]
                    group-hover:border-primary group-hover:shadow-[0_0_0_8px_rgba(37,99,235,0.12),0_0_28px_rgba(37,99,235,0.5),0_0_50px_rgba(37,99,235,0.2)]`}
                  >
                    <span className="text-[11px] font-black text-primary tracking-tight">
                      10TH
                    </span>
                  </div>
                  {/* Bottom spacer */}
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
                  {/* Top spacer */}
                  <div className="flex-1 min-h-[24px]"></div>
                  {/* Node */}
                  <div
                    className={`w-[52px] h-[52px] rounded-full flex-shrink-0 flex items-center justify-center border-[3px] bg-surface relative z-10 transition-all duration-500
                    border-primary/50 shadow-[0_0_0_5px_rgba(37,99,235,0.08)]
                    group-hover:border-primary group-hover:shadow-[0_0_0_8px_rgba(37,99,235,0.15),0_0_28px_rgba(37,99,235,0.55),0_0_50px_rgba(37,99,235,0.2)]`}
                  >
                    <span className="text-[11px] font-black text-primary tracking-tight">
                      12TH
                    </span>
                  </div>
                  {/* Stem down to card */}
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/20 to-primary/50 min-h-[24px]"></div>
                  {/* Card */}
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
                      className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border transition-all duration-300 ease-out group-hover:border-primary/50 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.3)]
                      ${isDark ? "bg-primary/10 text-primary border-primary/25" : "bg-blue-50 text-primary border-primary/20"}`}
                    >
                      Percentage: 76.6%
                      <FaVirus
                        size={10}
                        color="green"
                        style={{ marginLeft: "8px" }}
                      />
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
                  {/* Card */}
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
                      2012 – 2025
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
                        Best: 8.05
                      </span>
                    </div>
                  </div>
                  {/* Stem */}
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/50 to-primary/20 min-h-[24px]"></div>
                  {/* Node — filled */}
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
                  {/* Node — gradient, no dot */}
                  <div
                    className={`w-[52px] h-[52px] rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-primary to-accent relative z-10 transition-all duration-500 animate-pulse group-hover:animate-none
                    shadow-[0_0_0_5px_rgba(37,99,235,0.15),0_0_22px_rgba(37,99,235,0.55)]
                    group-hover:shadow-[0_0_0_10px_rgba(37,99,235,0.18),0_0_40px_rgba(37,99,235,0.8),0_0_70px_rgba(37,99,235,0.3)]`}
                  >
                    <span className="text-[11px] font-black text-white tracking-tight drop-shadow">
                      MCA
                    </span>
                  </div>
                  {/* Stem */}
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-primary/20 to-primary/50 min-h-[24px]"></div>
                  {/* Card */}
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
                  {/* Node */}
                  <div
                    className={`absolute -left-[1.45rem] top-1 w-10 h-10 rounded-full flex items-center justify-center z-10 border-[2.5px] transition-all duration-500
                    group-hover:shadow-[0_0_0_6px_rgba(37,99,235,0.15),0_0_20px_rgba(37,99,235,0.5)] ${
                      item.active
                        ? "bg-gradient-to-br from-primary to-accent border-transparent shadow-[0_0_0_3px_rgba(37,99,235,0.15),0_0_16px_rgba(37,99,235,0.5)] animate-pulse group-hover:animate-none"
                        : item.scoreType === "cgpa"
                          ? "bg-primary border-primary shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                          : "bg-surface border-primary/40 shadow-[0_0_6px_rgba(37,99,235,0.2)]"
                    }`}
                  >
                    <span
                      className={`text-[9px] font-black tracking-tight ${item.scoreType === "cgpa" || item.active ? "text-white" : "text-primary"}`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {/* Card */}
                  <div
                    className={`w-full rounded-xl p-4 border transition-all duration-300 ease-out group-hover:border-primary/40
                    group-hover:shadow-[0_0_0_1px_rgba(37,99,235,0.2),0_4px_20px_rgba(37,99,235,0.2),0_0_35px_rgba(37,99,235,0.08)] ${
                      item.active
                        ? isDark
                          ? "bg-gradient-to-b from-primary/12 to-accent/8 border-primary/30"
                          : "bg-gradient-to-b from-blue-50 to-orange-50/50 border-primary/25 shadow-sm"
                        : isDark
                          ? "bg-white/5 border-white/10"
                          : "bg-white border-slate-200 shadow-sm"
                    }`}
                  >
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
                      <FaSchool size={10} /> {item.sub}
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
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
