"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";

export default function FloatingWhatsApp() {
  const { socials } = useEvent();
  const whatsappUrl = socials.whatsapp;

  if (!whatsappUrl) return null;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30"
      aria-label="Chat on WhatsApp"
    >
      <motion.span
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="h-7 w-7" />
      </motion.span>
    </motion.a>
  );
}
