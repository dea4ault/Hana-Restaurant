"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, Trash2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-provider"
import { useCart } from "@/components/cart-provider"
import { type Language } from "@/lib/translations"
import { type MenuItem } from "@/lib/menu-data"

const WHATSAPP_NUMBER = "+905343938194"

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

export function OrderSection() {
  const { language, t } = useLanguage()
  const { items, updateQuantity, removeItem, total, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (items.length === 0) return

    // Build order message
    let message = `🍽️ *New Order from Hana Restaurant*\n\n`
    message += `👤 *Name:* ${formData.name}\n`
    message += `📱 *Phone:* ${formData.phone}\n`
    message += `📍 *Address:* ${formData.address}\n`
    if (formData.notes) {
      message += `📝 *Notes:* ${formData.notes}\n`
    }
    message += `\n*Order Items:*\n`
    
    items.forEach((item) => {
      message += `• ${getItemName(item, language)} x${item.quantity} - ${item.price * item.quantity} TL\n`
    })
    
    message += `\n💰 *Total: ${total} TL*`

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/905343938194?text=${encodedMessage}`, "_blank")
    
    // Clear cart after order
    clearCart()
    setFormData({ name: "", phone: "", address: "", notes: "" })
  }

  return (
    <section id="order" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.order.title}
          </h2>
          <p className="text-muted-foreground text-lg">{t.order.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-h8iAb2nB7TAzm6zfVgOSsOSV61u21W.jpg"
                  alt="Hana Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                {t.order.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {t.order.name}
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary border-border text-white"
                    placeholder={t.order.name}
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {t.order.phone}
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary border-border text-white"
                    placeholder="+90 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {t.order.address}
                  </label>
                  <Textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="bg-secondary border-border text-white min-h-[80px]"
                    placeholder={t.order.address}
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {t.order.notes}
                  </label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="bg-secondary border-border text-white min-h-[60px]"
                    placeholder={t.order.notes}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={items.length === 0}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                >
                  <Send className="h-4 w-4 me-2" />
                  {t.order.placeOrder}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Cart */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-white">{t.order.items}</CardTitle>
            </CardHeader>
            <CardContent>
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-muted-foreground mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.7-WfnciulrP5j9hbzWPnfswrnfMCw9xR.jpg"
                      alt="Egyptian Sweets"
                      width={150}
                      height={300}
                      className="mx-auto rounded-lg opacity-50"
                    />
                  </div>
                  <p className="text-muted-foreground">{t.order.emptyCart}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 p-3 bg-secondary/50 rounded-lg"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm line-clamp-1">
                          {getItemName(item, language)}
                        </h4>
                        <p className="text-accent font-semibold">
                          {item.price * item.quantity} TL
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 border-border"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-white w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 border-border"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-400/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {/* Total */}
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span className="text-white">{t.order.total}:</span>
                      <span className="text-accent">{total} TL</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}