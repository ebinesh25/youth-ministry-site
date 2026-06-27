"use client";

import { useState } from "react";
import { Instagram, Facebook, Globe } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";

export default function SpeakerHighlight() {
  const { speaker } = useEvent();
  const [imgFailed, setImgFailed] = useState(false);

  const socials = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: speaker.socials?.instagram || "#",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      href: speaker.socials?.facebook || "#",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      href: speaker.socials?.website || "#",
    },
  ];

  return (
    <section className="w-full bg-black py-[120px] max-md:py-10">
      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-16 px-6 max-lg:flex-col max-lg:gap-8">
        {/* Left column — Text */}
        <div className="flex flex-1 flex-col lg:flex-row gap-6 max-md:gap-3">
          {/* Badge */}
          <span
            className="inline-flex w-fit items-center bg-[#0EA5E9] px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black max-md:text-[8px] max-md:px-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {speaker.badge}
          </span>

          {/* Name */}
          <h2
            className="text-[96px] font-black uppercase leading-[96px] tracking-[-0.05em] max-md:text-[40px] max-md:leading-[40px]"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--rym-white)",
            }}
          >
            {speaker.name.substring(0, 4)}
            <br />
            <span className="text-[#0EA5E9]">{speaker.name.substring(5)}</span>
          </h2>

          {/* Bio */}
          <p
            className="max-w-lg text-lg leading-8 text-white/70 max-md:text-sm max-md:leading-6"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {speaker.bio}
          </p>

          {/* Message Translation */}
          {speaker.messageTranslation && (
            <p
              className="max-w-lg text-sm font-bold uppercase tracking-[0.05em] text-[#0EA5E9] max-md:text-[10px]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Message Translation: {speaker.messageTranslation}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
