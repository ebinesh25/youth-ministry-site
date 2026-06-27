"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "schedule", label: "SCHEDULE" },
  { id: "songs", label: "SONGS" },
  { id: "gallery", label: "GALLERY" },
];

export default function MobileNav() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // Hide/show on scroll direction
      if (y > lastScroll && y > 300) setHidden(true);
      else setHidden(false);
      setLastScroll(y);

      // Determine active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop - 120 <= y) {
          setActive(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const HEADER_H = 80;
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_H;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-black/10 bg-white/95 backdrop-blur-md transition-transform duration-300 md:hidden",
        hidden ? "translate-y-full" : "translate-y-0"
      )}
      style={{ padding: "8px env(safe-area-inset-bottom) 8px 0" }}
    >
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          onClick={() => handleClick(s.id)}
          className={cn(
            "flex flex-col items-center gap-0.5 px-2 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] transition-colors",
            active === s.id
              ? "text-[#0EA5E9]"
              : "text-black/40 hover:text-black/70"
          )}
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          <span>{s.label}</span>
          <div
            className={cn(
              "h-1 w-5 rounded-full transition-all",
              active === s.id ? "bg-[#0EA5E9]" : "bg-transparent"
            )}
          />
        </button>
      ))}
    </nav>
  );
}
