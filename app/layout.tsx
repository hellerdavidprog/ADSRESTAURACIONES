import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/ads/navbar'
import { Footer } from '@/components/ads/footer'
import { MessageCircle } from 'lucide-react'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ADS Restauraciones | Formación y Servicios de Restauración de Obras de Arte',
  description: 'Especialistas en restauración, conservación y tasación de obras de arte. Programas de formación profesional con Douglas Sosa.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/436504290258"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-200 md:p-5 group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-semibold hidden md:inline md:group-hover:translate-x-1 transition-transform">
            WhatsApp
          </span>
        </a>
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
