export type PolicyBlock = {
  type: "paragraph" | "heading" | "subheading" | "bullet" | "numbered";
  text: string;
};

export type PolicyContent = {
  slug: string;
  title: string;
  updatedAt: string;
  companyDetails: string[];
  blocks: PolicyBlock[];
  copyright: string;
};

// Policy wording transcribed from the supplied Word documents.

export const privacyPolicy: PolicyContent = {
  "slug": "privacy-policy",
  "title": "PRIVACY POLICY",
  "updatedAt": "Last Updated: 26 September 2026",
  "companyDetails": [
    "EAZYGROW VENTURES PRIVATE LIMITED",
    "CIN: U69202GJ2025PTC171089",
    "Registered Office: 315 Sahitya Arcade, Ahmedabad, Gujarat, India",
    "Email: info@essygrow.com  |  Phone: +91 7041894751  |  Website: www.essygrow.com"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "General Disclaimer"
    },
    {
      "type": "paragraph",
      "text": "EAZYGROW VENTURES PRIVATE LIMITED is an independent, private-sector B2B startup advisory and business consulting company. We are not a government body and are not affiliated with, endorsed by, or authorized by the Government of India, the Ministry of Corporate Affairs (MCA), or any other government agency or department."
    },
    {
      "type": "paragraph",
      "text": "Our services may include assistance with business registrations, startup recognition, government schemes, grants, funding applications, compliance, certifications, documentation, and related business support. Eligible applicants may also complete applicable registrations and filings directly through official government portals, including mca.gov.in, startupindia.gov.in, and other relevant government platforms."
    },
    {
      "type": "subheading",
      "text": "Payment & Authorized Execution Partner"
    },
    {
      "type": "paragraph",
      "text": "Payments for services provided by EAZYGROW VENTURES PRIVATE LIMITED should be made only through the Company's officially communicated payment channels and in accordance with the applicable invoice."
    },
    {
      "type": "paragraph",
      "text": "For certain compliance, documentation, legal, professional, or execution-related services, payments may be securely routed through our authorized execution partner, LVC Legalvala Consultancy LLP, where applicable. Such payments will be supported by valid and verified tax invoices issued by the respective authorized entity."
    },
    {
      "type": "paragraph",
      "text": "Customers are advised to verify the invoice, beneficiary details, and payment instructions before making any payment. No payment should be made to any personal account or to an unauthorized third party claiming to represent the Company or its authorized execution partners."
    },
    {
      "type": "paragraph",
      "text": "Any payment made outside the officially communicated and verified payment channels shall be solely at the payer's risk and responsibility, and EAZYGROW VENTURES PRIVATE LIMITED shall not be liable for unauthorized transactions."
    },
    {
      "type": "paragraph",
      "text": "This General Disclaimer forms an integral part of, and is incorporated by reference into, this document and the Company's other published policies."
    },
    {
      "type": "heading",
      "text": "1. Introduction"
    },
    {
      "type": "paragraph",
      "text": "EAZYGROW VENTURES PRIVATE LIMITED (hereinafter \"the Company\", \"we\", \"us\", or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, share, and protect the personal and business information you provide when you access our website (www.essygrow.com), use our services, or interact with us through any communication channel, including email, phone, and WhatsApp."
    },
    {
      "type": "paragraph",
      "text": "By accessing our website or availing our services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our website and services immediately."
    },
    {
      "type": "heading",
      "text": "2. Information We Collect"
    },
    {
      "type": "paragraph",
      "text": "We may collect the following categories of personal and business information:"
    },
    {
      "type": "subheading",
      "text": "2.1 Personal Identification Information"
    },
    {
      "type": "bullet",
      "text": "Full name, email address, mobile number, and residential/business address"
    },
    {
      "type": "bullet",
      "text": "Aadhaar number, PAN number, GSTIN, and other government-issued identification (only where required for service delivery)"
    },
    {
      "type": "bullet",
      "text": "Business registration details, CIN, and Director Identification Numbers (DIN)"
    },
    {
      "type": "bullet",
      "text": "Bank account and financial details provided for loan or funding applications"
    },
    {
      "type": "subheading",
      "text": "2.2 Usage & Technical Information"
    },
    {
      "type": "bullet",
      "text": "IP address, browser type, device type, and operating system"
    },
    {
      "type": "bullet",
      "text": "Pages visited, time spent on pages, and referral sources"
    },
    {
      "type": "bullet",
      "text": "Cookies and session data for website functionality"
    },
    {
      "type": "subheading",
      "text": "2.3 Communication Data"
    },
    {
      "type": "bullet",
      "text": "Messages, queries, and feedback submitted through our contact forms, WhatsApp, or email"
    },
    {
      "type": "bullet",
      "text": "Call recordings where consent is obtained, for quality and training purposes"
    },
    {
      "type": "heading",
      "text": "3. Purpose of Data Collection"
    },
    {
      "type": "paragraph",
      "text": "We use your information exclusively to:"
    },
    {
      "type": "bullet",
      "text": "Process your service requests (business registration, GST, ISO, Startup India certification, business funding, and related services)"
    },
    {
      "type": "bullet",
      "text": "Verify identity and assess eligibility for government schemes and certification processes"
    },
    {
      "type": "bullet",
      "text": "Communicate service updates, document requirements, application status, and follow-up actions"
    },
    {
      "type": "bullet",
      "text": "Process payments and issue invoices and receipts"
    },
    {
      "type": "bullet",
      "text": "Comply with legal, regulatory, and statutory obligations under Indian law"
    },
    {
      "type": "bullet",
      "text": "Improve our platform, services, and user experience through analytics"
    },
    {
      "type": "bullet",
      "text": "Send relevant service updates, offers, and informational content, where you have consented to receive such communication"
    },
    {
      "type": "heading",
      "text": "4. Data Sharing & Disclosure"
    },
    {
      "type": "paragraph",
      "text": "EAZYGROW VENTURES PRIVATE LIMITED does not sell, rent, or trade your personal information to any third party. We may share your data only in the following limited circumstances:"
    },
    {
      "type": "bullet",
      "text": "Government Portals & Authorities — data submitted to portals such as Udyam Registration, GSTN, DPIIT Startup India, the Ministry of Corporate Affairs (MCA21), or certification bodies, as part of service delivery on your behalf"
    },
    {
      "type": "bullet",
      "text": "Authorized Service Partners — our registered consultants, Chartered Accountants, Company Secretaries, technology partners, or our authorized execution partner named in the General Disclaimer above, all bound by confidentiality obligations"
    },
    {
      "type": "bullet",
      "text": "Financial Institutions — RBI-registered lenders, NBFCs, or banks, when facilitating loan or funding applications at your request"
    },
    {
      "type": "bullet",
      "text": "Legal Compliance — as required by a court order, government authority, or applicable law under Indian jurisdiction"
    },
    {
      "type": "paragraph",
      "text": "Important: We will never share your Aadhaar, PAN, or bank details with any third party without your explicit written consent, except as legally mandated."
    },
    {
      "type": "heading",
      "text": "5. Data Security"
    },
    {
      "type": "paragraph",
      "text": "We implement industry-standard security measures to protect your data, including:"
    },
    {
      "type": "bullet",
      "text": "SSL/TLS encryption for all data transmitted through our website"
    },
    {
      "type": "bullet",
      "text": "Restricted access controls, ensuring only authorized personnel access sensitive information"
    },
    {
      "type": "bullet",
      "text": "Regular security audits and vulnerability assessments"
    },
    {
      "type": "bullet",
      "text": "Secure document storage with access logging"
    },
    {
      "type": "paragraph",
      "text": "However, no method of electronic transmission or storage is completely secure. While we use commercially reasonable means to protect your data, we cannot guarantee absolute security, and you acknowledge and accept the inherent risks of transmitting information over the internet."
    },
    {
      "type": "heading",
      "text": "6. Data Retention"
    },
    {
      "type": "paragraph",
      "text": "We retain your personal data for as long as necessary to fulfil the purpose for which it was collected, or as required under applicable Indian laws, including the Companies Act, 2013, the GST law, and the Income Tax Act, 1961. For services involving government filings, we retain records for a minimum of seven (7) years to ensure compliance and post-service support. After the applicable retention period, data is securely deleted or anonymized."
    },
    {
      "type": "heading",
      "text": "7. Cookies Policy"
    },
    {
      "type": "paragraph",
      "text": "Our website uses cookies to enhance user experience, remember preferences, and analyse traffic, including:"
    },
    {
      "type": "bullet",
      "text": "Strictly Necessary Cookies — required for website operation and cannot be disabled"
    },
    {
      "type": "bullet",
      "text": "Analytics Cookies — help us understand how users interact with our website (e.g., Google Analytics)"
    },
    {
      "type": "bullet",
      "text": "Preference Cookies — remember your settings for an improved experience"
    },
    {
      "type": "paragraph",
      "text": "You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our website."
    },
    {
      "type": "heading",
      "text": "8. Your Rights as a Data Subject"
    },
    {
      "type": "paragraph",
      "text": "In accordance with the Digital Personal Data Protection Act, 2023 (\"DPDP Act\") and other applicable laws, you have the following rights in relation to your personal data:"
    },
    {
      "type": "bullet",
      "text": "Right of Access — request a copy of the personal data we hold about you"
    },
    {
      "type": "bullet",
      "text": "Right to Correction — request correction of inaccurate or incomplete data"
    },
    {
      "type": "bullet",
      "text": "Right to Erasure — request deletion of your data where it is no longer required, subject to our legal retention obligations"
    },
    {
      "type": "bullet",
      "text": "Right to Withdraw Consent — withdraw consent for marketing communications at any time"
    },
    {
      "type": "bullet",
      "text": "Right to Grievance Redressal — lodge a complaint with our Grievance Officer or, where applicable, the Data Protection Board of India"
    },
    {
      "type": "paragraph",
      "text": "To exercise any of these rights, write to us at info@essygrow.com with the subject line \"Data Rights Request\"."
    },
    {
      "type": "heading",
      "text": "9. Third-Party Websites"
    },
    {
      "type": "paragraph",
      "text": "Our website may contain links to third-party websites, including government portals and payment gateways. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information."
    },
    {
      "type": "heading",
      "text": "10. Children's Privacy"
    },
    {
      "type": "paragraph",
      "text": "Our services are intended for businesses and individuals who are 18 years of age or older. We do not knowingly collect personal data from minors. If we become aware that we have inadvertently collected data from a minor, we will delete it promptly."
    },
    {
      "type": "heading",
      "text": "11. Changes to this Policy"
    },
    {
      "type": "paragraph",
      "text": "We reserve the right to update this Privacy Policy at any time. Material changes will be posted to this page with an updated \"Last Updated\" date. Continued use of our services after such changes constitutes acceptance of the revised Policy. We encourage you to review this page periodically."
    },
    {
      "type": "heading",
      "text": "12. Grievance Officer"
    },
    {
      "type": "paragraph",
      "text": "In accordance with the Information Technology Act, 2000 and the DPDP Act, 2023, the details of our Grievance Officer are:"
    },
    {
      "type": "bullet",
      "text": "Organisation: EAZYGROW VENTURES PRIVATE LIMITED"
    },
    {
      "type": "bullet",
      "text": "Address: 315 Sahitya Arcade, Ahmedabad, Gujarat, India"
    },
    {
      "type": "bullet",
      "text": "Email: info@essygrow.com"
    },
    {
      "type": "bullet",
      "text": "Phone: +91 7041894751"
    },
    {
      "type": "bullet",
      "text": "Response Time: grievances will be acknowledged within 48 hours and resolved within 30 days"
    }
  ],
  "copyright": "Copyright © 2026 EAZYGROW VENTURES PRIVATE LIMITED. All rights reserved."
};

