"use client";

import { Rocket, CheckCircle, Code, Building2 } from "lucide-react";

export default function ImpactAndServices() {
  return (
    <section className="py-24 px-4 md:px-10 lg:px-20 bg-white text-black">
      
      {/* Section Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        Our Impact
      </h2>

      {/* Impact Box */}
      <div className="max-w-6xl mx-auto bg-blue-600 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-lg">
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-3">
            ₹120 Crore+
          </h3>
          <p className="text-sm md:text-base opacity-90">
            Facilitated in MSME funding through strategic partnerships
          </p>
        </div>

        <div className="w-[1px] bg-white/30 h-16 hidden md:block"></div>

        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-3">
            20,000+
          </h3>
          <p className="text-sm md:text-base opacity-90">
            Businesses trusted us across India
          </p>
        </div>
      </div>

      {/* Core Services */}
      <h2 className="text-center mt-24 text-3xl md:text-4xl font-bold mb-4">
        Our Core Services
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-sm md:text-base">
        Comprehensive business solutions designed to accelerate your growth
      </p>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Card 1 */}
        <div className="bg-blue-50 rounded-2xl p-8 shadow border border-blue-100 hover:shadow-xl transition cursor-pointer text-center">
          <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
            <Rocket size={28} />
          </div>
          <h3 className="font-bold text-lg mb-3">Financial Services</h3>
          <p className="text-gray-600 text-sm mb-6">
            Business loans, government schemes, and financial advisory services
          </p>
          <button className="text-blue-600 font-semibold flex items-center justify-center gap-2 mx-auto">
            Explore Services →
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-50 rounded-2xl p-8 shadow border border-blue-100 hover:shadow-xl transition cursor-pointer text-center">
          <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={28} />
          </div>
          <h3 className="font-bold text-lg mb-3">Legal & Compliance</h3>
          <p className="text-gray-600 text-sm mb-6">
            Company registration, GST certificates, and ongoing compliance management
          </p>
          <button className="text-blue-600 font-semibold flex items-center justify-center gap-2 mx-auto">
            Get Started →
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-green-50 rounded-2xl p-8 shadow border border-green-100 hover:shadow-xl transition cursor-pointer text-center">
          <div className="w-14 h-14 rounded-xl bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
            <Building2 size={28} />
          </div>
          <h3 className="font-bold text-lg mb-3">Business Setup</h3>
          <p className="text-gray-600 text-sm mb-6">
            Complete business registration and licensing solutions for all entity types
          </p>
          <button className="text-green-600 font-semibold flex items-center justify-center gap-2 mx-auto">
            Start Setup →
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-purple-50 rounded-2xl p-8 shadow border border-purple-100 hover:shadow-xl transition cursor-pointer text-center">
          <div className="w-14 h-14 rounded-xl bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">
            <Code size={28} />
          </div>
          <h3 className="font-bold text-lg mb-3">Digital Solutions</h3>
          <p className="text-gray-600 text-sm mb-6">
            Custom software development, websites, and mobile applications
          </p>
          <button className="text-purple-600 font-semibold flex items-center justify-center gap-2 mx-auto">
            Start Project →
          </button>
        </div>

      </div>
    </section>
  );
}
