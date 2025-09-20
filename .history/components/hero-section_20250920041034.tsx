"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center bg-gray-50"
    >
      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Welcome to <span className="text-primary">API’s Kitchenette</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Delicious catering for all your events – crafted with love & flavor.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-full shadow-xl"
              onClick={() => window.open("https://wa.me/923226812281", "_blank")}
            >
              Call Now
            </Button>

            <Button
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-4 rounded-full shadow-xl"
              onClick={() =>
                window.open(
                  "https://www.foodpanda.pk/restaurant/c724/apis-kitchenette",
                  "_blank"
                )
              }
            >
              Order on Foodpanda
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/hero-bg.jpg"
            alt="API’s Kitchenette"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
