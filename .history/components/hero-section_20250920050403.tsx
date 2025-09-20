"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function NavigationHero() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight - 80
      setScrolled(window.scrollY > heroHeight)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  const openWhatsApp = () => window.open("https://wa.me/923226812281", "_blank")

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="#home"
              className={`text-2xl font-bold font-[var(--font-space-grotesk)] transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              Apis Kitchenette
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className={`${
                  scrolled
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-white text-primary hover:bg-gray-100"
                }`}
                onClick={openWhatsApp}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile */}
            <button
              className={`md:hidden p-2 ${scrolled ? "text-gray-800" : "text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isOpen && (
            <div
              className={`md:hidden border-t animate-fade-in-up ${
                scrolled ? "bg-white text-gray-800" : "bg-primary text-white"
              }`}
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block hover:text-yellow-200 transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className={`w-full ${
                    scrolled
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-white text-primary hover:bg-gray-100"
                  }`}
                  onClick={openWhatsApp}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/traditional-pakistani-catering-buffet-with-biryani-k.jpg"
            alt="Apis Kitchenette catering buffet"
            className="w-full h-full object-cover"
          />
          {/* Optional overlay for small fade: change opacity to maintain white text visibility */}
          <div className="absolute inset-0 bg-black/0 md:bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 hidden sm:block text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Apis Kitchenette
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-2xl mb-10 hidden sm:block text-white font-semibold"
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
              className="bg-[#822527] hover:bg-[#661f21] text-white text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={openWhatsApp}
            >
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#822527] text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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
    </>
  )
}
