"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Card data with dynamic links
const cardData = [
  {
    title: "Modular Design Systems",
    description:
      "Explore the art of building scalable, cohesive design systems that streamline UI development and enhance team collaboration.",
    image: "/video.png",
    linkText: "Templates",
    linkHref: "/templates",
    colSpan: "md:col-span-4",
    imageLast: false,
  },
  {
    title: "The Anatomy of Effective Design Systems",
    description:
      "Uncover the secrets of integrating UI kits into your dev workflow, enhancing design quality and coding efficiency.",
    image: "/video_1.png",
    linkText: "Components",
    linkHref: "/components",
    colSpan: "md:col-span-8",
    imageLast: false,
  },
  {
    title: "The Anatomy of Effective Design Systems",
    description:
      "Uncover the secrets of integrating UI kits into your dev workflow, enhancing design quality and coding efficiency.",
    image: "/training.png",
    linkText: "Documentation",
    linkHref: "/docs",
    colSpan: "md:col-span-8",
    imageLast: true,
  },
  {
    title: "Modular Design Systems",
    description:
      "Explore the art of building scalable, cohesive design systems that streamline UI development and enhance team collaboration.",
    image: "/video_2.png",
    linkText: "Start Course",
    linkHref: "/courses/start",
    colSpan: "md:col-span-4",
    imageLast: true,
  },
];

const GlassCard = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth reveal animation for all cards
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: {
          each: 0.2,
          from: "start",
        },
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Background subtle zoom animation
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.03,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
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
        />
        <Image
          src="/training_bg.png"
          width={600}
          height={600}
          alt=""
          className="absolute z-0 w-full opacity-80 object-contain"
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
            {!card.imageLast && (
              <div className="w-full mb-4 rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={640}
                  height={160}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            )}

            {/* Text Content */}
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {card.description}
            </p>
            <Link
              href={card.linkHref}
              className="inline-flex items-center gap-2 text-sm border border-white/20 rounded-md px-4 py-2 mt-4 hover:bg-white/10 transition"
            >
              {card.linkText} <MdArrowForwardIos size={14} />
            </Link>

            {/* Bottom Image */}
            {card.imageLast && (
              <div className="w-full mt-4 rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={640}
                  height={160}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlassCard;
