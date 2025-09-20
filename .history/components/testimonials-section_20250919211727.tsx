"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      event: "Wedding Reception - 150 Guests",
      rating: 5,
      text: "Elite Catering made our wedding day absolutely perfect! The food was exceptional, the presentation was stunning, and the service was flawless. Our guests are still talking about how amazing everything was. Thank you for making our special day unforgettable!",
      image: "/placeholder-4vtv6.png",
    },
    {
      name: "David Chen",
      event: "Corporate Annual Gala - 300 Guests",
      rating: 5,
      text: "We've worked with Elite Catering for three consecutive years for our annual gala, and they never disappoint. Their professionalism, attention to detail, and culinary excellence consistently exceed our expectations. Highly recommended for any corporate event.",
      image: "/professional-businessman-headshot.png",
    },
    {
      name: "Maria Rodriguez",
      event: "Birthday Celebration - 50 Guests",
      rating: 5,
      text: "From the initial consultation to the final cleanup, Elite Catering was absolutely wonderful. They accommodated all our dietary restrictions and created a menu that was both delicious and beautiful. The staff was courteous and professional throughout the entire event.",
      image: "/smiling-woman-professional-headshot.jpg",
    },
    {
      name: "Robert & Linda Thompson",
      event: "50th Anniversary Party - 80 Guests",
      rating: 5,
      text: "Elite Catering helped us celebrate our golden anniversary in style! The food was restaurant-quality, the service was impeccable, and they handled every detail so we could focus on enjoying our special day with family and friends. Simply outstanding!",
      image: "/placeholder-69as7.png",
    },
    {
      name: "Jennifer Walsh",
      event: "Charity Fundraiser - 200 Guests",
      rating: 5,
      text: "Working with Elite Catering for our charity fundraiser was a dream come true. They not only provided exceptional food and service but also helped us stay within budget while maximizing the impact of our event. True professionals who care about their clients' success.",
      image: "/professional-woman-nonprofit-director-headshot.jpg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)] text-balance">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            Elite Catering.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="bg-card border-border shadow-xl animate-fade-in-up animate-delay-200">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-12 h-12 text-primary/20" />
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg font-[var(--font-space-grotesk)]">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].event}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up animate-delay-400">
          {[
            { number: "500+", label: "Events Catered" },
            { number: "50,000+", label: "Guests Served" },
            { number: "15+", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-[var(--font-space-grotesk)] mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
