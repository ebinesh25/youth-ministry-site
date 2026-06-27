import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getEventData } from "@/lib/event";

export function generateStaticParams() {
  const data = getEventData();
  return (data.whatsToExpect.songs ?? []).map((song) => ({
    slug: song.slug,
  }));
}

export default function SongPage({ params }: { params: { slug: string } }) {
  const data = getEventData();
  const songs = data.whatsToExpect.songs ?? [];
  const index = songs.findIndex((s) => s.slug === params.slug);

  if (index === -1) notFound();

  const song = songs[index];
  const prevSong = index > 0 ? songs[index - 1] : null;
  const nextSong = index < songs.length - 1 ? songs[index + 1] : null;

  const sectionLabel = (s: string) => {
    const map: Record<string, string> = {
      intro: "INTRO",
      verse: "VERSE",
      chorus: "CHORUS",
      bridge: "BRIDGE",
      tag: "TAG",
      ending: "ENDING",
    };
    return map[s] || s.toUpperCase();
  };

  return (
    <div className="mx-auto max-w-[896px] px-6 py-16 max-md:py-10">
      {/* Hero */}
      <div className="mb-12 flex flex-col items-center gap-4 text-center max-md:mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] bg-black text-white">
          SONG {song.order} OF {songs.length}
        </span>
        <h1
          className="text-[64px] font-black uppercase leading-[64px] tracking-[-0.05em] max-md:text-[36px] max-md:leading-[36px]"
          style={{ color: "var(--rym-navy, #131B2E)" }}
        >
          {song.title}
        </h1>
        <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] border-2 border-black">
          {song.language === "tamil" ? "தமிழ் / TAMIL" : "ENGLISH"}
        </span>
        {song.note && (
          <p className="text-sm italic text-black/50">{song.note}</p>
        )}
      </div>

      {/* Lyrics */}
      <div className="flex flex-col items-center gap-8 max-md:gap-6">
        {song.lyrics.map((line, i) => (
          <div key={i} className="flex w-full flex-col items-center gap-3">
            {line.section && (
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] bg-black text-white">
                {sectionLabel(line.section)}
              </span>
            )}
            <div className="w-full text-center">
              {line.text.split("\n").map((t, j) => (
                <p
                  key={j}
                  className="text-xl font-bold leading-relaxed tracking-[-0.02em] max-md:text-lg"
                  style={{ color: "var(--rym-navy, #131B2E)" }}
                >
                  {t}
                </p>
              ))}
              {line.transliteration && (
                <div className="mt-2">
                  {line.transliteration.split("\n").map((t, j) => (
                    <p
                      key={j}
                      className="text-sm italic leading-relaxed text-black/40 max-md:text-md"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t-2 border-black/10 pt-8 max-md:mt-10 max-md:flex-col max-md:gap-4">
        {prevSong ? (
          <Link
            href={`/songs/${prevSong.slug}`}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-[-0.02em] text-[#131B2E] transition-opacity hover:opacity-70"
          >
            <ChevronLeft className="h-5 w-5" />
            {prevSong.title}
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.1em] text-[#0EA5E9] transition-opacity hover:opacity-70"
        >
          BACK TO HOME
        </Link>

        {nextSong ? (
          <Link
            href={`/songs/${nextSong.slug}`}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-[-0.02em] text-[#131B2E] transition-opacity hover:opacity-70"
          >
            {nextSong.title}
            <ChevronRight className="h-5 w-5" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
