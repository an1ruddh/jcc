"use client";
import { useState } from "react";
import { Send, CheckCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^[+\d\s\-()]{10,}$/.test(form.phone)) e.phone = "Valid phone number required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Please describe your concern";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm(f => ({ ...f, [key]: e.target.value }));
      setErrors(err => ({ ...err, [key]: "" }));
    },
  });

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
        <p className="text-gray-600 max-w-sm mx-auto mb-6">
          Thank you for reaching out. Our team will contact you within a few hours. For urgent matters, please call us directly.
        </p>
        <a href={`tel:${siteConfig.phone1}`} className="btn-primary">
          <Phone size={16} /> {siteConfig.phone1}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
      <h2 className="font-display text-2xl font-bold text-red-900 mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="cf-name">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="cf-name" type="text" placeholder="Ramesh Sharma"
              {...field("name")}
              className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition ${errors.name ? "border-red-400 bg-red-50" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="cf-phone">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="cf-phone" type="tel" placeholder="+91 98765 43210"
              {...field("phone")}
              className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-300"}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="cf-email">Email Address</label>
            <input
              id="cf-email" type="email" placeholder="ramesh@example.com"
              {...field("email")}
              className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition ${errors.email ? "border-red-400 bg-red-50" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="cf-subject">Subject</label>
            <select
              id="cf-subject"
              {...field("subject")}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition bg-white"
            >
              <option value="">Select a subject</option>
              <option>Book Appointment</option>
              <option>Second Opinion</option>
              <option>Follow-up Consultation</option>
              <option>Query about Procedure</option>
              <option>Emergency Consultation</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="cf-message">
            Your Message / Symptoms <span className="text-red-500">*</span>
          </label>
          <textarea
            id="cf-message" rows={5} placeholder="Briefly describe your symptoms or the reason for consultation..."
            {...field("message")}
            className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-gray-300"}`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <p className="text-xs text-gray-400">
          ⚠️ For medical emergencies, please call 108 immediately. Do not rely on this form for urgent situations.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="btn-accent w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <><span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" /> Sending...</>
          ) : (
            <><Send size={17} /> Send Message</>
          )}
        </button>
      </form>
    </div>
  );
}
