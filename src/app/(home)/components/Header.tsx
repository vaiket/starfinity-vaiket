"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ExternalLink } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll effect with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setScrolled(scrollTop > 10);
          ticking = false;
        });
        ticking = true;
      }
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
      document.body.style.touchAction = "none";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
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
    { href: "/", label: "Home" },
    { href: "/services", label: "Services", symbol: "®", tag: "Premium" },
    { href: "/success-stories", label: "Success Stories", symbol: "©", tag: "New" },
    { href: "/about", label: "About Us", symbol: "加", tag: "Trusted" },
    { href: "/contact", label: "Contact Us", tag: "24/7" },
  ];

  const ctaVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const handleMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50"
            : "bg-white/90 backdrop-blur-sm"
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
              aria-label="EasyGrow - Go to homepage"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  EasyGrow
                </span>
                <span className="absolute -top-1 -right-2 text-xs font-semibold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">
                  Pro
                </span>
              </motion.div>
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
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}>
                        {item.label}
                      </span>
                      {item.symbol && (
                        <span className="text-xs font-bold text-blue-500 transition-transform group-hover:scale-110">
                          {item.symbol}
                        </span>
                      )}
                      {item.tag && (
                        <span className="text-[10px] font-semibold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <motion.span
                      className={`absolute -bottom-1 left-1/2 h-0.5 rounded-full ${
                        pathname === item.href || activeItem === item.label
                          ? "w-8 bg-blue-600"
                          : "w-0 bg-blue-600 group-hover:w-8"
                      }`}
                      initial={{ x: "-50%" }}
                      animate={{ 
                        x: "-50%",
                        width: pathname === item.href || activeItem === item.label ? "2rem" : "0rem"
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                variants={ctaVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/apply"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                  aria-label="Start your funding journey"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <span className="text-lg animate-pulse">✨</span>
                    <span>Start Funding Journey</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={handleMenuToggle}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
              
              {/* Menu Panel */}
              <motion.div
                ref={mobileMenuRef}
                id="mobile-menu"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden fixed top-16 left-4 right-4 z-50 bg-white rounded-2xl shadow-2xl shadow-black/20 border border-gray-100 overflow-hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
              >
                <div className="px-2 pt-6 pb-4 space-y-1 max-h-[70vh] overflow-y-auto">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={menuItemVariants}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-200 ${
                          pathname === item.href
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        }`}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{item.label}</span>
                          {item.tag && (
                            <span className="text-[10px] font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {item.symbol && (
                            <span className="text-xs font-bold text-blue-500">
                              {item.symbol}
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div
                    variants={menuItemVariants}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="pt-2 px-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/apply"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-semibold rounded-xl hover:shadow-lg transition-all duration-300 shadow-md"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-lg">✨</span>
                          <span>Start Funding Journey</span>
                        </span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </motion.div>
                    
                    {/* Additional Mobile Info */}
                    <div className="mt-4 text-center">
                      <p className="text-xs text-gray-500">
                        Need help? Call us at{" "}
                        <a href="tel:+18005551234" className="text-blue-600 font-semibold">
                          1-800-555-1234
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div 
        className="h-16 lg:h-20" 
        aria-hidden="true"
      />
    </>
  );
}