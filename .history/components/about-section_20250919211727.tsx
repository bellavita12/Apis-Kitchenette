"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  const stats = [
    {
      icon: Calendar,
      number: "2016",
      label: "Established",
      description: "Years of trusted service",
    },
    {
      icon: Users,
      number: "5000+",
      label: "Daily Capacity",
      description: "People served at once",
    },
    {
      icon: Award,
      number: "100%",
      label: "Fresh & Hygienic",
      description: "Quality guarantee",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "On-Time Service",
      description: "Reliable delivery",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)] text-balance">
            About Apis Kitchenette
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Established in 2016, Apis Kitchenette specializes in large-scale catering services. We take pride in serving
            nutritious and delicious meals to thousands of people daily across corporate offices, charities,
            foundations, and special events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="font-semibold mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-6 font-[var(--font-space-grotesk)]">Who We Serve</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">Foundations & Charities</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sundus Foundation</li>
                  <li>• Old Age Homes</li>
                  <li>• Synergy Care</li>
                  <li>• Riaz Mansoor Trust</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">Corporate & Multinational Companies</h4>
                <p className="text-muted-foreground">Leading companies across Lahore, Karachi, and Islamabad</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">Factories & Events</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Daily meals for 2,000–3,000 employees</li>
                  <li>• Weddings and family gatherings</li>
                  <li>• Community events and celebrations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <img
              src="/professional-kitchen-staff-preparing-large-quantit.jpg"
              alt="Apis Kitchenette kitchen operations"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
