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
        <div className="flex flex-1 flex-col gap-6 max-md:gap-3">
          {/* Badge */}
          <span
            className="inline-flex w-fit items-center bg-[#0EA5E9] px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black max-md:text-[8px] max-md:px-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            GUEST SPEAKER
          </span>

          {/* Name */}
          <h2
            className="text-[96px] font-black uppercase leading-[96px] tracking-[-0.05em] max-md:text-[40px] max-md:leading-[40px]"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--rym-white)",
            }}
          >
            BRO.
            <br />
            <span className="text-[#0EA5E9]">FELIX</span>
          </h2>

          {/* Bio */}
          <p
            className="max-w-lg text-lg leading-8 text-white/70 max-md:text-sm max-md:leading-6"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            A prophetic voice for the next generation. Bringing energy, wisdom,
            and the transformative power of the Word to ICC Iloilo for this
            special revival.
          </p>

          {/* Social icons */}
          <div className="mt-4 flex gap-4 max-md:mt-2">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center border-2 border-white/20 text-white/70 transition-colors hover:border-white hover:text-white max-md:h-8 max-md:w-8"
                aria-label={`Social link ${i + 1}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right column — Image */}
        <div className="flex-1">
          {/* Blue border frame */}
          <div className="relative border-2 border-[#0EA5E9] p-4 max-md:p-2">
            {/* Speaker image */}
            <div className="h-[548px] w-full max-md:h-[300px] max-sm:h-[220px]">
              {!imgFailed ? (
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-white">
                  <span
                    className="text-6xl font-black uppercase tracking-[-0.05em] text-black/20"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                    }}
                  >
                    {speaker.name}
                  </span>
                </div>
              )}
            </div>

            {/* Overlapping name badge */}
            <div
              className="absolute -left-8 bottom-8 bg-[#0EA5E9] px-8 py-8 max-md:-left-3 max-md:bottom-4 max-md:px-4 max-md:py-3"
            >
              <span
                className="text-[36px] font-black uppercase leading-10 tracking-[-0.05em] text-black max-md:text-xl max-md:leading-6"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                FELIX.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
