"use client";

import React from "react";
import EligibilityCard from "./EligibilityCard";
import Lottie from "lottie-react";

// OPTIONAL: If you have a hero.json lottie animation, place it in /public/hero.json
// and uncomment the Lottie import usage below. Otherwise comment out the Lottie element.
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1e40af] to-[#2546d3] py-20">
      {/* subtle grid-overlay using radial gradients - decorative */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.03) 0, transparent 20%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02) 0, transparent 20%)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Accelerate Your Business
              <br />
              Growth with{" "}
              <span className="text-[#c7dbff]">Government-Backed Funding</span>
            </h1>

            <p className="text-white/90 text-lg max-w-2xl mb-6">
              Expert Guidance • Guaranteed Results • Nationwide Support
              <br />
              <span className="text-white/80">Access ₹5L to ₹10Cr through verified government schemes and institutional funding</span>
            </p>

            {/* stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              <div className="p-4 bg-white/6 rounded-xl border border-white/10 text-center">
                <div className="text-lg font-bold">48hrs</div>
                <div className="text-xs text-white/70">Processing</div>
              </div>

              <div className="p-4 bg-white/6 rounded-xl border border-white/10 text-center">
                <div className="text-lg font-bold">₹120Cr+</div>
                <div className="text-xs text-white/70">Disbursed</div>
              </div>

              <div className="p-4 bg-white/6 rounded-xl border border-white/10 text-center">
                <div className="text-lg font-bold">95%</div>
                <div className="text-xs text-white/70">Success Rate</div>
              </div>

              <div className="p-4 bg-white/6 rounded-xl border border-white/10 text-center">
                <div className="text-lg font-bold">28+</div>
                <div className="text-xs text-white/70">States Covered</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium shadow">
                Start Application →
              </button>
              <button className="border border-white/40 text-white px-6 py-3 rounded-full font-medium bg-white/5">
                Explore Schemes
              </button>
            </div>

            {/* small feature ticks */}
            <div className="flex flex-wrap gap-4 text-sm text-green-300 mt-6">
              <div className="flex items-center gap-2">✓ Zero Collateral</div>
              <div className="flex items-center gap-2">✓ Minimal Documentation</div>
              <div className="flex items-center gap-2">✓ Lower Interest Rates</div>
              <div className="flex items-center gap-2">✓ Expert Support</div>
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md -mt-6 lg:mt-0">
              <EligibilityCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
