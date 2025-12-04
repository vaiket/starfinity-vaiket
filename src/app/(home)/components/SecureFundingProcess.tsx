"use client";
import {
  Clock,
  FileCheck,
  Handshake,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: "1",
    title: "Quick Application",
    time: "2 mins",
    desc: "Fill a simple 2-minute form with basic business details.",
    highlight: "No complex paperwork needed",
    icon: CheckCircle2,
  },
  {
    id: "2",
    title: "Expert Consultation",
    time: "24 hrs",
    desc: "Our experts analyze your needs and match with best schemes.",
    highlight: "Personalized scheme matching",
    icon: Handshake,
  },
  {
    id: "3",
    title: "Documentation",
    time: "3-5 days",
    desc: "We prepare and submit all required documents.",
    highlight: "End-to-end support",
    icon: FileCheck,
  },
  {
    id: "4",
    title: "Approval & Disbursement",
    time: "7-21 days",
    desc: "Get approved and receive funds directly in your account.",
    highlight: "Direct bank transfer",
    icon: ShieldCheck,
  },
];

const benefits = [
  { text: "Fast Approvals" },
  { text: "95% Success" },
  { text: "No Hidden Fees" },
  { text: "Expert Support" },
];

export default function SecureFundingProcess() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        How We Secure Your Funding
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Our streamlined approach helps businesses get funded in as little as 7 days
      </p>

      {/* Illustration */}
      <div className="flex justify-center mb-14">
        <Image
          src="https://cdn3d.iconscout.com/3d/premium/thumb/teamwork-3d-illustration-download-in-png-blend-fbx-gltf-files--corporate-people-characters-pack-business-illustrations-4406754.png"
          alt="Funding Illustration"
          width={450}
          height={350}
          className="max-w-full"
        />
      </div>

      {/* Steps */}
      <div className="grid gap-6 max-w-6xl mx-auto lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {step.id}
              </div>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                {step.time}
              </span>
            </div>

            <step.icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />

            <h3 className="font-bold text-base mb-2">{step.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{step.desc}</p>

            <a className="text-xs font-semibold text-blue-600 cursor-pointer hover:underline">
              {step.highlight}
            </a>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="w-32 h-32 flex flex-col justify-center items-center rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-lg transition cursor-default"
          >
            <CheckCircle2 className="w-6 h-6 text-blue-600 mb-2" />
            <p className="text-xs font-semibold text-gray-600">{b.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="mt-16 px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition active:scale-95">
        Get Started Today
      </button>

      <p className="text-xs text-gray-400 mt-4">
        Start Your Funding Journey
      </p>
    </section>
  );
}
