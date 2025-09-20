import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-[var(--font-space-grotesk)] text-primary">Elite Catering</h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Creating exceptional culinary experiences for over 15 years. From intimate gatherings to grand
              celebrations, we make every event memorable.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-[var(--font-space-grotesk)]">Our Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Wedding Catering
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Private Parties
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Special Events
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Menu Customization
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-[var(--font-space-grotesk)]">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="#home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-[var(--font-space-grotesk)]">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                <span>(555) 123-CATER</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                <span>info@elitecatering.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  123 Culinary Avenue
                  <br />
                  Gourmet District, GD 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">© 2024 Elite Catering. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-background/60">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
