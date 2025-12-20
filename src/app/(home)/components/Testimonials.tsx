"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Rocket,
  HandCoins,
  TrendingUp,
  AlertTriangle,
  HeartHandshake,
  Shield,
  Clock,
  Zap,
  DollarSign,
  Users,
  ChevronRight,
  Sparkles,
  Target,
  Building2,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const categories = [
  { 
    key: "all", 
    label: "All Schemes", 
    icon: <BadgeCheck className="w-4 h-4" />,
    count: "50+",
    color: "bg-gradient-to-r from-[#414288] to-[#414288]/80"
  },
  { 
    key: "micro", 
    label: "Micro Credit", 
    icon: <HandCoins className="w-4 h-4" />,
    count: "12",
    color: "bg-gradient-to-r from-[#B0DB43] to-[#B0DB43]/80"
  },
  { 
    key: "guarantee", 
    label: "Guarantee Schemes", 
    icon: <Shield className="w-4 h-4" />,
    count: "8",
    color: "bg-gradient-to-r from-[#414288] to-[#414288]/80"
  },
  { 
    key: "subsidy", 
    label: "Subsidy Programs", 
    icon: <DollarSign className="w-4 h-4" />,
    count: "15",
    color: "bg-gradient-to-r from-[#B0DB43] to-[#B0DB43]/80"
  },
  { 
    key: "startup", 
    label: "Startup Funds", 
    icon: <Rocket className="w-4 h-4" />,
    count: "10",
    color: "bg-gradient-to-r from-[#414288] to-[#414288]/80"
  },
  { 
    key: "emergency", 
    label: "Emergency Credit", 
    icon: <AlertTriangle className="w-4 h-4" />,
    count: "5",
    color: "bg-gradient-to-r from-[#B0DB43] to-[#B0DB43]/80"
  },
];

const schemeData = [
  {
    title: "Pradhan Mantri Mudra Yojana",
    subtitle: "Micro loans for small businesses",
    description: "Collateral-free loans up to ₹10L for micro enterprises",
    badges: ["Collateral-free", "Micro Credit", "Women-owned"],
    rate: "98%",
    time: "7-10 days",
    amount: "₹50K - ₹10L",
    category: "micro",
    popular: true,
    icon: <Users className="w-6 h-6" />,
    beneficiaries: "3.5Cr+",
    features: ["No collateral", "Minimal documentation", "Digital process"]
  },
  {
    title: "CGTMSE Credit Guarantee",
    subtitle: "Collateral-free business loans",
    description: "Government guarantee for loans up to ₹10Cr",
    badges: ["Guarantee Scheme", "Collateral-free", "MSME"],
    rate: "95%",
    time: "15-20 days",
    amount: "Up to ₹10Cr",
    category: "guarantee",
    popular: true,
    icon: <Shield className="w-6 h-6" />,
    beneficiaries: "50L+",
    features: ["75% guarantee", "All sectors", "Quick approval"]
  },
  {
    title: "Startup India Seed Fund",
    subtitle: "Early-stage startup funding",
    description: "Seed funding for innovative startups",
    badges: ["Startup Fund", "Seed Capital", "Innovation"],
    rate: "87%",
    time: "30-45 days",
    amount: "Up to ₹50L",
    category: "startup",
    popular: true,
    icon: <Rocket className="w-6 h-6" />,
    beneficiaries: "15K+",
    features: ["Equity-free", "Mentorship", "Networking"]
  },
  {
    title: "PMEGP Scheme",
    subtitle: "Subsidy for new ventures",
    description: "Capital subsidy for manufacturing & service units",
    badges: ["Subsidy Program", "New Ventures", "25-35% Subsidy"],
    rate: "99%",
    time: "30-45 days",
    amount: "₹50L (Mfg) / ₹20L (Service)",
    category: "subsidy",
    icon: <Building2 className="w-6 h-6" />,
    beneficiaries: "8L+",
    features: ["Up to 35% subsidy", "Rural focus", "Bank partnership"]
  },
  {
    title: "Stand Up India",
    subtitle: "Empowering women & SC/ST entrepreneurs",
    description: "Bank loans for women and SC/ST entrepreneurs",
    badges: ["Women Entrepreneurs", "SC/ST Support", "Inclusive"],
    rate: "88%",
    time: "25-35 days",
    amount: "₹10L to ₹1Cr",
    category: "micro",
    icon: <TrendingUp className="w-6 h-6" />,
    beneficiaries: "1.5L+",
    features: ["Green channel", "Handholding", "Margin money"]
  },
  {
    title: "ECLGS 4.0",
    subtitle: "Emergency credit for businesses",
    description: "Additional working capital during emergencies",
    badges: ["Emergency Credit", "COVID Relief", "Working Capital"],
    rate: "94%",
    time: "10-15 days",
    amount: "Up to 20% of credit",
    category: "emergency",
    icon: <AlertTriangle className="w-6 h-6" />,
    beneficiaries: "1.2Cr+",
    features: ["Quick disbursal", "No fresh collateral", "Low interest"]
  },
  {
    title: "PSU Vendor Finance",
    subtitle: "Funding for PSU vendors",
    description: "Working capital for PSU vendors & suppliers",
    badges: ["PSU Vendors", "Supply Chain", "Large Orders"],
    rate: "90%",
    time: "20-30 days",
    amount: "₹50L - ₹5Cr",
    category: "all",
    icon: <Target className="w-6 h-6" />,
    beneficiaries: "25K+",
    features: ["Order-based", "Quick turnaround", "PSU backing"]
  },
  {
    title: "RBI SIDBI Refinance",
    subtitle: "Refinance for existing loans",
    description: "Lower interest rates through refinancing",
    badges: ["Refinance", "Lower Interest", "Existing Loans"],
    rate: "85%",
    time: "15-25 days",
    amount: "₹25L - ₹10Cr",
    category: "all",
    icon: <DollarSign className="w-6 h-6" />,
    beneficiaries: "35K+",
    features: ["Lower EMI", "Longer tenure", "Balance transfer"]
  },
  {
    title: "Export Promotion",
    subtitle: "Funding for export businesses",
    description: "Pre & post shipment export finance",
    badges: ["Export Finance", "International", "Duty Credit"],
    rate: "89%",
    time: "20-35 days",
    amount: "₹25L - ₹25Cr",
    category: "all",
    icon: <Zap className="w-6 h-6" />,
    beneficiaries: "12K+",
    features: ["Export incentives", "Forex support", "Buyer credit"]
  },
];

