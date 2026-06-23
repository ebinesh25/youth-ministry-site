"use client";

import { motion } from "framer-motion";
import {
  Music,
  Wifi,
  MessageCircle,
  Users,
  Coffee,
  LucideIcon,
} from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ICON_MAP: Record<string, LucideIcon> = {
  Music,
  Wifi,
  MessageCircle,
  Users,
  Coffee,
};

export default function Schedule() {
  const { whatsToExpect } = useEvent();

  return (
    <section id="schedule" className="section-padding relative bg-slate-900/30">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            title={whatsToExpect.heading}
            subtitle={whatsToExpect.description}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:left-8" />

            <div className="space-y-8">
              {whatsToExpect.items.map((item, i) => {
                const Icon = ICON_MAP[item.icon || "Music"] || Music;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative flex items-start gap-6 pl-16 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center md:left-[1.45rem]">
                      <div className="h-3 w-3 rounded-full bg-purple-500 ring-4 ring-slate-900/50" />
                    </div>

                    {/* Icon */}
                    <div className="hidden shrink-0 md:block">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="glass-card flex-1 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
                          {item.duration}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">
                        {item.description}
                      </p>
                      {item.speaker && (
                        <p className="mt-2 text-xs font-medium text-blue-400">
                          Speaker: {item.speaker}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Total duration */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm text-slate-400">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                {whatsToExpect.totalDuration}
              </span>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
