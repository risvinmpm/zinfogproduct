import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const products = ["Tutorials", "Pricing"];
  const company = ["About Us", "Contact Us"];

  // For Contact, since each item has a label and link, use objects
  const contacts = [
    {
      label: "Sales:",
      href: "mailto:sales@zinfog.com",
      display: "sales@zinfog.com"
    },
    {
      label: "Mob:",
      href: "tel:+919778965493",
      display: "+91 9778965493"
    }
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      href: "https://facebook.com/yourpage"
    },
    {
      name: "Threads",
      icon: <FaTwitter />,
      href: "https://threads.net/yourprofile"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://instagram.com/yourhandle"
    }
  ];

  return (
    <div className="w-full pb-10 lg:pb-20 xl:pb-30 px-6 md:px-10 xl:px-20 relative z-10">
      {/* Decorative light image */}
      <div
        className="relative w-full max-w-[600px] mx-auto"
        style={{ aspectRatio: "3 / 0.5" }}
      >
        <Image
          src="/Lights.png"
          alt="Decorative lights"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Footer content */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10 text-white text-sm">
        {/* Logo + Products section */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="logo">
            <Image src="/logo.svg" width={150} height={50} alt="Company Logo" />
          </div>
          <div>
            <h4 className="text-lg mb-4">Products</h4>
            <ul className="space-y-5 text-white/50">
              {products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Products */}
        <div>
          <h4 className="text-lg mb-4">Company</h4>
          <ul className="space-y-5 text-white/50">
            {company.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact section */}
        <div>
          <h4 className="text-lg mb-4">Contact Us</h4>
          <ul className="space-y-5 text-white/50">
            {contacts.map(({ label, href, display }) => (
              <li key={label}>
                <Link href={href}>
                  <span className="text-white me-1">{label}</span> {display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social media section */}
        <div>
          <h4 className="text-lg mb-4">Follow Us</h4>
          <p className="font-light leading-7 pb-5">
            1st Floor, Sahya Govt CyberPark, <br /> GA College P.O Calicut,{" "}
            <br /> Kerala - 673014
          </p>
          <div className="flex gap-4">
            {socialMedia.map((social) => (
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
      </div>
    </div>
  );
};

export default Footer;
