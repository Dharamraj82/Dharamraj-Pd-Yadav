import { useTheme } from "../context/ThemeProvider";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full mt-4 transition-all ${
        isDark ? "bg-yellow-400 text-black" : "bg-black text-white"
      }`}
    >
      {isDark ? <BsSunFill /> : <BsMoonStarsFill />}
    </button>
  );
}
export default ToggleButton;
