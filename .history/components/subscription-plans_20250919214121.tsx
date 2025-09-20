"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Daily Plan",
    price: "Starting from PKR 300",
    description: "Perfect for small offices and daily events",
    features: [
      "Fresh meals prepared daily",
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
      "Minimum 100 people",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative hover-lift animate-scale-in animate-delay-${(index + 1) * 200} ${
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

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-primary">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-secondary mb-2">{plan.price}</div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full hover-glow ${
                    plan.popular
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animate-delay-600">
          <p className="text-muted-foreground mb-4">Need a custom plan? We cater to groups from 50 to 5000+ people.</p>
          <Button variant="outline" size="lg" className="hover-lift bg-transparent">
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
