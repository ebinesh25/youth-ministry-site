"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: string;
  endDate: string;
}

function TimeUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card flex h-20 w-20 items-center justify-center md:h-24 md:w-24">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-display text-3xl font-bold text-white md:text-4xl"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400 md:text-sm">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer({
  targetDate,
  endDate,
}: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isLive, isOver } =
    useCountdown(targetDate, endDate);

  if (isOver) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="rounded-2xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 px-8 py-6 backdrop-blur-md"
      >
        <p className="font-display text-2xl font-bold text-white md:text-3xl">
          Thank You For Attending
        </p>
        <p className="mt-2 text-purple-300">
          We hope you were blessed! See you at the next event.
        </p>
      </motion.div>
    );
  }

  if (isLive) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="rounded-2xl bg-gradient-to-r from-green-500/30 to-emerald-500/30 px-8 py-6 backdrop-blur-md"
      >
        <motion.p
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-display text-2xl font-bold text-white md:text-3xl"
        >
          Event is Live
        </motion.p>
        <p className="mt-2 flex items-center justify-center gap-2 text-green-300">
          <Clock className="h-4 w-4" />
          Join us now!
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6">
      <TimeUnit value={days} label="Days" />
      <span className="mt-[-1.5rem] font-display text-2xl text-slate-500 md:text-3xl">:</span>
      <TimeUnit value={hours} label="Hours" />
      <span className="mt-[-1.5rem] font-display text-2xl text-slate-500 md:text-3xl">:</span>
      <TimeUnit value={minutes} label="Minutes" />
      <span className="mt-[-1.5rem] font-display text-2xl text-slate-500 md:text-3xl">:</span>
      <TimeUnit value={seconds} label="Seconds" />
    </div>
  );
}
