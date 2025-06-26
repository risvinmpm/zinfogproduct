"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

const Hero3DSection = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!banner) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = banner.getBoundingClientRect();

      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;

      banner.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const resetTransform = () => {
      if (banner) {
        banner.style.transform = "rotateY(0deg) rotateX(0deg)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetTransform);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white bg-fixed">
      {/* Background */}
      <Image
        src="/line.png"
        alt="Background Lines"
        fill
        className="object-cover z-0"
      />

      {/* Foreground text */}
      <div className="relative z-10 max-w-xl px-4 text-center mx-auto pt-40">
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight fade-end">
          Craft Stunning User Interfaces
        </h1>
        <p className="text-white text-base md:text-lg">
          This UI kit is a perfect blend of modern design and practical
          usability, making it an ideal choice for a wide range of projects
          including web applications, mobile apps, and dashboard interfaces.
        </p>
      </div>

      {/* 3D Banner Section */}
      <div className="relative mt-20 w-full flex justify-center items-center z-10 perspective">
        <div
          ref={bannerRef}
          className="relative w-[90%] max-w-[1000px] transition-transform duration-300 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Banner Layer */}
          <Image
            src="/banner.png"
            width={1000}
            height={600}
            alt="Banner"
            className="w-full h-auto rounded-xl shadow-lg"
            style={{ transform: "translateZ(30px)" }}
          />

          {/* Overlay Layer */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src="/overlay.png"
              width={150}
              height={150}
              alt="Overlay"
              className="w-full h-full opacity-80 mix-blend-screen animate-floating"
              style={{ transform: "translateZ(60px)" }}
            />
          </div>
        </div>
      </div>

      {/* Floating animation style */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        .animate-floating {
          animation: floatY 6s ease-in-out infinite;
        }

        @keyframes floatY {
          0% {
            transform: translateZ(60px) translateY(0px);
          }
          50% {
            transform: translateZ(60px) translateY(-10px);
          }
          100% {
            transform: translateZ(60px) translateY(0px);
          }
        }
      `}</style>

      {/* Optional bottom divider */}
      <div className="border-b border-gray-900 mt-20" />
    </div>
  );
};

export default Hero3DSection;
