import Link from "next/link";

export default function CustomerServiceSection() {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 px-8 py-14 text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Need help with a shipment?
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Our customer service team is ready to assist you with tracking,
            delivery issues, or any questions about your shipment.
          </p>

          <Link
            href="/customer-service"
            className="inline-flex items-center justify-center rounded-xl bg-accent-500 px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
