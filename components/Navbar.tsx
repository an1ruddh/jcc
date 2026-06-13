"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Doctor" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden sm:block bg-primary-900 text-white text-xs">
        <div className="section-container flex items-center justify-end gap-6 h-9">
          <a href={`tel:${siteConfig.phone1}`} className="flex items-center gap-1.5 hover:text-primary-200 transition-colors">
            <Phone size={12} /> {siteConfig.phone1}
          </a>
          <span className="flex items-center gap-1.5 text-primary-100">
            <MapPin size={12} /> Jaipur, Rajasthan, India
          </span>
          <a href={`tel:${siteConfig.phone1}`}
            className="bg-crimson-600 hover:bg-crimson-700 text-white font-semibold px-3 py-1 rounded transition-colors">
            Book Appointment
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 bg-crimson-600 rounded-full flex items-center justify-center relative">
              <Heart size={20} className="text-white" fill="white" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm sm:text-base">
                <span className="text-primary-800">Jaipur</span> <span className="text-crimson-600">Cardiac Centre</span>
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">Comprehensive Heart Care</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary-700 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href={`tel:${siteConfig.phone1}`}
              className="flex items-center gap-1.5 bg-crimson-600 text-white text-xs font-semibold px-3 py-1.5 rounded">
              <Phone size={12} /> Call
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
              className="p-1.5 text-gray-700 hover:text-primary-700 transition-colors">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="section-container py-2 pb-5">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="flex py-3 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0 hover:text-primary-700 transition-colors">
                  {l.label}
                </Link>
              ))}
              <a href={`tel:${siteConfig.phone1}`}
                className="mt-4 flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors">
                <Phone size={14} /> Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
