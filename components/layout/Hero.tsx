import React from "react";
import HeroContent from "../main/HeroContent";
import Image from "next/image";

const Hero = () => {
  return (
    // <div className="relative flex flex-col h-screen w-full overflow-hidden">
    //   <video
    //     autoPlay
    //     muted
    //     loop
    //     playsInline
    //     className="absolute top-[-250px] left-0 h-full w-full z-0"
    //   >
    //     <source src="/blackhole.webm" type="video/webm" />
    //     Your browser does not support the video tag.
    //   </video>
    //   <HeroContent />
    // </div>
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Full-page background image */}
        <Image src="/line.png" alt="" fill className="object-cover z-0" />

        {/* Foreground content */}
        <div className="relative z-10 max-w-xl px-4 text-center mx-auto mt-30">
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight fade-end">
            Craft Stunning User Interfaces
          </h1>
          <p className="text-white text-base md:text-lg">
            This UI kit is a perfect blend of modern design and practical
            usability, making it an ideal choice for a wide range of projects
            including web applications, mobile apps, and dashboard interfaces.
          </p>
        </div>

        {/* Banner section */}
        <div className="relative mt-10 w-full flex justify-center items-center z-10">
          <Image
            src="/banner.png"
            width={1000}
            height={600}
            alt="Banner"
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src="/overlay.png"
              width={150}
              height={150}
              alt="Overlay"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
