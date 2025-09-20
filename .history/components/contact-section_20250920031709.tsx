"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

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

  const whatsappNumber = "923226812281" // ✅ Your WhatsApp number without + or leading 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // ✅ Prepare WhatsApp message
    const whatsappMessage = `
📋 New Catering Inquiry:
----------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || "N/A"}
📅 Event Date: ${formData.eventDate || "Not specified"}
🎉 Event Type: ${formData.eventType || "Not specified"}
👥 Guest Count: ${formData.guestCount || "Not specified"}
📝 Message: ${formData.message || "No additional notes"}
    `

    // ✅ Encode and redirect to WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappLink, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)] text-balance">
            Let's Plan Your Perfect Event
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to create an unforgettable culinary experience? Get in touch with us today for a free consultation and
            custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl font-[var(--font-space-grotesk)]">Get Your Free Quote</CardTitle>
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
                      className="mt-1"
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
                      className="mt-1"
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
                      className="mt-1"
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
                      className="mt-1"
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
                      className="mt-1"
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
                      className="mt-1"
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
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="w-5 h-5 mr-2" />
                  Send Inquiry via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Side Info (same as before) */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Keep your call/email/location/hours cards */}
          </div>
        </div>
      </div>
    </section>
  )
}
