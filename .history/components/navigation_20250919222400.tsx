"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-primary/70"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className={`text-2xl font-bold font-[var(--font-space-grotesk)] ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Apis Kitchenette
          </Link>

          {/* Desktop Navigation */}
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
              onClick={() => window.open("https://wa.me/923226812281", "_blank")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${scrolled ? "text-gray-800" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
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
                onClick={() => window.open("https://wa.me/923226812281", "_blank")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
