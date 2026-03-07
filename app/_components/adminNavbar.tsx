'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  LayoutDashboard,
  Package,
  Hash,
  Menu,
  X,
  LogOut,
} from 'lucide-react';

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const navLinks = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/shipments', label: 'Shipments', icon: Package },
    { href: '/admin/tracking-numbers', label: 'Tracking Numbers', icon: Hash },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
          <Link href="/admin" className="flex items-center gap-3">
            <Image
              src="/assets/Averon_Express_Logo_Transparent.png"
              alt="Averon Express"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <div className="hidden sm:block">
              <span className="text-lg sm:text-xl font-bold text-primary-900">
                Averon Express
              </span>
              <span className="ml-2 px-2 py-0.5 bg-accent-100 text-accent-700 text-xs font-semibold rounded">
                Admin
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden sm:block text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Site
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="hidden sm:flex items-center gap-1.5 text-sm text-gray-600 hover:text-red-600 transition-colors disabled:opacity-50"
            >
              <LogOut size={16} />
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>

            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-semibold">
              A
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              ← Back to Site
            </Link>

            {/* Logout in mobile menu */}
            <button
              onClick={() => { setIsOpen(false); handleLogout(); }}
              disabled={isLoggingOut}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors disabled:opacity-50"
            >
              <LogOut size={16} />
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}