import eventData from "@/data/event.json";
import type { EventData } from "@/types/event";

let cached: EventData | null = null;

export function getEventData(): EventData {
  if (!cached) {
    cached = eventData as EventData;
  }
  return cached;
}
