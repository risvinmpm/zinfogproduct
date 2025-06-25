"use client";
import React from "react";
import { HeroScrollDemo } from "./ScrollAnimation";

const featureList = [
  {
    title: "Components",
    description:
      "A collection of versatile components that can be tailored to fit the specific needs of your project, ensuring both aesthetic appeal and functionality."
  },
  {
    title: "Glass, Outline, Flat styles",
    description:
      "Choose from these diverse design styles to cater to different aesthetic preferences and project requirements."
  },
  {
    title: "Templates and Sections",
    description:
      "Streamline your design process with ready-to-use templates and sections, adaptable to various web projects."
  }
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 lg:py-20 xl:py-30">
      {/* Text Section */}
      <div className="text-white px-6 md:px-10 lg:px-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-xl mb-10">
          Craft captivating websites with a canvas you already know
        </h1>
        <div className="space-y-10 max-w-xl">
          {featureList.map((feature, index) => (
            <div key={index}>
              <h4 className="text-lg md:text-xl font-bold pb-1">
                {feature.title}
              </h4>
              <p className="text-sm md:text-base text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div>
          <button type="button">Connect Us</button>
        </div>
      </div>

      {/* Animation Section */}
      <div className="w-full">
        <HeroScrollDemo />
      </div>
    </div>
  );
};

export default Features;
