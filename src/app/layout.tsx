import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Guia: Revolucione seu Recrutamento com IA | XASE',
  description: 'Descubra como contratar talentos excepcionais usando IA. Economize tempo e dinheiro com processos seletivos otimizados por inteligência artificial.',
  keywords: [
    'recrutamento com ia',
    'contratar usando ia',
    'seleção de talentos',
    'ia para rh',
    'automação de recrutamento',
    'entrevistas com ia',
    'otimização de contratação',
    'recursos humanos ia'
  ],
  openGraph: {
    title: 'Como Economizar +R$10.000 por Contratação usando IA',
    description: 'Aprenda a encontrar os melhores talentos 3x mais rápido com inteligência artificial. Baixe nosso guia exclusivo.',
    url: 'https://xase.com',
    siteName: 'XASE',
    images: [
      {
        url: 'https://xase.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guia Definitivo: Como Ganhar Dinheiro com IA'
      }
    ],
    locale: 'pt_BR',
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
