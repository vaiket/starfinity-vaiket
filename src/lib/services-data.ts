export type ServiceItem = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  bestFor: string[];
  process: string[];
  timeline: string;
  range: string;
};

export const serviceItems: ServiceItem[] = [
  {
    slug: "working-capital",
    title: "Working Capital",
    subtitle: "Cash Flow Support",
    shortDescription: "Keep daily operations smooth with flexible business liquidity solutions.",
    description:
      "Short-term funding support to manage inventory cycles, vendor payments, salaries, and day-to-day operating expenses without stress.",
    highlights: [
      "Collateral-light options from partner lenders",
      "Fast document screening and lender matching",
      "Repayment structures aligned to business cash cycles",
      "Dedicated coordinator till disbursal",
    ],
    bestFor: ["Retail and trading units", "Seasonal demand businesses", "Growing MSMEs"],
    process: ["Eligibility check", "Document fitment", "Lender comparison", "Sanction and disbursal"],
    timeline: "4-8 working days",
    range: "INR 5L to INR 2Cr+",
  },
  {
    slug: "term-loan",
    title: "Term Loan",
    subtitle: "Business Expansion",
    shortDescription: "Scale capacity, infrastructure, and assets through structured term lending.",
    description:
      "Medium to long tenure financing designed for machinery, branch expansion, plant setup, and other growth-focused capital expenses.",
    highlights: [
      "ROI-led loan structuring for healthy EMIs",
      "Support for machinery and capex financing",
      "Negotiation for better rate and tenure mix",
      "End-to-end lender documentation readiness",
    ],
    bestFor: ["Manufacturing units", "Established service businesses", "Expansion-stage companies"],
    process: ["Project profiling", "Financial packaging", "Bank/NBFC routing", "Sanction closure"],
    timeline: "7-14 working days",
    range: "INR 10L to INR 10Cr+",
  },
  {
    slug: "startup-funding",
    title: "Startup Funding",
    subtitle: "Early Stage Growth",
    shortDescription: "Right capital path for early traction, product scaling, and market entry.",
    description:
      "Funding readiness advisory and investor-facing support for startups looking to raise early stage institutional or structured debt capital.",
    highlights: [
      "Pitch and financial story alignment",
      "Fundraise pathway based on stage and traction",
      "Investor and lender preparation support",
      "Clear milestone-based capital planning",
    ],
    bestFor: ["Pre-seed to growth startups", "D2C and SaaS founders", "Tech-enabled MSMEs"],
    process: ["Readiness audit", "Pitch and finance prep", "Investor/lender outreach", "Negotiation support"],
    timeline: "2-6 weeks",
    range: "INR 25L to INR 15Cr+",
  },
  {
    slug: "government-schemes",
    title: "Government Schemes",
    subtitle: "Subsidy Linked",
    shortDescription: "Discover and activate applicable central/state benefit-led financing schemes.",
    description:
      "Scheme discovery, paperwork fitment, and application handling for eligible government-backed support programs and credit-linked incentives.",
    highlights: [
      "Scheme mapping based on business profile",
      "Subsidy and benefit eligibility filtering",
      "Application documentation and filing support",
      "Coordination with banks and nodal channels",
    ],
    bestFor: ["First-time borrowers", "Women and SC/ST entrepreneurs", "Manufacturing and rural initiatives"],
    process: ["Scheme mapping", "Eligibility validation", "Application filing", "Tracking and closure"],
    timeline: "10-30 working days",
    range: "Scheme dependent",
  },
  {
    slug: "angel-investment",
    title: "Angel Investment",
    subtitle: "Investor Network",
    shortDescription: "Connect with curated angel networks for strategic early growth capital.",
    description:
      "Investor readiness plus warm-network introductions for founders seeking smart capital, strategic guidance, and market access support.",
    highlights: [
      "Business narrative refinement for investor confidence",
      "Curated introductions via aligned sectors",
      "Term sheet guidance and negotiation support",
      "Founder positioning for follow-on rounds",
    ],
    bestFor: ["High-growth startups", "Innovative products with traction", "Teams preparing seed rounds"],
    process: ["Investor-fit audit", "Deck and data room prep", "Introductions and meetings", "Term-sheet support"],
    timeline: "3-8 weeks",
    range: "INR 50L to INR 20Cr+",
  },
  {
    slug: "credit-advisory",
    title: "Credit Advisory",
    subtitle: "Profile Improvement",
    shortDescription: "Improve creditworthiness and funding readiness before lender applications.",
    description:
      "Structured advisory to strengthen credit profile, documentation quality, and banking behaviour so approvals become faster and more reliable.",
    highlights: [
      "Credit gap diagnosis and action roadmap",
      "Banking and compliance hygiene recommendations",
      "Financial statement quality improvement guidance",
      "Pre-lender audit before fresh application",
    ],
    bestFor: ["Businesses facing rejection history", "Founders with thin credit files", "Teams planning larger ticket loans"],
    process: ["Credit scan", "Gap mapping", "Improvement sprint", "Re-application strategy"],
    timeline: "1-4 weeks",
    range: "Advisory service",
  },
];

export const serviceBySlug = Object.fromEntries(serviceItems.map((service) => [service.slug, service])) as Record<
  string,
  ServiceItem
>;
