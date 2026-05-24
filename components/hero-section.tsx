"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
      
      {/* Decorative Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hana%20banar0.3-4-D6ZUDTkthiLaT4Vls8LaD93HqQcsw1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-start">
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-h8iAb2nB7TAzm6zfVgOSsOSV61u21W.jpg"
                alt="Hana Restaurant Logo"
                width={120}
                height={120}
                className="mx-auto lg:mx-0 rounded-2xl shadow-2xl"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-semibold mb-4">
              {t.hero.subtitle}
            </p>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
                asChild
              >
                <a href="#order">{t.hero.orderNow}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8"
                asChild
              >
                <a href="#menu">{t.hero.viewMenu}</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.3-4-DDA97CJxR1btfU2WW3s545Exqtoe2H.jpg"
                alt="Hana Restaurant Dishes"
                fill
                className="object-contain rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
