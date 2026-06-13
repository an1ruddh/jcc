import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="section-container pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-crimson-600 rounded-full flex items-center justify-center shrink-0">
                <Heart size={16} className="text-white" fill="white" />
              </div>
              <div className="font-bold text-sm">
                Jaipur <span className="text-crimson-400">Cardiac Centre</span>
              </div>
            </div>
            <p className="text-sm text-primary-200 leading-relaxed">
              We provide comprehensive cardiac care with compassion, advanced
              technology, and 25+ years of expertise — right here in Jaipur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[["Home", "/"], ["About Doctor", "/about"], ["Services", "/services"],
                ["Testimonials", "/testimonials"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-primary-200 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              {["Preventive Cardiology", "Diagnostics & Tests", "Angioplasty & Stenting",
                "Pacemaker Implantation", "Heart Failure Management", "Doctor Consultation"].map(s => (
                <li key={s}>
                  <Link href="/services" className="text-primary-200 hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-center">
                <Phone size={14} className="text-crimson-400 shrink-0" />
                <div>
                  <a href={`tel:${siteConfig.phone1}`} className="text-primary-200 hover:text-white block">{siteConfig.phone1}</a>
                  <a href={`tel:${siteConfig.phone2}`} className="text-primary-200 hover:text-white block">{siteConfig.phone2}</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} className="text-crimson-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-primary-200 hover:text-white break-all">{siteConfig.email}</a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={14} className="text-crimson-400 mt-0.5 shrink-0" />
                <span className="text-primary-200 leading-relaxed">{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-300">
          <p>© {new Date().getFullYear()} Jaipur Cardiac Centre. All rights reserved.</p>
          <p>Comprehensive Heart Care in Rajasthan</p>
        </div>
      </div>
    </footer>
  );
}
