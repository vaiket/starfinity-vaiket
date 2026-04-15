import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Building2,
  ChevronRight,
  CircleCheck,
  Clock3,
  Globe,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { serviceItems } from "@/lib/services-data";
import { Bricolage_Grotesque } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';
import FAQ from "../(home)/components/FAQ";

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const iconMap: Record<string, LucideIcon> = {
  "working-capital": TrendingUp,
  "term-loan": Building2,
  "startup-funding": Rocket,
  "government-schemes": Target,
  "angel-investment": Globe,
  "credit-advisory": Award,
};

const valuePillars = [
  {
    title: "Decision Clarity",
    detail: "We structure options by cost, speed, and eligibility before you apply.",
    icon: ShieldCheck,
  },
  {
    title: "Execution Speed",
    detail: "A document-first process helps reduce back-and-forth and delays.",
    icon: Clock3,
  },
  {
    title: "Growth Focus",
    detail: "Every recommendation is tied to your current stage and next milestone.",
    icon: Sparkles,
  },
];

export default function ServicesPage() {
  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-r from-green-50 via-blue-50 to-green-50 py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <span className={`inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-semibold text-[#24418d] ${sourceSerif.className}`}>
            <Sparkles className="h-4 w-4" />
            Services By EazyGrow Ventures
          </span>
          <h1 className={`mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 ${bricolage.className}`}>
            Choose The Right Funding Path for

            <span style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> Startups, MSMEs, And Growth-Stage Businesses</span>    
          </h1>
          <p className={`mt-4 text-base sm:text-lg text-slate-600 leading-relaxed ${sourceSerif.className}`}>
            Explore focused service tracks with clarity on fit, timeline, and execution model. Each track is designed to help you move from confusion to funding readiness with confidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {serviceItems.map((service) => {
            const Icon = iconMap[service.slug] ?? Sparkles;
            return (
              <article
                key={service.slug}
                className="group rounded-2xl border border-[#d7e1ff] bg-white/90 p-4 sm:p-6 shadow-[0_10px_30px_rgba(28,62,138,0.08)] hover:shadow-[0_18px_42px_rgba(28,62,138,0.18)] transition-all"
              >
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#eaf1ff] text-[#2147CF]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`rounded-full border border-slate-200 bg-slate-50 px-2 sm:px-3 py-1 text-xs font-semibold text-slate-600 ${sourceSerif.className}`}>
                    {service.subtitle}
                  </span>
                </div>

                <h2 className={`mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-slate-900 ${bricolage.className}`}>{service.title}</h2>
                <p className={`mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3 ${sourceSerif.className}`}>{service.shortDescription}</p>

                <ul className="mt-4 space-y-2">
                  {service.highlights.slice(0, 2).map((point) => (
                    <li key={point} className={`flex items-start gap-2 text-sm text-slate-700 ${sourceSerif.className}`}>
                      <CircleCheck className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2147CF] hover:text-[#16359e] ${sourceSerif.className}`}
                >
                  View Full Service Page
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {valuePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
                <Icon className="h-5 w-5 text-[#2147CF]" />
                <h3 className={`mt-3 text-lg font-semibold text-slate-900 ${bricolage.className}`}>{pillar.title}</h3>
                <p className={`mt-1 text-sm text-slate-600 ${sourceSerif.className}`}>{pillar.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl sm:rounded-3xl border border-[#cfdcff] p-6 sm:p-8 lg:p-10 text-white text-center" style={{ background: 'linear-gradient(90deg, #529858, #477a50, #6b74a8)' }}>
          <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${bricolage.className}`}>Need Help Choosing The Best Service?</h3>
          <p className={`mt-3 text-blue-100 max-w-2xl mx-auto ${sourceSerif.className}`}>
            Start from any track above. EazyGrow Ventures will validate eligibility, compare options, and guide execution end-to-end.
          </p>
          <Link
            href="/"
            className={`mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-[#1c42bf] hover:bg-blue-50 ${sourceSerif.className}`}
          >
            Go To Home & Apply
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <FAQ />
    </>
  );
}
