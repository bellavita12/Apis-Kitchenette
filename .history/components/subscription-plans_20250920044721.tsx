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
  const themePrimary = "#822527"
  const themeYellow = "#F3992C"

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, type: "spring" },
    }),
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: themePrimary }}>
            Subscription Plans
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose the perfect plan for your catering needs. All plans include our signature quality and service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2, transition: { duration: 0.3 } }}
            >
              <Card
                className={`relative flex flex-col justify-between h-full shadow-lg border-2`}
                style={{ borderColor: plan.popular ? themeYellow : themePrimary }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className="px-4 py-1 rounded-full text-sm font-semibold"
                      style={{ backgroundColor: themeYellow, color: "#fff" }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold" style={{ color: themePrimary }}>
                      {plan.name}
                    </CardTitle>
                    {plan.price && (
                      <div className="text-3xl font-bold mb-2" style={{ color: themePrimary }}>
                        {plan.price}
                      </div>
                    )}
                    <CardDescription className="text-base text-gray-700">{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="h-5 w-5" style={{ color: themeYellow }} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <div className="p-6 mt-auto">
                    <Button
                      onClick={() => openWhatsApp(plan.name)}
                      size="lg"
                      className="w-full text-white"
                      style={{ backgroundColor: plan.popular ? themeYellow : themePrimary }}
                    >
                      Choose {plan.name}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 mb-4">
            Need a custom plan? We cater to groups from 5 to 5000+ people.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="hover:scale-105"
            style={{ borderColor: themePrimary, color: themePrimary, backgroundColor: "#fff" }}
            onClick={() => openWhatsApp("Custom Plan")}
          >
            Contact Us for Custom Pricing
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
