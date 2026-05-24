"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { useCart } from "@/components/cart-provider"
import { menuItems, categories, type MenuItem } from "@/lib/menu-data"
import { type Language } from "@/lib/translations"

const foodImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-20%20at%204.53.17%20PM%20%281%29-JqeH1RQWc87JHjsMSvCS5F5B1DSBeb.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-20%20at%204.53.17%20PM-hZlnwNe6ByGo21rn8dISzZWMVpYRng.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-20%20at%204.53.17%20PM%20%282%29-X6uOd4gSG2sEtjxuX1CASccvAD8NRB.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-20%20at%204.53.16%20PM-nPppxYCWFixZojrISVr2gwc3tYqhLC.jpeg",
]

function getItemName(item: MenuItem, lang: Language) {
  switch (lang) {
    case "ar":
      return item.nameAr
    case "ru":
      return item.nameRu
    case "tr":
      return item.nameTr
    default:
      return item.nameEn
  }
}

function getCategoryName(categoryId: string, lang: Language) {
  const category = categories.find((c) => c.id === categoryId)
  if (!category) return categoryId
  switch (lang) {
    case "ar":
      return category.ar
    case "ru":
      return category.ru
    case "tr":
      return category.tr
    default:
      return category.en
  }
}

export function MenuSection() {
  const { language, t } = useLanguage()
  const { addItem } = useCart()
  const [activeCategory, setActiveCategory] = useState("meals")

  const filteredItems = menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.menu.title}
          </h2>
          <p className="text-muted-foreground text-lg">{t.menu.subtitle}</p>
        </div>

        {/* Food Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {foodImages.map((img, idx) => (
            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group">
              <Image
                src={img}
                alt={`Hana Restaurant Food ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "border-border text-muted-foreground hover:text-white hover:border-primary"
              }`}
            >
              {getCategoryName(category.id, language)}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="bg-secondary/50 border-border hover:border-primary/50 transition-colors group"
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors line-clamp-2">
                      {getItemName(item, language)}
                    </h3>
                    <p className="text-accent font-bold text-lg mt-2">
                      {item.price} {t.menu.currency}
                    </p>
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => addItem(item)}
                    className="shrink-0 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">{t.order.addToOrder}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
