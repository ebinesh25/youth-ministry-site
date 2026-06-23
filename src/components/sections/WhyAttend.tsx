"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  Hand,
  Music,
  Zap,
  LucideIcon,
} from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  Heart,
  HandsPraying: Hand,
  Music,
  Zap,
};

export default function WhyAttend() {
  const { whyAttend } = useEvent();

  return (
    <section id="whyAttend" className="section-padding relative">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            title="Why You Should Attend"
            subtitle="Here's what awaits you at this event"
          />
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {whyAttend.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || BookOpen;
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <GlassCard className="group h-full">
                  <div
                    className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${item.gradient} p-4`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
