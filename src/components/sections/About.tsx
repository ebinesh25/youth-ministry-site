"use client";

import { MapPin, Clock, Heart } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";

export default function About() {
  const { about, event } = useEvent();

  return (
    <section id="about" className="w-full bg-[#FAF8FF] py-[120px] max-md:py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-24 px-6 max-md:gap-8">
        {/* Two column layout */}
        <div className="flex items-start justify-center gap-20 max-lg:flex-col">
          {/* Left Column — Text */}
          <div className="flex flex-1 flex-col gap-10 max-md:gap-5">
            <span
              className="inline-flex w-fit items-center bg-[#0EA5E9] px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white max-md:text-[8px] max-md:px-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              ABOUT
            </span>

            <h2
              className="text-[60px] font-black uppercase leading-[60px] tracking-[-0.05em] max-md:text-[32px] max-md:leading-[32px]"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                color: "var(--rym-navy)",
              }}
            >
              REWRITE
              <br />
              <span className="text-[#0EA5E9]">YOUR MIND.</span>
            </h2>

            {/* Description - truncated on mobile */}
            <p
              className="text-base leading-relaxed text-[#3E4850] max-md:text-sm"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {about.welcomeMessage.message}
            </p>

            {/* Stats row */}
            <div className="flex gap-8 max-md:gap-4">
              <div>
                <p
                  className="text-[36px] font-black uppercase leading-10 tracking-[-0.05em] max-md:text-2xl max-md:leading-7"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "var(--rym-navy)",
                  }}
                >
                  1 DAY
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-black/40 max-md:text-[9px]">
                  EVENT
                </p>
              </div>
              <div>
                <p
                  className="text-[36px] font-black uppercase leading-10 tracking-[-0.05em] max-md:text-2xl max-md:leading-7"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "var(--rym-navy)",
                  }}
                >
                  2 HOURS
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-black/40 max-md:text-[9px]">
                  DURATION
                </p>
              </div>
              <div>
                <p
                  className="text-[36px] font-black uppercase leading-10 tracking-[-0.05em] max-md:text-2xl max-md:leading-7"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "var(--rym-navy)",
                  }}
                >
                  FREE
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-black/40 max-md:text-[9px]">
                  ADMISSION
                </p>
              </div>
            </div>

            {/* Info row */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#0EA5E9] max-md:h-4 max-md:w-4" />
                <span className="text-sm text-[#3E4850] max-md:text-xs">{event.venue}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-[#0EA5E9] max-md:h-4 max-md:w-4" />
                <span className="text-sm text-[#3E4850] max-md:text-xs">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  at {event.time}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Image Card */}
          <div className="relative flex-1">
            {/* Blue offset background — hidden on mobile */}
            <div className="absolute -top-4 left-4 h-[820px] w-full max-w-[576px] bg-[#0EA5E9] max-lg:hidden" />

            {/* Image with border */}
            <div className="relative z-10 h-[576px] w-full max-w-[576px] border-4 border-black bg-white max-lg:h-[400px] max-md:h-[220px] max-md:border-2">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
                alt="Youth Community Gathering"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Quote panel */}
            <div className="relative z-10 ml-0 mt-4 flex w-full max-w-[576px] flex-col gap-3 border-l-8 border-[#0EA5E9] bg-black p-6 max-md:p-4 max-md:mt-3 max-md:gap-2 max-md:border-l-4">
              <p className="text-base leading-relaxed text-white/70 max-md:text-xs max-md:leading-5">
                &ldquo;{about.welcomeMessage.message}&rdquo;
              </p>
              <p className="flex items-center gap-2 text-sm font-bold text-white max-md:text-xs">
                <Heart className="h-4 w-4 text-[#0EA5E9] max-md:h-3 max-md:w-3" />
                {about.welcomeMessage.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
