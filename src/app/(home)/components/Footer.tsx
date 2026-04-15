"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  ChevronUp,
  Home,
  User,
  Briefcase,
  Star,
  DollarSign,
  BarChart3,
  Rocket,
  Target,
  Factory,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Bricolage_Grotesque } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4500);
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // ✅ Footer outer bg = white gradient, text = dark
    <footer className="relative overflow-hidden border-t border-gray-200 text-gray-900" style={{ background:'rgb(255, 255, 255)' }}>
      {/* ❌ Removed blue/teal blur orbs so white bg shows clearly */}

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* ✅ Top CTA banner — blue box kept */}
        <div className="rounded-3xl border border-[#1c2b57] bg-[#051238] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-6 lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#93b2ff]">EAZYGROW VENTURES PRIVATE LIMITED</p>
              <h3 className={`mt-1 text-2xl font-bold text-white ${bricolage.className}`}>Funding support for growing businesses</h3>
              <p className={`mt-2 text-sm text-[#b8c6e8] sm:text-base ${sourceSerif.className}`}>
                Trusted guidance for MSME loans, startup funding, and working capital across India.
              </p>
            </div>
            <a
              href="tel:+917041894751"
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-black  shadow-md transition hover:brightness-110 ${bricolage.className}`}
              style={{ background: 'linear-gradient(90deg, #edf5edff, #e5f5e6ff, #c0c2d1ff)' }}
            >
              <Phone className="h-4 w-4" />
              Speak to an Advisor
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* ✅ Left brand card — blue box kept */}
          <div className="rounded-3xl border border-[#1c2b57] bg-[#051238] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image src="/utp.png" alt="Easygrow" width={150} height={44} className="h-10 w-auto" />
              {/* <div>
                <p className="text-lg font-bold text-white">Easygrow</p>
                <p className="text-sm text-[#9db0d8]">VENTURES PRIVATE LIMITED</p>
              </div> */}
            </div>

            <p className={`mt-4 text-sm leading-relaxed text-[#b8c6e8] ${sourceSerif.className}`}>
              We help founders and business owners get the right funding strategy with clear, practical support.
            </p>

            <div className="mt-5 space-y-2.5 text-sm">
              <a href="tel:+917041894751" className="flex items-start gap-2.5 text-[#d9e7ff] transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 text-[#74a2ff]" />
                +91 7041894751
              </a>
              <a href="mailto:info@easygrow.com" className="flex items-start gap-2.5 text-[#d9e7ff] transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 text-[#74a2ff]" />
                info@easygrow.com
              </a>
              <div className="flex items-start gap-2.5 text-[#d9e7ff]">
                <MapPin className="mt-0.5 h-4 w-4 text-[#74a2ff]" />
                315 Sahitya Arcade, Ahmedabad
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#2a3b6a] bg-[#061742] px-4 py-3 text-sm text-[#c7d6f8]">
              <p className={`font-semibold ${bricolage.className}`}>Registered with MCA</p>
              <p className={`mt-0.5 text-xs text-[#9db0d8] ${sourceSerif.className}`}>CIN: U69202GJ2025PTC171089</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1cQQ6J1Vtz/", label: "Facebook" },
                // { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/eazygrow-ventures-private-limited/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/eazygrowventure?utm_source=qr&igsh=cTNtMnhibnMwbXk3", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b3c69] bg-[#0a1d4a] text-[#c6d6fa] transition hover:border-[#5b83ff] hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* ✅ Quick Links box — blue kept */}
              <div className="rounded-2xl border border-[#1f2f5d] bg-[#041033] p-5">
                <h4 className={`mb-4 text-base font-bold uppercase tracking-[0.08em] text-white ${bricolage.className}`}>Quick Links</h4>
                <ul className={`space-y-2.5 text-sm ${sourceSerif.className}`}>
                  {[
                    { name: "Home", href: "/", icon: <Home className="h-3.5 w-3.5 text-white" /> },
                    { name: "About Us", href: "/about", icon: <User className="h-3.5 w-3.5 text-white" /> },
                    { name: "Services", href: "/services", icon: <Briefcase className="h-3.5 w-3.5 text-white" /> },
                    { name: "Success Stories", href: "/success-stories", icon: <Star className="h-3.5 w-3.5 text-white" /> },
                    { name: "Contact", href: "/contact", icon: <Phone className="h-3.5 w-3.5 text-white" /> },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="flex items-center gap-2 text-[#bdd0f8] transition hover:text-white">
                        {link.icon}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services box — green and blue solid border */}
              <div className="rounded-2xl border-4 border-[ #10b981] p-5 shadow-[0_0_20px_rgba( 16,185,129,0.4)]" style={{ background: 'linear-gradient(135deg, #1a237e 0%, #0d4a4a 50%, #065f46 100%)' }}>
                <h4 className={`mb-4 text-base font-bold uppercase tracking-[0.08em] text-white ${bricolage.className}`}>Our Services</h4>
                <ul className={`space-y-2.5 text-sm text-[#bdd0f8] ${sourceSerif.className}`}>
                  {[
                    { name: "MSME Loans", icon: <DollarSign className="h-3.5 w-3.5 text-white" /> },
                    { name: "Working Capital", icon: <BarChart3 className="h-3.5 w-3.5 text-white" /> },
                    { name: "Startup Funding", icon: <Rocket className="h-3.5 w-3.5 text-white" /> },
                    { name: "Business Grants", icon: <Target className="h-3.5 w-3.5 text-white" /> },
                    { name: "Equipment Finance", icon: <Factory className="h-3.5 w-3.5 text-white" /> },
                    { name: "Project Reports", icon: <FileText className="h-3.5 w-3.5 text-white" /> },
                  ].map((item) => (
                    <li key={item.name} className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Terms & Conditions box - blue kept */}
              <div className="rounded-2xl border border-[#1f2f5d] bg-[#041033] p-5">
                <h4 className={`mb-4 text-base font-bold uppercase tracking-[0.08em] text-white ${bricolage.className}`}>Legal</h4>
                <div className={`space-y-3 text-sm ${sourceSerif.className}`}>
                  <Link href="/privacy-policy" className="flex items-start gap-2.5 text-[#d9e7ff] transition hover:text-white">
                    <FileText className="mt-0.5 h-4 w-4 text-[#74a2ff]" />
                    Privacy Policy
                  </Link>
                  <Link href="/terms-and-conditions" className="flex items-start gap-2.5 text-[#d9e7ff] transition hover:text-white">
                    <FileText className="mt-0.5 h-4 w-4 text-[#74a2ff]" />
                    Terms & Conditions
                  </Link>
                  <Link href="/refund-policy" className="flex items-start gap-2.5 text-[#d9e7ff] transition hover:text-white">
                    <FileText className="mt-0.5 h-4 w-4 text-[#74a2ff]" />
                    Refund Policy
                  </Link>
                </div>

                <div className="mt-5">
                  {isSubscribed ? (
                    <div className="flex items-center gap-2 rounded-lg border border-emerald-300/30 bg-emerald-500/15 px-3 py-2 text-sm text-emerald-200">
                      <CheckCircle className="h-4 w-4" />
                      <span className={sourceSerif.className}>Subscribed successfully.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="space-y-2.5">
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email"
                          className="min-w-0 flex-1 rounded-lg border border-[#2b3f72] bg-[#081c49] px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4e73ff]/30"
                          required
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600 transition hover:bg-gray-100 disabled:opacity-60"
                          aria-label="Subscribe"
                        >
                          {isSubmitting ? (
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600/30 border-t-blue-600" />
                          ) : (
                            <Send className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <p className={`text-xs text-[#9db0d8] ${sourceSerif.className}`}>Get funding insights and updates.</p>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* ✅ Stats row — blue kept */}
            <div className="rounded-2xl border border-[#1f2f5d] bg-[#041033] p-4">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  { name: "Trusted by 20,000+", desc: "Businesses" },
                  { name: "4.8 Rating", desc: "Client Experience" },
                  { name: "RBI-aligned", desc: "Partner Network" },
                  { name: "PAN India", desc: "Coverage" },
                ].map((item) => (
                  <div key={item.name} className="rounded-xl border border-[#2b3f72] bg-[#071945] p-3 text-center">
                    <p className={`text-sm font-semibold text-white ${bricolage.className}`}>{item.name}</p>
                    <p className={`mt-0.5 text-xs text-[#9db0d8] ${sourceSerif.className}`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Bottom bar — white bg, dark text (sits on white footer bg) */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className={`text-sm text-gray-600 ${sourceSerif.className}`}>© {currentYear} EAZYGROW VENTURES PRIVATE LIMITED. All rights reserved.</p>
            <p className={`mt-1 text-xs text-gray-400 ${sourceSerif.className}`}>Registered with MCA | CIN: U69202GJ2025PTC171089</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms & Conditions", href: "/terms-and-conditions" },
              { name: "Refund Policy", href: "/refund-policy" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className={`text-gray-500 transition hover:text-gray-900 ${sourceSerif.className}`}>
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 transition hover:border-gray-400 hover:text-gray-900 ${sourceSerif.className}`}
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" />
            <span className="text-sm font-medium">Top</span>
          </button>
        </div>
      </div>

      {/* WhatsApp button — unchanged */}
      <a
        href="https://wa.me/917041894751"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-40 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.491-8.411" />
        </svg>
      </a>
    </footer>
  );
}