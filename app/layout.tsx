import type { Metadata, Viewport } from 'next'
import { Geist, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
})

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: 'Hana Restaurant | Authentic Egyptian Cuisine in Istanbul',
  description: 'Experience the rich flavors of traditional Egyptian food at Hana Restaurant. Authentic dishes including Molokhia, Kofta, Kabsa, and more. Order online for delivery in Istanbul.',
  keywords: ['Egyptian food', 'Hana Restaurant', 'Istanbul restaurant', 'Middle Eastern cuisine', 'Egyptian cuisine', 'Molokhia', 'Kabsa', 'Dolma'],
  openGraph: {
    title: 'Hana Restaurant | Authentic Egyptian Cuisine',
    description: 'Traditional Egyptian food prepared with love in Istanbul',
    type: 'website',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-h8iAb2nB7TAzm6zfVgOSsOSV61u21W.jpg'],
  },
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-h8iAb2nB7TAzm6zfVgOSsOSV61u21W.jpg',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-h8iAb2nB7TAzm6zfVgOSsOSV61u21W.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${cairo.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-cairo), var(--font-geist), sans-serif' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
