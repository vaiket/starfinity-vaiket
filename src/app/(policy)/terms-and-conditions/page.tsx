import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({ subsets: ['latin'], weight: ['200', '400', '600', '800'] });

export default function TermsAndConditions() {
  return (
    <div className={`${bricolage.className} min-h-screen bg-white`}>
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-3 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-black text-sm">Last Updated: April 14, 2026</p>
        </div>

        {/* Professional Layout */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p className="text-black leading-relaxed mb-4">
              These Terms and Conditions ("Terms") govern the use of the website www.eazygrow.com and all services provided by EazyGrow Financial Services Pvt. Ltd. ("EazyGrow", "Company", "we", "us"). By accessing our website, submitting an inquiry, making a payment, or engaging our services, you ("Client", "User", "you") agree to be legally bound by these Terms.
            </p>
            <p className="text-black leading-relaxed mb-4">
              If you do not accept these Terms, you must immediately discontinue use of our website and services. We reserve the right to modify these Terms at any time without prior notice.
            </p>
            <p className="text-black leading-relaxed">
              These Terms constitute a legally binding agreement under the Indian Contract Act, 1872 and the Information Technology Act, 2000.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">2. About Our Services</h2>
            <p className="text-black leading-relaxed mb-4">
              EasyGrow provides consultancy, documentation support, and facilitation services to startups, MSMEs, and growing businesses for the following (non-exhaustive list):
            </p>
            <ul className="space-y-2 text-black ml-4">
              <li className="list-disc">MSME / Udyam Registration under MSMED Act, 2006</li>
              <li className="list-disc">GST Registration and compliance assistance</li>
              <li className="list-disc">Startup India DPIIT Recognition and Section 80-IAC Tax Exemption</li>
              <li className="list-disc">ISO Certification facilitation (ISO 9001, 14001, 22000, 27001, etc.)</li>
              <li className="list-disc">Business Funding — Working Capital, Term Loans, Startup Funding, Government Schemes</li>
              <li className="list-disc">Pitch Deck, Financial Report, and Investor-Ready Documentation</li>
              <li className="list-disc">Angel Investment and Incubation Program support</li>
            </ul>
            <p className="text-black leading-relaxed mt-4">
              EasyGrow acts as a facilitator and advisory firm. We are not a government body, and our services are distinct from direct government services. Government fees, if any, are charged separately and are not included in our service fees unless explicitly stated.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">3. Eligibility</h2>
            <ul className="space-y-2 text-black ml-4">
              <li className="list-disc">You must be at least 18 years of age and legally capable of entering a contract under Indian law.</li>
              <li className="list-disc">For business services, you must be an authorized representative of the entity for which services are being sought.</li>
              <li className="list-disc">You confirm that all information provided to us is true, accurate, and complete.</li>
            </ul>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">4. Service Engagement & Scope</h2>
            <p className="text-black leading-relaxed mb-4"><strong>4.1 Service commencement:</strong> Services commence upon receipt of the service fee and submission of all required documents by the client.</p>
            <p className="text-black leading-relaxed mb-4"><strong>4.2 Timeline:</strong> Estimated timelines are indicative only. Final outcomes are subject to government portal availability, regulatory processing times, and client cooperation in providing documents.</p>
            <p className="text-black leading-relaxed mb-4"><strong>4.3 Client responsibilities:</strong> The client is responsible for providing accurate, complete, and timely information. Any delays or rejection caused by incorrect information provided by the client will not be the liability of EasyGrow.</p>
            <p className="text-black leading-relaxed mb-4"><strong>4.4 Government outcomes:</strong> EasyGrow facilitates applications and filings but does not guarantee approval from any government authority, bank, or funding institution. Approval or rejection decisions rest solely with the respective authority.</p>
            <p className="text-black leading-relaxed"><strong>4.5 Success Fee:</strong> For funding plans, a success fee of 1.5% of funds actually raised/disbursed is applicable post-disbursement, in addition to the upfront plan fee. This will be clearly communicated before engagement.</p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">5. Fees & Payments</h2>
            <ul className="space-y-2 text-black ml-4">
              <li className="list-disc">All service fees are quoted in Indian Rupees (INR) and are inclusive of applicable GST unless stated otherwise.</li>
              <li className="list-disc">Payments are accepted via bank transfer, UPI, or other modes specified at the time of invoicing.</li>
              <li className="list-disc">Government fees (challan payments, portal charges, etc.) are charged separately and are non-refundable once paid to the relevant authority.</li>
              <li className="list-disc">Any changes in government fees after the commencement of service will be passed on to the client.</li>
              <li className="list-disc">EasyGrow issues a proper GST invoice for all services rendered.</li>
            </ul>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">6. Confidentiality</h2>
            <p className="text-black leading-relaxed">
              Both parties agree to maintain strict confidentiality of all information shared during the service engagement. EasyGrow will not disclose your business, financial, or personal information to any unauthorized third party. Similarly, the client agrees not to disclose proprietary methods, documentation templates, or internal processes of EasyGrow.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">7. Intellectual Property</h2>
            <p className="text-black leading-relaxed mb-4">
              All content on the EasyGrow website, including text, graphics, logos, reports, pitch deck templates, and service documentation frameworks, is the exclusive intellectual property of EasyGrow Financial Services Pvt. Ltd. You may not copy, reproduce, distribute, or create derivative works without prior written permission.
            </p>
            <p className="text-black leading-relaxed">
              Documents prepared specifically for the client (e.g., custom pitch decks, project reports) become the client's property upon full payment of service fees.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">8. Limitation of Liability</h2>
            <p className="text-black leading-relaxed mb-4">
              EasyGrow's liability in any case shall not exceed the total service fee paid by the client for the specific service in question. We are not liable for:
            </p>
            <ul className="space-y-2 text-black ml-4">
              <li className="list-disc">Loss of business, revenue, profits, or goodwill arising from government rejection or delay</li>
              <li className="list-disc">Consequences arising from incorrect information provided by the client</li>
              <li className="list-disc">Any third-party actions including lender decisions, portal downtime, or regulatory changes</li>
              <li className="list-disc">Indirect, incidental, special, or consequential damages of any kind</li>
            </ul>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">9. Force Majeure</h2>
            <p className="text-black leading-relaxed">
              EasyGrow shall not be liable for any failure or delay in service delivery caused by circumstances beyond our reasonable control, including but not limited to government portal outages, natural calamities, changes in government policy, pandemic-related restrictions, or acts of God.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">10. Governing Law & Jurisdiction</h2>
            <p className="text-black leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.
            </p>
            <p className="text-black leading-relaxed">
              Any dispute shall first be attempted to be resolved amicably. If unresolved within 30 days, it shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Ahmedabad.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">11. Prohibited Uses</h2>
            <p className="text-black leading-relaxed mb-4">
              You agree not to use our website or services to:
            </p>
            <ul className="space-y-2 text-black ml-4">
              <li className="list-disc">Provide false, misleading, or fraudulent information</li>
              <li className="list-disc">Attempt to obtain certifications or registrations through fraudulent means</li>
              <li className="list-disc">Engage in any activity that violates Indian law or regulations</li>
              <li className="list-disc">Copy, scrape, or misuse content from our website</li>
              <li className="list-disc">Impersonate any person, entity, or government official</li>
            </ul>
            <p className="text-black leading-relaxed mt-4">
              Violation of any of the above may result in immediate termination of services without refund.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-black mb-4">12. Termination</h2>
            <p className="text-black leading-relaxed">
              EasyGrow reserves the right to suspend or terminate services at any time if the client is found to be providing fraudulent information, engaging in illegal activity, or violating these Terms. In such cases, applicable refund terms will apply as per our Refund Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">13. Disclaimer</h2>
            <p className="text-black leading-relaxed mb-4">
              EasyGrow is a private consultancy firm and is not affiliated with, endorsed by, or acting as an agent of any government body including the Ministry of MSME, DPIIT, GSTN, or any other government entity. All registrations and certifications are facilitated through the official government portals on behalf of the client.
            </p>
            <p className="text-black leading-relaxed">
              Information provided on our website is for general informational purposes only and does not constitute legal or financial advice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
