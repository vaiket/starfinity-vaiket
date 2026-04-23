"use client";

import { useState, useEffect, useRef } from "react";
import {
  DollarSign,
  UserCheck,
  Handshake,
  Target,
  ClipboardCheck,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const features = [
  { name: "Startup Funding", icon: DollarSign },
  { name: "Profile Verify", icon: UserCheck },
  { name: "Capital Matching", icon: Handshake },
  { name: "Investor Network", icon: Target },
  { name: "Readiness Review", icon: ClipboardCheck },
  { name: "Data Analytics", icon: BarChart3 },
];

export default function CircularDashboard() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState(400);

  const total = features.length;
  const stepAngle = 360 / total;

  // ✅ REAL RESPONSIVE (important fix)
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setSize(width);
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => {
        const newRotation = prev - stepAngle;

        const normalizedRotation =
          ((newRotation % 360) + 360) % 360;

        const angleDiff = (0 - normalizedRotation + 360) % 360;
        const indexAtTop =
          Math.round(angleDiff / stepAngle) % total;

        setActiveIndex(indexAtTop);

        return newRotation;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [stepAngle, total]);

  const cx = size / 2;
  const cy = size / 2;

  // ✅ dynamic radius - increased for more space
  const r = size * 0.36;

  // ✅ scaling elements
  const cardSize = size * 0.20;
  const centerSize = size * 0.38;

  return (
    <div
      className={`flex items-center justify-center p-2 sm:p-4 ${inter.className}`}
    >
      <style jsx global>{`
        @keyframes pulse-shadow {
          0%,
          100% {
            box-shadow: 0 8px 32px rgba(46, 125, 50, 0.12),
              0 4px 16px rgba(102, 187, 106, 0.08);
          }
          50% {
            box-shadow: 0 12px 40px rgba(46, 125, 50, 0.18),
              0 6px 20px rgba(102, 187, 106, 0.12);
          }
        }
      `}</style>

      {/* ✅ responsive container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[450px] aspect-square"
      >
        {/* Outer Circle */}
        <div className="absolute inset-0 rounded-full border-2 border-dotted border-green-400 opacity-60" />

        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="rounded-full flex flex-col items-center justify-center"
            style={{
              width: centerSize,
              height: centerSize,
              background:
                "linear-gradient(to bottom right, #8db796, #81ce85, #182975)",
              animation: "pulse-shadow 3s infinite",
            }}
          >
            <Sparkles
              size={size * 0.08}
              className="text-green-700 mb-2"
            />

            <h2
              style={{
                fontSize: size * 0.06,
                fontWeight: 700,
              }}
            >
              EazyGrow
            </h2>

            <p
              style={{
                fontSize: size * 0.03,
                color: "#fcf9f9",
                textAlign: "center",
              }}
            >
              All Kind of Services
            </p>
          </div>
        </div>

        {/* Orbit */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {features.map((feature, i) => {
            const angle =
              (i / total) * 2 * Math.PI - Math.PI / 2;

            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);

            const isActive = i === activeIndex;
            const Icon = feature.icon;

            return (
              <div
                key={feature.name}
                className="absolute flex flex-col items-center justify-center rounded-xl"
                style={{
                  width: cardSize,
                  height: cardSize,
                  left: x,
                  top: y,
                  transform: `translate(-50%, -50%) rotate(${-rotation}deg) scale(${
                    isActive ? 1.2 : 0.9
                  })`,
                  background: isActive
                    ? "linear-gradient(150deg, #a9c9aa, #5f9b62, #212a62)"
                    : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.5s ease",
                }}
              >
                <Icon
                  size={size * 0.05}
                  color={isActive ? "#fff" : "#64748b"}
                />

                <span
                  style={{
                    fontSize: size * 0.025,
                    color: isActive ? "#fff" : "#64748b",
                    textAlign: "center",
                    lineHeight: 1.1,
                    padding: "0 4px",
                  }}
                >
                  {feature.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}