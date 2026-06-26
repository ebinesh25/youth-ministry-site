"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";
import { useConfetti } from "@/hooks/useConfetti";

export default function Registration() {
  const { registration } = useEvent();
  const { fire } = useConfetti();
  const fields = registration.fields || [];

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (registration.apiEndpoint) {
      try {
        await fetch(registration.apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch {
        // fallback to local
      }
    }

    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setSubmitted(true);
    fire();
  };

  if (submitted) {
    return (
      <section id="register" className="w-full bg-white px-[192px] py-[120px] max-lg:px-6 max-md:py-10">
        <div className="mx-auto flex max-w-[896px] flex-col items-center gap-6 py-16 text-center max-md:py-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0EA5E9]/20">
            <Check className="h-10 w-10 text-[#0EA5E9]" />
          </div>
          <h3
            className="text-2xl font-black uppercase tracking-[-0.05em]"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--rym-navy)",
            }}
          >
            {registration.successHeading}
          </h3>
          <p className="text-[#3E4850]">{registration.successMessage}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      className="w-full bg-white px-[192px] py-[120px] max-lg:px-6 max-md:py-10"
    >
      <div className="relative mx-auto max-w-[896px]">
        {/* Container with 8px border */}
        <div className="border-8 border-black p-16 max-md:p-5 max-md:border-4">
          {/* Heading area */}
          <div className="flex flex-col gap-3">
            <h2
              className="text-[48px] font-black uppercase leading-[48px] tracking-[-0.05em] max-md:text-[28px] max-md:leading-[28px]"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                color: "var(--rym-navy)",
              }}
            >
              {registration.heading}
            </h2>
            <p
              className="text-xs font-bold uppercase tracking-[0.1em] text-[#3E4850]"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              {registration.description}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6 max-md:mt-4">
            {/* Grid fields */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-md:grid-cols-1 max-md:gap-y-4">
              {fields.map((field) => {
                const isSpan2 = field.name === "invitedBy" || field.name === "age";
                const gridCol = isSpan2 ? "col-span-2 max-md:col-span-1" : "";

                return (
                  <div key={field.name} className={gridCol}>
                    <label
                      className="mb-2 block text-xs font-black uppercase tracking-[0.1em]"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                        color: "var(--rym-navy)",
                      }}
                    >
                      {field.label}
                      {field.required && (
                        <span className="ml-1 text-[#0EA5E9]">*</span>
                      )}
                    </label>
                    {field.name === "prayerRequests" ? null : (
                      <input
                        type={field.type}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full border-0 border-b-[4px] border-black bg-transparent py-3 text-base text-[#131B2E] placeholder-black/30 outline-none transition-colors focus:border-[#0EA5E9]"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Prayer Requests textarea */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-black uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  color: "var(--rym-navy)",
                }}
              >
                {registration.fields?.find(f => f.name === "prayerRequests")?.label || "Prayer Requests"}
              </label>
              <textarea
                value={formData.prayerRequests || ""}
                onChange={(e) => handleChange("prayerRequests", e.target.value)}
                placeholder={registration.fields?.find(f => f.name === "prayerRequests")?.placeholder || "Share any prayer requests..."}
                rows={4}
                className="w-full resize-none border-[1px] border-b-[4px] border-black bg-transparent p-3 text-base text-[#131B2E] placeholder-black/30 outline-none transition-colors focus:border-[#0EA5E9]"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center bg-black px-10 py-5 text-2xl font-black uppercase tracking-[-0.05em] text-white transition-all hover:opacity-90 disabled:opacity-50 max-md:px-6 max-md:py-3 max-md:text-lg"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                boxShadow: "8px 8px 0px 0px #0EA5E9",
              }}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  {registration.processingText}
                </span>
              ) : (
                registration.submitButtonText
              )}
            </button>
          </form>
        </div>

        {/* Floating badge */}
        <div className="absolute left-12 top-0 -translate-y-1/2 bg-black px-8 py-2 max-md:left-6">
          <span
            className="text-xl font-black uppercase tracking-[-0.02em] text-white max-md:text-base"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
            }}
          >
            {registration.badgeText}
          </span>
        </div>
      </div>
    </section>
  );
}
