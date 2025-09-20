"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Single Person Weekly",
    price: "PKR 2800",
    description: "Perfect for individuals who want hygienic home-style meals for the whole week",
    features: [
      "7 meals for 1 person",
      "Customizable menu options",
      "Free delivery",
      "Hygienic packaging",
    ],
    popular: false,
  },
  {
    name: "Daily Plan",
    description: "Perfect for small offices and daily events",
    features: [
      "Fresh meals prepared daily",
      "5 – 5000 people",
      "Basic menu options",
      "On-time delivery",
      "Hygienic packaging",
    ],
    popular: false,
  },
  {
    name: "Weekly Plan",
    description: "Ideal for corporate offices and regular events",
    features: [
      "7-day meal planning",
      "Variety in daily menus",
      "5 – 5000 people",
      "Priority delivery",
      "Dedicated support",
      "Custom dietary options",
    ],
    popular: true,
  },
  {
    name: "Monthly Plan",
    description: "Best value for large organizations and institutions",
    features: [
      "30-day comprehensive planning",
      "Maximum variety & customization",
      "Bulk pricing benefits",
      "Dedicated account manager",
      "Flexible menu changes",
      "Special event catering included",
      "Priority booking",
    ],
    popular: false,
  },
]

// 👇 helper for WhatsApp
const openWhatsApp = (planName: string) => {
  const message = encodeURIComponent(
    `Hello Apis Kitchenette, I am interested in the ${planName}. Can you share more details?`
  )
  const phone = "923001234567" // 👉 replace with your WhatsApp number (no +, just country code + number)
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
}

export function SubscriptionPlans() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-4">Subscription Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your catering needs. All plans include our signature quality and service.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col justify-between hover-lift animate-scale-in animate-delay-${(index + 1) * 200} ${
                plan.popular ? "border-secondary border-2 shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-primary">{plan.name}</CardTitle>
                  {plan.price && <div className="text-3xl font-bold text-secondary mb-2">{plan.price}</div>}
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              {/* Button always aligned bottom */}
              <div className="p-6 mt-auto">
                <Button
                  onClick={() => openWhatsApp(plan.name)}
                  className={`w-full hover-glow ${
                    plan.popular
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  Choose {plan.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animate-delay-600">
          <p className="text-muted-foreground mb-4">Need a custom plan? We cater to groups from 5 to 5000+ people.</p>
          <Button
            variant="outline"
            size="lg"
            className="hover-lift bg-transparent"
            onClick={() => openWhatsApp("Custom Plan")}
          >
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
