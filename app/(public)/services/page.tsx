'use client'
import { motion } from "framer-motion";
import AirOceanFreight from "./components/airOcean"
import ContainerTransport from "./components/Containertransport";
import ExpressCouriers from "./components/ExpressCouriers";
import LogisticsSolutions from "./components/logisticsSolutios";
import FreightTransport from "./components/freightTransport";
import WarehouseVault from "./components/wareHouseVault";

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-[#0f2b68] to-[#081a40] py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              From express deliveries to international freight, we deliver comprehensive logistics solutions that connect your business to the world. Reliable service, competitive rates, and customer-focused support across every mile.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 opacity-10 rounded-full blur-3xl"></div>
      </section> */}

      {/* Services Introduction */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Complete Logistics & Freight Solutions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide end-to-end logistics services designed to streamline your supply chain, reduce costs, and improve delivery performance. Whether you&apos;re shipping a single parcel or managing complex international freight operations, our experienced team and modern infrastructure ensure your cargo moves efficiently and securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Service Sections */}
      <AirOceanFreight />
      <ContainerTransport />
      <ExpressCouriers />
      <LogisticsSolutions />
      <FreightTransport />
      <WarehouseVault />

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0f2b68] to-[#081a40]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Contact our team today for a customized quote or consultation. We&apos;re here to help optimize your logistics operations and reduce your shipping costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/customer-service"
                className="inline-block px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl hover:bg-[#e55f00] transition-all duration-300 hover:shadow-lg"
              >
                Request a Quote
              </a>
              <a
                href="/track"
                className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                Track Shipment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}