import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { MenuSection } from "@/components/menu-section"
import { SubscriptionPlans } from "@/components/subscription-plans"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MenuSection />
      <SubscriptionPlans />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
