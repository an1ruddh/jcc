import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-semibold text-crimson mb-1">
              Jaipur Cardiac Centre
            </div>
            <div className="text-xs text-white/50 mb-5 tracking-wide">Dr. Raghvendra Choudhary</div>
            <p className="text-sm text-white/60 leading-relaxed">
              25+ years of trusted cardiac care. 15,000+ cases. 10,000+ angioplasties.
              Rajasthan's most experienced interventional cardiologist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Navigate</h3>
            <ul className="space-y-2.5 text-sm">
              {[["Home", "/"], ["About Doctor", "/about"], ["Services", "/services"],
                ["Testimonials", "/testimonials"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {["Coronary Angioplasty", "Coronary Angiography", "Echocardiography",
                "Stress Testing (TMT)", "Holter Monitoring", "Pacemaker Implantation"].map(s => (
                <li key={s}>
                  <Link href="/services" className="text-white/60 hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Reach Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={14} className="text-crimson mt-0.5 shrink-0" />
                <span className="text-white/60 leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} className="text-crimson shrink-0" />
                <div>
                  <a href={`tel:${siteConfig.phone1}`} className="text-white/60 hover:text-white block">{siteConfig.phone1}</a>
                  <a href={`tel:${siteConfig.phone2}`} className="text-white/60 hover:text-white block">{siteConfig.phone2}</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} className="text-crimson shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-white break-all">{siteConfig.email}</a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock size={14} className="text-crimson mt-0.5 shrink-0" />
                <div className="text-white/60">
                  <div>Mon–Fri: {siteConfig.hours.weekdays}</div>
                  <div>Sat: {siteConfig.hours.saturday}</div>
                  <div>Sun: {siteConfig.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Jaipur Cardiac Centre. All rights reserved.</p>
          <p>Crafted for cardiac care excellence in Rajasthan</p>
        </div>
      </div>
    </footer>
  );
}
