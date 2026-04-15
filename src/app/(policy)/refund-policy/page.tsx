import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RefundPolicy() {
  return (
    <div className={`${inter.variable} min-h-screen bg-white font-sans`}>
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Refund Policy
          </h1>
          <p className="text-gray-500 text-sm">Last Updated: April 14, 2026</p>
        </div>

        {/* Professional Layout */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Easygrow Financial Services Pvt. Ltd. believes in transparent, fair, and honest business practices. We are committed to delivering services as described. If we are unable to deliver a service as committed, we will initiate a refund as per the terms outlined in this policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Refund requests must be submitted by email to <strong>info@easygrow.com</strong> with the subject line: "Refund Request – [Your Order/Service Name]". Our team will respond within 2 business days.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Eligibility for Refund</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A refund may be considered under the following conditions:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc">EasyGrow is unable to initiate or process the service despite receiving complete documents from the client within the stated timeline.</li>
              <li className="list-disc">The client requests cancellation before any work or government filing has been initiated.</li>
              <li className="list-disc">A duplicate payment has been made by the client.</li>
              <li className="list-disc">EasyGrow has committed a material error that directly resulted in service failure.</li>
            </ul>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Non-Refundable Conditions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              No refund shall be issued in the following circumstances:
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">3.1 Government Rejection or Delay</h3>
            <p className="text-gray-600 leading-relaxed">
              No refund will be provided if EasyGrow has processed the application as per government guidelines and the registration or certification is rejected, objected to, or delayed by the government department, portal, or authority. Government outcomes are beyond our control.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">3.2 Non-Cooperation by Client</h3>
            <p className="text-gray-600 leading-relaxed">
              If the service cannot be processed due to the client's failure to provide required documents in time, incorrect information supplied by the client, or lack of cooperation, a processing/administrative charge of not less than 20% of the amount will be deducted, and any balance may be refunded at our discretion.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">3.3 Government Fees Already Paid</h3>
            <p className="text-gray-600 leading-relaxed">
              Any government fee, portal charge, challan, stamp duty, or other statutory payment made on behalf of the client is strictly non-refundable under any circumstances. We will provide proof of payment (challan or receipt) to the client before paying any government fee.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">3.4 Partially Delivered Services</h3>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc">If any component of the service has been partially delivered (e.g., pitch deck drafted, documentation prepared, investor connections shared), no refund is available for the portion delivered.</li>
              <li className="list-disc">For subscription-based services or multi-month plans (Incubation, Accelerator, etc.), no refund is available once the plan has been activated and work has commenced.</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">3.5 Complimentary Services or Discounts Availed</h3>
            <p className="text-gray-600 leading-relaxed">
              If the client has availed any complimentary service, bonus deliverable, or discounted pricing as part of the service package, no refund is applicable.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">3.6 Success Fee Payments</h3>
            <p className="text-gray-600 leading-relaxed">
              Success fees (1.5% of funds raised/disbursed) are earned upon the event of funding disbursement and are strictly non-refundable.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">3.7 Change of Mind / Delay from Client Side</h3>
            <p className="text-gray-600 leading-relaxed">
              If the client changes their mind after service has been initiated, or if delays in service delivery are due to the client's unavailability, no refund shall be processed.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Refund Process</h2>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc"><strong>Step 1 – Submit Request:</strong> Email info@easygrow.com with your name, order details, reason for refund, and supporting evidence.</li>
              <li className="list-disc"><strong>Step 2 – Review:</strong> Our refund team will review the request within 15 working days and determine eligibility.</li>
              <li className="list-disc"><strong>Step 3 – Resolution:</strong> If eligible, the refund will be processed to the original payment source within 15 working days of approval.</li>
              <li className="list-disc"><strong>Step 4 – Notification:</strong> You will be notified via email once the refund has been initiated.</li>
            </ul>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Deductions & Processing Charges</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Where a partial refund is approved, EasyGrow will deduct:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc">Administrative/processing charges of minimum ₹500 (Five Hundred Rupees).</li>
              <li className="list-disc">The proportional value of any services already delivered or work completed.</li>
              <li className="list-disc">Any government fees, third-party costs, or portal charges already incurred on the client's behalf.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              The maximum refund under any circumstance cannot exceed the total amount paid by the client for that specific service.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Cancellation Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Clients may cancel a service order before commencement of work. 'Commencement' means the stage at which EasyGrow's team has begun documentation review, filing, or any substantive action on behalf of the client.
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc"><strong>Cancellation before commencement:</strong> Full refund minus processing charge (min ₹500).</li>
              <li className="list-disc"><strong>Cancellation after commencement but before filing:</strong> Partial refund based on work completed — at EasyGrow's discretion.</li>
              <li className="list-disc"><strong>Cancellation after filing/submission to government portal:</strong> No refund applicable.</li>
            </ul>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Funding Plans – Special Refund Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For incubation and accelerator programs (Pre-Incubation, Incubation, Incubation Pro+, Accelerator Plan, 80-IAC Tax Exemption Plan):
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc">Once the plan is activated and onboarding is complete, the plan fee is non-refundable.</li>
              <li className="list-disc">If EasyGrow has not initiated any work within 15 business days of payment and document submission (without valid reason), the client is eligible for a full refund minus ₹500 processing charge.</li>
              <li className="list-disc">In all other scenarios, refunds for funding plans will be considered on a case-by-case basis.</li>
            </ul>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you are unsatisfied with the refund decision, you may escalate the matter to our Grievance Officer at:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4 mb-4">
              <li className="list-disc"><strong>Email:</strong> info@easygrow.com</li>
              <li className="list-disc"><strong>Phone:</strong> +91 7041894751</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              All escalated disputes will be resolved within 30 days. If unresolved, the dispute shall be governed by the Terms & Conditions and applicable Indian law with jurisdiction in Ahmedabad, Gujarat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Contact for Refund Queries</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For any questions or concerns related to refunds, please contact us at:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li><strong className="text-gray-900">Email:</strong> info@easygrow.com</li>
              <li><strong className="text-gray-900">Phone / WhatsApp:</strong> +91 7041894751</li>
              <li><strong className="text-gray-900">Business Hours:</strong> Monday to Saturday, 10:00 AM to 6:30 PM IST</li>
              <li><strong className="text-gray-900">Address:</strong> 315 Sahitya Arcade, Ahmedabad, Gujarat, India</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© 2026 Easygrow Financial Services Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
