import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyActions from "../components/StickyActions";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Advelux Journeys | Premium Kashmir Travel Studio",
  description:
    "Advelux Journeys crafts premium Kashmir journeys with bespoke itineraries, luxury stays, and concierge service.",
  metadataBase: new URL("https://adveluxjourneys.com"),
  openGraph: {
    title: "Advelux Journeys | Premium Kashmir Travel Studio",
    description:
      "Bespoke Kashmir itineraries with luxury stays, curated experiences, and 24/7 concierge service.",
    url: "https://adveluxjourneys.com",
    siteName: "Advelux Journeys",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Kashmir landscape",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyActions />
      </body>
    </html>
  );
}
