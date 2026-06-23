"use client";

import { motion } from "framer-motion";
import { Quote, Bookmark, Check, ListChecks } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

export default function Highlights() {
  const { highlights } = useEvent();

  return (
    <section id="highlights" className="section-padding relative">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading title={highlights.heading} />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Theme Verse */}
          <AnimatedSection delay={0.1}>
            <GlassCard className="h-full text-center" glow>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Quote className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Theme Verse
              </h3>
              <p className="mt-4 leading-relaxed text-slate-300 italic">
                &ldquo;{highlights.quote.text}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-blue-400">
                — {highlights.quote.author}
              </p>
            </GlassCard>
          </AnimatedSection>

          {/* Scripture */}
          <AnimatedSection delay={0.2}>
            <GlassCard className="h-full text-center" glow>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Bookmark className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                God&apos;s Promise
              </h3>
              <p className="mt-4 leading-relaxed text-slate-300 italic">
                &ldquo;{highlights.scripture.text}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-purple-400">
                — {highlights.scripture.reference}
              </p>
            </GlassCard>
          </AnimatedSection>

          {/* Key Takeaways */}
          <AnimatedSection delay={0.3}>
            <GlassCard className="h-full">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500">
                <ListChecks className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Key Takeaways
              </h3>
              <ul className="mt-4 space-y-3">
                {highlights.keyTakeaways.map((takeaway, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                    {takeaway}
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
