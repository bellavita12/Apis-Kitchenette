"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/traditional-pakistani-catering-buffet-with-biryani-k.jpg"
          alt="Apis Kitchenette catering buffet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Apis <span className="text-yellow-400">Kitchenette</span>
        </motion.h1>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/923226812281", "_blank")}
          >
            Call Now
          </Button>
          <Button
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() =>
              window.open("https://www.foodpanda.pk/restaurant/c724/apis-kitchenette", "_blank")
            }
          >
            Order on Foodpanda
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
