"use client";
import { useState } from "react";
import { MessageCircle, Phone, ArrowRight, CheckCircle, Sparkles, Send, Clock, Users, Zap, Rocket, Shield, Target } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fundingRequirement: ""
  });
  const [activeTab, setActiveTab] = useState("application");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-24 px-4 md:px-10 lg:px-20 overflow-hidden bg-gradient-to-b from-gray-950 to-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10">
            <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Accelerate Your Growth
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            <span className="block text-white">Ready to Transform</span>
            <span className="block mt-2">
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Your Business?
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful entrepreneurs who secured funding with our expert guidance.
          </p>
        </div>

        {/* Tabs for different contact methods */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Application", "WhatsApp", "Call"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3
                ${activeTab === tab.toLowerCase()
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25"
                  : "bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50 border border-gray-800"
                }`}
            >
              {tab === "Application" && <Send className="w-5 h-5" />}
              {tab === "WhatsApp" && <MessageCircle className="w-5 h-5" />}
              {tab === "Call" && <Phone className="w-5 h-5" />}
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-800 rounded-3xl p-10 shadow-2xl">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Start Your Funding Journey</h2>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Get response within 24 hours</span>
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="relative">
                    <Rocket className="w-12 h-12 text-blue-400 animate-bounce-slow" />
                    <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-full"></div>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="py-20 text-center">
                  <div className="relative inline-block mb-8">
                    <CheckCircle className="w-24 h-24 text-green-500" />
                    <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Application Submitted Successfully!</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Our funding expert will review your application and contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { label: "Your Name *", name: "name", type: "text", icon: "👤" },
                      { label: "Phone Number *", name: "phone", type: "tel", icon: "📱" },
                      { label: "Email Address *", name: "email", type: "email", icon: "✉️" },
                      { label: "Funding Requirement *", name: "fundingRequirement", type: "text", icon: "💰" }
                    ].map((field) => (
                      <div key={field.name} className="group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <span className="text-lg">{field.icon}</span>
                          </div>
                          <label className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                            {field.label}
                          </label>
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          required
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-800 rounded-xl
                            text-white placeholder-gray-500 focus:outline-none focus:border-blue-500
                            focus:bg-gray-800/50 transition-all duration-300
                            hover:border-gray-700"
                          placeholder={`Enter ${field.label.toLowerCase().replace("*", "")}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 items-center justify-between pt-8 border-t border-gray-800">
                    <div className="flex items-center gap-4">
                      <Shield className="w-6 h-6 text-green-500" />
                      <span className="text-sm text-gray-400">
                        Your information is 100% secure & confidential
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600
                        text-white font-bold rounded-xl flex items-center justify-center gap-4
                        hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300
                        overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">Submit Application</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Contact Options */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-900/10 border border-emerald-800/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Support</h3>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-300" />
                      <span className="text-emerald-300 font-medium">9 AM - 8 PM</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-sm font-medium text-emerald-300">Live</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-10 leading-relaxed">
                  Get instant responses from our funding experts. Perfect for quick queries and document sharing.
                </p>

                <a
                  href="https://wa.me/919157142857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-emerald-500
                    text-white font-bold rounded-xl flex items-center justify-center gap-3
                    transform hover:-translate-y-1 transition-all duration-300
                    hover:shadow-2xl hover:shadow-emerald-500/25 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <MessageCircle className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Chat on WhatsApp</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            {/* Call Card */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-800/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Direct Call</h3>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-300" />
                      <span className="text-blue-300 font-medium">Mon-Sat: 9 AM - 6 PM</span>
                    </div>
                  </div>
                  <Target className="w-10 h-10 text-blue-400/50" />
                </div>

                <div className="mb-10">
                  <div className="text-3xl font-bold text-white mb-4 tracking-tight">+91 9157142857</div>
                  <p className="text-gray-300 leading-relaxed">
                    Speak directly with our senior funding consultants for personalized guidance.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="tel:+919157142857"
                    className="py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500
                      text-white font-semibold rounded-xl flex items-center justify-center gap-2
                      transform hover:-translate-y-1 transition-all duration-300
                      hover:shadow-xl hover:shadow-blue-500/25 group"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <button className="py-4 px-6 bg-blue-900/30 hover:bg-blue-900/50
                    text-blue-400 font-semibold rounded-xl border border-blue-500/30
                    flex items-center justify-center gap-2 transition-all duration-300
                    hover:border-blue-500/50 hover:text-blue-300 group"
                  >
                    <Clock className="w-5 h-5" />
                    <span>Schedule</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: "Quick Approval", desc: "Fast-track funding approval process" },
            { icon: Shield, title: "Secure Process", desc: "Bank-level security for all data" },
            { icon: Users, title: "Expert Team", desc: "15+ years funding experience" },
            { icon: Rocket, title: "Maximum Funding", desc: "Get the highest possible amount" }
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 
                border border-gray-800 hover:border-blue-500/30 transition-all duration-300
                hover:transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <p className="text-center text-gray-500 mb-8">Trusted by 500+ businesses across India</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">🚀</div>
            <div className="text-2xl font-bold text-gray-400">⭐</div>
            <div className="text-2xl font-bold text-gray-400">🏆</div>
            <div className="text-2xl font-bold text-gray-400">💼</div>
            <div className="text-2xl font-bold text-gray-400">📈</div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}