"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card dark:bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">R</span>
              </div>
              <span className="font-bold text-xl">Ruesafe</span>
            </Link>
            <p className="text-foreground/60 text-sm">
              Building digital solutions that transform businesses and drive growth.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="text-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/erp-solutions"
                  className="text-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  ERP Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="text-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/payment-gateway"
                  className="text-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  Payment Gateway
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@ruesafe.com"
                  className="text-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  info@ruesafe.com
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/60 text-sm">New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">© {currentYear} Ruesafe. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
