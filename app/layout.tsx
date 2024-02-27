import type { Metadata } from 'next'
import {Archivo} from 'next/font/google'
import './globals.css'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo'})

export const metadata: Metadata = {
  title: 'Illuminated Nothing',
  description: 'Performance of Emilia Vogt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} mt-2 m-auto w-4/5`}>{children}</body>
    </html>
  )
}
