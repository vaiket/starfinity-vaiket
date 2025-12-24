import React from 'react';
import {
  Target,
  Eye,
  Users,
  Award,
  Shield,
  Star,
  TrendingUp,
  CheckCircle,
  MapPin,
  PieChart,
  Lightbulb,
  Heart,
  Building,
  Scale,
  Clock,
  FileText,
  Mail,
  Phone,
  MapPin as Location,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';

const AboutUs = () => {
  const coreValues = [
    {
      id: 1,
      title: "Integrity",
      description: "Ensuring transparency and trust in every interaction",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Excellence",
      description: "Delivering high-quality solutions and services",
      icon: <Star className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600"
    },
    {
      id: 3,
      title: "Client-Centricity",
      description: "Tailoring services to unique business needs",
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600"
    },
    {
      id: 4,
      title: "Innovation",
      description: "Driving smarter solutions through technology",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 5,
      title: "Reliability",
      description: "Being a dependable partner for growth",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const leadershipTeam = [
    {
      id: 1,
      name: "Bhadoriya Mohini",
      position: "CEO & Founder",
      experience: "3+ years experience",
      role: "Strategic Leadership & Business Development",
      initials: "BM",
      social: ["linkedin", "twitter"]
    },
    {
      id: 2,
      name: "Himanshu",
      position: "Legal Team Head",
      experience: "3+ years experience",
      role: "Legal Compliance & Documentation",
      initials: "H",
      social: ["linkedin"]
    },
    {
      id: 3,
      name: "Sahil Piprotar",
      position: "Admin Team Head",
      experience: "3+ years experience",
      role: "Operational Management",
      initials: "SP",
      social: ["linkedin", "twitter"]
    },
    {
      id: 4,
      name: "Rajesh Rajawat",
      position: "Account Team Head",
      experience: "3+ years experience",
      role: "Financial Oversight & Taxation",
      initials: "RR",
      social: ["linkedin"]
    }
  ];

  const stats = [
    {
      value: "20,000+",
      label: "Businesses Funded",
      icon: <Building className="w-5 h-5" />
    },
    {
      value: "120+ Crores",
      label: "Credit Facilitated",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: <Award className="w-5 h-5" />
    },
    {
      value: "28/36",
      label: "States Covered",
      icon: <MapPin className="w-5 h-5" />
    }
  ];

  const milestones = [
    { year: "2021", event: "Company Founded" },
    { year: "2022", event: "100+ Clients Served" },
    { year: "2023", event: "Expanded to 15 States" },
    { year: "2024", event: "20,000+ Businesses Funded" }
  ];

  // SVG pattern as a separate variable to avoid JSX parsing issues
  const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        {/* Background Pattern with style attribute to avoid JSX parsing issues */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url("${svgPattern}")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Building className="w-4 h-4" />
              About STARTFINITY
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let us take care of the <span className="text-yellow-300">formalities</span><br />
              while you focus on <span className="text-emerald-300">building your vision</span>!
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your trusted partner for business incorporation, compliance, funding, and growth solutions
            </p>

            {/* Stats Banner */}
            <div className="inline-flex flex-wrap justify-center gap-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 mb-2">
                  Our Mission
                </span>
                <h2 className="text-2xl font-bold text-gray-900">Empowering Businesses</h2>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to empower businesses by simplifying legal, financial, and operational complexities, 
              providing seamless end-to-end solutions that enable entrepreneurs to focus on growth, success, and innovation.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 mb-2">
                  Our Vision
                </span>
                <h2 className="text-2xl font-bold text-gray-900">Trusted Business Partner</h2>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our vision is to be the most trusted and comprehensive business consultancy firm, 
              providing seamless, end-to-end solutions that drive entrepreneurial success and 
              empower businesses to navigate growth with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building <span className="text-yellow-300">Business Dreams</span> into Reality
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Startfinity Navigator Private Limited, we provide end-to-end business consultancy services, 
                allowing entrepreneurs and businesses to focus on growth while we handle legal and operational complexities.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our expert team simplifies incorporation, compliance, taxation, and regulatory filings, 
                ensuring smooth and efficient operations. Whether you're a startup, small business, or large enterprise, 
                we tailor our solutions to your specific needs.
              </p>

              {/* Experience Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">3+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">1000+</div>
                  <div className="text-sm text-gray-300">Startups Onboarded</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-300">Services Offered</div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for team image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-20 h-20 text-white/50 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white">Professional Business Team</h3>
                    <p className="text-white/70">Collaborating for your success</p>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">
                  Trusted Partner
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-400 to-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  95% Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium mb-4">
            Our Foundation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide every decision and action we take
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((value) => (
            <div 
              key={value.id}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`p-4 rounded-xl bg-gradient-to-br ${value.color} text-white w-16 h-16 flex items-center justify-center mb-4`}>
                {value.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
              
              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-4">
              Meet Our Leaders
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts driving our mission forward with passion and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <div 
                key={member.id}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {member.initials}
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-1">{member.position}</div>
                  <div className="text-sm text-gray-500 mb-2">{member.experience}</div>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                  {member.social.includes('linkedin') && (
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  )}
                  {member.social.includes('twitter') && (
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-400 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Journey</h3>
          <p className="text-gray-600">Milestones that shaped our growth story</p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 hidden md:block" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Year Circle */}
                <div className="z-10 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {milestone.year}
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mt-4 md:mt-0`}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <p className="text-gray-900 font-medium">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16">
        <div className="max-w-4xl mx-auto px-8 py-12 md:py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who trust us with their business needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started Now
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="inline-flex items-center gap-2 text-gray-600">
          <CheckCircle className="w-4 h-4 text-emerald-500" />
          <span className="text-sm">Committed to accuracy, efficiency, and transparency</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;