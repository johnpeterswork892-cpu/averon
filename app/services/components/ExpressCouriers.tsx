'use client'
import { motion } from "framer-motion";

export default function ExpressCouriers() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section id="express-couriers" className="relative py-20">
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
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2400&auto=format&fit=crop"
                  alt="Express Courier Services"
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
                Express Couriers
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                When speed matters, our express courier services deliver. Whether you&apos;re shipping critical business documents, eCommerce orders, or time-sensitive parcels, we provide fast, reliable door-to-door delivery with real-time tracking and signature confirmation. Same-day, next-day, and scheduled delivery options available nationwide.
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Why Choose Our Express Courier Services?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Lightning-Fast Delivery</h4>
                      <p className="text-gray-600">Same-day delivery within city limits, next-day delivery nationwide. Our extensive courier network and optimized routing ensure your parcels reach their destination quickly. Critical shipments receive priority handling with dedicated courier assignment for maximum speed.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Real-Time Tracking & Notifications</h4>
                      <p className="text-gray-600">Track every parcel from pickup to delivery with live GPS updates. Receive automatic SMS and email notifications at each stage: pickup confirmation, in-transit updates, out-for-delivery alerts, and delivery confirmation with recipient signature capture.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Flexible Pickup & Delivery Options</h4>
                      <p className="text-gray-600">Schedule pickups at your convenience or drop off at any of our numerous service points. Choose delivery to homes, offices, or secure parcel lockers. Missed delivery? We offer convenient redelivery scheduling or alternative pickup location options.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ff6a00] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">eCommerce Integration</h4>
                      <p className="text-gray-600">Seamlessly integrate with your online store platform. Our API connects with Shopify, WooCommerce, Magento, and custom platforms. Automate label generation, bulk shipment creation, and return processing. Access discounted rates for high-volume shippers.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Types */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Our Express Delivery Options
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Same-Day Express</h4>
                    <p className="text-gray-600 mb-3">
                      Ultra-fast delivery within hours for urgent shipments. Perfect for critical documents, emergency supplies, or last-minute deliveries. Book by noon for same-day delivery within the same city or metropolitan area. Dedicated courier assigned exclusively to your shipment for direct, non-stop delivery with priority handling throughout.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Delivery within 3-6 hours of booking
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Available 7 days a week, including holidays
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Signature required for proof of delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Up to 30kg weight limit per parcel
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">Next-Day Delivery</h4>
                    <p className="text-gray-600 mb-3">
                      Reliable overnight delivery service covering all major cities and towns nationwide. Ship today, deliver tomorrow before 12 PM, 5 PM, or end of business day based on your selected service level. Ideal for business-to-business shipments, online order fulfillment, and time-sensitive parcels that need guaranteed next-day arrival.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Before 12 PM: Premium next-day morning delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Before 5 PM: Standard next-day afternoon delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        End of Day: Economy next-day delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Coverage to 98% of postal codes nationwide
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-[#0f2b68] mb-3">eCommerce Fulfillment</h4>
                    <p className="text-gray-600 mb-3">
                      Specialized delivery solutions for online retailers and marketplace sellers. Integrate directly with your eCommerce platform for automated shipping label creation, bulk order processing, and seamless tracking updates sent to your customers. Competitive volume discounts available. Includes cash-on-delivery (COD) collection, return management, and flexible delivery time slots.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        API integration with major platforms
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Cash-on-delivery (COD) service available
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Hassle-free returns processing
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]"></span>
                        Volume discounts for high-volume shippers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Simple Express Delivery Process
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Book Your Shipment</h4>
                      <p className="text-gray-600">Create your shipment online in minutes or call our customer service team. Enter sender and recipient details, package dimensions, and select your preferred delivery speed. Receive instant pricing with no hidden fees. Print your shipping label or request courier pickup with label.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Package Pickup</h4>
                      <p className="text-gray-600">Schedule a convenient pickup time or drop off your parcel at any of our service points. Our couriers collect from your location with scheduled time windows. Parcels are scanned immediately upon pickup, triggering real-time tracking activation and sender notification.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Express Transit</h4>
                      <p className="text-gray-600">Your parcel moves through our optimized courier network with priority handling. Track in real-time as your package progresses through collection, sorting, transit, and out-for-delivery stages. Receive automatic status updates via SMS and email at every milestone.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Delivery & Confirmation</h4>
                      <p className="text-gray-600">Our courier delivers directly to the recipient with signature capture for security. Recipients receive advance notification with estimated delivery window. Photo proof of delivery available. If recipient unavailable, we leave a notification card with redelivery or pickup instructions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0f2b68] mb-4">
                  Additional Express Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Document Courier</h4>
                    <p className="text-gray-600 text-sm">Secure delivery of sensitive business documents and contracts</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Temperature Controlled</h4>
                    <p className="text-gray-600 text-sm">Cold chain delivery for pharmaceuticals and perishables</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Scheduled Delivery</h4>
                    <p className="text-gray-600 text-sm">Choose specific delivery date and time window</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">COD Service</h4>
                    <p className="text-gray-600 text-sm">Cash-on-delivery collection and remittance</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Return Management</h4>
                    <p className="text-gray-600 text-sm">Streamlined reverse logistics for eCommerce returns</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Bulk Shipping</h4>
                    <p className="text-gray-600 text-sm">Volume discounts for regular high-volume shippers</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="/customer-service"
                  className="inline-block px-8 py-4 bg-[#ff6a00] text-white font-semibold rounded-xl hover:bg-[#e55f00] transition-all duration-300 hover:shadow-lg"
                >
                  Book Express Delivery
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}