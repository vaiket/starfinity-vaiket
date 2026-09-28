import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '400', '600', '800'] });

export default function RefundPolicy() {
  return (
    <div className={`${bricolage.className} min-h-screen bg-white`}>
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-3 tracking-tight">
            REFUND, CANCELLATION, AND EARNED FEE POLICY
          </h1>
          <p className="text-black text-sm">Last Updated: September 28, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-black leading-relaxed mb-10">
            Welcome to Eazygrow Ventures Private Limited (“Company”). This policy governs the financial and commercial terms relating to your engagement with our platform, website, and consultancy services.
          </p>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">1. INDEPENDENT ADVISORY MODEL</h2>
            <p className="text-black leading-relaxed">
              The client acknowledges and agrees that the Company operates as an effort-linked, B2B compliance and advisory platform. The scope of service is explicitly confined to corporate documentation, credit compliance analysis, business report drafting, pitch-deck optimization, and framework processing support. The final decision to approve, disburse, or reject any startup grant, loan, or investment application lies solely and exclusively with the sovereign government departments or private financial institutions.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">2. EARNED FEE COMPLIANCE</h2>
            <p className="text-black leading-relaxed mb-4">
              Because our services are customized, corporate-facing, and effort-linked, the professional fees paid by the client are immediately allocated toward human resource deployment, background compliance checks, data entry allocation, and financial report mapping upon the signature of the agreement or checkout completion.
            </p>
            <p className="text-black leading-relaxed">
              Consequently, the initial processing fees or milestone advances are deemed <strong>FULLY EARNED</strong> by the Company the moment the internal onboarding process begins.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">3. ABSOLUTE NON-REFUNDABILITY</h2>
            <p className="text-black leading-relaxed mb-4">
              All fees paid to Eazygrow Ventures Private Limited or its authorized billing affiliates are strictly non-refundable, non-transferable, and non-creditable under any circumstances. No refunds or contract cancellations are maintainable based on:
            </p>
            <ol className="space-y-2 text-black">
              <li className="flex gap-2"><span className="shrink-0">a)</span><span>Subsequent customer change of mind or shifting business priorities.</span></li>
              <li className="flex gap-2"><span className="shrink-0">b)</span><span>Subjective dissatisfaction with the turnaround timelines or structural evaluation frameworks.</span></li>
              <li className="flex gap-2"><span className="shrink-0">c)</span><span>Delays, variations, or application rejections executed by external sovereign government portals, banks, accelerators, or private investing networks.</span></li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">4. CORPORATE IDENTITY</h2>
            <p className="text-black leading-relaxed">
              This policy is issued solely by Eazygrow Ventures Private Limited. Any historical or typographical references to unincorporated trade names or variations on our interfaces do not alter the strict corporate binding of this B2B non-refundability protocol.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-black">
          <p>Copyright © 2026 EAZYGROW VENTURES PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
