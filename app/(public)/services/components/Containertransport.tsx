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
                Elevate your container logistics with secure, scalable FCL and LCL solutions. From port-to-door delivery to integrated intermodal transport, we optimize every movement to enhance efficiency and reduce operational complexity.
              </p>

              {/* KEY FEATURES */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  Complete Container Solutions
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: "Versatile Container Fleet",
                      text:
                        "Access standard and specialized ISO-certified containers, including reefers, open-top, flat-rack, and tank units—maintained to the highest safety standards.",
                    },
                    {
                      title: "Integrated Intermodal Network",
                      text:
                        "Seamless coordination between sea, rail, and road ensures efficient inland distribution with reduced handling and optimized transit times.",
                    },
                    {
                      title: "Strategic LCL Consolidation",
                      text:
                        "Cost-effective shared container solutions with scheduled consolidations to major global destinations.",
                    },
                    {
                      title: "Advanced Tracking & Control",
                      text:
                        "Real-time visibility into container location, transit milestones, and operational status from origin to final return.",
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
                    Dedicated container capacity for large shipments, offering enhanced security, streamlined transit, and reduced handling.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>20ft, 40ft & 40ft High Cube configurations</li>
                    <li>Optimized capacity and secure loading</li>
                    <li>Direct door-to-door delivery available</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    Less than Container Load (LCL)
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Flexible shared container services designed for smaller consignments with cost-efficient global scheduling.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Minimum 1 CBM shipments</li>
                    <li>Scheduled weekly consolidations</li>
                    <li>Pay only for utilized cargo space</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    Specialized Containers
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Tailored equipment for unique cargo requirements, ensuring safety, precision, and compliance across all shipment types.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Reefer: Temperature-controlled cargo</li>
                    <li>Open Top & Flat Rack: Oversized equipment</li>
                    <li>Tank Containers: Liquid and bulk transport</li>
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