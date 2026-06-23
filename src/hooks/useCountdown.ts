"use client";

import { useState, useEffect } from "react";

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  isOver: boolean;
}

export function useCountdown(
  targetDate: string,
  endDate: string
): CountdownResult {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const target = new Date(targetDate);
  const end = new Date(endDate);
  const diffMs = target.getTime() - now.getTime();
  const ended = now.getTime() > end.getTime();
  const isLive = now.getTime() >= target.getTime() && !ended;

  if (ended) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: false, isOver: true };
  }

  if (isLive) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true, isOver: false };
  }

  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isLive: false, isOver: false };
}
