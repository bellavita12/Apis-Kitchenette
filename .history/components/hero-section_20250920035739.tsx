"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="pt-20">
      <motion.div
        className="h-[200px] w-[300px] bg-red-500 mx-auto flex items-center justify-center rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Test Motion Box
      </motion.div>
    </section>
  )
}
