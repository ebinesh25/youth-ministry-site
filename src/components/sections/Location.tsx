"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import { cn } from "@/lib/utils";

export default function Location() {
  const { location, contact, event, venues } = useEvent();
  const [activeVenue, setActiveVenue] = useState<number | null>(null);
  const userInteracted = useRef(false);

  useEffect(() => {
    if (venues.length === 0) return;
    const interval = setInterval(() => {
      if (userInteracted.current) return;
      setActiveVenue((prev) => (prev === null || prev >= venues.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [venues.length]);

  const handleVenueClick = (i: number) => {
    userInteracted.current = true;
    setActiveVenue(activeVenue === i ? null : i);
  };

  const mapSrc = activeVenue !== null ? venues[activeVenue]?.googleMapsUrl : location.embedUrl;

  const infoItems = [
    { icon: <MapPin className="h-6 w-6 text-[#0EA5E9]" />, text: location.address },
    { icon: <Phone className="h-6 w-6 text-[#0EA5E9]" />, text: contact.phone },
    { icon: <Mail className="h-6 w-6 text-[#0EA5E9]" />, text: contact.email },
  ];

  return (
    <section className="w-full border-t-4 border-black bg-[#FAF8FF] py-[120px] max-md:py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-6">
        <h2
          className="text-center text-[60px] font-black uppercase leading-[60px] tracking-[-0.05em] max-md:text-[36px] max-md:leading-[36px]"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--rym-navy)",
          }}
        >
          {location.heading}
          <br />
          <span className="text-[#0EA5E9] text-[32px] tracking-[-0.05em]">{location.headingHighlight}</span>
        </h2>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1280px] items-start justify-center gap-16 px-6 max-lg:flex-col max-lg:gap-8">
        {/* Left column — Info */}
        <div className="w-full flex flex-1 flex-col gap-6 max-md:gap-4">

          {/* Regional Venues */}
          {venues.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                {venues.map((venue, i) => (
                  <button
                    key={i}
                    onClick={() => handleVenueClick(i)}
                    className={cn(
                      "flex flex-col gap-1 border-2 p-3 text-left transition-all",
                      activeVenue === i
                        ? "border-[#0EA5E9] bg-[#0EA5E9]/5"
                        : "border-black bg-transparent hover:border-[#0EA5E9]/50"
                    )}
                  >
                    <span
                      className={cn(
                        "text-[10px] font-black uppercase tracking-[0.1em] transition-colors",
                        activeVenue === i ? "text-[#0EA5E9]" : "text-[#0EA5E9]"
                      )}
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      {venue.region}
                    </span>
                    {venue.dayTime && (
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.05em]"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--rym-navy)" }}
                      >
                        {venue.dayTime}
                      </span>
                    )}
                    <div className="mt-1 flex flex-col gap-0">
                      {venue.address.map((line, j) => (
                        <span
                          key={j}
                          className="text-[10px] leading-tight text-[#3E4850]"
                          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column — Map */}
        <div className="flex-1 w-full">
          <div className="border-4 border-black bg-white max-md:border-2">
            {mapSrc ? (
              <iframe
                src={mapSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={location.mapTitle}
                className="block max-md:h-[200px]"
              />
            ) : (
              <div className="flex h-[320px] items-center justify-center bg-[#F2F3FF] max-md:h-[200px]">
                <div className="flex flex-col items-center gap-4">
                  <MapPin className="h-10 w-10 text-[#0EA5E9]" />
                  <span
                    className="text-base font-black uppercase tracking-[-0.02em] text-[#3E4850]"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                    }}
                  >
                    {event.venue}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
