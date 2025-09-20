"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-center px-4"
    >
      {/* Logo in circle */}
      <div className="flex justify-center mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg bg-white">
          <img src="/logo.png" alt="Apis Kitchenette Logo" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Stars + Since text */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="ml-2 text-sm font-medium text-gray-700">Serving Since 2016</span>
      </div>

      {/* Tagline */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[var(--font-space-grotesk)]">
        Apis Kitchenette
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        Nutritious & Delicious Catering – Always On Time, Always Fresh
      </p>

      {/* Contact Button (WhatsApp) */}
      <Button
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full shadow-md"
        onClick={() => window.open("https://wa.me/923226812281", "_blank")}
      >
        Contact Us on WhatsApp
      </Button>
    </section>
  )
}
