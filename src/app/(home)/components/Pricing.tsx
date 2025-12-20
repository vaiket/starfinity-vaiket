"use client";

import Image from "next/image";
import { ChevronRight, MapPin, TrendingUp, Building2, Target, Globe, Award, Users } from "lucide-react";

export default function MSMEImpactSection() {
  const stats = [
    { 
      value: "4.77Cr+", 
      label: "MSMEs Registered", 
      sub: "On Udyam Portal",
      icon: <Building2 className="w-5 h-5" />,
      bgColor: "bg-[#414288]/10"
    },
    { 
      value: "₹500Cr+", 
      label: "Credit Facilitated", 
      sub: "Since 2020",
      icon: <TrendingUp className="w-5 h-5" />,
      bgColor: "bg-[#B0DB43]/10"
    },
    { 
      value: "95%", 
      label: "Success Rate", 
      sub: "Approval Rate",
      icon: <Award className="w-5 h-5" />,
      bgColor: "bg-[#414288]/10"
    },
    { 
      value: "28/36", 
      label: "Pan India Coverage", 
      sub: "States & UTs",
      icon: <Globe className="w-5 h-5" />,
      bgColor: "bg-[#B0DB43]/10"
    },
  ];

  const topStates = [
    { rank: 1, name: "Maharashtra", count: "82L+", growth: "12%" },
    { rank: 2, name: "Tamil Nadu", count: "49L+", growth: "15%" },
    { rank: 3, name: "Gujarat", count: "41L+", growth: "18%" },
    { rank: 4, name: "Uttar Pradesh", count: "39L+", growth: "14%" },
    { rank: 5, name: "Karnataka", count: "34L+", growth: "20%" },
    { rank: 6, name: "West Bengal", count: "25L+", growth: "11%" },
    { rank: 7, name: "Rajasthan", count: "22L+", growth: "16%" },
  ];

  const sectors = [
    { name: "Manufacturing", percentage: "32%", color: "bg-[#414288]" },
    { name: "Services", percentage: "45%", color: "bg-[#B0DB43]" },
    { name: "Trading", percentage: "18%", color: "bg-[#414288]/70" },
    { name: "Agri-Business", percentage: "5%", color: "bg-[#B0DB43]/70" },
  ];

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#414288]/10 text-[#414288] px-4 py-2 rounded-full mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Impact Report</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Empowering India's MSME Growth Story
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            4.77 crore MSMEs driving India's economic transformation, with our support across 28 states
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  stat.bgColor.includes('414288') ? 'bg-[#414288]' : 'bg-[#B0DB43]'
                } text-white`}>
                  {stat.icon}
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium text-gray-500">India Rank #{index + 1}</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Map and Info */}
          <div className="space-y-8">
            {/* Map Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5" style={{ color: '#414288' }} />
                    Pan-India Presence
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">28 states & 8 union territories covered</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#414288' }}>
                  <Users className="w-4 h-4" />
                  <span>Active in 36 regions</span>
                </div>
              </div>

              {/* Map Container */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                {/* Simple Map Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* India Outline */}
                    <div className="absolute inset-4 border-2 border-gray-300 rounded-xl"></div>
                    
                    {/* State Markers */}
                    {[
                      { top: "30%", left: "25%", size: "w-8 h-8", color: "bg-[#414288]" },
                      { top: "45%", left: "40%", size: "w-6 h-6", color: "bg-[#B0DB43]" },
                      { top: "35%", left: "50%", size: "w-8 h-8", color: "bg-[#414288]" },
                      { top: "60%", left: "35%", size: "w-7 h-7", color: "bg-[#B0DB43]" },
                      { top: "50%", left: "60%", size: "w-6 h-6", color: "bg-[#414288]" },
                      { top: "70%", left: "45%", size: "w-5 h-5", color: "bg-[#B0DB43]" },
                    ].map((marker, i) => (
                      <div
                        key={i}
                        className={`absolute ${marker.size} ${marker.color} rounded-full border-2 border-white shadow-lg`}
                        style={{ top: marker.top, left: marker.left }}
                      />
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#414288]"></div>
                      <span className="text-xs font-medium text-gray-700">High Density (10L+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#B0DB43]"></div>
                      <span className="text-xs font-medium text-gray-700">Emerging (1-10L)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sector Distribution */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Sector Distribution</h3>
              <div className="space-y-4">
                {sectors.map((sector, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-800">{sector.name}</span>
                      <span className="font-semibold text-gray-900">{sector.percentage}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${sector.color}`}
                        style={{ width: sector.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Top States List */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Top Performing States</h3>
                  <p className="text-gray-600 text-sm mt-1">Based on MSME registrations & growth</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full bg-[#414288]/10 text-[#414288]">
                  <TrendingUp className="w-4 h-4" />
                  <span>YoY Growth</span>
                </div>
              </div>

              <div className="space-y-4">
                {topStates.map((state) => (
                  <div
                    key={state.rank}
                    className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                        state.rank <= 3 
                          ? 'bg-[#414288] text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {state.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-[#414288] transition-colors">
                          {state.name}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="text-xs px-2 py-1 rounded-full" style={{ 
                            backgroundColor: state.growth > '15%' ? '#B0DB43' : '#414288',
                            color: state.growth > '15%' ? '#1a1a1a' : 'white'
                          }}>
                            {state.growth} growth
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-bold text-gray-900 text-lg">{state.count}</div>
                        <div className="text-xs text-gray-600">MSMEs</div>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#414288] group-hover:text-white transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
                  style={{ backgroundColor: '#414288' }}
                >
                  <span>View Complete State-wise Report</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#414288] to-[#414288]/80 text-white rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">₹1.5L Cr</div>
                <div className="text-sm opacity-90">Annual MSME Credit Target</div>
              </div>
              <div className="bg-gradient-to-br from-[#B0DB43] to-[#B0DB43]/80 text-gray-900 rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">1.2M+</div>
                <div className="text-sm opacity-90">Jobs Created Annually</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#414288]/5 via-white to-[#B0DB43]/5 border border-gray-200 rounded-2xl p-6 text-center">
              <h4 className="font-bold text-gray-900 mb-3">Ready to Join India's MSME Revolution?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Get expert guidance on registration, funding, and growth strategies
              </p>
              <button className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#B0DB43' }}
              >
                Start Your MSME Journey
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Additional Insights</h3>
            <p className="text-gray-600">Key metrics driving India's MSME growth</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Women-led MSMEs", value: "18%", change: "+5%" },
              { label: "Digital Adoption", value: "65%", change: "+22%" },
              { label: "Export Contribution", value: "45%", change: "+8%" },
              { label: "Rural MSMEs", value: "52%", change: "+12%" },
            ].map((insight, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">{insight.value}</div>
                <div className="text-sm text-gray-600 mb-3">{insight.label}</div>
                <div className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${
                  index % 2 === 0 ? 'bg-[#414288]/10 text-[#414288]' : 'bg-[#B0DB43]/10 text-gray-900'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  {insight.change} YoY
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}