"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bricolage_Grotesque } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';

import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CreditCard,
  FilePenLine,
  MessageCircle,
  Sparkles,
  UserPlus,
  DollarSign,
  User,
  Users,
  Target,
  ClipboardCheck,
  Briefcase,
  BarChart2,
  Share2,
} from "lucide-react";

const benefits = [
  "Smart strategy.",
  "Seamless compliance.",
  "Scalable growth.",
];

const orbitServices = [
  { label: "Startup Funding", icon: DollarSign },
  { label: "Profile Verify", icon: User },
  { label: "Readiness Review", icon: ClipboardCheck },
  { label: "Capital Matching", icon: Briefcase },
  { label: "Data Analytics", icon: BarChart2 },
  { label: "Investor Network", icon: Share2 },
];

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = orbitServices.length;
  const stepAngle = 360 / total;
  const [dimensions, setDimensions] = useState({ cx: 190, cy: 190, r: 150 });
  const [screenSize, setScreenSize] = useState({ isMobile: false, isTablet: false });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;

      const orbitWidth = isMobile ? Math.min(320, width * 0.95) :
        isTablet ? 380 : 420;
      const cx = orbitWidth / 2;
      const cy = orbitWidth / 2;
      const r = (orbitWidth / 2) - (isMobile ? 40 : isTablet ? 45 : 50);

      setDimensions({ cx, cy, r });
      setScreenSize({ isMobile, isTablet });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const { cx, cy, r } = dimensions;
  const { isMobile, isTablet } = screenSize;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRotation((prev) => {
        const newRotation = prev - stepAngle;

        // Clear active state during rotation
        setActiveIndex(-1);

        // After rotation transition completes (1s), check and set active
        setTimeout(() => {
          const normalizedRotation = ((newRotation % 360) + 360) % 360;
          const topAngle = 0;
          const angleDiff = (topAngle - normalizedRotation + 360) % 360;
          const indexAtTop = Math.round(angleDiff / stepAngle) % total;

          // Only set active if the node is exactly at the up center
          const angleInDegrees = (angleDiff * 180 / Math.PI);
          if (angleInDegrees < 0.5 || angleInDegrees > 359.5) {
            setActiveIndex(indexAtTop);
          }
        }, 1100); // Wait for 1s transition + 100ms buffer

        return newRotation;
      });
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [stepAngle, total]);

  return (
    <>
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 8px 24px rgba(46,125,50,0.4); }
          50% { box-shadow: 0 12px 32px rgba(46,125,50,0.6); }
        }
      `}</style>
      <section className="relative overflow-hidden bg-gradient-to-r from-green-50 via-blue-50 to-green-50 py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-400/15 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">

          {/* LEFT — text */}
          <div className="text-[#041230] text-left">
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] sm:text-[10px] ${bricolage.className}`} style={{ lineHeight: '1.2', whiteSpace: 'nowrap' }}>
              <Sparkles className="h-3 w-3 text-[#000] " />
              Eazygrow Ventures - Built For India's Next-Gen Founders
            </div>

            <h1 className={`mt-5 text-3xl font-extrabold leading-[1.06] tracking-tight sm:text-4xl lg:text-5xl ${bricolage.className}`} style={{ fontWeight: 900 }}>
              We Don't Just Guide  <span style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>startup </span>
              <span className="block"> We Build Startups That Actually Scale</span>
            </h1>
            <br />


            <div className={`inline-flex items-center gap-2  border-white/20 bg-white/10 px-1 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-black sm:text-[10px] ${sourceSerif.className}`} style={{ lineHeight: '1.2', whiteSpace: 'nowrap' }}>
              Everything Your Startup Needs, Under One Roof
            </div>

            <p className={`mt-5 max-w-xl text-base leading-relaxed text-gray-700 ${sourceSerif.className}`}>
              Every successful business starts with an idea — we help you fund it, build
              it, and scale it into a profitable reality with the right strategy and
              execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact-cta"
                className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(67,160,71,0.25)] transition hover:brightness-110"
                style={{ background: '#559557ff' }}
              >
                Book Startup Funding Call
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="https://wa.me/917041894751"
                className="inline-flex items-center gap-2 rounded-2xl border border-purple-300 bg-white px-6 py-4 text-base font-semibold text-black transition hover:bg-purple-50"
              >
                <MessageCircle className="h-5 w-5 text-black " />
                Discuss on WhatsApp
              </Link>
            </div>

            <p className={`mt-4 max-w-2xl text-sm leading-relaxed text-[#4f6889] ${sourceSerif.className}`}>
              Pre-seed | Seed | Working Capital | Growth Capital | Structured support from planning to execution
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {benefits.map((item) => (
                <p key={item} className={`flex items-center gap-2 text-sm font-medium text-[#2f4f79] ${sourceSerif.className}`}>
                  <CheckCircle2 className="h-4 w-4 text-[#1b2f89]" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT — orbit (replaced commented section) */}
          <div className="rounded-[32px] border border-white/75 bg-white/50 p-2 sm:p-3 lg:p-4 shadow-[0_24px_60px_rgba(38,82,136,0.2)] backdrop-blur-sm">
            <div className="rounded-[26px] border-2 border-transparent bg-gradient-to-br from-[#c8e6c9] to-[#bbdefb] p-2 sm:p-3 lg:p-6 flex items-center justify-center" style={{ backgroundClip: 'padding-box', backgroundImage: 'linear-gradient(from-[#c8e6c9], to-[#bbdefb]), linear-gradient(135deg, #10b981, #1a237e)' }}>
              <div className="relative" style={{ width: 'min(420px, 92vw)', height: 'min(420px, 92vw)' }}>

                {/* Dashed orbit ring
              <div
                className="absolute inset-0 rounded-full"
                style={{ 
                  border: "2px dashed #d4e6e1"
                }}
              /> */}

                {/* Rotating nodes wrapper */}
                <div
                  className="absolute inset-0"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 1s ease-in-out",
                  }}
                >
                  {orbitServices.map((service, i) => {
                    const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
                    const x = cx + r * Math.cos(angle);
                    const y = cy + r * Math.sin(angle);
                    const isActive = i === activeIndex;
                    const Icon = service.icon;

                    return (
                      <div
                        key={service.label}
                        className="absolute flex flex-col items-center justify-center gap-1 rounded-xl"
                        style={{
                          width: isMobile ? 75 : isTablet ? 80 : 86,
                          height: isMobile ? 75 : isTablet ? 80 : 86,
                          left: x,
                          top: y,
                          transform: `translate(-50%, -50%) rotate(${-rotation}deg) scale(${isActive ? 1.15 : 1})`,
                          transition:
                            "all 0.5s ease-in-out",
                          background: isActive ? "linear-gradient(135deg, #2E7D32, #66BB6A)" : "#ffffff",
                          border: isActive ? "3px solid transparent" : "1px solid #010c5e",
                          outline: isActive ? "none" : "none",
                          boxShadow: isActive
                            ? "0 8px 24px rgba(46,125,50,0.4)"
                            : "0 2px 8px rgba(38,82,136,0.08)",
                          opacity: isActive ? 1 : 0.5,
                          zIndex: isActive ? 10 : 5,
                          animation: isActive ? "pulse 2s ease-in-out infinite" : "none",
                          backgroundClip: isActive ? 'padding-box' : 'border-box',
                          backgroundImage: isActive ? 'linear-gradient(135deg, #2E7D32, #66BB6A), linear-gradient(135deg, #10b981, #1a237e)' : 'none',
                        }}
                      >
                        <Icon size={isActive ? 20 : 16} color={isActive ? "#6506066c" : "#6a83a6"} />
                        <span
                          className={`text-center leading-tight ${sourceSerif.className}`}
                          style={{
                            fontSize: isActive ? 10 : 9,
                            fontWeight: isActive ? 700 : 600,
                            color: isActive ? "#eae6e6" : "#3272cc",
                            maxWidth: isMobile ? 52 : 64,
                            lineHeight: 1.1,
                          }}
                        >
                          {service.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Center hub — fixed */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center rounded-full"
                  style={{
                    width: isMobile ? 115 : isTablet ? 135 : 155,
                    height: isMobile ? 115 : isTablet ? 135 : 155,
                    border: "1px solid #04664a00",
                    boxShadow: "0 4px 20px rgba(38,82,136,0.12)",
                    gap: isMobile ? 4 : 6,
                    background: 'linear-gradient(135deg, #1b7897, #688d71, #95ec69)',
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: isMobile ? 32 : 42, height: isMobile ? 32 : 42, background: "#ffffff" }}
                  >
                    <Sparkles size={isMobile ? 16 : 20} color="#2E7D32" />
                  </div>
                  <span
                    className={`font-bold text-center ${sourceSerif.className}`}
                    style={{ fontSize: isMobile ? 10 : 14, color: "#000000", lineHeight: 1.2 }}
                  >
                    EazyGrow
                  </span>
                  <span
                    className={`text-center leading-tight ${sourceSerif.className}`}
                    style={{ fontSize: isMobile ? 7 : 9, color: "#000000", lineHeight: 1.3 }}
                  >
                    {/* All kind of business support */}
                  </span>
                </div>

              </div>
            </div>

            <div className={`mt-3 text-center text-sm font-semibold text-[#334d6b] ${sourceSerif.className}`}>
              Smart strategy | Readiness review | Capital matching support
            </div>
          </div>

        </div>
      </section>

      {/* Who We Are & Who We Serve Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-50 via-blue-50 to-green-50 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Left Side - Who We Are */}
            <div className="rounded-3xl border border-white/75 bg-white/50 p-8 shadow-[0_24px_60px_rgba(38,82,136,0.15)] backdrop-blur-sm text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className={`text-2xl font-bold text-[#041230] ${bricolage.className}`}>
                  Who We Are?
                </h2>
              </div>
              <p
                className={`text-base leading-relaxed text-gray-700 ${sourceSerif.className} text-justify mx-auto max-w-3xl`}
              >
                EazyGrow Ventures is a comprehensive startup consultancy firm dedicated to empowering India's next-generation founders. We provide end-to-end support from ideation to execution, helping businesses secure funding, build scalable strategies, and achieve sustainable growth.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#d4e6e1] bg-white p-4">
                  <div className="text-3xl font-bold" style={{ color: '#2E7D32' }}>4+</div>
                  <div className={`text-sm text-gray-600 ${sourceSerif.className}`}>Years Experience</div>
                </div>
                <div className="rounded-xl border border-[#d4e6e1] bg-white p-4">
                  <div className="text-3xl font-bold" style={{ color: '#2E7D32' }}>100+</div>
                  <div className={`text-sm text-gray-600 ${sourceSerif.className}`}>Expert Team</div>
                </div>
              </div>
            </div>

            {/* Right Side - Who We Serve */}
            <div className="rounded-3xl border border-white/75 bg-white/50 p-8 shadow-[0_24px_60px_rgba(38,82,136,0.15)] backdrop-blur-sm text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}>
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className={`text-2xl font-bold text-[#041230] ${bricolage.className}`}>
                  Who We Serve?
                </h2>
              </div>
              <p
                className={`text-base leading-relaxed text-gray-700 ${sourceSerif.className} text-justify mx-auto max-w-3xl`}
              >
                We serve ambitious startups and growing businesses across various sectors, including technology, healthcare, education, e-commerce, and more. Our expertise spans from early-stage startups to established companies looking to scale their operations.
              </p>
              <div className="mt-6 space-y-3 flex flex-col items-center">
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: '#2E7D32' }} />
                  <span className={`text-sm text-gray-700 ${sourceSerif.className}`}>Early-stage Startups</span>
                </div>
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: '#2E7D32' }} />
                  <span className={`text-sm text-gray-700 ${sourceSerif.className}`}>Growth-stage Companies</span>
                </div>
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: '#2E7D32' }} />
                  <span className={`text-sm text-gray-700 ${sourceSerif.className}`}>SMEs & MSMEs</span>
                </div>
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: '#2E7D32' }} />
                  <span className={`text-sm text-gray-700 ${sourceSerif.className}`}>Women Entrepreneurs</span>
                </div>
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: '#2E7D32' }} />
                  <span className={`text-sm text-gray-700 ${sourceSerif.className}`}>Family-owned Businesses</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
