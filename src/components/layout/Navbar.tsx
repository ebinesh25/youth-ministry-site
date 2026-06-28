"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEvent } from "@/hooks/useEvent";

const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "watchlive", label: "LIVE" },
  { id: "about", label: "ABOUT" },
  { id: "schedule", label: "SCHEDULE" },
  { id: "songs", label: "SONGS" },
  { id: "gallery", label: "GALLERY" },
] as const;

export default function Navbar() {
  const { feedbackGoogleFormUrl } = useEvent();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HEADER_H = 80;
  const handleClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_H;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-black/5 bg-white/90 backdrop-blur-md"
          : "bg-transparent backdrop-blur-xsm",
      )}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleClick("home")}
          className="text-2xl font-black uppercase tracking-[-0.05em]"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          RYM<span className="text-[#0EA5E9]">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="text-xs font-bold uppercase tracking-[0.1em] transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                color: "var(--rym-navy)",
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href={feedbackGoogleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-xs font-black uppercase tracking-[-0.05em] text-white transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              backgroundColor: "var(--rym-black)",
            }}
          >
            RESPONSE
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[#131B2E] transition-colors hover:bg-black/5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="block w-full rounded-lg px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.1em] text-[#131B2E] transition-colors hover:bg-black/5"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={feedbackGoogleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-full px-8 py-3 text-center text-xs font-black uppercase tracking-[-0.05em] text-white"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                backgroundColor: "var(--rym-black)",
              }}
            >
              RESPONSE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
