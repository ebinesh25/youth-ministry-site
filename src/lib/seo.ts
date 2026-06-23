import type { EventData } from "@/types/event";

export function generateStructuredEventSchema(data: EventData): object {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: data.seo.title,
    description: data.seo.description,
    startDate: data.event.date,
    endDate: data.event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: data.event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: data.location.address,
      },
    },
    organizer: {
      "@type": "Organization",
      name: data.contact.churchName,
      url: data.socials.website || "",
    },
    image: data.seo.ogImage,
    performer: {
      "@type": "Person",
      name: data.speaker.name,
    },
  };
}
