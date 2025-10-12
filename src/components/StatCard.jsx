import { motion } from "framer-motion";
import useCounterAnimation from "../hooks/useCounterAnimation";
import { useTheme } from "../context/ThemeProvider";

function StatCard({ number, suffix = "+", title, delay = 0 }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { count, counterRef } = useCounterAnimation(number, 2000);

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-2xl p-8 text-center transition-all ${
        isDark
          ? "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10"
          : "bg-white/60 backdrop-blur-md border border-white/20 hover:bg-white/80"
      } shadow-lg hover:shadow-xl`}
    >
      <h3
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
          isDark
            ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            : "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        }`}
      >
        {count}
        {suffix}
      </h3>
      <p
        className={`text-lg md:text-xl font-semibold ${
          isDark ? "text-gray-200" : "text-gray-800"
        }`}
      >
        {title}
      </p>
    </motion.div>
  );
}

export default StatCard;
