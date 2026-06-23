"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import CountdownTimer from "@/components/ui/CountdownTimer";
import AddToCalendar from "@/components/ui/AddToCalendar";
import ShareButton from "@/components/ui/ShareButton";
import ReminderButton from "@/components/ui/ReminderButton";
import AttendeeCounter from "@/components/ui/AttendeeCounter";

export default function Hero() {
  const { hero, event, seo } = useEvent();
  const [bgFailed, setBgFailed] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={
          bgFailed
            ? {
                background: `linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)`,
              }
            : { backgroundImage: `url(${hero.backgroundImage})` }
        }
      >
        {/* Hidden img to detect load failure */}
        <img
          src={hero.backgroundImage}
          alt=""
          className="hidden"
          onError={() => setBgFailed(true)}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${hero.overlayColor} 0%, rgba(15, 23, 42, 0.9) 50%, ${hero.overlayColor} 100%)`,
          opacity: hero.overlayOpacity,
        }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm">
            {event.tagline}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl"
        >
          {hero.title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="inline-block"
            >
              {i === 1 ? (
                <span className="gradient-text">{word} </span>
              ) : (
                word + " "
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 md:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        {/* Speaker & Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400"
        >
          <span className="font-semibold text-purple-400">
            Speaker: {seo.title.split("—")[0]?.trim() || "Bro. Felix"}
          </span>
          <span className="hidden text-slate-600 md:inline">|</span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            at {event.time}
          </span>
          <span className="hidden text-slate-600 md:inline">|</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {event.venue}
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <CountdownTimer targetDate={event.date} endDate={event.endDate} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("register")}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
          >
            <span className="relative z-10">{hero.ctaText}</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform group-hover:translate-x-0" />
          </button>
          <button
            onClick={() => handleScroll("location")}
            className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            {hero.secondaryCtaText}
          </button>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <AddToCalendar />
          <ShareButton title={seo.title} text={seo.description} />
          <ReminderButton />
          <AttendeeCounter targetCount={event.liveAttendeeCount} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}
