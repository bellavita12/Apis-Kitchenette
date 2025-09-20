"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-bg.jpg" alt="Elegant catering setup" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-[var(--font-space-grotesk)]">
          Apis Kitchenette
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-200">
          Fresh, Hygienic & On-Time Catering for Offices, Factories, and Events
        </p>

        {/* WhatsApp Contact Button */}
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full shadow-md"
          onClick={() => window.open("https://wa.me/923226812281", "_blank")}
        >
          Contact Us on WhatsApp
        </Button>
      </div>
    </section>
  )
}
