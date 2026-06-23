"use client";

import { motion } from "framer-motion";
import type { GalleryItem } from "@/types/event";

interface MasonryGridProps {
  items: GalleryItem[];
  onItemClick: (index: number) => void;
}

export default function MasonryGrid({
  items,
  onItemClick,
}: MasonryGridProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          className="mb-4 break-inside-avoid"
        >
          <button
            onClick={() => onItemClick(index)}
            className="group relative w-full overflow-hidden rounded-xl"
            aria-label={`View ${item.title}`}
          >
            {item.type === "video" ? (
              <div className="relative">
                <img
                  src={item.thumbnail || item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium text-white">{item.title}</p>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  );
}
