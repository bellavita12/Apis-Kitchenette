"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="pt-20">
      <motion.div
        className="relative h-[70vh] max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Welcome to API’s Kitchenette
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mb-10 text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Delicious catering for all your events – crafted with love & flavor
          </motion.p>

          {/* Call Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 120 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-5 rounded-full shadow-xl"
              onClick={() => window.open("https://wa.me/923226812281", "_blank")}
            >
              Call Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
