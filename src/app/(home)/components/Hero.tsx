"use client";

import React, { useState, useEffect } from "react";
import EligibilityCard from "./EligibilityCard";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, TrendingUp, Shield } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Floating animation variants
  const floatingVariants: any = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 md:py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient-x" />

      {/* Geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
            }}
            animate={{
              y: [null, -30, 0],
              x: [null, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">Trusted by 5000+ Businesses</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Supercharge Your
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Business Growth
              </span>
              <br />
              with Smart Funding
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-100 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              Get instant access to ₹5L - ₹10Cr through verified government schemes & institutional funding.
              <span className="block mt-2 text-white/80 font-medium">
                Expert guidance • 95% success rate • Fast processing
              </span>
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mb-8"
            >
              {[
                { value: "48hrs", label: "Fast Processing", icon: "⚡" },
                { value: "₹120Cr+", label: "Funds Disbursed", icon: "💰" },
                { value: "95%", label: "Success Rate", icon: "📈" },
                { value: "28+", label: "States Covered", icon: "🗺️" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:border-cyan-500/30"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{stat.icon}</span>
                    <div className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-blue-200/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="flex items-center gap-2">
                  Start Free Application
                  <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Explore Schemes
                  <Shield className="w-4 h-4" />
                </span>
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              {[
                "Zero Collateral",
                "Minimal Documentation",
                "Lower Interest Rates",
                "Expert Support",
                "No Hidden Charges",
                "Digital Process",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-cyan-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right card with animation */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md transform lg:translate-y-0">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                <EligibilityCard />
              </div>
              
              {/* Trust badge */}
              <div className="mt-6 flex items-center justify-center gap-3 text-white/80">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-blue-900 bg-gradient-to-br from-cyan-400 to-blue-500"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-medium">Trusted by 5000+ businesses</div>
                  <div className="text-xs text-white/60">4.8 ★ Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}