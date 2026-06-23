"use client";

import { Bell } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import { cn } from "@/lib/utils";

interface ReminderButtonProps {
  className?: string;
}

export default function ReminderButton({ className }: ReminderButtonProps) {
  const { event } = useEvent();

  const handleReminder = async () => {
    if (!("Notification" in window)) {
      alert("Notifications are not supported in this browser.");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const eventDate = new Date(event.date);
      const reminderTime = eventDate.getTime() - 3600000;

      if (reminderTime > Date.now()) {
        const delay = reminderTime - Date.now();
        setTimeout(() => {
          new Notification(event.reminderMessage, {
            icon: event.logo || undefined,
            badge: event.logo || undefined,
          });
        }, delay);
        alert("Reminder set! You'll be notified 1 hour before the event.");
      } else {
        alert("The event is less than 1 hour away. Set a manual reminder on your phone!");
      }
    }
  };

  return (
    <button
      onClick={handleReminder}
      className={cn(
        "flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20",
        className
      )}
      aria-label="Set reminder"
    >
      <Bell className="h-4 w-4" />
      Remind Me
    </button>
  );
}
