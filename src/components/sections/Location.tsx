"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";

export default function Location() {
  const { location, contact, event } = useEvent();

  const infoItems = [
    { icon: <MapPin className="h-6 w-6 text-[#0EA5E9]" />, text: location.address },
    { icon: <Phone className="h-6 w-6 text-[#0EA5E9]" />, text: contact.phone },
    { icon: <Mail className="h-6 w-6 text-[#0EA5E9]" />, text: contact.email },
  ];

  return (
    <section className="w-full border-t-4 border-black bg-[#FAF8FF] px-6 py-[120px] max-md:py-10">
      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-16 max-lg:flex-col max-lg:gap-8">
        {/* Left column — Info */}
        <div className="flex flex-1 flex-col gap-6 max-md:gap-4">
          <h2
            className="text-[60px] font-black uppercase leading-[60px] tracking-[-0.05em] max-md:text-[36px] max-md:leading-[36px]"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--rym-navy)",
            }}
          >
            FIND
            <br />
            <span className="text-[#0EA5E9]">US.</span>
          </h2>

          <div className="flex flex-col gap-4 max-md:gap-3">
            {infoItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4 max-md:gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black max-md:h-9 max-md:w-9">
                  {item.icon}
                </div>
                <span
                  className="text-base text-[#3E4850] max-md:text-sm"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Map */}
        <div className="flex-1 w-full">
          <div className="border-4 border-black bg-white max-md:border-2">
            {location.embedUrl ? (
              <iframe
                src={location.embedUrl}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location"
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
