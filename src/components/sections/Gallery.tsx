"use client";

import { useEvent } from "@/hooks/useEvent";
import { cn } from "@/lib/utils";



export default function Gallery() {
  const { gallery, gallerySection } = useEvent();
  const items = gallery.slice(0, 6);

  return (
    <section
      id="gallery"
      className="w-full bg-[#FAF8FF] px-6 py-[120px] max-md:py-10"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-stretch gap-16 max-md:gap-8">
        {/* Heading */}
        <h2
          className="text-center text-[96px] font-black uppercase leading-[96px] tracking-[-0.05em] max-md:text-[36px] max-md:leading-[36px]"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--rym-navy)",
          }}
        >
          {gallerySection.heading}
          <br />
          <span className="text-[#0EA5E9]">{gallerySection.headingHighlight}</span>
        </h2>

        {/* Grid — 3 col desktop, 2 col mobile */}
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:gap-3">
          {items.map((item, i) => {
            const isWorship = i === 1;
            const isService = i === 3;

            return (
              <div
                key={item.id}
                className={cn(
                  "relative border-4 border-black max-md:border-2",
                  isWorship && "pt-12 max-md:pt-6",
                  isService && "-mt-12 max-md:-mt-6",
                )}
              >
                {/* Image */}
                <div
                  className={cn(
                    "w-full overflow-hidden bg-white",
                    isWorship || isService
                      ? "aspect-square"
                      : "h-[437.33px] max-md:h-[160px] max-sm:h-[120px]"
                  )}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Label */}
                <div className="absolute bottom-3 left-3 bg-black px-2 py-0.5 max-md:bottom-2 max-md:left-2">
                  <span
                    className="text-[10px] font-black uppercase tracking-[0.1em] text-white max-md:text-[8px]"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                    }}
                  >
                    {item.category.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
