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
          {/* Content Side with Slanted Background - LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative order-2 lg:order-1"
          >
            {/* Slanted Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 transform skew-y-2 rounded-3xl -z-10" />
            
            <div className="relative p-8 lg:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f2b68] mb-6">
                Logistics Solutions
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Optimize your entire supply chain with our comprehensive third-party logistics (3PL) services. From warehousing and inventory management to cross-docking and distribution, we provide end-to-end solutions that reduce costs, improve efficiency, and scale with your business growth. Let us handle the logistics while you focus on your core business.
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Complete Supply Chain Management
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Integrated 3PL Services</h4>
                      <p className="text-gray-600">Comprehensive third-party logistics solutions covering receiving, storage, order fulfillment, and distribution. Our warehouse management system integrates seamlessly with your business operations, providing real-time inventory visibility and automated order processing for maximum efficiency and accuracy.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Advanced Technology Platform</h4>
                      <p className="text-gray-600">Access our cloud-based warehouse management system (WMS) for complete control over your inventory. Track stock levels, monitor order status, generate reports, and manage multiple locations from a single dashboard. API integration available for seamless connection with your ERP and eCommerce systems.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Flexible Scalability</h4>
                      <p className="text-gray-600">Adapt to seasonal demand fluctuations and business growth without capital investment in warehousing infrastructure. Scale storage space up or down as needed, add fulfillment capacity during peak seasons, and expand to new distribution regions without operational disruption or long-term commitments.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cost Optimization</h4>
                      <p className="text-gray-600">Reduce logistics costs by up to 30% through shared infrastructure, optimized processes, and economies of scale. Pay only for space and services used, eliminating fixed overhead costs. Our route optimization and consolidation strategies further reduce transportation expenses while maintaining service levels.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Types */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Our Logistics Service Portfolio
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Warehousing & Storage</h4>
                    <p className="text-gray-600 mb-3">
                      Modern, secure warehouse facilities strategically located near major transportation hubs. Climate-controlled environments with 24/7 security monitoring, fire suppression systems, and comprehensive insurance coverage. Flexible storage options including pallet racking, bulk storage, and dedicated space allocation. FIFO and LIFO inventory management, lot tracking, and expiry date monitoring ensure proper stock rotation and compliance.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Over 500,000 sq ft of warehouse space nationwide
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Temperature-controlled and ambient storage zones
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Barcode scanning and RFID inventory tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Real-time inventory visibility and reporting
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Order Fulfillment</h4>
                    <p className="text-gray-600 mb-3">
                      Complete B2B and B2C order fulfillment services from receiving to last-mile delivery. Automated order processing, accurate picking and packing, quality control checks, and branded packaging options. Same-day order processing for orders received before cutoff time. Returns processing and restocking included. Integration with major eCommerce platforms and marketplaces for automated order import and tracking updates.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        99.9% order accuracy rate with quality controls
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Custom packing and branded materials available
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Kitting, assembly, and value-added services
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Multi-channel fulfillment integration
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Cross-Docking Services</h4>
                    <p className="text-gray-600 mb-3">
                      Minimize storage costs and reduce delivery times with our efficient cross-docking operations. Incoming shipments are sorted and immediately transferred to outbound vehicles with minimal warehouse dwell time. Perfect for time-sensitive products, consolidation of LTL shipments, and distribution to multiple locations. Our strategically located cross-dock facilities enable rapid product flow through the supply chain.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Less than 24-hour facility dwell time
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Reduce inventory holding costs significantly
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Consolidation and deconsolidation capabilities
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Strategic locations for optimal distribution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  How Our 3PL Services Work
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Consultation & Setup</h4>
                      <p className="text-gray-600">We analyze your logistics needs, product characteristics, and order patterns to design a customized solution. Our team configures the WMS, sets up your product catalog, and establishes receiving and fulfillment procedures. Integration with your business systems is completed and tested before go-live.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Inventory Receiving</h4>
                      <p className="text-gray-600">Ship your products to our warehouse where our team receives, inspects, and processes all incoming inventory. Each item is scanned, labeled, and put away in designated storage locations. You receive instant notifications and can view updated inventory levels in real-time through your dashboard.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Order Processing & Fulfillment</h4>
                      <p className="text-gray-600">Orders are automatically imported from your sales channels and prioritized in our picking queue. Our team picks, packs, and ships orders with accuracy verification at each step. Tracking information is automatically sent to your customers, and inventory levels update in real-time.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Distribution & Delivery</h4>
                      <p className="text-gray-600">Completed orders are handed to our carrier network for final delivery. We optimize carrier selection based on destination, service level, and cost. Track all shipments through a single interface and receive delivery confirmations. Our quality control ensures every package meets standards before leaving our facility.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Returns & Reporting</h4>
                      <p className="text-gray-600">Returned items are received, inspected, and restocked or disposed according to your instructions. Access detailed performance reports including order accuracy, fulfillment speed, inventory turns, and shipping costs. Monthly business reviews help identify optimization opportunities and plan for seasonal demand.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value-Added Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Value-Added Logistics Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Kitting & Assembly</h4>
                    <p className="text-gray-600 text-sm">Product bundling and assembly services</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Labeling & Tagging</h4>
                    <p className="text-gray-600 text-sm">Custom labels, price tags, and compliance marking</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Quality Inspection</h4>
                    <p className="text-gray-600 text-sm">Incoming and outgoing quality control checks</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Returns Processing</h4>
                    <p className="text-gray-600 text-sm">Complete reverse logistics and restocking</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Inventory Reporting</h4>
                    <p className="text-gray-600 text-sm">Real-time dashboards and custom reports</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Packaging Design</h4>
                    <p className="text-gray-600 text-sm">Branded packaging and custom box solutions</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
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

          {/* Image Side - RIGHT - STICKY ON DESKTOP */}
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