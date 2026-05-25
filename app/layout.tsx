import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://soulnimal.com";
const siteTitle = "Soulnimal — Find the animal that fits your life";
const siteDescription =
  "Soulnimal is a premium animal compatibility and discovery platform that helps people find animals matching their lifestyle, space, budget, sensory preferences, and emotional expectations.";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Soulnimal"
  },
  description: siteDescription,
  applicationName: "Soulnimal",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Soulnimal",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/soulnimal-hero-cat-dog-meadow.jpg",
        width: 1600,
        height: 2400,
        alt: "A calm dog and cat together in warm meadow light"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/soulnimal-hero-cat-dog-meadow.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E8E0C8"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
