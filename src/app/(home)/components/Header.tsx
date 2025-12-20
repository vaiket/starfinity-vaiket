"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Phone, User, Building2, Target } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button[aria-label="Toggle menu"]')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen]);

  // Update active item based on pathname
  useEffect(() => {
    const currentItem = navItems.find(item => item.href === pathname);
    if (currentItem) {
      setActiveItem(currentItem.label);
    }
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/services", label: "Services", tag: "Premium" },
    { href: "/success-stories", label: "Success Stories", tag: "New" },
    { href: "/about", label: "About Us", tag: "Trusted" },
    { href: "/contact", label: "Contact Us", tag: "24/7" },
  ];

  const handleMenuToggle = () => {
    setIsOpen(prev => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white"
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Startfinity - Go to homepage"
              onClick={scrollToTop}
            >
              <div className="relative">
                <span className="text-2xl lg:text-3xl font-bold" style={{ color: '#414288' }}>
                  Startfinity
                </span>
                <span className="absolute -top-1 -right-2 text-xs font-semibold px-1.5 py-0.5 rounded-full" 
                  style={{ backgroundColor: '#B0DB43', color: '#1a1a1a' }}>
                  Pro
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center space-x-1"
              aria-label="Desktop navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative group px-4 py-2"
                  onMouseEnter={() => setActiveItem(item.label)}
                  onMouseLeave={() => {
                    const current = navItems.find(i => i.href === pathname);
                    setActiveItem(current?.label || "");
                  }}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1.5">
                      <span className={`font-medium transition-colors duration-200 ${
                        pathname === item.href || activeItem === item.label
                          ? "text-[#414288]"
                          : "text-gray-700 hover:text-[#414288]"
                      }`}>
                        {item.label}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                          style={{ 
                            backgroundColor: item.tag === "New" ? '#B0DB43' : '#414288',
                            color: item.tag === "New" ? '#1a1a1a' : 'white'
                          }}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div 
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                        pathname === item.href || activeItem === item.label
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                      style={{ backgroundColor: '#414288' }}
                    />
                  </div>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA & Contact */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B0DB43' }}>
                  <Phone className="w-4 h-4 text-gray-900" />
                </div>
                <div>
                  <div className="text-xs text-gray-600">Call us 24/7</div>
                  <a href="tel:+919157142657" className="text-sm font-semibold hover:text-[#414288] transition-colors">
                    +91 9157142657
                  </a>
                </div>
              </div>
              
              <div className="h-6 w-px bg-gray-300"></div>
              
              <Link
                href="/apply"
                className="flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                style={{ backgroundColor: '#414288' }}
                aria-label="Start your funding journey"
              >
                <Target className="w-4 h-4" />
                <span>Apply Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors hover:scale-105 active:scale-95"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden fixed inset-0 top-16 bg-white z-40"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="h-full overflow-y-auto pb-20">
              {/* Mobile Contact Info */}
              <div className="p-6 bg-gradient-to-r from-[#414288]/5 to-[#B0DB43]/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#414288' }}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">24/7 Support</div>
                      <a href="tel:+919157142657" className="text-lg font-bold hover:text-[#414288] transition-colors">
                        +91 9157142657
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-4 px-4 rounded-lg transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-[#414288]/10"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{item.label}</span>
                      {item.tag && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full"
                          style={{ 
                            backgroundColor: item.tag === "New" ? '#B0DB43' : '#414288',
                            color: item.tag === "New" ? '#1a1a1a' : 'white'
                          }}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Section */}
              <div className="p-6 mt-8">
                <div className="space-y-4">
                  <Link
                    href="/apply"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-white text-center font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                    style={{ backgroundColor: '#414288' }}
                  >
                    <User className="w-5 h-5" />
                    <span>Start Free Application</span>
                  </Link>
                  
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-4 border border-gray-300 text-gray-700 text-center font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    <Building2 className="w-5 h-5" />
                    <span>Explore Services</span>
                  </Link>
                </div>
                
                {/* Additional Mobile Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-2">Business Hours</div>
                      <div className="text-sm text-gray-600">
                        <div>Mon-Fri: 9:00 AM - 7:00 PM</div>
                        <div>Sat: 10:00 AM - 5:00 PM</div>
                        <div>Sun: Closed</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-2">Email</div>
                      <a href="mailto:info@startfinitynavigator.com" className="text-sm text-gray-600 hover:text-[#414288]">
                        info@startfinitynavigator.com
                      </a>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-2">Address</div>
                      <div className="text-sm text-gray-600">
                        315 Sahitya Arcade, Ahmedabad
                      </div>
                    </div>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: '#414288' }}>5,000+</div>
                      <div className="text-xs text-gray-600">Businesses</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: '#B0DB43' }}>95%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: '#414288' }}>28+</div>
                      <div className="text-xs text-gray-600">States</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div 
        className="h-16 lg:h-20" 
        aria-hidden="true"
      />
    </>
  );
}