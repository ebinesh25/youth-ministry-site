"use client";

import { CalendarPlus } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import { generateICS, downloadICS } from "@/lib/calendar";
import { cn } from "@/lib/utils";

interface AddToCalendarProps {
  className?: string;
}

export default function AddToCalendar({ className }: AddToCalendarProps) {
  const { event } = useEvent();

  const handleAdd = () => {
    const ics = generateICS({
      name: event.name,
      date: event.date,
      endDate: event.endDate,
      venue: event.venue,
      description: `Join us for ${event.name}!`,
    });
    downloadICS(ics, `${event.name.replace(/\s+/g, "-").toLowerCase()}.ics`);
  };

  return (
    <button
      onClick={handleAdd}
      className={cn(
        "flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20",
        className
      )}
      aria-label="Add to calendar"
    >
      <CalendarPlus className="h-4 w-4" />
      Add to Calendar
    </button>
  );
}
