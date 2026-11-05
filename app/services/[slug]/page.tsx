import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, Phone, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { testPages } from "../testPages";

export function generateStaticParams() {
  return testPages.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = testPages.find((t) => t.slug === params.slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://jaipurcardiaccentre.com/services/${page.slug}` },
  };
}

export default function TestPage({ params }: { params: { slug: string } }) {
  const page = testPages.find((t) => t.slug === params.slug);
  if (!page) notFound();
  const others = testPages.filter((t) => t.slug !== page.slug);

  const testLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url: `https://jaipurcardiaccentre.com/services/${page.slug}`,
    about: { "@type": "MedicalTest", name: page.title.split(" in ")[0] },
    provider: { "@id": "https://jaipurcardiaccentre.com/#business" },
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(testLd) }} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 py-12 md:py-16">
        <div className="section-container">
          <Link href="/services" className="inline-flex items-center gap-1 text-sm text-primary-700 hover:text-primary-900 mb-4">
            <ArrowLeft size={14} /> Back to Services
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-4">{page.title}</h1>
          <p className="text-gray-700 max-w-2xl text-sm md:text-base leading-relaxed">{page.intro}</p>
        </div>
      </section>

      {/* What it is */}
      <section className="section-container py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">What it is</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl">{page.whatItIs}</p>
      </section>

      {/* Indications */}
      <section className="section-container pb-10 md:pb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-5">When it may be advised</h2>
        <ul className="space-y-3 max-w-3xl">
          {page.indications.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-700">
              <CheckCircle size={18} className="text-crimson-600 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="section-container pb-10 md:pb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">What happens during the test</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl">{page.process}</p>
      </section>

      {/* Preparation */}
      <section className="section-container pb-10 md:pb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-5">Preparation</h2>
        <ul className="space-y-3 max-w-3xl">
          {page.preparation.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-700">
              <CheckCircle size={18} className="text-primary-600 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {page.prepNote && <p className="text-sm text-gray-500 mt-4 max-w-3xl">{page.prepNote}</p>}
      </section>

      {/* Urgent care note */}
      {page.urgent && (
        <section className="section-container pb-10 md:pb-14">
          <div className="bg-crimson-50 border border-crimson-200 rounded-xl p-5 flex items-start gap-3 max-w-3xl">
            <AlertTriangle size={20} className="text-crimson-600 mt-0.5 shrink-0" />
            <p className="text-sm md:text-base text-crimson-800 leading-relaxed">
              If you are having chest pain or severe breathlessness right now, call emergency
              services (112) or go to the nearest emergency department right away. Do not wait
              to book a routine test.
            </p>
          </div>
        </section>
      )}

      {/* Other tests */}
      <section className="section-container pb-12 md:pb-16">
        <h2 className="text-xl md:text-2xl font-bold text-primary-900 mb-4">Other tests at the clinic</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((t) => (
            <Link
              key={t.slug}
              href={`/services/${t.slug}`}
              className="border border-gray-200 rounded-xl p-4 hover:border-crimson-200 hover:shadow-md transition-all text-primary-900 font-semibold text-sm"
            >
              {t.title.split(" in ")[0]}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white">
        <div className="section-container py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{page.ctaHeading}</h2>
          <p className="text-primary-100 text-sm md:text-base mb-6">
            {siteConfig.address}. Open {siteConfig.hours.weekdays}, all seven days.
          </p>
          <a
            href={`tel:${siteConfig.phone1}`}
            className="inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            <Phone size={14} /> Call {siteConfig.phone1}
          </a>
        </div>
      </section>
    </div>
  );
}
