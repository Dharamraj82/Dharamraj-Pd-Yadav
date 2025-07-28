import React from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import { Link } from "react-router-dom";

const navItems = [
  { name: "About", title: "about" },
  { name: "Projects", title: "projects" },
  { name: "Blog", title: "blog" },
  { name: "Contact", title: "contact" },
];

// Smooth scroll function
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function Header() {
  return (
    <div className="w-full fixed top-7 left-0 z-50 px-5 flex items-center justify-start gap-5 md:gap-10 text-xl font-medium">
      <Link
      to={'/'}
        onClick={() => scrollToSection("home")}
        className="bg-primary text-secondary text-3xl rounded-br-[40px] h-20 px-10 py-2 transition-all duration-500"
        style={{ fontFamily: "Tektur", fontWeight: "700" }}
      >
        Dharamraj
      </Link>

      <header className="hidden md:block bg-white/15 backdrop-blur-md border border-white/30 shadow-lg px-6 py-1 rounded-full">
        <motion.ul
          className="flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(link.title.toLowerCase())}
                className="text-secondary transition-colors hover:opacity-60"
              >
                {link.name}
              </button>
            </motion.li>
          ))}

          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <ToggleButton />
          </motion.li>
        </motion.ul>
      </header>
    </div>
  );
}

export default Header;
