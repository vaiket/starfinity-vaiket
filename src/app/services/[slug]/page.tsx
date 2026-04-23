import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Clock3,
  Globe,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { serviceBySlug, serviceItems } from "@/lib/services-data";
import { Source_Serif_4 } from 'next/font/google';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

type ServicePageParams = {
  slug: string;
};

const iconMap: Record<string, LucideIcon> = {
  "working-capital": TrendingUp,
  "term-loan": Building2,
  "startup-funding": Rocket,
  "government-schemes": Target,
  "angel-investment": Globe,
  "credit-advisory": Award,
};

export async function generateStaticParams() {
  return serviceItems.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ServicePageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) {
    return { title: "Service Not Found | EazyGrow" };
  }
  return {
    title: `${service.title} | EazyGrow Services`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<ServicePageParams>;
}) {
  const { slug } = await params;
  const service = serviceBySlug[slug];

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.slug] ?? Sparkles;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f7ff] via-[#f8fbff] to-white py-12 sm:py-14 lg:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-wrap items-center gap-2 text-sm ${sourceSerif.className}`}>
          <Link href="/services" className="inline-flex items-center gap-1 text-[#2F327A] font-semibold hover:text-[#17349d]">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/#service-links" className="text-slate-500 hover:text-[#2147CF]">
            Home Hero Links
          </Link>
        </div>

        <div className="mt-4 rounded-3xl border border-[#d2defc] bg-white/90 p-6 sm:p-8 shadow-[0_14px_44px_rgba(29,72,178,0.12)]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full border border-[#d9e3ff] bg-[#edf3ff] px-3 py-1 text-xs font-semibold text-[#2147CF] ${sourceSerif.className}`}>
                <Icon className="h-3.5 w-3.5" />
                {service.subtitle}
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{service.title}</h1>
              <p className={`mt-3 text-base sm:text-lg text-slate-600 leading-relaxed ${sourceSerif.className}`}>{service.description}</p>
            </div>
            <Link
              href="/"
              className={`inline-flex items-center gap-1.5 rounded-xl bg-[#2F327A] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1a3bad] ${sourceSerif.className}`}
            >
              Start Application
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className={`text-xs uppercase font-semibold tracking-wider text-slate-500 ${sourceSerif.className}`}>Timeline</p>
              <p className={`mt-2 text-sm font-semibold text-slate-900 inline-flex items-center gap-1.5 ${sourceSerif.className}`}>
                <Clock3 className="h-4 w-4 text-[#2147CF]" />
                {service.timeline}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className={`text-xs uppercase font-semibold tracking-wider text-slate-500 ${sourceSerif.className}`}>Funding Range</p>
              <p className={`mt-2 text-sm font-semibold text-slate-900 ${sourceSerif.className}`}>{service.range}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className={`text-xs uppercase font-semibold tracking-wider text-slate-500 ${sourceSerif.className}`}>Execution Type</p>
              <p className={`mt-2 text-sm font-semibold text-slate-900 ${sourceSerif.className}`}>Guided & End-to-End</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className={`text-xs uppercase font-semibold tracking-wider text-slate-500 ${sourceSerif.className}`}>Support Window</p>
              <p className={`mt-2 text-sm font-semibold text-slate-900 ${sourceSerif.className}`}>Mon-Sat | Priority Desk</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-xl font-bold text-slate-900">What You Get</h2>
            <ul className="mt-4 space-y-3">
              {service.highlights.map((highlight) => (
                <li key={highlight} className={`flex items-start gap-2.5 text-slate-700 text-sm sm:text-base ${sourceSerif.className}`}>
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-slate-900">Best For</h2>
            <ul className="mt-3 space-y-2">
              {service.bestFor.map((item) => (
                <li key={item} className={`text-sm text-slate-700 ${sourceSerif.className}`}>
                  • {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-base font-semibold text-slate-900">Our Process</h3>
            <ol className="mt-3 space-y-2">
              {service.process.map((step, index) => (
                <li key={step} className={`text-sm text-slate-700 ${sourceSerif.className}`}>
                  <span className="font-semibold text-[#2147CF]">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#cfdcff] bg-gradient-to-r from-[#2F327A] to-[#2f67d8] p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">Need Help Picking Between Services?</h3>
              <p className={`mt-1 text-sm sm:text-base text-blue-100 ${sourceSerif.className}`}>
                We compare all 6 tracks and suggest the strongest route for your current business stage.
              </p>
            </div>
            <Link
              href="/services"
              className={`inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#1b41bf] hover:bg-blue-50 ${sourceSerif.className}`}
            >
              Compare All Services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}