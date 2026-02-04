import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Image
            src="/assets/Averon_Express_Logo_Transparent.png"
            alt="Averon Express Logo"
            width={220}
            height={80}
            priority
            className="w-25 h-auto -mt-8.75"
          />
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Your trusted partner for express courier services, freight logistics, and global supply chain solutions.
          </p>
        </div>

        <div>
          <h4 className="text-accent-500 font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-accent-500 font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/track" className="hover:text-white transition">
                Track Shipment
              </Link>
            </li>
            <li>
              <Link
                href="/customer-service"
                className="hover:text-white transition"
              >
                Customer Service
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/claims" className="hover:text-white transition">
                File a Claim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-accent-500 font-semibold mb-4">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white transition">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-accent-600">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} SwiftLogix. All rights reserved.
          </p>

          <p className="text-sm text-white">
           Fast. Reliable. Global
          </p>
        </div>
      </div>
    </footer>
  );
}
