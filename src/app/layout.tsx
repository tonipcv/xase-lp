import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'XASE | Complete CRM for WhatsApp with AI and Multiple Channels',
  description: 'Transform your customer service with XASE. Integrate WhatsApp, email, and social media in one platform. AI-powered automation for better customer experience.',
  keywords: [
    'whatsapp crm',
    'multichannel crm',
    'ai customer service',
    'business automation',
    'whatsapp business',
    'customer service platform',
    'ai integration',
    'customer relationship management'
  ],
  openGraph: {
    title: 'XASE - Smart CRM with WhatsApp and AI Integration',
    description: 'Manage all your customer service channels in one platform. Automate processes, improve customer experience, and increase your sales with AI.',
    url: 'https://xase.com',
    siteName: 'XASE',
    images: [
      {
        url: 'https://xase.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'XASE - Complete CRM Solution'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guia Gratuito: Como Lucrar com IA',
    description: 'Descubra as estratégias que estão gerando +R$10.000/mês com inteligência artificial.',
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
        <title>XASE - Smart CRM with WhatsApp and AI Integration</title>
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
