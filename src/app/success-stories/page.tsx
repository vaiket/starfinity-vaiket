"use client";

import React, { useState, useEffect } from 'react';
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
import { Bricolage_Grotesque } from 'next/font/google';
import { Source_Serif_4 } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

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
  },
  {
    id: 10,
    initials: "DP",
    name: "Deepak Patel",
    title: "Agriculture Entrepreneur",
    grant: "₹25 Lakhs",
    scheme: "Agriculture Infrastructure Fund",
    quote: "The Agriculture Infrastructure Fund helped me modernize my farm with cold storage and processing units. The team's deep understanding of agricultural financing schemes and their professional documentation support made the approval process smooth.",
    achievement: "Established cold storage facility, reduced post-harvest losses by 80%",
    icon: <Target className="w-4 h-4" />,
    category: "Agriculture"
  },
  {
    id: 11,
    initials: "SKM",
    name: "Sunita Kumari Mehta",
    title: "Manufacturing Entrepreneur",
    grant: "₹50 Lakhs",
    scheme: "Credit Guarantee Scheme",
    quote: "Getting collateral-free funding for my manufacturing unit seemed impossible until I approached EazyGrow. Their expertise in CGTMSE scheme and thorough documentation helped me secure the funding without pledging any assets.",
    achievement: "Doubled production capacity, hired 20 new workers",
    icon: <Rocket className="w-4 h-4" />,
    category: "Manufacturing"
  },
  {
    id: 12,
    initials: "RK",
    name: "Rahul Kumar",
    title: "Export Entrepreneur",
    grant: "₹20 Lakhs",
    scheme: "Export Promotion Capital Goods",
    quote: "The EPCG scheme guidance was exceptional. They helped me understand the import duty benefits and documentation requirements perfectly. My export business has grown significantly with the new machinery imported under this scheme.",
    achievement: "Expanded to 5 new international markets",
    icon: <Briefcase className="w-4 h-4" />,
    category: "Export"
  }
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const handlePrevSlide = () => {
    if (currentIndex === 0) return;
    setAnimationDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleNextSlide = () => {
    const filtered = selectedCategory === "All"
      ? testimonials
      : testimonials.filter(t => t.category === selectedCategory);
    const maxIndex = Math.ceil(filtered.length / 3) - 1;
    if (currentIndex >= maxIndex) return;
    setAnimationDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-play testimonials - right to left
  useEffect(() => {
    const timer = setInterval(() => {
      const filtered = selectedCategory === "All"
        ? testimonials
        : testimonials.filter(t => t.category === selectedCategory);
      const maxIndex = Math.ceil(filtered.length / 3) - 1;

      setAnimationDirection('right');
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          return prevIndex === 0 ? maxIndex : prevIndex - 1;
        });
        setIsAnimating(false);
      }, 300);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [selectedCategory]);

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
    // {
    //   value: "28/36",
    //   label: "States Covered",
    //   description: "Pan India Presence",
    //   icon: <MapPin className="w-6 h-6" />
    // }
  ];

  const categories = [
    "All", "Agriculture", "Technology", "Manufacturing", "Export", 
    "Handicrafts", "Food & Beverage", "Business Services", "Renewable Energy"
  ];

  // Filter testimonials based on selected category
  const filteredTestimonials = selectedCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-white text-sm font-medium mb-4 ${sourceSerif.className}`} style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)' }}>
            <Star className="w-4 h-4" />
            EazyGrow Ventures Success Stories
          </div>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 sm:mb-6 ${bricolage.className}`}>
                <span style={{ background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #3F51B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Smart Strategy , seamless compliance and scalable growth</span>    
            
          </h1>
          <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto ${sourceSerif.className}`}>
            Real stories from founders and business owners who chose EazyGrow Ventures to unlock funding, registrations, and growth momentum
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 text-slate-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">{stat.label}</div>
              <p className={`text-sm sm:text-base text-gray-600 ${sourceSerif.className}`}>{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 lg:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${sourceSerif.className} ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Continuous Testimonial Slider */}
        <div className="mb-16 relative overflow-hidden group">
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Slider container */}
          <div className="relative">
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                animation: marquee 15s linear infinite;
              }
              .group:hover .animate-marquee {
                animation-play-state: paused;
              }
            `}</style>

            {/* Duplicated testimonials for seamless infinite loop */}
            <div className="flex gap-6 animate-marquee">
              {[...filteredTestimonials, ...filteredTestimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#10b981] to-[#1a237e] flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h3 className={`font-bold text-gray-900 text-sm sm:text-base ${sourceSerif.className}`}>
                        {testimonial.name}
                      </h3>
                      <p className={`text-xs sm:text-sm text-gray-500 ${sourceSerif.className}`}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm sm:text-base text-gray-700 leading-relaxed ${sourceSerif.className}`}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" style={{ color: '#10b981' }} fill="currentColor" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Fixed Version */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ background: 'linear-gradient(180deg, #40307bff, #17631bff, #113b97ff)' }}>
          
          {/* Luxurious Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          <div className="relative px-8 py-12 md:py-16 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 ${sourceSerif.className}`}>
                <Rocket className="w-4 h-4" />
                Your EazyGrow Journey Awaits
              </div>
              
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ${bricolage.className}`}>
                Ready to Write Your success story ?
              </h2>
              
              <p className={`text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto ${sourceSerif.className}`}>
                Join founders and business owners across India who chose EazyGrow Ventures to turn business plans into measurable growth
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <button className={`px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg ${sourceSerif.className}`}>
                  Start Your Journey
                </button>
                <button className={`px-6 sm:px-8 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${sourceSerif.className}`}>
                  Talk to Expert
                </button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 sm:gap-8">
                {/* <div className="flex flex-col items-center">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-medium">5-Star Rated Service</span>
                </div> */}
                
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
                  <span className={`text-xs sm:text-sm font-medium ${sourceSerif.className}`}>Government Certified</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                  <span className={`text-xs sm:text-sm font-medium ${sourceSerif.className}`}>95% Success Rate</span>
                </div>
              </div>

              {/* Stats Banner */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold">20,000+</div>
                    <div className={`text-xs sm:text-sm lg:text-base font-semibold ${sourceSerif.className}`}>Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold">₹120Cr+</div>
                    <div className={`text-xs sm:text-sm lg:text-base font-semibold ${sourceSerif.className}`}>Funding Secured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold">95%</div>
                    <div className={`text-xs sm:text-sm lg:text-base font-semibold ${sourceSerif.className}`}>Satisfaction Rate</div>
                  </div>
 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className={`text-gray-600 mb-6 ${sourceSerif.className}`}>Trusted by entrepreneurs across industries</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-75">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Agriculture</div>
              <div className={`text-xs sm:text-sm lg:text-base text-gray-600 ${sourceSerif.className}`}>500+ Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Technology</div>
              <div className={`text-xs sm:text-sm lg:text-base text-gray-600 ${sourceSerif.className}`}>1200+ Startups</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Manufacturing</div>
              <div className={`text-xs sm:text-sm lg:text-base text-gray-600 ${sourceSerif.className}`}>800+ Units</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Services</div>
              <div className={`text-xs sm:text-sm lg:text-base text-gray-600 ${sourceSerif.className}`}>1500+ Businesses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;