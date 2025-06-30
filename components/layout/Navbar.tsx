"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Socials = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    href: "https://facebook.com/yourpage",
  },
  {
    name: "Threads",
    icon: <FaTwitter />,
    href: "https://threads.net/yourprofile",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/yourhandle",
  },
];

const Navbar = () => {
  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <a href="#products" onClick={handleScrollTo("products")} className="cursor-pointer">
              Products
            </a>
            <a href="#teams" onClick={handleScrollTo("teams")} className="cursor-pointer">
              Teams
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          {Socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform duration-300 text-2xl bg-[#0300145e]"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
