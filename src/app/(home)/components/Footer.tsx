"use client";

import Image from "next/image";
import { Facebook, Linkedin, Instagram, Mail, Phone, ChevronUp } from "lucide-react";
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Footer outer bg = white gradient, text = dark
    <footer className="relative overflow-hidden border-t border-gray-200 text-gray-900" style={{ background:'rgb(255, 255, 255)' }}>
      {/* Removed blue/teal blur orbs so white bg shows clearly */}

      <div className="relative mx-auto max-w-7xl px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-6 lg:px-8 lg:py-14">
        {/* Top CTA banner — blue box kept */}
        <div className="rounded-lg border border-[#1c2b57] bg-[#051238] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:rounded-xl sm:p-3 md:rounded-2xl lg:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[9px] font-semibold tracking-wide text-[#93b2ff] sm:text-[10px]">EAZYGROW VENTURES</p>
              <h3 className={`mt-1 text-sm font-bold text-white ${bricolage.className} sm:text-base md:text-lg lg:text-2xl`}>Funding support for growing businesses</h3>
              <p className={`mt-1 text-[9px] text-[#b8c6e8] leading-snug sm:text-[14px] ${sourceSerif.className}`}>
               &quot;Trusted guidance for MSME loans, startup funding, and growth advisory across India&quot;
              </p>
            </div>
            <a
              href="tel:+917041894751"
              className={`inline-flex items-center justify-center gap-1 rounded-md px-2 py-1.5 text-[10px] font-semibold text-black shadow-md transition hover:brightness-110 w-full sm:rounded-lg sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs sm:w-auto ${bricolage.className}`}
              style={{ background: 'linear-gradient(90deg, #edf5edff, #e5f5e6ff, #c0c2d1ff)' }}
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Speak to Advisor
            </a>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:mt-3 sm:gap-3 md:mt-6 md:gap-5 lg:gap-6 lg:grid-cols-12">
          {/* Left brand card — blue box kept */}
          <div className="rounded-lg border border-[#1c2b57] bg-[#051238] p-2 shadow-[0_10px_30px rgba(0,0,0,0.3)] sm:rounded-xl sm:p-3 md:rounded-2xl lg:col-span-4 lg:p-6">
            <div className="flex items-center gap-2">
              <Image src="/utp.png" alt="EazyGrow" width={150} height={44} className="h-6 w-auto sm:h-7 md:h-10" />
              {/* <div>
                <p className="text-lg font-bold text-white">EazyGrow</p>
                <p className="text-sm text-[#9db0d8]">VENTURES PRIVATE LIMITED</p>
              </div> */}
            </div>

            <p className={`mt-2 text-[10px] leading-relaxed text-[#b8c6e8] sm:mt-3 sm:text-xs md:text-sm ${sourceSerif.className}`}>
              We help founders and business owners get the right funding strategy with clear, practical support.
            </p>

            <div className="mt-2 space-y-1.5 text-[10px] sm:mt-3 sm:space-y-2 sm:text-xs md:mt-5">
              <a href="tel:+917041894751" className="flex items-start gap-1.5 text-[#d9e7ff] transition hover:text-white sm:gap-2">
                <Phone className="mt-0.5 h-3 w-3 text-[#74a2ff] sm:h-3.5 sm:w-3.5" />
                +91 7041894751
              </a>
              <a href="mailto:info@essygrow.com" className="flex items-start gap-1.5 text-[#d9e7ff] transition hover:text-white sm:gap-2">
                <Mail className="mt-0.5 h-3 w-3 text-[#74a2ff] sm:h-3.5 sm:w-3.5" />
                info@essygrow.com
              </a>
              <div className="flex items-start gap-1.5 text-[#d9e7ff] sm:gap-2">


              </div>
            </div>

            <div className="mt-2 rounded-md border border-[#2a3b6a] bg-[#061742] px-2 py-1.5 text-[10px] text-[#c7d6f8] sm:mt-3 sm:rounded-lg sm:px-3 sm:py-2 sm:text-xs md:mt-5 md:rounded-xl md:px-4 md:py-3 md:text-sm">
              <p className={`font-semibold ${bricolage.className}`}>Registered with MCA</p>
              <p className={`mt-0.5 text-[9px] text-[#9db0d8] ${sourceSerif.className}`}>CIN: U69202GJ2025PTC171089</p>
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 md:mt-5">
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
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#2b3c69] bg-[#0a1d4a] text-[#c6d6fa] transition hover:border-[#5b83ff] hover:text-white sm:h-8 sm:w-8 md:h-9 md:w-9"
                >
                  <social.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer and payment note */}
        <div className="lg:col-span-8 rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-600 sm:p-4 md:p-6">
          <h4 className={`text-xs font-bold uppercase tracking-[0.08em] text-gray-900 sm:text-sm ${bricolage.className}`}>Disclaimer</h4>
          <p className={`mt-2 text-[10px] leading-relaxed sm:text-xs md:text-sm ${sourceSerif.className}`}>
            EAZYGROW VENTURES PRIVATE LIMITED is an independent, private-sector startup advisory and business consulting company. We are not a government body and are not affiliated with, endorsed by, or authorized by the Government of India, the Ministry of Corporate Affairs (MCA), Startup India, or any other government agency or department.
          </p>
          <p className={`mt-2 text-[10px] leading-relaxed sm:text-xs md:text-sm ${sourceSerif.className}`}>
            Our services include assistance with business registrations, startup recognition, compliance management, certifications, licensing, funding support, grant application assistance, documentation, and other advisory services. Eligible applicants may also complete registrations and filings directly through official government portals, including mca.gov.in, startupindia.gov.in, and other relevant government platforms.
          </p>
          <h4 className={`mt-4 text-xs font-bold uppercase tracking-[0.08em] text-gray-900 sm:text-sm ${bricolage.className}`}>Payment Note</h4>
          <p className={`mt-2 text-[10px] leading-relaxed sm:text-xs md:text-sm ${sourceSerif.className}`}>
            Payments for services provided by EAZYGROW VENTURES PRIVATE LIMITED are generally accepted only in the company&apos;s official name through its designated Current Account or approved digital payment channels, including NEFT, IMPS, RTGS, and UPI.
          </p>
          <p className={`mt-2 text-[10px] leading-relaxed sm:text-xs md:text-sm ${sourceSerif.className}`}>
            For certain specialized services, including but not limited to legal, compliance, documentation, certification, registration, filing, or execution-related activities, payments may be securely routed through authorized execution partners, associates, or aligned service providers, including LVC Legalvala Consultancy LLP, where applicable. Such transactions shall be supported by valid tax invoices, agreements, payment confirmations, or other appropriate documentation issued by the respective authorized entity.
          </p>
          <p className={`mt-2 text-[10px] leading-relaxed sm:text-xs md:text-sm ${sourceSerif.className}`}>
            Clients are advised to make payments only to bank accounts or payment details officially communicated by EAZYGROW VENTURES PRIVATE LIMITED or its authorized execution partners. The company shall not be responsible for payments made to unauthorized individuals, personal accounts, or entities that have not been formally approved or communicated by the company.
          </p>
        </div>

        </div>



        {/* Bottom bar — white bg, dark text (sits on white footer bg) */}
        <div className="mt-2 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-2 sm:gap-3 sm:mt-3 sm:pt-3 md:gap-4 md:mt-4 md:pt-4 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className={`text-[9px] text-gray-600 ${sourceSerif.className} sm:text-[10px]`}>Copyright © 2026 EAZYGROW VENTURES PRIVATE LIMITED. All rights reserved.</p>
            <p className={`mt-0.5 text-[9px] text-gray-400 ${sourceSerif.className} sm:mt-1 sm:text-[10px]`}>Registered with MCA | CIN: U69202GJ2025PTC171089</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] sm:gap-x-3 sm:gap-y-1.5 sm:text-xs md:gap-x-4 md:gap-y-2 md:text-xs lg:gap-x-5 lg:text-sm">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms & Conditions", href: "/terms-and-conditions" },
              { name: "Refund & Cancellation Policy", href: "/refund-policy" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className={`text-gray-500 transition hover:text-gray-900 ${sourceSerif.className} sm:text-xs md:text-xs lg:text-sm`}>
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-gray-100 px-2 py-1.5 text-gray-600 transition hover:border-gray-400 hover:text-gray-900 ${sourceSerif.className} sm:gap-1.5 sm:px-3 sm:py-2`}
            aria-label="Back to top"
          >
            <ChevronUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="text-[11px] font-medium sm:text-sm">Top</span>
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
