"use client"

import { LanguageProvider } from "@/components/language-provider"
import { CartProvider } from "@/components/cart-provider"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { OrderSection } from "@/components/order-section"
import { ContactSection, LocationSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <HeroSection />
            <MenuSection />
            <OrderSection />
            <ContactSection />
            <LocationSection />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </LanguageProvider>
  )
}
