"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Doctor" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-800 text-white text-sm py-1.5">
        <div className="section-container flex items-center justify-between gap-4 flex-wrap">
          <span className="opacity-90">Jaipur's Trusted Cardiac Care — 25+ Years of Excellence</span>
          <a href={`tel:${siteConfig.phone1}`} className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity">
            <Phone size={13} /> {siteConfig.phone1}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
            <Heart size={20} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-blue-800 text-base leading-tight">Jaipur Cardiac Centre</div>
            <div className="text-xs text-gray-500">Dr. Raghvendra Choudhary</div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={`tel:${siteConfig.phone1}`} className="hidden md:inline-flex btn-accent text-sm py-2 px-4">
          Book Appointment
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0">
              {l.label}
            </Link>
          ))}
          <a href={`tel:${siteConfig.phone1}`} className="btn-accent mt-4 w-full justify-center text-sm">
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
