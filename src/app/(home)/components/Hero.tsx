"use client";

import Link from "next/link";
import { Bricolage_Grotesque } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';
import CircularDashboard from "./CircularDashboard";

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

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Hero() {

  return (
    <>
      <style jsx global>{`
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
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] sm:text-[10px] ${bricolage.className}`} style={{ lineHeight: '1.2', whiteSpace: 'normal' }}>
              <Sparkles className="h-3 w-3 text-[#000] " />
              <span>Eazygrow Ventures - Built For India's Next-Gen Founders</span>
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
                Book a Call
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

          {/* RIGHT — Circular Dashboard */}
          <CircularDashboard />

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
                  who We serve?
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
