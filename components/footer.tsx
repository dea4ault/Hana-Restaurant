"use client"

import Image from "next/image"
import { Instagram, MessageCircle, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const WHATSAPP_NUMBER = "+904353931849"
const INSTAGRAM_URL = "https://www.instagram.com/hana_restauran?igsh=b2VwaXh0OWFmYmF5"
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/dTGxxgjwZYUAaFHd6"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Info */}
          <div className="text-center md:text-start">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-h8iAb2nB7TAzm6zfVgOSsOSV61u21W.jpg"
                alt="Hana Restaurant Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Hana Restaurant</h3>
                <p className="text-muted-foreground text-sm">Egyptian Cuisine</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{t.footer.followUs}</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MapPin className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-end">
            <p className="text-white font-mono mb-2">{WHATSAPP_NUMBER}</p>
            <p className="text-muted-foreground text-sm">Istanbul, Turkey</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Hana Restaurant. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
