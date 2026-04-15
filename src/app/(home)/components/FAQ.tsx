"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What is the basic eligibility for MSME funding?",
    answer:
      "Business registration, basic financial records, and stable operations are usually required. Eligibility depends on scheme and lender profile.",
  },
  {
    id: 2,
    question: "How much time does approval usually take?",
    answer:
      "Most applications take around 7 to 21 working days. Faster timelines are possible when documents are complete and profile is strong.",
  },
  {
    id: 3,
    question: "Is collateral mandatory for every loan?",
    answer:
      "No. Several MSME and government-backed options are collateral-light or collateral-free, based on ticket size and policy fit.",
  },
  {
    id: 4,
    question: "What documents are commonly required?",
    answer:
      "KYC, registration proof, GST/ITR data, bank statements, and business details are commonly needed. Exact list varies by scheme.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 ${bricolage.className}`}>Frequently <span style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Asked</span> Questions</h2>
          <p className={`mt-3 text-slate-600 ${sourceSerif.className}`}>Simple answers for common MSME funding queries.</p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && <div className={`px-5 pb-5 text-sm text-slate-600 sm:text-base ${sourceSerif.className}`}>{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
