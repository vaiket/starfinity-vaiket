"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Phone, 
  User,
  ArrowRight,
  Shield,
  Briefcase
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const nav = [
    { 
      href: "/solutions", 
      label: "Solutions",
      dropdown: [
        { href: "/startups", label: "Startups & MSMEs", icon: <Sparkles className="w-4 h-4" /> },
        { href: "/manufacturing", label: "Manufacturing", icon: <Briefcase className="w-4 h-4" /> },
        { href: "/tech", label: "Tech Companies", icon: <Sparkles className="w-4 h-4" /> },
        { href: "/exporters", label: "Exporters", icon: <Shield className="w-4 h-4" /> },
      ]
    },
    { href: "/schemes", label: "Schemes" },
    { href: "/process", label: "Process" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/resources", label: "Resources" },
  ];

  // Handle scroll for hide/show header and background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background change
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [activeDropdown]);

  // Close mobile menu on route change
  const closeMenu = useCallback(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/5 border-b border-gray-100/80" 
            : "bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-transparent"
        }`}
      >
        {/* Top ribbon */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="font-medium">Get up to ₹10Cr funding in 48 hours</span>
                <span className="hidden sm:inline ml-4">📞 Call us: 1800-123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              onClick={closeMenu}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-tight ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}>
                  Starfinity
                </span>
                <span className={`text-xs ${
                  scrolled ? "text-gray-500" : "text-white/80"
                }`}>
                  Business Funding Experts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {nav.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${
                        scrolled 
                          ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100/50" 
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        scrolled 
                          ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100/50" 
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-blue-500/10 border border-gray-200/50 overflow-hidden"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50/80 transition-colors group"
                          >
                            <div className="text-blue-600 group-hover:scale-110 transition-transform">
                              {subItem.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                {subItem.label}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Contact button - desktop */}
              <Link
                href="/contact"
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  scrolled 
                    ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100/50" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>

              {/* Login button - desktop */}
              <Link
                href="/login"
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  scrolled 
                    ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100/50" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>

              {/* CTA Button */}
              <Link
                href="/apply"
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </Link>

              {/* Mobile menu button */}
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled 
                    ? "bg-gray-100/50 text-gray-700 hover:bg-gray-200/50" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="space-y-1">
                  {nav.map((item) => (
                    <div key={item.label} className="border-b border-gray-100/50 last:border-0">
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )}
                            className="flex items-center justify-between w-full py-4 text-gray-900 font-medium hover:text-blue-600 transition-colors"
                          >
                            {item.label}
                            <ChevronDown className={`w-5 h-5 transition-transform ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`} />
                          </button>
                          
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 pb-2 space-y-2"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={closeMenu}
                                  className="flex items-center gap-3 py-3 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                  {subItem.icon}
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block py-4 text-gray-900 font-medium hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-6 pt-6 border-t border-gray-200/50 space-y-3">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100/50 text-gray-700 rounded-lg font-medium hover:bg-gray-200/50 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Us
                  </Link>
                  
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100/50 text-gray-700 rounded-lg font-medium hover:bg-gray-200/50 transition-colors"
                  >
                    <User className="w-5 h-5" />
                    Client Login
                  </Link>
                  
                  <Link
                    href="/apply"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow"
                  >
                    Apply for Funding
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50/50 rounded-xl">
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="font-semibold text-gray-900">Need immediate help?</div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>1800-123-4567</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Available 24/7 • Free Consultation
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-24 lg:h-28" />
    </>
  );
}