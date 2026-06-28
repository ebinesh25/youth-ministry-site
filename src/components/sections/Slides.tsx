"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useEvent } from "@/hooks/useEvent";
import { ChevronLeft, ChevronRight, Download, Maximize, Minimize } from "lucide-react";

export default function Slides() {
  const { slides } = useEvent();

  if (!slides) return null;

  const { heading, headingHighlight, description, downloadLabel, fileName, slideCount } = slides;

  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(async () => {
    if (!slideRef.current) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setFullscreen(false);
    } else {
      await slideRef.current.requestFullscreen();
      setFullscreen(true);
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const goTo = useCallback(
    (i: number) => setCurrent(Math.max(0, Math.min(i, slideCount - 1))),
    [slideCount],
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const slideImg = (i: number) => `/files/slides/slide-${String(i + 1).padStart(2, "0")}.png`;

  return (
    <section
      id="slides"
      className="relative w-full border-t-4 border-black bg-white py-[120px] max-md:py-10"
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-8 px-6 max-md:gap-6">
        {/* Heading */}
        <h2
          className="text-center text-[60px] font-black uppercase leading-[60px] tracking-[-0.05em] max-md:text-[36px] max-md:leading-[36px]"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--rym-navy)",
          }}
        >
          {heading}
          <br />
          <span className="text-[#0EA5E9]">{headingHighlight}</span>
        </h2>

        {/* Description */}
        <p
          className="text-center text-lg leading-relaxed text-[#3E4850] max-md:text-sm"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {description}
        </p>

        {/* Slide carousel */}
        <div className="flex w-full flex-col items-center gap-4">
          {/* Slide display */}
          <div className="w-full border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-md:border-2 max-md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div ref={slideRef} className="relative aspect-[4/3] w-full bg-[#FAF8FF] select-none">
              <img
                src={slideImg(current)}
                alt={`Slide ${current + 1} of ${slideCount}`}
                className="h-full w-full object-contain"
                loading={current === 0 ? "eager" : "lazy"}
              />

              {/* Prev overlay */}
              <button
                onClick={prev}
                disabled={current === 0}
                className="absolute left-0 top-0 flex h-full w-[15%] items-center justify-start pl-2 text-[#131B2E] opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 disabled:opacity-0 max-md:opacity-100 max-md:w-1/3"
                aria-label="Previous slide"
              >
                <span className="flex items-center justify-center border-2 border-black bg-white/90 p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-md:p-1.5">
                  <ChevronLeft className="h-6 w-6 max-md:h-5 max-md:w-5" />
                </span>
              </button>

              {/* Next overlay */}
              <button
                onClick={next}
                disabled={current === slideCount - 1}
                className="absolute right-0 top-0 flex h-full w-[15%] items-center justify-end pr-2 text-[#131B2E] opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 disabled:opacity-0 max-md:opacity-100 max-md:w-1/3"
                aria-label="Next slide"
              >
                <span className="flex items-center justify-center border-2 border-black bg-white/90 p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-md:p-1.5">
                  <ChevronRight className="h-6 w-6 max-md:h-5 max-md:w-5" />
                </span>
              </button>

              {/* Fullscreen toggle */}
              <button
                onClick={toggleFullscreen}
                className="absolute right-2 top-2 flex items-center justify-center border-2 border-black bg-white p-1.5 text-[#131B2E] transition-colors hover:bg-black/5 max-md:p-1"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
              >
                {fullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
              </button>

              {/* Slide counter overlay (bottom center) */}
              <span
                className="absolute bottom-2 left-1/2 -translate-x-1/2 border border-black bg-white/90 px-2 py-0.5 text-[11px] font-black tracking-[-0.03em] text-[#3E4850] max-md:text-[10px]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {current + 1} / {slideCount}
              </span>
            </div>
          </div>
        </div>

        {/* Download */}
        <a
          href={`/files/${fileName}`}
          download
          className="inline-flex items-center gap-2 border-4 border-black bg-black px-8 py-4 text-base font-black uppercase tracking-[-0.05em] text-white transition-colors hover:bg-[#131B2E] max-md:px-5 max-md:py-3 max-md:text-sm max-md:border-2"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          <Download className="h-5 w-5" />
          {downloadLabel}
        </a>
      </div>
    </section>
  );
}
