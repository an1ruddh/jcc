"use client";
import { useState } from "react";
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

  const inputClass = (err?: string) =>
    `w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${err ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"}`;

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 py-12 md:py-16">
        <div className="section-container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-3">Get in Touch</h1>
          <p className="text-gray-600 max-w-xl text-sm md:text-base leading-relaxed">
            Book an appointment or send a message. We respond within a few hours on working days.
            For emergencies, call directly.
          </p>
        </div>
      </section>

      <section className="section-container py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact info */}
          <div className="space-y-5 order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-bold text-primary-900 mb-5">Contact Details</h2>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 tracking-widest uppercase mb-1">Phone</div>
                    <a href={`tel:${siteConfig.phone1}`} className="block text-sm font-semibold text-primary-900 hover:text-crimson-600 transition-colors">{siteConfig.phone1}</a>
                    <a href={`tel:${siteConfig.phone2}`} className="block text-sm font-semibold text-primary-900 hover:text-crimson-600 transition-colors">{siteConfig.phone2}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 tracking-widest uppercase mb-1">Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-primary-900 hover:text-crimson-600 transition-colors break-all">{siteConfig.email}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 tracking-widest uppercase mb-1">Address</div>
                    <p className="text-sm text-gray-700 leading-relaxed">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 tracking-widest uppercase mb-1">Hours</div>
                    <div className="text-sm text-gray-700 space-y-0.5">
                      <div><span className="font-medium">Mon–Fri:</span> {siteConfig.hours.weekdays}</div>
                      <div><span className="font-medium">Sat:</span> {siteConfig.hours.saturday}</div>
                      <div><span className="font-medium">Sun:</span> {siteConfig.hours.sunday}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a href={`https://wa.me/${siteConfig.social.whatsapp}?text=Hello%20Dr.%20Raghvendra%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-5 hover:bg-green-100 transition-colors">
              <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-green-800 text-sm">Chat on WhatsApp</div>
                <div className="text-xs text-green-600">Instant response for bookings</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-900 mb-3">Message Sent!</h2>
                  <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                    Thank you for reaching out. We will contact you within a few hours to confirm your appointment.
                  </p>
                  <a href={`tel:${siteConfig.phone1}`}
                    className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
                    <Phone size={15} /> {siteConfig.phone1}
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="text-xl md:text-2xl font-bold text-primary-900 mb-1">Book an Appointment</h2>
                  <p className="text-gray-500 text-sm mb-6">Fill in your details and we'll get back to you promptly.</p>
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input id="name" type="text" placeholder="e.g. Ramesh Sharma"
                          value={form.name}
                          onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                          className={inputClass(errors.name)}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                        <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                          className={inputClass(errors.phone)}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address (optional)</label>
                      <input id="email" type="email" placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                        className={inputClass(errors.email)}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Concern *</label>
                      <textarea id="message" rows={5}
                        placeholder="Briefly describe your symptoms or what you'd like to consult about..."
                        value={form.message}
                        onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                        className={`${inputClass(errors.message)} resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button type="submit" disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading
                        ? <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                        : <><Send size={16} /> Send Message</>}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      For emergencies, call immediately: <a href={`tel:${siteConfig.phone1}`} className="text-crimson-600 font-medium">{siteConfig.phone1}</a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-semibold text-primary-900">Find Us</h3>
              <p className="text-sm text-gray-500">{siteConfig.address}</p>
            </div>
            <a href="https://www.google.com/maps?cid=11922698404612867460"
              target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-crimson-600 hover:text-crimson-700 whitespace-nowrap">
              Open in Maps →
            </a>
          </div>
          <iframe title="Jaipur Cardiac Centre — Google Maps"
            src="https://www.google.com/maps?q=52+Janak+Marg+Hanuman+Nagar+Extension+Khatipura+Jaipur+Rajasthan+302012&output=embed&z=15"
            width="100%" height="360" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </div>
  );
}
