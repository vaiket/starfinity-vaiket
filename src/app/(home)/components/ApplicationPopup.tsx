"use client";

import React, { useEffect, useState } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { createLead } from "@/lib/supabase";

type ApplicationPopupProps = {
  open: boolean;
  onClose: () => void;
};

const defaultForm = {
  business_name: "",
  name: "",
  mobile: "",
  email: "",
  required_funding: "",
  funding_type: "working-capital",
  status: "new",
};

export default function ApplicationPopup({ open, onClose }: ApplicationPopupProps) {
  const [formData, setFormData] = useState(defaultForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "error"; message: string } | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const updateField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      await createLead(formData);
      setStatus({
        type: "ok",
        message: "Application submitted successfully. We will contact you soon.",
      });
      setFormData(defaultForm);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit right now.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Application form"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Start Your Application</h2>
            <p className="text-sm text-gray-600 mt-1">Fill this quick form and our team will reach out.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={updateField}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#414288]/30 text-gray-900 placeholder:text-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={updateField}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#414288]/30 text-gray-900 placeholder:text-gray-600"
          />
          <input
            name="mobile"
            placeholder="Phone number"
            value={formData.mobile}
            onChange={updateField}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#414288]/30 text-gray-900 placeholder:text-gray-600"
          />
          <input
            name="business_name"
            placeholder="Business name"
            value={formData.business_name}
            onChange={updateField}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#414288]/30 text-gray-900 placeholder:text-gray-600"
          />
          <input
            name="required_funding"
            placeholder="Funding needed (e.g. 25,00,000)"
            value={formData.required_funding}
            onChange={updateField}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#414288]/30 text-gray-900 placeholder:text-gray-600 md:col-span-2"
          />
          <select
            name="funding_type"
            value={formData.funding_type}
            onChange={updateField}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#414288]/30 text-gray-900 md:col-span-2"
          >
            <option value="working-capital">Working Capital</option>
            <option value="term-loan">Term Loan</option>
            <option value="startup-funding">Startup Funding</option>
            <option value="equipment-finance">Equipment Finance</option>
            <option value="other">Other</option>
          </select>

          {status && (
            <div
              className={`md:col-span-2 text-sm rounded-lg px-3 py-2 ${
                status.type === "ok" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="md:col-span-2 flex items-center justify-center gap-2 bg-[#414288] text-white px-5 py-3 rounded-lg font-semibold transition-opacity disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Submit Application
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
