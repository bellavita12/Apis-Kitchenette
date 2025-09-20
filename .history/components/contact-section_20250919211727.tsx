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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
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
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold font-[var(--font-space-grotesk)]">Call Us</h3>
                </div>
                <p className="text-muted-foreground mb-2">Ready to discuss your event?</p>
                <p className="text-2xl font-bold text-primary">(555) 123-CATER</p>
                <p className="text-sm text-muted-foreground mt-1">Available 7 days a week</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold font-[var(--font-space-grotesk)]">Email Us</h3>
                </div>
                <p className="text-muted-foreground mb-2">Prefer to write? Send us an email:</p>
                <p className="text-lg font-semibold">info@elitecatering.com</p>
                <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold font-[var(--font-space-grotesk)]">Visit Us</h3>
                </div>
                <p className="text-muted-foreground mb-2">Come see our kitchen and meet our team:</p>
                <p className="font-medium">123 Culinary Avenue</p>
                <p className="font-medium">Gourmet District, GD 12345</p>
                <p className="text-sm text-muted-foreground mt-1">By appointment only</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold font-[var(--font-space-grotesk)]">Business Hours</h3>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
