"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Testimonials from "./Testimonials";

gsap.registerPlugin(ScrollTrigger);

// Hexagon component
const Hex = ({ label }: { label: string }) => (
  <div className="relative w-[150px] h-[150px] my-3 z-10">
    <div className="absolute inset-0 clip-hex bg-white/10 backdrop-blur-md border border-white/20 shadow-md flex items-center justify-center text-white font-light text-sm">
      {label}
    </div>
  </div>
);

const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hexRefs = useRef<HTMLDivElement[]>([]);

  const columns = [
    ["Visa", "Mastercard"],
    ["Stripe", "Paypal", "Google"],
    ["Apple", "Amazon", "Microsoft", "Netflix"],
    ["Tesla", "Meta"]
  ];

  const allItems = columns.flat();

  useEffect(() => {
    const hexes = hexRefs.current;
    const radius = 200;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "+=300",
      onEnter: () => {
        // Animate to circle layout
        hexes.forEach((el, i) => {
          const angle = (i / hexes.length) * Math.PI * 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          gsap.to(el, {
            position: "absolute",
            top: "50%",
            left: "50%",
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            ease: "power3.inOut",
            duration: 1,
            delay: i * 0.02
          });
        });
      },
      onLeave: () => {
        // Animate back to column layout
        hexes.forEach((el, i) => {
          gsap.to(el, {
            clearProps: "all",
            ease: "power3.inOut",
            duration: 1,
            delay: i * 0.02
          });
        });
      },
      onEnterBack: () => {
        // Scroll back up to circle layout
        hexes.forEach((el, i) => {
          const angle = (i / hexes.length) * Math.PI * 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          gsap.to(el, {
            position: "absolute",
            top: "50%",
            left: "50%",
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            ease: "power3.inOut",
            duration: 1,
            delay: i * 0.02
          });
        });
      },
      onLeaveBack: () => {
        // Scroll above — restore to columns
        hexes.forEach((el, i) => {
          gsap.to(el, {
            clearProps: "all",
            ease: "power3.inOut",
            duration: 1,
            delay: i * 0.02
          });
        });
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 main-padding text-white py-10 lg:py-20 xl:py-30"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="max-w-sm">
          <p className="text-3xl md:text-4xl lg:text-6xl font-light leading-20 fade-text">
            Used by top teams across the globe
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <h1 className="text-7xl md:text-9xl font-bold text-right md:text-left fade-text">
            110k
          </h1>
          <p className="text-right fade-text">Customers since 2023</p>
        </div>
      </div>

      {/* Layout (circle <-> column by scroll) */}
      <div className="mt-20 flex gap-6 flex-wrap relative min-h-[600px]">
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`flex flex-col items-center justify-center ${
              colIndex % 2 !== 0 ? "mt-6" : ""
            }`}
          >
            {column.map((label, i) => {
              const index =
                columns
                  .slice(0, colIndex)
                  .reduce((acc, val) => acc + val.length, 0) + i;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) hexRefs.current[index] = el;
                  }}
                >
                  <Hex label={label} />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="max-w-2xl pt-20">
        <Testimonials />
      </div>
      
      <style jsx>{`
        .fade-text {
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.1) 90%
          );
          mask-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.1) 90%
          );
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default Team;
