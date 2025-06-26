"use client";

import Image from "next/image";
import React from "react";
import TrainingCard from "../ui/TrainingCard";

const Training = () => {
  return (
    <div className="relative py-10 lg:py-20 xl:py-30 text-white z-10">
      {/* Centered Image and Overlay Text */}
      <div className="relative flex justify-center items-center flex-col text-center">
        <Image
          src="/lines.png"
          width={800}
          height={600}
          alt="Lines background"
          className="w-auto h-auto max-w-full object-contain"
        />
        <h1 className="absolute top-2 text-white text-lg md:text-2xl font-light fade-text">
          3 hours of video
        </h1>
      </div>

      {/* Fading Text Block */}
      <div className="-mt-20 flex justify-center px-4">
        <p className="text-2xl md:text-4xl lg:text-5xl leading-snug max-w-4xl text-center fade-text">
          Quick and beautiful web design: Streamlining your creative process
        </p>
      </div>

      <TrainingCard />

      {/* Gradient Text Fade Styles */}
      {/* <style jsx>{`
        .fade-text {
          -webkit-mask-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.1));
          mask-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.1));
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
        }
      `}</style> */}
        {/* <style jsx>{
        .fade-text {
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.3) 60%,
            rgba(255, 255, 255, 0) 90%
          );
          mask-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.3) 70%,
            rgba(255, 255, 255, 0) 90%
          );
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
        }
      }</style> */}
      <style jsx>{`
        .fade-text {
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.6) 30%,
            rgba(255, 255, 255, 0.1) 80%
          );
          mask-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.6) 30%,
            rgba(255, 255, 255, 0.1) 80%
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

export default Training;
