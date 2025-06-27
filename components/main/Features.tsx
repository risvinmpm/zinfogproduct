"use client";
import React, { useRef, useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { HeroScrollDemo } from "../ui/ScrollAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const GitHubGlobe = () => (
  <div className="h-[400px] flex items-center justify-center text-white text-2xl border border-white/20 rounded-xl">
    GitHub Globe Placeholder
  </div>
);

const WorldMap = () => (
  <div className="h-[400px] flex items-center justify-center text-white text-2xl border border-white/20 rounded-xl">
    World Map Placeholder
  </div>
);

const featureList = [
  {
    title: "Components",
    description:
      "A collection of versatile components that can be tailored to fit the specific needs of your project, ensuring both aesthetic appeal and functionality.",
    component: <HeroScrollDemo />
  },
  {
    title: "Glass, Outline, Flat styles",
    description:
      "Choose from these diverse design styles to cater to different aesthetic preferences and project requirements.",
    component: <GitHubGlobe />
  },
  {
    title: "Templates and Sections",
    description:
      "Streamline your design process with ready-to-use templates and sections, adaptable to various web projects.",
    component: <WorldMap />
  }
];

const Features = () => {
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
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => activate(index),
        onEnterBack: () => activate(index)
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 lg:py-20 xl:py-30 relative z-10">
      {/* Left Text Panel */}
      <div className="text-white px-6 md:px-10 lg:px-20 sticky top-20 self-start h-fit">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-xl mb-10">
          Craft{" "}
          <span className="text-white/80">
            captivating websites with a canvas you already know
          </span>
        </h1>

        <div className="space-y-16 max-w-xl relative border-l border-white/10 pl-8">
          {featureList.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (textBlockRefs.current[index] = el!)}
              className="transition-colors duration-500 relative p-4 rounded-md group"
            >
              <div
                ref={(el) => (highlightRefs.current[index] = el!)}
                className="absolute -left-8 top-0 w-[1px] h-0 bg-gradient-to-b from-white/0 via-white/70 to-white/70 rounded-full transition-all duration-500"
              ></div>

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
          <Link href="">
            <button
              type="button"
              className="text-base font-light mt-10 px-10 py-2 border rounded-md flex justify-center items-center gap-5 cursor-pointer hover:bg-white/10 transition"
            >
              START FREE TRIAL <MdArrowForwardIos />
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll Reveal Section */}
      <div className="space-y-40 w-full">
        {featureList.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el!)}
            className="min-h-[100vh] flex items-center justify-center"
          >
            {feature.component}
          </div>
        ))}
      </div>

      {/* Custom styling for active state */}
      <style jsx global>{`
        .feature-title,
        .feature-desc {
          color: #6b7280; /* default gray-500 */
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
