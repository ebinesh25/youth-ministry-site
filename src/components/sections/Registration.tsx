"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import { useConfetti } from "@/hooks/useConfetti";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function Registration() {
  const { registration, event } = useEvent();
  const { fire } = useConfetti();

  if (registration.googleFormUrl) {
    return (
      <section id="register" className="section-padding relative">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeading
              title={registration.heading}
              subtitle={registration.description}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <GlassCard className="mx-auto max-w-4xl p-2" hover={false}>
              <iframe
                src={registration.googleFormUrl}
                className="h-[800px] w-full rounded-xl"
                frameBorder="0"
                title="Registration Form"
              />
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="section-padding relative">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            title={registration.heading}
            subtitle={registration.description}
          />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <RegistrationForm
            fields={registration.fields || []}
            submitText={registration.submitButtonText}
            successMessage={registration.successMessage}
            apiEndpoint={registration.apiEndpoint}
            onSuccess={fire}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}

function RegistrationForm({
  fields,
  submitText,
  successMessage,
  apiEndpoint,
  onSuccess,
}: {
  fields: {
    name: string;
    label: string;
    type: string;
    required: boolean;
    placeholder?: string;
  }[];
  submitText: string;
  successMessage: string;
  apiEndpoint?: string;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (apiEndpoint) {
      try {
        await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch {
        // fallback to local
      }
    }

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setSubmitted(true);
    onSuccess();
  };

  if (submitted) {
    return (
      <GlassCard className="mx-auto max-w-lg py-16 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20"
        >
          <Check className="h-10 w-10 text-green-400" />
        </motion.div>
        <h3 className="font-display text-2xl font-bold text-white">
          Registration Successful!
        </h3>
        <p className="mt-4 text-slate-400">{successMessage}</p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="mx-auto max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              {field.label}
              {field.required && (
                <span className="ml-1 text-red-400">*</span>
              )}
            </label>
            {field.type === "textarea" ? (
              <textarea
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                rows={4}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-purple-500"
              />
            ) : (
              <input
                type={field.type}
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-purple-500"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all",
            "hover:shadow-lg hover:shadow-purple-500/25",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Processing...
            </span>
          ) : (
            submitText
          )}
        </button>
      </form>
    </GlassCard>
  );
}
