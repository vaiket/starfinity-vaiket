import { FileCheck2, Landmark, ShieldCheck, TrendingUp } from "lucide-react";
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

const featureItems = [
  {
    title: "Right Scheme Match",
    description: "We don't guess — we strategically match you with the most relevant funding opportunities based on your business stage, goals, and growth potential.",
    icon: Landmark,
    color: "bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5]",
    textColor: "text-white",
  },
  {
    title: "Simple Documentation",
    description: "From checklist to submission, we simplify every step so your application is accurate, complete, and ready — without delays.",
    icon: FileCheck2,
    color: "bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5]",
    textColor: "text-white",
  },
  {
    title: "Transparent Process",
    description: "No hidden steps. No surprises. Just clear timelines, defined processes, and regular updates — so you're always in control.",
    icon: ShieldCheck,
    color: "bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5]",
    textColor: "text-white",
  },
  {
    title: "Growth-Focused Support",
    description: "We go beyond approvals — helping you choose funding paths that actually support long-term scalability and business success.",
    icon: TrendingUp,
    color: "bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#3F51B5]",
    textColor:'text-white',
  },
];

const stats = [
  { label: "Businesses Assisted", value: "20,000+" },
  { label: "Funding Facilitated", value: "Rs 120 Cr+" },
  { label: "States Covered", value: "28+" },
  { label: "Avg First Response", value: "< 2 hrs" },
];

export default function Features() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className={`text-3xl font-bold sm:text-4xl text-slate-900 ${bricolage.className}`}>Why Ambitious <span style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>business </span>Choose Essygrow</h2>
          <p className={`mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base ${sourceSerif.className}`}>
           Not just consultancy — we deliver clarity, strategy, and real business growth for
startups and MSMEs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color} ${item.textColor}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className={`mt-4 text-lg font-semibold text-slate-900 ${bricolage.className}`}>{item.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed text-slate-600 ${sourceSerif.className}`}>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#dce6ff] bg-gradient-to-r from-[#f8faff] to-[#f5faea] p-5 sm:p-7">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="text-center sm:text-left">
                <p className="text-2xl font-bold text-[#414288] sm:text-3xl">{item.value}</p>
                <p className={`mt-1 text-xs text-slate-600 sm:text-sm ${sourceSerif.className}`}>
                  {item.label === "Businesses Assisted" ? (
                    <>
                      <span style={{ color: "#3D3F8F" }}>Businesses</span> Assisted
                    </>
                  ) : (
                    item.label
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
