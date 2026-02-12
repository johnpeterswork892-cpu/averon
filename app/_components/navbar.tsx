"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PackageSearch } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const NAVBAR_OFFSET = 80; // h-20

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = {
    left: [
      { name: "Transport", id: "freight-transport" },
      { name: "Air & Ocean Freight", id: "air-ocean-freight" },
      { name: "Logistics", id: "logistics-solutions" },
    ],
    right: [
      { name: "Couriers", id: "express-couriers" },
      { name: "Containers", id: "container-transport" },
      { name: "Vaults", id: "warehouse-vault" },
    ],
  };

  const handleServiceNavigation = (id: string) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);

    if (pathname !== "/services") {
      router.push(`/services#${id}`);
      return;
    }

    // Already on /services → manual smooth scroll
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/Averon_Express_Logo_Transparent.png"
              alt="Averon Express Logo"
              width={220}
              height={80}
              priority
              className="w-25 h-auto"
            />
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                Services
                <svg
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-160 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-[300px_1fr]">
                    <div className="bg-linear-to-br from-primary-900 to-primary-800 p-8">
                      <h3 className="text-2xl font-bold text-white mb-3">Services</h3>
                      <p className="text-sm text-white leading-relaxed">
                        We provide the most comprehensive range of express courier and
                        general freight services across the globe.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 p-8">
                      {[...services.left, ...services.right].map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceNavigation(service.id)}
                          className="text-left text-gray-700 hover:text-primary-600 hover:translate-x-1 transition-all duration-200 font-medium text-lg"
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/customer-service"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Customer Service
            </Link>


            <Link
              href="/track"
              className="bg-accent-500 flex gap-2 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Track</span>
              <PackageSearch />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-gray-700 hover:text-primary-600 py-2 font-medium"
            >
              About
            </Link>

            <div className="border-t border-gray-100 pt-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Services
              </p>
              {[...services.left, ...services.right].map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceNavigation(service.id)}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 py-2 pl-4"
                >
                  {service.name}
                </button>
              ))}
            </div>

            <Link
              href="/customer-service"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-gray-700 hover:text-primary-600 py-2 font-medium border-t border-gray-100 pt-3"
            >
              Customer Service
            </Link>

            <Link
              href="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-gray-700 hover:text-primary-600 py-2 font-medium"
            >
              FAQ
            </Link>

            <Link
              href="/track"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 bg-accent-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-200 shadow-md mt-2"
            >
              <span>Track</span>
              <PackageSearch />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}