"use client";

import { useState } from "react";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  Shield,
  Clock,
  Users,
  ArrowRight,
  ChevronUp
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#414288' }}>
                <span className="text-white font-bold text-lg">SF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Essygrow</h3>
                <p className="text-sm text-gray-600">Financial Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm">
              Empowering businesses with seamless access to funding, expert guidance, and innovative financial solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#414288] text-gray-600 hover:text-white flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Success Stories", href: "/success-stories" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-[#414288] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Business Grants",
                "MSME Loans",
                "Startup Funding",
                "Export Finance",
                "Equipment Loans",
                "Working Capital",
                "Govt. Subsidies",
                "Project Reports",
              ].map((service, index) => (
                <li key={index}>
                  <div className="text-gray-600 hover:text-[#414288] transition-colors text-sm cursor-pointer">
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B0DB43' }}>
                    <Phone className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Call Us</div>
                    <a href="tel:+919157142657" className="text-gray-600 text-sm hover:text-[#414288]">
                      +91 9157142657
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#414288' }}>
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Email</div>
                    <a href="mailto:info@essygrow.com" className="text-gray-600 text-sm hover:text-[#414288]">
                      info@essygrow.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#B0DB43' }}>
                    <MapPin className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Office</div>
                    <div className="text-gray-600 text-sm">
                      315 Sahitya Arcade, Ahmedabad
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Stay Updated</h4>
              {isSubscribed ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Subscribed Successfully!</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#414288]"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 rounded-lg font-semibold text-white transition-all disabled:opacity-50"
                      style={{ backgroundColor: '#414288' }}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Subscribe for funding insights & updates
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B0DB43' }}></div>
              <span className="text-sm text-gray-700">Trusted by 5,000+ businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#414288' }}></div>
              <span className="text-sm text-gray-700">24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B0DB43' }}></div>
              <span className="text-sm text-gray-700">4.8 ★ Rating</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "ISO 27001:2013", desc: "Information Security" },
            { name: "RBI Registered", desc: "NBFC Partner" },
            { name: "MSME Registered", desc: "Govt. Recognized" },
            { name: "Startup India", desc: "DIPP Certified" },
          ].map((cert, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-sm font-semibold text-gray-900">{cert.name}</div>
              <div className="text-xs text-gray-600 mt-1">{cert.desc}</div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                © {currentYear} Essygrow Financial Services Pvt. Ltd. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Registered with RBI | CIN: U67190GJ2018PTC103456
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Refund Policy", href: "/refund" },
                { name: "Disclaimer", href: "/disclaimer" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-[#414288] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919157142657"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.491-8.411"/>
        </svg>
      </a>
    </footer>
  );
}