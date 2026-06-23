"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Globe, Music2 } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

const SOCIAL_ICONS: Record<string, { icon: React.ReactNode; label: string }> = {
  facebook: { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
  instagram: { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
  youtube: { icon: <Youtube className="h-5 w-5" />, label: "YouTube" },
  twitter: { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
  tiktok: { icon: <Music2 className="h-5 w-5" />, label: "TikTok" },
  website: { icon: <Globe className="h-5 w-5" />, label: "Website" },
};

export default function Contact() {
  const { contact, socials } = useEvent();

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading title="Get In Touch" subtitle="We'd love to hear from you" />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <GlassCard className="h-full">
              <h3 className="font-display text-xl font-bold text-white">
                Contact Information
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="text-white">{contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/20">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-white">{contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/20">
                    <MapPin className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Address</p>
                    <p className="text-white">{contact.address}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.2}>
            <GlassCard className="h-full">
              <h3 className="font-display text-xl font-bold text-white">
                Follow Us
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Stay connected on social media
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {Object.entries(socials).map(([platform, url]) => {
                  if (!url) return null;
                  const info = SOCIAL_ICONS[platform];
                  if (!info) return null;
                  return (
                    <a
                      key={platform}
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                    >
                      <span className="text-slate-400">{info.icon}</span>
                      <span className="text-sm text-white">{info.label}</span>
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
