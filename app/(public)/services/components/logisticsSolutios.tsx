'use client'

import { motion } from "framer-motion";

export default function LogisticsSolutions() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section id="logistics-solutions" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 transform skew-y-2 rounded-3xl -z-10" />
            
            <div className="relative p-8 lg:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f2b68] mb-6">
                Logistics Solutions
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                End-to-end 3PL solutions designed to streamline operations, reduce costs, and scale with your growth — from warehousing to final delivery.
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Supply Chain Excellence
                </h3>
                <div className="space-y-4">

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Integrated 3PL Services</h4>
                      <p className="text-gray-600">Receiving, storage, fulfillment, and distribution managed seamlessly under one system.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Smart Technology Platform</h4>
                      <p className="text-gray-600">Real-time inventory visibility, reporting, and ERP/eCommerce integrations.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Scalable Infrastructure</h4>
                      <p className="text-gray-600">Flexible capacity to handle seasonal peaks and long-term expansion.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cost Efficiency</h4>
                      <p className="text-gray-600">Shared infrastructure and optimized routing to lower overhead and transport costs.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Service Portfolio */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Core Services
                </h3>

                <div className="space-y-6">

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Warehousing</h4>
                    <p className="text-gray-600">
                      Secure, strategically located facilities with real-time inventory tracking and climate-controlled options.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Order Fulfillment</h4>
                    <p className="text-gray-600">
                      Accurate B2B and B2C fulfillment with fast processing, branded packaging, and returns management.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Cross-Docking</h4>
                    <p className="text-gray-600">
                      Rapid transfer and consolidation services to reduce storage time and accelerate distribution.
                    </p>
                  </div>

                </div>
              </div>

              {/* Value-Added Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Value-Added Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Kitting & Assembly</h4>
                    <p className="text-gray-600 text-sm">Product bundling and light assembly.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Labeling & Compliance</h4>
                    <p className="text-gray-600 text-sm">Custom labeling and regulatory tagging.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Quality Control</h4>
                    <p className="text-gray-600 text-sm">Inspection and verification processes.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Returns Management</h4>
                    <p className="text-gray-600 text-sm">Efficient reverse logistics solutions.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="/customer-service"
                  className="inline-block px-8 py-4 bg-[#ff6a00] text-white font-semibold rounded-xl hover:bg-[#e55f00] transition-all duration-300 hover:shadow-lg"
                >
                  Request 3PL Consultation
                </a>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative order-1 lg:order-2"
          >
            <div className="lg:sticky lg:top-20">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2400&auto=format&fit=crop"
                  alt="Logistics Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2b68]/60 to-transparent" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}