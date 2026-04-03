import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart size={18} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Jaipur Cardiac Centre</div>
                <div className="text-xs text-gray-400">Dr. Raghvendra Choudhary</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              25+ years of trusted cardiac care in Jaipur. 15,000+ cases, 10,000+ angioplasties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[["Home", "/"], ["About Doctor", "/about"], ["Services", "/services"],
                ["Testimonials", "/testimonials"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-2 text-sm">
              {["Coronary Angioplasty","Coronary Angiography","Echocardiography",
                "Stress Testing","Holter Monitoring","Preventive Cardiology"].map(s => (
                <li key={s}><Link href="/services" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={15} className="text-blue-400 shrink-0" />
                <div>
                  <a href={`tel:${siteConfig.phone1}`} className="hover:text-white block">{siteConfig.phone1}</a>
                  <a href={`tel:${siteConfig.phone2}`} className="hover:text-white block">{siteConfig.phone2}</a>
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white break-all">{siteConfig.email}</a>
              </li>
              <li className="flex gap-2 items-start">
                <Clock size={15} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <div>Mon–Fri: {siteConfig.hours.weekdays}</div>
                  <div>Sat: {siteConfig.hours.saturday}</div>
                  <div>Sun: {siteConfig.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Jaipur Cardiac Centre. All rights reserved.</p>
          <p>Designed for healthcare excellence in Rajasthan</p>
        </div>
      </div>
    </footer>
  );
}
