"use client";

import { PhoneCall, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    funding: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <section className="bg-white py-24 px-4 md:px-10 lg:px-20 text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Ready to Transform Your Business?
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Left Form */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm">
          <h3 className="text-left text-lg font-semibold text-gray-800 mb-6">
            Start Your Funding Journey
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="Your Name *"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm outline-blue-500"
            />
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              placeholder="Phone Number *"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm outline-blue-500"
            />
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="Email Address *"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm outline-blue-500"
            />
            <input
              type="text"
              name="funding"
              required
              onChange={handleChange}
              placeholder="Funding Requirement *"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm outline-blue-500"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition">
              Submit Application
            </button>
          </form>
        </div>

        {/* WhatsApp & Call Options */}
        <div className="space-y-6">

          {/* WhatsApp */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                <MessageCircle className="text-white w-5 h-5" />
              </div>
              <h4 className="font-semibold text-gray-800">
                WhatsApp Support
              </h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Get instant support via WhatsApp. Available 9 AM – 8 PM.
            </p>
            <a
              href="https://wa.me/919157142857"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-5 rounded-lg shadow transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Call */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <PhoneCall className="text-white w-5 h-5" />
              </div>
              <h4 className="font-semibold text-gray-800">
                Call Us Directly
              </h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Speak with a funding expert. Mon–Sat, 9 AM – 6 PM.
            </p>
            <a
              href="tel:+919157142857"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-5 rounded-lg shadow transition"
            >
              +91 9157142857
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
