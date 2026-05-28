import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";
import { useState } from "react";

function SkillBadge({ skill, icon: Icon, delay = 0, color = "#3B82F6" }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isHovered, setIsHovered] = useState(false);

  // For brands that are black (like GitHub or Socket.io), make them white in dark mode
  const isBlackBrand = color === "#010101" || color === "#181717";
  const finalColor = isDark && isBlackBrand ? "#ffffff" : color;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border cursor-default ${
        isDark 
          ? "bg-[#111827] border-[#1E293B] text-slate-200" 
          : "bg-white border-slate-200 text-slate-700"
      }`}
      style={{
        boxShadow: isHovered ? `0 8px 24px -6px ${finalColor}60` : 'none',
        borderColor: isHovered ? `${finalColor}80` : undefined,
        transform: isHovered ? 'translateY(-4px)' : 'none'
      }}
    >
      {Icon && <Icon size={20} style={{ color: finalColor }} />}
      {skill}
    </motion.div>
  );
}

export default SkillBadge;
