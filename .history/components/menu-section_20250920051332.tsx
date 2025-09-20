"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/** Types */
type MenuItem = {
  name: string
  description: string
  image: string
  dietary: string[]
  popular?: boolean
}

type Category = { id: string; name: string; icon: string }
type MenuMap = Record<string, MenuItem[]>

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("pakistani")

  const categories: Category[] = [
    { id: "pakistani", name: "Pakistani Specials", icon: "🍛" },
    { id: "asian", name: "Asian Cuisines", icon: "🥢" },
    { id: "fastfood", name: "Fast Food & Snacks", icon: "🍔" },
    { id: "bbq", name: "Live BBQ & Cooking", icon: "🔥" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "daigs", name: "Daigs & Events", icon: "🍲" },
    { id: "frozen", name: "Frozen Items", icon: "❄️" },
  ]

  const menuItems: MenuMap = {
    pakistani: [
      { name: "Chicken Karahi", description: "Traditional Pakistani chicken karahi", image: "/placeholder-3gtoe.png", dietary: ["Halal", "Spicy"], popular: true },
      { name: "Mutton Biryani", description: "Fragrant basmati rice with mutton", image: "/placeholder-bs6pn.png", dietary: ["Halal", "Premium"] },
    ],
    asian: [
      { name: "Chinese Fried Rice", description: "Wok-tossed rice with veggies", image: "/placeholder-qfxub.png", dietary: ["Asian Fusion"], popular: true },
    ],
    fastfood: [
      { name: "Gourmet Burgers", description: "Beef or chicken burgers with fries", image: "/gourmet-burger-fries.png", dietary: ["Fast Food"], popular: true },
    ],
    // ... rest of categories
    monthly: [
      { name: "Monthly Menu PDF", description: "Download our full monthly catering menu", image: "/monthly-menu.png", dietary: ["All"], popular: true },
    ],
  }

  const whatsappLink = "https://wa.me/923226812281"

  const openWhatsApp = (message?: string) => {
    const url = message ? `${whatsappLink}?text=${encodeURIComponent(message)}` : whatsappLink
    window.open(url, "_blank")
  }

  const items: MenuItem[] = menuItems[activeCategory] ?? []

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)] text-primary">
            Our Diverse Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our menus from fast food to live BBQ, desserts to Pakistani specials. Contact us for custom catering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animate-delay-200">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveCategory(category.id)}
              className={`text-lg px-6 py-3 hover-lift whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}

          {/* Monthly Menu Button */}
          <Button
            size="lg"
            className="text-lg px-6 py-3 bg-secondary text-white hover:bg-yellow-500 hover:text-white transition-all shadow-md"
            onClick={() => window.open("/monthly-menu.pdf", "_blank")}
          >
            📄 Monthly Menu
          </Button>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={item.name} className="group hover-lift animate-scale-in border-border bg-card overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-[var(--font-space-grotesk)] group-hover:text-primary transition-colors duration-300">{item.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.dietary.map((diet) => (
                    <Badge key={diet} variant="outline" className="text-xs border-primary/20 text-primary">{diet}</Badge>
                  ))}
                </div>

                {/* Button */}
                {activeCategory === "monthly" ? (
                  <Button
                    size="sm"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white transition-all"
                    onClick={() => window.open("/monthly-menu.pdf", "_blank")}
                  >
                    View PDF
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all"
                    onClick={() => openWhatsApp(`Hello, I would like to order "${item.name}". Please share price & availability.`)}
                  >
                    Contact on WhatsApp
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
