import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import {
  BUSINESS_CITY,
  BUSINESS_HOURS,
  BUSINESS_POSTAL,
  BUSINESS_REGION,
  BUSINESS_STREET,
  EMAIL,
  PHONE_DISPLAY,
  SERVICE_AREAS,
  SITE_NAME,
  SITE_URL
} from "@/lib/site";

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | Tulsa Weed Control & Fertilization`,
  description:
    "Premium weed control, fertilization, and pre-emergent programs for Tulsa, Bixby, Jenks, and Broken Arrow homes.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo-lawnrepublic.jpeg",
    apple: "/logo-lawnrepublic.jpeg"
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Locally owned lawn care programs that keep Tulsa lawns green, weed-free, and healthy.",
    type: "website",
    url: SITE_URL,
    images: ["/logo-lawnrepublic.jpeg"]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Locally owned lawn care programs that keep Tulsa lawns green, weed-free, and healthy.",
    images: ["/logo-lawnrepublic.jpeg"]
  }
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  image: `${SITE_URL}/logo-lawnrepublic.jpeg`,
  url: SITE_URL,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  description:
    "Locally owned weed control and fertilization in Tulsa, Bixby, Jenks, and Broken Arrow.",
  areaServed: SERVICE_AREAS.map((city) => ({
    "@type": "City",
    name: city,
    addressRegion: "OK"
  })),
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_STREET,
    addressLocality: BUSINESS_CITY,
    addressRegion: BUSINESS_REGION,
    postalCode: BUSINESS_POSTAL,
    addressCountry: "US"
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "15:00"
  },
  hoursAvailable: BUSINESS_HOURS
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Analytics />
        <Header />
        <main id="main-content" className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
