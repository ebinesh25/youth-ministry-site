"use client";

import { useEvent } from "@/hooks/useEvent";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Music2,
  Globe,
} from "lucide-react";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: <Facebook className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  tiktok: <Music2 className="h-5 w-5" />,
  website: <Globe className="h-5 w-5" />,
};

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Attend", href: "#whyAttend" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "Register", href: "#register" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { event, contact, socials } = useEvent();

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              {contact.churchName}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{event.tagline}</p>
            <p className="mt-4 text-sm text-slate-500">
              {event.venue} | {event.time}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-slate-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {Object.entries(socials).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={platform}
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-400 transition-colors hover:bg-white/20 hover:text-white"
                    aria-label={platform}
                  >
                    {SOCIAL_ICONS[platform] || <Globe className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {contact.churchName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
