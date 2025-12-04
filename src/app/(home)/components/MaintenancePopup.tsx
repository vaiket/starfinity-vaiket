"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function MaintenancePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup after short delay
    const timer = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white w-[90%] max-w-md rounded-2xl p-8 text-center shadow-2xl animate-scaleUp relative">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <X size={22} />
        </button>

        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-blue-400 rounded-full shadow-lg">
          🚧
        </div>

        {/* Text */}
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          This Site is Under Maintenance
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our web development team is working on something amazing!  
          The website will be live very soon 🚀
        </p>

      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-scaleUp {
          animation: scaleUp 0.35s ease forwards;
        }
        @keyframes scaleUp {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
