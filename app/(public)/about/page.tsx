'use client'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPagePreview() {
  return (
    <main className="bg-white pt-6">
      <h1 className="text-4xl md:text-5xl text-center font-bold text-[#0f2b68] mb-2">
        About Averon Express
      </h1>
      
      {/* HERO / INTRO */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text with Slanted Background */}
          <div className="relative">
            <div 
              className="absolute inset-0 bg-[#1f4fd8]/10 pointer-events-none"
              style={{
                clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
              }}
            />
            
            <AnimatedSection delay={0}>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[#ff6a00] mb-6">
                  Who are we?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are a courier and logistics company built around one simple
                  belief: shipping should be fast, reliable, and stress-free for
                  everyone. From personal packages to critical deliveries, we help
                  individuals move what matters most.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="h-80 rounded-2xl bg-gray-200 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1600&auto=format&fit=crop)",
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OUR BUSINESS */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <AnimatedSection delay={0}>
          <div className="h-96 rounded-2xl bg-gray-200 overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop)",
              }}
            />
          </div>
        </AnimatedSection>

        <div className="relative">
          <div 
            className="absolute inset-0 bg-primary-400/10 pointer-events-none"
            style={{
              clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
            }}
          />
          
          <AnimatedSection delay={0.2}>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#ff6a00] mb-6">
                Our Business
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We specialize in courier services designed for everyday customers
                who need dependable delivery without complications. Our operations
                combine modern logistics technology with experienced handling to
                ensure every shipment is treated with care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re sending a document across town or a package across
                borders, our systems are built to keep you informed, confident, and
                in control from pickup to delivery.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <AnimatedSection delay={0}>
            <h2 className="text-3xl font-bold text-[#0f2b68] mb-12 text-center">
              Why Choose Us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatedSection delay={0.1}>
              <div className="rounded-xl border border-gray-200 bg-white p-8">
                <h3 className="text-xl font-semibold text-[#ff6a00] mb-3">
                  Reliability First
                </h3>
                <p className="text-gray-600">
                  We prioritize consistency and accuracy, ensuring your shipment
                  arrives as expected, every time.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-xl border border-gray-200 bg-white p-8">
                <h3 className="text-xl font-semibold text-accent-500 mb-3">
                  Clear Communication
                </h3>
                <p className="text-gray-600">
                  Real-time updates and transparent processes mean you&apos;re never
                  left wondering where your package is.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-xl border border-gray-200 bg-white p-8">
                <h3 className="text-xl font-semibold text-accent-500 mb-3">
                  Customer-Focused Service
                </h3>
                <p className="text-gray-600">
                  Our support team is built around helping real people, not
                  ticket numbers.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div 
            className="absolute inset-0 bg-[#1f4fd8]/10 pointer-events-none"
            style={{
              clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
            }}
          />
          
          <AnimatedSection delay={0}>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-accent-500 mb-6">
                Our Mission & Values
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mission is to make delivery simple, dependable, and accessible.
                Everything we do is guided by a set of values that put customers
                first.
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">•</span>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">Integrity:</strong> We do what
                    we promise and take responsibility for every shipment.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">•</span>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">Efficiency:</strong> We respect
                    your time by delivering quickly and accurately.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">•</span>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">Care:</strong> Every package is
                    handled as if it were our own.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-500 font-bold">•</span>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">Transparency:</strong> Clear
                    pricing, clear updates, no surprises.
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="h-96 rounded-2xl bg-gray-200 overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop)",
              }}
            />
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="bg-[#1f4fd8]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <AnimatedSection delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to track your shipment?
            </h2>
            <p className="text-[#d6e3f7] mb-10 max-w-2xl mx-auto">
              Stay informed with real-time updates and complete visibility from
              dispatch to delivery.
            </p>

            <a
              href="/track"
              className="inline-flex items-center justify-center rounded-xl bg-[#ff6a00] px-10 py-5 text-lg font-semibold text-white transition hover:bg-[#e65f00] hover:scale-[1.02]"
            >
              Track a Shipment
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}