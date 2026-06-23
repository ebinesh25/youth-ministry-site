"use client";

import { createContext, useState, useCallback, type ReactNode } from "react";

interface ConfettiContextValue {
  isActive: boolean;
  fire: () => void;
}

export const ConfettiContext = createContext<ConfettiContextValue | null>(null);

export function ConfettiProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  const fire = useCallback(() => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 5000);
  }, []);

  return (
    <ConfettiContext.Provider value={{ isActive, fire }}>
      {children}
    </ConfettiContext.Provider>
  );
}
