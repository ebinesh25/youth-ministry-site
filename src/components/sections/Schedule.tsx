"use client";

import { useEvent } from "@/hooks/useEvent";
import { cn } from "@/lib/utils";

export default function Schedule() {
  const { whatsToExpect } = useEvent();

  return (
    <section id="schedule" className="w-full bg-white px-[192px] py-[120px] max-lg:px-6 max-md:py-10">
      <div className="mx-auto flex max-w-[896px] flex-col items-stretch gap-4">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2">
          <h2
            className="text-center text-[96px] font-black uppercase leading-[96px] tracking-[-0.05em] max-md:text-[40px] max-md:leading-[40px]"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--rym-navy)",
            }}
          >
            {whatsToExpect.heading}
            <br />
            <span className="text-[#0EA5E9]">{whatsToExpect.headingHighlight}</span>
          </h2>

          <p
            className="text-center text-xs font-black uppercase leading-4 tracking-[0.1em] text-black/40 max-md:text-[9px]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {whatsToExpect.durationPrefix}{whatsToExpect.totalDuration}
          </p>
        </div>

        {/* Schedule rows */}
        <div className="mt-8 flex flex-col gap-3 max-md:mt-4">
          {whatsToExpect.items.map((item, i) => {
            const isHighlighted = item.title === "Lesson";

            return (
              <div
                key={item.title}
                className={cn(
                  "flex items-center gap-8 border-4 border-black p-8 max-md:flex-col max-md:items-start max-md:gap-2 max-md:p-4 max-md:border-2",
                  isHighlighted && "border-black bg-black text-white"
                )}
              >
                {/* Time */}
                <div className="shrink-0">
                  <span
                    className={cn(
                      "text-base font-black uppercase tracking-[-0.02em] max-md:text-sm",
                      isHighlighted ? "text-white" : "text-[#131B2E]"
                    )}
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                    }}
                  >
                    {item.time}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <h3
                      className="text-lg font-black uppercase tracking-[-0.02em] max-md:text-sm"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={cn(
                        "px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.1em] max-md:text-[8px]",
                        isHighlighted
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      )}
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      {item.duration}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "text-sm leading-relaxed max-md:text-xs",
                      isHighlighted
                        ? "text-white/70"
                        : "text-[#3E4850]"
                    )}
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Songs List */}
        {whatsToExpect.songs?.length > 0 && (
          <div className="mt-12 max-md:mt-8">
            <h3
              className="mb-4 text-center text-2xl font-black uppercase tracking-[-0.02em] max-md:text-lg"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                color: "var(--rym-navy)",
              }}
            >
              songs list
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {whatsToExpect.songs.map((song) => (
                <span
                  key={song.order}
                  className="w-full inline-flex items-center border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-[-0.02em] max-md:text-xs max-md:px-3 max-md:py-1.5"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "var(--rym-navy)",
                  }}
                >
                  <span className="mr-2 text-[#0EA5E9]">{song.order}.</span>
                  {song.title}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
