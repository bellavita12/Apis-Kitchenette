"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Uzair & Huma",
      event: "Wedding Reception - 150 Guests",
      rating: 5,
      text: "Apis Kitchenette made our wedding day absolutely perfect! The food was exceptional, the presentation was stunning, and the service was flawless. Our guests are still talking about how amazing everything was. Thank you for making our special day unforgettable!",
      image: "/placeholder-4vtv6.png",
    },
    {
      name: "Zeeshan Hassan",
      event: "Corporate Annual Gala - 300 Guests",
      rating: 5,
      text: "We've worked with Apis Kitchenette for three consecutive years for our annual gala, and they never disappoint. Their professionalism, attention to detail, and culinary excellence consistently exceed our expectations. Highly recommended for any corporate event.",
      image: "/professional-businessman-headshot.png",
    },
    {
      name: "Robina Azhar",
      event: "Birthday Celebration - 50 Guests",
      rating: 5,
      text: "From the initial consultation to the final cleanup, Apis Kitchenette was absolutely wonderful. They accommodated all our dietary restrictions and created a menu that was both delicious and beautiful. The staff was courteous and professional throughout the entire event.",
      image: "/smiling-woman-professional-headshot.jpg",
    },
  ]

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }
  const scaleUp = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }

  const themeColor = "#822527"

  return (
    <section id="testimonials" className="py-20 bg-white">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)]" style={{ color: themeColor }}>
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
          Apis Kitchenette.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Testimonial */}
        <motion.div initial="hidden" animate="visible" variants={scaleUp}>
          <Card className="bg-white border border-gray-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-12 h-12" style={{ color: themeColor + "40" }} />
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl leading-relaxed mb-6 italic text-gray-800">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg font-[var(--font-space-grotesk)]" style={{ color: themeColor }}>
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-700">{testimonials[currentIndex].event}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-transparent border border-gray-300"
              style={{ color: themeColor }}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </motion.div>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300`}
                style={{ backgroundColor: index === currentIndex ? themeColor : "#ddd" }}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-transparent border border-gray-300"
              style={{ color: themeColor }}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        {[
          { number: "500+", label: "Events Catered" },
          { number: "50,000+", label: "Guests Served" },
          { number: "15+", label: "Years Experience" },
          { number: "98%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="text-3xl md:text-4xl font-bold font-[var(--font-space-grotesk)] mb-2"
              style={{ color: themeColor }}
            >
              {stat.number}
            </div>
            <div className="text-gray-700 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
