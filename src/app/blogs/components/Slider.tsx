'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Government Grants",
    description: "DST, DBT, BIRAC & government agencies",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 2,
    title: "Startup Grants",
    description: "Equity-free funding for startups",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 3,
    title: "Women & Special Categories",
    description: "For women, transgender & OBC founders",
    color: "from-green-500 to-green-700"
  },
  {
    id: 4,
    title: "State-Specific Programs",
    description: "KSUM & state agency funding",
    color: "from-orange-500 to-orange-700"
  }
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-900 py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8">Featured Categories</h2>
        
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl">
          {/* Slides */}
          <div className="relative h-40 sm:h-48 md:h-64 lg:h-80">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className={`h-full bg-gradient-to-r ${slide.color} p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center`}>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">{slide.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
