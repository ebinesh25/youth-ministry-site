"use client";

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface PosterDownloadProps {
  posterUrl: string;
  eventName: string;
  className?: string;
}

export default function PosterDownload({
  posterUrl,
  eventName,
  className,
}: PosterDownloadProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = posterUrl;
    link.download = `${eventName.replace(/\s+/g, "-").toLowerCase()}-poster.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={cn(
        "flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20",
        className
      )}
      aria-label="Download event poster"
    >
      <Download className="h-4 w-4" />
      Download Poster
    </button>
  );
}
