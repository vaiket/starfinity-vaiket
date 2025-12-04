"use client";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-300 pt-20 pb-8 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-40 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-40 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 mb-12 border-b border-gray-800">
          {/* Left Column - Brand & Social */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Startfinity Logo"
                  width={140}
                  height={60}
                  className="brightness-110 contrast-125"
                />
                <div className="absolute -inset-2 bg-blue-500/10 blur-xl rounded-lg"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Startfinity
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-lg text-base">
              Empowering entrepreneurs with seamless access to funding,
              expert guidance, and innovative business solutions. 
              <span className="block mt-2 text-blue-300/80 font-medium">
                Your journey to success starts here.
              </span>
            </p>

            {/* Social Icons with modern design */}
            <div className="space-y-4">
              <p className="text-white font-medium">Connect With Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook", color: "bg-blue-600 hover:bg-blue-500" },
                  { icon: Twitter, label: "Twitter", color: "bg-sky-500 hover:bg-sky-400" },
                  { icon: Linkedin, label: "LinkedIn", color: "bg-blue-700 hover:bg-blue-600" },
                  { icon: Instagram, label: "Instagram", color: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500" }
                ].map((social) => (
                  <Link
                    key={social.label}
                    href="#"
                    className={`
                      ${social.color}
                      w-12 h-12 rounded-xl flex items-center justify-center
                      transition-all duration-300 transform hover:-translate-y-1
                      shadow-lg hover:shadow-xl
                    `}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {["Home", "About Us", "Blogs", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 group text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
                Our Services
              </h3>
              <ul className="space-y-3">
                {["Grants", "Loans", "NBFC Solutions", "Business Registration", "Certifications & IP"].map((service) => (
                  <li key={service}>
                    <div className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span>{service}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consultancy */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
                Consultancy
              </h3>
              <ul className="space-y-3">
                {["M&A Advisory", "Marketing & Branding", "Legal Consultancy", "Growth Strategy"].map((item) => (
                  <li key={item}>
                    <div className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span>{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Phone,
              title: "Phone",
              content: "+91 9157142657",
              gradient: "from-blue-500/10 to-blue-600/10",
              border: "border-blue-500/20"
            },
            {
              icon: Mail,
              title: "Email",
              content: "info@startfinitynavigator.com",
              gradient: "from-purple-500/10 to-purple-600/10",
              border: "border-purple-500/20"
            },
            {
              icon: MapPin,
              title: "Address",
              content: "315 Sahitya Arcade, near Shalby Hospitals, Vasant Vihar 2, Nava Naroda, Ahmedabad, Gujarat 382330",
              gradient: "from-emerald-500/10 to-emerald-600/10",
              border: "border-emerald-500/20"
            }
          ].map((contact) => (
            <div
              key={contact.title}
              className={`
                bg-gradient-to-br ${contact.gradient} backdrop-blur-sm
                border ${contact.border} rounded-2xl p-6
                hover:transform hover:-translate-y-1 transition-all duration-300
                hover:shadow-xl
              `}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{contact.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{contact.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} STARTFINITY Financial Services. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Empowering dreams, enabling growth.
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy", "Sitemap"].map((policy) => (
              <Link
                key={policy}
                href={`/${policy.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-400 hover:text-white text-sm transition-colors
                  relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px]
                  after:bg-gradient-to-r after:from-blue-400 after:to-purple-400
                  hover:after:w-full after:transition-all after:duration-300"
              >
                {policy}
              </Link>
            ))}
          </div>
        </div>

        {/* Back to top button for mobile */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-6 md:right-8 z-50 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600
            rounded-xl flex items-center justify-center shadow-2xl hover:shadow-blue-500/25
            transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowRight className="w-5 h-5 text-white rotate-270" />
        </button>
      </div>
    </footer>
  );
}