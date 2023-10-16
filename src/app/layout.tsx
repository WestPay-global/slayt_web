import './globals.scss'
// import "./fonts.scss";
import type { Metadata } from 'next'
import { Jost, Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
})

const jost = Jost({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-jost',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Slayt',
  description: 'Empowering Families, One Task at a Time!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${jost.variable}`}>{children}</body>
    </html>
  )
}
