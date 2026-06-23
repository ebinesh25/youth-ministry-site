"use client";

import { createContext, type ReactNode } from "react";
import type { EventData } from "@/types/event";
import { getEventData } from "@/lib/event";

export const EventContext = createContext<EventData | null>(null);

export function EventProvider({ children }: { children: ReactNode }) {
  const data = getEventData();

  return (
    <EventContext.Provider value={data}>{children}</EventContext.Provider>
  );
}
