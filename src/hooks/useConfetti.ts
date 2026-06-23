"use client";

import { useContext } from "react";
import { ConfettiContext } from "@/components/providers/ConfettiProvider";

export function useConfetti() {
  const context = useContext(ConfettiContext);
  if (!context) {
    throw new Error("useConfetti must be used within a ConfettiProvider");
  }
  return context;
}
