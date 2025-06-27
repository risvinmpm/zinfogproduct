"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Card data
const cardData = [
  {
    title: "200+ Customizable Components",
    description:
      "A collection of versatile components that can be tailored to fit the specific needs of your project, ensuring both aesthetic appeal and functionality.",
    image: "/LessonDasboard.png",
    colSpan: "md:col-span-5"
  },
  {
    title: "2000+ Figma Variants",
    description:
      "This vast selection of variants offers designers the flexibility to adapt each element to different use cases and design contexts, enhancing the user experience.",
    image: "/Cards.png",
    colSpan: "md:col-span-7"
  },
  {
    title: "2,116 Unique Icons",
    description:
      "Enhance your design with a comprehensive set of icons, each crafted to complement various design themes and improve interface navigation.",
    image: "/graph.png",
    colSpan: "md:col-span-7"
  },
  {
    title: "180+ Variables",
    description:
      "These variables provide the flexibility to create responsive designs that are visually appealing and function well across different devices and themes.",
    image: "/Cards_1.png",
    colSpan: "md:col-span-5"
  }
];

const ProductsCard = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: { each: 0.2, from: "start" },
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.03,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  return (
    <section className="relative main-padding mt-30">
      {/* Animated Background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        ref={bgRef}
      >
        <Image
          src="/overlay.png"
          width={800}
          height={800}
          alt=""
          className="absolute w-full h-full object-contain z-0 opacity-40"
          priority
        />
        <Image
          src="/training_bg.png"
          width={600}
          height={600}
          alt=""
          className="absolute z-0 w-full opacity-80 object-contain"
          priority
        />
      </div>

      {/* Card Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-4xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-lg shadow-white/5 hover:shadow-white/10 transition-all duration-300 ${card.colSpan}`}
          >
            {/* Top Image */}
            <div className="w-full mb-4 rounded-xl overflow-hidden h-40 flex items-center justify-center bg-white/10">
              <Image
                src={card.image}
                alt={card.title}
                width={256}
                height={160}
                className="object-contain"
                priority
              />
            </div>

            {/* Text Content */}
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsCard;
