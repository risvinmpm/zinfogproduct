// WordMap.tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const words = ["Innovation", "Trust", "Scale", "Vision", "Growth", "Impact", "Global", "Secure", "Fast", "Smart", "Creative", "Modern"];

const WorldMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll(".word")!;
    letters.forEach((el, i) => {
      gsap.to(el, {
        x: () => (Math.random() - 0.5) * 200,
        y: () => (Math.random() - 0.5) * 200,
        opacity: 0.2 + Math.random() * 0.4,
        duration: 4 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {words.map((w, i) => (
        <div
          key={i}
          className="word absolute text-white font-light opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${24 + Math.random() * 36}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {w}
        </div>
      ))}
    </div>
  );
};

export default WorldMap;
