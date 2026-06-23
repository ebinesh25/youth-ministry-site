"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/5"
      >
        <span className="font-medium text-white">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { faq } = useEvent();
  const [openId, setOpenId] = useState<string | null>(null);

  if (!faq.length) return null;

  return (
    <section id="faq" className="section-padding relative bg-slate-900/30">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GlassCard className="mx-auto max-w-3xl overflow-hidden p-0" hover={false}>
            {faq.map((item) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
              />
            ))}
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
