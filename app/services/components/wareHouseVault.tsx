'use client'
import { motion } from "framer-motion";

export default function WarehouseVault() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section id="warehouse-vault" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
         
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={fadeInUp}
            className="relative order-2 lg:order-1"
          >
            {/* Slanted Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 transform skew-y-2 rounded-3xl -z-10" />
            
            <div className="relative p-8 lg:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f2b68] mb-6">
                Warehouse & Vault Storage
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Protect your valuable assets with our state-of-the-art secure storage facilities. From climate-controlled warehouse space for inventory management to high-security vault storage for valuables and sensitive documents, we provide comprehensive storage solutions with 24/7 monitoring, comprehensive insurance, and flexible access arrangements tailored to your needs.
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Premium Storage Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Maximum Security Protection</h4>
                      <p className="text-gray-600">Multi-layer security with 24/7 CCTV surveillance, biometric access control, armed security personnel, and intrusion detection systems. Our facilities feature reinforced walls, seismic sensors, and fire suppression systems. All storage areas are fully alarmed with immediate police and fire department notification.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Climate-Controlled Environment</h4>
                      <p className="text-gray-600">Precision temperature and humidity control protects sensitive items from environmental damage. Our facilities maintain consistent conditions year-round: temperature between 18-24°C and relative humidity between 40-60%. Ideal for documents, electronics, artwork, pharmaceuticals, and other climate-sensitive materials.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Insurance Coverage</h4>
                      <p className="text-gray-600">All stored items are covered by our comprehensive insurance policy included in your storage fee. Additional coverage available for high-value items. Full replacement value coverage protects against theft, fire, water damage, and natural disasters. Simple claims process with fast settlement for covered losses.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Flexible Access Options</h4>
                      <p className="text-gray-600">Access your stored items according to your needs. Standard access during business hours at no extra charge. Extended hours and 24/7 access available with advance notice. We can also ship items to you or arrange courier delivery. Authorized representatives can access your storage with proper documentation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Types */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Our Storage Facilities
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Commercial Warehouse Storage</h4>
                    <p className="text-gray-600 mb-3">
                      Flexible warehouse space for businesses of all sizes. Store inventory, equipment, seasonal goods, or excess stock in our modern, secure facilities. Pallet storage with easy access for frequent movement or dedicated areas for long-term storage. Our warehouse management system tracks all items with barcode scanning, providing real-time inventory visibility through your online portal. Perfect for eCommerce businesses, manufacturers, and retailers needing overflow storage capacity.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        From 100 sq ft to 10,000+ sq ft available
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Pallet racking or floor storage options
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Loading docks and forklift access
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Online inventory management system
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Secure Vault Storage</h4>
                    <p className="text-gray-600 mb-3">
                      Bank-grade security for your most valuable items. Our reinforced vaults feature multiple security layers including biometric access, time-delay locks, and motion sensors. Ideal for storing important documents, precious metals, jewelry, artwork, historical artifacts, and irreplaceable family heirlooms. Private viewing rooms available for accessing your stored items. Each vault unit is individually alarmed with 24/7 monitoring.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Reinforced construction with seismic protection
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Biometric authentication required for access
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Fire-rated safes and climate control
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Private access rooms for confidentiality
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Document Storage & Management</h4>
                    <p className="text-gray-600 mb-3">
                      Professional records management for businesses with compliance requirements. Securely store physical documents with organized cataloging, barcode tracking, and retrieval services. Our climate-controlled facilities protect against deterioration, while our fire suppression systems ensure document safety. Retrieval service delivers specific files or boxes to your office. Secure destruction services available when retention periods expire, with certificates of destruction provided.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Organized by box with detailed inventory
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Same-day or next-day retrieval service
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Scanning and digitization services available
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Certified secure destruction when needed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Simple Storage Process
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Consultation & Assessment</h4>
                      <p className="text-gray-600">Contact us to discuss your storage needs. Well assess your requirements, recommend the appropriate storage type and size, and provide transparent pricing. Tour our facilities to see security measures and storage conditions firsthand. Receive a customized quote with no hidden fees or long-term commitments required.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Setup & Documentation</h4>
                      <p className="text-gray-600">Complete simple paperwork including storage agreement and inventory list. For vault storage, we photograph and document all items with your approval. Set up authorized access lists and specify any special handling requirements. Biometric profiles are created for secure vault access. The entire setup process typically completes in one visit.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Move-In & Storage</h4>
                      <p className="text-gray-600">Bring your items during scheduled hours or arrange pickup service. Our team assists with placement in your designated storage area. All items are scanned into our system and secured in your unit. Climate controls are activated, security systems armed, and monitoring begins immediately. You receive confirmation and can access inventory online.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Access & Management</h4>
                      <p className="text-gray-600">Access your storage anytime during business hours by presenting identification and completing biometric authentication. Extended hours available with advance notice. Request item retrieval, additions, or removals through our online portal. We maintain detailed logs of all access for your records and security.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Move-Out & Closure</h4>
                      <p className="text-gray-600">When ready to close your storage, schedule a move-out appointment. All items are verified against your inventory list during removal. We provide assistance with loading if needed. Final account settlement includes any prorated charges or refunds. Storage agreement is closed and all access credentials are deactivated.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  What You Can Store
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Inventory</h4>
                    <p className="text-gray-600 text-sm">Retail stock, equipment, seasonal items, office furniture</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Important Documents</h4>
                    <p className="text-gray-600 text-sm">Contracts, financial records, legal documents, certificates</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Valuables & Collectibles</h4>
                    <p className="text-gray-600 text-sm">Jewelry, precious metals, artwork, antiques, collectibles</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Electronics & IT Equipment</h4>
                    <p className="text-gray-600 text-sm">Servers, computers, backup systems, archived data</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Archive Materials</h4>
                    <p className="text-gray-600 text-sm">Historical records, photos, media, research materials</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Bulk Products</h4>
                    <p className="text-gray-600 text-sm">Palletized goods, packaged merchandise, raw materials</p>
                  </div>
                </div>
              </div>

              {/* Additional Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Additional Storage Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Inventory Management</h4>
                    <p className="text-gray-600 text-sm">Real-time tracking with online portal access</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Pickup & Delivery</h4>
                    <p className="text-gray-600 text-sm">We can collect and deliver items as needed</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Document Scanning</h4>
                    <p className="text-gray-600 text-sm">Digitization services for paper records</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Packing Supplies</h4>
                    <p className="text-gray-600 text-sm">Boxes, wrapping, and storage materials available</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Insurance Appraisal</h4>
                    <p className="text-gray-600 text-sm">Professional valuation for high-value items</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Flexible Terms</h4>
                    <p className="text-gray-600 text-sm">Monthly rental with no long-term commitment</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="/customer-service"
                  className="inline-block px-8 py-4 bg-[#ff6a00] text-white font-semibold rounded-xl hover:bg-[#e55f00] transition-all duration-300 hover:shadow-lg"
                >
                  Request Storage Quote
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
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2400&auto=format&fit=crop"
                  alt="Warehouse and Vault Storage"
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