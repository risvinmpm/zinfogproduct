"use client";

import { Socials } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full h-[65px] bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 px-4 sm:px-8 md:px-10">
      <div className="w-full h-full flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center h-auto w-auto">
          <Image
            src="/logo.svg"
            alt="logo"
            width={150}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center gap-8 border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200 text-sm font-medium">
            <Link href="#about-me" className="cursor-pointer">
              About Us
            </Link>
            <Link href="#aboutus" className="cursor-pointer">
              Products
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-4">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu Placeholder (Optional) */}
      {/* You can add a hamburger menu toggle here if needed */}
    </nav>
  );
};

export default Navbar;
