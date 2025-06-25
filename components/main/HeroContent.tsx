"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

// Dynamically import Spline (disable SSR)
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="text-white text-center pt-10">Loading 3D animation...</div>
  ),
});

const HeroContent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Optional: suppress NaN error in dev console for now
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes("computeBoundingSphere")
      ) {
        return;
      }
      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="w-full py-5 lg:pt-10 overflow-hidden relative"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1300px] mx-auto relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mb-12 md:mb-0 z-10">
          <motion.div
            variants={slideInFromTop}
            className="flex items-center gap-2 border border-[#7042f88b] py-2 px-3 w-fit rounded-md bg-white/5 backdrop-blur-sm"
          >
            <SparklesIcon className="text-[#b49bff] h-5 w-5" />
            <h1 className="text-sm text-white font-medium">
              Zinfog Codelabs
            </h1>
          </motion.div>

          <motion.h1
            variants={slideInFromLeft(0.5)}
            className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
          >
            Delivering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Powerful
            </span>{" "}
            Business Solutions
          </motion.h1>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="mt-4 text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl"
          >
            Explore our suite of expertly crafted software products designed to
            streamline operations and drive growth. From ERP systems to
            industry-specific tools, our solutions are built to deliver the best
            experience.
          </motion.p>

          <motion.a
            href="#products"
            variants={slideInFromLeft(1)}
            className="inline-block mt-6 px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 transition-opacity duration-300"
          >
            Discover Our Products!
          </motion.a>
        </div>

        {/* Right 3D Spline Animation */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="relative w-full lg:w-1/2 h-[500px] md:h-[700px] z-0"
        >
          {isClient && (
            <div className="absolute top-1/2 lg:right-[-150px] transform -translate-y-1/2 w-[750px] h-[750px] scale-125">
              <Spline scene="https://prod.spline.design/SMLMCc0XkLiUmf3e/scene.splinecode" />
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroContent;
