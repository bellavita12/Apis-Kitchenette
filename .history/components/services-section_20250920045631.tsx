"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Building2, Heart, Calendar, Factory, Award } from "lucide-react"
import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Corporate & Multinational Companies",
      description:
        "Serving leading companies across Lahore with professional catering solutions that keep your workforce satisfied.",
      features: ["Daily office meals", "Conference catering", "Executive dining", "Nutritious meal plans"],
      badge: "Corporate",
    },
    {
      icon: Heart,
      title: "Foundations & Charities",
      description:
        "Supporting noble causes with quality meals for charitable organizations, old age homes, and community foundations.",
      features: ["Sundus Foundation", "Old Age Homes", "Synergy Care", "Riaz Mansoor Trust"],
      badge: "Charitable",
    },
    {
      icon: Factory,
      title: "Factory & Industrial Catering",
      description:
        "Daily meal services for 2,000–5,000 employees, ensuring your workforce stays energized and productive.",
      features: ["Daily employee meals", "Shift-based service", "Bulk meal preparation", "Nutritional balance"],
      badge: "Industrial",
    },
    {
      icon: Calendar,
      title: "Events & Celebrations",
      description:
        "From weddings to community events, we bring exceptional catering to your special occasions with professional service.",
      features: ["Wedding catering", "Family gatherings", "Community events", "Party celebrations"],
      badge: "Events",
    },
    {
      icon: Users,
      title: "Small to Large Groups",
      description:
        "Flexible capacity from intimate gatherings of 50-200 people to massive events serving 1000-5000+ guests.",
      features: [
        "Small groups (10-200)",
        "Medium events (200-1000)",
        "Large gatherings (1000-5000+)",
        "Custom scaling",
      ],
      badge: "Flexible",
    },
    {
      icon: Award,
      title: "Fresh & Hygienic Service",
      description:
        "Our commitment to quality ensures every meal is fresh, hygienic, and delivered on time, every time.",
      features: ["Fresh ingredients daily", "Strict hygiene standards", "On-time delivery", "Quality assurance"],
      badge: "Premium Quality",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
    }),
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)] text-[#822527]">
            Our Expertise & Capacity
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Since 2016, Apis Kitchenette has specialized in large-scale catering services. We take pride in serving
            nutritious and delicious meals to thousands of people daily across various sectors.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge className="text-lg px-4 py-2 bg-[#F3992C]/10 text-[#F3992C] border-[#F3992C]/20">
              ✅ 5000+ People Capacity
            </Badge>
            <Badge className="text-lg px-4 py-2 bg-[#F3992C]/10 text-[#F3992C] border-[#F3992C]/20">
              ✅ Corporate & Charitable Events
            </Badge>
            <Badge className="text-lg px-4 py-2 bg-[#F3992C]/10 text-[#F3992C] border-[#F3992C]/20">
              ✅ Fresh, Hygienic & On-Time
            </Badge>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="group hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 border-border bg-white overflow-hidden h-full flex flex-col">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-[#F3992C]/10 rounded-lg group-hover:bg-[#F3992C]/20 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-[#F3992C]" />
                    </div>
                    <Badge className="bg-[#822527]/10 text-[#822527] hover:bg-[#822527]/20 transition-colors duration-300">
                      {service.badge}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 font-[var(--font-space-grotesk)] group-hover:text-[#822527] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{service.description}</p>

                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-[#F3992C] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
