"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Building2, Heart, Calendar, Factory, Award } from "lucide-react"

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

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)] text-balance">
            Our Expertise & Capacity
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Since 2016, Apis Kitchenette has specialized in large-scale catering services. We take pride in serving
            nutritious and delicious meals to thousands of people daily across various sectors.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="outline" className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20">
              ✅ 5000+ People Capacity
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20">
              ✅ Corporate & Charitable Events
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20">
              ✅ Fresh, Hygienic & On-Time
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                    {service.badge}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-3 font-[var(--font-space-grotesk)] group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
