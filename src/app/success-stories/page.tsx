import React from 'react';
import {
  Users,
  TrendingUp,
  Award,
  MapPin,
  Star,
  CheckCircle,
  Quote,
  Target,
  Rocket,
  Shield,
  Briefcase,
  Globe,
  Heart
} from 'lucide-react';

const SuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      initials: "SK",
      name: "Suresh Kumar",
      title: "Agriculture Entrepreneur",
      grant: "₹15 Lakhs",
      scheme: "PMEGP Government Grant",
      quote: "The government grant scheme was a game-changer for my agricultural business. The team's expertise in navigating PMEGP applications and ensuring all compliance requirements were met made the entire process stress-free. I received the full grant amount without any hassles.",
      achievement: "Started with 5 acres, now managing 20 acres with modern equipment",
      icon: <Target className="w-4 h-4" />,
      category: "Agriculture"
    },
    {
      id: 2,
      initials: "KR",
      name: "Kavita Reddy",
      title: "Handicrafts Entrepreneur",
      grant: "₹10 Lakhs",
      scheme: "Mudra Scheme + CGTMSE",
      quote: "Accessing government grants seemed impossible until I found this team. They explained every detail of the Mudra scheme, helped with documentation, and even guided me through the collateral-free loan process. The grant transformed my small home business into a thriving enterprise.",
      achievement: "Expanded from local markets to national e-commerce platforms",
      icon: <Heart className="w-4 h-4" />,
      category: "Handicrafts"
    },
    {
      id: 3,
      initials: "RV",
      name: "Rajesh Verma",
      title: "Renewable Energy Entrepreneur",
      grant: "₹35 Lakhs",
      scheme: "Stand Up India Grant",
      quote: "The Stand Up India scheme opened doors I never knew existed. The professional guidance I received was exceptional - from application to disbursement, every step was handled with care. The team's knowledge of government schemes and their requirements saved me months of effort.",
      achievement: "Completed 200+ installations, creating green jobs in rural areas",
      icon: <Globe className="w-4 h-4" />,
      category: "Renewable Energy"
    },
    {
      id: 4,
      initials: "RG",
      name: "Ramesh Gupta",
      title: "Manufacturing Entrepreneur",
      grant: "Startup India",
      scheme: "Startup India Registration",
      quote: "The Startup India registration process was incredibly smooth with their expert guidance. They helped us unlock tax benefits, easier compliance, and access to government tenders. The team's knowledge of startup ecosystem saved us countless hours of research.",
      achievement: "300% revenue growth in 2 years",
      icon: <Rocket className="w-4 h-4" />,
      category: "Manufacturing"
    },
    {
      id: 5,
      initials: "PS",
      name: "Priya Sharma",
      title: "Technology Entrepreneur",
      grant: "Pvt Ltd Registration",
      scheme: "Private Limited Company",
      quote: "Registering our Private Limited Company was seamless with their professional support. Every legal requirement was explained clearly, and all documentation was handled perfectly. Their expertise gave me confidence to focus on building my business instead of worrying about compliance.",
      achievement: "From idea to ₹5 Cr valuation in 18 months",
      icon: <TrendingUp className="w-4 h-4" />,
      category: "Technology"
    },
    {
      id: 6,
      initials: "MAK",
      name: "Mohammad Ali Khan",
      title: "Export Entrepreneur",
      grant: "One Person Company",
      scheme: "OPC Registration",
      quote: "The OPC registration was perfect for my solo export venture. The team guided me through the entire process, from name approval to incorporation certificate. Their understanding of export business requirements and company formation made everything hassle-free.",
      achievement: "500% export volume increase",
      icon: <Briefcase className="w-4 h-4" />,
      category: "Export"
    },
    {
      id: 7,
      initials: "AP",
      name: "Anjali Patel",
      title: "Business Services Entrepreneur",
      grant: "Company Registration",
      scheme: "Pvt Ltd Company",
      quote: "The business registration process was seamless and transparent. Every document was prepared professionally, and I received constant updates. They handled everything from name approval to GST registration effortlessly.",
      achievement: "Legally compliant business operations from day one",
      icon: <Shield className="w-4 h-4" />,
      category: "Business Services"
    },
    {
      id: 8,
      initials: "VS",
      name: "Vikram Singh",
      title: "Food & Beverage Entrepreneur",
      grant: "LLP Registration",
      scheme: "LLP + FSSAI License",
      quote: "I was overwhelmed by the legal requirements for food business. The team not only registered our LLP but also guided us through FSSAI licensing and other regulatory approvals. Professional service at every step.",
      achievement: "Zero compliance issues, smooth business operations",
      icon: <Award className="w-4 h-4" />,
      category: "Food & Beverage"
    },
    {
      id: 9,
      initials: "NA",
      name: "Neha Agarwal",
      title: "Technology Entrepreneur",
      grant: "Custom Software",
      scheme: "App Development",
      quote: "They transformed our traditional business into a digital powerhouse. The custom software solution perfectly matched our workflow, and the mobile app helped us reach customers we never could before. Excellent technical expertise.",
      achievement: "40% operational efficiency improvement, 60% cost reduction",
      icon: <TrendingUp className="w-4 h-4" />,
      category: "Technology"
    }
  ];

  const stats = [
    {
      value: "20,000+",
      label: "Businesses Served",
      description: "Across India",
      icon: <Users className="w-6 h-6" />
    },
    {
      value: "120+ Crores",
      label: "Total Funding",
      description: "Facilitated",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      value: "95%",
      label: "Success Rate",
      description: "Client Satisfaction",
      icon: <Award className="w-6 h-6" />
    },
    {
      value: "28/36",
      label: "States Covered",
      description: "Pan India Presence",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  const categories = [
    "All", "Agriculture", "Technology", "Manufacturing", "Export", 
    "Handicrafts", "Food & Beverage", "Business Services", "Renewable Energy"
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming <span className="text-gradient bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Businesses Across India
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from entrepreneurs who chose our services to fuel their business growth and achieve their dreams
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === "All"
                  ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">5.0</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                    {testimonial.icon}
                  </div>
                </div>

                {/* Grant Info */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs font-semibold mb-2">
                    <CheckCircle className="w-3 h-3" />
                    {testimonial.category}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">{testimonial.grant}</span>
                    <span className="text-sm text-gray-600">{testimonial.scheme}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200 opacity-50" />
                  <p className="text-gray-700 italic relative z-10 pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Achievement */}
                <div className="p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200">
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-gray-600 uppercase">Achievement</span>
                      <p className="text-sm text-gray-800">{testimonial.achievement}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section - Fixed Version */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-emerald-600 to-green-600 opacity-95" />
          
          {/* Simplified Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          <div className="relative px-8 py-12 md:py-16 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Your Success Story Awaits
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Write Your <span className="text-yellow-300">Success Story</span>?
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful entrepreneurs who chose our expert services to transform their business dreams into reality
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Journey
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  Talk to Expert
                </button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5-Star Rated Service</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-300" />
                  <span className="font-medium">Government Certified</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-300" />
                  <span className="font-medium">95% Success Rate</span>
                </div>
              </div>

              {/* Stats Banner */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">20,000+</div>
                    <div className="text-sm text-blue-200">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">₹120Cr+</div>
                    <div className="text-sm text-blue-200">Funding Secured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-blue-200">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">28/36</div>
                    <div className="text-sm text-blue-200">States Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Trusted by entrepreneurs across industries</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-75">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Agriculture</div>
              <div className="text-sm text-gray-600">500+ Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Technology</div>
              <div className="text-sm text-gray-600">1200+ Startups</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Manufacturing</div>
              <div className="text-sm text-gray-600">800+ Units</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Services</div>
              <div className="text-sm text-gray-600">1500+ Businesses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;