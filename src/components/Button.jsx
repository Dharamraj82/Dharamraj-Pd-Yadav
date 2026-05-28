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

  // Button variant styles with 3D effects
  const variants = {
    primary: isDark
      ? "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.3)]"
      : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.15)]",
    secondary: isDark 
      ? "bg-gradient-to-b from-slate-700 to-slate-800 text-white border-t border-white/20 border-x border-white/5 border-b-0 shadow-[0_5px_0_rgba(30,41,59,1),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(30,41,59,1),_0_5px_10px_rgba(0,0,0,0.3)]" 
      : "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 border-t border-white/80 border-x border-white/40 border-b-0 shadow-[0_5px_0_rgba(203,213,225,1),_0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_0_rgba(203,213,225,1),_0_5px_10px_rgba(0,0,0,0.05)]",
    outline: isDark
      ? "bg-transparent text-white border-2 border-white/50 hover:bg-white/10 shadow-[0_5px_0_rgba(255,255,255,0.2),_0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_0_rgba(255,255,255,0.2),_0_5px_10px_rgba(0,0,0,0.2)]"
      : "bg-transparent text-slate-900 border-2 border-slate-900/50 hover:bg-slate-900/5 shadow-[0_5px_0_rgba(15,23,42,0.2),_0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_0_rgba(15,23,42,0.2),_0_5px_10px_rgba(0,0,0,0.05)]",
    linkedin: isDark
      ? "bg-gradient-to-b from-[#0A66C2] to-[#08539e] text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(2,42,84,0.8),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(2,42,84,0.8),_0_5px_10px_rgba(0,0,0,0.3)]"
      : "bg-gradient-to-b from-[#0A66C2] to-[#08539e] text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(2,42,84,0.8),_0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_rgba(2,42,84,0.8),_0_5px_10px_rgba(0,0,0,0.15)]",
  };

  const baseStyles = "group relative overflow-hidden px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-4 hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none";

  const ButtonContent = () => (
    <>
      <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-lg pointer-events-none"></div>
      <div className="relative z-10 flex items-center gap-3">
        {Icon && iconPosition === "left" && <Icon size={20} />}
        <span style={{ textShadow: (variant === 'primary' && isDark) ? '0 1px 2px rgba(0,0,0,0.4)' : 'none' }}>{children}</span>
        {Icon && iconPosition === "right" && <Icon size={20} />}
      </div>
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        {...props}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      <ButtonContent />
    </button>
  );
}

export default Button;
