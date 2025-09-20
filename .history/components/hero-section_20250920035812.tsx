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
        <img src="/hero-bg.jpg" alt="Catering setup" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content - Only Call Button at Bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-5 rounded-full shadow-xl"
          onClick={() => window.open("https://wa.me/923226812281", "_blank")}
        >
          Call Now
        </Button>
      </div>
    </section>
  )
}
