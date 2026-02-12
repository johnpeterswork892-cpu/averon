'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function AirOceanFreight() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="air-ocean-freight" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Image Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="lg:sticky lg:top-20">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2400&auto=format&fit=crop"
                  alt="Air and Ocean Freight Services"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 transform -skew-y-2 rounded-3xl -z-10" />

            <div className="relative p-8 lg:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Air & Ocean Freight
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Connect your business to global markets with our comprehensive international shipping solutions. Whether you need rapid air freight or cost-effective ocean transport, we provide reliable, secure, and competitively priced services to over 150 countries worldwide.
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  Why Choose Our International Freight Services?
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: "Global Network Coverage",
                      text:
                        "Partnerships with major airlines and shipping lines ensure your cargo reaches any destination efficiently, with direct routes to major ports and airports across six continents.",
                    },
                    {
                      title: "Customs Clearance Expertise",
                      text:
                        "Our experienced customs brokers handle all documentation, duties, and compliance requirements, ensuring smooth clearance at both origin and destination ports without delays or complications.",
                    },
                    {
                      title: "Real-Time Cargo Tracking",
                      text:
                        "Monitor your shipments 24/7 with our advanced tracking system. Receive automatic updates at every milestone, from departure to arrival, giving you complete visibility and peace of mind.",
                    },
                    {
                      title: "Flexible Service Options",
                      text:
                        "Choose from express air freight for time-sensitive cargo or economical ocean freight for cost-effective bulk shipments. We offer door-to-door, port-to-port, and door-to-port services tailored to your needs.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Types */}
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Our International Shipping Solutions
              </h3>

              <div className="space-y-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    Air Freight Services
                  </h4>
                  <p className="text-gray-600 mb-3">
                    When time is critical, our air freight services deliver. We work with leading cargo airlines to provide fast, reliable international shipping with departure frequencies that meet your urgent deadlines. Ideal for high-value goods, perishables, and time-sensitive shipments requiring delivery within 2-5 days globally.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Express Air: 24-48 hour delivery to major cities</li>
                    <li>Standard Air: 3-5 day delivery worldwide</li>
                    <li>Consolidated Air: Cost-effective for smaller shipments</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    Ocean Freight Services
                  </h4>
                  <p className="text-gray-600 mb-3">
                    For larger volumes and cost-conscious shipping, our ocean freight solutions offer unbeatable value. We provide both full container load (FCL) and less than container load (LCL) options, with weekly sailings to all major ports. Perfect for bulk commodities, large equipment, and high-volume merchandise with flexible delivery timeframes of 15-45 days depending on destination.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>FCL: Dedicated 20ft, 40ft, and 40ft high-cube containers</li>
                    <li>LCL: Shared container space for smaller shipments</li>
                    <li>Break Bulk: Oversized and heavy cargo handling</li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="/customer-service"
                  className="inline-block px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-700 transition-all duration-300 hover:shadow-lg"
                >
                  Request a Freight Quote
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
