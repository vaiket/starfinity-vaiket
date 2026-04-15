"use client";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormData = {
  business_name: string;
  funding_type: string;
  required_funding: string;
  businessStage: string;
  name: string;
  mobile: string;
  email: string;
};

export default function EligibilityCard() {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      business_name: "",
      funding_type: "",
      required_funding: "",
      businessStage: "",
      name: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/leads", {
        business_name: data.business_name,
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        required_funding: data.required_funding,
        funding_type: data.funding_type || data.businessStage,
        status: "new",
      });
      alert("Submitted successfully — We'll contact you soon!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Submission failed. Try again.");
    }
  };

  // Stage buttons helper
  const stages = [
    { id: "idea", label: "Idea Stage" },
    { id: "early", label: "Early Revenue" },
    { id: "scaling", label: "Scaling" },
    { id: "established", label: "Established" },
  ];

  return (
    <div className="max-w-md w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
      <h3 className="text-white text-xl font-semibold mb-2">Check Your Eligibility</h3>
      <p className="text-white/80 text-sm mb-4">Get instant funding options in 30 seconds</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-white/80 text-xs">Full Name *</label>
          <input
            {...register("name", { required: true })}
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/10"
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-white/80 text-xs">Phone *</label>
            <input
              {...register("mobile", { required: true })}
              className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/10"
              placeholder="Mobile number"
            />
          </div>

          <div>
            <label className="text-white/80 text-xs">Email *</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/10"
              placeholder="Email address"
            />
          </div>
        </div>

        <div>
          <label className="text-white/80 text-xs">Business Name *</label>
          <input
            {...register("business_name", { required: true })}
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/10"
            placeholder="Business name"
          />
        </div>

        <div>
          <label className="text-white/80 text-xs">Funding Type *</label>
          <select
            {...register("funding_type", { required: true })}
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/10"
          >
            <option value="">Select funding type</option>
            <option value="working-capital">Working Capital</option>
            <option value="term-loan">Term Loan</option>
            <option value="startup-funding">Startup Funding</option>
            <option value="government-funding">Government Funding</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="trading">Trading</option>
            <option value="services">Services</option>
            <option value="retail">Retail</option>
          </select>
        </div>

        <div>
          <label className="text-white/80 text-xs">Funding Required *</label>
          <select
            {...register("required_funding", { required: true })}
            className="mt-2 w-full p-3 rounded-lg bg-white/20 text-white border border-white/10"
          >
            <option value="">Select Range</option>
            <option value="0-10l">₹0 - ₹10L</option>
            <option value="10l-50l">₹10L - ₹50L</option>
            <option value="50l-1cr">₹50L - ₹1Cr</option>
            <option value="1cr+">₹1Cr+</option>
          </select>
        </div>

        <div>
          <label className="text-white/80 text-xs">Business Stage *</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {stages.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  // set value programmatically
                  const el = document.getElementById(`stage-${s.id}`) as HTMLInputElement | null;
                  if (el) el.click();
                }}
                className="text-sm py-2 rounded-lg bg-white/10 text-white/90 border border-white/10 hover:bg-white/20"
              >
                {s.label}
              </button>
            ))}
            {/* hidden radios to store value */}
            {stages.map((s) => (
              <input
                key={`input-${s.id}`}
                id={`stage-${s.id}`}
                type="radio"
                {...register("businessStage")}
                value={s.id}
                className="hidden"
              />
            ))}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-white text-blue-700 font-semibold py-3 rounded-lg mt-2"
          >
            Check Eligibility →
          </button>
        </div>

        <div className="text-xs text-white/70 flex items-center gap-3 justify-center pt-1">
          <span>✓ 100% Free</span>
          <span>✓ No Spam</span>
          <span>✓ Secure</span>
        </div>
      </form>
    </div>
  );
}
