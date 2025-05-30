import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { WindowWidthProvider } from './providers/WindowWidthProvider'

import './globals.css'
import Script from 'next/script'

const dmSans = DM_Sans({
  weight: ['400'],
  variable: '--font-dmSans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Aqua Tera',
  description: 'Where earth and water meet and wellness grows.',
  openGraph: {
    type: 'website',
    url: 'https://aquatera.com',
    title: 'Aqua Tera',
    description: 'Where earth and water meet and wellness grows.',
    images: [
      {
        url: 'https://aquatera.com/metaimage.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aqua Tera',
    description: 'Where earth and water meet and wellness grows.',
    images: ['https://aquatera.com/metaimage.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head/>
      <body className={`${dmSans.variable} font-ppWatchMedium text-white`}>
        <WindowWidthProvider>{children}</WindowWidthProvider>
        <Script
          src='https://cdn.markfi.xyz/scripts/analytics/0.11.24/cookie3.analytics.min.js'
          integrity='sha384-ihnQ09PGDbDPthGB3QoQ2Heg2RwQIDyWkHkqxMzq91RPeP8OmydAZbQLgAakAOfI'
          crossOrigin='anonymous'
          async
          strategy='lazyOnload'
          site-id='0549f310-3b75-422b-8dd7-e92d4f930719'
        />
      </body>
    </html>
  )
}
