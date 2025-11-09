"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites built with latest technologies to engage your audience and drive conversions.",
    href: "/services/web-development",
    features: ["Responsive Design", "SEO Optimized", "High Performance", "Modern Stack"],
    image: "/modern-tech-office.png",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
    href: "/services/app-development",
    features: ["iOS & Android", "Cross-platform", "User Friendly", "Native Performance"],
    image: "/placeholder.jpg",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to boost your online presence, drive growth, and maximize ROI.",
    href: "/services/digital-marketing",
    features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    image: "/placeholder.jpg",
    gradient: "from-pink-500/20 to-orange-500/10",
  },
  {
    title: "ERP Solutions",
    description: "Integrate and streamline your business processes with custom ERP systems designed for scale.",
    href: "/services/erp-solutions",
    features: ["Enterprise Ready", "Scalable", "Secure", "Real-time Analytics"],
    image: "/placeholder.jpg",
    gradient: "from-green-500/20 to-emerald-500/10",
  },
  {
    title: "Software Development",
    description: "Tailored software solutions designed to solve complex business challenges and drive innovation.",
    href: "/services/software-development",
    features: ["Custom Built", "Scalable", "Maintainable", "Cloud Native"],
    image: "/modern-tech-office.png",
    gradient: "from-orange-500/20 to-red-500/10",
  },
  {
    title: "Payment Gateway",
    description: "Secure payment processing integrated seamlessly into your platform with global payment support.",
    href: "/services/payment-gateway",
    features: ["Secure", "Fast", "Reliable", "Multi-currency"],
    image: "/placeholder.jpg",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="stars-background" />
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-aurora" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob-rotate" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            <span 
              style={{
                background: "linear-gradient(135deg, oklch(0.98 0 0) 0%, oklch(0.75 0.2 150) 50%, oklch(0.98 0 0) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth. 
            We don't do one-size-fits-all. Our solutions combine industry expertise with cutting-edge capabilities.
          </p>
        </div>
      </section>

      {/* Services Grid - Globant Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link 
                key={service.href} 
                href={service.href} 
                className="group"
              >
                <div
                  className="relative h-full rounded-2xl border border-border hover:border-accent/50 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Section */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={feature} 
                          className="flex items-center gap-2 text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4 border-t border-border">
                      <span className="text-sm font-semibold">Explore Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals and drive innovation.
              </p>
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.75 0.2 150) 0%, oklch(0.65 0.25 150) 100%)",
                    boxShadow: "0 0 20px oklch(0.75 0.2 150 / 0.4)",
                  }}
                >
                  <span className="text-accent-foreground">Get Started</span>
                  <ArrowRight className="w-5 h-5 text-accent-foreground" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
