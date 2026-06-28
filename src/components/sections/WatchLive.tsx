"use client";

import { useEvent } from "@/hooks/useEvent";

function getYouTubeEmbedId(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return v;
    }
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1).split("/")[0] || null;
    }
    return null;
  } catch {
    return null;
  }
}

export default function WatchLive() {
  const { watchLive } = useEvent();

  if (!watchLive) return null;

  const { heading, headingHighlight, youtubeUrl, description, buttonText } = watchLive;
  const videoId = getYouTubeEmbedId(youtubeUrl);

  return (
    <section
      id="watchlive"
      className="relative w-full border-t-4 border-black bg-white py-[120px] max-md:py-10"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-[192px] max-md:px-6 max-md:gap-6">
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

        {/* YouTube Player */}
        {videoId && (
          <div className="w-full max-w-[800px] border-4 border-black bg-white max-md:border-2">
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                title={heading}
              />
            </div>
          </div>
        )}

        {/* External link button */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border-4 border-black bg-transparent px-10 py-4 text-lg font-black uppercase tracking-[-0.05em] text-[#131B2E] transition-colors hover:bg-black/5 max-md:px-6 max-md:py-3 max-md:text-sm max-md:border-2"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
