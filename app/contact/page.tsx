"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:info@ruesafe.com" className="text-foreground/60 hover:text-accent transition-colors">
                    info@ruesafe.com
                  </a>
                  <br />
                  <a
                    href="mailto:support@ruesafe.com"
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    support@ruesafe.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+1234567890" className="text-foreground/60 hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Office</p>
                  <p className="text-foreground/60">
                    123 Tech Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Business Hours</p>
                  <p className="text-foreground/60">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-border h-96 glass">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 flex items-center justify-center">
              <img
                src="/placeholder.svg?key=map"
                alt="Office Location"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
