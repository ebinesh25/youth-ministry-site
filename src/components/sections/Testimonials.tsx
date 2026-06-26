"use client";

import { useEvent } from "@/hooks/useEvent";

export default function Testimonials() {
  const { testimonials, testimonialsSection } = useEvent();

  if (!testimonials.length) return null;

  const duplicated = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="w-full border-y-4 border-black bg-[#0EA5E9] py-24 max-md:py-10">
      <div className="flex flex-col items-center gap-8 max-md:gap-5">
        {/* Heading */}
        <h2
          className="text-center text-[36px] font-black uppercase leading-10 tracking-[-0.05em] max-md:text-2xl max-md:leading-7"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--rym-black)",
          }}
        >
          {testimonialsSection.heading}
        </h2>

        {/* Marquee rows */}
        <div className="flex w-full flex-col gap-4 overflow-hidden">
          {/* Row 1 */}
          <div className="animate-marquee flex gap-[24px]">
            {duplicated.map((t, i) => (
              <div
                key={`r1-${t.id}-${i}`}
                className="flex h-auto w-[320px] shrink-0 flex-col gap-4 border-4 border-black bg-white p-6 max-md:h-[150px] max-md:w-[260px] max-md:p-4 max-md:gap-3 max-md:border-2"
              >
                <div>
                  <p
                    className="text-sm font-black uppercase tracking-[-0.02em] max-md:text-xs"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: "var(--rym-navy)",
                    }}
                  >
                    {t.name}
                  </p>
                  {t.role && (
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/40 max-md:text-[9px]">
                      {t.role}
                    </p>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-[#3E4850] max-md:text-xs max-md:leading-5">
                  &ldquo;{t.testimony}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 (offset for continuous feel) */}
          <div className="animate-marquee flex gap-[24px]" style={{ animationDelay: "-15s" }}>
            {duplicated.map((t, i) => (
              <div
                key={`r2-${t.id}-${i}`}
                className="flex h-auto w-[320px] shrink-0 flex-col gap-4 border-4 border-black bg-white p-6 max-md:h-[150px] max-md:w-[260px] max-md:p-4 max-md:gap-3 max-md:border-2"
              >
                <div>
                  <p
                    className="text-sm font-black uppercase tracking-[-0.02em] max-md:text-xs"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: "var(--rym-navy)",
                    }}
                  >
                    {t.name}
                  </p>
                  {t.role && (
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/40 max-md:text-[9px]">
                      {t.role}
                    </p>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-[#3E4850] max-md:text-xs max-md:leading-5">
                  &ldquo;{t.testimony}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
