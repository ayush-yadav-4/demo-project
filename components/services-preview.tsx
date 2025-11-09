"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites built with latest technologies to engage your audience.",
    href: "/services/web-development",
    color: "from-blue-500/20 to-blue-500/0",
    image: "/modern-tech-office.png",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    href: "/services/app-development",
    color: "from-purple-500/20 to-purple-500/0",
    image: "/placeholder.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to boost your online presence and drive growth.",
    href: "/services/digital-marketing",
    color: "from-pink-500/20 to-pink-500/0",
    image: "/placeholder.jpg",
  },
  {
    title: "ERP Solutions",
    description: "Integrate and streamline your business processes with custom ERP systems.",
    href: "/services/erp-solutions",
    color: "from-green-500/20 to-green-500/0",
    image: "/placeholder.jpg",
  },
  {
    title: "Software Development",
    description: "Tailored software solutions designed to solve complex business challenges.",
    href: "/services/software-development",
    color: "from-orange-500/20 to-orange-500/0",
    image: "/modern-tech-office.png",
  },
  {
    title: "Payment Gateway",
    description: "Secure payment processing integrated seamlessly into your platform.",
    href: "/services/payment-gateway",
    color: "from-cyan-500/20 to-cyan-500/0",
    image: "/placeholder.jpg",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-aurora" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive solutions to transform your business in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={service.href} href={service.href} className="group">
              <div
                className="relative h-full rounded-xl border border-border hover:border-accent/50 bg-card hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-slide-in-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>

                  <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Link href="/services">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
