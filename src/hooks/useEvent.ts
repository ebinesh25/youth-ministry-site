"use client";

import { useContext } from "react";
import { EventContext } from "@/components/providers/EventProvider";
import type { EventData } from "@/types/event";

export function useEvent(): EventData {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
}
