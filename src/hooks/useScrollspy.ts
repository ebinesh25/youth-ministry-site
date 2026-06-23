"use client";

import { useState, useEffect } from "react";

export function useScrollspy(sectionIds: string[], offset = 100): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (id: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect(id), {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: 0,
        });
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [sectionIds, offset]);

  return activeId;
}
