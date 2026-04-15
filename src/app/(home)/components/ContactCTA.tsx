"use client";

import { MessageCircle, PhoneCall, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { createLead } from "@/lib/supabase";
import { Bricolage_Grotesque } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const defaultForm = {
  business_name: "",
  name: "",
  mobile: "",
  email: "",
  required_funding: "",
  funding_type: "working-capital",
  status: "new",
};

export default function ContactCTA() {
  const [formData, setFormData] = useState(defaultForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);
    try {
      await createLead(formData);
      setStatus({ type: "success", message: "Application submitted. We will call you soon." });
      setFormData(defaultForm);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit right now.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        input::placeholder {
          font-weight: 400;
          color: #4a5568;
        }
        input {
          color: #1a202c;
        }
        select {
          color: #1a202c;
        }
      `}</style>
      <section id="contact-cta" className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className={`text-2xl sm:text-3xl font-bold text-slate-900 ${bricolage.className}`}>Start your <span style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Funding</span> Journey</h2>
          <p className={`mt-2 text-slate-600 max-w-xl mx-auto text-sm ${sourceSerif.className}`}>
            Quick application. Expert guidance. Fast response.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    required
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] ${sourceSerif.className}`}
                  />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    required
                    onChange={handleChange}
                    placeholder="Phone"
                    className={`w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] ${sourceSerif.className}`}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] ${sourceSerif.className}`}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="business_name"
                    value={formData.business_name}
                    required
                    onChange={handleChange}
                    placeholder="Business Name"
                    className={`w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] ${sourceSerif.className}`}
                  />
                  <input
                    type="text"
                    name="required_funding"
                    value={formData.required_funding}
                    required
                    onChange={handleChange}
                    placeholder="Funding Needed"
                    className={`w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] ${sourceSerif.className}`}
                  />
                </div>
                <select
                  name="funding_type"
                  value={formData.funding_type}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/20 focus:border-[#2E7D32] ${sourceSerif.className}`}
                >
                  <option value="working-capital">Working Capital</option>
                  <option value="term-loan">Term Loan</option>
                  <option value="startup-funding">Startup Funding</option>
                  <option value="government-funding">Government Funding</option>
                </select>

                {status && (
                  <div
                    className={`rounded-lg px-3 py-2 text-sm ${sourceSerif.className} ${
                      status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] hover:from-[#256d2b] hover:to-[#559b5b] text-white font-semibold py-2.5 rounded-lg shadow-sm transition inline-flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="flex flex-col gap-3">
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle className="text-[#25D366] w-4 h-4" />
                  </div>
                  <span className={`font-semibold text-slate-900 text-sm ${bricolage.className}`}>WhatsApp</span>
                </div>
                <p className={`text-xs text-slate-600 mb-3 ${sourceSerif.className}`}>
                  Quick responses for eligibility & funding queries
                </p>
                <a
                  href="https://wa.me/917041894751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#22bb5b] text-white text-xs font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md ${sourceSerif.className}`}
                >
                  Chat Now
                  <MessageCircle className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#2E7D32]/10 flex items-center justify-center">
                    <PhoneCall className="text-[#2E7D32] w-4 h-4" />
                  </div>
                  <span className={`font-semibold text-slate-900 text-sm ${bricolage.className}`}>Call Us</span>
                </div>
                <p className={`text-xs text-slate-600 mb-3 ${sourceSerif.className}`}>
                  Speak directly with our funding advisors
                </p>
                <a
                  href="tel:+917041894751"
                  className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] hover:from-[#256d2b] hover:to-[#559b5b] text-white text-xs font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md ${sourceSerif.className}`}
                >
                  Call Now
                  <PhoneCall className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2E7D32]/5 to-[#66BB6A]/5 border border-[#2E7D32]/20 rounded-xl p-3 mt-5">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2E7D32]" />
              <p className={`text-sm font-semibold text-slate-700 ${sourceSerif.className}`}>
              Most callback requests are responded to within a timeframe of approximately 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
