"use client"

import Image from "next/image"
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

const WHATSAPP_NUMBER = "+905343938194"
const INSTAGRAM_URL = "https://www.instagram.com/hana_restauran?igsh=b2VwaXh0OWFmYmF5"
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/dTGxxgjwZYUAaFHd6?g_st=ic"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp Card */}
          <Card className="bg-secondary/50 border-border hover:border-green-500/50 transition-colors group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <MessageCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.contact.whatsapp}</h3>
              <p className="text-muted-foreground mb-4 font-mono">{WHATSAPP_NUMBER}</p>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white w-full"
              >
                <a
                  href={`https://wa.me/905343938194`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 me-2" />
                  {t.contact.whatsapp}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Instagram Card */}
          <Card className="bg-secondary/50 border-border hover:border-pink-500/50 transition-colors group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                <Instagram className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.contact.instagram}</h3>
              <p className="text-muted-foreground mb-4">@hana_restauran</p>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full"
              >
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 me-2" />
                  {t.contact.followUs}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card className="bg-secondary/50 border-border hover:border-primary/50 transition-colors group md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.contact.location}</h3>
              <p className="text-muted-foreground mb-4">Istanbul, Turkey</p>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white w-full"
              >
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4 me-2" />
                  {t.contact.viewOnMap}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Phone Number Display */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-secondary/50 rounded-full px-6 py-3 border border-border">
            <Phone className="h-5 w-5 text-accent" />
            <span className="text-white font-mono text-lg">{WHATSAPP_NUMBER}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LocationSection() {
  const { t } = useLanguage()

  return (
    <section id="location" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.contact.location}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map Embed */}
          <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0!2d28.6680195!3d41.0308453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55ff4c7ee9f73:0xb6637fdc707d9bc3!2sHana+Restaurant!5e0!3m2!1sen!2str!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hana Restaurant Location"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-3-CnmRVJmsDu2Sx9a6shWq7e9aPe6UaJ.jpg"
                alt="Hana Restaurant Egyptian Food"
                width={200}
                height={400}
                className="rounded-2xl object-cover h-80"
              />
              <div className="space-y-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-h8iAb2nB7TAzm6zfVgOSsOSV61u21W.jpg"
                  alt="Hana Restaurant Logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
                <h3 className="text-2xl font-bold text-white">Hana Restaurant</h3>
                <p className="text-muted-foreground">
                  Authentic Egyptian Cuisine in Istanbul
                </p>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a
                      href={`https://wa.me/905343938194`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 me-2" />
                      {t.contact.whatsapp}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-4 w-4 me-2" />
                      {t.contact.viewOnMap}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}