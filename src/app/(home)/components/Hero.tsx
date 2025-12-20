"use client";

import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Shield,
  Building2,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  User,
  ArrowRight,
  Target,
  Award,
  Clock,
  Users,
  BarChart3,
  ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    fundingAmount: "500000",
    annualTurnover: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("business");

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert("Thank you for your application! Our team will contact you within 2 hours.");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        fundingAmount: "500000",
        annualTurnover: ""
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const stats = [
    { value: "₹150Cr+", label: "Funds Disbursed", icon: <DollarSign className="w-4 h-4" /> },
    { value: "5,000+", label: "Businesses Funded", icon: <Building2 className="w-4 h-4" /> },
    { value: "92%", label: "Success Rate", icon: <Award className="w-4 h-4" /> },
    { value: "24-48hrs", label: "Fast Processing", icon: <Clock className="w-4 h-4" /> },
  ];

  const businessTypes = [
    "Startup", "Manufacturing", "Services", "Trading", 
    "Retail", "Hospitality", "Healthcare", "Education",
    "Technology", "Agriculture", "Export", "Construction"
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-[#414288] via-[#414288] to-transparent opacity-10" />
        
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2l-10 10V8zm0 4L52 0h2l-14 14v-2zm0 4L56 0h2l-18 18v-2zm0 4L60 0h2l-22 22v-2zm0 4L64 0h2l-26 26v-2zm0 4L68 0h2l-30 30v-2zm0 4L72 0h2l-34 34v-2zm0 4L76 0h2l-38 38v-2zm0 4L80 0v2l-42 42h-2z' fill='%23414288' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-12 pb-20">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#414288]/10 border border-[#414288]/20 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-[#B0DB43] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#414288]">
                Trusted by 5,000+ Businesses Across India
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Get Your Business Funded
                <span className="block mt-2" style={{ color: '#414288' }}>
                  In Just 48 Hours
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Access ₹5L to ₹10Cr through government schemes, bank loans, and institutional funding. 
                <span className="block mt-2 font-medium text-gray-800">
                  Zero Collateral • Minimal Documentation • Expert Guidance
                </span>
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B0DB43' }}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Quick Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Eligibility Check</h3>
              
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-6">
                {[
                  { id: "business", label: "Business Funding", icon: <Building2 className="w-4 h-4" /> },
                  { id: "startup", label: "Startup Funding", icon: <Zap className="w-4 h-4" /> },
                  { id: "msme", label: "MSME Loan", icon: <Target className="w-4 h-4" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 font-medium text-sm border-b-2 transition-all ${
                      activeTab === tab.id
                        ? 'border-[#414288] text-[#414288]'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Assessment Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Turnover
                    </label>
                    <select
                      name="annualTurnover"
                      value={formData.annualTurnover}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#414288] focus:outline-none transition-colors text-gray-900"
                    >
                      <option value="">Select Range</option>
                      <option value="0-10">Below ₹10L</option>
                      <option value="10-50">₹10L - ₹50L</option>
                      <option value="50-100">₹50L - ₹1Cr</option>
                      <option value="100-500">₹1Cr - ₹5Cr</option>
                      <option value="500+">Above ₹5Cr</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Age
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#414288] focus:outline-none transition-colors text-gray-900">
                      <option value="">Select Range</option>
                      <option value="0-1">0-1 Year</option>
                      <option value="1-3">1-3 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5-10">5-10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Amount Required: ₹{(parseInt(formData.fundingAmount) / 100000).toFixed(1)}L
                  </label>
                  <input
                    type="range"
                    name="fundingAmount"
                    value={formData.fundingAmount}
                    onChange={handleInputChange}
                    min="500000"
                    max="100000000"
                    step="500000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full"
                    style={{ '--thumb-color': '#B0DB43' } as any}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>₹5L</span>
                    <span>₹10Cr</span>
                  </div>
                </div>

                <button 
                  onClick={() => document.getElementById('full-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3.5 px-6 rounded-lg font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#414288' }}
                >
                  <span>Check Eligibility Score</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#B0DB43] to-[#414288]"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Trusted by 5,000+</div>
                  <div className="text-xs text-gray-600">4.8 ★ Rating</div>
                </div>
              </div>

              <div className="h-6 w-px bg-gray-300" />

              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" style={{ color: '#B0DB43' }} />
                <span className="text-sm text-gray-700">100% Confidential & Secure</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Application Form */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="lg:col-span-5"
            id="full-form"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Form header */}
              <div className="p-6 text-white" style={{ backgroundColor: '#414288' }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Apply for Funding</h3>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">24-48 Hours</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Complete this form to get matched with the best funding options
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#414288] focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#414288] focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#414288] focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <div className="relative">
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#414288] focus:outline-none transition-colors text-gray-900 appearance-none"
                    >
                      <option value="">Select Business Type</option>
                      {businessTypes.map(type => (
                        <option key={type} value={type.toLowerCase()}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Amount Required
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</div>
                    <input
                      type="number"
                      name="fundingAmount"
                      value={formData.fundingAmount}
                      onChange={handleInputChange}
                      required
                      min="500000"
                      max="100000000"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#414288] focus:outline-none transition-colors text-gray-900"
                      placeholder="500000"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                      {(parseInt(formData.fundingAmount) >= 10000000) ? 'Cr' : 'L'}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#B0DB43' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <span>Get Free Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    By submitting, you agree to our Terms & Privacy Policy. 
                    <span className="block mt-1 font-medium" style={{ color: '#414288' }}>
                      Our expert will call you within 2 hours
                    </span>
                  </p>
                </div>
              </form>

              {/* Funding Options */}
              <div className="border-t border-gray-100 bg-gray-50 p-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Popular Funding Options</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Startup India", amount: "Up to ₹50L", color: "bg-blue-50 text-blue-700" },
                    { name: "MSME Loan", amount: "₹10L-₹5Cr", color: "bg-green-50 text-green-700" },
                    { name: "Working Capital", amount: "₹1L-₹10Cr", color: "bg-purple-50 text-purple-700" },
                    { name: "Equipment Loan", amount: "₹5L-₹2Cr", color: "bg-amber-50 text-amber-700" },
                  ].map((option, index) => (
                    <div key={index} className={`${option.color} p-3 rounded-lg border border-gray-200`}>
                      <div className="text-sm font-medium">{option.name}</div>
                      <div className="text-xs mt-1">{option.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B0DB43' }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Need Immediate Help?</h4>
                  <p className="text-gray-600 text-sm mt-1">Call our funding experts 24/7</p>
                  <a 
                    href="tel:+919157142657" 
                    className="inline-block mt-3 text-xl font-bold" 
                    style={{ color: '#414288' }}
                  >
                    +91 9157142657
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-12 border-t border-gray-200"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Businesses Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We simplify the funding process with expert guidance and personalized solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Higher Success Rate",
                description: "92% approval rate with our expert documentation",
                icon: <BarChart3 className="w-6 h-6" />,
                color: "bg-[#414288]"
              },
              {
                title: "Fast Processing",
                description: "Funds disbursed within 24-48 hours of approval",
                icon: <Clock className="w-6 h-6" />,
                color: "bg-[#B0DB43]"
              },
              {
                title: "Zero Collateral",
                description: "Access funding without pledging assets",
                icon: <Shield className="w-6 h-6" />,
                color: "bg-[#414288]"
              },
              {
                title: "5,000+ Success Stories",
                description: "Join our community of funded businesses",
                icon: <Users className="w-6 h-6" />,
                color: "bg-[#B0DB43]"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white ${feature.color}`}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-medium">Scroll for details</span>
          <div className="w-5 h-8 border border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: '#B0DB43' }} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}