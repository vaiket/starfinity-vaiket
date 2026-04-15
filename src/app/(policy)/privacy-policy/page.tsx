import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function PrivacyPolicy() {
  return (
    <div className={`${inter.variable} min-h-screen bg-white font-sans`}>
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">Last Updated: April 14, 2026</p>
        </div>

        {/* Professional Layout */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Easygrow Financial Services Pvt. Ltd. (hereinafter referred to as "EasyGrow", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, share, and protect the personal information you provide when you access our website (www.essygrow.com), use our services, or interact with us in any way.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By accessing our website or availing our services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our website and services immediately.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect the following categories of personal and business information:
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">2.1 Personal Identification Information</h3>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc">Full name, email address, mobile number, and residential/business address</li>
              <li className="list-disc">Aadhaar number, PAN number, GSTIN, and other government-issued identification (only where required for service delivery)</li>
              <li className="list-disc">Business registration details, CIN, Director Identification Numbers (DIN)</li>
              <li className="list-disc">Bank account and financial details provided for loan or funding applications</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">2.2 Usage & Technical Information</h3>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc">IP address, browser type, device type, and operating system</li>
              <li className="list-disc">Pages visited, time spent on pages, and referral sources</li>
              <li className="list-disc">Cookies and session data for website functionality</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">2.3 Communication Data</h3>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc">Messages, queries, and feedback submitted through our contact forms, WhatsApp, or email</li>
              <li className="list-disc">Call recordings where consent is obtained for quality and training purposes</li>
            </ul>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Purpose of Data Collection</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use your information exclusively to:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc">Process your service requests (MSME registration, GST, ISO, Startup India certification, business funding, etc.)</li>
              <li className="list-disc">Verify identity and ensure eligibility for government schemes and certification processes</li>
              <li className="list-disc">Communicate service updates, document requirements, application status, and follow-up actions</li>
              <li className="list-disc">Process payments and issue invoices and receipts</li>
              <li className="list-disc">Comply with legal, regulatory, and statutory obligations under Indian law</li>
              <li className="list-disc">Improve our platform, services, and user experience through analytics</li>
              <li className="list-disc">Send you relevant service updates, offers, and informational content (with your consent)</li>
            </ul>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Data Sharing & Disclosure</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              EasyGrow does not sell, rent, or trade your personal information to any third party. We may share your data only in the following limited circumstances:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc"><strong>Government Portals & Authorities:</strong> Data submitted to portals such as Udyam Registration, GSTN, DPIIT Startup India, Ministry of Corporate Affairs (MCA21), or ISO certification bodies as part of service delivery on your behalf.</li>
              <li className="list-disc"><strong>Authorized Service Partners:</strong> With our registered consultants, Chartered Accountants, Company Secretaries, or technology partners who assist in delivering services — all bound by confidentiality agreements.</li>
              <li className="list-disc"><strong>Financial Institutions:</strong> With RBI-registered lenders, NBFCs, or banks when facilitating loan or funding applications at your request.</li>
              <li className="list-disc"><strong>Legal Compliance:</strong> As required by any court order, government authority, or applicable law under Indian jurisdiction.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4 font-semibold">
              Important: We will never share your Aadhaar, PAN, or bank details with any third party without your explicit written consent, except as legally mandated.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc">SSL/TLS encryption for all data transmitted through our website</li>
              <li className="list-disc">Restricted access controls ensuring only authorized personnel access sensitive information</li>
              <li className="list-disc">Regular security audits and vulnerability assessments</li>
              <li className="list-disc">Secure document storage with access logging</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              However, no method of electronic transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal data for as long as necessary to fulfill the purpose for which it was collected, or as required by applicable Indian laws and regulations (including the Companies Act, GST Act, and Income Tax Act). After the retention period, data is securely deleted or anonymized.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              For services involving government filings, we retain records for a minimum of 7 (seven) years to ensure compliance and post-service support.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Cookies Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our website uses cookies to enhance user experience, track preferences, and analyze traffic. Types of cookies used:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc"><strong>Strictly Necessary Cookies:</strong> Required for website operation and cannot be disabled.</li>
              <li className="list-disc"><strong>Analytics Cookies:</strong> Help us understand how users interact with our website (e.g., Google Analytics).</li>
              <li className="list-disc"><strong>Preference Cookies:</strong> Remember your settings and preferences for improved experience.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Your Rights as a Data Subject</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable laws, you have the following rights:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="list-disc"><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li className="list-disc"><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li className="list-disc"><strong>Right to Erasure:</strong> Request deletion of your data where it is no longer required (subject to legal retention requirements).</li>
              <li className="list-disc"><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing communications at any time.</li>
              <li className="list-disc"><strong>Right to Grievance Redressal:</strong> Lodge a complaint with our Grievance Officer or MEITY's Data Protection Board.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise any of these rights, write to us at: <strong>info@easygrow.com</strong> with the subject line "Data Rights Request".
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Third-Party Websites</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites (government portals, payment gateways, etc.). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any information.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are intended for businesses and individuals who are 18 years of age or older. We do not knowingly collect personal data from minors. If we become aware that we have inadvertently collected data from a minor, we will delete it promptly.
            </p>
          </section>

          <section className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. Changes will be effective upon posting to our website. We encourage you to periodically review this page. Continued use of our services after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">12. Grievance Officer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In accordance with the Information Technology Act, 2000 and the DPDP Act, 2023, the details of our Grievance Officer are:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li><strong className="text-gray-900">Organization:</strong> Easygrow Financial Services Pvt. Ltd.</li>
              <li><strong className="text-gray-900">Address:</strong> 315 Sahitya Arcade, Ahmedabad, Gujarat, India</li>
              <li><strong className="text-gray-900">Email:</strong> info@easygrow.com</li>
              <li><strong className="text-gray-900">Phone:</strong> +91 7041894751</li>
              <li><strong className="text-gray-900">Response Time:</strong> Grievances will be acknowledged within 48 hours and resolved within 30 days.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
