import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'XASE - Technology Infrastructure for Creators',
  description: 'Build and scale your content empire with enterprise-grade technology. Custom platforms, community management, and monetization solutions for creators.',
  keywords: [
    'content creator platform',
    'influencer technology',
    'creator infrastructure',
    'content monetization',
    'community platform',
    'audience analytics',
    'live streaming infrastructure',
    'digital content platform'
  ],
  openGraph: {
    title: 'XASE - Power Your Content Empire',
    description: 'Enterprise technology infrastructure for content creators and influencers. Scale your digital presence with advanced tech solutions.',
    url: 'https://xase.com',
    siteName: 'XASE',
    images: [
      {
        url: 'https://xase.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'XASE - Creator Technology Infrastructure'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XASE - Technology for Creators',
    description: 'Scale your content empire with enterprise-grade technology infrastructure.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>XASE - Technology Infrastructure for Creators</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
