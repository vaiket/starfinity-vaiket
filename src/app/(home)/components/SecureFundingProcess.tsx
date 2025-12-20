"use client";

import {
  Clock,
  FileCheck,
  Handshake,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Calendar,
  DollarSign,
  Building2,
  Phone,
  ChevronRight
} from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Quick Application",
    time: "2 mins",
    desc: "Fill our simple online form with basic business details",
    highlight: "No complex paperwork needed",
    icon: CheckCircle2,
    details: ["Basic business info", "Funding requirement", "Contact details"],
    color: "from-[#414288] to-[#414288]/80"
  },
  {
    id: "2",
    title: "Expert Consultation",
    time: "24 hrs",
    desc: "Our funding experts analyze your needs & match best schemes",
    highlight: "Personalized scheme matching",
    icon: Handshake,
    details: ["Free consultation", "Scheme selection", "Eligibility check"],
    color: "from-[#B0DB43] to-[#B0DB43]/80"
  },
  {
    id: "3",
    title: "Documentation",
    time: "3-5 days",
    desc: "We prepare and submit all required documents on your behalf",
    highlight: "End-to-end support",
    icon: FileCheck,
    details: ["Document preparation", "Application filing", "Follow-ups"],
    color: "from-[#414288] to-[#414288]/80"
  },
  {
    id: "4",
    title: "Approval & Disbursement",
    time: "7-21 days",
    desc: "Get approved and receive funds directly in your account",
    highlight: "Direct bank transfer",
    icon: ShieldCheck,
    details: ["Approval tracking", "Disbursement", "Post-funding support"],
    color: "from-[#B0DB43] to-[#B0DB43]/80"
  },
];

const benefits = [
  { 
    text: "Fast Approvals", 
    stat: "7-21 Days", 
    icon: <Zap className="w-5 h-5" />,
    color: "bg-[#414288]/10 text-[#414288]"
  },
  { 
    text: "95% Success", 
    stat: "Rate", 
    icon: <TrendingUp className="w-5 h-5" />,
    color: "bg-[#B0DB43]/10 text-gray-900"
  },
  { 
    text: "No Hidden Fees", 
    stat: "Transparent", 
    icon: <DollarSign className="w-5 h-5" />,
    color: "bg-[#414288]/10 text-[#414288]"
  },
  { 
    text: "Expert Support", 
    stat: "24/7", 
    icon: <Users className="w-5 h-5" />,
    color: "bg-[#B0DB43]/10 text-gray-900"
  },
];

const timelineData = [
  { day: "Day 1", activity: "Application & Consultation", status: "Start" },
  { day: "Day 2-5", activity: "Documentation & Submission", status: "Processing" },
  { day: "Day 6-20", activity: "Approval & Verification", status: "Processing" },
  { day: "Day 21", activity: "Funds Disbursed", status: "Complete" },
];

export default function SecureFundingProcess() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#414288]/10 text-[#414288] px-4 py-2 rounded-full mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">4-Step Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Secure Your Funding
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our streamlined 4-step process helps businesses get funded in as little as 7 days
          </p>
        </div>

        {/* Timeline Overview */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-[#414288]/5 via-white to-[#B0DB43]/5 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Process Timeline</h3>
                <p className="text-gray-600 text-sm">Average 7-21 days from application to disbursement</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#B0DB43' }}>
                <Clock className="w-4 h-4" />
                <span>Quick Processing</span>
              </div>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {timelineData.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center border-4 border-white ${
                      item.status === "Start" ? "bg-[#B0DB43]" :
                      item.status === "Complete" ? "bg-[#414288]" : "bg-gray-300"
                    }`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{item.day}</div>
                    <div className="text-xs text-gray-600">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Step Number */}
              <div className="absolute top-4 left-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white bg-gradient-to-r ${step.color}`}>
                  {step.id}
                </div>
              </div>

              {/* Time Badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Clock className="w-3 h-3" />
                  {step.time}
                </div>
              </div>

              {/* Icon */}
              <div className="mt-10 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white bg-gradient-to-r ${step.color}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{step.desc}</p>
                
                {/* Details */}
                <div className="space-y-2 mb-6">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color.includes('414288') ? '#414288' : '#B0DB43' }}></div>
                      <span className="text-xs text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Highlight */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold" style={{ color: step.color.includes('414288') ? '#414288' : '#B0DB43' }}>
                      {step.highlight}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Process</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.color} border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ 
                  backgroundColor: benefit.color.includes('414288') ? '#414288' : '#B0DB43' 
                }}>
                  {benefit.icon}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{benefit.text}</div>
                <div className="text-sm text-gray-600">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Stats */}
        <div className="bg-gradient-to-r from-[#414288]/5 via-white to-[#B0DB43]/5 border border-gray-200 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Average Processing Time", value: "14 Days", color: "text-[#414288]" },
              { label: "Success Rate", value: "95%", color: "text-[#B0DB43]" },
              { label: "Minimum Documentation", value: "50% Less", color: "text-[#414288]" },
              { label: "Businesses Funded", value: "5,000+", color: "text-[#B0DB43]" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#B0DB43]/10 text-gray-900 px-4 py-2 rounded-full mb-6">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">Start Your Funding Journey</span>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Funded?</h3>
            <p className="text-gray-600 mb-8">
              Join 5,000+ businesses that have secured funding through our streamlined process
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#414288' }}
              >
                <span>Start Free Application</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300">
                <Phone className="w-5 h-5" />
                <span>Talk to Expert</span>
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B0DB43' }}></div>
                <span>No upfront fees</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#414288' }}></div>
                <span>100% confidential</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B0DB43' }}></div>
                <span>Dedicated support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#414288]/5 to-transparent border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#414288' }}>
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-900">Flexible Timeline</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Process can be expedited based on document readiness and business profile
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#B0DB43]/5 to-transparent border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B0DB43' }}>
                  <ShieldCheck className="w-5 h-5 text-gray-900" />
                </div>
                <h4 className="font-bold text-gray-900">Secure & Confidential</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Your data is protected with bank-level security and confidentiality
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#414288]/5 to-transparent border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#414288' }}>
                  <Handshake className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-900">Post-Funding Support</h4>
              </div>
              <p className="text-gray-600 text-sm">
                We provide ongoing support for compliance and future funding needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}