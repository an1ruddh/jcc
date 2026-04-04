"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bone border-b border-bone-border">
      <nav className="section-container flex items-center justify-between h-14 md:h-16">
        {/* Wordmark */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg md:text-xl font-semibold tracking-tight text-crimson">
            Jaipur Cardiac Centre
          </span>
          <span className="text-xs text-ink-muted tracking-wide hidden sm:block">
            Dr. Raghvendra Choudhary · DM Cardiology
          </span>
        </Link>

        {/* Desktop nav — centred */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href}
                className="text-sm text-ink-soft hover:text-crimson transition-colors tracking-wide">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a href={`tel:${siteConfig.phone1}`}
            className="hidden lg:inline-flex items-center gap-2 btn-primary text-sm">
            <Phone size={14} /> Book Appointment
          </a>

          {/* Mobile: icon call */}
          <a href={`tel:${siteConfig.phone1}`}
            className="lg:hidden flex items-center gap-1.5 bg-crimson text-white text-xs font-semibold px-3 py-1.5 tracking-wide">
            <Phone size={13} /> Call
          </a>

          <button onClick={() => setOpen(!open)}
            className="lg:hidden p-1.5 text-ink-soft hover:text-crimson transition-colors">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-bone-border bg-bone">
          <div className="section-container py-2 pb-5">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="flex py-3 text-sm text-ink-soft border-b border-bone-border last:border-0 hover:text-crimson transition-colors tracking-wide">
                {l.label}
              </Link>
            ))}
            <a href={`tel:${siteConfig.phone1}`}
              className="mt-4 btn-primary w-full justify-center text-sm">
              <Phone size={14} /> Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
