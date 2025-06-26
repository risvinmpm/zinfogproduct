"use client";

import React from "react";

// Hexagon component
const Hex = ({ label }: { label: string }) => (
  <div className="relative w-[150px] h-[150px] my-3 z-10">
    <div className="absolute inset-0 clip-hex bg-white/10 backdrop-blur-md border border-white/20 shadow-md flex items-center justify-center text-white font-light text-sm">
      {label}
    </div>
  </div>
);

const Team = () => {
  const columns = [
    ["Visa", "Mastercard"], 
    ["Stripe", "Paypal", "Google"], 
    ["Apple", "Amazon", "Microsoft", "Netflix"],
    ["Tesla", "Meta"],
  ];

  return (
    <div className="relative z-10 main-padding text-white py-10 lg:py-20 xl:py-30">
      {/* Header section */}
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Left Text */}
        <div className="max-w-sm">
          <p className="text-3xl md:text-4xl font-light leading-relaxed">
            Used by top teams across the globe
          </p>
        </div>

        {/* Right Stats */}
        <div className="mt-6 md:mt-0">
          <h1 className="text-7xl md:text-9xl font-bold text-right md:text-left">
            110k
          </h1>
          <p className="text-right md:text-left">Customers since 2023</p>
        </div>
      </div>

      {/* Custom Hex Columns */}
      <div className="mt-20 flex gap-6 flex-wrap">
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`flex flex-col items-center justify-center ${
              colIndex % 2 !== 0 ? "mt-6" : ""
            }`}
          >
            {column.map((item, itemIndex) => (
              <Hex key={itemIndex} label={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
