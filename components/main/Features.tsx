"use client";

import React, { useRef, useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { HeroScrollDemo } from "../ui/ScrollAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import ProductsCard from "../ui/ProductsCard";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Template = () => (
  <div className="w-full h-full z-10">
    <Image src="/Card_3.png" className="w-full" width={100} height={100} alt="Template Image" />
  </div>
);

const featureList = [
  {
    title: "Components",
    description:
      "A collection of versatile components that can be tailored to fit the specific needs of your project, ensuring both aesthetic appeal and functionality.",
    component: <HeroScrollDemo />,
  },
  {
    title: "Glass, Outline, Flat styles",
    description:
      "Choose from these diverse design styles to cater to different aesthetic preferences and project requirements.",
    component: <ProductsCard />,
  },
  {
    title: "Templates and Sections",
    description:
      "Streamline your design process with ready-to-use templates and sections, adaptable to various web projects.",
    component: <Template />,
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  const highlightRefs = useRef<HTMLDivElement[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const textBlockRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const activate = (index: number) => {
      highlightRefs.current.forEach((el, i) => {
        if (el) el.style.height = i === index ? "100%" : "0px";
      });

      textBlockRefs.current.forEach((el, i) => {
        if (!el) return;
        el.classList.remove("active-feature");
        if (i === index) {
          el.classList.add("active-feature");
        }
      });
    };

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => activate(index),
        onEnterBack: () => activate(index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="py-10 lg:py-20 xl:py-30 relative z-10 scroll-smooth text-white" id="products">
      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-10 pl-6 md:pl-10 lg:pl-20">
        {/* Left Panel */}
        <div className="sticky top-20 self-start h-fit">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-xl mb-10">
            Craft{" "}
            <span className="text-white/80">captivating websites with a canvas you already know</span>
          </h1>

          <div className="space-y-16 max-w-xl relative border-l border-white/10 pl-8">
            {featureList.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) textBlockRefs.current[index] = el;
                }}
                className="transition-colors duration-500 relative p-4 rounded-md group"
              >
                <div
                  ref={(el) => {
                    if (el) highlightRefs.current[index] = el;
                  }}
                  className="absolute -left-8 top-0 w-[1px] h-0 bg-gradient-to-b from-white/0 via-white/70 to-white/70 rounded-full transition-all duration-500"
                />
                <h4 className="feature-title text-lg md:text-xl font-bold pb-1 text-gray-500 transition-colors duration-500">
                  {feature.title}
                </h4>
                <p className="feature-desc text-sm md:text-base text-gray-500 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div>
            <Link href="#">
              <button className="text-base font-light mt-10 px-10 py-2 border rounded-md flex justify-center items-center gap-5 cursor-pointer hover:bg-white/10 transition">
                START FREE TRIAL <MdArrowForwardIos />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Panel with Scroll-triggered Components */}
        <div className="space-y-40 w-full">
          {featureList.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) sectionRefs.current[index] = el;
              }}
              className="min-h-[100vh] flex items-center justify-center"
            >
              {feature.component}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Tab Layout */}
      <div className="lg:hidden px-6">
        <h2 className="text-3xl font-bold mb-6">
          Explore Our <span className="text-white/70">Features</span>
        </h2>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-4 mb-8">
          {featureList.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeTab === index ? "bg-white text-black font-semibold" : "bg-white/10 text-white"
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white/5 p-4 rounded-md space-y-4">
          <p className="text-base text-white/80">{featureList[activeTab].description}</p>
          <div>{featureList[activeTab].component}</div>
        </div>
      </div>

      {/* Global Styling for Active Text */}
      <style jsx global>{`
        .feature-title,
        .feature-desc {
          color: #6b7280;
        }

        .active-feature .feature-title,
        .active-feature .feature-desc {
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default Features;
