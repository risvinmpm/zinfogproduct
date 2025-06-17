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



const Aboutus = () => {
    return (
        <div className="relative w-full h-fit pb-10 md:pb-20 lg:pb-30 overflow-hidden">
            {/* Background video */}
            <video
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/encryption.webm"
            />

            {/* Centered About Us Text */}
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
                                About Us
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
                    </div>

                    {/* Right 3D Spline Animation */}
                    <motion.div
                        variants={slideInFromRight(0.5)}
                        className="w-full lg:w-1/2 z-0"
                    >
                        <Spline
                            className="absolute top-0 -right-[25%] object-contain"
                            scene="https://prod.spline.design/RPyEOlG6uRTynz5y/scene.splinecode"
                        />
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Aboutus;
