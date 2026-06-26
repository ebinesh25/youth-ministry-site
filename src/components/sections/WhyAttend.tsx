"use client";

import { BookOpen, Heart, Music, Zap, Hand, LucideIcon } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  Heart,
  HandsPraying: Heart,
  Music,
  Zap,
};

export default function WhyAttend() {
  const { whyAttend, whyAttendSection } = useEvent();

  return (
    <section className="w-full border-t-4 border-black bg-[#FAF8FF] pb-20 pt-20 max-md:pb-10 max-md:pt-6">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-6 max-md:gap-5">
        {/* Heading */}
        <h2
          className="text-center text-[36px] font-black uppercase leading-10 tracking-[-0.025em] max-md:text-2xl max-md:leading-7"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--rym-navy)",
          }}
        >
          {whyAttendSection.heading}
        </h2>

        {/* Cards — 5 per row on desktop, 2 per row on mobile */}
        <div className="flex flex-wrap justify-center gap-6 max-md:gap-3">
          {whyAttend.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || BookOpen;
            const isLong = i >= 3;

            return (
              <div
                key={item.title}
                className={cn(
                  "flex flex-col gap-2 border-2 border-black",
                  isLong ? "pb-11" : "pb-6",
                  "w-[220px] max-md:w-[calc(50%-8px)] max-md:min-w-[140px] max-md:flex-1"
                )}
                style={{ padding: "16px 16px 0" }}
              >
                {/* Blue circle icon */}
                <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#0EA5E9] max-md:h-6 max-md:w-6">
                  <Icon className="h-4 w-4 text-white max-md:h-3 max-md:w-3" />
                </div>

                {/* Title */}
                <h3
                  className="text-sm font-black uppercase leading-tight tracking-[-0.02em] max-md:text-[11px]"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "var(--rym-navy)",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[11px] leading-relaxed text-[#3E4850] max-md:text-[10px]"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
