"use client";

import { useState, useEffect } from "react";
import {
  FileCheck2,
  Landmark,
  ShieldCheck,
  TrendingUp,
  ChevronRight,
  Users,
  Building2,
  Globe,
} from "lucide-react";
import { Bricolage_Grotesque } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const featureItems = [
  { title: "Structured Capital Network", icon: Building2, isCapitalNetwork: true },
  {
    title: "Right Scheme Match",
    description:
      "We don't guess — we strategically match you with the most relevant funding opportunities based on your business stage, goals, and growth potential.",
    icon: Landmark,
  },
  {
    title: "Simple Documentation",
    description:
      "From checklist to submission, we simplify every step so your application is accurate, complete, and ready — without delays.",
    icon: FileCheck2,
  },
  {
    title: "Transparent Process",
    description:
      "No hidden steps. No surprises. Just clear timelines, defined processes, and regular updates — so you're always in control.",
    icon: ShieldCheck,
  },
  {
    title: "Growth-Focused Support",
    description:
      "We go beyond approvals — helping you choose funding paths that actually support long-term scalability and business success.",
    icon: TrendingUp,
  },
];

const stats = [
  { label: "Businesses Assisted", value: "20,000+" },
  { label: "Funding Facilitated", value: "Rs 120 Cr+" },
  { label: "States Covered", value: "28" },
  { label: "Avg First Response", value: "< 2 hrs" },
];

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerView >= featureItems.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featureItems.length - cardsPerView : prev - 1
    );
  };

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 ${bricolage.className}`}>
            Why Ambitious{" "}
            <span className="bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5] bg-clip-text text-transparent">
              business
            </span>{" "}
            Choose EazyGrow
          </h2>

          <p className={`mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600 ${sourceSerif.className}`}>
            Not just consultancy — we deliver clarity, strategy, and real business growth for startups and MSMEs.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-10 relative">
          
          {/* ✅ Added side padding to prevent overlap */}
          <div className="overflow-hidden px-6 sm:px-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
              }}
            >
              {featureItems.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
                  <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                    
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5] text-white">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <h3 className={`mt-4 text-lg font-semibold text-slate-900 ${bricolage.className}`}>
                      {item.title}
                    </h3>

                    {item.isCapitalNetwork ? (
                      <div className={`mt-3 text-sm text-slate-600 ${sourceSerif.className}`}>
                        <div className="flex gap-2 mb-1">
                          <Users className="w-4 h-4 text-green-700 mt-1" />
                          <span>300+ Active Angel Investors</span>
                        </div>
                        <div className="flex gap-2 mb-1">
                          <Building2 className="w-4 h-4 text-green-700 mt-1" />
                          <span>323+ Venture Capital & Institutional Funding Connects</span>
                        </div>
                        <div className="flex gap-2">
                          <Globe className="w-4 h-4 text-green-700 mt-1" />
                          <span>Investor relationships across domestic and international markets</span>
                        </div>
                      </div>
                    ) : (
                      <p className={`mt-2 text-sm text-slate-600 ${sourceSerif.className}`}>
                        {item.description}
                      </p>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Arrows moved slightly OUTSIDE */}
          <button
            onClick={prevSlide}
            className="flex absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white border shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <ChevronRight className="rotate-180 text-[#414288]" />
          </button>

          <button
            onClick={nextSlide}
            className="flex absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white border shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <ChevronRight className="text-[#414288]" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {featureItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex ? "w-6 bg-[#414288]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 rounded-2xl border bg-gradient-to-r from-[#f8faff] to-[#f5faea] p-5 sm:p-7">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#414288]">
                  {item.value}
                </p>
                <p className={`mt-1 text-sm text-slate-600 ${sourceSerif.className}`}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}