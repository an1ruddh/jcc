"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[+\d\s-]{8,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Please describe your concern";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-bone">
      {/* Header */}
      <section className="section-container pt-16 pb-12 border-b border-bone-border">
        <p className="section-label mb-4">Reach Us</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="display-heading text-5xl md:text-6xl max-w-sm">Get in<br />Touch</h1>
          <p className="text-ink-soft max-w-sm text-sm leading-relaxed">
            Book an appointment or send a message. We respond within a few hours on working days.
            For emergencies, call directly.
          </p>
        </div>
      </section>

      <section className="section-container section-py">
        <div className="grid lg:grid-cols-3 gap-16">

          {/* Contact info */}
          <div className="space-y-10">
            <div>
              <p className="section-label mb-5">Contact</p>
              <div className="space-y-5">
                {[
                  { icon: <Phone size={14} />, label: "Phone", content: (
                    <div>
                      <a href={`tel:${siteConfig.phone1}`} className="block text-sm text-ink hover:text-crimson transition-colors font-medium">{siteConfig.phone1}</a>
                      <a href={`tel:${siteConfig.phone2}`} className="block text-sm text-ink hover:text-crimson transition-colors font-medium">{siteConfig.phone2}</a>
                    </div>
                  )},
                  { icon: <Mail size={14} />, label: "Email", content: (
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink hover:text-crimson transition-colors break-all">{siteConfig.email}</a>
                  )},
                  { icon: <MapPin size={14} />, label: "Address", content: (
                    <p className="text-sm text-ink-soft leading-relaxed">{siteConfig.address}</p>
                  )},
                  { icon: <Clock size={14} />, label: "Hours", content: (
                    <div className="text-sm text-ink-soft space-y-0.5">
                      <div><span className="text-ink font-medium">Mon–Fri</span> {siteConfig.hours.weekdays}</div>
                      <div><span className="text-ink font-medium">Sat</span> {siteConfig.hours.saturday}</div>
                      <div><span className="text-ink font-medium">Sun</span> {siteConfig.hours.sunday}</div>
                    </div>
                  )},
                ].map(({ icon, label, content }) => (
                  <div key={label} className="flex gap-4">
                    <div className="text-crimson mt-0.5 shrink-0">{icon}</div>
                    <div>
                      <div className="text-xs text-ink-muted tracking-widest uppercase mb-1">{label}</div>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="ruled pt-8">
              <a href={`https://wa.me/${siteConfig.social.whatsapp}?text=Hello%20Dr.%20Raghvendra%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-bone-border bg-white hover:border-green-400 transition-colors">
                <div className="w-10 h-10 bg-green-500 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm text-ink">WhatsApp</div>
                  <div className="text-xs text-ink-muted">Instant reply for bookings</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 lg:border-l lg:border-bone-border lg:pl-16">
            {submitted ? (
              <div className="flex flex-col items-start py-8">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle size={24} className="text-green-600" />
                </div>
                <h2 className="display-heading text-3xl text-ink mb-3">Message Received</h2>
                <p className="text-ink-soft text-sm mb-7 max-w-sm">
                  We will contact you within a few hours to confirm your appointment.
                  For urgent concerns, call us directly.
                </p>
                <a href={`tel:${siteConfig.phone1}`} className="btn-primary text-sm">
                  <Phone size={14} /> {siteConfig.phone1}
                </a>
              </div>
            ) : (
              <>
                <p className="section-label mb-6">Book an Appointment</p>
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {(["name", "phone"] as const).map((id) => (
                      <div key={id}>
                        <label htmlFor={id} className="block text-xs tracking-widest uppercase text-ink-muted mb-2">
                          {id === "name" ? "Full Name *" : "Phone *"}
                        </label>
                        <input id={id} type={id === "phone" ? "tel" : "text"}
                          placeholder={id === "name" ? "Ramesh Sharma" : "+91 XXXXX XXXXX"}
                          value={form[id]}
                          onChange={(e) => { setForm({ ...form, [id]: e.target.value }); setErrors({ ...errors, [id]: "" }); }}
                          className={`w-full border-b bg-transparent pb-3 text-sm text-ink outline-none transition-colors ${errors[id] ? "border-red-400" : "border-bone-border focus:border-crimson"}`}
                        />
                        {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs tracking-widest uppercase text-ink-muted mb-2">
                      Email (optional)
                    </label>
                    <input id="email" type="email" placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      className={`w-full border-b bg-transparent pb-3 text-sm text-ink outline-none transition-colors ${errors.email ? "border-red-400" : "border-bone-border focus:border-crimson"}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs tracking-widest uppercase text-ink-muted mb-2">
                      Your Concern *
                    </label>
                    <textarea id="message" rows={5}
                      placeholder="Describe your symptoms or what you would like to discuss..."
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                      className={`w-full border-b bg-transparent pb-3 text-sm text-ink outline-none transition-colors resize-none ${errors.message ? "border-red-400" : "border-bone-border focus:border-crimson"}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={loading}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                    {loading
                      ? <><span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending</>
                      : <><Send size={14} /> Send Message</>}
                  </button>

                  <p className="text-xs text-ink-muted">
                    Emergency? Call immediately: <a href={`tel:${siteConfig.phone1}`} className="text-crimson font-medium">{siteConfig.phone1}</a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 border border-bone-border bg-white">
          <div className="flex items-center justify-between p-5 border-b border-bone-border">
            <div>
              <div className="font-semibold text-sm text-ink">Find Us</div>
              <div className="text-xs text-ink-muted mt-0.5">{siteConfig.address}</div>
            </div>
            <a href="https://maps.google.com/?q=52+Janak+Marg+Hanuman+Nagar+Extension+Jaipur+Rajasthan+302012"
              target="_blank" rel="noopener noreferrer"
              className="text-xs text-crimson hover:underline">Open in Maps →</a>
          </div>
          <iframe title="Jaipur Cardiac Centre"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="360" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </div>
  );
}
