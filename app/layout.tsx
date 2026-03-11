import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"]
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600"]
});

export const metadata: Metadata = {
  title: "Lawn Republic | Tulsa Weed Control & Fertilization",
  description:
    "Premium weed control, fertilization, and pre-emergent programs for Tulsa, Bixby, Jenks, and Broken Arrow homes.",
  metadataBase: new URL("https://www.lawnrepublic.com"),
  openGraph: {
    title: "Lawn Republic",
    description:
      "Locally owned lawn care programs that keep Tulsa lawns green, weed-free, and healthy.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
