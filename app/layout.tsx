import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

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
      <body className="antialiased">
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
