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
  description:
    "Best cardiologist in Jaipur. Dr. Raghvendra Choudhary – DM Cardiology, 25+ years, 15,000+ cardiac cases, 10,000+ angioplasties. Book appointment: +91 8107667788.",
  keywords: [
    "cardiologist jaipur",
    "best cardiologist jaipur",
    "Dr Raghvendra Choudhary",
    "heart doctor jaipur",
    "angioplasty jaipur",
    "cardiac centre jaipur",
    "heart specialist rajasthan",
    "coronary angioplasty jaipur",
    "DM cardiology jaipur",
    "heart attack treatment jaipur",
  ],
  authors: [{ name: "Dr. Raghvendra Choudhary" }],
  creator: "Jaipur Cardiac Centre",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jaipurcardiaccentre.com",
    siteName: siteConfig.name,
    title: "Jaipur Cardiac Centre | Dr. Raghvendra Choudhary – Top Cardiologist",
    description:
      "DM Cardiology specialist with 25+ years experience and 10,000+ successful angioplasties. Jaipur's trusted cardiac care centre.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jaipur Cardiac Centre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Cardiac Centre | Dr. Raghvendra Choudhary",
    description: "25+ years | 15,000+ cases | 10,000+ angioplasties. Book now.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://jaipurcardiaccentre.com" },
  verification: { google: "YOUR_GOOGLE_VERIFICATION_CODE" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://jaipurcardiaccentre.com/#business",
      name: "Jaipur Cardiac Centre",
      url: "https://jaipurcardiaccentre.com",
      telephone: ["+91-8107667788", "+91-9414262690"],
      email: "drraghven10@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "52 Janak Marg, Hanuman Nagar Extension",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302012",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 26.9124, longitude: 75.7873 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "17:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "14:00" },
      ],
      medicalSpecialty: "Cardiology",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "847" },
    },
    {
      "@type": "Physician",
      "@id": "https://jaipurcardiaccentre.com/#doctor",
      name: "Dr. Raghvendra Choudhary",
      jobTitle: "Senior Interventional Cardiologist",
      medicalSpecialty: "Cardiology",
      alumniOf: { "@type": "EducationalOrganization", name: "SMS Medical College, Jaipur" },
      worksFor: { "@id": "https://jaipurcardiaccentre.com/#business" },
      description: "DM Cardiology specialist with 25+ years experience and 10,000+ successful angioplasties.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
