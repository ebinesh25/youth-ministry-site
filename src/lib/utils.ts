import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function mapIconName(iconName: string): string {
  const iconMap: Record<string, string> = {
    Users: "users",
    Eye: "eye",
    Target: "target",
    BookOpen: "book-open",
    Heart: "heart",
    HandsPraying: "hands-praying",
    Music: "music",
    Zap: "zap",
    Wifi: "wifi",
    MessageCircle: "message-circle",
    Coffee: "coffee",
    MapPin: "map-pin",
    Clock: "clock",
    Calendar: "calendar",
    ArrowRight: "arrow-right",
    ChevronDown: "chevron-down",
    Menu: "menu",
    X: "x",
    Play: "play",
    Pause: "pause",
    Quote: "quote",
    Cross: "cross",
    Sun: "sun",
    Moon: "moon",
    Share2: "share-2",
    Bell: "bell",
    Download: "download",
    MessageSquare: "message-square",
    Phone: "phone",
    Mail: "mail",
    Globe: "globe",
    Youtube: "youtube",
    Instagram: "instagram",
    Facebook: "facebook",
    Twitter: "twitter",
    Map: "map",
    Check: "check",
    Loader2: "loader-2",
    CrossIcon: "cross",
  };
  return iconMap[iconName] || iconName.toLowerCase();
}

export function getGradientClasses(gradient: string): string {
  return `bg-gradient-to-r ${gradient}`;
}
