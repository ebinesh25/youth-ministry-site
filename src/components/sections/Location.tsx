"use client";

import { MapPin, Navigation } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

export default function Location() {
  const { location, event: eventInfo } = useEvent();

  const googleMapsUrl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`;

  return (
    <section id="location" className="section-padding relative bg-slate-900/30">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            title="Find Us Here"
            subtitle={location.address}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <GlassCard className="overflow-hidden p-0" hover={false}>
            <div className="aspect-[21/9] w-full">
              <iframe
                src={location.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location"
                className="rounded-t-xl"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="font-medium text-white">{eventInfo.venue}</p>
                  <p className="text-sm text-slate-400">{location.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Maps
                </a>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
