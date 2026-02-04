'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContainerTransport() {
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
    <section id="container-transport" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* CONTENT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 transform skew-y-2 rounded-3xl -z-10" />

            <div className="relative p-8 lg:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Container Transport
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Streamline your containerized cargo operations with our comprehensive FCL and LCL transport solutions. From port-to-door delivery to intermodal transportation, we provide flexible, reliable container shipping services that optimize your supply chain efficiency and reduce logistics costs.
              </p>

              {/* KEY FEATURES */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  Complete Container Solutions
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: "Multiple Container Sizes",
                      text:
                        "Access to standard 20ft, 40ft, and 40ft high-cube containers, as well as specialized equipment including refrigerated containers (reefers), open-top, and flat-rack containers for oversized cargo. All containers meet ISO standards and undergo rigorous safety inspections.",
                    },
                    {
                      title: "Intermodal Capabilities",
                      text:
                        "Seamless container transfers between ships, trains, and trucks ensure efficient inland transportation. Our partnerships with rail operators and trucking companies provide cost-effective door-to-door delivery across the country, reducing handling and transit times.",
                    },
                    {
                      title: "LCL Consolidation Services",
                      text:
                        "Don't have enough cargo to fill a full container? Our LCL services consolidate multiple shipments, allowing you to share container space and costs. We offer regular weekly consolidations to major destinations with competitive rates and reliable scheduling.",
                    },
                    {
                      title: "Container Tracking & Management",
                      text:
                        "Monitor your containers in real-time from origin to destination. Our advanced tracking system provides visibility into container location, estimated arrival times, detention and demurrage charges, and return status, helping you manage your container fleet efficiently.",
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

              {/* SERVICE TYPES */}
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Container Shipping Options
              </h3>

              <div className="space-y-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    Full Container Load (FCL)
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Secure exclusive use of an entire container for your cargo. FCL shipping is ideal for large shipments, providing faster transit times, reduced handling, and lower risk of damage. Your goods travel directly from origin to destination without additional consolidation or deconsolidation stops, ensuring maximum security and efficiency.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>20ft Standard: Up to 28,000 kg capacity, 33 CBM volume</li>
                    <li>40ft Standard: Up to 26,500 kg capacity, 67 CBM volume</li>
                    <li>40ft High Cube: Up to 26,500 kg capacity, 76 CBM volume</li>
                    <li>Direct door-to-door delivery available</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    Less than Container Load (LCL)
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Cost-effective solution for smaller shipments that don&apos;t require a full container. Your cargo shares container space with other shipments heading to the same destination. We handle all consolidation and deconsolidation activities, providing you with flexible shipping options without the cost of an entire container. Perfect for small to medium businesses and regular smaller shipments.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Minimum 1 CBM (cubic meter) shipments accepted</li>
                    <li>Weekly consolidations to major ports worldwide</li>
                    <li>Pay only for space your cargo occupies</li>
                    <li>Professional packing and securing included</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    Specialized Containers
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Handle unique cargo requirements with our specialized container fleet. Refrigerated containers maintain precise temperature control for perishable goods. Open-top and flat-rack containers accommodate oversized machinery and equipment. Tank containers transport liquids and bulk materials safely. Whatever your specialized needs, we have the right equipment and expertise.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Refrigerated (Reefer): Temperature-controlled -25°C to +25°C</li>
                    <li>Open Top: Easy loading of tall or oversized cargo</li>
                    <li>Flat Rack: Heavy machinery and construction equipment</li>
                    <li>Tank: Liquid bulk cargo and hazardous materials</li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="/customer-service"
                  className="inline-block px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-700 transition-all duration-300 hover:shadow-lg"
                >
                  Request Container Quote
                </a>
              </div>
            </div>
          </motion.div>

          {/* IMAGE SIDE (STICKY UNTIL SECTION ENDS) */}
          <div className="relative order-1 lg:order-2">
            <div className="lg:sticky lg:top-20">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2400&auto=format&fit=crop"
                  alt="Container Transport Services"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
