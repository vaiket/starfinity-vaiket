"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Rocket,
  HandCoins,
  TrendingUp,
  AlertTriangle,
  HeartHandshake,
} from "lucide-react";

const categories = [
  { key: "all", label: "All Schemes" },
  { key: "micro", label: "Micro Credit" },
  { key: "guarantee", label: "Guarantee Schemes" },
  { key: "subsidy", label: "Subsidy Programs" },
  { key: "startup", label: "Startup Funds" },
  { key: "emergency", label: "Emergency Credit" },
];

const schemeData = [
  {
    title: "Pradhan Mantri Mudra Yojana",
    subtitle: "Shishu ₹50K + Kishore ₹5L + Tarun ₹10L",
    badges: ["Collateral-free", "Micro Credit"],
    rate: "98%",
    time: "7-10 days",
    category: "micro",
    popular: true,
  },
  {
    title: "CGTMSE Credit Guarantee",
    subtitle: "Guarantee up to ₹10Cr",
    badges: ["Guarantee Scheme", "Collateral-free"],
    rate: "95%",
    time: "15-20 days",
    category: "guarantee",
    popular: true,
  },
  {
    title: "Startup India Seed Fund",
    subtitle: "Up to ₹50L seed funding",
    badges: ["Startup Fund", "Seed Capital"],
    rate: "87%",
    time: "30-45 days",
    category: "startup",
    popular: true,
  },
  {
    title: "PMEGP",
    subtitle: "₹50L (Mfg) + ₹20L (Service)",
    badges: ["Subsidy Program", "New Ventures"],
    rate: "92%",
    time: "30-45 days",
    category: "subsidy",
  },
  {
    title: "Stand Up India",
    subtitle: "₹10L to ₹1Cr loans",
    badges: ["Women Entrepreneurs", "SC/ST Support"],
    rate: "88%",
    time: "25-35 days",
    category: "micro",
  },
  {
    title: "ECLGS",
    subtitle: "Up to 20% of outstanding credit",
    badges: ["Emergency Credit", "COVID Relief"],
    rate: "94%",
    time: "10-15 days",
    category: "emergency",
  },
];

export default function FundingOptions() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? schemeData
      : schemeData.filter((item) => item.category === active);

  return (
    <section className="py-24 px-4 md:px-10 lg:px-20 text-center bg-white dark:bg-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Funding Options</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        Choose from India's leading MSME schemes—fast approvals, expert support &
        minimal paperwork
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`px-5 py-3 rounded-full text-sm font-semibold transition-all border
              ${
                active === c.key
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="p-6 relative rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all bg-white dark:bg-neutral-900"
          >
            {item.popular && (
              <span className="absolute top-3 right-3 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                ⭐ Popular
              </span>
            )}

            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{item.subtitle}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {item.badges.map((b, i) => (
                <span
                  key={i}
                  className="text-xs border border-blue-300/40 text-blue-500 dark:text-blue-300 px-2 py-1 rounded-lg"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mb-6 flex justify-between text-left">
              <div>
                <p className="text-xs text-gray-400">Success Rate</p>
                <p className="font-bold text-green-500">{item.rate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Processing Time</p>
                <p className="font-bold text-purple-500">{item.time}</p>
              </div>
            </div>

            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="mt-12 mx-auto px-10 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-semibold transition-all">
        Explore All Government Schemes
      </button>
    </section>
  );
}
