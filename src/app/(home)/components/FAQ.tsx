"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail,
  BookOpen,
  FileText,
  Clock,
  Shield,
  HelpCircle,
  Star,
  Zap,
  CheckCircle,
  TrendingUp,
  Building2,
  Users,
  Target
} from "lucide-react";

const faqCategories = [
  { id: "all", label: "All Questions", icon: <HelpCircle className="w-4 h-4" />, count: 28 },
  { id: "eligibility", label: "Eligibility", icon: <Target className="w-4 h-4" />, count: 8 },
  { id: "documents", label: "Documents", icon: <FileText className="w-4 h-4" />, count: 6 },
  { id: "process", label: "Application Process", icon: <BookOpen className="w-4 h-4" />, count: 7 },
  { id: "schemes", label: "Schemes", icon: <Building2 className="w-4 h-4" />, count: 10 },
  { id: "repayment", label: "Repayment", icon: <TrendingUp className="w-4 h-4" />, count: 5 },
];

const faqData = [
  {
    id: 1,
    question: "What are the basic eligibility criteria for MSME funding?",
    answer: "The basic eligibility criteria include: 1) Business should be registered in India, 2) Minimum business vintage of 6 months, 3) Minimum annual turnover of ₹5 lakhs, 4) Business should be in profitable condition for at least 6 months, 5) No major defaults in credit history. Additional criteria may apply based on specific schemes.",
    category: "eligibility",
    tags: ["Eligibility", "MSME", "Requirements"],
    helpful: 245,
  },
  {
    id: 2,
    question: "What documents are required for MSME loan application?",
    answer: "The basic document checklist includes: 1) Business registration proof (GST, Udyam, Shop Act), 2) KYC documents (PAN, Aadhaar, Address proof), 3) Business financials (Bank statements for 6 months, ITR for 2 years), 4) Business ownership proof, 5) Project report (for loans above ₹10 lakhs), 6) Property documents (if collateral is offered).",
    category: "documents",
    tags: ["Documents", "Checklist", "Paperwork"],
    helpful: 189,
  },
  {
    id: 3,
    question: "How long does the funding approval process take?",
    answer: "Standard processing time is 7-21 working days depending on the scheme: 1) Mudra Loan: 7-10 days, 2) CGTMSE: 15-20 days, 3) Startup India: 30-45 days, 4) Emergency credit: 10-15 days. With our expert assistance, we can expedite the process by 30-40%.",
    category: "process",
    tags: ["Timeline", "Processing", "Approval"],
    helpful: 312,
  },
  {
    id: 4,
    question: "Do I need collateral for MSME loans?",
    answer: "Many government schemes like Mudra Yojana (up to ₹10L), CGTMSE (up to ₹2Cr), and Stand Up India are collateral-free. However, for larger amounts or conventional bank loans, collateral or third-party guarantee may be required. Our experts can help you find the best collateral-free options.",
    category: "eligibility",
    tags: ["Collateral-free", "Guarantee", "Security"],
    helpful: 156,
  },
  {
    id: 5,
    question: "What's the difference between Mudra Loan and CGTMSE?",
    answer: "Mudra Loan is for micro enterprises (up to ₹10L) with simpler documentation, while CGTMSE provides credit guarantee for loans up to ₹10Cr. Mudra is disbursed through banks/NBFCs, while CGTMSE is a guarantee scheme that banks use to provide collateral-free loans.",
    category: "schemes",
    tags: ["Mudra", "CGTMSE", "Comparison"],
    helpful: 278,
  },
  {
    id: 6,
    question: "Can startups without revenue apply for funding?",
    answer: "Yes, startups can apply through schemes like Startup India Seed Fund (up to ₹50L), Atal Innovation Mission, and various state startup policies. These schemes focus on business potential, innovation, and team credentials rather than historical revenue.",
    category: "eligibility",
    tags: ["Startups", "Seed Funding", "Innovation"],
    helpful: 193,
  },
  {
    id: 7,
    question: "What interest rates can I expect on MSME loans?",
    answer: "Interest rates vary by scheme: 1) Mudra Loan: 8.5-12% p.a., 2) CGTMSE: 9-13% p.a., 3) Bank loans: 10-16% p.a., 4) Government schemes: 7-10% p.a. (with subsidies). We help negotiate the best rates based on your credit profile.",
    category: "repayment",
    tags: ["Interest Rates", "Cost", "EMI"],
    helpful: 224,
  },
  {
    id: 8,
    question: "How can I improve my chances of loan approval?",
    answer: "To improve approval chances: 1) Maintain clean bank statements, 2) File ITR regularly, 3) Keep good CIBIL score (700+), 4) Prepare a detailed business plan, 5) Maintain proper business records, 6) Clear existing dues, 7) Use our expert documentation service.",
    category: "process",
    tags: ["Approval Tips", "Success Rate", "Preparation"],
    helpful: 267,
  },
  {
    id: 9,
    question: "What is the maximum loan amount I can get?",
    answer: "Maximum amounts vary: 1) Mudra Tarun: ₹10L, 2) CGTMSE: ₹10Cr, 3) Stand Up India: ₹1Cr, 4) MSME loans: ₹50Cr+, 5) Export finance: No upper limit. The actual amount depends on business turnover, credit history, and scheme eligibility.",
    category: "eligibility",
    tags: ["Loan Amount", "Limits", "Funding"],
    helpful: 189,
  },
  {
    id: 10,
    question: "Can I get funding for equipment purchase?",
    answer: "Yes, through schemes like: 1) CLCSS (15% subsidy on machinery), 2) PMEGP (up to 35% subsidy), 3) Term loans from banks, 4) Equipment financing from NBFCs. We help with end-to-end process including vendor selection and subsidy claims.",
    category: "schemes",
    tags: ["Equipment", "Machinery", "Subsidy"],
    helpful: 156,
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "" 
  });

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: number) => {
    setOpenFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! Our team will contact you within 2 hours.");
    setShowContactForm(false);
    setContactData({ name: "", email: "", phone: "", message: "" });
  };

  const popularFaqs = faqData.sort((a, b) => b.helpful - a.helpful).slice(0, 3);

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#414288]/10 text-[#414288] px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find Answers to Your Funding Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Get instant answers to 28 most common questions about MSME funding, schemes, and process
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers (e.g., 'eligibility', 'documents', 'interest rates')"
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
              style={{ focusRingColor: '#414288' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories & Popular */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Browse by Category</h3>
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-[#414288] text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span>{category.icon}</span>
                      <span>{category.label}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Questions */}
            <div className="bg-gradient-to-br from-[#B0DB43]/5 to-transparent border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5" style={{ color: '#B0DB43' }} />
                <h3 className="font-bold text-gray-900">Most Helpful FAQs</h3>
              </div>
              <div className="space-y-4">
                {popularFaqs.map((faq) => (
                  <div 
                    key={faq.id}
                    className="group cursor-pointer"
                    onClick={() => {
                      setOpenFaqs([faq.id]);
                      const element = document.getElementById(`faq-${faq.id}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <div className="text-sm font-medium text-gray-900 group-hover:text-[#414288] transition-colors line-clamp-2">
                      {faq.question}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3" style={{ color: '#B0DB43' }} />
                        {faq.helpful} found helpful
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-[#414288]/5 to-transparent border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                {[
                  { label: "Avg. Response Time", value: "2 hours", icon: <Clock className="w-4 h-4" /> },
                  { label: "Questions Answered", value: "5,000+", icon: <MessageCircle className="w-4 h-4" /> },
                  { label: "Success Rate", value: "99%", icon: <TrendingUp className="w-4 h-4" /> },
                  { label: "Expert Support", value: "24/7", icon: <Shield className="w-4 h-4" /> },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: index % 2 === 0 ? '#414288' : '#B0DB43' }}>
                        <div className="text-white">{stat.icon}</div>
                      </div>
                      <span className="text-sm text-gray-700">{stat.label}</span>
                    </div>
                    <span className="font-bold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main FAQ Content */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {searchQuery ? "Search Results" : "Common Questions"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {filteredFaqs.length} questions found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#B0DB43' }}
              >
                <MessageCircle className="w-4 h-4" />
                Ask Your Question
              </button>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    id={`faq-${faq.id}`}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex-shrink-0">
                            {openFaqs.includes(faq.id) ? (
                              <ChevronUp className="w-5 h-5" style={{ color: '#414288' }} />
                            ) : (
                              <ChevronDown className="w-5 h-5" style={{ color: '#414288' }} />
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">{faq.question}</h4>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 ml-8">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <CheckCircle className="w-3 h-3" style={{ color: '#B0DB43' }} />
                            {faq.helpful} found helpful
                          </div>
                          <span className="text-xs text-gray-400">•</span>
                          <div className="flex flex-wrap gap-1">
                            {faq.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs px-2 py-1 rounded-full"
                                style={{ 
                                  backgroundColor: index % 2 === 0 ? '#414288' : '#B0DB43',
                                  color: index % 2 === 0 ? 'white' : '#1a1a1a'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                    
                    {openFaqs.includes(faq.id) && (
                      <div className="px-6 pb-6 ml-8 border-l-2 border-[#B0DB43] pl-6">
                        <div className="prose prose-sm max-w-none">
                          <p className="text-gray-700 mb-4">{faq.answer}</p>
                          
                          {/* Helpful Buttons */}
                          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#414288] transition-colors">
                              <CheckCircle className="w-4 h-4" />
                              <span>Helpful ({faq.helpful})</span>
                            </button>
                            <button 
                              className="text-sm text-gray-600 hover:text-[#414288] transition-colors"
                              onClick={() => {
                                setShowContactForm(true);
                                setContactData(prev => ({ 
                                  ...prev, 
                                  message: `Regarding: ${faq.question}\n\n` 
                                }));
                              }}
                            >
                              Need more details?
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#414288' }}>
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">No questions found</h4>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any questions matching "{searchQuery}"
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: '#B0DB43' }}
                  >
                    View All Questions
                  </button>
                </div>
              )}
            </div>

            {/* Contact Form Modal */}
            {showContactForm && (
              <>
                <div 
                  className="fixed inset-0 bg-black/50 z-40" 
                  onClick={() => setShowContactForm(false)} 
                />
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Ask Your Question</h3>
                      <p className="text-gray-600 text-sm">Our experts will respond within 2 hours</p>
                    </div>
                    <button
                      onClick={() => setShowContactForm(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={contactData.name}
                        onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none transition-colors text-gray-900"
                        style={{ focusRingColor: '#414288' }}
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={contactData.email}
                          onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none transition-colors text-gray-900"
                          placeholder="you@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          value={contactData.phone}
                          onChange={(e) => setContactData(prev => ({ ...prev, phone: e.target.value }))}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none transition-colors text-gray-900"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Question
                      </label>
                      <textarea
                        value={contactData.message}
                        onChange={(e) => setContactData(prev => ({ ...prev, message: e.target.value }))}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none transition-colors text-gray-900 resize-none"
                        placeholder="Please describe your question in detail..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: '#414288' }}
                    >
                      Submit Question
                    </button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" style={{ color: '#B0DB43' }} />
                      <div>
                        <div className="text-sm font-medium text-gray-900">Prefer to call?</div>
                        <a href="tel:+919157142657" className="text-lg font-bold" style={{ color: '#414288' }}>
                          +91 9157142657
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Bottom CTA */}
            <div className="mt-12 p-8 rounded-2xl text-center" style={{ backgroundColor: '#414288' }}>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
                <p className="text-white/90 mb-6">
                  Our funding experts are available 24/7 to answer your specific questions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+919157142657"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#414288] px-6 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="inline-flex items-center justify-center gap-2 bg-[#B0DB43] text-gray-900 px-6 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Complete Document Checklist",
                description: "Download our comprehensive checklist for all funding schemes",
                icon: <FileText className="w-6 h-6" />,
                action: "Download PDF",
                color: "bg-[#414288]"
              },
              {
                title: "Funding Eligibility Calculator",
                description: "Check which schemes you qualify for in 2 minutes",
                icon: <Target className="w-6 h-6" />,
                action: "Check Eligibility",
                color: "bg-[#B0DB43]"
              },
              {
                title: "Expert Consultation",
                description: "Book a free 30-minute session with our funding expert",
                icon: <Users className="w-6 h-6" />,
                action: "Book Now",
                color: "bg-[#414288]"
              },
            ].map((resource, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white ${resource.color}`}>
                  {resource.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <button className="text-sm font-semibold" style={{ color: '#414288' }}>
                  {resource.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}