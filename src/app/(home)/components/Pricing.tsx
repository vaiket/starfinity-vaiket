"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function MSMEImpactSection() {
  const stats = [
    { value: "477K+", label: "MSMEs Registered", sub: "On Udyam Portal" },
    { value: "₹500Cr+", label: "Credit Facilitated", sub: "Since 2020" },
    { value: "95%", label: "Success Rate", sub: "Approval Rate" },
    { value: "28/36", label: "Pan India Coverage", sub: "States & UTs" },
  ];

  const topStates = [
    { rank: 1, name: "Maharashtra", count: "82L+" },
    { rank: 2, name: "Tamil Nadu", count: "49L+" },
    { rank: 3, name: "Gujarat", count: "41L+" },
    { rank: 4, name: "Uttar Pradesh", count: "39L+" },
    { rank: 5, name: "Karnataka", count: "34L+" },
    { rank: 6, name: "West Bengal", count: "25L+" },
    { rank: 7, name: "Rajasthan", count: "22L+" },
  ];

  return (
    <section className="py-24 px-4 md:px-10 lg:px-20 bg-gray-50">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Driving MSME Success Across India
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          4.77 crore MSMEs registered on Udyam portal, transforming India's economic landscape
        </p>
      </div>

      {/* Top Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border border-gray-100 p-8 rounded-2xl text-center hover:shadow-xl transition"
          >
            <h3 className="text-3xl font-extrabold text-blue-600">{stat.value}</h3>
            <p className="font-semibold mt-2">{stat.label}</p>
            <p className="text-gray-500 text-sm">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Card Section (Map + State List) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left - Map */}
        <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-2xl">
          <h3 className="text-xl font-bold mb-6">Pan-India Presence</h3>

          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="https://www.startfinitynavigator.com/state-wise-tech-startups.webp"
              alt="Pan India Startup Presence"
              fill
              className="object-contain"
            />
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
              High Density States
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
              Emerging States
            </div>
          </div>
        </div>

        {/* Right - Top States List */}
        <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-2xl">
          <h3 className="text-xl font-bold mb-6">Top MSME States</h3>

          <div className="space-y-3">
            {topStates.map((item) => (
              <div
                key={item.rank}
                className="flex justify-between items-center bg-gray-50 rounded-xl p-4 shadow-sm hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="min-w-[32px] h-[32px] text-blue-600 bg-blue-100 font-bold flex items-center justify-center rounded-lg">
                    {item.rank}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="text-blue-600 font-semibold flex items-center gap-1">
                  {item.count}
                  <ChevronRight size={18} strokeWidth={1.7} />
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
