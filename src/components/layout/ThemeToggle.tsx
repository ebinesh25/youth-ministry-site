"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { isDark, toggle } = context;

  return (
    <button
      onClick={toggle}
      className="fixed right-4 top-20 z-40 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </motion.div>
    </button>
  );
}
