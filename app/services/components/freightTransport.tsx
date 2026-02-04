'use client'

import { motion } from "framer-motion";

export default function FreightTransport() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section id="freight-transport" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Side - STICKY ON DESKTOP */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="lg:sticky lg:top-20">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2400&auto=format&fit=crop"
                  alt="Freight Transport Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2b68]/60 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content Side with Slanted Background */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative"
          >
            {/* Slanted Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 transform -skew-y-2 rounded-3xl -z-10" />
            
            <div className="relative p-8 lg:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f2b68] mb-6">
                Freight Transport
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Move goods across the country with our reliable nationwide freight transport services. Whether you need full truckload (FTL) capacity or cost-effective less-than-truckload (LTL) shipping, we provide flexible solutions with competitive rates, on-time delivery, and comprehensive cargo protection. Our modern fleet and experienced drivers ensure your freight arrives safely and on schedule.
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Reliable Ground Transportation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Nationwide Coverage</h4>
                      <p className="text-gray-600">Service to all 36 states and major cities across Nigeria. Direct routes to industrial zones, ports, and commercial centers. Our extensive carrier network ensures reliable capacity even during peak seasons, with guaranteed space allocation for regular customers and priority routing options.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Modern Fleet & Equipment</h4>
                      <p className="text-gray-600">Well-maintained trucks averaging less than 3 years old, equipped with GPS tracking, temperature monitoring, and safety systems. Our fleet includes dry vans, refrigerated trucks (reefers), flatbeds, and specialized equipment. All vehicles undergo rigorous maintenance schedules and safety inspections.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Flexible Shipping Options</h4>
                      <p className="text-gray-600">Choose full truckload for large shipments or LTL to share trailer space and costs. We offer expedited service for urgent deliveries, economy options for cost-conscious shipping, and scheduled routes for predictable transit times. Customized solutions available for specialized cargo and regular shipping lanes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cargo Protection & Insurance</h4>
                      <p className="text-gray-600">Comprehensive cargo insurance coverage included with all shipments. Professional loading and securing procedures minimize damage risk. Our claims department processes any incidents quickly and fairly. Additional insurance coverage available for high-value goods and specialized cargo with specific requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Types */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Our Freight Shipping Services
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Full Truckload (FTL)</h4>
                    <p className="text-gray-600 mb-3">
                      Dedicated truck service for your exclusive use, providing the fastest transit times and minimal handling. FTL is ideal for shipments over 10 pallets or 5,000 kg, time-sensitive freight, or high-value cargo requiring secure transport. Direct point-to-point delivery reduces transit time and damage risk. Choose from 33-foot, 40-foot, or 48-foot trailers based on your cargo volume.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Up to 26 pallets or 20,000 kg capacity
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Direct delivery with no intermediate stops
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Faster transit: 1-3 days nationwide
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Temperature-controlled options available
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Less Than Truckload (LTL)</h4>
                    <p className="text-gray-600 mb-3">
                      Cost-effective shipping for smaller freight that doesn&apos;t require a full truck. Your cargo shares trailer space with other compatible shipments heading in the same direction. Perfect for 1-10 pallets or shipments under 5,000 kg. We handle all consolidation and freight transfers at our terminals, providing reliable service at lower costs than FTL for smaller loads.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Minimum 1 pallet or 150 kg shipments
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Pay only for space used, not full truck
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Transit: 2-5 days depending on distance
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Liftgate and inside delivery available
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Specialized Freight</h4>
                    <p className="text-gray-600 mb-3">
                      Handle unique cargo requirements with our specialized transport solutions. Flatbed trucks for oversized machinery and construction equipment, refrigerated trailers maintaining precise temperature control for perishables, hazmat-certified transport for dangerous goods, and heavy haul services for super-heavy or super-wide loads. Experienced drivers and specialized equipment ensure safe delivery of your specialized freight.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Flatbed: Construction equipment, steel, lumber
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Refrigerated: Temperature-sensitive cargo (-20°C to +20°C)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Hazmat: Certified for dangerous goods transport
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Heavy Haul: Oversized and overweight cargo
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Freight Shipping Process
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quote & Booking</h4>
                      <p className="text-gray-600">Request an instant quote online by entering origin, destination, weight, and dimensions. Our system provides immediate pricing for both FTL and LTL options. Book directly online or speak with our freight specialists for complex shipments requiring specialized equipment or handling.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Pickup Scheduling</h4>
                      <p className="text-gray-600">Schedule pickup at your preferred time with a 2-hour arrival window. Our drivers arrive with proper equipment and documentation. Freight is inspected, counted, and loaded according to safety standards. Bill of lading is completed and signed, creating a legal shipping contract.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Transit & Tracking</h4>
                      <p className="text-gray-600">Your freight moves through our optimized network with real-time GPS tracking. FTL shipments go direct to destination. LTL freight may consolidate at terminals for efficiency. Track your shipment 24/7 online or via mobile app, receiving automatic status updates at key milestones.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Delivery & Confirmation</h4>
                      <p className="text-gray-600">Consignee receives advance delivery notification with estimated arrival time. Driver delivers freight during business hours or at scheduled appointment. Freight is unloaded, inspected, and signed for. Proof of delivery with signature is immediately available in your account portal.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Additional Freight Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Liftgate Service</h4>
                    <p className="text-gray-600 text-sm">Loading and unloading without dock facilities</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Inside Delivery</h4>
                    <p className="text-gray-600 text-sm">Delivery beyond the loading dock or threshold</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Appointment Delivery</h4>
                    <p className="text-gray-600 text-sm">Scheduled delivery at specific time window</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Palletizing Service</h4>
                    <p className="text-gray-600 text-sm">Professional freight palletizing and wrapping</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Residential Delivery</h4>
                    <p className="text-gray-600 text-sm">Home delivery with flexible scheduling options</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Freight Consolidation</h4>
                    <p className="text-gray-600 text-sm">Combine multiple shipments for cost savings</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="/customer-service"
                  className="inline-block px-8 py-4 bg-[#ff6a00] text-white font-semibold rounded-xl hover:bg-[#e55f00] transition-all duration-300 hover:shadow-lg"
                >
                  Get Freight Quote
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}