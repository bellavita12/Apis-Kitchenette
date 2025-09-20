"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with subtle zoom/pan */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, x: 0, y: 0 }}
        animate={{ scale: 1.1, x: 10, y: 10 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <img
  src="/traditional-pakistani-catering-buffet-with-biryani-k.jpg"
  alt="Apis Kitchenette catering buffet"
  className="w-full h-full object-cover min-h-screen
             sm:border-0 border-8 border-black"
/>

        <div className="absolute inset-0 bg-black/20"></div> {/* subtle overlay to prevent grey edges */}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-white hidden sm:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Apis Kitchenette
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-2xl mb-10 text-white font-semibold hidden sm:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Luxury Catering Excellence
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center w-full px-4 hidden sm:flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="bg-white text-[#822527] hover:bg-[#822527] hover:text-white text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            onClick={() => window.open("https://wa.me/923226812281", "_blank")}
          >
            Call Now
          </Button>
          <Button
            size="lg"
            className="bg-[#ffffff80] text-[#822527] hover:bg-[#822527] hover:text-white text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            onClick={() =>
              window.open(
                "https://www.foodpanda.pk/restaurant/c724/apis-kitchenette",
                "_blank"
              )
            }
          >
            Order on Foodpanda
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
