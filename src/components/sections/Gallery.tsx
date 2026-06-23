"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MasonryGrid from "@/components/ui/MasonryGrid";
import Lightbox from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const { gallery } = useEvent();
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    const cats = [...new Set(gallery.map((item) => item.category))];
    return ["all", ...cats];
  }, [gallery]);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? gallery
        : gallery.filter((item) => item.category === filter),
    [gallery, filter]
  );

  return (
    <section id="gallery" className="section-padding relative bg-slate-900/30">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading title="Photo Gallery" subtitle="Moments from our ministry" />
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  filter === cat
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                )}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Masonry Grid */}
        <AnimatedSection delay={0.2}>
          <MasonryGrid
            items={filtered}
            onItemClick={(index) => setLightboxIndex(index)}
          />
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={filtered}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % filtered.length : 0
          )
        }
      />
    </section>
  );
}
