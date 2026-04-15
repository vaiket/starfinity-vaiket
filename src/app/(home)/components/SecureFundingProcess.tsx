import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Handshake, ShieldCheck } from "lucide-react";
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

const steps = [
  {
    title: "Understanding Your Vision ",
    description: "We dive deep into your business, goals, and funding needs to create a clear starting point for success.",
    icon: CheckCircle2,
    color: "bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5]",
    textColor: "text-white",
    
  },
  {
    title: "trategic Opportunity Mapping ",
    description: "Our experts identify the most relevant funding options and outline a clear, actionable roadmap tailored to your business..",
    icon: Handshake,
    color: "bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5]",
    textColor: "text-white",
  },
  {
    title:"Precision Documentation ",
    description: "We structure, review, and optimize your documents to ensure accuracy, compliance, and faster approvals.",
    icon: FileCheck2,
    color: "bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5]",
    textColor: "text-white",
  },
  {
    title: " End-to-End Execution & Support ",
    description: "From submission to final approval, we stay with you — tracking progress, managing followups, and ensuring smooth disbursement.",
    icon: ShieldCheck,
    color: "bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5]",
    textColor: "text-white",
  },
];

const outcomes = [
  "Simple communication and fewer surprises",
  "Structured document flow",
  "Clear status updates during processing",
  "Support aligned to Indian MSME needs",
];

export default function SecureFundingProcess() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className={`text-3xl font-bold text-slate-900 sm:text-4xl ${bricolage.className}`}>How We Turn Your Business into a <span style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Funded & Scalable 
Business</span>
    </h2>
          <p className={`mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base ${sourceSerif.className}`}>
            Built to simplify your journey — from idea to funding and beyond, with complete clarity and 
execution support. 
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5] text-white">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className={`text-sm font-semibold text-slate-400 ${sourceSerif.className}`}>Step {index + 1}</span>
              </div>
              <h3 className={`mt-4 text-lg font-semibold text-slate-900 ${bricolage.className}`}>{step.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed text-slate-600 ${sourceSerif.className}`}>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#dce6ff] bg-gradient-to-r from-[#f8faff] to-[#f5faea] p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className={`text-2xl font-semibold text-slate-900 ${bricolage.className}`}>What you get</h3>
              <div className="mt-4 space-y-2">
                {outcomes.map((item) => (
                  <p key={item} className={`flex items-center gap-2 text-sm text-slate-700 sm:text-base ${sourceSerif.className}`}>
                    <CheckCircle2 className="h-4 w-4 text-[#6f9520]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className={`text-sm font-semibold uppercase tracking-wide text-[#414288] ${sourceSerif.className}`}>Need quick guidance?</p>
              <p className={`mt-2 text-sm text-slate-600 ${sourceSerif.className}`}>
                Start with the service list and our team will help you pick the right path.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#414288] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#353676]"
                >
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#contact-cta"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Request Callback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
