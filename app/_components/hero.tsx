"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAVBAR_HEIGHT = 96; 

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2400&auto=format&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative bg-gray-900"
      style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

       
        <div className="absolute inset-0 bg-linear-to-r from-primary-950/95 via-primary-900/85 to-primary-800/75" />

       
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 79px,
                rgb(31,79,216) 79px,
                rgb(31,79,216) 81px
              )`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 79px,
                rgb(31,79,216) 79px,
                rgb(31,79,216) 81px
              )`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 159px,
                rgb(255,106,0) 159px,
                rgb(255,106,0) 161px
              )`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fast, Reliable{" "}
            <span className="text-accent-400">Global</span>
            <br className="hidden md:block" />
            Delivery Solutions
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Your trusted partner for express courier services, freight logistics,
            and global supply chain solutions.
          </p>

          <Link
            href="/track"
            className="inline-flex items-center gap-3 bg-accent-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent-600 transition shadow-xl hover:scale-105"
          >
            Track Shipment →
          </Link>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["24/7", "Lightning Speed", "Real-time tracking"],
              ["200+", "Global Reach", "Countries covered"],
              ["99.9%", "Reliable Service", "On-time delivery"],
            ].map(([stat, title, desc]) => (
              <div
                key={title}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6"
              >
                <div className="text-accent-400 text-4xl font-bold mb-2">
                  {stat}
                </div>
                <div className="text-white font-semibold text-lg mb-1">
                  {title}
                </div>
                <div className="text-gray-300 text-sm">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? "w-8 bg-accent-500"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
