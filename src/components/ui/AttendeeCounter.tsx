"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface AttendeeCounterProps {
  targetCount: number;
}

export default function AttendeeCounter({
  targetCount,
}: AttendeeCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (targetCount <= 0) return;
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [targetCount]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
    >
      <Users className="h-4 w-4 text-blue-400" />
      <span className="font-display font-bold">{count.toLocaleString()}</span>
      <span className="text-slate-400">Registered</span>
    </motion.div>
  );
}
