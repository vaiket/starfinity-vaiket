"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Phone, Target } from "lucide-react";
import ApplicationPopup from "./ApplicationPopup";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && !isPopupOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [isOpen, isPopupOpen]);

  const openApplicationPopup = () => {
    setIsPopupOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
            : "bg-white/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 lg:h-20 flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center" aria-label="Go to homepage">
              <Image src="/utp.png" alt="Essygrow" width={150} height={44} className="h-8 lg:h-10 w-auto" priority />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Desktop navigation">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      active ? "text-[#2F327A] bg-[#EEF0FF]" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <a
                href="tel:+917041894751"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4 text-[#2F327A]" />
                <span className="text-sm font-semibold hidden xl:inline">+91 7041894751</span>
              </a>

              <button
                type="button"
                onClick={openApplicationPopup}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold shadow-sm hover:shadow-md active:scale-[0.98] transition-all"
                style={{ background: "linear-gradient(135deg, #3D3F8F 0%, #2F327A 100%)" }}
                aria-label="Apply now"
              >
                <Target className="w-4 h-4" />
                <span>Apply Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={openApplicationPopup}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-sm font-semibold"
                style={{ backgroundColor: "#2F327A" }}
              >
                <Target className="w-4 h-4" />
                Apply
              </button>
              <button
                ref={toggleButtonRef}
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black/30">
            <div
              ref={mobileMenuRef}
              id="mobile-menu"
              className="absolute top-16 left-3 right-3 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="p-3 space-y-1">
                {NAV_ITEMS.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between px-3 py-3 rounded-xl font-medium ${
                        active ? "bg-[#EEF0FF] text-[#2F327A]" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </nav>

              <div className="border-t border-slate-100 p-4 space-y-3">
                <a
                  href="tel:+917041894751"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#2F327A]" />
                  +91 7041894751
                </a>
                <button
                  type="button"
                  onClick={openApplicationPopup}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold"
                  style={{ backgroundColor: "#2F327A" }}
                >
                  <Target className="w-4 h-4" />
                  Start Application
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="h-16 lg:h-20" aria-hidden="true" />
      <ApplicationPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
