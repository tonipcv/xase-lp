import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XASE Security | Enterprise Cybersecurity Solutions",
  description: "XASE provides enterprise-grade cybersecurity solutions, including threat detection, penetration testing, and incident response services. Protect your business with industry-leading security.",
  keywords: "cybersecurity, threat detection, penetration testing, incident response, security consulting, XASE security",
  openGraph: {
    title: "XASE Security | Enterprise Cybersecurity Solutions",
    description: "Protect your business with enterprise-grade cybersecurity solutions. 24/7 monitoring, threat detection, and incident response.",
    url: "https://xase.com",
    siteName: "XASE Security",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "XASE Security - Enterprise Cybersecurity Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XASE Security | Enterprise Cybersecurity Solutions",
    description: "Protect your business with enterprise-grade cybersecurity solutions. 24/7 monitoring, threat detection, and incident response.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://xase.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
