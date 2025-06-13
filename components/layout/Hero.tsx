import React from 'react';
import HeroContent from '../main/HeroContent';

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-[-250px] left-0 h-full w-full z-0"
      >
        <source src="/blackhole.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
