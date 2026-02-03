import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import JsonLd from '../components/JsonLd'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Xase: Real-World Data For AI',
  description: "Turn automated decisions into immutable legal records. Don't just log what your AI did — prove why it was right.",
  keywords: [
    'evidence layer for ai',
    'ai compliance',
    'ai audit trail',
    'immutable logs',
    'cryptographic proof',
    'ai governance',
    'model risk management',
    'eu ai act',
    'soc2',
    'gdpr',
    'fintech compliance',
    'healthcare compliance'
  ],
  openGraph: {
    title: 'Xase: Real-World Data For AI',
    description: "Turn automated decisions into immutable legal records. Don't just log what your AI did — prove why it was right.",
    url: 'https://xase.com',
    siteName: 'XASE',
    images: [
      {
        url: 'https://xase.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xase — Evidence Layer for AI Agents'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xase: Real-World Data For AI',
    description: "Turn automated decisions into immutable legal records.",
    creator: '@xase',
    images: ['https://xase.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://xase.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Xase: Real-World Data For AI</title>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'XASE',
            url: 'https://xase.com',
            logo: 'https://xase.com/icon0.svg',
            sameAs: ['https://github.com/xase-ai'],
          }}
        />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'XASE Evidence Layer',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Any',
            url: 'https://xase.com',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }}
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
