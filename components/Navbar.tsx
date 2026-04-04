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
      <nav className="section-container flex items-center justify-between h-14">

        {/* Wordmark — shrinks gracefully */}
        <Link href="/" className="flex flex-col leading-none shrink-0">
          <span className="font-display font-semibold tracking-tight text-crimson text-base sm:text-lg">
            JCC
            <span className="hidden sm:inline"> — Jaipur Cardiac Centre</span>
          </span>
          <span className="text-xs text-ink-muted tracking-wide hidden md:block">
            Dr. Raghvendra Choudhary · DM Cardiology
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href}
                className="text-sm text-ink-soft hover:text-crimson transition-colors tracking-wide whitespace-nowrap">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-2 ml-4">
          {/* Desktop: full button */}
          <a href={`tel:${siteConfig.phone1}`}
            className="hidden lg:inline-flex items-center gap-2 btn-primary text-sm whitespace-nowrap">
            <Phone size={14} /> Book Appointment
          </a>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
            className="lg:hidden p-1.5 text-ink-soft hover:text-crimson transition-colors shrink-0">
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
                className="flex py-3 text-sm text-ink-soft hover:text-crimson transition-colors">
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
