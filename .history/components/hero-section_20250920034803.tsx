"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Call Button at Bottom */}
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
