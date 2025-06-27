"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const testimonials = [
  {
    title: "Visa",
    quote: `This UI kit commendably goes against the grain by introducing creative, vibrant diffusions of color and light with glass, line, and flat styling options, all with accompanying dark and light modes. All of these components could easily be used as the foundation for a new project that wants to stand out.`,
    name: "Brendan Ciccone",
    role: "Startup design partner",
    img: "/team.avif"
  },
  {
    title: "Stripe",
    quote: `This UI kit commendably goes against the grain by introducing creative, vibrant diffusions of color and light with glass, line, and flat styling options, all with accompanying dark and light modes. All of these components could easily be used as the foundation for a new project that wants to stand out.`,
    name: "Claire Edmond",
    role: "Product Designer",
    img: "/team.avif"
  },
  {
    title: "Amazon",
    quote: `This UI kit commendably goes against the grain by introducing creative, vibrant diffusions of color and light with glass, line, and flat styling options, all with accompanying dark and light modes. All of these components could easily be used as the foundation for a new project that wants to stand out.`,
    name: "Jamie Collins",
    role: "UX Lead",
    img: "/team.avif"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextIndex = (i: number) => (i + 1) % testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      handleChange(nextIndex(index));
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const handleChange = (newIndex: number) => {
    if (animating || newIndex === index) return;

    setAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIndex(newIndex);
        setAnimating(false);
      }
    });

    tl.to(containerRef.current, {
      autoAlpha: 0,
      x: -50,
      duration: 0.4,
      ease: "power2.inOut"
    })
      .set(containerRef.current, { x: 50 })
      .to(containerRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out"
      });
  };

  const current = testimonials[index];

  return (
    <div className="relative max-w-2xl mx-auto px-4 py-16 text-white">
      {/* Carousel content */}
      <div ref={containerRef} key={index}>
        <h1 className="text-4xl font-semibold">{current.title}</h1>
        <p className="leading-7 font-light py-10">{current.quote}</p>
        <div className="flex gap-5 items-center">
          <Image
            src={current.img}
            width={60}
            height={60}
            className="w-[60px] h-[60px] rounded-full object-cover"
            alt={current.name}
          />
          <div>
            <h5 className="font-semibold">{current.name}</h5>
            <p className="text-sm opacity-70">{current.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-4 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleChange(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