export const refundPolicy: PolicyContent = {
  "slug": "refund-policy",
  "title": "REFUND & CANCELLATION POLICY",
  "updatedAt": "Last Updated: 26 September 2026",
  "companyDetails": [
    "EAZYGROW VENTURES PRIVATE LIMITED",
    "CIN: U69202GJ2025PTC171089",
    "Registered Office: 315 Sahitya Arcade, Ahmedabad, Gujarat, India",
    "Email: info@essygrow.com  |  Phone: +91 7041894751  |  Website: www.essygrow.com"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "General Disclaimer"
    },
    {
      "type": "paragraph",
      "text": "EAZYGROW VENTURES PRIVATE LIMITED is an independent, private-sector B2B startup advisory and business consulting company. We are not a government body and are not affiliated with, endorsed by, or authorized by the Government of India, the Ministry of Corporate Affairs (MCA), or any other government agency or department."
    },
    {
      "type": "paragraph",
      "text": "Our services may include assistance with business registrations, startup recognition, government schemes, grants, funding applications, compliance, certifications, documentation, and related business support. Eligible applicants may also complete applicable registrations and filings directly through official government portals, including mca.gov.in, startupindia.gov.in, and other relevant government platforms."
    },
    {
      "type": "subheading",
      "text": "Payment & Authorized Execution Partner"
    },
    {
      "type": "paragraph",
      "text": "Payments for services provided by EAZYGROW VENTURES PRIVATE LIMITED should be made only through the Company's officially communicated payment channels and in accordance with the applicable invoice."
    },
    {
      "type": "paragraph",
      "text": "For certain compliance, documentation, legal, professional, or execution-related services, payments may be securely routed through our authorized execution partner, LVC Legalvala Consultancy LLP, where applicable. Such payments will be supported by valid and verified tax invoices issued by the respective authorized entity."
    },
    {
      "type": "paragraph",
      "text": "Customers are advised to verify the invoice, beneficiary details, and payment instructions before making any payment. No payment should be made to any personal account or to an unauthorized third party claiming to represent the Company or its authorized execution partners."
    },
    {
      "type": "paragraph",
      "text": "Any payment made outside the officially communicated and verified payment channels shall be solely at the payer's risk and responsibility, and EAZYGROW VENTURES PRIVATE LIMITED shall not be liable for unauthorized transactions."
    },
    {
      "type": "paragraph",
      "text": "This General Disclaimer forms an integral part of, and is incorporated by reference into, this document and the Company's other published policies."
    },
    {
      "type": "heading",
      "text": "1. Our Commitment"
    },
    {
      "type": "paragraph",
      "text": "EAZYGROW VENTURES PRIVATE LIMITED believes in transparent, fair, and honest business practices. If the Company is unable to deliver a service as committed, a refund will be initiated strictly in accordance with the terms of this Policy."
    },
    {
      "type": "paragraph",
      "text": "Refund requests must be submitted by email to info@essygrow.com with the subject line \"Refund Request – [Your Order/Service Name]\". Our team will acknowledge the request within 2 business days."
    },
    {
      "type": "heading",
      "text": "2. Eligibility for Refund"
    },
    {
      "type": "paragraph",
      "text": "A refund may be considered only where:"
    },
    {
      "type": "bullet",
      "text": "The Company is unable to initiate or process the service despite having received complete documents from the client within the stated timeline"
    },
    {
      "type": "bullet",
      "text": "The client requests cancellation before any work or government filing has been initiated"
    },
    {
      "type": "bullet",
      "text": "A duplicate payment has been made by the client"
    },
    {
      "type": "bullet",
      "text": "The Company has committed a material, demonstrable error that directly resulted in service failure"
    },
    {
      "type": "heading",
      "text": "3. Non-Refundable Conditions"
    },
    {
      "type": "subheading",
      "text": "3.1 Government Rejection or Delay"
    },
    {
      "type": "paragraph",
      "text": "No refund will be provided where the Company has processed the application in accordance with government guidelines and the registration, certification, or funding is rejected, objected to, or delayed by the relevant government department, portal, authority, or lending institution. Such outcomes are beyond the Company's control."
    },
    {
      "type": "subheading",
      "text": "3.2 Non-Cooperation by Client"
    },
    {
      "type": "paragraph",
      "text": "Where a service cannot be processed due to the client's failure to provide required documents in time, provision of incorrect information, or lack of cooperation, a processing and administrative charge equal to the greater of 20% of the amount paid or the Company's actual costs and resources committed to that point shall be deducted. Any remaining balance, if payable, will be assessed against the stage of work completed and refunded accordingly."
    },
    {
      "type": "subheading",
      "text": "3.3 Government Fees Already Paid"
    },
    {
      "type": "paragraph",
      "text": "Any government fee, portal charge, challan, stamp duty, or other statutory payment made on behalf of the client is strictly non-refundable under any circumstances. The Company will provide proof of payment (challan or receipt) before remitting any government fee on the client's behalf."
    },
    {
      "type": "subheading",
      "text": "3.4 Partially Delivered Services"
    },
    {
      "type": "bullet",
      "text": "Where any component of a service has been partially delivered (for example, a pitch deck drafted, documentation prepared, or investor connections shared), no refund is available for the portion already delivered."
    },
    {
      "type": "bullet",
      "text": "For subscription-based or multi-month plans, no refund is available once the plan has been activated and work has commenced."
    },
    {
      "type": "subheading",
      "text": "3.5 Complimentary Services or Discounts Availed"
    },
    {
      "type": "paragraph",
      "text": "Where the client has availed any complimentary service, bonus deliverable, or discounted pricing as part of a service package, no refund is applicable to that component."
    },
    {
      "type": "subheading",
      "text": "3.6 Success Fee Payments"
    },
    {
      "type": "paragraph",
      "text": "Success fees, as defined in the Company's Terms & Conditions, are earned upon disbursement of funds and are strictly non-refundable."
    },
    {
      "type": "subheading",
      "text": "3.7 Change of Mind / Client-Side Delay"
    },
    {
      "type": "paragraph",
      "text": "No refund shall be processed where the client changes their mind after a service has been initiated, or where delay in service delivery is caused by the client's unavailability or inaction."
    },
    {
      "type": "heading",
      "text": "4. Refund Process"
    },
    {
      "type": "bullet",
      "text": "Step 1 – Submit Request: email the required details, order/service reference, reason for the request, and supporting evidence to the address in clause 1 above."
    },
    {
      "type": "bullet",
      "text": "Step 2 – Review: the Company will review the request and determine eligibility within 15 working days of receipt."
    },
    {
      "type": "bullet",
      "text": "Step 3 – Resolution: where a refund is approved, it will be processed to the original payment source within 15 working days of approval."
    },
    {
      "type": "bullet",
      "text": "Step 4 – Notification: the client will be notified by email once the refund has been initiated."
    },
    {
      "type": "heading",
      "text": "5. Deductions & Processing Charges"
    },
    {
      "type": "paragraph",
      "text": "Where a partial refund is approved, the Company will deduct:"
    },
    {
      "type": "bullet",
      "text": "an administrative/processing charge of a minimum of ₹500 (Rupees Five Hundred);"
    },
    {
      "type": "bullet",
      "text": "the proportional value of any services already delivered or work completed; and"
    },
    {
      "type": "bullet",
      "text": "any government fees, third-party costs, or portal charges already incurred on the client's behalf."
    },
    {
      "type": "paragraph",
      "text": "The maximum refund payable under any circumstance shall not exceed the total amount paid by the client for the specific service in question."
    },
    {
      "type": "heading",
      "text": "6. Cancellation Policy"
    },
    {
      "type": "paragraph",
      "text": "A client may cancel a service order before \"commencement\" of work. \"Commencement\" means the stage at which the Company's team has begun documentation review, filing, or any other substantive action on the client's behalf."
    },
    {
      "type": "bullet",
      "text": "Cancellation before commencement: full refund, less the minimum processing charge referred to in clause 5."
    },
    {
      "type": "bullet",
      "text": "Cancellation after commencement but before filing: partial refund assessed against work actually completed."
    },
    {
      "type": "bullet",
      "text": "Cancellation after filing or submission to a government portal: no refund is applicable."
    },
    {
      "type": "heading",
      "text": "7. Funding & Advisory Plans — Special Terms"
    },
    {
      "type": "paragraph",
      "text": "For incubation, accelerator, and similar structured advisory plans:"
    },
    {
      "type": "bullet",
      "text": "Once a plan is activated and onboarding is complete, the plan fee is non-refundable."
    },
    {
      "type": "bullet",
      "text": "If the Company has not initiated any work within 15 business days of receiving payment and the required documents, without valid reason, the client is eligible for a full refund, less the minimum processing charge."
    },
    {
      "type": "bullet",
      "text": "All other refund scenarios for such plans will be assessed against the stage of work completed and the terms of the specific engagement letter or proposal signed by the client."
    },
    {
      "type": "heading",
      "text": "8. Dispute Resolution"
    },
    {
      "type": "paragraph",
      "text": "A client dissatisfied with a refund decision may escalate the matter to the Company's Grievance Officer at info@essygrow.com or +91 7041894751. Escalated disputes will be addressed within 30 days. Any dispute that remains unresolved shall be governed by the Dispute Resolution & Governing Law clause of the Company's Terms & Conditions."
    },
    {
      "type": "heading",
      "text": "9. Contact for Refund Queries"
    },
    {
      "type": "bullet",
      "text": "Email: info@essygrow.com"
    },
    {
      "type": "bullet",
      "text": "Phone / WhatsApp: +91 7041894751"
    },
    {
      "type": "bullet",
      "text": "Business Hours: Monday to Saturday, 10:00 AM to 6:30 PM IST"
    },
    {
      "type": "bullet",
      "text": "Address: 315 Sahitya Arcade, Ahmedabad, Gujarat, India"
    }
  ],
  "copyright": "Copyright © 2026 EAZYGROW VENTURES PRIVATE LIMITED. All rights reserved."
};

