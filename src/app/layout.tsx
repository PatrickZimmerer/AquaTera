import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { WindowWidthProvider } from './providers/WindowWidthProvider'
import './globals.css'

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
      <head />
      <body className={`${dmSans.variable} font-ppWatchMedium text-white`}>
        <WindowWidthProvider>{children}</WindowWidthProvider>
      </body>
    </html>
  )
}
