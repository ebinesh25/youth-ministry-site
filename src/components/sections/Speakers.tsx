"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Globe, User } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  instagram: <Instagram className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
  website: <Globe className="h-5 w-5" />,
};

export default function Speakers() {
  const { speaker } = useEvent();
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="speakers" className="section-padding relative bg-slate-900/30">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading title="Meet Our Speaker" subtitle="A word from our guest" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <GlassCard className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="shrink-0"
              >
                <div className="relative">
                  <div className="h-48 w-48 overflow-hidden rounded-2xl md:h-56 md:w-56">
                    {photoFailed ? (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
                        <User className="h-16 w-16 text-purple-300" />
                      </div>
                    ) : (
                      <img
                        src={speaker.photo}
                        alt={speaker.name}
                        className="h-full w-full object-cover"
                        onError={() => setPhotoFailed(true)}
                      />
                    )}
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 rounded-3xl border-2 border-dashed border-purple-500/30"
                  />
                </div>
              </motion.div>

              <div className="text-center md:text-left">
                <h3 className="font-display text-3xl font-bold text-white">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-purple-400">{speaker.title}</p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  {speaker.bio}
                </p>

                {Object.keys(speaker.socials).length > 0 && (
                  <div className="mt-6 flex justify-center gap-3 md:justify-start">
                    {Object.entries(speaker.socials).map(([platform, url]) => {
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
                          {SOCIAL_ICONS[platform] || (
                            <Globe className="h-5 w-5" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
