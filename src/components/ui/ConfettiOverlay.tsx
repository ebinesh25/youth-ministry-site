"use client";

import { useConfetti } from "@/hooks/useConfetti";
import ReactConfetti from "react-confetti";

export default function ConfettiOverlay() {
  const { isActive } = useConfetti();

  if (!isActive) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      <ReactConfetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={300}
        recycle={false}
        colors={["#3b82f6", "#a855f7", "#ec4899", "#22d3ee", "#facc15"]}
      />
    </div>
  );
}
