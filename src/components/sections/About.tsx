"use client";

import { motion } from "framer-motion";
import { Users, Eye, Target, Quote } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="h-8 w-8" />,
  Eye: <Eye className="h-8 w-8" />,
  Target: <Target className="h-8 w-8" />,
};

export default function About() {
  const { about } = useEvent();

  const cards = [
    { data: about.whoWeAre, gradient: "from-blue-500 to-cyan-500" },
    { data: about.vision, gradient: "from-purple-500 to-pink-500" },
    { data: about.mission, gradient: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading title={about.heading} />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <AnimatedSection key={card.data.title} delay={i * 0.1}>
              <GlassCard className="h-full text-center">
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient}`}
                >
                  {ICON_MAP[card.data.icon] || (
                    <Users className="h-8 w-8" />
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {card.data.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {card.data.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Welcome Message */}
        <AnimatedSection delay={0.3}>
          <GlassCard className="mt-8 text-center" glow>
            <Quote className="mx-auto h-8 w-8 text-purple-400" />
            <h3 className="mt-4 font-display text-2xl font-bold text-white">
              {about.welcomeMessage.title}
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
              &ldquo;{about.welcomeMessage.message}&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium text-purple-400">
              — {about.welcomeMessage.author}
            </p>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
