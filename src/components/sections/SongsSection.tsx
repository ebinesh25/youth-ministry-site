"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";

export default function SongsSection() {
  const { whatsToExpect, songSection } = useEvent();

  if (!whatsToExpect.songs?.length) return null;

  return (
    <section id="songs" className="w-full bg-white px-[192px] py-[120px] max-lg:px-6 max-md:py-10">
      <div className="mx-auto flex max-w-[896px] flex-col items-stretch gap-4">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4">
          <h2
            className="text-center text-[96px] font-black uppercase leading-[96px] tracking-[-0.05em] max-md:text-[40px] max-md:leading-[40px]"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--rym-navy)",
            }}
          >
            {songSection.heading}
            <br />
            <span className="text-[#0EA5E9]">{songSection.headingHighlight}</span>
          </h2>

          <p
            className="text-center text-[1rem] leading-[1rem] tracking-[-0.02em] max-md:text-[1rem] max-md:leading-[1rem]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {songSection.description}
          </p>
        </div>

        {/* Song Cards */}
        <div className="mt-4 flex flex-col gap-3 max-md:mt-2">
          {whatsToExpect.songs.map((song) => (
            <Link
              key={song.slug}
              href={`/songs/${song.slug}`}
              className="group flex items-center gap-8 border-4 border-black p-8 transition-colors hover:bg-black max-md:gap-4 max-md:p-4 max-md:border-2"
            >
              <span
                className="shrink-0 text-base font-black uppercase tracking-[-0.02em] text-[#0EA5E9] max-md:text-sm"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {String(song.order).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3
                  className="text-lg font-black uppercase tracking-[-0.02em] transition-colors group-hover:text-white max-md:text-sm"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "var(--rym-navy)",
                  }}
                >
                  {song.title}
                </h3>
              </div>
              <ArrowRight className="h-6 w-6 shrink-0 text-black transition-colors group-hover:text-white max-md:h-5 max-md:w-5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
