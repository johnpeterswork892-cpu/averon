'use client'
import { motion, type Variants } from "framer-motion";

export default function ServicesPreview() {
  const services = [
    {
      title: "Transport",
      description:
        "Nationwide ground transportation with full truckload and less-than-truckload options. Reliable, cost-effective solutions for domestic freight of any size.",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2400&auto=format&fit=crop",
      href: "/services/transport",
    },
    {
      title: "Air & Ocean Freight",
      description:
        "International shipping solutions with comprehensive air and sea freight services. Connect your business to global markets with competitive rates and expert handling.",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2400&auto=format&fit=crop",
      href: "/services/air-ocean-freight",
    },
    {
      title: "Logistics",
      description:
        "End-to-end supply chain management and coordination. Optimize your operations with our integrated logistics solutions, from warehousing to last-mile delivery.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2400&auto=format&fit=crop",
      href: "/services/logistics",
    },
    {
      title: "Couriers",
      description:
        "Express courier services for time-sensitive deliveries. Same-day and next-day options available with real-time tracking and signature confirmation.",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2400&auto=format&fit=crop",
      href: "/services/couriers",
    },
    {
      title: "Containers",
      description:
        "Full container load (FCL) and less container load (LCL) services. Flexible scheduling and competitive pricing for all your containerized shipping needs.",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2400&auto=format&fit=crop",
      href: "/services/containers",
    },
    {
      title: "Vaults",
      description:
        "Secure storage facilities with 24/7 monitoring and climate control. Perfect for valuable goods, documents, and inventory management with flexible access.",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2400&auto=format&fit=crop",
      href: "/services/vaults",
    },
  ];

  const EASE_OUT: [number, number, number, number] = [
    0.25, 0.46, 0.45, 0.94,
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE_OUT,
      },
    },
  };

  const subheadingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: EASE_OUT,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: EASE_OUT,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl md:text-6xl font-bold text-[#0f2b68] mb-6"
            >
              Comprehensive Logistics Solutions
            </motion.h2>

            <motion.p
              variants={subheadingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              From express courier packets to full truckloads, we deliver
              excellence across every mile with tailored solutions for your
              unique needs.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={service.href}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, margin: "-50px" }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: EASE_OUT },
                }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
              >

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: EASE_OUT }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#081a40]/80 via-[#0f2b68]/40 to-transparent"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />

                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 border-2 border-[#ff6a00]/50"
                    initial={{ rotate: 45 }}
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <motion.h3
                    className="text-2xl font-bold text-[#0f2b68] mb-3 group-hover:text-[#ff6a00] transition-colors duration-300"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#ff6a00] font-semibold group-hover:gap-4 transition-all duration-300">
                    <span>Learn More</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 border-2 rounded-2xl pointer-events-none"
                  initial={{ borderColor: "transparent" }}
                  whileHover={{ borderColor: "#ff6a00" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