export default function FundingOptions() {
  const [active, setActive] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filtered = active === "all" 
    ? schemeData 
    : schemeData.filter((item) => item.category === active);

  const getSchemeIcon = (category: string) => {
    switch(category) {
      case "micro": return <HandCoins className="w-5 h-5" />;
      case "guarantee": return <Shield className="w-5 h-5" />;
      case "subsidy": return <DollarSign className="w-5 h-5" />;
      case "startup": return <Rocket className="w-5 h-5" />;
      case "emergency": return <AlertTriangle className="w-5 h-5" />;
      default: return <BadgeCheck className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#414288]/10 text-[#414288] px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Government Schemes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Funding Path
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Access 50+ verified government schemes with expert guidance, fast approvals & minimal paperwork
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`group flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                active === c.key
                  ? `${c.color} text-white shadow-lg scale-105`
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className={active === c.key ? "text-white" : "text-gray-500"}>
                {c.icon}
              </span>
              <span>{c.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                active === c.key 
                  ? "bg-white/20" 
                  : "bg-gray-200 text-gray-600"
              }`}>
                {c.count}
              </span>
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Schemes", value: "50+", color: "bg-[#414288]" },
            { label: "Success Rate", value: "99% Avg", color: "bg-[#B0DB43]" },
            { label: "Avg Processing", value: "21 Days", color: "bg-[#414288]" },
            { label: "Businesses Funded", value: "5L+", color: "bg-[#B0DB43]" },
          ].map((stat, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${stat.color}`}></div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scheme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Star className="w-3 h-3" fill="white" />
                    Popular
                  </div>
                </div>
              )}

              {/* Scheme Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" 
                  style={{ backgroundColor: active === "micro" || active === "emergency" ? '#B0DB43' : '#414288' }}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.subtitle}</p>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border"
                    style={{ 
                      backgroundColor: i % 2 === 0 ? '#414288' : '#B0DB43',
                      color: i % 2 === 0 ? 'white' : '#1a1a1a',
                      borderColor: i % 2 === 0 ? '#414288' : '#B0DB43'
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" style={{ color: '#B0DB43' }} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats & Amount */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-xs text-gray-500">Success Rate</div>
                  <div className="text-lg font-bold" style={{ color: '#B0DB43' }}>{item.rate}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Processing Time</div>
                  <div className="text-lg font-bold" style={{ color: '#414288' }}>{item.time}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Loan Amount</div>
                  <div className="text-lg font-bold text-gray-900">{item.amount}</div>
                </div>
              </div>

              {/* Beneficiaries */}
              <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Beneficiaries</div>
                <div className="font-semibold" style={{ color: '#414288' }}>{item.beneficiaries}</div>
              </div>

              {/* CTA Button */}
              <button className="w-full group flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: hoveredCard === index ? '#B0DB43' : '#414288' }}
              >
                <span>Check Eligibility</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#414288] to-[#B0DB43] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Explore All 50+ Government Schemes</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B0DB43' }}></div>
              <span>Collateral-free options</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#414288' }}></div>
              <span>Government-backed schemes</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B0DB43' }}></div>
              <span>Expert assistance included</span>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#414288]/5 to-transparent border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#414288' }}>
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-900">Quick Processing</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Average 21-day processing time with our expert documentation support
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#B0DB43]/5 to-transparent border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B0DB43' }}>
                  <Shield className="w-5 h-5 text-gray-900" />
                </div>
                <h4 className="font-bold text-gray-900">High Success Rate</h4>
              </div>
              <p className="text-gray-600 text-sm">
                99% average approval rate across all government schemes
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#414288]/5 to-transparent border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#414288' }}>
                  <HeartHandshake className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-900">Expert Guidance</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Dedicated relationship manager for end-to-end application support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}