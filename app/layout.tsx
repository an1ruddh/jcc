import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaipurcardiaccentre.com"),
  title: {
    default: `${siteConfig.name} | Dr. Raghvendra Choudhary – Cardiologist Jaipur`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Best cardiologist in Jaipur. Dr. Raghvendra Choudhary – DM Cardiology, 25+ years, 15,000+ cardiac cases, 10,000+ angioplasties. Book: +91 8107667788.",
  keywords: ["cardiologist jaipur", "best cardiologist jaipur", "Dr Raghvendra Choudhary", "heart doctor jaipur", "angioplasty jaipur", "cardiac centre jaipur", "heart specialist rajasthan"],
  authors: [{ name: "Dr. Raghvendra Choudhary" }],
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://jaipurcardiaccentre.com",
    siteName: siteConfig.name,
    title: "Jaipur Cardiac Centre | Dr. Raghvendra Choudhary",
    description: "DM Cardiology specialist with 25+ years experience and 10,000+ successful angioplasties.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jaipurcardiaccentre.com" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://jaipurcardiaccentre.com/#business",
      name: "Jaipur Cardiac Centre - Dr Raghvendra Choudhary | Best Cardiologist in Jaipur",
      url: "https://jaipurcardiaccentre.com",
      telephone: ["+91-8107667788", "+91-9414262690"],
      email: "drraghven10@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "52 Janak Marg, Hanuman Nagar Extension, Khatipura",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302012",
        addressCountry: "IN",
      },
      medicalSpecialty: "Cardiology",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "847" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
      ],
      priceRange: "₹₹",
      image: "https://jaipurcardiaccentre.com/doctor-photo.jpg",
      sameAs: [
        "https://www.google.com/maps?cid=11922698404612867460",
      ],
    },
    {
      "@type": "Physician",
      "@id": "https://jaipurcardiaccentre.com/#doctor",
      name: "Dr. Raghvendra Choudhary",
      jobTitle: "Senior Interventional Cardiologist",
      medicalSpecialty: "Cardiology",
      alumniOf: { "@type": "EducationalOrganization", name: "SMS Medical College, Jaipur" },
      knowsAbout: [
        { "@type": "MedicalTopic", name: "Coronary Angioplasty" },
        { "@type": "MedicalTopic", name: "Heart Failure Management" },
        { "@type": "MedicalTopic", name: "Pacemaker Implantation" },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: { "@id": "https://jaipurcardiaccentre.com/#business" },
      author: { "@type": "Person", name: "Ramesh Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "I was rushed to the hospital with a massive heart attack. Dr. Choudhary performed emergency angioplasty within the hour. Today, three years later, I lead a completely normal life.",
    },
    {
      "@type": "Review",
      itemReviewed: { "@id": "https://jaipurcardiaccentre.com/#business" },
      author: { "@type": "Person", name: "Sunita Agarwal" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "My mother was breathless and couldn't walk 10 steps. After the pacemaker implantation by Dr. Choudhary, she is back to her daily routine.",
    },
    {
      "@type": "Review",
      itemReviewed: { "@id": "https://jaipurcardiaccentre.com/#business" },
      author: { "@type": "Person", name: "Vikram Singh" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Dr. Raghvendra is not just a brilliant cardiologist but an incredibly patient and empathetic doctor. He explained every step before the angioplasty.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
