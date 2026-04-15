"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronUp } from "lucide-react";
import Header from "./(home)/components/Header";
import Footer from "./(home)/components/Footer";
import ApplicationPopup from "./(home)/components/ApplicationPopup";

export default function LayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAutoPopup, setShowAutoPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 320);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-popup after 10 seconds (only once per session)
  useEffect(() => {
    if (isAdminRoute) return;

    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenAutoPopup");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setShowAutoPopup(true);
      sessionStorage.setItem("hasSeenAutoPopup", "true");
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [isAdminRoute]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isAdminRoute) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-24 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#414288] hover:text-[#414288] sm:bottom-24 sm:right-6 ${
          showScrollTop ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
      <ApplicationPopup open={showAutoPopup} onClose={() => setShowAutoPopup(false)} />
    </>
  );
}
