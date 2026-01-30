"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* ================= Brand ================= */}
          <div className="col-span-1">
            <Image
              src="/images/logo-black.png"
              alt="logo"
              width={100}
              height={100}
              priority
            />

            <p className="text-gray-400 text-sm mb-6 mt-4">
              Not an Agency. <br />A Strategic Growth Partner.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/all4ps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://x.com/all4ps23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-colors"
              >
                <FaXTwitter size={20} />
              </a>

              <a
                href="https://www.instagram.com/all4ps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-colors"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/people/all4Ps/61555985906255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* ================= Company Links ================= */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-purple">
              Company
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-brand-purple">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-purple">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-purple">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= Services Links ================= */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-purple">
              Services
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/services/marketing-strategy"
                  className="hover:text-brand-purple"
                >
                  Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/brand-identity"
                  className="hover:text-brand-purple"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/growth-marketing"
                  className="hover:text-brand-purple"
                >
                  Growth
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-services"
                  className="hover:text-brand-purple"
                >
                  Web Dev
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= Address & Email ================= */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-purple">
              Where to find us
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Evolve - Coworking Space In Whitefield, Doddanakundi, Industrial
              Area 2, Bengaluru, Karnataka
              <br />
              560048
            </p>

            <h3 className="font-bold text-lg mb-2 text-brand-purple">
              Mail us
            </h3>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=grow@all4ps.co&su=Business%20Enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple"
            >
              grow@all4ps.co
            </a>
          </div>
        </div>

        {/* ================= Bottom Bar ================= */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2025 all4Ps. All rights reserved.
          </p>
        </div>

        {/* ================= SEO Crawl-safe Links ================= */}
        <div style={{ display: "none" }}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>

          <a href="/services/brand-identity">Brand Identity</a>
          <a href="/services/marketing-strategy">Marketing Strategy</a>
          <a href="/services/growth-marketing">Growth Marketing</a>
          <a href="/services/content-marketing">Content Marketing</a>
          <a href="/services/seo-sem">SEO & SEM</a>
          <a href="/services/website-services">Website Services</a>
        </div>

        {/* ================= NoScript ================= */}
        <noscript>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </noscript>
      </div>
    </footer>
  );
};

export default Footer;
