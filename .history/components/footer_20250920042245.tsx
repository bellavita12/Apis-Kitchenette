import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Contact Info */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-primary" />
              <span>+92 322 6812281</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-primary" />
              <span>apiskitchenette@gmail.com</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-background/60">
            © 2025 Apis Kitchenette. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
