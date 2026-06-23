"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

export default function Testimonials() {
  const { testimonials } = useEvent();

  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            title="What Others Say"
            subtitle="Hear from young people whose lives have been transformed"
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
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <GlassCard>
                <Quote className="mb-4 h-6 w-6 text-purple-400" />
                <p className="text-sm leading-relaxed text-slate-300">
                  &ldquo;{t.testimony}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    {t.role && (
                      <p className="text-xs text-slate-500">{t.role}</p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
