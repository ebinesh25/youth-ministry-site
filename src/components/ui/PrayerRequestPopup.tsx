"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PrayerRequestPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", request: "", anonymous: false });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setForm({ name: "", request: "", anonymous: false });
    }, 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Prayer request"
      >
        <Send className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card w-full max-w-md p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {submitted ? (
                <div className="py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20"
                  >
                    <Send className="h-8 w-8 text-green-400" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Prayer Received
                  </h3>
                  <p className="mt-2 text-slate-400">
                    We will pray for you. God bless!
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Prayer Request
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Share your prayer request with us. We will pray for you.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name (optional)"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Share your prayer request..."
                        value={form.request}
                        onChange={(e) =>
                          setForm({ ...form, request: e.target.value })
                        }
                        required
                        rows={4}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-purple-500"
                      />
                    </div>
                    <label className="flex items-center gap-3 text-sm text-slate-400">
                      <input
                        type="checkbox"
                        checked={form.anonymous}
                        onChange={(e) =>
                          setForm({ ...form, anonymous: e.target.checked })
                        }
                        className="h-4 w-4 rounded border-white/10 bg-white/5 text-purple-600"
                      />
                      Submit anonymously
                    </label>
                    <button
                      type="submit"
                      disabled={isLoading || !form.request.trim()}
                      className={cn(
                        "w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition-all",
                        "hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                      )}
                    >
                      {isLoading ? "Sending..." : "Send Prayer Request"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
