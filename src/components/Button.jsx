import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";

function Button({ 
  children, 
  variant = "primary", 
  icon: Icon, 
  iconPosition = "left",
  onClick,
  className = "",
  href,
  ...props 
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Button variant styles
  const variants = {
    primary: `bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100`,
    secondary: `${
      isDark 
        ? "bg-white/10 text-white hover:bg-white/20 border border-white/20" 
        : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200"
    }`,
    outline: `${
      isDark
        ? "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900"
        : "bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white"
    }`,
  };

  const baseStyles = "px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-4 shadow-md hover:shadow-lg";

  const ButtonContent = () => (
    <>
      {Icon && iconPosition === "left" && <Icon size={20} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={20} />}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClassName}
        {...props}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={combinedClassName}
      {...props}
    >
      <ButtonContent />
    </motion.button>
  );
}

export default Button;
