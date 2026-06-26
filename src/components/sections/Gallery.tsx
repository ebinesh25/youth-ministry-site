"use client";

import { useEvent } from "@/hooks/useEvent";

export default function Gallery() {
  const { gallery, gallerySection } = useEvent();

  if (!gallery.length) return null;

  const half = Math.ceil(gallery.length / 2);
  const row1 = [...gallery.slice(0, half), ...gallery.slice(0, half), ...gallery.slice(0, half)];
  const row2 = [...gallery.slice(half), ...gallery.slice(half), ...gallery.slice(half)];

  return (
    <section id="gallery" className="w-full bg-[#FAF8FF] py-[120px] max-md:py-10">
      <div className="flex flex-col items-center gap-8 max-md:gap-5">
        {/* Heading */}
        <h2
          className="text-center text-[36px] font-black uppercase leading-10 tracking-[-0.05em] px-6 max-md:text-2xl max-md:leading-7"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--rym-navy)",
          }}
        >
          {gallerySection.heading}
          <br />
          <span className="text-[#0EA5E9]">{gallerySection.headingHighlight}</span>
        </h2>

        {/* Marquee rows */}
        <div className="flex w-full flex-col gap-4 overflow-hidden">
          {/* Row 1 */}
          <div className="animate-marquee flex gap-[24px]">
            {row1.map((item, i) => (
              <div
                key={`r1-${item.id}-${i}`}
                className="h-[200px] w-[280px] shrink-0 border-4 border-black bg-white overflow-hidden max-md:h-[140px] max-md:w-[200px] max-md:border-2"
              >
                <img
                  src={item.src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Row 2 (offset for continuous feel) */}
          <div className="animate-marquee flex gap-[24px]" style={{ animationDelay: "-15s" }}>
            {row2.map((item, i) => (
              <div
                key={`r2-${item.id}-${i}`}
                className="h-[200px] w-[280px] shrink-0 border-4 border-black bg-white overflow-hidden max-md:h-[140px] max-md:w-[200px] max-md:border-2"
              >
                <img
                  src={item.src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
