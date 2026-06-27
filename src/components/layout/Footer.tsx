"use client";

import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";

const QUICK_LINKS = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "SCHEDULE", id: "schedule" },
  { label: "SONGS", id: "songs" },
  { label: "GALLERY", id: "gallery" },
  { label: "REGISTER", id: "register" },
];

const SOCIAL_ICONS = [
  { icon: <Facebook className="h-5 w-5" />, key: "facebook" },
  { icon: <Instagram className="h-5 w-5" />, key: "instagram" },
  { icon: <Youtube className="h-5 w-5" />, key: "youtube" },
  { icon: <Music2 className="h-5 w-5" />, key: "tiktok" },
];

export default function Footer() {
  const { contact, location, socials } = useEvent();

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t-8 border-[#0EA5E9] bg-black">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-6 py-16 max-md:gap-10 max-md:py-10">
        {/* Top section — Two columns */}
        <div className="flex justify-center gap-20 max-lg:flex-col">
          {/* Left — Logo & tagline */}
          <div className="flex flex-1 flex-col gap-6 max-md:gap-4">
            <div className="flex flex-col">
              <span
                className="text-[60px] font-black uppercase leading-[60px] tracking-[-0.05em] text-white max-md:text-[40px] max-md:leading-[40px]"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                RYM<span className="text-[#0EA5E9]">.</span>
              </span>
            </div>
            <p
              className="max-w-[384px] text-lg leading-relaxed text-white/50 max-md:text-sm"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              Empowering the youth to lead and transform through the renewing of
              minds.
            </p>
            <div className="flex items-stretch gap-5">
              {SOCIAL_ICONS.map(({ icon, key }) => {
                const url = socials[key as keyof typeof socials];
                return (
                  <a
                    key={key}
                    href={(url as string) || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-white/50 transition-colors hover:text-white"
                    aria-label={key}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — Links & Connect */}
          <div className="flex gap-16 max-md:gap-6 max-md:flex-col">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4
                className="text-[10px] font-black uppercase tracking-[0.1em] text-white/50 max-md:text-[9px]"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                QUICK LINKS
              </h4>
              <div className="flex flex-col gap-3">
                {QUICK_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleClick(link.id)}
                    className="w-fit text-sm text-white/50 transition-colors hover:text-white max-md:text-xs"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-4">
              <h4
                className="text-[10px] font-black uppercase tracking-[0.1em] text-white/50 max-md:text-[9px]"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                CONNECT
              </h4>
              <div className="flex flex-col gap-3">
                <span
                  className="text-sm text-white/50 max-md:text-xs"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                  }}
                >
                  {contact.phone}
                </span>
                <span
                  className="text-sm text-white/50 max-md:text-xs"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                  }}
                >
                  {contact.email}
                </span>
                <span
                  className="text-sm text-white/50 max-md:text-xs"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                  }}
                >
                  {location.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center max-md:pt-4">
          <p
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 max-md:text-[8px]"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
            }}
          >
            &copy; 2026 REWRITE YOUR MIND. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
