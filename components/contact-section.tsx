"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Send } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `
New Catering Inquiry:
-------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Event Type: ${formData.eventType}
Guests: ${formData.guestCount}
Message: ${formData.message}
    `

    const phoneNumber = "923226812281"
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappURL, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)] text-[#822527]">
            Let's Plan Your Perfect Event
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to create an unforgettable culinary experience? Fill out the form below or reach us directly.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl font-[var(--font-space-grotesk)] text-center text-[#822527]">
                Get Your Free Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 border-[#822527]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 border-[#822527]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 border-[#822527]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="mt-1 border-[#822527]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
                    <Input
                      id="eventType"
                      name="eventType"
                      placeholder="Wedding, Corporate, Birthday, etc."
                      value={formData.eventType}
                      onChange={handleChange}
                      className="mt-1 border-[#822527]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guestCount">Number of Guests</Label>
                    <Input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      placeholder="50"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="mt-1 border-[#822527]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your event</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please share any specific requirements, dietary restrictions, or special requests..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 border-[#822527]"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 120 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#822527] hover:bg-[#6e1f21] text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send via WhatsApp
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Phone, title: "Call Us", desc: "Ready to discuss your event?", value: "+92 322 6812281", small: "Available 7 days a week" },
            { icon: Mail, title: "Email Us", desc: "Prefer to write? Send us an email:", value: "apiskitchenette@gmail.com", small: "We respond within 24 hours" },
          ].map((info, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <info.icon className="w-6 h-6 text-[#822527] mr-3" />
                    <h3 className="text-xl font-bold font-[var(--font-space-grotesk)]">{info.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-2">{info.desc}</p>
                  <p className="text-2xl font-bold text-[#822527]">{info.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{info.small}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
