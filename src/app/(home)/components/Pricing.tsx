import { Check } from "lucide-react";
import { Source_Serif_4 } from 'next/font/google';
import { Bricolage_Grotesque } from 'next/font/google';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

const whatsappNumber = "917041894751";

const pricingPlans = [
  {
    badge: "6 Months",
    title: "The Starter Package",
    price: "₹20,000+GST",
    originalPrice: "₹30,000",
    description:
      "Start your startup journey with expert guidance, ready-to-use templates, and complete registration support.",
    featuresLabel: "What You'll Get:",
    features: [
      "1–5 grant applications tailored to your industry and eligibility.",
      "Complete documentation and submission support provided end-to-end.",
      "Guideline and compliance assistance throughout the entire process.",
      
      "Startup eligibility assessment before application.",
      "Progress updates shared at every stage.",
      "Success Fee: 1-2% of Funds Raised (Applicable Post-disbursement)",
    ],
  },
  {
    badge: "6 Months",
    title: "The Growth Plan",
    price: "₹ 30,000 + GST",
    originalPrice: "₹50,000",
    description:
      "Empowering early-stage founders with expert guidance, customized decks, and sector-specific funding support.",
    featuresLabel: "What You'll Get:",
    features: [
      "5–10 grant applications strategically identified and submitted for your industry.",
      "2 personalized one-on-one investor meetings with qualified investors.",
      "Comprehensive documentation covering all paperwork, filings, and compliance.",
      // "50% refund if agreed targets or milestones are not achieved within the period.",
      "Progress updates shared at every stage.",
      "Dedicated relationship manager assigned throughout.",
      "Success Fee: 1-2% of Funds Raised (Applicable Post-disbursement)",
    ],
  },
  {
    badge: "9 Months",
    title: "The Startup Scale Plan",
    price: "₹ 50,000+GST",
    originalPrice: "₹70,000",
    description:
      "Advance your startup with deeper investor access, detailed financial insights, and complete funding readiness.",
    featuresLabel: "What You'll Get:",
    features: [
      "10–15 grant applications submitted across multiple sectors.",
      "4 one-on-one investor meetings including a mock pitch session.",
      "Government loan support provided based on eligibility assessment.",
      "Professional investor pitch deck created for fundraising.",
      "Complete documentation and guideline support throughout the process.",
      "Financial Project & Grant Deck outlining financials, ",
      "projections, and funding potential.",
      "Success Fee: 1-2% of Funds Raised (Applicable Post-disbursement)",
    ],
    featured: true,
  },
  {
    badge: "1 Year",
    title: "The Startup Accelerator Plan",
    price: "₹ 70,000",
    originalPrice: "₹1,00,000",
    description:
      "Scale faster with end-to-end funding strategy, advanced investor access, and complete growth support.",
    featuresLabel: "Core Features:",
    features: [
      "15–20 grant applications submitted across sectors.",
      "7 one-on-one investor meetings facilitated.",
      "Full documentation support covering eligibility, guidelines, and compliance.",
      "Professionally designed investor pitch deck with business model and financials.",
      "Accurate financial projections reflecting growth potential and investment viability.",
      "End-to-end government loan assistance including eligibility and application support",
      "Dedicated investor follow-up ensuring consistent engagement post-pitch.",
      // "75% refund guaranteed if committed outcomes are not delivered.",
      "Investor Follow-Up Assistance",
      "Investor Pitch Rehearsal + Mock Session",
      "Success Fee: 1.5% of Funds Raised (Applicable Post-disbursement)",
    ],
  },
  {
    badge: "Tax Certificate",
    title: "80-IAC Tax Exemption Plan",
    price: "₹ 99,999",
    description:
      "Secure a 100% 3-year income tax holiday for your DPIIT startup. We handle the complete documentation process.",
    featuresLabel: "What You'll Get:",
    features: [
      "Designed For Scaling startups.",
      "Eligibility Check Pre-screening of innovation & business model.(3 to 5 Years)",
      "Documentation Video pitch, deck report & financial validation.",
      "Application Filing Section 80-IAC certificate support.",
      "Query Management IMB clarifications & follow-ups handled.",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_48%,#ffffff_100%)] px-4 py-12 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-48 sm:h-60 md:h-72 bg-[radial-gradient(circle_at_top,#dfe8ff_0%,rgba(223,232,255,0.55)_26%,rgba(255,255,255,0)_72%)]" />
      <div className="absolute left-[-4rem] sm:left-[-6rem] md:left-[-8rem] top-20 sm:top-24 md:top-28 h-32 sm:h-40 md:h-44 w-32 sm:w-40 md:w-44 rounded-full bg-[#B0DB43]/10 blur-3xl" />
      <div className="absolute right-[-4rem] sm:right-[-6rem] md:right-[-8rem] top-12 sm:top-14 md:top-16 h-40 sm:h-48 md:h-56 w-40 sm:w-48 md:w-56 rounded-full bg-[#414288]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl lg:max-w-[1500px]">
        <div className="text-center">
          <div className={`inline-flex rounded-full border border-[#dce6ff] bg-white/90 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#414288] shadow-sm backdrop-blur ${sourceSerif.className}`}>
            Pricing Plans
          </div>
          <h2 className={`mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 ${bricolage.className}`}>
            Choose the <span style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>support </span> stage that fits your startup
          </h2>
          <p className={`mx-auto mt-3 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 ${sourceSerif.className}`}>
            Structured plans for founders at every milestone, designed to feel clear, premium, and easy to compare
            across every device.
          </p>

        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {pricingPlans.map((plan) => (
            (() => {
              const message = encodeURIComponent(
                `Hello EazyGrow, I want to book the ${plan.title} plan.\n\nPlan Duration: ${plan.badge}\nPrice: ${plan.price}${
                  plan.originalPrice ? `\nOld Price: ${plan.originalPrice}` : ""
                }\nSection: Pricing Plans\n\nPlease share the next steps.`
              );

              return (
            <article
              key={plan.title}
              className={`group relative overflow-hidden rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] border bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)] ${
                plan.featured
                  ? "border-[#414288] ring-1 ring-[#414288]/20 lg:scale-[1.02]"
                  : "border-slate-200/90"
              }`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 md:h-24 bg-[linear-gradient(180deg,rgba(65,66,136,0.06),rgba(255,255,255,0))]" />

              {plan.featured && (
                <div className={`bg-[#15196f] px-3 sm:px-4 py-3 sm:py-4 text-center text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white ${sourceSerif.className}`}>
                  Most Popular
                </div>
              )}

              <div className="relative flex h-full flex-col p-3 sm:p-4 md:p-5">
                <span className={`w-fit rounded-full px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs sm:text-sm font-bold text-white shadow-[0_10px_20px_rgba(46,125,50,0.3)] ${sourceSerif.className}`} style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)' }}>
                  {plan.badge}
                </span>

                <h3
                  className={`mt-2 sm:mt-3 min-h-[48px] sm:min-h-[56px] text-base sm:text-lg md:text-xl font-bold leading-snug ${
                    plan.featured ? "text-[#2f7a3b]" : "text-slate-900"
                  } ${bricolage.className}`}
                >
                  {plan.title}
                </h3>

                <div className="mt-1 sm:mt-2">
                  <p className={`text-lg sm:text-xl md:text-2xl font-extrabold leading-none tracking-tight text-slate-900 ${bricolage.className}`}>
                    {plan.price}
                  </p>
                  {plan.originalPrice && (
                    <p className={`mt-1 text-sm sm:text-base font-semibold text-slate-400 line-through ${sourceSerif.className}`}>{plan.originalPrice}</p>
                  )}
                </div>

                <p className={`mt-2 sm:mt-3 min-h-[60px] sm:min-h-[72px] text-xs sm:text-sm leading-relaxed text-slate-600 ${sourceSerif.className}`}>{plan.description}</p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-3 sm:mt-4 inline-flex w-full items-center justify-center rounded-lg border px-2 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${sourceSerif.className} ${
                    plan.featured
                      ? "border-[#15196f] bg-[#15196f] text-white shadow-[0_14px_30px_rgba(21,25,111,0.2)] hover:bg-[#111558]"
                      : "border-slate-300 bg-white text-slate-900 hover:border-[#414288] hover:bg-[#414288] hover:text-white"
                  }`}
                >
                  Book Now
                </a>

                <div className="mt-3 sm:mt-4 border-t border-slate-200 pt-3 sm:pt-4">
                  <p className={`text-xs sm:text-sm font-bold text-slate-900 ${sourceSerif.className}`}>{plan.featuresLabel}</p>
                  <ul className="mt-2 sm:mt-3 space-y-2 sm:space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className={`flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm leading-relaxed text-slate-600 ${sourceSerif.className}`}>
                        <span className="mt-0.5 flex h-3 w-3 sm:h-4 sm:w-4 shrink-0 items-center justify-center rounded-full" style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A)' }}>
                          <Check className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-white" />
                        </span>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}