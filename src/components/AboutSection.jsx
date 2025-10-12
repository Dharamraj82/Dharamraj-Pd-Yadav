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
  SiSocketdotio ,
  SiRedux ,
} from "react-icons/si";
import {FaJava,FaGithub ,FaComment,FaSchool  ,FaFileExcel  , FaGraduationCap, FaMapMarkerAlt, FaCode } from "react-icons/fa";

import SkillBadge from "./SkillBadge";
import { useTheme } from "../context/ThemeProvider";

function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Tech Stack
  const techStack = [
    { skill: "HTML", icon: SiHtml5 },
    { skill: "CSS", icon: SiCss3 },
    { skill: "Tailwind CSS", icon: SiTailwindcss },
    { skill: "React.js", icon: SiReact },
    { skill: "Node.js", icon: SiNodedotjs },
    { skill: "Express", icon: SiExpress },
    { skill: "MongoDB", icon: SiMongodb },
    { skill: "JavaScript", icon: SiJavascript },
    { skill: "Redux", icon: SiRedux  }, 
    { skill: "Socket.io", icon: SiSocketdotio },
  ];

  // Additional Skills
  const additionalSkills = [
    { skill: "DSA", icon: HiLightningBolt },
    { skill: "C++", icon: SiCplusplus },
    { skill: "JAVA", icon: FaJava },
    { skill: "PostgreSQL", icon: SiPostgresql },
    { skill: "EJS", icon: FaCode },
    { skill: "Git", icon: SiGit },
    { skill: "Communication", icon: FaComment },
    { skill: "SDLC", icon: FaCode },
    { skill: "GitHub", icon: FaGithub  },
    { skill: "Excel", icon: FaFileExcel  },
  ];

  return (
    <section id="about">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="personalGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="25"
                cy="25"
                r="1"
                fill={
                  isDark ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.2)"
                }
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#personalGrid)" />
        </svg>
      </div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-32 left-10 text-5xl opacity-10 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {"{ }"}
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute bottom-32 right-10 text-5xl opacity-10 ${
          isDark ? "text-purple-400" : "text-purple-600"
        }`}
      >
        &lt;/&gt;
      </motion.div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <HiSparkles
                className={isDark ? "text-blue-400" : "text-blue-600"}
                size={24}
              />
              <span
                className={`text-sm md:text-base font-semibold uppercase tracking-wider ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
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
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Full Stack Web Developer{" "}
              <span
                className={`block ${
                  isDark
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
              className={`text-base md:text-lg leading-relaxed mb-6 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              A passionate Full Stack Web Developer and BCA Graduate from Vinoba
              Bhave University, Jharkhand. With a strong grip on the MERN stack,
              I love crafting efficient, scalable, and visually appealing web
              applications. My passion lies in transforming ideas into
              real-world digital experiences.
            </motion.p>

            {/* Education & Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    isDark ? "bg-blue-500/20" : "bg-blue-100"
                  }`}
                >
                  <FaGraduationCap
                    className={isDark ? "text-blue-400" : "text-blue-600"}
                    size={20}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Education
                  </p>
                  <p
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    BCA - Vinoba Bhave University
                  </p>
                </div>
              </div>

                <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    isDark ? "bg-blue-500/20" : "bg-blue-100"
                  }`}
                >
                  <FaSchool 
                    className={isDark ? "text-blue-400" : "text-blue-600"}
                    size={20}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Education
                  </p>
                  <p
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    12th (PCM) - UPG+2 High School Daganwar Koderma, Jharakhand
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    isDark ? "bg-purple-500/20" : "bg-purple-100"
                  }`}
                >
                  <FaMapMarkerAlt
                    className={isDark ? "text-purple-400" : "text-purple-600"}
                    size={20}
                  />
                </div>
                
                <div>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Location
                  </p>
                  <p
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Uttar Pradesh (Current) and Jharkhand (Permanent) , India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MERN Stack Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6"
            >
              <h3
                className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <HiDatabase
                  className={isDark ? "text-blue-400" : "text-blue-600"}
                />
                MERN Stack Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((item, index) => (
                  <SkillBadge
                    key={index}
                    skill={item.skill}
                    icon={item.icon}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3
                className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <FaCode
                  className={isDark ? "text-purple-400" : "text-purple-600"}
                />
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((item, index) => (
                  <SkillBadge
                    key={index}
                    skill={item.skill}
                    icon={item.icon}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div
              className={`absolute -top-6 -left-6 w-24 h-24 rounded-full ${
                isDark ? "bg-blue-500/20" : "bg-blue-200/50"
              } blur-2xl`}
            />
            <div
              className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full ${
                isDark ? "bg-purple-500/20" : "bg-purple-200/50"
              } blur-2xl`}
            />

            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-3xl shadow-2xl border-4 ${
                isDark
                  ? "border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-purple-900/30"
                  : "border-blue-200 bg-gradient-to-br from-blue-100 to-purple-100"
              }`}
            >
              {/* Replace with your actual image */}
              <img
                src="./profileImage.png"
                alt="Developer Profile"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />

              {/* Overlay Gradient */}
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
                    : "bg-gradient-to-t from-white/80 via-transparent to-transparent"
                }`}
              />

              {/* Bottom Info Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className={`absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md ${
                  isDark
                    ? "bg-gray-900/80 border border-white/10"
                    : "bg-white/80 border border-gray-200"
                }`}
              >
                <p
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Building Digital Experiences
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDark
                      ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  }`}
                >
                  One Line of Code at a Time
                </p>
              </motion.div>
            </motion.div>

            {/* Floating Skill Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute -top-4 -right-4 p-4 rounded-full shadow-xl ${
                isDark
                  ? "bg-gradient-to-br from-blue-500 to-blue-600"
                  : "bg-gradient-to-br from-blue-500 to-blue-600"
              }`}
            >
              <SiReact className="text-white" size={32} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className={`absolute bottom-20 -left-4 p-4 rounded-full shadow-xl ${
                isDark
                  ? "bg-gradient-to-br from-green-500 to-green-600"
                  : "bg-gradient-to-br from-green-500 to-green-600"
              }`}
            >
              <SiNodedotjs className="text-white" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
