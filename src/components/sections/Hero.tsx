"use client";

import { useEvent } from "@/hooks/useEvent";

const WATERMARK_WORDS = ["REWRITE", "YOUR", "MIND"];

export default function Hero() {
  const { hero } = useEvent();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[918px] items-center justify-center overflow-hidden bg-white max-md:min-h-[80svh] max-md:pb-20"
    >
      {/* Background watermark — hidden on mobile to save space */}
      <div className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center gap-8 opacity-5 max-md:hidden">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex items-center gap-8">
            {WATERMARK_WORDS.map((word, i) => (
              <span
                key={i}
                className="text-[256px] font-black uppercase leading-none tracking-[-0.05em]"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  color:
                    row === 1 && i === 1 ? "#6E7881" : "var(--rym-black)",
                  WebkitTextStroke:
                    row === 1 && i === 1 ? "2px var(--rym-black)" : "none",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex flex-col items-center gap-3 px-6 pt-24 max-md:pt-16 max-md:gap-2">
        {/* Top badges */}
        <div className="flex flex-wrap items-stretch justify-center gap-2">
          <span
            className="flex items-center bg-[#0EA5E9] px-3 py-0.5 text-[8px] font-black uppercase tracking-[0.2em] text-white max-md:text-[7px] max-md:px-2"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            YOUTH REVIVAL 2026
          </span>
          <span
            className="flex items-center bg-black px-3 py-0.5 text-[8px] font-black uppercase tracking-[0.2em] text-white max-md:text-[7px] max-md:px-2"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            JUNE 28, 2026 • 10:00 AM
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="text-center text-[128px] font-black uppercase leading-[128px] tracking-[-0.05em] max-md:text-[44px] max-md:leading-[44px] max-sm:text-[36px] max-sm:leading-[36px]"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--rym-navy)",
          }}
        >
          REWRITE
          <br />
          <span className="text-[#0EA5E9]">YOUR MIND</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-center text-lg italic leading-7 text-[#3E4850] max-md:text-sm max-md:leading-5"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          &ldquo;Be transformed by the renewing of your mind.&rdquo; — Romans
          12:2
        </p>

        {/* Speaker tag */}
        <p
          className="text-center text-xs font-bold italic uppercase leading-4 tracking-[0.1em] text-black/40 max-md:text-[9px] max-md:leading-3"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          FEATURING GUEST SPEAKER BRO. FELIX
        </p>

        {/* CTA Buttons */}
        <div className="mt-2 flex flex-wrap items-stretch justify-center gap-3">
          <button
            onClick={() => handleScroll("register")}
            className="flex items-center justify-center bg-black px-10 py-4 text-lg font-black uppercase tracking-[-0.05em] text-white transition-opacity hover:opacity-90 max-md:px-6 max-md:py-3 max-md:text-sm"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            REGISTER NOW
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="flex items-center justify-center border-4 border-black bg-transparent px-10 py-4 text-lg font-black uppercase tracking-[-0.05em] text-[#131B2E] transition-colors hover:bg-black/5 max-md:px-6 max-md:py-3 max-md:text-sm max-md:border-2"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            EVENT INFO
          </button>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 max-md:hidden">
        <span
          className="text-[10px] font-black uppercase tracking-[0.1em]"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--rym-navy)",
          }}
        >
          SCROLL DOWN
        </span>
        <div className="h-12 w-[2px] bg-black/20">
          <div className="h-full w-full bg-[#0EA5E9]" />
        </div>
      </div>
    </section>
  );
}
