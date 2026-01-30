"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "../constants";

/* ================= NavLink Active Class ================= */

const navLinkClass = (isActive: boolean) =>
  `transition-colors ${
    isActive ? "text-[#800080] font-semibold" : "hover:text-[#800080]"
  }`;

/* ================= Navbar ================= */

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith("/services");

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const navigateTo = (path: string) => {
    router.push(path);
    handleLinkClick();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* ================= Logo ================= */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            <Image
              src="/images/logo-black.png"
              alt="logo"
              width={160}
              height={60}
              style={{ height: "60px", width: "auto" }}
              priority
            />
          </div>

          {/* ================= Desktop Menu ================= */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={navLinkClass(pathname === "/")}>
              Home
            </Link>

            <Link href="/about" className={navLinkClass(pathname === "/about")}>
              About
            </Link>

            {/* ================= Services Dropdown ================= */}
            <div className="relative group">
              <button
                className={`flex items-center transition-colors ${
                  isServicesActive
                    ? "text-[#800080] font-semibold"
                    : "hover:text-[#800080]"
                }`}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-[#800080]">
                <div className="py-1">
                  {SERVICES.map((service) => {
                    const isActive = pathname === `/services/${service.id}`;

                    return (
                      <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        onClick={handleLinkClick}
                        className={`block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-gray-100 text-[#800080] font-semibold"
                            : "hover:bg-gray-100 hover:text-[#800080]"
                        }`}
                      >
                        {service.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className={navLinkClass(pathname === "/portfolio")}
            >
              Portfolio
            </Link>

            <button
              onClick={() => navigateTo("/contact")}
              className="bg-[#800080] hover:bg-purple-700 text-white px-5 py-2 font-bold transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Book a Call
            </button>
          </div>

          {/* ================= Mobile Menu Button ================= */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-[#800080]"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => navigateTo("/")}
              className="block w-full text-left px-3 py-2 hover:text-[#800080]"
            >
              Home
            </button>

            <button
              onClick={() => navigateTo("/about")}
              className="block w-full text-left px-3 py-2 hover:text-[#800080]"
            >
              About
            </button>

            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex w-full justify-between items-center px-3 py-2 hover:text-[#800080]"
            >
              Services
              <ChevronDown
                className={`transform transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="pl-6 bg-gray-900">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => navigateTo(`/services/${service.id}`)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#800080]"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => navigateTo("/portfolio")}
              className="block w-full text-left px-3 py-2 hover:text-[#800080]"
            >
              Portfolio
            </button>

            <button
              onClick={() => navigateTo("/contact")}
              className="block w-full text-left px-3 py-2 text-[#800080] font-bold"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
