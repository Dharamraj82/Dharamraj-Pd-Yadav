import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";

function SkillBadge({ skill, icon: Icon, delay = 0 }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isDark
          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 hover:border-blue-400/50"
          : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-300 hover:border-blue-400"
      } shadow-md hover:shadow-lg`}
    >
      {Icon && <Icon size={18} />}
      {skill}
    </motion.div>
  );
}

export default SkillBadge;
