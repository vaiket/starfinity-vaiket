import React from 'react';
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Users, 
  Award,
  TrendingUp,
  FileText,
  Building,
  PieChart,
  Code,
  CreditCard,
  FileCheck,
  ChevronRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Government Schemes",
      tag: "Government Approved",
      description: "Access to various government funding and support schemes with expert guidance",
      features: [
        "PMEGP (Prime Minister Employment Generation Programme)",
        "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
        "Mudra Loans",
        "Stand Up India"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "bg-blue-50 border-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Company Registration",
      tag: "High Demand",
      description: "Complete company incorporation with ROC filing and comprehensive documentation support",
      features: [
        "Private Limited Company Setup",
        "LLP Registration Services",
        "Sole Proprietorship Formation",
        "Partnership Firm Registration"
      ],
      icon: <Building className="w-6 h-6" />,
      color: "bg-emerald-50 border-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      id: 3,
      title: "Financial Advisory",
      tag: "Expert Led",
      description: "Strategic financial consulting and advisory services from certified experts",
      features: [
        "Business Plan Development",
        "Financial Projections",
        "Valuation Services",
        "Due Diligence"
      ],
      icon: <PieChart className="w-6 h-6" />,
      color: "bg-purple-50 border-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      title: "Software Development",
      tag: "Digital Transformation",
      description: "Custom software solutions to digitize and scale your business operations efficiently",
      features: [
        "Business Website Development",
        "E-commerce Platform Setup",
        "Mobile App Development",
        "CRM System Implementation"
      ],
      icon: <Code className="w-6 h-6" />,
      color: "bg-cyan-50 border-cyan-100",
      iconColor: "text-cyan-600"
    },
    {
      id: 5,
      title: "Business Loans",
      tag: "Most Popular",
      description: "Comprehensive lending solutions for all business needs with competitive interest rates",
      features: [
        "Working Capital Loans",
        "Term Loans",
        "Equipment Financing",
        "Invoice Discounting"
      ],
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-amber-50 border-amber-100",
      iconColor: "text-amber-600"
    },
    {
      id: 6,
      title: "GST Certificate",
      tag: "Essential Service",
      description: "Complete GST registration and compliance services for seamless business operations",
      features: [
        "GST Registration Process",
        "Monthly GST Return Filing",
        "Annual GST Compliance",
        "Input Tax Credit Optimization"
      ],
      icon: <FileText className="w-6 h-6" />,
      color: "bg-green-50 border-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 7,
      title: "Company Compliances",
      tag: "Ongoing Support",
      description: "End-to-end compliance management ensuring your business stays legally compliant",
      features: [
        "Annual Filing & Returns",
        "Board Resolution Drafting",
        "Statutory Audit Coordination",
        "License Renewal Services"
      ],
      icon: <FileCheck className="w-6 h-6" />,
      color: "bg-indigo-50 border-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free expert consultation to understand your specific business requirements and goals"
    },
    {
      step: "02",
      title: "Detailed Assessment",
      description: "Comprehensive analysis of eligibility criteria and best-fit solution identification"
    },
    {
      step: "03",
      title: "Application Processing",
      description: "Complete handling of documentation, applications, and regulatory compliance"
    },
    {
      step: "04",
      title: "Success & Support",
      description: "Approval achievement with ongoing support and business advisory services"
    }
  ];

  const stats = [
    {
      value: "150+",
      label: "Expert Professionals",
      description: "Certified consultants and advisors",
      icon: <Users className="w-5 h-5" />
    },
    {
      value: "48 hours",
      label: "Quick Processing",
      description: "Average application processing time",
      icon: <Clock className="w-5 h-5" />
    },
    {
      value: "95%",
      label: "Success Rate",
      description: "Application approval success rate",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      value: "28/36",
      label: "National Presence",
      description: "States and territories covered",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "100% Secure" },
    { icon: <Clock className="w-5 h-5" />, text: "48hr Processing" },
    { icon: <Users className="w-5 h-5" />, text: "25,000+ Clients" },
    { icon: <Award className="w-5 h-5" />, text: "Government Approved" }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Government Recognized Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Business Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive solutions designed to accelerate your business growth with government-backed schemes and expert financial guidance
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                {feature.icon}
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`${service.color} border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${service.iconColor} bg-white`}>
                    {service.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white text-gray-700 border">
                      {service.tag}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 px-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2">
                Start Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">Streamlined Process</span>
          </h2>
          
          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4 relative z-10 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-blue-600">STARTFINITY</span>?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Trusted by thousands of businesses across India for reliable and result-oriented services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of successful entrepreneurs who have accelerated their growth with our expert services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Your Application
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                Get Expert Consultation
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Government Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;