"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("pakistani")

  const categories = [
    { id: "pakistani", name: "Pakistani Specials", icon: "🍛" },
    { id: "asian", name: "Asian Cuisines", icon: "🥢" },
    { id: "fastfood", name: "Fast Food & Snacks", icon: "🍔" },
    { id: "bbq", name: "Live BBQ & Cooking", icon: "🔥" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "daigs", name: "Daigs & Events", icon: "🍲" },
  ]

  const menuItems = {
    pakistani: [
      {
        name: "Chicken Karahi",
        description: "Traditional Pakistani chicken karahi with fresh tomatoes, ginger, and aromatic spices",
        price: "From PKR 200 per person",
        image: "/placeholder-3gtoe.png",
        dietary: ["Halal", "Spicy"],
        popular: true,
      },
      {
        name: "Mutton Biryani",
        description: "Fragrant basmati rice layered with tender mutton and traditional spices",
        price: "From PKR 350 per person",
        image: "/placeholder-bs6pn.png",
        dietary: ["Halal", "Premium"],
      },
      {
        name: "Daal Chawal",
        description: "Comfort food combination of lentil curry with steamed basmati rice",
        price: "From PKR 120 per person",
        image: "/placeholder-f5td4.png",
        dietary: ["Vegetarian", "Healthy"],
      },
    ],
    asian: [
      {
        name: "Chinese Fried Rice",
        description: "Wok-tossed rice with vegetables, eggs, and choice of chicken or beef",
        price: "From PKR 180 per person",
        image: "/placeholder-qfxub.png",
        dietary: ["Asian Fusion"],
        popular: true,
      },
      {
        name: "Thai Curry",
        description: "Aromatic coconut curry with vegetables and your choice of protein",
        price: "From PKR 250 per person",
        image: "/placeholder-2ad5d.png",
        dietary: ["Spicy", "Coconut"],
      },
      {
        name: "Japanese Teriyaki",
        description: "Grilled chicken or beef glazed with homemade teriyaki sauce",
        price: "From PKR 280 per person",
        image: "/placeholder-wn975.png",
        dietary: ["Grilled", "Sweet & Savory"],
      },
    ],
    fastfood: [
      {
        name: "Gourmet Burgers",
        description: "Juicy beef or chicken burgers with fresh toppings and crispy fries",
        price: "From PKR 150 per person",
        image: "/gourmet-burger-fries.png",
        dietary: ["Fast Food"],
        popular: true,
      },
      {
        name: "Crispy Chicken Wings",
        description: "Golden fried chicken wings with variety of sauces and dips",
        price: "From PKR 120 per person",
        image: "/placeholder-wbfwy.png",
        dietary: ["Fried", "Spicy Options"],
      },
      {
        name: "Loaded Nachos",
        description: "Crispy tortilla chips loaded with cheese, jalapeños, and toppings",
        price: "From PKR 100 per person",
        image: "/loaded-nachos.png",
        dietary: ["Vegetarian Option", "Shareable"],
      },
    ],
    bbq: [
      {
        name: "Live BBQ Station",
        description: "Fresh grilled kebabs, tikkas, and steaks prepared live at your event",
        price: "From PKR 400 per person",
        image: "/placeholder-85984.png",
        dietary: ["Halal", "Fresh Grilled"],
        popular: true,
      },
      {
        name: "Seekh Kebab Platter",
        description: "Handmade seekh kebabs grilled to perfection with naan and chutney",
        price: "From PKR 300 per person",
        image: "/placeholder-c91yg.png",
        dietary: ["Halal", "Traditional"],
      },
      {
        name: "Mixed Grill Station",
        description: "Variety of grilled meats including chicken tikka, beef boti, and lamb chops",
        price: "From PKR 450 per person",
        image: "/placeholder-x70my.png",
        dietary: ["Halal", "Premium"],
      },
    ],
    desserts: [
      {
        name: "Gulab Jamun",
        description: "Traditional Pakistani sweet dumplings in rose-flavored syrup",
        price: "From PKR 80 per person",
        image: "/placeholder-yeqbq.png",
        dietary: ["Vegetarian", "Traditional"],
        popular: true,
      },
      {
        name: "Kheer & Rice Pudding",
        description: "Creamy rice pudding with cardamom, nuts, and rose petals",
        price: "From PKR 70 per person",
        image: "/placeholder-6yjkl.png",
        dietary: ["Vegetarian", "Creamy"],
      },
      {
        name: "Fresh Fruit Platter",
        description: "Seasonal fresh fruits beautifully arranged for healthy dessert option",
        price: "From PKR 60 per person",
        image: "/placeholder-ttdpv.png",
        dietary: ["Healthy", "Fresh"],
      },
    ],
    daigs: [
      {
        name: "Wedding Daig Service",
        description: "Traditional large-scale cooking in daigs for weddings and celebrations",
        price: "From PKR 250 per person",
        image: "/placeholder-crhfh.png",
        dietary: ["Traditional", "Bulk Cooking"],
        popular: true,
      },
      {
        name: "Islamic Event Catering",
        description: "Special arrangements for Eid, Ramadan Iftars, and religious gatherings",
        price: "From PKR 200 per person",
        image: "/placeholder-02v9t.png",
        dietary: ["Halal", "Religious Events"],
      },
      {
        name: "Community Feast Daigs",
        description: "Large daig preparations for community events and charity functions",
        price: "From PKR 180 per person",
        image: "/placeholder.svg?height=200&width=300",
        dietary: ["Community", "Charitable"],
      },
    ],
  }

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)] text-balance text-primary">
            Our Diverse Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From fast food to snacks, desserts to live BBQ cooking stations, Asian cuisines to Pakistani special
            cuisines. We also provide daigs for different Islamic or any events according to your need and budget.
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
              className={`text-lg px-6 py-3 hover-lift ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <Card
              key={item.name}
              className="group hover-lift animate-scale-in border-border bg-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground animate-bounce-in">
                    Popular Choice
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-[var(--font-space-grotesk)] group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.dietary.map((diet) => (
                    <Badge key={diet} variant="outline" className="text-xs border-primary/20 text-primary">
                      {diet}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-secondary">{item.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animate-delay-400">
          <p className="text-muted-foreground mb-4">
            Need custom menu planning? We create personalized menus for any event size and budget.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-glow">
            Contact Us for Custom Menu Planning
          </Button>
        </div>
      </div>
    </section>
  )
}
