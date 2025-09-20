"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

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

const openWhatsApp = (planName: string) => {
  const message = encodeURIComponent(
    `Hello Apis Kitchenette, I am interested in the ${planName}. Can you share more details?`
  )
  const phone = "923226812281"
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
}

export function SubscriptionPlans() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-[#822527] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Subscription Plans
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Choose the perfect plan for your catering needs. All plans include our signature quality and service.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card
                className={`relative flex flex-col justify-between w-full hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 transition-transform duration-300 ${
                  plan.popular ? "border-2 border-[#822527] shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#822527] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-[#822527]">{plan.name}</CardTitle>
                    {plan.price && <div className="text-3xl font-bold text-[#F3992C] mb-2">{plan.price}</div>}
                    <CardDescription className="text-gray-700">{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-[#F3992C] flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <div className="p-6 mt-auto">
                  <Button
                    onClick={() => openWhatsApp(plan.name)}
                    className={`w-full transition-colors duration-300 ${
                      plan.popular
                        ? "bg-[#822527] text-white hover:bg-[#F3992C]"
                        : "bg-[#822527] text-white hover:bg-[#F3992C]"
                    }`}
                    size="lg"
                  >
                    Choose {plan.name}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-700 mb-4">Need a custom plan? We cater to groups from 5 to 5000+ people.</p>
          <Button
            size="lg"
            onClick={() => openWhatsApp("Custom Plan")}
            className="border-2 border-[#822527] text-[#822527] bg-white transition-colors duration-300 hover:bg-[#F3992C] hover:text-white"
          >
            Contact Us for Custom Pricing
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