export const termsPolicy: PolicyContent = {
  "slug": "terms-and-conditions",
  "title": "TERMS & CONDITIONS",
  "updatedAt": "Last Updated: 26 September 2026",
  "companyDetails": [
    "EAZYGROW VENTURES PRIVATE LIMITED",
    "CIN: U69202GJ2025PTC171089",
    "Registered Office: 315 Sahitya Arcade, Ahmedabad, Gujarat, India",
    "Email: info@essygrow.com  |  Phone: +91 7041894751  |  Website: www.essygrow.com"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "General Disclaimer"
    },
    {
      "type": "paragraph",
      "text": "EAZYGROW VENTURES PRIVATE LIMITED is an independent, private-sector B2B startup advisory and business consulting company. We are not a government body and are not affiliated with, endorsed by, or authorized by the Government of India, the Ministry of Corporate Affairs (MCA), or any other government agency or department."
    },
    {
      "type": "paragraph",
      "text": "Our services may include assistance with business registrations, startup recognition, government schemes, grants, funding applications, compliance, certifications, documentation, and related business support. Eligible applicants may also complete applicable registrations and filings directly through official government portals, including mca.gov.in, startupindia.gov.in, and other relevant government platforms."
    },
    {
      "type": "subheading",
      "text": "Payment & Authorized Execution Partner"
    },
    {
      "type": "paragraph",
      "text": "Payments for services provided by EAZYGROW VENTURES PRIVATE LIMITED should be made only through the Company's officially communicated payment channels and in accordance with the applicable invoice."
    },
    {
      "type": "paragraph",
      "text": "For certain compliance, documentation, legal, professional, or execution-related services, payments may be securely routed through our authorized execution partner, LVC Legalvala Consultancy LLP, where applicable. Such payments will be supported by valid and verified tax invoices issued by the respective authorized entity."
    },
    {
      "type": "paragraph",
      "text": "Customers are advised to verify the invoice, beneficiary details, and payment instructions before making any payment. No payment should be made to any personal account or to an unauthorized third party claiming to represent the Company or its authorized execution partners."
    },
    {
      "type": "paragraph",
      "text": "Any payment made outside the officially communicated and verified payment channels shall be solely at the payer's risk and responsibility, and EAZYGROW VENTURES PRIVATE LIMITED shall not be liable for unauthorized transactions."
    },
    {
      "type": "paragraph",
      "text": "This General Disclaimer forms an integral part of, and is incorporated by reference into, this document and the Company's other published policies."
    },
    {
      "type": "heading",
      "text": "1. Acceptance of Terms"
    },
    {
      "type": "paragraph",
      "text": "These Terms and Conditions (\"Terms\") govern the use of the website www.essygrow.com and all services provided by EAZYGROW VENTURES PRIVATE LIMITED (\"the Company\", \"we\", \"us\"). By accessing our website, submitting an inquiry, making a payment, or engaging our services, you (\"Client\", \"User\", \"you\") agree to be legally bound by these Terms."
    },
    {
      "type": "paragraph",
      "text": "These Terms constitute a legally binding agreement under the Indian Contract Act, 1872 and the Information Technology Act, 2000. If you do not accept these Terms, you must immediately discontinue use of our website and services."
    },
    {
      "type": "heading",
      "text": "2. Nature of Services — Consultancy Disclaimer"
    },
    {
      "type": "paragraph",
      "text": "The services provided by the Company are:"
    },
    {
      "type": "bullet",
      "text": "Customized and case-specific"
    },
    {
      "type": "bullet",
      "text": "Process-driven and execution-based"
    },
    {
      "type": "bullet",
      "text": "Dependent on client inputs, approvals, and external factors"
    },
    {
      "type": "paragraph",
      "text": "The Company provides services on a best-effort basis and does not guarantee outcomes."
    },
    {
      "type": "paragraph",
      "text": "It is expressly clarified that:"
    },
    {
      "type": "bullet",
      "text": "The Company is a private consultancy and facilitation service provider only, as set out in the General Disclaimer above, and is not a government body and is not affiliated with, endorsed by, or authorized by any government or regulatory authority."
    },
    {
      "type": "bullet",
      "text": "Government fees, portal charges, and statutory payments, if any, are charged separately and are not included in the Company's service fees unless expressly stated in writing."
    },
    {
      "type": "bullet",
      "text": "The client remains solely responsible for ensuring their own compliance with applicable laws and regulations."
    },
    {
      "type": "heading",
      "text": "3. Third-Party Services"
    },
    {
      "type": "bullet",
      "text": "Some services may involve third-party partners, platforms, financial institutions, or government authorities. You may be required to separately accept their terms and conditions."
    },
    {
      "type": "bullet",
      "text": "Such third parties may contact you directly by email, phone, or other channels in connection with the service."
    },
    {
      "type": "bullet",
      "text": "EAZYGROW VENTURES PRIVATE LIMITED is not liable for the products, services, decisions, delays, or privacy practices of any third party, including government authorities, lenders, or certification bodies."
    },
    {
      "type": "bullet",
      "text": "The Company is not responsible for the content or practices of any third-party website linked from its platform."
    },
    {
      "type": "heading",
      "text": "4. Eligibility"
    },
    {
      "type": "bullet",
      "text": "You must be at least 18 years of age and legally capable of entering into a contract under Indian law."
    },
    {
      "type": "bullet",
      "text": "For business services, you must be an authorized representative of the entity for which services are being sought."
    },
    {
      "type": "bullet",
      "text": "You confirm that all information and documents provided to us are true, accurate, complete, and lawfully obtained."
    },
    {
      "type": "heading",
      "text": "5. Service Engagement & Scope"
    },
    {
      "type": "paragraph",
      "text": "5.1 Commencement: services are deemed to have commenced upon receipt of the applicable service fee and submission of the required documents by the client, or upon completion of an onboarding/consultation session, whichever occurs first."
    },
    {
      "type": "paragraph",
      "text": "5.2 Timelines: estimated timelines are indicative only. Final outcomes are subject to government portal availability, regulatory processing times, and the client's timely cooperation in providing documents."
    },
    {
      "type": "paragraph",
      "text": "5.3 Client responsibilities: the client is responsible for providing accurate, complete, and timely information and documents. Any delay, rejection, penalty, or other consequence caused by incorrect, incomplete, or delayed information provided by the client shall not be the liability of the Company, and no claim for refund or compensation shall arise in such cases."
    },
    {
      "type": "paragraph",
      "text": "5.4 Government outcomes: the Company facilitates applications and filings but does not guarantee approval from any government authority, bank, or funding institution. Approval or rejection decisions rest solely with the respective authority."
    },
    {
      "type": "paragraph",
      "text": "5.5 Success Fee: certain funding engagements may attract an additional success-based fee, payable upon disbursement of funds to the client, over and above the upfront plan/service fee. Where applicable, the applicability, rate, and calculation basis of any such success fee shall be as set out in the client's signed engagement letter, proposal, or invoice, agreed in writing before commencement of the specific funding engagement."
    },
    {
      "type": "heading",
      "text": "6. Payments & Authorized Execution Partner"
    },
    {
      "type": "paragraph",
      "text": "All payments must be made strictly in accordance with the Payment & Authorized Execution Partner clause set out in the General Disclaimer at the beginning of this document, which is incorporated into these Terms by reference. In summary:"
    },
    {
      "type": "bullet",
      "text": "Payments must be made only through the Company's officially communicated payment channels, supported by a valid tax invoice issued by EAZYGROW VENTURES PRIVATE LIMITED or, where applicable, by the Company's authorized execution partner, LVC Legalvala Consultancy LLP."
    },
    {
      "type": "bullet",
      "text": "No payment shall be made to any personal account or to any third party not expressly and verifiably authorized in writing by the Company."
    },
    {
      "type": "bullet",
      "text": "Any payment made outside the officially communicated and verified channels is made solely at the payer's risk, and the Company shall bear no liability for such unauthorized transactions."
    },
    {
      "type": "bullet",
      "text": "All service fees are quoted in Indian Rupees (INR) and are inclusive of applicable GST unless stated otherwise. The Company issues a proper GST invoice for all services rendered."
    },
    {
      "type": "heading",
      "text": "7. Confidentiality"
    },
    {
      "type": "paragraph",
      "text": "Both parties agree to maintain strict confidentiality of all information shared during the service engagement. The Company will not disclose the client's business, financial, or personal information to any unauthorized third party. The client similarly agrees not to disclose the Company's proprietary methods, documentation templates, or internal processes."
    },
    {
      "type": "heading",
      "text": "8. Intellectual Property Rights"
    },
    {
      "type": "paragraph",
      "text": "All content on the Company's website, including text, graphics, logos, reports, pitch deck templates, and service-documentation frameworks, is the exclusive intellectual property of EAZYGROW VENTURES PRIVATE LIMITED. No part of it may be copied, reproduced, distributed, or used to create derivative works without prior written permission."
    },
    {
      "type": "paragraph",
      "text": "Documents prepared specifically for a client (for example, custom pitch decks or project reports) become the property of that client only upon full and final payment of the applicable service fees."
    },
    {
      "type": "heading",
      "text": "9. User Obligations & Prohibited Uses"
    },
    {
      "type": "paragraph",
      "text": "You agree that you shall not:"
    },
    {
      "type": "bullet",
      "text": "Provide false, misleading, incomplete, or fraudulent information or documents"
    },
    {
      "type": "bullet",
      "text": "Attempt to obtain any certification, registration, or funding approval through fraudulent means"
    },
    {
      "type": "bullet",
      "text": "Engage in any activity that violates Indian law or any applicable regulation"
    },
    {
      "type": "bullet",
      "text": "Copy, scrape, reproduce, or otherwise misuse content from the Company's website without authorization"
    },
    {
      "type": "bullet",
      "text": "Impersonate any person, entity, or government official"
    },
    {
      "type": "bullet",
      "text": "Upload or transmit any defamatory, obscene, unlawful, or harmful content, or any malware or virus"
    },
    {
      "type": "bullet",
      "text": "Attempt unauthorized access to the Company's systems or interfere with its security"
    },
    {
      "type": "paragraph",
      "text": "Violation of any of the above may result in immediate suspension or termination of services without refund, and without prejudice to any other right or remedy available to the Company."
    },
    {
      "type": "heading",
      "text": "10. Electronic Records & Signatures"
    },
    {
      "type": "paragraph",
      "text": "By using the Company's Services, you authorize EAZYGROW VENTURES PRIVATE LIMITED to affix your electronic signature where required for service-related documentation, unless such authorization is withdrawn in writing before the relevant document is submitted or processed."
    },
    {
      "type": "heading",
      "text": "11. Reviews & User Content"
    },
    {
      "type": "paragraph",
      "text": "By submitting a review, testimonial, comment, or other content through the Company's website or associated channels, you grant EAZYGROW VENTURES PRIVATE LIMITED a non-exclusive, royalty-free, perpetual licence to use, display, reproduce, and publish such content for marketing, promotional, or operational purposes. You may request removal of a submitted testimonial by writing to the Company, and reasonable efforts will be made to accommodate such requests."
    },
    {
      "type": "heading",
      "text": "12. Limitation of Liability"
    },
    {
      "type": "paragraph",
      "text": "To the maximum extent permitted under applicable law, the aggregate liability of EAZYGROW VENTURES PRIVATE LIMITED, its directors, employees, consultants, and affiliates, arising out of or in connection with any service, shall not exceed the total service fee actually paid by the client for the specific service giving rise to the claim."
    },
    {
      "type": "paragraph",
      "text": "The Company shall not, under any circumstances, be liable for:"
    },
    {
      "type": "bullet",
      "text": "Loss of business, revenue, profits, or goodwill arising from government rejection, delay, or discretion"
    },
    {
      "type": "bullet",
      "text": "Any consequence arising from incorrect, incomplete, or delayed information or documents provided by the client"
    },
    {
      "type": "bullet",
      "text": "Any third-party act or omission, including lender decisions, government portal downtime, or changes in law or policy"
    },
    {
      "type": "bullet",
      "text": "Any indirect, incidental, special, consequential, or punitive damages of any kind, even if the Company has been advised of the possibility of such damages"
    },
    {
      "type": "heading",
      "text": "13. Indemnification"
    },
    {
      "type": "paragraph",
      "text": "The client agrees to indemnify, defend, and hold harmless EAZYGROW VENTURES PRIVATE LIMITED, its directors, employees, consultants, and affiliates from and against any claims, damages, liabilities, costs, penalties, and expenses (including reasonable legal fees) arising from:"
    },
    {
      "type": "bullet",
      "text": "The client's use of the Company's website or services"
    },
    {
      "type": "bullet",
      "text": "The client's breach of these Terms"
    },
    {
      "type": "bullet",
      "text": "The submission of false, inaccurate, incomplete, or fraudulent information or documents by the client"
    },
    {
      "type": "bullet",
      "text": "Infringement of any third-party right by the client"
    },
    {
      "type": "heading",
      "text": "14. Force Majeure"
    },
    {
      "type": "paragraph",
      "text": "The Company shall not be liable for any failure or delay in service delivery caused by circumstances beyond its reasonable control, including but not limited to government portal outages, changes in government policy or law, natural calamities, pandemics, strikes, power or internet outages, or acts of God. The Company will make reasonable efforts to resume performance as soon as practicable."
    },
    {
      "type": "heading",
      "text": "15. Termination"
    },
    {
      "type": "paragraph",
      "text": "The Company reserves the right to suspend or terminate services at any time, without liability, if the client is found to be providing fraudulent information, engaging in unlawful activity, or violating these Terms. In such cases, the applicable refund terms, if any, shall be governed exclusively by the Company's separately published Refund & Cancellation Policy."
    },
    {
      "type": "heading",
      "text": "16. Dispute Resolution & Governing Law"
    },
    {
      "type": "paragraph",
      "text": "Any dispute, difference, or claim arising out of or in connection with these Terms shall first be attempted to be resolved amicably through mutual discussion. If unresolved within thirty (30) days, the dispute shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996, with the seat and venue of arbitration at Ahmedabad, Gujarat. The arbitration award shall be final and binding on both parties."
    },
    {
      "type": "paragraph",
      "text": "These Terms shall be governed by and construed in accordance with the laws of India, and, subject to the arbitration clause above, shall be subject to the exclusive jurisdiction of the courts at Ahmedabad, Gujarat."
    },
    {
      "type": "heading",
      "text": "17. Grievance Redressal"
    },
    {
      "type": "paragraph",
      "text": "Any query, concern, or grievance regarding services availed may be sent to info@essygrow.com from the client's registered email address, stating the client's name, the service availed, and the nature of the grievance. Grievances will be acknowledged within 48 hours and addressed in accordance with these Terms."
    },
    {
      "type": "heading",
      "text": "18. Disclaimer"
    },
    {
      "type": "paragraph",
      "text": "EAZYGROW VENTURES PRIVATE LIMITED is a private consultancy firm and is not affiliated with, endorsed by, or acting as an agent of any government body, including the Ministry of MSME, DPIIT, GSTN, MCA, or any other government entity. All registrations and certifications are facilitated through official government portals on behalf of the client. Information provided on the Company's website is for general informational purposes only and does not constitute legal or financial advice."
    },
    {
      "type": "heading",
      "text": "19. Modifications to Terms"
    },
    {
      "type": "paragraph",
      "text": "The Company reserves the right to modify, amend, or update these Terms at any time. Revised Terms take effect from the date of publication on the website. Continued use of the website or services after such changes constitutes acceptance of the revised Terms."
    },
    {
      "type": "heading",
      "text": "20. Contact Us"
    },
    {
      "type": "bullet",
      "text": "Email: info@essygrow.com"
    },
    {
      "type": "bullet",
      "text": "Phone / WhatsApp: +91 7041894751"
    },
    {
      "type": "bullet",
      "text": "Business Hours: Monday to Saturday, 10:00 AM to 6:30 PM IST"
    },
    {
      "type": "bullet",
      "text": "Address: 315 Sahitya Arcade, Ahmedabad, Gujarat, India"
    }
  ],
  "copyright": "Copyright © 2026 EAZYGROW VENTURES PRIVATE LIMITED. All rights reserved."
};
