"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/placeholder-fat63.png" alt="Elegant catering setup" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-4 animate-delay-100">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium">Serving Since 2016</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[var(--font-space-grotesk)] animate-delay-200">
            <span className="text-primary">Apis Kitchenette</span>
            <span className="block text-white">Large-Scale Catering Excellence</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-delay-300">
            Specializing in nutritious and delicious meals for thousands daily. From corporate offices to charitable
            foundations, we deliver fresh, hygienic, and on-time service with the capacity to cater 5000+ people at
            once.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-400">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
              View Our Capacity
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4 bg-transparent"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
